"use strict";
$(function() {
    $.contextMenu({
        selector: '.context-menu-simple', 
        callback: function(key, options) {
            var m = "clicked: " + key;
            window.console && console.log(m) || alert(m); 
        },
        items: {
            "edit": {name: "Edit", icon: "edit"},
            "cut": {name: "Cut", icon: "cut"},
            copy: {name: "Copy", icon: "copy"},
            "paste": {name: "Paste", icon: "paste"},
            "delete": {name: "Delete", icon: "delete"},
            "sep1": "---------",
            "quit": {name: "Quit", icon: function(){
                return 'context-menu-icon context-menu-icon-quit';
            }}
        }
    })
});


$(function() {
    $.contextMenu({
        selector: '.context-menu-material',
        callback: function(key, options) {
            var m = "clicked: " + key;
            window.console && console.log(m) || alert(m);
        },
        items: {
            "edit": {name: "Edit"},
            "cut": {name: "Beer"},
            copy: {name: "Cloud download"},
            "paste": {name: "Certificate"}
        }
    });
});

$(document).ready(function () {
        'use strict';
        var errorItems = { "errorItem": { name: "Items Load error" },};
        var loadItems = function () {
            var dfd = jQuery.Deferred();
            setTimeout(function () {
                dfd.resolve(subItems);
            }, 2000);
            //setTimeout(function () {
            //    dfd.reject(errorItems);
            //}, 1000);
            return dfd.promise();
        };

        var subItems = {
            "sub1": { name: "Submenu1", icon: "edit" },
            "sub2": { name: "Submenu2", icon: "cut" },
        };

        $.contextMenu({
            selector: '.context-menu-promise',
            build: function ($trigger, e) {
                return {
                    callback: function (key, options) {
                        var m = "clicked: " + key;
                        console.log(m);
                    },
                    items: {
                        "edit": { name: "Edit", icon: "edit" },
                        "cut": { name: "Cut", icon: "cut" },
                        "status": {
                            name: "Status",
                            icon: "delete",
                            items: loadItems(),
                        },
                        "normalSub": {
                            name: "Normal Sub",
                            items: {
                                "normalsub1": { name: "normal Sub 1"},
                                "normalsub2": { name: "normal Sub 2"},
                                "normalsub3": { name: "normal Sub 3" },
                            }
                        }
                    }
                };
            }
        });

        //normal promise usage example
        var completedPromise = function (status) {
        };

        var failPromise = function (status) {
        };

        var notifyPromise = function (status) {
        };

        $.loadItemsAsync = function() {
            var promise = loadItems();
            $.when(promise).then(completedPromise, failPromise, notifyPromise);
        };
});

$(function(){
    $.contextMenu({
        selector: '.context-menu-html', 
        items: $.contextMenu.fromMenu($('#html5menu'))
    });
});