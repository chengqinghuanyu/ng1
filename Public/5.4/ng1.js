

angular.module('app',['ui.bootstrap','ngRoute','main','homepage','show','ngAnimate','scene']),
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
                }).when("/scene",{
                  templateUrl:"scene/scene.html",
                  controller:"SceneCtrl"
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
angular.module('main').controller("MainCtrl",["$scope","$rootScope","$routeParams","scene.lists.datas","$uibModal", "qrcode.service", function(a,b,c,d,e,g){
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
a.showqrcode = function(){
  //alert(11);
  e.open({
     keyboard: !1,
     backdropClick: !0,
     windowClass: "console seven-contain qrcodedialog",
     templateUrl: "dialog/dialog.qrcode.tpl.html",
     controller: "DialogQrcodeCtrl",
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
}]).factory("qrcode.service",["$rootScope","$http",function(a,b){
      var d ={} 
            d.payways = [
              {
                title:"微信支付",
                link:"www.weixin.com",
                type:"wechat",
                select:true
              },
              {
                title:"支付宝",
                link:"www.pay.com",
                type:"alipay",
                select:false
              },
              {
                title:"财付通",
                link:"www.ipaid.com",
                type:"tenpay",
                select:false
              }
            ];
            d.getWechat=function(){
              return "www.weixin.com";
            };
            d.getTenpay=function(){
              return "www.ipaid.com";
            };
            d.getAlipay=function(){
              return "www.pay.com";
            };
            d.selectpayWay={
              title:"微信",
              link:d.getWechat(),
              type:"wechat"
            }
     return d;
}]).controller("DialogQrcodeCtrl",["$scope","header","msg","obj","qrcode.service", function(a,b,c,d,e){
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
      console.log(e);
      a.modeOfPayment = [];
      for(var i=0; i< e.payways.length;i++){
        a.modeOfPayment.push(e.payways[i])
      }
      a.payWay = e.selectpayWay.type;
      console.log(11111111);
      console.log(a.payWay);
      console.log(222222222);
      a.qcodeTabtype = function(a0,b0){
        console.log(b0);
         a.payWay = b0;
        for(var i in a.modeOfPayment){
          e.payways[i]['select'] = false;
        }
        //alert(b0);
        for(var j in a.modeOfPayment){
          if( e.payways[j]['type'] ==  b0){
             e.payways[j]['select'] = true;
          }
        }
        a.qrcodeurl = e.selectpayWay
        if(b0 === "tenpay"){//财付通
          e.selectpayWay.type = "tenpay";
          a.qrcodeurl = e.selectpayWay.link = e.getTenpay();
        }
        if(b0 === "alipay"){//支付宝
          e.selectpayWay.type = "alipay";
          a.qrcodeurl = e.selectpayWay.link = e.getAlipay();
        }
        if(b0 === "wechat"){//微信
          e.selectpayWay.type = "wechat";
          a.qrcodeurl = e.selectpayWay.link = e.getWechat();
        }

      }

}]).directive("payqrcode",["$rootScope","$http","$timeout","qrcode.service",function(a,b,c,d){

  var obj ={};
  obj.scope={
        qrcodeUrl:'@',
        qcodeTabtype:'&'
  },
  obj.restrict = 'AE',
  obj.templateUrl = 'components/qrcode.tpl.html'
  //obj.controller = 'PosterPayCtrl',
  obj.link = function(scope, iElement, iAttrs, controller) {
        console.log(d.selectpayWay.link);
        c(function(){
          //console.log(iElement);
          $(iElement).qrcode({ 
                render: "canvas", //table方式 
                width: 180, //宽度 
                height:180, //高度 
                text: d.selectpayWay.link //任意内容 
            });
        },1000)
      }
  return obj
  

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
angular.module("scene",["froala"]).value("froalaConfig", {
        toolbarInline: false,
        placeholderText: 'Enter Text Here'
    }),
angular.module("scene").controller("SceneCtrl",["$scope","$rootScope","$http","$q","$timeout","$routeParams","froalaConfig",function(a,b,c,d,e,f,froalaConfig){

     
    a.titleOptions = {
      placeholderText: 'Add a Title',
      charCounterCount: false,
      toolbarInline: true,
      events: {
        'froalaEditor.initialized': function() {
          console.log('initialized');
        }
      }
    };

    a.initialize = function(initControls) {
      a.initControls = initControls;
      a.deleteAll = function() {
        initControls.getEditor()('html.set', '');
      };
    };

    a.myTitle = '<span style="font-family: Verdana,Geneva,sans-serif; font-size: 30px;">My Document\'s Title</span><span style="font-size: 18px;"></span></span>';
    a.sample2Text = '';
    a.sample3Text = '';

    a.imgModel = {src: 'assets/images/a.jpeg'};

    a.buttonModel = {innerHTML: 'Click Me'};

    a.inputModel = {placeholder: 'I am an input!'};
    a.inputOptions = {
      angularIgnoreAttrs: ['class', 'ng-model', 'id', 'froala']
    }

    a.initializeLink = function(linkInitControls) {
      a.linkInitControls = linkInitControls;
    };
    a.linkModel = {href: 'https://www.froala.com/wysiwyg-editor'}

     
}])

angular.module("main/main.html", [])
.run(["$templateCache", function(a) {


}]),
angular.module("home/homePage.html", [])
.run(["$templateCache", function(a) {


}]),
angular.module("home/show.html", [])
.run(["$templateCache", function(a) {


}]),
angular.module("scene/index.html", [])
.run(["$templateCache", function(a) {


}])