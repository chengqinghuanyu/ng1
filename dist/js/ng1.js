function mobilecheck(){var o=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(o=!0)}(navigator.userAgent||navigator.vendor||window.opera),o}isWeixin=function(){return/MicroMessenger/i.test(navigator.userAgent)},isAndroidPhone=function(){return mobilecheck()&&isAndroid()},isAndroid=function(){return/Android/i.test(navigator.userAgent)||/Linux/i.test(navigator.appVersion)},tabletCheck=function(){return/ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent)},iphoneCheck=function(){return/iPhone/i.test(navigator.userAgent)},isIOS=function(){return/ipad|iphone/i.test(navigator.userAgent)},angular.module("app",["ui.bootstrap","ngRoute","main","homepage","show","ngAnimate"]),angular.module("app").config(["$routeProvider",function(o){o.when("/main",{templateUrl:"main/main.html",controller:"MainCtrl",resolve:{}}).when("/homepage",{templateUrl:"home/homePage.html",controller:"HomePageCtrl"}).when("/show/:id",{templateUrl:"home/show.html",controller:"ShowCtrl"}).otherwise({redirectTo:"/main"})}]),angular.module("app").controller("AppCtrl",["$scope",function(o){console.log(o)}]),angular.module("app").run(["$rootScope","$location",function(o,e){var n="www1.baidu.com",t="www2.baidu.com",a="www5.baidu.com",i="google.com",r="360.com";e.CLIENT_CDN=n,e.PREFIX_FILE_HOST=t,e.PREFIX_SERVER_HOST=i,e.PREFIX_CLIENT_HOST=r,e.PREFIX_S3_URL=a,console.log(e)}]),angular.module("main",[]),angular.module("main").controller("MainCtrl",["$scope","$rootScope","$routeParams","scene.lists.datas","$uibModal",function(o,e,n,t,a){o.sceneList={},t.getDatas().success(function(e,n,t,a){console.log(e),o.sceneList=e.sceneList}).error(function(o,e,n,t){alert(e+o)}),o.price="100",o.qrurl="www.baidu111.com",o.header="header",o.msg="消息",o.deletShow=function(){a.open({keyboard:!1,backdropClick:!0,windowClass:"console seven-contain binde-maildialog",templateUrl:"dialog/bindemail.tpl.html",controller:"BindEmailDialogCtrl",resolve:{header:function(){return angular.copy(o.header)},msg:function(){return angular.copy(o.msg)},obj:function(){return{amount:o.price,qrurl:o.qrurl}}}}).result.then(function(o){console.log(o)},function(o){console.log(o)})}}]).factory("scene.lists.datas",["$rootScope","$http",function(o,e){var n={};return n.getDatas=function(){return e.get("datas/main-ctrl.json")},n}]),angular.module("main").controller("BindEmailDialogCtrl",["$scope","header","msg","obj",function(o,e,n,t){o.header=e,o.msg=n,o.obj=t,o.obj.amount=t.amount,o.obj.qrurl=t.qrurl,o.ok=function(){o.$close({amount:t.amount,qrurl:t.qrurl}),o.$dismiss()},o.cancel=function(){o.$dismiss()}}]),angular.module("homepage",[]),angular.module("homepage").controller("HomePageCtrl",["$scope",function(o){}]),angular.module("show",[]),angular.module("show").controller("ShowCtrl",["$scope","$routeParams","secen.show",function(o,e,n){o.id=e.id,o.showData={},n.getDatas().success(function(e,n,t,a){console.log(e),o.showData=e}).error(function(o,e,n,t){alert(e+o)})}]).factory("secen.show",["$rootScope","$http",function(o,e){var n={};return n.getDatas=function(){return e.get("datas/show.json")},n}]).service("secen.shownew",["$rootScope","$http","secen.show",function(o,e,n){this.getData=function(){return n.getDatas()}}]);