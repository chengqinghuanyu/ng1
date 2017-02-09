function mobilecheck() {
    var e = !1;
    return function(t) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), e
}

angular.module('app',['ui.bootstrap','ngRoute','main','homepage','show','ngAnimate']),
angular.module('app').config(['$routeProvider',function(e){
                e.when('/main',{
                  templateUrl:"main/main.html",
                  controller:"MainCtrl",
                  resolve: {
                     // activities: function(dataService){
                     //    return dataService.getAllActiviites();
                     //  }
                   }
                }).when("/homepage",{
                  templateUrl:"home/homePage.html",
                  controller:"HomePageCtrl"
                }).when("/show/:id",{
                  templateUrl:"home/show.html",
                  controller:"ShowCtrl"
                })
                .otherwise({
                  redirectTo:'/main'
              });
            }]),
angular.module('app').controller("AppCtrl",["$scope",function(a){
  console.log(a);
}]),

angular.module("app").run(["$rootScope", "$location",function(a,b){
    var CLIENT_CDN = "www1.baidu.com";
    var PREFIX_FILE_HOST = "www2.baidu.com";
    var PREFIX_CLIENT_HOST = "www3.baidu.com";
    var PREFIX_CLIENT_HOST = "www4.baidu.com";
    var PREFIX_S3_URL = "www5.baidu.com";
    var PREFIX_URL = "google.com";
    var PREFIX_HOST = "360.com"
    b.CLIENT_CDN = CLIENT_CDN, 
    b.PREFIX_FILE_HOST = PREFIX_FILE_HOST, 
    b.PREFIX_SERVER_HOST = PREFIX_URL, 
    b.PREFIX_CLIENT_HOST = PREFIX_HOST, 
    b.PREFIX_S3_URL = PREFIX_S3_URL;
    console.log(b);
}]),
angular.module('main',[]);
angular.module('main').controller("MainCtrl",["$scope","$rootScope","$routeParams","scene.lists.datas","$uibModal",function(a,b,c,d,e){
    //a.sceneList = c.getData().$$state;
    a.sceneList = {};
   d.getDatas().success(function (response, status, headers, config) {
          //要用到返回数据就在这里用了
          console.log(response);
                        
          a.sceneList = response.sceneList;

          }).error(function (response, status, headers, config) {

            alert(status + response);

        });
    // c.getDatas().success(function(a,b,c,d){

    // }).error(function(a,b,c,d){

    // });
a.price="100";
a.qrurl="www.baidu111.com"
a.header="header";
a.msg = "消息";
a.deletShow = function(){
  //alert(11);
  e.open({
     keyboard: !1,
     backdropClick: !0,
     windowClass: "console seven-contain binde-maildialog",
     templateUrl: "dialog/bindemail.tpl.html",
     controller: "BindEmailDialogCtrl",
     resolve: {
           header : function() { 
            return angular.copy(a.header); 

            },
           msg : function() { 

            return angular.copy(a.msg); 
          },
          obj :function(){
            return {
              amount:a.price,
              qrurl:a.qrurl
            }
          }
        }
  }).result.then(function(b) {
        console.log(b);


        },function(b){
        console.log(b);
        })
}
    
   
}]).factory('scene.lists.datas', ["$rootScope","$http",function (a,b) {
           var c ={}
           return c.getDatas =function(){
                    return b.get('datas/main-ctrl.json');//return 一个promise
            },c
}]),

angular.module('main').controller("BindEmailDialogCtrl",["$scope","header","msg","obj",function(a,b,c,d){

 a.header = b;
 a.msg = c;
 a.obj = d;
 //a.price = 
 a.obj.amount = d.amount;
 //a. qrurl = 
 a.obj.qrurl = d.qrurl
 a.ok = function(){
    a.$close({
      amount : d.amount,
      qrurl  : d.qrurl
    })
    a.$dismiss();
  }
  a.cancel = function(){
      // a.$close({
      // amount : a.price,
      // qrurl  :a. qrurl
      // })
    a.$dismiss();
  }

}])
angular.module('homepage',[]),
angular.module('homepage').controller("HomePageCtrl",["$scope",function(a){

}]),
angular.module('show',[]),
angular.module('show').controller("ShowCtrl",["$scope","$routeParams","secen.show",function(a,b,c){
   a.id = b.id; 
   a.showData = {}
   c.getDatas().success(function (response, status, headers, config) {
          //要用到返回数据就在这里用了
          console.log(response);
                        
          a.showData = response;

          }).error(function (response, status, headers, config) {

            alert(status + response);

        });




}]).factory("secen.show",["$rootScope","$http",function(a,b){//angular中的服务都是单例对象
       var c ={}
           return c.getDatas =function(){
                    return b.get('datas/show.json');
            },c

}]).service("secen.shownew",["$rootScope","$http","secen.show",function(a,b,c){
       this.getData = function(){
         return  c.getDatas()
       }

}])



