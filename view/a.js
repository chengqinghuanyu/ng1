angular.module("services.modal", ["confirm-dialog", 
    "message-dialog", 
    "bindemail-dialog", 
    "freeuser-dialog"]).factory("ModalService", ["$modal", function(a) {
        var b = {};
        return b.openBindEmailDialog = function() {
            a.open({
                keyboard: !1,
                backdropClick: !0,
                windowClass: "confirm-dialog",
                templateUrl: "dialog/bindemail.tpl.html",
                controller: "BindEmailDialogCtrl"
            })
        }
        ,
        b.openConfirmDialog = function(b, c, d) {
            a.open({
                backdrop: "static",
                keyboard: !1,
                backdropClick: !1,
                windowClass: "confirm-dialog",
                templateUrl: "dialog/confirm.tpl.html",
                controller: "ConfirmDialogCtrl",
                resolve: {
                    confirmObj: function() {
                        return b
                    }
                }
            }).result.then(c, d);
            /*帮微微秀-20160301-ypx-未发布点击发布后的跳转-start*/
            
            /*var id = window.location.href.split("create/")[1].split("?")[0];
			alert(id)
			location.href = 'index.php?c=wscene&a=publish&id='+id+'?pageId=1'*/
            
            /*帮微微秀-20160301-ypx-未发布点击发布后的跳转-end*/
        }
        ,
        b.openMsgDialog = function(b, c, d) {
            a.open({
                backdrop: "static",
                keyboard: !1,
                backdropClick: !1,
                windowClass: "message-dialog",
                templateUrl: "dialog/message.tpl.html",
                controller: "MessageDialogCtrl",
                resolve: {
                    msgObj: function() {
                        return b
                    }
                }
            }).result.then(c, d)
        }
        ,
        /*帮微微秀-ypx-非付费用户点击付费模板提示-start*/
        b.openFreeUserDialog = function(b, c, d) {
            a.open({
                backdrop: "static",
                keyboard: !1,
                backdropClick: !1,
                windowClass: "message-dialog",
                templateUrl: "dialog/freeuser.tpl.html",
                controller: "FreeuserDialogCtrl",
                resolve: {
                    freeuserObj: function() {
                        return b
                    }
                }
            }).result.then(c, d)
        }
        ,
        /*帮微微秀-ypx-非付费用户点击付费模板提示-end*/
        
        b
    }
    ]),