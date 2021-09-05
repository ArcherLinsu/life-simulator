"use strict";
$(document).ready(function () {
    /* hide loader if 3sec or more time 
    最新最全最好的Bootstrap模板：http://www.bootstrapmb.com */
    setTimeout(function () {
        $(".loader-logo").fadeOut();
    }, 3000);

    /* left sidebar open */
    $('#left-menu').on('click', function () {
        $('body').toggleClass('sidebar-left-close');
    });
    $('.sidebar-left + div.backdrop').on('click', function () {
        $('body').addClass('sidebar-left-close');
    });

    /* right sidebar open */
    $('#open-right-sidebar, #opencolorpanel').on('click', function () {
        $('body').toggleClass('sidebar-right-close');
        $('.chat-window').hide();
        $('.close-sidebar').toggleClass('active');
        $('body').addClass('sidebar-left-close');
    });

    /* right sidebar open  with setting icon on right side */
    $('.close-sidebar').on('click', function () {
        $(this).toggleClass('active');
        $('.chat-window').hide();
        $('body').toggleClass('sidebar-right-close');
    });


    /* left sidebar accordion menu */
    /* url  navigation active */
    var url = window.location;

    function menuitems() {
        var element = $('.sidebar .nav .nav-item a').filter(function () {
            return this.href == url;
            console.log(url)
        }).addClass('active').parent("li").addClass('active').closest('.nav').slideDown().addClass('in').prev().addClass('active').parent().addClass('show').closest('.nav').slideDown().addClass('in').parent().addClass('show');
    }
    menuitems();

    $('.sidebar .nav .nav-item .dropdwown-toggle').on('click', function () {
        if ($(this).hasClass('active') != true) {
            $('.sidebar .nav .nav-item .dropdwown-toggle').removeClass('active').next().slideUp();
            $(this).addClass('active').next().slideDown();
        } else {
            $(this).removeClass('active').next().slideUp();
        }
    });

    /* new message hide color */
    $('.new').on('click', function () {
        var itemnew = $(this);
        setTimeout(function () {
            itemnew.removeClass('new');
        }, 500);
    });


    /* sidebar hide below 1100px resolution  */
    if ($(window).width() <= 1100) {
        $('body').addClass('sidebar-left-close');
    }

    /* accessiblity font size change  */
    var fontsize = 16;
    $('.font-big').on('click', function () {
        fontsize = fontsize + 1;
        if (fontsize < 20) {
            $('body').css('font-size', fontsize);
            $('.font-small').attr('disabled', false);
        } else {
            $(this).attr('disabled', 'disabled');
        }
    });
    $('.font-small').on('click', function () {
        fontsize = fontsize - 1;
        if (fontsize > 13) {
            $('body').css('font-size', fontsize);
            $('.font-big').attr('disabled', false);
        } else {
            $(this).attr('disabled', 'disabled');
        }

    });


    /* flip color setting block*/
    function setIntervalX(callback, delay, repetitions) {
        var x = 0;
        var intervalID = window.setInterval(function () {
            callback();
            if (++x === repetitions) {
                window.clearInterval(intervalID);
            }
        }, delay);
    }
    setIntervalX(function () {
        $('.animateflipy').addClass('flipInY');
        setTimeout(function () {
            $('.animateflipy').removeClass('flipInY');
        }, 1000)
    }, 2000, 3);

    /* fullscreen feature */
    $('.fullscreenbtn').on('click', function () {
        $(this).closest('.fullscreen').toggleClass('activefullscreen')
    });

    /* settings sidebar backdrop close */
    $('.settings-sidebar-backdrop').on('click', function () {
        $(this).fadeOut().prev('.settings-sidebar').addClass('close-settings-sidebar-backdrop')
        $('.close-setting-sidebar').removeClass('active')
        $('body').removeClass('setting-sidebar-open');
    });
    $('.close-setting-sidebar').on('click', function () {
        if ($(this).hasClass('active') === true) {
            $('.settings-sidebar').addClass('close-settings-sidebar-backdrop')
            $(this).removeClass('active');
            $('body').removeClass('setting-sidebar-open');
            $('.settings-sidebar-backdrop').fadeOut();
        } else {
            $('.settings-sidebar').removeClass('close-settings-sidebar-backdrop')
            $(this).addClass('active');
            $('body').addClass('setting-sidebar-open');
            if ($('#hidebackdrop').is(':checked') != true) {
                $('.settings-sidebar-backdrop').fadeIn()
            }
        }
    });
    $('#hidebackdrop').on('click', function () {
        if ($(this).is(':checked') === true) {
            $('.settings-sidebar-backdrop').fadeOut();
            $('#settingalert').show();
        } else {
            $('.settings-sidebar-backdrop').fadeIn();
            $('#settingalert').hide();
        }
    });


    /* full container active */
    $('#boxlayout').on('click', function () {
        if ($(this).is(':checked') === true) {
            $('body').addClass('boxed-page sidebar-left-close');
        } else {
            $('body').removeClass('boxed-page sidebar-left-close');
        }
    });

    /* full container active */
    $('#full-width3').on('click', function () {
        if ($(this).is(':checked') === true) {
            $('#full-width2').prop('checked', true);
            $('.main-container').addClass('container-fluid').removeClass('container');
        } else {
            $('#full-width2').prop('checked', false);
            $('.main-container').removeClass('container-fluid').addClass('container');
        }
    });
    $('#full-width2').on('click', function () {
        if ($(this).is(':checked') === true) {
            $('#full-width3').prop('checked', true);
            $('.main-container').addClass('container-fluid').removeClass('container');
        } else {
            $('#full-width3').prop('checked', false);
            $('.main-container').removeClass('container-fluid').addClass('container');
        }
    });

    /* chat window minimize */
    $('.chat-minmax').on('click', function () {
        $(this).closest('.chat-window').toggleClass('active');
        $(this).toggleClass('active');
    });
    $('.chat-close').on('click', function () {
        $(this).closest('.chat-window').hide();
    });
    $('#chat-list .list-group-item').on('click', function () {
        $('.chat-minmax, .chat-window').addClass('active');
        $('.chat-window').show();
    });

    if ($('body').hasClass('boxed-page') === true) {
        $('body').addClass('sidebar-left-close');
    }



    /* RTL layout */
    if ($.type($.cookie("rtl-layout")) != 'undefined' && $.cookie("rtl-layout") != '') {
        $('#rtl').prop("checked", true);
        $('body').addClass($.cookie("rtl-layout"));
    }

    $('#rtl').on('click', function () {
        if ($(this).is(':checked')) {
            $('body').addClass('rtl');
            $.cookie("rtl-layout", "rtl", {
                expires: 1
            });
        } else {
            $('body').removeClass('rtl');
            $.cookie("rtl-layout", "", {
                expires: 1
            });
            $.removeCookie('rtl-layout');
        }
    })

    /* RTL layout */
    if ($.type($.cookie("iconsibarbar-layout")) != 'undefined' && $.cookie("iconsibarbar-layout") != '') {
        $('#iconsibarbar').prop("checked", true);
        $('body').addClass($.cookie("iconsibarbar-layout"));
    }

    $('#iconsibarbar').on('click', function () {
        if ($(this).is(':checked')) {
            $('body').addClass('iconsibarbar sidebar-left-close');
            $.cookie("iconsibarbar-layout", "iconsibarbar", {
                expires: 1
            });
        } else {
            $('body').removeClass('iconsibarbar');
            $.cookie("iconsibarbar-layout", "", {
                expires: 1
            });
            $.removeCookie('iconsibarbar-layout');
        }
    });

});

$(window).on('load', function () {
    /* hide loader  */
    $('.loader').hide();
    $('.animatejack').addClass('jackInTheBox');
    $('.wrapper').css('padding-bottom', $('body > footer').outerHeight() );
    $('body > footer').css('margin-top', -( $('body > footer').outerHeight() ));
});