# life-simulator

受[VickScarlet/lifeRestart: やり直すんだ。そして、次はうまくやる。 (github.com)](https://github.com/VickScarlet/lifeRestart)项目的启发，编写的一个可自定义剧本的文字版人生模拟器。

### 剧本编写指南

模板在`script/template`目录下。

一个剧本对应一个目录，互相独立，目录下必须具备如下结构：

- demo
  - config.json（配置剧本相关信息）
  - talent.json（编写天赋信息）
  - text.json（编写剧本内容）
  - text（名称自定义，可选，存放多个剧本）
  - talent（名称自定义，可选，存放多个剧本）

#### 人物属性说明

|     字段     |      说明      |  备注   |
| :----------: | :------------: | :-----: |
|     age      |    人物岁数    |         |
| constitution |      体质      |         |
| intelligence |      智力      |         |
|     luck     |      运气      |         |
|  appearance  |      容貌      |         |
|    power     |      权力      | 初始为0 |
|    wealth    |      财富      | 初始为0 |
|  currentId   | 当前所在时间点 | 初始为0 |
|    status    |      状态      |         |
|    talent    |      天赋      |         |

#### config.json（整体配置）

```
config.json
{
  "info": {
    //剧本名称
    "name": "示例剧本",
    //剧本作者
    "author": "林苏",
    //剧本版本
    "version": "1.0"
  },
  //在没有结束标识的情况下，最多生成几条人生记录
  "max-num": 50,
  //人生结束标识
  "end-status": "死亡",
  //天赋抽卡配置
  "talent": {
    //共抽取几次
    "total": 3,
    //可选择几条
    "select": 1,
    //概率组成
    "make": [
      {
        //最低级词条
        "level": 1,
        //概率：100%
        "probability": 100
      },
      {
        //中级词条
        "level": 2,
        //概率：30
        "probability": 30
      },
      {
        //高级词条
        "level": 3,
        //概率：10
        "probability": 10
      }
    ]
  }
}
```

#### talent.json（天赋编写）

1. 可以在本文件中设置所有天赋信息，为了清晰也可以单独建立一个文件夹分开编写。
2. 词条等级1、2、3递增，暂不可自定义；

```
talent.json
{
  //天赋信息所在目录，目录名称可自定义
  "dir": "talent",
  //文件名，可自定义，不必携带后缀
  "include": "talent-1，talent-2",
  //内容
  "content": [
    {
      //词条等级
      "level": 1,
      //词条名
      "name": "平凡之家",
      //词条描述
      "desc": "",
      //对人物属性的调整，增加为整数，降低为负数
      "offset": {
        "wealth": -2
      }
    }
  ]
}
```

```
talent-1.json
{
  "dir": "talent",
  "include": "talent-2",
  "content": [
    {
      "level": 1,
      "name": "热爱编程",
      "desc": "智力+4，体质-2",
      "offset": {
        "constitution": -2,
        "intelligence": 4
      }
    },
    {
      "name": "热爱美术",
      "desc": "智力+4",
      "level": 1,
      "offset": {
        "intelligence": 4
      }
    },
    {
      "name": "贫苦之家",
      "desc": "财富-2",
      "level": 1,
      "offset": {
        "wealth": -2
      }
    }
  ]
}
```

#### text.json（剧本内容）

1. 可以在本文件中编写所有剧本，但推荐为了清晰独建立一个文件夹管理，且按照时间线编写；
2. 如果没有设置故事的下一个时间点，将默认递增处理；
3. 将在同一个时间点的符合条件的不同故事点进行随机选择；如果没有符合条件的故事点将在所有故事点中随机选择一个，这种情况极有可能造成前后内容不匹配；

```json
text.json
{
  "dir": "text",
  "include": "text-00,text-01"
}
```

```
text-00.json
{
  "content": [
    {
      //当前时间点
      "id": 0,
      //下一个时间点
      "next-id": 1,
      //故事点描述
      "desc": "你出生了，是个普通的男孩",
      //故事点触发条件
      "condition": {
        //匹配条件
        "equal": {
          "status": "",
          "talent": "",
          "constitution":,
          "intelligence":,
          "luck":,
          "appearance":,
          "wealth":,
          "power":,
          "currentId":
        },
        //属性值低于配置时触发
        "less-than": {
          "constitution":,
          "intelligence":,
          "luck":,
          "appearance":,
          "wealth":,
          "power":
        },
        //属性值高于配置时触发
        "greater-than": {
        }
      },
      //故事点对人物属性造成的影响
      "offset": {
        //人物状态
        "status": {
          //增加
          "add": "男孩",
          //删除
          "delete": ""
        },
        "constitution":,
        "intelligence":,
        "luck":,
        "appearance":,
        "wealth":,
        "power":
      }
    }
  ]
```

