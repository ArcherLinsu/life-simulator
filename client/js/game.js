var server = {
    remote: "http://service.linsusu.cn/game/life-simulation",
    local: "http://localhost:7001/life-simulation"
}
var url = server.local;
//记录全局信息
var current = {
    script: {
        id: "",
        name: "",
        version: 1.0
    },
    talent: {
        canSelectNum: 3,
        pool: [],
        select: []
    },
    life: {
        content: [],
        index: 0
    }
}

//记录当前剧本信息
function recordScript() {
    current.script.id = urlParam("id")
    current.script.name = urlParam("name");
    current.script.version = urlParam("version")
}

//加载天赋卡池
function loadTalents() {
    recordScript()
    let data = {
        scriptName: current.script.id
    };
    $.ajax({
        url: url+"/talents",
        type: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(data),
        success: function (response) {
            //清空天赋列表
            $('#talents').empty();
            $.each(response.data.talents, function (index, talent) {
                if (talent != null) {
                    //记录卡池信息
                    current.talent.pool.push(talent)
                    //展示卡池
                    $('#talents').append(buildTalentNode(talent.name, talent.desc))
                }
            })
        }
    })
}

//记录选择的天赋
function recordSelectedTalents() {
    $("input[name='talent']:checked").each(function (index, checked) {
        current.talent.select.push(checked.id)
    })
    sessionStorage.setItem("currentInfo", JSON.stringify(current))
    $(location).attr("href", "game.html")
}

//加载人生
function loadLife() {
    current = JSON.parse(sessionStorage.getItem("currentInfo"))
    $('#script-name').text(current.script.name)
    $('#script-version').text(current.script.version)
    //重置下标
    current.life.index = 0
    //获取天赋详细数据
    let selectedTalent = [];
    $(current.talent.select).each(function (index, select) {
        $(current.talent.pool).each(function (index, talent) {
            if (select === talent.name) {
                selectedTalent.push(talent)
            }
        })
    })
    //获取人生记录
    let data = {
        scriptName: current.script.id,
        selectTalents: selectedTalent
    };
    $.ajax({
        url: url+"/lifeTexts",
        type: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(data),
        success: function (response) {
            current.life.content = response.data.lifeTexts
        }
    })
}

//防止点击过快
var canClick = true

//点击时，滚动展示人生记录
function showLifeText() {
    if (canClick) {
        canClick = false
        if (current.life.content[current.life.index] !== undefined) {
            if (current.life.content[current.life.index] === ""){
                alert("哎呀，剧本接下来就没了，请等待完善故事树")
            }else {
                $('#lifeTexts').append(buildLifeTextNode(current.life.content[current.life.index]))
                current.life.index++
            }
        }
        setTimeout(function () {
            canClick = true
        }, 100)
    }

}

function buildTalentNode(name, desc) {
    return "<li class='list-group-item'>\n" +
        "                            <div class='media'>\n" +
        "                                <div class='custom-control custom-checkbox todo-checkbox'>\n" +
        "                                    <input type='checkbox' class='custom-control-input' name='talent' id='" + name + "'>\n" +
        "                                    <label class='custom-control-label ' for='" + name + "'></label>\n" +
        "                                </div>\n" +
        "                                <div class='media-body'>\n" +
        "                                    <h6 class='my-0 text-truncated'>" + name + "</h6>\n" +
        "                                    <p class='small'>" + desc + "</p>\n" +
        "                                </div>\n" +
        "                                </button>\n" +
        "                            </div>\n" +
        "                        </li>" +
        ""
}

function buildLifeTextNode(text) {
    return "<li class='list-group-item '>\n" +
        "                        <div class='media'>\n" +
        "                            <div class='media-body w-auto no-arrow'>\n" + text + "</div>\n" +
        "                        </div>\n" +
        "                    </li>"
}


function urlParam(key) {
    let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    let result = window.location.search.substr(1).match(reg);
    if (result != null) return decodeURI(result[2]);
    return null;
}