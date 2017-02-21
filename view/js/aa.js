    var PREFIX_URL = "/";

    var PREFIX_S1_URL =  "/";
    var PREFIX_S2_URL = "/index.php";
    var PREFIX_HOST = "/index.php";
    var PREFIX_HOST1 = "/index.php";
    var PREFIX_FILE_HOST = "/Uploads/";
    var CLIENT_CDN = "/";

function mobilecheck() {
    var e = !1;
    return function(t) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), e
}

function isWeixin() {
    var e = navigator.userAgent.toLowerCase();
    return "micromessenger" == e.match(/MicroMessenger/i)
}

function isNull(data) {
    return (data == "" || data == undefined || data == null) ? false : data;
}

function isAndroid() {
    var e = navigator.userAgent,
        t = (navigator.appVersion, e.indexOf("Android") > -1 || e.indexOf("Linux") > -1);
    return t
}

function tabletCheck() {
    var e = /ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase());
    return e
}

function countCharacters(e) {
    var t = 0;
    if (!e) return 0;
    for (var i = 0; i < e1.length; i++) {
        var n = e.charCodeAt(i);
        n >= 1 && 126 >= n || n >= 65376 && 65439 >= n ? t++ : t += 2
    }
    return t
}

//文本框禁止输出script、<>?、javascript等敏感词方法
function banEntry(obj) {
    var Input = $(obj),
        InputVal,
        exp = /\<\>\?|script|iframe|javascript|eval|unescap|select|update|delete|exec|count/i;
    Input.on("change", function() {
        if (exp.test($(this).val())) {
            InputVal = $(this).val();
            $(this).val(InputVal.replace(exp, ""))
        }
    })
}

function responseiveScenePage() {
    var e = $(".nr"),
        t = {
            width: e.width(),
            height: e.height()
        },
        i = {
            width: 320,
            height: 486
        };
    0 == t.height && (t.width = i.width, t.height = i.height);
    var n = t.width / i.width,
        a = t.height / i.height;
    /*  e.find(".m-img").css({
        "transform-origin": "0 0",
        "-webkit-transform": "scaleX(" + n + ") scaleY(" + a + ")",
        "-moz-transform": "scaleX(" + n + ") scaleY(" + a + ")",
        "-o-transform": "scaleX(" + n + ") scaleY(" + a + ")",
        transform: "scaleX(" + n + ") scaleY(" + a + ")"
    })*/
}

function renderPage(e, t, i) { //eqshow   pageNum   pages

    function d(a, b) {
        var c, d, e, f, g, h = window.scene ? scene.pageMode : 0,
            i = 0,
            j = {
                touchPos: 0,
                pLen: -486 * (b - 1),
                contain: $("#page" + a),
                cH: mobilecheck() ? $(document).height() : 486,
                stopInertiaMove: !1
            };

        0 == h || 1 == h || 2 == h ||3 == h || 6 == h || 7 == h || 8 == h || 11 == h || 12 == h ? h = "NS" : (h = "WE", $('<section class="u-arrow-bottom"><div class="pre-wrap"><div class="pre-box1"><div class="pre1"></div></div><div class="pre-box2"><div class="pre2"></div></div></div></section>').appendTo("#page" + a));
        var k = 0,
            l = 0;
        j.contain.on("mousedown touchstart", function(a) {

            return "button" == a.target.tagName.toLowerCase() || a.target.getAttribute("data") || a.target.getAttribute("href") || "8" == a.target.getAttribute("ctype")

            //修改添加名片的输入判定为input而且属性中名称为以下四种的一个就不执行事件冒泡-start
            || ("input" == a.target.tagName.toLowerCase() &&
                ("job" == a.target.getAttribute("name") ||
                    "company" == a.target.getAttribute("name") ||
                    "mobile" == a.target.getAttribute("name") ||
                    "linkman" == a.target.getAttribute("name")
                )
            ) /*||"403" == a.target.getAttribute("ctype")*/
            /*||
        "A" == a.target.getAttribute("ctype")||
        "B" == a.target.getAttribute("ctype")||
        "C" == a.target.getAttribute("ctype")||
        "D" == a.target.getAttribute("ctype")*/
            //修改添加名片的输入判定为input而且属性中名称为以下四种的一个就不执行事件冒泡-end

            ? (a.stopPropagation()) : (a.stopPropagation(), a.target.getAttribute("ctype") != "T" && a.preventDefault()
                /* ,
                $(a.target).attr("ctype")=="T" && $(a.target).on('mousedown touchstart', function(ev){
                    ev.stopPropagation();
                })*/
                //添加长页输入不生效主要是阻止事件的执行引起的/20160512-start

                //添加长页输入不生效主要是阻止事件的执行引起的/20160512-end
            ),

            void(j.touchPos < j.pLen || j.touchPos > 0 || (c = !0, e = 0, j.stopInertiaMove = !0, d = a.originalEvent.touches ? a.originalEvent.changedTouches[0].clientY : a.clientY, "WE" == h && (f = a.originalEvent.touches ? a.originalEvent.changedTouches[0].clientX : a.clientX), l = j.touchPos, k = Date.now()))
        }),

        j.contain.on("mousemove touchmove", function(a) {
            if (a.stopPropagation(), c) {

                if (e = j.touchPos + (a.originalEvent.touches ? a.originalEvent.changedTouches[0].clientY : a.clientY) - d, "WE" == h && (g = (a.originalEvent.touches ? a.originalEvent.touches[0].clientX : a.clientX) - f, Math.abs(g) > Math.abs(e - j.touchPos) && !eqxiu.forbidHandFlip())) {
                    if (g > 0) {
                        if (5 > g) return;
                        eqxiu.prePage()
                    } else eqxiu.nextPage();
                    return void(c = !1)
                }
                if (e < j.pLen || e > 5) return c = !1, e > 0 && "NS" == h && (eqxiu.forbidHandFlip() ? j.touchPos = 0 : eqxiu.prePage()), void(0 > e && "NS" == h && (eqxiu.forbidHandFlip() ? j.touchPos = j.pLen : eqxiu.nextPage()));
                if (e > 0) return;
                j.stopInertiaMove = !0;

/*                $(this).find(".edit_area").css({
                    "transform": "translate3d(0," + (e - i) + "px,0)",
                    "-webkit-transform": "translate3d(0," + (e - i) + "px,0)"
                });*/
               if($(this).find(".edit_area").attr("bgcroptype") == 1){
                    $(this).find(".edit_area").css({
                    "transform": "translate3d(0," + (e - i) + "px,0)",
                    "-webkit-transform": "translate3d(0," + (e - i) + "px,0)"
                    });
                }else{
                 var aheight = $(this).find(".edit_area").attr("longpage");
                    $(this).find(".edit_wrapper").css({
                    "transform": "translate3d(0," + (e - i) + "px,0)",
                    "-webkit-transform": "translate3d(0," + (e - i) + "px,0)",
                    "height":aheight*486+'px'
                    });
                }
                /*for(var i=0,zI=$(".z-current").find('li').length;i<zI.length,i++){
                    zI.eq(0).css("top")<=$(".z-current").find("ul").css()
                }*/
                /******长页旋转和翻页并存修改*****/
                var thisW = Math.abs(e - i);
                eqxiu.animB(thisW);
                var gg = $(this).find(".alock");
                if (gg.length > 0) {
                    for (var mL = 0; mL < gg.length; mL++)
                        pp(gg[mL], gg[mL].style.transform, i - e)
                }
                var b = Date.now();
                $(document).trigger("pageScrollPos", [e - j.cH]), b - k > 300 && (k = b, l = e), j.stopInertiaMove = !1

            }

        }),
        j.contain.on("mouseup touchend mouseleave", function(a) {

            if (a.stopPropagation(), c) {


                if (c = !1, mobilecheck() && 0 === e) return void $(a.target).trigger("click");
                if (!(0 > e && e > j.pLen)) return e >= 0 ? void(j.touchPos = 0) : void(j.touchPos = j.pLen);
                j.touchPos = e, "WE" == h && j.contain.find(".u-arrow-bottom").hide();
                var b = Date.now(),
                    d = (e - l) / (b - k);

                !
                    function(a, b, c, d) {

                        function e() {
                            if (!d.stopInertiaMove) {

                                var h = Date.now(),
                                    j = h - b,
                                    k = a + j * g;
                                if (!(0 > f * k)) {
                                    var l = (a + k) / 2 * j,
                                        m = c + l;
                                    var gg = d.contain.find(".alock"),
                                        mm = m - i;
                                    var thisW = Math.abs(mm);
                                    eqxiu.animB(thisW);
                                    //
                                    
                                   var bgcroptype = d.contain.find(".edit_area").attr("bgcroptype");
                                    bgmodel = "";
                                    /*帮微微秀-20170121-ypx-start-设定长页背景全屏模板设定*/
                                   if(1 === bgcroptype){
                                    bgmodel = d.contain.find(".edit_area");
                                     m > 0 || m < d.pLen || (d.timmer = null, d.contain.find(".edit_area").css("transform", "translate3d(0," + (m - i) + "px,0)"), bgmodel.css("-webkit-transform", "translate3d(0," + (m - i) + "px,0)"),

                                        gg.length > 0 ? forn(gg) : '',
                                        d.touchPos = m, $(document).trigger("pageScrollPos", [m - d.cH]), setTimeout(e, 0));
                                   }else if(2 === bgcroptype){
                                     m > 0 || m < d.pLen || (d.timmer = null, d.contain.parents(".edit_wrapper").css("transform", "translate3d(0," + (m - i) + "px,0)"), d.contain.parents(".edit_wrapper").css({
                                        "transform":"translate3d(0," + (m - i) + "px,0)",
                                        "-webkit-transform":"translate3d(0," + (m - i) + "px,0)"
                                    }),
                                    gg.length > 0 ? forn(gg) : '',
                                    d.touchPos = m, $(document).trigger("pageScrollPos", [m - d.cH]), setTimeout(e, 0));
                                   }
                                   /*帮微微秀-20170121-ypx-end*/
                                   /******长页旋转和翻页并存修改*****/
                                    function forn(gg) {
                                        for (var mL = 0; mL < gg.length; mL++) {
                                            pp(gg[mL], gg[mL].style.transform, -mm);
                                        }
                                    }
                                }
                            }
                        }
                        var f = 0 > a ? -1 : 1,
                            g = f * -1e-3 /*-6e-4*/ ;
                        e()

                }(d, b, e, j)
            }

        }),
        $(document).on("clearTouchPos", function() {

            j.touchPos = 0;

            console.log(j.contain.find(".edit_area").attr("bgcroptype"));
            /*帮微微秀-20170121-ypx*
            *
            *设定长页全屏铺满-start*/
            if("2" === j.contain.find(".edit_area").attr("bgcroptype")){
                console.log(2);
                j.contain.parent(".edit_wrapper").css("transform", "translateY(0px)");
                j.contain.parent(".edit_wrapper").css("-webkit-transform", "translateY(0px)");
                j.contain.parent(".m-img").css("transform","translateY(0px)");
                j.contain.parent(".m-img").css("-webkit-transform", "translateY(0px)");
            }else if("1" === j.contain.find(".edit_area").attr("bgcroptype")){
                console.log(0);
                j.contain.find(".edit_area").css("transform", "translateY(0px)");
                j.contain.find(".edit_area").css("-webkit-transform", "translateY(0px)");
            }
            /*帮微微秀-20170121-ypx-end*/

            /******长页旋转和翻页并存修改*****/
            var t, gg = j.contain.find(".alock");
            if (gg.length > 0)
                for (var i = 0; i < gg.length; i++)
                    t = gg[i].style.transform.replace(dd, ""),
                    gg[i].style.transform = "translate3d(0,0,0) " + t
                    /*, j.contain.find(".alock").css("transform", "translateY(0px)"), j.contain.find(".alock").css("-webkit-transform", "translateY(0px)")*/
        })
    }
    e.templateParser("jsonParser").parse({
        def: i[t - 1],
        appendTo: "#page" + t,
        mode: "view"
    });
    var n, a, r = 1,
        s = $(".z-current").width(),
        o = $(".z-current").height();
    imageWidth = $(".m-img").width(), imageHeight = $(".m-img").height(), s / o >= 320 / 486 ? (r = o / 486, n = (s / r - 320) / 2) : (r = s / 320, a = (o / r - 486) / 2), window != window.top && $(".phoneBox .nr").css({
        width: "100%",
        height: "100%",
        overflow: "hidden",
        "transform-origin": "top left",
        transform: "scale(" + r + ")"
    }), a && $(".edit_area").css({
        /*marginTop: a*/
    }), n && $(".edit_area").css({
        /*marginLeft: n*/
    }), tplCount == i.length && $("#eqMobileViewport").attr("content", "width=320, initial-scale=" + r + ", maximum-scale=" + r + ", user-scalable=no"), responseiveScenePage() /*d(2,3)*/
    if ((i[t - 1].elements[0] != null) && (i[t - 1].elements[0].content != null) && i[t - 1].elements[0].content.indexOf("daiyan_first0_page") > 0) {
        return
    } else {
        i[t - 1].properties && i[t - 1].properties.longPage && d(t, i[t - 1].properties.longPage)
    };
    /*长页旋转问题修改函数*/
    var dd = /translate3d\(.*?\)/g,
        pp = function(tt, ee, i) {
            ee = ee.replace(dd, ""), ee && (tt.style.transform = "translate3d(0," + i + "px,0) " + ee)
        }

}!
    function(e) {
        function t() {
            var e = {};
            this.addInterval = function(t, i) {
                e[t] = i
            }, this.deleteInterval = function(t) {
                e[t] && (clearInterval(e[t]), delete e[t])
            }, this.clearInterval = function() {
                for (var t in e) this.deleteInterval(t)
            };
            var t = [{
                value: 1,
                desc: "轮播",
                name: "slide"
            }, {
                value: 2,
                desc: "下落",
                name: "bars"
            }, {
                value: 3,
                desc: "百页窗",
                name: "blinds"
            }, {
                value: 4,
                desc: "消隐",
                name: "blocks"
            }, {
                value: 5,
                desc: "渐变",
                name: "blocks2"
            }, {
                value: 9,
                desc: "梳理",
                name: "zip"
            }, {
                value: 11,
                desc: "翻转",
                name: "bars3d"
            }, {
                value: 13,
                desc: "立方体",
                name: "cube"
            }, {
                value: 14,
                desc: "棋盘",
                name: "tiles3d"
            }, {
                value: 16,
                desc: "飞出",
                name: "explode"
            }];
            this.getPicStyle = function(e) {
                if (void 0 === e) return t;
                for (var i = 0; i < t.length; i++)
                    if (e === t[i].value) return t[i]
            }
        }
        e.utilPictures = new t
}(window),
function(e) {
    function t() {
        var e = {
                CLICK: {
                    name: "click",
                    value: 1,
                    title: "点击"
                },
                SHAKE: {
                    name: "shake",
                    value: 2,
                    title: "摇一摇"
                }
            },
            t = {
                SHOW: {
                    name: "show",
                    value: 1
                },
                HIDE: {
                    name: "hide",
                    value: 2
                },
                RANDOMEVENT: {
                    name: "randomEvent",
                    value: 3
                }
            };
        this.getSendType = function(t) {
            if (void 0 === t) return e;
            for (var i in e)
                if (t === e[i].value) return e[i];
            return null
        }, this.getHandleType = function(e) {
            if (void 0 === e) return t;
            for (var i in t)
                if (e === t[i].value) return t[i];
            return null
        }
    }
    e.utilTrigger = new t
}(window),
function(e, t) {
    function i() {
        var e, i, n, a = [];
        t("#media");
        this.addAudio = function(e, r) {
            var s = new Audio;
            s.src = r, a.push({
                elem: e,
                audio: s
            }), t(s).bind("ended", function() {
                i = !1, n()
            })
        }, this.play = function(t, r, s) {

            var o;
            n = r;
            for (var c = 0; c < a.length; c++) a[c].elem == t && (o = a[c].audio);
            e == o && i ? (o.pause(), i = !1, r()) : e != o || i ? (e && e.pause(), o.currentTime = 0, o.play(), s(), i = !0, e = o) : (o.play(), i = !0, s())
        }, this.pause = function() {
            e && (e.pause(), i = !1)
        }
    }
    e.utilSound = new i
}(window, $), window.flux = {
    version: "1.4.4"
},
function(e) {
    flux.slider = function(t, i) {
        flux.browser.init(), flux.browser.supportsTransitions || window.console && window.console.error && console.error("Flux Slider requires a browser that supports CSS3 transitions");
        var n = this;
        this.element = e(t), this.transitions = [];
        for (var a in flux.transitions) this.transitions.push(a);
        this.options = e.extend({
            autoplay: !0,
            transitions: this.transitions,
            delay: 4e3,
            pagination: !0,
            controls: !1,
            captions: !1,
            width: null,
            height: null,
            onTransitionEnd: null,
            onStartEnd: null,
            bgColor: ""
        }, i), this.height = this.options.height ? this.options.height : null, this.width = this.options.width ? this.options.width : null;
        var r = [];
        e(this.options.transitions).each(function(e, t) {
            var i = new flux.transitions[t](this),
                n = !0;
            i.options.requires3d && !flux.browser.supports3d && (n = !1), i.options.compatibilityCheck && (n = i.options.compatibilityCheck()), n && r.push(t)
        }), this.options.transitions = r, this.images = new Array, this.imageLoadedCount = 0, this.currentImageIndex = 0, this.nextImageIndex = 1, this.playing = !1, this.container = e('<div class="fluxslider"></div>').appendTo(this.element), this.surface = e('<div class="surface" style="position: relative"></div>').appendTo(this.container), this.container.bind("click", function(t) {
            e(t.target).hasClass("hasLink") && (window.location = e(t.target).data("href"))
        }), this.imageContainer = e('<div class="images loading1"></div>').css({
            position: "relative",
            overflow: "hidden"
        }).appendTo(this.surface), this.width && this.height && this.imageContainer.css({
            width: this.width + "px",
            height: this.height + "px"
        }), this.image1 = e('<div class="image1" style="height: 100%; width: 100%"></div>').appendTo(this.imageContainer), this.image2 = e('<div class="image2" style="height: 100%; width: 100%"></div>').appendTo(this.imageContainer), e(this.image1).add(this.image2).css({
            position: "absolute",
            top: "0px",
            left: "0px"
        }), this.element.find("img, a img").each(function(t, i) {
            var a = i.cloneNode(!1),
                r = e(i).parent();
            r.is("a") && e(a).data("href", r.attr("href")), n.images.push(a), e(i).remove()
        });
        for (var s = 0; s < this.images.length; s++) {
            var o = new Image;
            o.onload = function() {
                n.imageLoadedCount++, n.width = n.width ? n.width : this.width, n.height = n.height ? n.height : this.height, n.imageLoadedCount >= n.images.length && (n.finishedLoading(), n.setupImages())
            }, o.src = this.images[s].src
        }
        this.element.bind("fluxTransitionEnd", function(e, t) {
            n.options.onTransitionEnd && (e.preventDefault(), n.options.onTransitionEnd(t))
        }), this.options.autoplay && this.start();
        var c = {},
            l = {},
            p = 20;
        this.element.bind("mousedown touchstart", function(e) {
            "touchstart" == e.type ? c.left = e.originalEvent.touches[0].pageX : "mousedown" == e.type && (c.left = e.pageX)
        }).bind("mouseup touchend", function(e) {
            "touchend" == e.type ? l.left = e.originalEvent.changedTouches[0].pageX : "mouseup" == e.type && (l.left = e.pageX), l.left - c.left > p ? n.prev(null, {
                direction: "right"
            }) : c.left - l.left > p && n.next(null, {
                direction: "left"
            }), n.options.autoplay && (n.stop(), n.start())
        }), setTimeout(function() {
            e(window).focus(function() {
                n.isPlaying() && n.next()
            })
        }, 100)
    }, flux.slider.prototype = {
        constructor: flux.slider,
        playing: !1,
        start: function() {
            var e = this;
            this.playing = !0, this.interval = setInterval(function() {
                e.transition()
            }, this.options.delay), "function" == typeof this.options.onStartEnd && this.options.onStartEnd(this.interval)
        },
        stop: function() {
            this.playing = !1, clearInterval(this.interval), this.interval = null
        },
        isPlaying: function() {
            return this.playing
        },
        next: function(e, t) {
            t = t || {}, t.direction = "left", this.showImage(this.currentImageIndex + 1, e, t)
        },
        prev: function(e, t) {
            t = t || {}, t.direction = "right", this.showImage(this.currentImageIndex - 1, e, t)
        },
        showImage: function(e, t, i) {
            this.setNextIndex(e), this.setupImages(), this.transition(t, i)
        },
        finishedLoading: function() {
            var t = this;
            if (this.container.css({
                width: this.width + "px",
                height: this.height + "px"
            }), this.imageContainer.removeClass("loading1"), this.options.pagination && (this.pagination = e('<ul class="pagination"></ul>').css({
                margin: "0px",
                padding: "0px",
                "text-align": "center"
            }), this.pagination.bind("click", function(i) {
                i.preventDefault(), t.showImage(e(i.target).data("index"))
            }), e(this.images).each(function(i, n) {
                var a = e('<li data-index="' + i + '">' + (i + 1) + "</li>").css({
                    display: "inline-block",
                    "margin-left": "0.5em",
                    cursor: "pointer"
                }).appendTo(t.pagination);
                0 == i && a.css("margin-left", 0).addClass("current")
            }), this.container.append(this.pagination)), e(this.imageContainer).css({
                width: this.width + "px",
                height: this.height + "px"
            }), e(this.image1).css({
                width: this.width + "px",
                height: this.height + "px"
            }), e(this.image2).css({
                width: this.width + "px",
                height: this.height + "px"
            }), this.container.css({
                width: this.width + "px",
                height: this.height + (this.options.pagination ? this.pagination.height() : 0) + "px"
            }), this.options.controls) {
                var i = {
                    padding: "4px 10px 10px",
                    "font-size": "60px",
                    "font-family": "arial, sans-serif",
                    "line-height": "1em",
                    "font-weight": "bold",
                    color: "#FFF",
                    "text-decoration": "none",
                    background: "rgba(0,0,0,0.5)",
                    position: "absolute",
                    "z-index": 2e3
                };
                this.nextButton = e('<a href="#">»</a>').css(i).css3({
                    "border-radius": "4px"
                }).appendTo(this.surface).bind("click", function(e) {
                    e.preventDefault(), t.next()
                }), this.prevButton = e('<a href="#">«</a>').css(i).css3({
                    "border-radius": "4px"
                }).appendTo(this.surface).bind("click", function(e) {
                    e.preventDefault(), t.prev()
                });
                var n = (this.height - this.nextButton.height()) / 2;
                this.nextButton.css({
                    top: n + "px",
                    right: "10px"
                }), this.prevButton.css({
                    top: n + "px",
                    left: "10px"
                })
            }
            this.options.captions && (this.captionBar = e('<div class="caption"></div>').css({
                background: "rgba(0,0,0,0.6)",
                color: "#FFF",
                "font-size": "16px",
                "font-family": "helvetica, arial, sans-serif",
                "text-decoration": "none",
                "font-weight": "bold",
                padding: "1.5em 1em",
                opacity: 0,
                position: "absolute",
                "z-index": 110,
                width: "100%",
                bottom: 0
            }).css3({
                "transition-property": "opacity",
                "transition-duration": "800ms",
                "box-sizing": "border-box"
            }).prependTo(this.surface)), this.updateCaption()
        },
        setupImages: function() {
            var t = this.getImage(this.currentImageIndex),
                i = {
                    background: 'url("' + t.src + '") 50% 50% / contain no-repeat ' + this.options.bgColor,
                    zIndex: 101,
                    cursor: "auto"
                };
            e(t).data("href") ? (i.cursor = "pointer", this.image1.addClass("hasLink"), this.image1.data("href", e(t).data("href"))) : (this.image1.removeClass("hasLink"), this.image1.data("href", null)), this.image1.css(i).children().remove(), this.image2.css({
                background: 'url("' + this.getImage(this.nextImageIndex).src + '") 50% 50% / contain no-repeat ' + this.options.bgColor,
                zIndex: 100
            }), this.options.pagination && this.pagination && (this.pagination.find("li.current").removeClass("current"), e(this.pagination.find("li")[this.currentImageIndex]).addClass("current"))
        },
        transition: function(t, i) {
            if (void 0 == t || !flux.transitions[t]) {
                var n = Math.floor(Math.random() * this.options.transitions.length);
                t = this.options.transitions[n]
            }
            var a = null;
            try {
                a = new flux.transitions[t](this, e.extend(this.options[t] ? this.options[t] : {}, i))
            } catch (r) {
                a = new flux.transition(this, {
                    fallback: !0
                })
            }
            a.run(), this.currentImageIndex = this.nextImageIndex, this.setNextIndex(this.currentImageIndex + 1), this.updateCaption()
        },
        updateCaption: function() {
            var t = e(this.getImage(this.currentImageIndex)).attr("title");
            this.options.captions && this.captionBar && ("" !== t && this.captionBar.html(t), this.captionBar.css("opacity", "" === t ? 0 : 1))
        },
        getImage: function(e) {
            return e %= this.images.length, this.images[e]
        },
        setNextIndex: function(e) {
            void 0 == e && (e = this.currentImageIndex + 1), this.nextImageIndex = e, this.nextImageIndex > this.images.length - 1 && (this.nextImageIndex = 0), this.nextImageIndex < 0 && (this.nextImageIndex = this.images.length - 1)
        },
        increment: function() {
            this.currentImageIndex++, this.currentImageIndex > this.images.length - 1 && (this.currentImageIndex = 0)
        }
    }
}(window.jQuery || window.Zepto),
function(e) {
    flux.browser = {
        init: function() {
            if (void 0 === flux.browser.supportsTransitions) {
                var t = (document.createElement("div"), ["-webkit", "-moz", "-o", "-ms"]);
                if (window.Modernizr && void 0 !== Modernizr.csstransitions ? flux.browser.supportsTransitions = Modernizr.csstransitions : flux.browser.supportsTransitions = this.supportsCSSProperty("Transition"), window.Modernizr && void 0 !== Modernizr.csstransforms3d) flux.browser.supports3d = Modernizr.csstransforms3d;
                else if (flux.browser.supports3d = this.supportsCSSProperty("Perspective"), flux.browser.supports3d && "webkitPerspective" in e("body").get(0).style) {
                    var i = e('<div id="csstransform3d"></div>'),
                        n = e('<style media="(transform-3d), (' + t.join("-transform-3d),(") + '-transform-3d)">div#csstransform3d { position: absolute; left: 9px }</style>');
                    e("body").append(i), e("head").append(n), flux.browser.supports3d = 9 == i.get(0).offsetLeft, i.remove(), n.remove()
                }
            }
        },
        supportsCSSProperty: function(e) {
            for (var t = document.createElement("div"), i = ["Webkit", "Moz", "O", "Ms"], n = !1, a = 0; a < i.length; a++) i[a] + e in t.style && (n = n || !0);
            return n
        },
        translate: function(e, t, i) {
            return e = void 0 != e ? e : 0, t = void 0 != t ? t : 0, i = void 0 != i ? i : 0, "translate" + (flux.browser.supports3d ? "3d(" : "(") + e + "px," + t + (flux.browser.supports3d ? "px," + i + "px)" : "px)")
        },
        rotateX: function(e) {
            return flux.browser.rotate("x", e)
        },
        rotateY: function(e) {
            return flux.browser.rotate("y", e)
        },
        rotateZ: function(e) {
            return flux.browser.rotate("z", e)
        },
        rotate: function(e, t) {
            return !e in {
                x: "",
                y: "",
                z: ""
            } && (e = "z"), t = void 0 != t ? t : 0, flux.browser.supports3d ? "rotate3d(" + ("x" == e ? "1" : "0") + ", " + ("y" == e ? "1" : "0") + ", " + ("z" == e ? "1" : "0") + ", " + t + "deg)" : "z" == e ? "rotate(" + t + "deg)" : ""
        }
    }, e(function() {
        flux.browser.init()
    })
}(window.jQuery || window.Zepto),
function(e) {
    e.fn.css3 = function(e) {
        var t = {},
            i = ["webkit", "moz", "ms", "o"];
        for (var n in e) {
            for (var a = 0; a < i.length; a++) t["-" + i[a] + "-" + n] = e[n];
            t[n] = e[n]
        }
        return this.css(t), this
    }, e.fn.transitionEnd = function(t) {
        for (var i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd"], n = 0; n < i.length; n++) this.bind(i[n], function(n) {
            for (var a = 0; a < i.length; a++) e(this).unbind(i[a]);
            t && t.call(this, n)
        });
        return this
    }, flux.transition = function(t, i) {
        if (this.options = e.extend({
            requires3d: !1,
            after: function() {}
        }, i), this.slider = t, this.options.requires3d && !flux.browser.supports3d || !flux.browser.supportsTransitions || this.options.fallback === !0) {
            var n = this;
            this.options.after = void 0, this.options.setup = function() {
                n.fallbackSetup()
            }, this.options.execute = function() {
                n.fallbackExecute()
            }
        }
    }, flux.transition.prototype = {
        constructor: flux.transition,
        hasFinished: !1,
        run: function() {
            var e = this;
            void 0 !== this.options.setup && this.options.setup.call(this), this.slider.image1.css({
                "background-image": "none"
            }), this.slider.imageContainer.css("overflow", this.options.requires3d ? "visible" : "hidden"), setTimeout(function() {
                void 0 !== e.options.execute && e.slider.image1.css("background-color", ""), e.options.execute.call(e)
            }, 5)
        },
        finished: function() {
            this.hasFinished || (this.hasFinished = !0, this.options.after && this.options.after.call(this), this.slider.imageContainer.css("overflow", "hidden"), this.slider.setupImages(), this.slider.element.trigger("fluxTransitionEnd", {
                currentImage: this.slider.getImage(this.slider.currentImageIndex)
            }))
        },
        fallbackSetup: function() {},
        fallbackExecute: function() {
            this.finished()
        }
    }, flux.transitions = {}, flux.transition_grid = function(t, i) {
        return new flux.transition(t, e.extend({
            columns: 6,
            rows: 6,
            forceSquare: !1,
            setup: function() {
                var t = this.slider.image1.width(),
                    i = this.slider.image1.height(),
                    n = Math.floor(t / this.options.columns),
                    a = Math.floor(i / this.options.rows);
                this.options.forceSquare && (a = n, this.options.rows = Math.floor(i / a));
                for (var r = t - this.options.columns * n, s = Math.ceil(r / this.options.columns), o = i - this.options.rows * a, c = Math.ceil(o / this.options.rows), l = (this.slider.image1.height(), 0), p = 0, d = document.createDocumentFragment(), u = 0; u < this.options.columns; u++) {
                    var h = n,
                        p = 0;
                    if (r > 0) {
                        var g = r >= s ? s : r;
                        h += g, r -= g
                    }
                    for (var m = 0; m < this.options.rows; m++) {
                        var f = a,
                            v = o;
                        if (v > 0) {
                            var g = v >= c ? c : v;
                            f += g, v -= g
                        }
                        var b = e('<div class="tile tile-' + u + "-" + m + '"></div>').css({
                            width: h + "px",
                            height: f + "px",
                            position: "absolute",
                            top: p + "px",
                            left: l + "px"
                        });
                        this.options.renderTile.call(this, b, u, m, h, f, l, p), d.appendChild(b.get(0)), p += f
                    }
                    l += h
                }
                this.slider.image1.get(0).appendChild(d)
            },
            execute: function() {
                var e = this,
                    t = this.slider.image1.height(),
                    i = this.slider.image1.find("div.barcontainer");
                this.slider.image2.hide(), i.last().transitionEnd(function(t) {
                    e.slider.image2.show(), e.finished()
                }), i.css3({
                    transform: flux.browser.rotateX(-90) + " " + flux.browser.translate(0, t / 2, t / 2)
                })
            },
            renderTile: function(e, t, i, n, a, r, s) {}
        }, i))
    }
}(window.jQuery || window.Zepto),
function(e) {
    flux.transitions.bars = function(t, i) {
        return new flux.transition_grid(t, e.extend({
            columns: 10,
            rows: 1,
            delayBetweenBars: 40,
            renderTile: function(t, i, n, a, r, s, o) {
                e(t).css({
                    background: this.slider.image1.css("background"),
                    "background-size": this.slider.width + "px " + this.slider.height + "px",
                    "background-position": "-" + s + "px 0px"
                }).css3({
                    "transition-duration": "400ms",
                    "transition-timing-function": "ease-in",
                    "transition-property": "all",
                    "transition-delay": i * this.options.delayBetweenBars + "ms"
                })
            },
            execute: function() {
                var t = this,
                    i = this.slider.image1.height(),
                    n = this.slider.image1.find("div.tile");
                e(n[n.length - 1]).transitionEnd(function() {
                    t.finished()
                }), setTimeout(function() {
                    n.css({
                        opacity: "0.5"
                    }).css3({
                        transform: flux.browser.translate(0, i)
                    })
                }, 50)
            }
        }, i))
    }
}(window.jQuery || window.Zepto),
function(e) {
    flux.transitions.bars3d = function(t, i) {
        return new flux.transition_grid(t, e.extend({
            requires3d: !0,
            columns: 7,
            rows: 1,
            delayBetweenBars: 150,
            perspective: 1e3,
            renderTile: function(t, i, n, a, r, s, o) {
                var c = e('<div class="bar-' + i + '"></div>').css({
                        width: a + "px",
                        height: "100%",
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        "z-index": 200,
                        background: this.slider.image1.css("background"),
                        "background-size": this.slider.width + "px " + this.slider.height + "px",
                        "background-position": "-" + s + "px 0px",
                        "background-repeat": "no-repeat"
                    }).css3({
                        "backface-visibility": "hidden"
                    }),
                    l = e(c.get(0).cloneNode(!1)).css({
                        "background-image": this.slider.image2.css("background-image")
                    }).css3({
                        transform: flux.browser.rotateX(90) + " " + flux.browser.translate(0, -r / 2, r / 2)
                    }),
                    p = e('<div class="side bar-' + i + '"></div>').css({
                        width: r + "px",
                        height: r + "px",
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        background: "#222",
                        "z-index": 190
                    }).css3({
                        transform: flux.browser.rotateY(90) + " " + flux.browser.translate(r / 2, 0, -r / 2) + " " + flux.browser.rotateY(180),
                        "backface-visibility": "hidden"
                    }),
                    d = e(p.get(0).cloneNode(!1)).css3({
                        transform: flux.browser.rotateY(90) + " " + flux.browser.translate(r / 2, 0, a - r / 2)
                    });
                e(t).css({
                    width: a + "px",
                    height: "100%",
                    position: "absolute",
                    top: "0px",
                    left: s + "px",
                    "z-index": i > this.options.columns / 2 ? 1e3 - i : 1e3
                }).css3({
                    "transition-duration": "800ms",
                    "transition-timing-function": "linear",
                    "transition-property": "all",
                    "transition-delay": i * this.options.delayBetweenBars + "ms",
                    "transform-style": "preserve-3d"
                }).append(c).append(l).append(p).append(d)
            },
            execute: function() {
                this.slider.image1.css3({
                    perspective: this.options.perspective,
                    "perspective-origin": "50% 50%"
                }).css({
                    "-moz-transform": "perspective(" + this.options.perspective + "px)",
                    "-moz-perspective": "none",
                    "-moz-transform-style": "preserve-3d"
                });
                var e = this,
                    t = this.slider.image1.height(),
                    i = this.slider.image1.find("div.tile");
                this.slider.image2.hide(), i.last().transitionEnd(function(t) {
                    e.slider.image1.css3({
                        "transform-style": "flat"
                    }), e.slider.image2.show(), e.finished()
                }), setTimeout(function() {
                    i.css3({
                        transform: flux.browser.rotateX(-90) + " " + flux.browser.translate(0, t / 2, t / 2)
                    })
                }, 50)
            }
        }, i))
    }
}(window.jQuery || window.Zepto),
function(e) {
    flux.transitions.blinds = function(t, i) {
        return new flux.transitions.bars(t, e.extend({
            execute: function() {
                var t = this,
                    i = (this.slider.image1.height(), this.slider.image1.find("div.tile"));
                e(i[i.length - 1]).transitionEnd(function() {
                    t.finished()
                }), setTimeout(function() {
                    i.css({
                        opacity: "0.5"
                    }).css3({
                        transform: "scalex(0.0001)"
                    })
                }, 50)
            }
        }, i))
    }
}(window.jQuery || window.Zepto),
function(e) {
    flux.transitions.zip = function(t, i) {
        return new flux.transitions.bars(t, e.extend({
            execute: function() {
                var t = this,
                    i = this.slider.image1.height(),
                    n = this.slider.image1.find("div.tile");
                e(n[n.length - 1]).transitionEnd(function() {
                    t.finished()
                }), setTimeout(function() {
                    n.each(function(t, n) {
                        e(n).css({
                            opacity: "0.3"
                        }).css3({
                            transform: flux.browser.translate(0, t % 2 ? "-" + 2 * i : i)
                        })
                    })
                }, 20)
            }
        }, i))
    }
}(window.jQuery || window.Zepto),
function(e) {
    flux.transitions.blocks = function(t, i) {
        return new flux.transition_grid(t, e.extend({
            forceSquare: !0,
            delayBetweenBars: 100,
            renderTile: function(t, i, n, a, r, s, o) {
                var c = Math.floor(10 * Math.random() * this.options.delayBetweenBars);
                e(t).css({
                    background: this.slider.image1.css("background"),
                    "background-size": this.slider.width + "px " + this.slider.height + "px",
                    "background-position": "-" + s + "px -" + o + "px"
                }).css3({
                    "transition-duration": "350ms",
                    "transition-timing-function": "ease-in",
                    "transition-property": "all",
                    "transition-delay": c + "ms"
                }), void 0 === this.maxDelay && (this.maxDelay = 0), c > this.maxDelay && (this.maxDelay = c, this.maxDelayTile = t)
            },
            execute: function() {
                var t = this,
                    i = this.slider.image1.find("div.tile");
                this.maxDelayTile.transitionEnd(function() {
                    t.finished()
                }), setTimeout(function() {
                    i.each(function(t, i) {
                        e(i).css({
                            opacity: "0"
                        }).css3({
                            transform: "scale(0.8)"
                        })
                    })
                }, 50)
            }
        }, i))
    }
}(window.jQuery || window.Zepto),
function(e) {
    flux.transitions.blocks2 = function(t, i) {
        return new flux.transition_grid(t, e.extend({
            cols: 12,
            forceSquare: !0,
            delayBetweenDiagnols: 150,
            renderTile: function(t, i, n, a, r, s, o) {
                Math.floor(10 * Math.random() * this.options.delayBetweenBars), e(t).css({
                    background: this.slider.image1.css("background"),
                    "background-size": this.slider.width + "px " + this.slider.height + "px",
                    "background-position": "-" + s + "px -" + o + "px"
                }).css3({
                    "transition-duration": "350ms",
                    "transition-timing-function": "ease-in",
                    "transition-property": "all",
                    "transition-delay": (i + n) * this.options.delayBetweenDiagnols + "ms",
                    "backface-visibility": "hidden"
                })
            },
            execute: function() {
                var t = this,
                    i = this.slider.image1.find("div.tile");
                i.last().transitionEnd(function() {
                    t.finished()
                }), setTimeout(function() {
                    i.each(function(t, i) {
                        e(i).css({
                            opacity: "0"
                        }).css3({
                            transform: "scale(0.8)"
                        })
                    })
                }, 50)
            }
        }, i))
    }
}(window.jQuery || window.Zepto),
function(e) {
    flux.transitions.cube = function(t, i) {
        return new flux.transition(t, e.extend({
            requires3d: !0,
            barWidth: 100,
            direction: "left",
            perspective: 1e3,
            setup: function() {
                var t = this.slider.image1.width(),
                    i = this.slider.image1.height();
                this.slider.image1.css3({
                    perspective: this.options.perspective,
                    "perspective-origin": "50% 50%"
                }), this.cubeContainer = e('<div class="cube"></div>').css({
                    width: t + "px",
                    height: i + "px",
                    position: "relative"
                }).css3({
                    "transition-duration": "800ms",
                    "transition-timing-function": "linear",
                    "transition-property": "all",
                    "transform-style": "preserve-3d"
                });
                var n = {
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        top: "0px",
                        left: "0px"
                    },
                    a = e('<div class="face current"></div>').css(e.extend(n, {
                        background: this.slider.image1.css("background"),
                        "background-size": this.slider.width + "px " + this.slider.height + "px"
                    })).css3({
                        "backface-visibility": "hidden"
                    });
                this.cubeContainer.append(a);
                var r = e('<div class="face next"></div>').css(e.extend(n, {
                    background: this.slider.image2.css("background-image")
                })).css3({
                    transform: this.options.transitionStrings.call(this, this.options.direction, "nextFace"),
                    "backface-visibility": "hidden"
                });
                this.cubeContainer.append(r), this.slider.image1.append(this.cubeContainer)
            },
            execute: function() {
                var e = this;
                this.slider.image1.width(), this.slider.image1.height(), this.slider.image2.hide(), this.cubeContainer.transitionEnd(function() {
                    e.slider.image2.show(), e.finished()
                }), setTimeout(function() {
                    e.cubeContainer.css3({
                        transform: e.options.transitionStrings.call(e, e.options.direction, "container")
                    })
                }, 50)
            },
            transitionStrings: function(e, t) {
                var i = this.slider.image1.width(),
                    n = this.slider.image1.height(),
                    a = {
                        up: {
                            nextFace: flux.browser.rotateX(-90) + " " + flux.browser.translate(0, n / 2, n / 2),
                            container: flux.browser.rotateX(90) + " " + flux.browser.translate(0, -n / 2, n / 2)
                        },
                        down: {
                            nextFace: flux.browser.rotateX(90) + " " + flux.browser.translate(0, -n / 2, n / 2),
                            container: flux.browser.rotateX(-90) + " " + flux.browser.translate(0, n / 2, n / 2)
                        },
                        left: {
                            nextFace: flux.browser.rotateY(90) + " " + flux.browser.translate(i / 2, 0, i / 2),
                            container: flux.browser.rotateY(-90) + " " + flux.browser.translate(-i / 2, 0, i / 2)
                        },
                        right: {
                            nextFace: flux.browser.rotateY(-90) + " " + flux.browser.translate(-i / 2, 0, i / 2),
                            container: flux.browser.rotateY(90) + " " + flux.browser.translate(i / 2, 0, i / 2)
                        }
                    };
                return a[e] && a[e][t] ? a[e][t] : !1
            }
        }, i))
    }
}(window.jQuery || window.Zepto),
function(e) {
    flux.transitions.tiles3d = function(t, i) {
        return new flux.transition_grid(t, e.extend({
            requires3d: !0,
            forceSquare: !0,
            columns: 5,
            perspective: 600,
            delayBetweenBarsX: 200,
            delayBetweenBarsY: 150,
            renderTile: function(t, i, n, a, r, s, o) {
                var c = e("<div></div>").css({
                        width: a + "px",
                        height: r + "px",
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        background: this.slider.image1.css("background"),
                        "background-size": this.slider.width + "px " + this.slider.height + "px",
                        "background-position": "-" + s + "px -" + o + "px",
                        "background-repeat": "no-repeat",
                        "-moz-transform": "translateZ(1px)"
                    }).css3({
                        "backface-visibility": "hidden"
                    }),
                    l = e(c.get(0).cloneNode(!1)).css({
                        "background-image": this.slider.image2.css("background-image")
                    }).css3({
                        transform: flux.browser.rotateY(180),
                        "backface-visibility": "hidden"
                    });
                e(t).css({
                    "z-index": (i > this.options.columns / 2 ? 500 - i : 500) + (n > this.options.rows / 2 ? 500 - n : 500)
                }).css3({
                    "transition-duration": "800ms",
                    "transition-timing-function": "ease-out",
                    "transition-property": "all",
                    "transition-delay": i * this.options.delayBetweenBarsX + n * this.options.delayBetweenBarsY + "ms",
                    "transform-style": "preserve-3d"
                }).append(c).append(l)
            },
            execute: function() {
                this.slider.image1.css3({
                    perspective: this.options.perspective,
                    "perspective-origin": "50% 50%"
                });
                var e = this,
                    t = this.slider.image1.find("div.tile");
                this.slider.image2.hide(), t.last().transitionEnd(function(t) {
                    e.slider.image2.show(), e.finished()
                }), setTimeout(function() {
                    t.css3({
                        transform: flux.browser.rotateY(180)
                    })
                }, 50)
            }
        }, i))
    }
}(window.jQuery || window.Zepto),
function(e) {
    flux.transitions.turn = function(t, i) {
        return new flux.transition(t, e.extend({
            requires3d: !0,
            perspective: 1300,
            direction: "left",
            setup: function() {
                var t = e('<div class="tab"></div>').css({
                        width: "50%",
                        height: "100%",
                        position: "absolute",
                        top: "0px",
                        left: "left" == this.options.direction ? "50%" : "0%",
                        "z-index": 101
                    }).css3({
                        "transform-style": "preserve-3d",
                        "transition-duration": "1000ms",
                        "transition-timing-function": "ease-out",
                        "transition-property": "all",
                        "transform-origin": "left" == this.options.direction ? "left center" : "right center"
                    }),
                    i = (e("<div></div>").appendTo(t).css({
                        background: this.slider.image1.css("background"),
                        "background-size": this.slider.width + "px " + this.slider.height + "px",
                        "background-position": ("left" == this.options.direction ? "-" + this.slider.image1.width() / 2 : 0) + "px 0",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        "-moz-transform": "translateZ(1px)"
                    }).css3({
                        "backface-visibility": "hidden"
                    }), e("<div></div>").appendTo(t).css({
                        background: this.slider.image2.css("background"),
                        "background-size": this.slider.width + "px " + this.slider.height + "px",
                        "background-position": ("left" == this.options.direction ? 0 : "-" + this.slider.image1.width() / 2) + "px 0",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0"
                    }).css3({
                        transform: flux.browser.rotateY(180),
                        "backface-visibility": "hidden"
                    }), e("<div></div>").css({
                        position: "absolute",
                        top: "0",
                        left: "left" == this.options.direction ? "0" : "50%",
                        width: "50%",
                        height: "100%",
                        background: this.slider.image1.css("background"),
                        "background-size": this.slider.width + "px " + this.slider.height + "px",
                        "background-position": ("left" == this.options.direction ? 0 : "-" + this.slider.image1.width() / 2) + "px 0",
                        "z-index": 100
                    })),
                    n = e('<div class="overlay"></div>').css({
                        position: "absolute",
                        top: "0",
                        left: "left" == this.options.direction ? "50%" : "0",
                        width: "50%",
                        height: "100%",
                        background: "#000",
                        opacity: 1
                    }).css3({
                        "transition-duration": "800ms",
                        "transition-timing-function": "linear",
                        "transition-property": "opacity"
                    }),
                    a = e("<div></div>").css3({
                        width: "100%",
                        height: "100%"
                    }).css3({
                        perspective: this.options.perspective,
                        "perspective-origin": "50% 50%"
                    }).append(t).append(i).append(n);
                this.slider.image1.append(a)
            },
            execute: function() {
                var e = this;
                this.slider.image1.find("div.tab").first().transitionEnd(function() {
                    e.finished()
                }), setTimeout(function() {
                    e.slider.image1.find("div.tab").css3({
                        transform: flux.browser.rotateY("left" == e.options.direction ? -179 : 179)
                    }), e.slider.image1.find("div.overlay").css({
                        opacity: 0
                    })
                }, 50)
            }
        }, i))
    }
}(window.jQuery || window.Zepto),
function(e) {
    flux.transitions.slide = function(t, i) {
        return new flux.transition(t, e.extend({
            direction: "left",
            setup: function() {
                var t = this.slider.image1.width(),
                    i = this.slider.image1.height(),
                    n = e('<div class="current"></div>').css({
                        height: i + "px",
                        width: t + "px",
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        background: this.slider["left" == this.options.direction ? "image1" : "image2"].css("background")
                    }).css3({
                        "backface-visibility": "hidden"
                    }),
                    a = e('<div class="next"></div>').css({
                        height: i + "px",
                        width: t + "px",
                        position: "absolute",
                        top: "0px",
                        left: t + "px",
                        background: this.slider["left" == this.options.direction ? "image2" : "image1"].css("background")
                    }).css3({
                        "backface-visibility": "hidden"
                    });
                this.slideContainer = e('<div class="slide"></div>').css({
                    width: 2 * t + "px",
                    height: i + "px",
                    position: "relative",
                    left: "left" == this.options.direction ? "0px" : -t + "px",
                    "z-index": 101
                }).css3({
                    "transition-duration": "600ms",
                    "transition-timing-function": "ease-in",
                    "transition-property": "all"
                }), this.slideContainer.append(n).append(a), this.slider.image1.append(this.slideContainer)
            },
            execute: function() {
                var e = this,
                    t = this.slider.image1.width();
                "left" == this.options.direction && (t = -t), this.slideContainer.transitionEnd(function() {
                    e.finished()
                }), setTimeout(function() {
                    e.slideContainer.css3({
                        transform: flux.browser.translate(t)
                    })
                }, 50)
            }
        }, i))
    }
}(window.jQuery || window.Zepto),
function(e) {
    flux.transitions.explode = function(t, i) {
        return new flux.transition_grid(t, e.extend({
            columns: 6,
            forceSquare: !0,
            delayBetweenBars: 30,
            perspective: 800,
            requires3d: !0,
            renderTile: function(t, i, n, a, r, s, o) {
                var c = Math.floor(10 * Math.random() * this.options.delayBetweenBars);
                e(t).css({
                    background: this.slider.image1.css("background"),
                    "background-size": this.slider.width + "px " + this.slider.height + "px",
                    "background-position": "-" + s + "px -" + o + "px"
                }).css3({
                    "transition-duration": "500ms",
                    "transition-timing-function": "ease-in",
                    "transition-property": "all",
                    "transition-delay": c + "ms"
                }), void 0 === this.maxDelay && (this.maxDelay = 0), c > this.maxDelay && (this.maxDelay = c, this.maxDelayTile = t)
            },
            execute: function() {
                this.slider.image1.css3({
                    perspective: this.options.perspective,
                    "perspective-origin": "50% 50%"
                }).css({
                    "-moz-transform": "perspective(" + this.options.perspective + "px)",
                    "-moz-perspective": "none",
                    "-moz-transform-style": "preserve-3d"
                });
                var t = this,
                    i = this.slider.image1.find("div.tile");
                this.maxDelayTile.transitionEnd(function() {
                    t.slider.image1.css3({
                        "transform-style": "flat"
                    }), t.finished()
                }), setTimeout(function() {
                    i.each(function(t, i) {
                        e(i).css({
                            opacity: "0"
                        }).css3({
                            transform: flux.browser.translate(0, 0, 700) + " rotate3d(" + (Math.round(2 * Math.random()) - 1) + ", " + (Math.round(2 * Math.random()) - 1) + ", " + (Math.round(2 * Math.random()) - 1) + ", 90deg) "
                        })
                    })
                }, 50)
            }
        }, i))
    }
}(window.jQuery || window.Zepto),
function() {
    window.eqxiuSvg = {
        NAMESPACE: "http://www.w3.org/2000/svg",
        SYMBOLS: {
            bolt: '<path d="M32 0l-24 16 6 4-14 12 24-12-6-4z"></path>',
            camera: '<path d="M16 20c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4-2.209 0-4-1.791-4-4zM28 8l-3.289-6.643c-0.27-0.789-1.016-1.357-1.899-1.357h-5.492c-0.893 0-1.646 0.582-1.904 1.385l-3.412 6.615h-8.004c-2.209 0-4 1.791-4 4v20h32v-20c0-2.209-1.789-4-4-4zM6 16c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM20 28c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>',
            "checkmark-circle": '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM13.52 23.383l-7.362-7.363 2.828-2.828 4.533 4.535 9.617-9.617 2.828 2.828-12.444 12.445z"></path>',
            clock: '<path d="M16 4c6.617 0 12 5.383 12 12s-5.383 12-12 12-12-5.383-12-12 5.383-12 12-12zM16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16v0zM21.422 18.578l-3.422-3.426v-7.152h-4.023v7.992c0 0.602 0.277 1.121 0.695 1.492l3.922 3.922 2.828-2.828z"></path>',
            cloud: '<path d="M24 10c-0.379 0-0.738 0.061-1.102 0.111-1.394-2.465-3.972-4.111-6.898-4.111-2.988 0-5.566 1.666-6.941 4.1-0.352-0.047-0.704-0.1-1.059-0.1-4.41 0-8 3.588-8 8 0 4.414 3.59 8 8 8h16c4.41 0 8-3.586 8-8 0-4.412-3.59-8-8-8zM24 22h-16c-2.207 0-4-1.797-4-4 0-2.193 1.941-3.885 4.004-3.945 0.008 0.943 0.172 1.869 0.5 2.744l3.746-1.402c-0.168-0.444-0.25-0.915-0.25-1.397 0-2.205 1.793-4 4-4 1.293 0 2.465 0.641 3.199 1.639-1.929 1.461-3.199 3.756-3.199 6.361h4c0-2.205 1.793-4 4-4s4 1.795 4 4c0 2.203-1.793 4-4 4z"></path>',
            cog: '<path d="M32 17.969v-4l-4.781-1.992c-0.133-0.375-0.273-0.738-0.445-1.094l1.93-4.805-2.829-2.828-4.762 1.961c-0.363-0.176-0.734-0.324-1.117-0.461l-2.027-4.75h-4l-1.977 4.734c-0.398 0.141-0.781 0.289-1.16 0.469l-4.754-1.91-2.828 2.828 1.938 4.711c-0.188 0.387-0.34 0.781-0.485 1.188l-4.703 2.011v4l4.707 1.961c0.145 0.406 0.301 0.801 0.488 1.188l-1.902 4.742 2.828 2.828 4.723-1.945c0.379 0.18 0.766 0.324 1.164 0.461l2.023 4.734h4l1.98-4.758c0.379-0.141 0.754-0.289 1.113-0.461l4.797 1.922 2.828-2.828-1.969-4.773c0.168-0.359 0.305-0.723 0.438-1.094l4.782-2.039zM15.969 22c-3.312 0-6-2.688-6-6s2.688-6 6-6 6 2.688 6 6-2.688 6-6 6z"></path>',
            denied: '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM16 4c2.59 0 4.973 0.844 6.934 2.242l-16.696 16.688c-1.398-1.961-2.238-4.344-2.238-6.93 0-6.617 5.383-12 12-12zM16 28c-2.59 0-4.973-0.844-6.934-2.242l16.696-16.688c1.398 1.961 2.238 4.344 2.238 6.93 0 6.617-5.383 12-12 12z"></path>',
            earth: '<path d="M27.314 4.686c3.022 3.022 4.686 7.040 4.686 11.314s-1.664 8.292-4.686 11.314c-3.022 3.022-7.040 4.686-11.314 4.686s-8.292-1.664-11.314-4.686c-3.022-3.022-4.686-7.040-4.686-11.314s1.664-8.292 4.686-11.314c3.022-3.022 7.040-4.686 11.314-4.686s8.292 1.664 11.314 4.686zM25.899 25.9c1.971-1.971 3.281-4.425 3.821-7.096-0.421 0.62-0.824 0.85-1.073-0.538-0.257-2.262-2.335-0.817-3.641-1.621-1.375 0.927-4.466-1.802-3.941 1.276 0.81 1.388 4.375-1.858 2.598 1.079-1.134 2.050-4.145 6.592-3.753 8.946 0.049 3.43-3.504 0.715-4.729-0.422-0.824-2.279-0.281-6.262-2.434-7.378-2.338-0.102-4.344-0.314-5.25-2.927-0.545-1.87 0.58-4.653 2.584-5.083 2.933-1.843 3.98 2.158 6.731 2.232 0.854-0.894 3.182-1.178 3.375-2.18-1.805-0.318 2.29-1.517-0.173-2.199-1.358 0.16-2.234 1.409-1.512 2.467-2.632 0.614-2.717-3.809-5.247-2.414-0.064 2.206-4.132 0.715-1.407 0.268 0.936-0.409-1.527-1.594-0.196-1.379 0.654-0.036 2.854-0.807 2.259-1.325 1.225-0.761 2.255 1.822 3.454-0.059 0.866-1.446-0.363-1.713-1.448-0.98-0.612-0.685 1.080-2.165 2.573-2.804 0.497-0.213 0.973-0.329 1.336-0.296 0.752 0.868 2.142 1.019 2.215-0.104-1.862-0.892-3.915-1.363-6.040-1.363-3.051 0-5.952 0.969-8.353 2.762 0.645 0.296 1.012 0.664 0.39 1.134-0.483 1.439-2.443 3.371-4.163 3.098-0.893 1.54-1.482 3.238-1.733 5.017 1.441 0.477 1.773 1.42 1.464 1.736-0.734 0.64-1.185 1.548-1.418 2.541 0.469 2.87 1.818 5.515 3.915 7.612 2.644 2.644 6.16 4.1 9.899 4.1s7.255-1.456 9.899-4.1z"></path>',
            eye: '<path d="M16 4c-8.836 0-16 11.844-16 11.844s7.164 12.156 16 12.156 16-12.156 16-12.156-7.164-11.844-16-11.844zM16 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM12 16c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4-2.209 0-4-1.791-4-4z"></path>',
            facebook: '<path d="M17.996 32h-5.996v-16h-4v-5.514l4-0.002-0.007-3.248c0-4.498 1.22-7.236 6.519-7.236h4.412v5.515h-2.757c-2.064 0-2.163 0.771-2.163 2.209l-0.008 2.76h4.959l-0.584 5.514-4.37 0.002-0.004 16z"></path>',
            fork: '<path d="M20 0v3.875c0 1.602-0.625 3.109-1.754 4.238l-11.316 11.254c-1.789 1.785-2.774 4.129-2.883 6.633h-4.047l6 6 6-6h-3.957c0.105-1.438 0.684-2.773 1.711-3.805l11.316-11.25c1.891-1.89 2.93-4.398 2.93-7.070v-3.875h-4zM23.953 26c-0.109-2.504-1.098-4.848-2.887-6.641l-2.23-2.215-2.836 2.821 2.242 2.23c1.031 1.027 1.609 2.367 1.715 3.805h-3.957l6 6 6-6h-4.047z"></path>',
            globe: '<path d="M15 2c-8.284 0-15 6.716-15 15s6.716 15 15 15c8.284 0 15-6.716 15-15s-6.716-15-15-15zM23.487 22c0.268-1.264 0.437-2.606 0.492-4h3.983c-0.104 1.381-0.426 2.722-0.959 4h-3.516zM6.513 12c-0.268 1.264-0.437 2.606-0.492 4h-3.983c0.104-1.381 0.426-2.722 0.959-4h3.516zM21.439 12c0.3 1.28 0.481 2.62 0.54 4h-5.979v-4h5.439zM16 10v-5.854c0.456 0.133 0.908 0.355 1.351 0.668 0.831 0.586 1.625 1.488 2.298 2.609 0.465 0.775 0.867 1.638 1.203 2.578h-4.852zM10.351 7.422c0.673-1.121 1.467-2.023 2.298-2.609 0.443-0.313 0.895-0.535 1.351-0.668v5.854h-4.852c0.336-0.94 0.738-1.803 1.203-2.578zM14 12v4h-5.979c0.059-1.38 0.24-2.72 0.54-4h5.439zM2.997 22c-0.533-1.278-0.854-2.619-0.959-4h3.983c0.055 1.394 0.224 2.736 0.492 4h-3.516zM8.021 18h5.979v4h-5.439c-0.3-1.28-0.481-2.62-0.54-4zM14 24v5.854c-0.456-0.133-0.908-0.355-1.351-0.668-0.831-0.586-1.625-1.488-2.298-2.609-0.465-0.775-0.867-1.638-1.203-2.578h4.852zM19.649 26.578c-0.673 1.121-1.467 2.023-2.298 2.609-0.443 0.312-0.895 0.535-1.351 0.668v-5.854h4.852c-0.336 0.94-0.738 1.802-1.203 2.578zM16 22v-4h5.979c-0.059 1.38-0.24 2.72-0.54 4h-5.439zM23.98 16c-0.055-1.394-0.224-2.736-0.492-4h3.516c0.533 1.278 0.855 2.619 0.959 4h-3.983zM25.958 10h-2.997c-0.582-1.836-1.387-3.447-2.354-4.732 1.329 0.636 2.533 1.488 3.585 2.54 0.671 0.671 1.261 1.404 1.766 2.192zM5.808 7.808c1.052-1.052 2.256-1.904 3.585-2.54-0.967 1.285-1.771 2.896-2.354 4.732h-2.997c0.504-0.788 1.094-1.521 1.766-2.192zM4.042 24h2.997c0.583 1.836 1.387 3.447 2.354 4.732-1.329-0.636-2.533-1.488-3.585-2.54-0.671-0.671-1.261-1.404-1.766-2.192zM24.192 26.192c-1.052 1.052-2.256 1.904-3.585 2.54 0.967-1.285 1.771-2.896 2.354-4.732h2.997c-0.504 0.788-1.094 1.521-1.766 2.192z"></path>',
            happy: '<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM16 18.711c3.623 0 7.070-0.963 10-2.654-0.455 5.576-4.785 9.942-10 9.942-5.215 0-9.544-4.371-10-9.947 2.93 1.691 6.377 2.658 10 2.658zM8 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3-1.105 0-2-1.343-2-3zM20 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3-1.105 0-2-1.343-2-3z"></path>',
            "heart-fill": '<path d="M16 5.844c-1.613-2.266-4.129-3.844-7.113-3.844-4.903 0-8.887 3.992-8.887 8.891v0.734l16.008 18.375 15.992-18.375v-0.734c0-4.899-3.984-8.891-8.887-8.891-2.984 0-5.5 1.578-7.113 3.844z"></path>',
            "heart-stroke": '<path d="M23.113 6c2.457 0 4.492 1.82 4.836 4.188l-11.945 13.718-11.953-13.718c0.344-2.368 2.379-4.188 4.836-4.188 2.016 0 3.855 2.164 3.855 2.164l3.258 3.461 3.258-3.461c0 0 1.84-2.164 3.855-2.164zM23.113 2c-2.984 0-5.5 1.578-7.113 3.844-1.613-2.266-4.129-3.844-7.113-3.844-4.903 0-8.887 3.992-8.887 8.891v0.734l16.008 18.375 15.992-18.375v-0.734c0-4.899-3.984-8.891-8.887-8.891v0z"></path>',
            home: '<path d="M16 0l-16 16h4v16h24v-16h4l-16-16zM24 28h-6v-6h-4v6h-6v-14.344l8-5.656 8 5.656v14.344z"></path>',
            iphone: '<path d="M16 0h-8c-4.418 0-8 3.582-8 8v16c0 4.418 3.582 8 8 8h8c4.418 0 8-3.582 8-8v-16c0-4.418-3.582-8-8-8zM12 30.062c-1.139 0-2.062-0.922-2.062-2.062s0.924-2.062 2.062-2.062 2.062 0.922 2.062 2.062-0.923 2.062-2.062 2.062zM20 24h-16v-16c0-2.203 1.795-4 4-4h8c2.203 0 4 1.797 4 4v16z"></path>',
            lock: '<path d="M14 0c-5.508 0-9.996 4.484-9.996 10v2h-4.004v14c0 3.309 2.691 6 6 6h12c3.309 0 6-2.691 6-6v-16c0-5.516-4.488-10-10-10zM11.996 24c-1.101 0-1.996-0.895-1.996-2s0.895-2 1.996-2c1.105 0 2 0.895 2 2s-0.894 2-2 2zM20 12h-11.996v-2c0-3.309 2.691-6 5.996-6 3.309 0 6 2.691 6 6v2z"></path>',
            mail: '<path d="M15.996 15.457l16.004-7.539v-3.918h-32v3.906zM16.004 19.879l-16.004-7.559v15.68h32v-15.656z"></path>',
            "minus-circle": '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM24 18h-16v-4h16v4z"></path>',
            moon: '<path d="M24.633 22.184c-8.188 0-14.82-6.637-14.82-14.82 0-2.695 0.773-5.188 2.031-7.363-6.824 1.968-11.844 8.187-11.844 15.644 0 9.031 7.32 16.355 16.352 16.355 7.457 0 13.68-5.023 15.648-11.844-2.18 1.254-4.672 2.028-7.367 2.028z"></path>',
            paperclip: '<path d="M17.293 15.292l-2.829-2.829-4 4c-1.953 1.953-1.953 5.119 0 7.071 1.953 1.953 5.118 1.953 7.071 0l10.122-9.879c3.123-3.124 3.123-8.188 0-11.313-3.125-3.124-8.19-3.124-11.313 0l-11.121 10.88c-4.296 4.295-4.296 11.26 0 15.557 4.296 4.296 11.261 4.296 15.556 0l6-6-2.829-2.829-5.999 6c-2.733 2.732-7.166 2.732-9.9 0-2.733-2.732-2.733-7.166 0-9.899l11.121-10.881c1.562-1.562 4.095-1.562 5.656 0 1.563 1.563 1.563 4.097 0 5.657l-10.121 9.879c-0.391 0.391-1.023 0.391-1.414 0s-0.391-1.023 0-1.414l4-4z"></path>',
            pin: '<path d="M17.070 2.93c-3.906-3.906-10.234-3.906-14.141 0-3.906 3.904-3.906 10.238 0 14.14 0.001 0 7.071 6.93 7.071 14.93 0-8 7.070-14.93 7.070-14.93 3.907-3.902 3.907-10.236 0-14.14zM10 14c-2.211 0-4-1.789-4-4s1.789-4 4-4 4 1.789 4 4-1.789 4-4 4z"></path>',
            "plus-circle": '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM24 18h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z"></path>',
            rain: '<path d="M23.998 6c-0.375 0-0.733 0.061-1.103 0.111-1.389-2.465-3.969-4.111-6.895-4.111-2.987 0-5.565 1.666-6.94 4.1-0.353-0.047-0.705-0.1-1.060-0.1-4.41 0-8 3.588-8 8s3.59 8 8 8h15.998c4.414 0 8-3.588 8-8s-3.586-8-8-8zM23.998 18h-15.998c-2.207 0-4-1.795-4-4 0-2.193 1.941-3.885 4.004-3.945 0.009 0.943 0.172 1.869 0.5 2.744l3.746-1.402c-0.168-0.444-0.25-0.915-0.25-1.397 0-2.205 1.793-4 4-4 1.293 0 2.465 0.641 3.199 1.639-1.928 1.461-3.199 3.756-3.199 6.361h4c0-2.205 1.795-4 3.998-4 2.211 0 4 1.795 4 4s-1.789 4-4 4zM3.281 29.438c-0.75 0.75-1.969 0.75-2.719 0s-0.75-1.969 0-2.719 5.438-2.719 5.438-2.719-1.969 4.688-2.719 5.438zM11.285 29.438c-0.75 0.75-1.965 0.75-2.719 0-0.75-0.75-0.75-1.969 0-2.719 0.754-0.75 5.438-2.719 5.438-2.719s-1.965 4.688-2.719 5.438zM19.28 29.438c-0.75 0.75-1.969 0.75-2.719 0s-0.75-1.969 0-2.719 5.437-2.719 5.437-2.719-1.968 4.688-2.718 5.438z"></path>',
            ribbon: '<path d="M8 20c-1.41 0-2.742-0.289-4-0.736v12.736l4-4 4 4v-12.736c-1.258 0.447-2.59 0.736-4 0.736zM0 8c0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8-4.418 0-8-3.582-8-8z"></path>',
            sad: '<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM9.997 24.398l-2.573-1.544c1.749-2.908 4.935-4.855 8.576-4.855 3.641 0 6.827 1.946 8.576 4.855l-2.573 1.544c-1.224-2.036-3.454-3.398-6.003-3.398-2.549 0-4.779 1.362-6.003 3.398z"></path>',
            smiley: '<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM22.003 19.602l2.573 1.544c-1.749 2.908-4.935 4.855-8.576 4.855s-6.827-1.946-8.576-4.855l2.573-1.544c1.224 2.036 3.454 3.398 6.003 3.398s4.779-1.362 6.003-3.398z"></path>',
            star: '<path d="M22.137 19.625l9.863-7.625h-12l-4-12-4 12h-12l9.875 7.594-3.875 12.406 10.016-7.68 9.992 7.68z"></path>',
            sun: '<path d="M16.001 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 7.999-3.582 7.999-8s-3.581-8-7.999-8v0zM14 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM4 6c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM2 14c1.105 0 2 0.895 2 2 0 1.107-0.895 2-2 2s-2-0.893-2-2c0-1.105 0.895-2 2-2zM4 26c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM14 30c0-1.109 0.895-2 2-2 1.108 0 2 0.891 2 2 0 1.102-0.892 2-2 2-1.105 0-2-0.898-2-2zM24 26c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM30 18c-1.104 0-2-0.896-2-2 0-1.107 0.896-2 2-2s2 0.893 2 2c0 1.104-0.896 2-2 2zM24 6c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2z"></path>',
            "thin-arrow-down": '<path d="M4.586 19.414l10 10c0.781 0.781 2.047 0.781 2.828 0l10-10c0.781-0.781 0.781-2.047 0-2.828s-2.047-0.781-2.828 0l-6.586 6.586v-19.172c0-1.105-0.895-2-2-2s-2 0.895-2 2v19.172l-6.586-6.586c-0.391-0.39-0.902-0.586-1.414-0.586s-1.024 0.195-1.414 0.586c-0.781 0.781-0.781 2.047 0 2.828z"></path>',
            "thin-arrow-down-left": '<path d="M18 28c1.105 0 2-0.895 2-2s-0.895-2-2-2h-7.172l16.586-16.586c0.781-0.781 0.781-2.047 0-2.828-0.391-0.391-0.902-0.586-1.414-0.586s-1.024 0.195-1.414 0.586l-16.586 16.586v-7.172c0-1.105-0.895-2-2-2s-2 0.895-2 2v14h14z"></path>',
            "thin-arrow-down-right": '<path d="M28 14c0-1.105-0.895-2-2-2s-2 0.895-2 2v7.172l-16.586-16.586c-0.781-0.781-2.047-0.781-2.828 0-0.391 0.391-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414l16.586 16.586h-7.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h14v-14z"></path>',
            "thin-arrow-left": '<path d="M12.586 4.586l-10 10c-0.781 0.781-0.781 2.047 0 2.828l10 10c0.781 0.781 2.047 0.781 2.828 0s0.781-2.047 0-2.828l-6.586-6.586h19.172c1.105 0 2-0.895 2-2s-0.895-2-2-2h-19.172l6.586-6.586c0.39-0.391 0.586-0.902 0.586-1.414s-0.195-1.024-0.586-1.414c-0.781-0.781-2.047-0.781-2.828 0z"></path>',
            "thin-arrow-right": '<path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>',
            "thin-arrow-up": '<path d="M27.414 12.586l-10-10c-0.781-0.781-2.047-0.781-2.828 0l-10 10c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l6.586-6.586v19.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-19.172l6.586 6.586c0.39 0.39 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828z"></path>',
            "thin-arrow-up-left": '<path d="M4 18c0 1.105 0.895 2 2 2s2-0.895 2-2v-7.172l16.586 16.586c0.781 0.781 2.047 0.781 2.828 0 0.391-0.391 0.586-0.902 0.586-1.414s-0.195-1.024-0.586-1.414l-16.586-16.586h7.172c1.105 0 2-0.895 2-2s-0.895-2-2-2h-14v14z"></path>',
            "thin-arrow-up-right": '<path d="M26.001 4c-0 0-0.001 0-0.001 0h-11.999c-1.105 0-2 0.895-2 2s0.895 2 2 2h7.172l-16.586 16.586c-0.781 0.781-0.781 2.047 0 2.828 0.391 0.391 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586l16.586-16.586v7.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-14h-1.999z"></path>',
            twitter: '<path d="M32 6.076c-1.177 0.522-2.443 0.875-3.771 1.034 1.355-0.813 2.396-2.099 2.887-3.632-1.269 0.752-2.674 1.299-4.169 1.593-1.198-1.276-2.904-2.073-4.792-2.073-3.626 0-6.565 2.939-6.565 6.565 0 0.515 0.058 1.016 0.17 1.496-5.456-0.274-10.294-2.888-13.532-6.86-0.565 0.97-0.889 2.097-0.889 3.301 0 2.278 1.159 4.287 2.921 5.465-1.076-0.034-2.088-0.329-2.974-0.821-0.001 0.027-0.001 0.055-0.001 0.083 0 3.181 2.263 5.834 5.266 6.437-0.551 0.15-1.131 0.23-1.73 0.23-0.423 0-0.834-0.041-1.235-0.118 0.835 2.608 3.26 4.506 6.133 4.559-2.247 1.761-5.078 2.81-8.154 2.81-0.53 0-1.052-0.031-1.566-0.092 2.905 1.863 6.356 2.95 10.064 2.95 12.076 0 18.679-10.004 18.679-18.68 0-0.285-0.006-0.568-0.019-0.849 1.283-0.926 2.396-2.082 3.276-3.398z"></path>',
            umbrella: '<path d="M16 0c-8.82 0-16 7.178-16 16h4c0-0.826 0.676-1.5 1.5-1.5 0.828 0 1.5 0.674 1.5 1.5h4c0-0.826 0.676-1.5 1.5-1.5 0.828 0 1.5 0.674 1.5 1.5v10c0 1.102-0.895 2-2 2-1.102 0-2-0.898-2-2h-4c0 3.309 2.695 6 6 6 3.312 0 6-2.691 6-6v-10c0-0.826 0.676-1.5 1.5-1.5 0.828 0 1.498 0.674 1.498 1.5h4c0-0.826 0.68-1.5 1.5-1.5 0.828 0 1.5 0.674 1.5 1.5h4c0-8.822-7.172-16-15.998-16z"></path>',
            unlock: '<path d="M14.004 0c-5.516 0-9.996 4.484-9.996 10h3.996c0-3.309 2.688-6 6-6 3.305 0 5.996 2.691 5.996 6v2h-20v14c0 3.309 2.695 6 6 6h12c3.305 0 6-2.691 6-6v-16c0-5.516-4.488-10-9.996-10zM12 24c-1.102 0-2-0.895-2-2s0.898-2 2-2c1.109 0 2 0.895 2 2s-0.891 2-2 2z"></path>',
            user: '<path d="M12 16c-6.625 0-12 5.375-12 12 0 2.211 1.789 4 4 4h16c2.211 0 4-1.789 4-4 0-6.625-5.375-12-12-12zM6 6c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6-3.314 0-6-2.686-6-6z"></path>',
            wondering: '<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM23.304 18.801l0.703 2.399-13.656 4-0.703-2.399zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2z"></path>',
            "x-circle": '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM23.914 21.086l-2.828 2.828-5.086-5.086-5.086 5.086-2.828-2.828 5.086-5.086-5.086-5.086 2.828-2.828 5.086 5.086 5.086-5.086 2.828 2.828-5.086 5.086 5.086 5.086z"></path>',
            android: '<path d="M50.143,45.057h-0.241c-2.13,0-3.857-1.735-3.857-3.875V24.713 c0-2.14,1.727-3.875,3.857-3.875h0.241c2.13,0,3.857,1.735,3.857,3.875v16.469C54,43.323,52.273,45.057,50.143,45.057z M39.777,51.112h-2.169v8.961c0,2.14-1.727,3.875-3.857,3.875h-0.241c-2.13,0-3.857-1.735-3.857-3.875v-8.961h-5.304v8.961 c0,2.14-1.727,3.875-3.857,3.875H20.25c-2.13,0-3.857-1.735-3.857-3.875v-8.961h-2.17c-2.663,0-4.821-2.169-4.821-4.844V21.565 h35.196v24.704C44.598,48.944,42.44,51.112,39.777,51.112z M18.451,5.498l-2.777-4.832c-0.1-0.174-0.041-0.396,0.132-0.496 l0.209-0.121c0.173-0.1,0.394-0.041,0.494,0.133l2.802,4.877c2.297-1.091,4.863-1.705,7.573-1.705c2.856,0,5.552,0.681,7.941,1.885 l2.906-5.056c0.1-0.174,0.321-0.233,0.494-0.133l0.209,0.121c0.173,0.1,0.232,0.322,0.132,0.496l-2.889,5.028 c4.989,2.866,8.459,8.094,8.901,14.169H9.191C9.643,13.645,13.271,8.316,18.451,5.498z M35.076,13.572 c0.865,0,1.567-0.705,1.567-1.574c0-0.87-0.702-1.574-1.567-1.574c-0.865,0-1.567,0.705-1.567,1.574 C33.509,12.867,34.21,13.572,35.076,13.572z M18.924,13.572c0.865,0,1.567-0.705,1.567-1.574c0-0.87-0.702-1.574-1.567-1.574 c-0.865,0-1.567,0.705-1.567,1.574C17.357,12.867,18.059,13.572,18.924,13.572z M4.098,45.057H3.857C1.727,45.057,0,43.323,0,41.182 V24.713c0-2.14,1.727-3.875,3.857-3.875h0.241c2.13,0,3.857,1.735,3.857,3.875v16.469C7.955,43.323,6.228,45.057,4.098,45.057z"/>',
            apple: '<path d="M43.061,34.522c0,8.67,8.393,12.374,8.393,12.374 c-2.057,8.63-9.252,15.172-9.252,15.172c-1.613,1.607-4.567,1.852-4.567,1.852c-2.377,0-5.309-1.34-5.309-1.34 c-2.259-1.299-5.426-1.301-5.426-1.301c-2.792,0-5.309,1.261-5.309,1.261C19.334,63.835,16.399,64,16.399,64 c-2.568,0-3.982-1.498-3.982-1.498C-0.546,50.658,0.003,35.271,0.003,35.271c0-19.645,15.576-19.586,15.576-19.586 c3.626,0,4.919,0.827,4.919,0.827c3.866,1.882,5.777,1.892,5.777,1.892c1.5,0,5.816-1.931,5.816-1.931 c2.223-1.052,5.778-1.064,5.778-1.064c8.325,0,11.984,6.424,11.984,6.424C42.702,26.182,43.061,34.522,43.061,34.522z M25.729,14.818C25.729,1.075,38.377,0,38.377,0C38.377,14.797,25.729,14.818,25.729,14.818z"/>',
            baidu: '<path d="M57.549,28.923c-0.219,7.717-6.714,8.677-6.714,8.677 c-8.176-0.648-7.673-8.677-7.673-8.677c-0.795-8.379,5.755-9.641,5.755-9.641C58,19.412,57.549,28.923,57.549,28.923z M37.407,20.246c-5.931,0-5.755-8.677-5.755-8.677c1.708-7.93,7.673-9.641,7.673-9.641c5.472,0.78,6.714,8.677,6.714,8.677 C44.174,21.255,37.407,20.246,37.407,20.246z M37.407,32.779c2.75,3.707,7.673,8.677,7.673,8.677 c7.267,4.21,7.673,10.605,7.673,10.605c0,13.939-14.387,10.605-14.387,10.605c-1.873-0.813-7.673-1.928-7.673-1.928h-4.796 c-2.325,0.456-10.551,1.928-10.551,1.928c-10.734,0-11.51-10.605-11.51-10.605c0-6.349,4.796-9.641,4.796-9.641 c6.151-4.696,9.592-9.641,9.592-9.641c5.137-7.284,9.591-6.749,9.591-6.749C33.569,25.744,37.407,32.779,37.407,32.779z M25.897,35.672H23.02v5.785h-6.714c-5.859,0.902-5.755,8.677-5.755,8.677c-0.551,5.375,5.755,7.713,5.755,7.713h9.591V35.672z M32.611,53.025V41.456h-4.796v12.533c-0.017,2.653,3.837,3.856,3.837,3.856h10.551v-16.39h-4.796v12.533h-2.877 C33.473,53.886,32.611,53.025,32.611,53.025z M17.265,46.277h5.755v7.713h-4.796c0,0-2.647-0.459-2.877-3.856 C15.346,50.133,15.452,46.899,17.265,46.277z M21.101,20.246c-6.799,0-6.714-10.605-6.714-10.605c0-9.31,6.714-9.641,6.714-9.641 c5.997,0,6.714,9.641,6.714,9.641C27.815,19.489,21.101,20.246,21.101,20.246z M6.714,33.743C0.544,33.743,0,24.102,0,24.102 c0-8.281,6.714-9.641,6.714-9.641c6.751,0,7.673,9.641,7.673,9.641C14.387,32.77,6.714,33.743,6.714,33.743z"/>',
            douban: '<path d="M0,64v-5.818h20.945c0,0-4.899-9.901-8.145-11.636l8.145-3.491 c0,0,5.56,12.555,5.818,15.127h13.964c0,0,5.825-11.048,5.818-15.127l6.982,3.491c0,0-3.36,10.254-5.295,11.512 c-0.447,0.029-0.656,0.069-0.523,0.124c0.157,0.065,0.336-0.002,0.523-0.124C51.09,57.875,64,58.182,64,58.182V64H0z M5.818,40.727 v-25.6h52.364v25.6H5.818z M48.873,20.945H15.127v13.964h33.745V20.945z M3.491,0H64v5.818H3.491V0z"/>',
            googleplay: '<path d="M55.532,34.556c-0.828,0.473-5.547,3.122-11.786,6.618 l-8.591-8.715l9.908-9.829c5.385,3.012,9.44,5.281,10.469,5.858C58,29.871,57.958,33.17,55.532,34.556z M3.177,0.02 c0.741-0.078,1.548,0.064,2.355,0.511c1.54,0.853,23.514,13.139,37.89,21.18l-9.536,9.46L3.177,0.02z M1.36,0.75l31.244,31.694 L2.074,62.731C0.89,62.224,0,61.115,0,59.574C0,56.662,0,5.559,0,3.55C0,2.412,0.532,1.401,1.36,0.75z M42.112,42.089 C27.972,50.01,7.556,61.427,5.419,62.575c-0.32,0.172-0.655,0.291-0.993,0.367l29.446-29.212L42.112,42.089z"/>',
            kaixinwang: '<path d="M60.549,30.164c0,0-3.494,8.614-16.984,12.25c0,0-0.502,11.237,0,15.076c0,0,1.59,4.938-4.718,3.769c0,0-6.539-0.588-13.21-9.423c0,0-2.071-1.431-2.831,0c0,0-5.588,5.249-9.436,7.538c0,0-7.049,0.734-7.549-3.769c0,0-2.985-13.205,0.944-21.672c0,0-0.269-2.116-0.944-2.827c0,0-8.864-10.313-4.718-22.615c0,0,1.108-1.884,5.661-0.942c0,0,7.295,4.273,8.492,4.711c0,0,3.262,0.609,3.774-0.942c0,0,7.578-9.802,14.153-11.307c0,0,7.228-0.583,7.549,6.596c0,0,2.168,10.163,1.887,13.192c0,0,1.659,4.159,4.718,3.769c0,0,9.924-0.088,12.266,1.885C59.605,25.453,61.958,26.999,60.549,30.164z M13.371,27.337c0.013-2.519-1.887-2.827-1.887-2.827c-3.341,0-2.831,1.884-2.831,1.884c-0.146,2.405,2.831,2.827,2.831,2.827C13.764,28.831,13.371,27.337,13.371,27.337zM14.314,32.991c-1.477,8.602,6.605,11.307,6.605,11.307c6.04,0.515,11.323-4.711,11.323-4.711c-7.647,2.452-11.323,0.942-11.323,0.942C14.869,38.902,14.314,32.991,14.314,32.991z M36.016,18.857c0,0-3.136-1.152-5.661,0.942c0,0-0.944,0.585-0.944-0.942c0,0-3.121-5.667-7.549-1.885c0,0-6.72,5.505-2.831,13.192c0,0,1.414,3.005,6.605,0.942c0,0,0.403,2.079,1.887,3.769c0,0,4.505,3.149,7.549-3.769C35.073,31.107,38.588,24.505,36.016,18.857z M41.678,33.933c0,0-3.622-0.382-3.774,2.827c0,0-0.038,2.695,2.831,2.827c0,0,2.968-0.587,2.831-2.827C43.565,36.76,43.968,33.933,41.678,33.933zM33.186,28.28c-2.024-0.756-1.887-3.769-1.887-3.769c0.251-1.965,2.831-2.827,2.831-2.827c2.763,0.114,0.944,3.769,0.944,3.769C34.54,29.362,33.186,28.28,33.186,28.28z M23.75,25.453c-2.17-0.976,0-4.711,0-4.711c1.118-2.725,2.831-1.885,2.831-1.885c2.222,0.41,0.944,3.769,0.944,3.769C27.212,24.78,23.75,25.453,23.75,25.453z"/>',
            laiwang: '<path d="M58.659,31.066V36.4h-5.618v-3.138h2.809v-4.707c3.787-6.594,2.185-13.179,2.185-13.179c-4.56-14.795-19.35-10.669-19.35-10.669c-0.413-0.661-4.057-2.51-4.057-2.51C38.404,0.023,43.679,0,43.679,0C59.986,1.348,61.78,14.748,61.78,14.748C64,25.266,58.659,31.066,58.659,31.066z M52.56,29.556c0,6.135-2.082,11.777-5.565,16.263v6.759h-7.79C35.388,54.753,30.98,56,26.28,56C11.766,56,0,44.16,0,29.556C0,14.951,11.766,3.111,26.28,3.111C40.794,3.111,52.56,14.951,52.56,29.556z M26.28,8.4c-11.611,0-21.024,9.472-21.024,21.156c0,11.684,9.413,21.156,21.024,21.156c3.336,0,6.489-0.786,9.291-2.178h7.405v-6.135c2.711-3.562,4.328-8.01,4.328-12.843C47.304,17.872,37.891,8.4,26.28,8.4z M37.411,32.667c-1.708,0-3.092-1.393-3.092-3.111c0-1.718,1.384-3.111,3.092-3.111c1.708,0,3.092,1.393,3.092,3.111C40.502,31.274,39.118,32.667,37.411,32.667z M26.28,32.667c-1.708,0-3.092-1.393-3.092-3.111c0-1.718,1.384-3.111,3.092-3.111c1.708,0,3.092,1.393,3.092,3.111C29.372,31.274,27.988,32.667,26.28,32.667z M15.15,32.667c-1.708,0-3.092-1.393-3.092-3.111c0-1.718,1.384-3.111,3.092-3.111c1.707,0,3.092,1.393,3.092,3.111C18.242,31.274,16.857,32.667,15.15,32.667z"/>',
            logo: '<path d="M148.981,8.452H153v2.684h-5.639c0,0-1.096-0.041-1.558-1.203l-1.246-2.468h-0.592V12h8.754l-1.277,3.455h1.464v5.059c0,0-0.127,1.542-2.305,1.542h-10.686v-2.468h9.191c0,0,0.222-0.072,0.218-0.216v-1.326h-2.617l0.779-3.085h-9.346l-1.215,5.152c0,0-0.526,2.224-2.742,1.944h-2.929v-2.684h1.589c0,0,0.487-0.065,0.592-0.494l0.935-3.918h-3.116V12h8.848V7.465h-0.498l-1.246,2.468c0,0-0.75,1.304-2.835,1.265h-4.175V8.452h3.801c0,0,0.486-0.029,0.685-0.432l0.187-0.555h-4.767v-2.56h8.848V3.918h-8.941V1.141h17.945c0,0,0.244-0.049,0.311-0.37V0.278h3.489v1.635c0,0-0.22,2.005-2.96,2.005h-5.982v0.956H153v2.591h-4.86l0.28,0.679C148.42,8.144,148.619,8.452,148.981,8.452zM132.313,29.738h-2.492c-0.235-1.372-1.34-1.234-1.34-1.234c-1.608,0-1.589,2.19-1.589,2.19c0,2.719,1.62,2.468,1.62,2.468c1.174,0,1.309-1.388,1.309-1.388h2.555c-0.293,3.657-3.832,3.517-3.832,3.517c-4.466,0-4.206-4.566-4.206-4.566c0-4.45,4.112-4.35,4.112-4.35C132.348,26.375,132.313,29.738,132.313,29.738z M124.525,4.997l-1.776-2.221h-10.811l-1.807,2.53c0,0-0.314,0.339-0.748,0.339h-3.147V2.869h1.34c0,0,0.099-0.001,0.187-0.154L109.633,0h15.266l1.9,2.622c0,0,0.13,0.167,0.374,0.154h1.09v2.776h-2.96C125.304,5.553,124.86,5.553,124.525,4.997z M103.807,30.54l3.084,4.535h-3.178l-1.495-2.529l-1.495,2.529H97.67l3.115-4.473l-2.804-4.01h3.084l1.277,2.344l1.277-2.344h2.96L103.807,30.54z M101.47,22.057h-4.735v-2.56h2.679c0.391,0,0.405-0.37,0.405-0.37v-4.35H86.111l-0.81,1.018c-0.476,0.574-1.277,0.494-1.277,0.494h-2.555v-2.931h0.716c0.4,0,0.53-0.247,0.53-0.247l1.277-2.098h-1.651V0.185h20.873v8.823c-0.05,2.132-2.118,2.098-2.118,2.098H88.074l-0.592,0.987h15.92v8.113C103.264,22.144,101.47,22.057,101.47,22.057z M99.258,2.961H85.924v1.45h13.334V2.961z M99.134,8.545c0,0,0.214-0.097,0.218-0.278V7.003H85.924v1.542H99.134z M84.18,18.91l2.337-3.177h4.268l-4.33,5.614c0,0-0.724,0.62-1.62,0.524h-3.458v-2.56h2.305C83.681,19.311,83.961,19.247,84.18,18.91z M87.388,28.751h-4.33v1.049h3.925v2.036h-3.925v1.08h4.455v2.159h-7.01v-8.483h6.885V28.751z M70.627,35.815l-1.776-3.085l1.807-3.054h3.552l1.807,3.085l-1.776,3.054H70.627z M17.197,17.954l1.807-3.054h3.552l1.807,3.085l-1.807,3.054h-3.583L17.197,17.954z M44.8,35.815l-5.016-8.637l3.614-6.108l5.016,8.576h13.677l6.761-11.661L62.06,6.324H48.414l-17.229,29.46l-20.78,0.062L0,17.923L10.375,0.154l20.811-0.031l5.016,8.637L32.619,14.9l-5.047-8.607H13.957L7.103,17.985l6.854,11.661h13.646l17.26-29.491h20.78l10.374,17.83l-10.406,17.83H44.8z M92.28,21.964h-3.521v-2.56h1.433c0.436,0.002,0.654-0.339,0.654-0.339l2.555-3.116h4.362l-4.299,5.553C93.035,21.922,92.28,21.964,92.28,21.964zM92.872,26.375c4.353,0,4.268,4.411,4.268,4.411c0,1.971-0.966,3.023-0.966,3.023l0.997,1.018L95.987,36l-1.122-1.172c-0.421,0.386-1.776,0.463-1.776,0.463c-4.572,0.019-4.393-4.473-4.393-4.473C88.83,26.208,92.872,26.375,92.872,26.375zM92.934,33.162c0,0,0.237-0.016,0.312-0.062l-0.717-0.71l1.184-1.141l0.685,0.709c0,0,0.187-0.29,0.187-1.08c0,0,0.181-2.375-1.682-2.375c0,0-1.651-0.176-1.651,2.406C91.252,30.91,91.207,33.162,92.934,33.162z M110.007,35.074h-2.555v-8.483h2.555V35.074z M111.222,26.591h2.555v5.306c0,1.379,1.34,1.265,1.34,1.265c1.259,0,1.309-1.296,1.309-1.296v-5.275h2.555v5.491c0,3.456-3.77,3.208-3.77,3.208c-4.308,0-3.988-3.27-3.988-3.27V26.591z M128.17,19.28v2.776h-21.746v-2.746h2.15V7.095h3.209V19.28h3.676V4.689h3.583V8.73h8.941v2.961h-8.941v7.589H128.17z M123.06,35.074h-2.43V32.73h2.43V35.074z M137.672,26.375c4.254,0,4.237,4.38,4.237,4.38c0,4.688-4.175,4.535-4.175,4.535c-4.524,0-4.268-4.658-4.268-4.658C133.699,26.191,137.672,26.375,137.672,26.375z M136.021,30.848c0,2.339,1.651,2.314,1.651,2.314c1.762,0,1.682-2.345,1.682-2.345c0.002-2.392-1.651-2.344-1.651-2.344C135.947,28.473,136.021,30.848,136.021,30.848z M148.109,31.589l1.215-4.997h3.645v8.483h-2.43v-5.553l-1.464,5.553h-1.932l-1.464-5.46v5.46h-2.43v-8.483h3.645L148.109,31.589z"/>',
            logo2: '<path d="M23.103,24l2.397-4.216h4.795l2.397,4.108l-2.397,4.216H25.5L23.103,24z M60.154,48l-6.756-11.568l4.795-8.216l6.756,11.46h18.308L92.41,24L83.256,8.324H64.949L41.846,48H13.949L0,24L13.949,0h27.897l6.756,11.568l-4.795,8.216l-6.756-11.46H18.744L9.59,24l9.154,15.676h18.308L60.154,0h27.897L102,24L88.051,48H60.154zM99.494,39.676L102,43.784L99.603,48h-4.904l-2.397-4.216l2.397-4.108H99.494z"/>',
            code: '<path d="M64,64h-7V50h7V64z M50,50v-7h7v7H50z M43,50h-7V36h14v7h-7V50zM64,36v7h-7v-7H64z M36,0h28v28H36V0z M40,24h20V4H40V24z M43,7h14v14H43V7z M0,36h28v28H0V36z M4,40v20h20V40H4z M7,43h14v14H7V43z M0,0h28v28H0V0z M4,24h20V4H4V24z M7,7h14v14H7V7z M50,57v7H36v-7H50z"/>',
            computer: '<path d="M61,44H38.676l6.199,8.769c0,0,1.125,1.64,0,3.231h-9.289h-6.697h-9.733c-1.156-1.591,0-3.231,0-3.231L25.527,44H3c-1.657,0-3-1.343-3-3V3c0-1.657,1.343-3,3-3h58c1.657,0,3,1.343,3,3v38C64,42.657,62.657,44,61,44z M32,42c1.105,0,2-0.895,2-2s-0.895-2-2-2c-1.105,0-2,0.895-2,2S30.895,42,32,42z M60,5H4v31h56V5z"/>',
            dengpao: '<path d="M40,44.969V52c0,3.314-2.686,6-6,6h-1v3.5c0,1.381-1.119,2.5-2.5,2.5h-11c-1.381,0-2.5-1.119-2.5-2.5V58h-1c-3.314,0-6-2.686-6-6v-7.041C3.936,40.403,0,33.171,0,25C0,11.193,11.193,0,25,0s25,11.193,25,25C50,33.173,46.068,40.413,40,44.969z M25,7C15.059,7,7,15.059,7,25c0,0.585,0.033,1.162,0.088,1.733c0.02,0.206,0.056,0.407,0.082,0.611c0.047,0.357,0.095,0.714,0.162,1.064c0.048,0.251,0.11,0.496,0.168,0.743c0.069,0.29,0.139,0.58,0.222,0.864c0.079,0.273,0.168,0.542,0.26,0.809c0.083,0.242,0.17,0.482,0.263,0.719c0.113,0.29,0.232,0.575,0.359,0.858c0.089,0.195,0.183,0.386,0.278,0.577c0.152,0.307,0.307,0.611,0.475,0.907c0.078,0.137,0.163,0.268,0.244,0.402c0.202,0.334,0.406,0.667,0.629,0.987c0.006,0.009,0.014,0.018,0.02,0.027c1.674,2.393,3.914,4.354,6.527,5.699C16.3,41.532,16,42.228,16,43v6c0,1.657,1.343,3,3,3h12c1.657,0,3-1.343,3-3v-6c0-0.772-0.3-1.468-0.778-2c2.998-1.544,5.497-3.904,7.222-6.788c0.062-0.103,0.127-0.203,0.186-0.306c0.177-0.31,0.34-0.629,0.499-0.951c0.09-0.181,0.179-0.361,0.262-0.545c0.13-0.286,0.251-0.577,0.366-0.871c0.093-0.236,0.179-0.474,0.261-0.715c0.091-0.267,0.18-0.535,0.259-0.808c0.084-0.287,0.154-0.578,0.224-0.871c0.058-0.245,0.119-0.487,0.167-0.736c0.068-0.353,0.117-0.712,0.164-1.072c0.026-0.202,0.062-0.401,0.081-0.605C42.967,26.163,43,25.586,43,25C43,15.059,34.941,7,25,7z M28.5,48h-7c-1.381,0-2.5-1.119-2.5-2.5v-1c0-1.381,1.119-2.5,2.5-2.5h7c1.381,0,2.5,1.119,2.5,2.5v1C31,46.881,29.881,48,28.5,48z"/>',
            normaluser: '<path d="M31.5,64C59.433,56.326,63,32.541,63,24.694C63,16.846,60.61,8.58,54.309,0C49.566,1.885,39.207,2.721,31.5,0C23.794,2.721,13.434,1.885,8.692,0C2.39,8.58,0,16.846,0,24.694C0,32.541,3.568,56.326,31.5,64z"/>',
            pad: '<path d="M49,64H3c-1.657,0-3-1.343-3-3V3c0-1.657,1.343-3,3-3h46c1.657,0,3,1.343,3,3v58C52,62.657,50.657,64,49,64z M26,62c1.657,0,3-1.343,3-3s-1.343-3-3-3s-3,1.343-3,3S24.343,62,26,62z M45,6H7v48h38V6z"/>',
            pengyou: '<path d="M52.671,41.29c0,0,3.271,9.101-5.532,11.011c0,0-7.661,1.98-11.065-11.011c0,0-3.688-10.606-3.688-12.846c0,0,11.041-2.228,18.442-1.835c0,0,11.116,0.842,11.065,9.175C61.892,35.785,62.397,43.503,52.671,41.29z M52.671,22.939c-5.253,0.729-21.208,3.67-21.208,3.67V7.34C31.264,1.286,39.762,0,39.762,0c7.386,0.19,6.455,7.34,6.455,7.34c10.325-4.012,11.065,7.34,11.065,7.34C57.501,18.724,52.671,22.939,52.671,22.939z M7.488,28.444c0,0-8.17-0.479-7.377-8.258c0,0-1.714-6.644,8.299-6.423c0,0-3.114-11.531,11.065-11.011c0,0,6.523-0.627,8.299,7.34c0,0,3.449,12.205,2.766,16.516C30.541,26.609,18.663,27.596,7.488,28.444z M31.463,28.444c-0.872,4.484,1.844,12.846,1.844,12.846c3.235,6.336,0.922,11.011,0.922,11.011c-2.931,8.699-11.987,7.34-11.987,7.34c-6.323-1.717-6.455-8.258-6.455-8.258c-5.134-0.13-7.377-1.835-7.377-1.835c-5.279-1.891-2.766-11.011-2.766-11.011C14.528,26.962,31.463,28.444,31.463,28.444z"/>',
            qq: '<path d="M173.94,152.517c0,0-7.239,0.531-15.89-15.949c0,0-7.897,20.246-13.904,24.921c0,0,15.89,5.883,15.89,17.943c0,0-2.979,19.937-36.746,19.937c0,0-22.406,0.632-30.787-13.956h-2.979v-0.309l-2.979,0.309C78.162,200,55.756,199.368,55.756,199.368c-33.767,0-36.746-19.937-36.746-19.937c0-12.06,15.89-17.943,15.89-17.943c-6.007-4.675-13.904-24.921-13.904-24.921c-8.651,16.48-15.89,15.949-15.89,15.949c-17.583-29.635,15.89-60.807,15.89-60.807c-5.712-18.322,5.959-26.915,5.959-26.915C29.54,0.66,89.523,0,89.523,0s59.983,0.66,62.568,64.795c0,0,11.671,8.593,5.959,26.915C158.05,91.709,191.523,122.882,173.94,152.517z"/>',
            qqliulanqi: '<path d="M64,55.332c0,4.57-3.122,8.311-7.081,8.642V64H31.793c-0.02,0-0.039-0.007-0.059-0.007C14.184,63.849,0,49.584,0,32C0,14.327,14.327,0,32,0s32,14.327,32,32c0,5.69-1.492,11.029-4.096,15.66C62.338,49.11,64,51.999,64,55.332z M32,14.222c-9.818,0-17.778,7.959-17.778,17.778c0,7.131,4.208,13.262,10.268,16.092c1.219-2.013,3.562-3.394,6.287-3.394c0.893,0,1.743,0.156,2.533,0.424c1.731-5.002,6.017-8.551,11.047-8.551c1.599,0,3.12,0.368,4.512,1.017c0.583-1.759,0.91-3.634,0.91-5.588C49.778,22.182,41.818,14.222,32,14.222z"/>',
            qqweibo: '<path d="M60.847,26.088c-8.08-2.418-13.422-13.494-13.422-13.494c-2.424,0-2.684-2.699-2.684-2.699c0-3.708,2.684-3.598,2.684-3.598c3.337,0,3.579,3.598,3.579,3.598c0.013,1.683-1.79,2.699-1.79,2.699c2.627,8.909,12.527,11.695,12.527,11.695C64,25.295,60.847,26.088,60.847,26.088z M54.583,16.192c0,0-1.339,0.621-0.895-0.9c0,0,1.906-1.828,1.79-5.398c0,0-0.266-8.096-8.053-8.096c0,0-7.158,0.059-7.158,8.096c0,0,0.001,8.096,7.158,8.096c0,0,1.785,1.974,0,1.799c0,0-8.948-0.952-8.948-9.895c0,0,0.135-9.895,9.843-9.895c0,0,8.948,1.557,8.948,9.895C57.267,9.895,56.836,14.713,54.583,16.192z M17.001,38.682h-3.579c0,0-2.586-0.992-0.895-2.699c0,0,17.896,2.971,17.896-14.393c0,0-0.252-13.494-13.422-13.494c0,0-14.317,1.116-14.317,14.393c0,0,0.037,4.655,1.79,6.297c0,0,0.568,3.071-1.79,0.9c0,0-2.521-3.105-2.684-7.197c0,0,1.061-17.092,17.001-17.092c0,0,16.107,0.699,16.107,16.193C33.108,21.59,32.527,38.682,17.001,38.682z M12.527,24.289c0,0-1.74-4.156,1.79-7.197c0,0,5.442-2.025,8.053,2.699c0,0,1.083,4.133-1.79,6.297c0,0-3.242,1.586-6.264,0c0,0-9.393,9.066-8.948,17.992c0.029,0.574,0,10.795,0,10.795S4.337,58,1.79,55.774V44.08C1.79,44.08,4.022,30.876,12.527,24.289z"/>',
            qqzone: '<path d="M49.096,31.429L51.726,55L32.438,43.651L13.151,55l1.753-22.698L0,19.206h21.918L32.438,0l11.397,19.206H64L49.096,31.429z M47.342,21.825H21.041l15.781,2.619L17.534,41.032h29.808L29.808,37.54L47.342,21.825z"/>',
            renren: '<path d="M26.667,0h12c0,0-5.9,40.406,25.333,51.726L58,63c0,0-20.229-14.581-24-29.179c0,0-12.018,22.795-27.333,28.516L0,54.379C0,54.379,31.489,46.61,26.667,0z"/>',
            sendcompany: '<path d="M56,37L32,13L8,37H0v-6L31,0h2l31,31v6H56z M53,38v26H39V43H25v21H11V38l21-21L53,38z"/>',
            scenegift: '<path d="M34.133,63.954V25.581H64v38.372H34.133z M0,12.791h14.821C8.033,11.603,8,4.996,8,4.996C8.056,0.071,13,0,13,0c9.28-0.03,15.986,11.202,16.888,12.791h4.237C35.125,11.201,42.504-0.046,51,0c0,0,5.046,0.083,5,4.996c0,0,0.061,6.606-6.823,7.794H64v8.527H0V12.791z M53,5.996c0.062-1.888-2-1.999-2-1.999c-8.038-0.049-13,8.993-13,8.993C50.389,13.03,53,5.996,53,5.996z M13,3.997c0,0-1.983,0.024-2,1.999s2.81,6.995,15,6.995C26,12.991,20.979,3.981,13,3.997z M29.867,63.954H0V25.581h29.867V63.954z"/>',
            scenesend: '<path d="M0,24.889L64,0L46.222,64L24.889,46.222l24.889-32l-32,24.889L0,24.889z M10.667,39.111l14.222,10.667L14.222,60.444L10.667,39.111z"/>',
            taobao: '<path d="M48.988,48.946c-4.903,0-7.901-1.579-7.901-1.579l0.79-3.947l7.111,0.789c6.122,0,6.321-5.526,6.321-5.526V14.21c0-7.378-7.901-7.895-7.901-7.895c-6.463,0-15.012,3.158-15.012,3.158l3.16,1.579c0.142,1.015-3.16,4.737-3.16,4.737h20.543v3.947H41.086v3.947h11.852v3.947H41.086v9.473l4.741-2.368l-0.79-3.947l4.741-1.579l3.951,10.263l-5.531,2.368l-1.58-3.947c-5.47,3.996-14.222,4.737-14.222,4.737h-7.111c-4.661,0-5.531-5.526-5.531-5.526v-7.105h7.111v3.158c-0.14,5.157,7.111,4.737,7.111,4.737V27.631H21.333v-3.947h12.642v-3.947h-5.531c-0.316,2.196-3.951,3.158-3.951,3.158s-2.819-0.519-3.16-1.579c2.749-1.888,6.321-9.473,6.321-9.473c-4.473,0.22-8.691,6.316-8.691,6.316l-4.741-3.947C19.296,12.449,22.914,0,22.914,0l7.111,1.579c0.106,1.229-1.58,4.737-1.58,4.737c11.708-3.875,23.704-3.158,23.704-3.158C63.475,4.407,64,15,64,15v21.315C64,49,48.988,48.946,48.988,48.946z M11.062,10.263c-5.479,0-5.531-4.737-5.531-4.737c0-5.404,5.531-4.737,5.531-4.737c5.138,0,5.531,4.737,5.531,4.737C16.593,10.074,11.062,10.263,11.062,10.263z M2.37,18.157l3.951-5.526c11.83,10.053,11.062,12.631,11.062,12.631c-0.264,5.059-9.482,22.105-9.482,22.105L0,41.841L11.852,29.21c1.392-1.303,0-3.947,0-3.947C11.562,22.982,2.37,18.157,2.37,18.157z"/>',
            tieba: '<path d="M64,28.804v33.072H36.267c0,0-0.933,0.052-1.067-2.134V32.005c0,0-1.165-3.201,5.333-3.201V1.067h6.4v4.267H64v6.401H46.933v17.069H64z M42.667,36.272v19.203h13.867V36.272H42.667z M14.933,55.475c0,0-4.911,5.24-12.8,6.401l-1.067-4.267c0,0,8.079-3.243,9.6-7.468V13.869c0,0,0.682-2.067,4.267-2.134c0,0,3.289,0.126,3.2,2.134V46.94c0,0,0.469,6.066,11.733,10.668L28.8,62.943C28.8,62.943,22.857,64,14.933,55.475z M23.467,9.601c0,0,0.113-3.437-8.533-3.201c0,0-8.533,0.099-8.533,3.201V46.94H0V0h29.867v46.94h-6.4V9.601z"/>',
            time: '<path d="M57.094,17.342L39.191,4.248c3.421-4.74,10.201-5.651,15.145-2.035C59.28,5.829,60.514,12.602,57.094,17.342z M56.896,34.986c0.016,15.224-12.23,27.578-27.352,27.594C14.421,62.597,2.149,50.268,2.133,35.044C2.117,19.821,14.363,7.466,29.485,7.45C44.608,7.434,56.88,19.762,56.896,34.986z M29.492,14.27c-10.206,0.011-18.663,7.491-20.294,17.297H8.966v6.895h0.231c1.633,9.824,10.118,17.308,20.339,17.297C39.742,55.75,48.2,48.269,49.83,38.463h0.232v-6.895h-0.23C48.199,21.743,39.713,14.26,29.492,14.27z M14.103,38.463v-6.895H26.09V16.915h6.849v14.653v6.895H26.09H14.103z M4.692,2.213c4.944-3.616,11.724-2.705,15.145,2.035L1.935,17.342C-1.486,12.602-0.251,5.829,4.692,2.213z"/>',
            uc: '<path d="M53.093,32.265c-7.527-5.77-19.034-7.054-19.034-7.054c5.833-1.908,12.021-7.054,12.021-7.054c-0.333-6.053,2.003-8.061,2.003-8.061c1.492,1.376,3.005,6.046,3.005,6.046C64,21.39,61.107,32.265,61.107,32.265H53.093z M26.046,26.219c0,0-16.028,6.346-16.028,20.153c0,0,0.893,11.278,8.172,13.661C12.446,58.893,0,55.07,0,43.35c0-15.233,13.134-18.434,14.025-27.207c0,0-1.021-8.061-7.012-8.061c0,0-4.643,0.683-6.01,2.015c0,0,5.962-10.617,18.032-10.077c0,0,12.937,0.063,14.025,11.084C33.058,11.104,34.791,19.555,26.046,26.219z M18.189,60.034c1.721,0.342,2.848,0.446,2.848,0.446C19.991,60.48,19.048,60.315,18.189,60.034z M16.028,48.388c0,0,0.948-8.061,8.014-8.061c0,0,9.016,0.132,9.016,8.061c0,0-0.119,9.069-8.014,9.069C25.044,57.457,16.028,58.129,16.028,48.388z M20.035,48.388c0,4.649,4.007,5.038,4.007,5.038c4.47,0,5.009-4.031,5.009-4.031c0-4.625-5.009-5.038-5.009-5.038C19.821,44.233,20.035,48.388,20.035,48.388z M37.065,48.388c0,0-0.189-12.092-11.019-12.092c0,0-4.6-1.381-11.019,3.023c0,0,3.518-7.19,12.021-7.054c0,0,15.761,0.647,16.028,17.13c0,0-0.817,6.053-3.005,7.054c0,0,7.737-1.618,10.018,4.031H28.049C28.049,60.48,36.582,59.201,37.065,48.388z M46.081,41.334c0,0-4.805-11.215-21.037-12.092c0,0,8.813-2.856,17.03,1.008l8.014,5.038c0,0,1.677,0.997,5.009,1.008c0,0,6.234,0.472,7.012,4.031c0,0-5.923-1.36-8.014,0C54.095,40.327,50.536,44.644,46.081,41.334z"/>',
            voice: '<path d="M38.246,32.653c0,9.68-7.396,17.645-16.902,18.686v8.482h8.451V64H8.667v-4.18h8.451v-8.482C7.612,50.298,0.216,42.333,0.216,32.653c0-1.815-0.485-2.548,0-4.209h4.111c-0.629,1.624,0.114,2.365,0.114,4.209c0,8.079,6.621,14.629,14.79,14.629S34.02,40.732,34.02,32.653c0-1.843,0.743-2.584,0.114-4.209h4.111C38.731,30.105,38.246,30.838,38.246,32.653z M19.231,42.667h-1.028c-5.393,0-9.764-4.321-9.764-9.651V9.651C8.438,4.321,12.81,0,18.203,0h1.028c5.393,0,9.764,4.321,9.764,9.651v23.365C28.995,38.346,24.623,42.667,19.231,42.667z"/>',
            wechat: '<path d="M171.484,138.214l6.938,21.872l-26.761-14.913c-72.415-0.249-66.407-49.709-66.407-49.709c0-28.146,34.69-40.761,34.69-40.761c75.009-16.33,78.301,42.749,78.301,42.749C198.245,125.746,171.484,138.214,171.484,138.214z M122.245,78.086c-4.418,0-8,3.582-8,8c0,4.418,3.582,8,8,8c4.418,0,8-3.582,8-8C130.245,81.667,126.663,78.086,122.245,78.086z M165.245,78.086c-4.418,0-8,3.582-8,8c0,4.418,3.582,8,8,8c4.418,0,8-3.582,8-8C173.245,81.667,169.663,78.086,165.245,78.086z M90.209,69.616c-17.464,24.322-4.956,47.72-4.956,47.72c-2.767,2.24-7.929,1.988-7.929,1.988H61.466l-36.673,16.901l8.92-25.849C-1.755,92.678,0.015,60.668,0.015,60.668v-2.982C6.983-1.914,70.386,0.024,70.386,0.024c30.227-0.665,46.584,12.924,46.584,12.924c19.951,11.217,24.779,32.808,24.779,32.808C107.066,46.955,90.209,69.616,90.209,69.616z M41.245,30.086c-6.075,0-11,4.925-11,11s4.925,11,11,11s11-4.925,11-11S47.32,30.086,41.245,30.086z M108.245,41.086c0-6.075-4.925-11-11-11c-6.075,0-11,4.925-11,11s4.925,11,11,11C103.32,52.086,108.245,47.161,108.245,41.086z"/>',
            weibo: '<path d="M199.389,65.394c0,0-0.493,9.988-10.011,9.988c0,0-10.252-1.807-7.007-11.985c0,0,11.965-41.924-36.038-47.942c0,0-17.018,5.194-17.018-6.991c0,0,1.506-7.99,8.008-7.99C137.322,0.473,204.096-9.8,199.389,65.394z M143.329,40.425c0,0-8.008,1.063-8.008-6.992c0,0,2.411-5.993,7.007-5.993c0,0,34.003-5.033,30.032,32.96c0,0-1.923,5.993-6.006,5.993c0,0-8.008,0.682-8.008-7.99C158.345,58.403,162.869,40.425,143.329,40.425z M133.318,45.419c0,0,17.018,0.911,17.018,16.979c0,0,0.245,9.102-4.004,12.984c0,0,29.031,6.811,29.031,28.965c0,0-0.251,56.931-91.097,56.931c0,0-84.09,0.922-84.09-52.936c0,0-4.081-25.111,27.029-54.933c31.109-29.822,48.801-30.962,57.061-30.962c0,0,16.017-0.976,16.017,15.98c0,0-0.412,11.219-3.003,14.982C97.28,53.409,116.344,45.419,133.318,45.419z M78.259,71.387c0,0-49.884,3.469-58.062,42.948c0,0-0.603,30.22,52.055,34.958c0,0,54.006,2.183,66.07-36.955C138.324,112.337,151.405,74.021,78.259,71.387z M73.12,142.2c-26.866-0.565-28.931-22.871-28.931-22.871c-1.094-30.22,32.921-32.815,32.921-32.815c31.985-0.314,30.926,25.854,30.926,25.854C106.16,142.199,73.12,142.2,73.12,142.2z M67.135,110.379c0,0-11.971,1.423-11.971,9.944c0,0-1.051,8.95,9.976,8.95c0,0,10.974-1.898,10.974-9.944C76.113,119.328,77.207,110.379,67.135,110.379z M83.097,106.401c0,0-3.99-0.664-3.99,2.983c0,0-0.929,2.983,2.993,2.983c0,0,3.99-0.785,3.99-3.978C86.089,108.39,85.751,106.401,83.097,106.401z"/>',
            windows: '<path d="M28.984,59.594V33.416H63V64L28.984,59.594z M28.984,4.406L63,0v30.584H28.984V4.406z M0,33.416h26.149v25.487L0,55.231V33.416z M0,8.769l26.149-3.672v25.487H0V8.769z"/>',
            yixin: '<path d="M45.364,58.38c4.124,2.52,10.259,2.797,10.259,2.797C44.551,65,36.341,63.943,30.867,61.901C13.807,61.829,0,48.002,0,30.952C0,13.858,13.879,0,31,0s31,13.858,31,30.952C62,42.869,55.251,53.207,45.364,58.38z M31,14.977c-8.837,0-16,7.153-16,15.975c0,5.364,2.656,10.098,6.718,12.996c-3.185,4.404-11.86,5.579-11.86,5.579c19.676,4.767,29.433-4.088,31.788-6.672C44.924,39.93,47,35.688,47,30.952C47,22.129,39.837,14.977,31,14.977z"/>',
            zhifubao: '<path d="M63.021,50L36.949,36.957c-10.737,11.987-22.813,10.87-22.813,10.87c-15.115,0-14.122-11.957-14.122-11.957C-0.088,22.841,15.222,25,15.222,25c8.559,0.109,18.468,3.261,18.468,3.261c3.55-4.164,4.345-9.783,4.345-9.783H10.877v-2.174h13.036V10.87H7.618V8.696h16.295V0h8.691v8.696h16.295v2.174H32.604v5.435h14.122c0.153,3.882-5.432,15.217-5.432,15.217l21.727,6.522V50z M14.136,28.261c0,0-11.95-2.295-11.95,7.609c0,0-1.54,7.609,10.863,7.609c0,0,11.464,0.271,17.381-9.783C30.431,33.696,23.002,28.261,14.136,28.261z"/>'
        },
        boundingBox: function(e) {
            var t, i = e.parentNode,
                n = document.createElementNS(eqxiuSvg.NAMESPACE, "svg");
            return n.setAttribute("width", "0"), n.setAttribute("height", "0"), n.setAttribute("style", "visibility: hidden; position: absolute; left: 0; top: 0;"), n.appendChild(e), document.body.appendChild(n), t = e.getBBox(), i ? i.appendChild(e) : n.removeChild(e), document.body.removeChild(n), t
        },
        pointsToPolygon: function(e) {
            for (var t = []; e.length >= 2;) t.push(e.shift() + "," + e.shift());
            return t.join(" ")
        },
        symbol: function(e, t, i) {
            var n = i ? i : "#555",
                a = eqxiuSvg.SYMBOLS[e],
                r = '<g fill="' + n + '" id="path_' + t + '">' + a + "</g>";
            return r
        },
        ShapeFromType: function(e, t, i, n, a) {
            return t || (t = 64), i || (i = 64), /symbols\-/.test(e) ? eqxiuSvg.symbol(e.replace(/^symbols\-/, ""), n, a) : "rect" == e ? eqxiuSvg.rect(t, i) : "circle" == e ? eqxiuSvg.ellipse(t, i) : "diamond" == e ? eqxiuSvg.polygon(t, i, 4) : "octagon" == e ? eqxiuSvg.polygon(t, i, 8) : "triangle-up" == e ? eqxiuSvg.triangleUp(t, i) : "triangle-down" == e ? eqxiuSvg.triangleDown(t, i) : "triangle-left" == e ? eqxiuSvg.triangleLeft(t, i) : "triangle-right" == e ? eqxiuSvg.triangleRight(t, i) : "arrow-up" == e ? eqxiuSvg.arrowUp(t, i) : "arrow-down" == e ? eqxiuSvg.arrowDown(t, i) : "arrow-left" == e ? eqxiuSvg.arrowLeft(t, i) : "arrow-right" == e ? eqxiuSvg.arrowRight(t, i) : void 0
        },
        rect: function(e, t) {
            var i = document.createElementNS(eqxiuSvg.NAMESPACE, "rect");
            return i.setAttribute("width", e), i.setAttribute("height", t), i
        },
        ellipse: function(e, t) {
            var i = document.createElementNS(eqxiuSvg.NAMESPACE, "ellipse");
            return i.setAttribute("rx", e / 2), i.setAttribute("ry", t / 2), i.setAttribute("cx", e / 2), i.setAttribute("cy", t / 2), i
        },
        triangleUp: function(e, t) {
            var i = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
            return i.setAttribute("points", eqxiuSvg.pointsToPolygon([e / 2, 0, e, t, 0, t])), i
        },
        triangleDown: function(e, t) {
            var i = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
            return i.setAttribute("points", eqxiuSvg.pointsToPolygon([0, 0, e, 0, e / 2, t])), i
        },
        triangleLeft: function(e, t) {
            var i = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
            return i.setAttribute("points", eqxiuSvg.pointsToPolygon([0, t / 2, e, 0, e, t])), i
        },
        triangleRight: function(e, t) {
            var i = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
            return i.setAttribute("points", eqxiuSvg.pointsToPolygon([e, t / 2, 0, t, 0, 0])), i
        },
        arrowUp: function(e, t) {
            var i = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
            return i.setAttribute("points", eqxiuSvg.pointsToPolygon([.5 * e, 0, e, .5 * t, .7 * e, .5 * t, .7 * e, t, .3 * e, t, .3 * e, .5 * t, 0, .5 * t, .5 * e, 0])), i
        },
        arrowDown: function(e, t) {
            var i = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
            return i.setAttribute("points", eqxiuSvg.pointsToPolygon([.5 * e, t, e, .5 * t, .7 * e, .5 * t, .7 * e, 0, .3 * e, 0, .3 * e, .5 * t, 0, .5 * t, .5 * e, t])), i
        },
        arrowLeft: function(e, t) {
            var i = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
            return i.setAttribute("points", eqxiuSvg.pointsToPolygon([e, .3 * t, .5 * e, .3 * t, .5 * e, 0, 0, .5 * t, .5 * e, t, .5 * e, .7 * t, e, .7 * t, e, .3 * t])), i
        },
        arrowRight: function(e, t) {
            var i = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
            return i.setAttribute("points", eqxiuSvg.pointsToPolygon([0, .3 * t, .5 * e, .3 * t, .5 * e, 0, e, .5 * t, .5 * e, t, .5 * e, .7 * t, 0, .7 * t])), i
        },
        polygon: function(e, t, i) {
            var n = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon"),
                a = [];
            if (3 === i) a = [e / 2, 0, e, t, 0, t];
            else if (i > 3)
                for (var r = e / 2, s = t / 2, o = 0; i > o; o++) {
                    var c = r + r * Math.cos(2 * Math.PI * o / i),
                        l = s + s * Math.sin(2 * Math.PI * o / i);
                    c = Math.round(10 * c) / 10, l = Math.round(10 * l) / 10, a.push(c), a.push(l)
                }
            return n.setAttribute("points", eqxiuSvg.pointsToPolygon(a)), n
        }
    }
}(),
function(e, t) {
    function i(e) {
        function t(e, t, i) {
            return e[t] || (e[t] = i())
        }
        var i = t(e, "eqShow", Object); //e["eqShow"]
        return t(i, "templateParser", function() {
            var e = {};
            return function(i, n) {
                if ("hasOwnProperty" === i) throw new Error("hasOwnProperty is not a valid name");
                return n && e.hasOwnProperty(i) && (e[i] = null), t(e, i, n)
            }
        })
    }

    function n(t) {
        templateParser = i(e)
    }
    var a = e.eqShow || (e.eqShow = {});
    n(a)
}(window, document),
function(e) {

    function dNew(a, b) {
        for (var c = 0; c < a.length; c++) {
            var d = [];
            $.each(b, function(b, e) {
                var f, g = $(e).attr("style");
                if (g) {
                    for (var h = g.split(";"), i = 0, j = h.length; j > i; i++)
                        if (h[i].indexOf("fill:") >= 0) {
                            f = h[i].split(":")[1];
                            break
                        }
                } else f = $(e).attr("fill");
                f == a[c].svgFill && d.push(b)
            }), a[c].elements = d
        }
        return a
    }

    function t(e, t, i, n) {
        var a = {},
            r = e / t,
            s = i / n;
        return r > s ? (a.width = i, a.height = i / r) : (a.height = n, a.width = n * r), a
    }

    function i(e, t) {
        "view" == l.mode && t.properties.url && $(e).click(function(e) {
            var i = t.properties.url;
            isNaN(i) ? window.open(i) : eqxiu.pageScroll(i)
        })
    }

    function n(e) {
        $(e).bind("touchstart mousedown", function(e) {
            e.stopPropagation()
        })
    }

    function a(e) {
        e.focus(function(e) {
            eqxiu.pauseAutoFlip()
        }).blur(function(e) {
            $(document).trigger("startAutoFlip")
        })
    }

    function r(e) {
        for (var t = $(e).find("a[data]"), i = 0; i < t.length; i++)
            if (t[i] && "view" == l.mode) {
                $(t[i]).css("cursor", "pointer");
                var n = $(t[i]).attr("data");
                !
                    function(e) {
                        t[i].removeAttribute("href"), $(t[i]).click(function(t) {
                            eqxiu.pageScroll(e)
                        })
                }(n)
            }
    }

    function o(e, t) {
        if (t.trigger) {
            var i = $(e);
            p && clearTimeout(p), t.trigger.sends && t.trigger.sends.length && $.each(t.trigger.sends, function(e, t) {
                i.bind(utilTrigger.getSendType(t.type).name, function() {
                    p = setTimeout(function() {
                        $.each(t.handles, function(e, t) {
                            var i = utilTrigger.getHandleType(t.type).name;
                            $.each(t.ids, function(e, t) {
                                var n;
                                n = $("#inside_" + t, ".phone-view").length ? $("#inside_" + t, ".phone-view") : $("#inside_" + t), n.trigger(i)
                            })
                        })
                    }, 1e3 * t.delay)
                })
            })
        }
    }

    function c(e, t) {
        // alert(diySoundEditFlag);
        // if(diySoundEditFlag){
        //     alert(1122334);
        //     return false;
        // }
        var i = $(e),
            n = $("#media").get(0);

        if (t.sound) {

            console.log(12345678);
            console.log(t);
            console.log(e);


            0 == t.sound.src.indexOf("http://") ? t.sound.src = t.sound.src : t.sound.src = PREFIX_FILE_HOST + t.sound.src, utilSound.addAudio(e, t.sound.src), i.click(function() {
                var sess = window.sessionStorage,
                    id = i.attr('id').split('_')[1],
                    localId = i.attr('localid'),
                    serverId = i.attr('serverid');

                if (!$('.diy_box').hasClass('active')) {



                    if (typeof localId != "undefined") {
                        wx.downloadVoice({
                            serverId: serverId, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
                            isShowProgressTips: 1, // 默认为1，显示进度提示
                            success: function(res) {

                                localId = res.localId; // 返回音频的本地ID
                                n && n.pause();
                                wx.playVoice({
                                    localId: localId // 需要播放的音频的本地ID，由stopRecord接口获得
                                });
                            }
                        });
                    } else {
                        // alert(112233);
                        // alert(diySoundEditFlag);
                        // if(!diySoundEditFlag){
                        utilSound.play(e, function() {
                            n && n.play()
                        }, function() {
                            n && n.pause()
                        })
                        // }
                    }
                } else {
                    if (typeof localId != "undefined") {
                        wx.downloadVoice({
                            serverId: serverId, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
                            isShowProgressTips: 1, // 默认为1，显示进度提示
                            success: function(res) {

                                localId = res.localId; // 返回音频的本地ID
                                n && n.pause()
                                wx.playVoice({
                                    localId: localId // 需要播放的音频的本地ID，由stopRecord接口获得
                                });
                            }
                        });
                    }
                }

            }), $('.diy_right').click(function() {

                utilSound.pause();
            }), $(document).on('click', '.diy_redio', function() {
                utilSound.pause();
            });
        } else if (i.attr('serverid')) {

            i.on('click', function() {

                if (!$('.diy_box').hasClass('active')) {

                    var localId = i.attr('localid'),
                        serverId = i.attr('serverid');

                    if (typeof localId != "undefined") {
                        wx.downloadVoice({
                            serverId: serverId, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
                            isShowProgressTips: 1, // 默认为1，显示进度提示
                            success: function(res) {

                                localId = res.localId; // 返回音频的本地ID
                                n && n.pause();
                                wx.playVoice({
                                    localId: localId // 需要播放的音频的本地ID，由stopRecord接口获得
                                });
                            }
                        });
                    } else {
                        // alert(112233);
                        // alert(diySoundEditFlag);
                        // if(!diySoundEditFlag){
                        utilSound.play(e, function() {
                            n && n.play()
                        }, function() {
                            n && n.pause()
                        })
                        // }
                    }
                } else {
                    if (typeof localId != "undefined") {
                        wx.downloadVoice({
                            serverId: serverId, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
                            isShowProgressTips: 1, // 默认为1，显示进度提示
                            success: function(res) {

                                localId = res.localId; // 返回音频的本地ID
                                n && n.pause()
                                wx.playVoice({
                                    localId: localId // 需要播放的音频的本地ID，由stopRecord接口获得
                                });
                            }
                        });
                    }
                }




            });
        } else if (i.attr('ctype') == 'w01') {
            i.on('click', function() {

                var localId = window.sessionStorage.getItem('tem_inside');
                n && n.pause();
                wx.playVoice({
                    localId: localId // 需要播放的音频的本地ID，由stopRecord接口获得
                });
            });
        }
    }
    var l = e.templateParser("jsonParser", function() {

        function e(e) {

            return function(t, i) {
                e[t] = i
            }
        }

        function t(e, t) {

            try {
                /*if(e.type.toString().length&&e.type.length>1){
                    var i = d[("" + e.type)](e)//循环创建元素
                }else{}*/
                /*console.log("e.type");
                console.log(e.type);*/
                if (("" + e.type).charAt() == 4 || ("" + e.type) == "i01") {

                    var i = d[("" + e.type)](e)
                    /*console.log("1----8");
                    console.log(i);*/
                } else {
                    var i = d[("" + e.type).charAt()](e)

                }

            } catch (n) {
                return
            }

            /* if(("" + e.type) == "i01"){
                    console.log("90");
                    var i = d[("i01")](e);
                    console.log("执行i后的结果");
                    console.log(i);
            }*/
            if (i) {

                //alert(i);
                if ("T" == ("" + e.type).charAt(0)) {
                    //

                    if (e.css.isVerification) {
                        var a = $('<li comp-drag comp-rotate class="comp-resize comp-rotate inside " id="inside_' + e.id + '" num="' + e.num + '" ctype="' + e.type + '"  isVerification="' + e.css.isVerification + '" pageNum="' + e.pagenum + '" tabindex="1"></li>');
                    } else {
                        var a = $('<li comp-drag comp-rotate class="comp-resize comp-rotate inside " id="inside_' + e.id + '" num="' + e.num + '" ctype="' + e.type + '"></li>');
                    }

                } else {

                    /*帮微微秀-20160803-llg-start*/
                    //区别组件。例如 录音组件，需要清楚上下级关系
                    var parentid = '',
                        localid = '',
                        serverid = '';
                    if (typeof e.parentid != "undefined") {
                        parentid = ' parentid="' + e.parentid + '" ';
                    }
                    if (e.type == 'w01') {

                        if (isNull(e.voice)) {
                            localid = ' localid="' + e.voice.localid + '" ';
                            serverid = ' serverid="' + e.voice.serverid + '" ';
                        }
                    }



                    /*帮微微秀-20160803-llg-end*/
                    if (e.type == 'i01') {

                        var a = $('<li comp-drag comp-rotate class="comp-resize comp-rotate inside " id="inside_' + e.id + '" num="' + e.num + '" ctype="' + e.type + '"></li>');

                    } else {
                        var a = $('<li ' + parentid + localid + serverid + ' comp-drag comp-rotate class="comp-resize comp-rotate inside " id="inside_' + e.id + '" num="' + e.num + '" ctype="' + e.type + '"></li>');
                    }

/*                    console.log("i01");
                    console.log(e.type);*/
                }
               /* console.log("1-7-4-8-9");
                console.log(e.content);*/
                if (3 != ("" + e.type).charAt(0) && 1 != ("" + e.type).charAt(0) && a.attr("comp-resize", ""),
                    "p" == ("" + e.type).charAt(0) && a.removeAttr("comp-rotate"),
                    1 == ("" + e.type).charAt(0) && a.removeAttr("comp-drag"),
                    2 == ("" + e.type).charAt(0) && a.addClass("wsite-text"),
                    /*帮微微秀-20160519-ypx-diy文本start*/
                    "T" == ("" + e.type).charAt(0) && a.addClass("wsite-text"),
                    //自定义微信统计的数据
                    "A" == ("" + e.type).charAt(0) && a.addClass("wsite-text"),
                    "B" == ("" + e.type).charAt(0) && a.addClass("wsite-text"),

                    "C" == ("" + e.type).charAt(0) && a.addClass("wsite-text"),
                    "D" == ("" + e.type).charAt(0) && a.addClass("wsite-text"),
                    "E" == ("" + e.type).charAt(0) && a.addClass("wsite-text"),
                    "F" == ("" + e.type).charAt(0) && a.addClass("wsite-text"),
                    201 == ("" + e.type).charAt(0) && a.addClass("wsite-text"),
                    /*帮微微秀-20160519-ypx-diy文本-end*/
                    "w" == ("" + e.type).charAt(0) && "w01" == ("" + e.type) && a.addClass("wsite-sound-paly"),
                    "w" == ("" + e.type).charAt(0) && "w02" == ("" + e.type) && a.addClass("wsite-sound-hear hide"),
                    /*帮微微秀-20160831-ypx-start*/
                    //新增i01
                    "i01" == ("" + e.type) && a.addClass("comp-drag"),
                    /*帮微微秀-20160831-ypx-end*/
                    "x" == ("" + e.type).charAt(0) && a.addClass("show-text"),
                    4 == ("" + e.type).charAt(0) && 403 != ("" + e.type) && 401 != ("" + e.type) && (e.properties.imgStyle && $(i).css(e.properties.imgStyle),
                        a.addClass("wsite-image")),
                    //*****图片403初始
                    403 == ("" + e.type).charAt(0) && a.addClass("wsite-image"),
                    401 == ("" + e.type).charAt(0) && a.addClass("wsite-image"),

                    "n" == ("" + e.type).charAt(0) && a.addClass("wsite-image"), "h" == ("" + e.type).charAt(0) && a.addClass("wsite-shape"),
                    5 == ("" + e.type).charAt(0) && a.addClass("wsite-input"),
                    6 == ("" + e.type).charAt(0) && a.addClass("wsite-button"),
                    /*帮微微秀-20160729-zqq-diy按钮添加按钮class-start*/
                    "N" == ("" + e.type).charAt(0) && a.addClass("wsite-button"),
                    /*帮微微秀-20160729-zqq-diy按钮添加按钮class-end*/
                    /*帮微微秀-20160729-zqq-diy按钮添加按钮class-start*/
                    "q" == ("" + e.type) && a.addClass("wsite-image"),
                    /*帮微微秀-20160729-zqq-diy按钮添加按钮class-end*/
                    8 == ("" + e.type).charAt(0) && a.addClass("wsite-button"),
                    "v" == ("" + e.type).charAt(0) && a.addClass("wsite-video"),
                    e.css && e.css.lock && a.addClass("alock"),
                    /*帮微微秀-20170119-ypx-start
                    *测试分享后不能正常使用微秀
                    **/
                    //e.content && e.content.indexOf("mingpian_module") > 0 && a.addClass("alock"),
                    /*帮微微秀-20170119-ypx-end*/
                    e.type == "N" && e.btnIndex && e.btnIndex == 6 && a.css("opacity", 0),
                    a.mouseenter(function() {
                        $(this).addClass("inside-hover")
                    }), a.mouseleave(function() {
                        $(this).removeClass("inside-hover")
                    }), "edit" == l.mode || "x" != ("" + e.type).charAt(0)) {

                    var r = $('<div class="element-box" tabindex="1">').append($('<div class="element-box-contents" tabindex="1">').append(i));

                    a.append(r), 5 != ("" + e.type).charAt(0) && 6 != ("" + e.type).charAt(0) && "N" != ("" + e.type).charAt(0) && "r" != e.type && "c" != e.type && "a" != e.type && "8" != e.type && "l" != e.type && "s" != e.type && "i" != e.type && "h" != e.type || "edit" != t || $(i).before($('<div class="element" style="position: absolute; height: 100%; width: 100%;z-index: 1;">'))
                }
                if (e.css) {
                    var s = 320 - parseInt(e.css.left);
                    /*e.css.top=(e)*/
                    if (a.css({
                        width: s
                    }), a.css({
                        width: e.css.width,
                        height: e.css.height,
                        left: e.css.left,
                        top: e.css.top,
                        /*帮微微秀-20161031-ypx-start*/
                        //版权的层级设定为1
                        zIndex: e.css.zIndex,
                        /*帮微微秀-20161031-ypx-end*/
                        bottom: e.css.bottom,
                        transform: e.css.transform
                    }), (0 === e.css.boxShadowSize || "0" == e.css.boxShadowSize) && (e.css.boxShadow = "rgba(0,0,0,0) 0 0 0"), "edit" != l.mode && "x" == ("" + e.type).charAt(0)) return a.append(i), a.find(".element-box").css({
                        borderStyle: e.css.borderStyle,
                        borderWidth: e.css.borderWidth,
                        borderColor: e.css.borderColor,
                        borderTopLeftRadius: e.css.borderTopLeftRadius,
                        borderTopRightRadius: e.css.borderTopRightRadius,
                        borderBottomRightRadius: e.css.borderBottomRightRadius,
                        borderBottomLeftRadius: e.css.borderBottomLeftRadius,
                        boxShadow: e.css.boxShadow,
                        backgroundColor: e.css.backgroundColor,
                        opacity: e.css.opacity,
                        fontFamily: e.css.fontFamily,
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    }), a.find("img").css({
                        width: "100%"
                    }), a;
                    isAndroid() && isWeixin() && 4 == e.type && "0px" != e.css.borderRadius && 0 == e.css.borderWidth && e.properties.anim && (e.css.borderWidth = 1, e.css.borderColor = "rgba(0,0,0,0)"), r.css(e.css).css({
                        width: "100%",
                        height: "100%",
                        transform: "none"
                    }),
                    e.properties.anim && r.css("display", "none"),
                    r.children(".element-box-contents").css({
                        width: "100%",
                        height: "100%"
                    }),
                    4 != ("" + e.type) && "n" != ("" + e.type).charAt(0) && "p" != ("" + e.type).charAt(0) && "h" != ("" + e.type).charAt(0) && "q" != ("" + e.type).charAt(0) && $(i).css({
                        width: e.css.width,
                        height: e.css.height

                    }),
                    // e.content&&e.content.indexOf("font-family")>0 && ($("head").append("<style>"+localStorage.getItem("a")+"</style>")/*,a.find(".editable-text").css("fontFamily",)*/)
                    /*e.content&&e.content.indexOf("font-family")>0 && */
                    e.css.fontStyle && $("head").append("<style>" + e.css.fontStyle + "</style>"),
                    e.css.accessKey && a.find(".element-box").attr("data-key", e.css.accessKey),
                    e.content && e.content.indexOf("帮微技术支持") > 0 && a.css("top", ($(".main-page:last").find("ul").attr("longpage") - 1) * 486 + parseInt(e.css.top)),
                        "h" == ("" + e.type).charAt(0) && ($(i).find("g").length ? $(i).find("g").attr("fill", e.css.color) : $(i).children().attr("fill", e.css.color), r.children(".element-box-contents").css("position", "relative"))
                }
                return a
            }
        }

        function i(e) {
            for (var t = 0; t < e.length - 1; t++)
                for (var i = t + 1; i < e.length; i++)
                    if (parseInt(e[t].css.zIndex, 10) > parseInt(e[i].css.zIndex, 10)) {
                        var n = e[t];
                        e[t] = e[i], e[i] = n
                    }
            for (var a = 0; a < e.length; a++) e[a].css.zIndex = a + 1 + "";
            return e
        }

        function n(e, n, a) {

            n = n.find(".edit_area");
            var r, s = e.elements;

            if (s)
                for (s = i(s), r = 0; r < s.length; r++)
                    if (s[r].sceneId = e.sceneId, 3 == s[r].type) {
                        var l = d[("" + s[r].type).charAt(0)](s[r], n);
                        "edit" == a && u[("" + s[r].type).charAt(0)] && u[("" + s[r].type).charAt(0)](l, s[r])
                    } else {
/*                        console.log('输出对象A');
                        console.log(r);*/
                        var p = t(s[r], a);

                        if (!p) continue;
                        n.append(p);
                        for (var m = 0; m < g.length; m++) g[m](p, s[r], a);
                        h[("" + s[r].type).charAt(0)] && (h[("" + s[r].type).charAt(0)](p, s[r]), "edit" != a && (o(p, s[r]), c(p, s[r]))), "edit" == a && u[("" + s[r].type).charAt(0)] && u[("" + s[r].type).charAt(0)](p, s[r])
                    }
        }

        function a() {
            return u
        }

        function r() {
            return d
        }

        function s(e) {
            g.push(e)
        }

        function p() {
            return g
        }

        var d = {},
            u = {},
            h = {},
            g = [],
            m = containerWidth = 320,
            f = containerHeight = 486,
            v = 1,
            b = 1,
            w = {
                getComponents: r,
                getEventHandlers: a,
                addComponent: e(d),
                bindEditEvent: e(u),
                bindAfterRenderEvent: e(h),
                addInterceptor: s,
                getInterceptors: p,
                wrapComp: t,
                mode: "view",
                parse: function(e) {
                   //给元素添加一个长页的属性-start
                    var longPage,t,bgCropType=1,i,aheight ;
                    (e.def.properties == "" || e.def.properties == undefined || e.def.properties == null) ? (longPage = 1) : (longPage = e.def.properties.longPage)

                    //给元素添加一个长页的属性-end
                     bgCropType = 1;
                     t = $('<div class="edit_wrapper" data-scene-id="' + e.def.sceneId + '"><ul eqx-edit-destroy id="edit_area' + e.def.id + '" comp-droppable paste-element class="edit_area weebly-content-area weebly-area-active" longPage = "' + longPage + '" bgcropType="'+bgCropType+'"></div>');
                    /*帮微微秀-20170112-ypx-start
                    *设置长页背景图全屏铺满
                    */
                    if(longPage > 1){
                        for(var bv in  e.def.elements){
                           if(3 == e.def.elements[bv].type){
                            if(2 == e.def.elements[bv]['properties']['croptype']){
                              aheight = longPage*486;
                                 bgCropType = e.def.elements[bv]['properties']['croptype'];
                                        t = $('<div class="edit_wrapper" data-scene-id="' + e.def.sceneId + '" style="height:'+aheight+'px"><ul eqx-edit-destroy id="edit_area' + e.def.id + '" comp-droppable paste-element class="edit_area weebly-content-area weebly-area-active" longPage = "' + longPage + '" bgcropType="'+bgCropType+' "></div>');
                                }
                            }
                        }
                    }
                    /*帮微微秀-20170112-ypx-end*/
                    i = this.mode = e.mode;
                    console.log("__________________");
                    console.log(e.def);
                    console.log("__________________");
                    this.def = e.def, "view" == i && tplCount++;
                    var a = $(e.appendTo);

                    return containerWidth = a.width(), containerHeight = a.height(), v = m / containerWidth, b = f / containerHeight, n(e.def, t.appendTo($(e.appendTo)), i)
                }
            };
        return w
    });
    l.addInterceptor(function(e, t, i) {
        eqxCommon.animation(e, t, i)
    }), l.addComponent("1", function(e) {
        var t = document.createElement("div");
        if (t.id = e.id, t.setAttribute("class", "element comp_title"), e.content && (t.textContent = e.content), e.css) {
            var i, n = e.css;
            for (i in n) t.style[i] = n[i]
        }
        if (e.properties.labels)
            for (var a = e.properties.labels, r = 0; r < a.length; r++) $('<a class = "label_content" style = "display: inline-block;">').appendTo($(t)).html(a[r].title).css(a[r].color).css("width", 100 / a.length + "%");
        return t
    }), l.addComponent("2", function(e) {
        var t = document.createElement("div");
        return t.id = e.id, t.setAttribute("ctype", e.type), t.setAttribute("class", "element comp_paragraph editable-text"), e.content && (t.innerHTML = e.content), t.style.cursor = "default", t
    }),
    /*帮微微秀-20160518-ypx-diytext-start*/
    l.addComponent("T", function(e) {
        var t = document.createElement("div");
        /*console.log('输出EEEEEE');
        console.log(e);*/
        return t.id = e.id,
            t.setAttribute("ctype", e.type),

            //t.setAttribute("contenteditable",true),
            t.setAttribute("class", "element comp_paragraph editable-text txt"),
            e.css.accessKey ? t.setAttribute("accessKey", e.css.accessKey) : t.setAttribute("accessKey", ''),
            t.setAttribute("tabIndex",0),

            e.content && (t.innerHTML = e.content),
            t.style.cursor = "default",
            t.style.padding = ".3em 15px",
            t
    }),
    /*自定义组件微信统计数据*/
    l.addComponent("A", function(e) {
        var t = document.createElement("div");

        return t.id = e.id,
            t.setAttribute("ctype", e.type),
            //t.setAttribute("contenteditable",true),
            t.setAttribute("class", "element comp_paragraph editable-text"),
            e.content && (t.innerHTML = e.content),
            t.style.cursor = "default",
            t
    }),

    l.addComponent("B", function(e) {
        console.log('-0-0-0-0-0-0-0-0-0');
        console.log(e);
        var t = document.createElement("div");
        return t.id = e.id,
            t.setAttribute("ctype", e.type),
            //t.setAttribute("contenteditable",true),
            t.setAttribute("class", "element comp_paragraph editable-text"),
            e.content && (t.innerHTML = e.content),
            t.style.cursor = "default",
            t
    }),

    l.addComponent("C", function(e) {
        var t = document.createElement("div");
        return t.id = e.id,
            t.setAttribute("ctype", e.type),
            //t.setAttribute("contenteditable",true),
            t.setAttribute("class", "element comp_paragraph editable-text"),
            e.content && (t.innerHTML = e.content),
            t.style.cursor = "default",
            t
    }),

    l.addComponent("D", function(e) {
        var t = document.createElement("div");
        return t.id = e.id,
            t.setAttribute("ctype", e.type),
            //t.setAttribute("contenteditable",true),
            t.setAttribute("class", "element comp_paragraph editable-text"),
            e.content && (t.innerHTML = e.content),
            t.style.cursor = "default",
            t
    }),
    l.addComponent("E", function(e) {
        var t = document.createElement("div");
        return t.id = e.id,
            t.setAttribute("ctype", e.type),
            //t.setAttribute("contenteditable",true),
            t.setAttribute("class", "element comp_paragraph editable-text"),
            e.content && (t.innerHTML = e.content),
            t.style.cursor = "default",
            t
    }),

    l.addComponent("F", function(e) {
        var t = document.createElement("div");
        return t.id = e.id,
            t.setAttribute("ctype", e.type),
            //t.setAttribute("contenteditable",true),
            t.setAttribute("class", "element comp_paragraph editable-text"),
            e.content && (t.innerHTML = e.content),
            t.style.cursor = "default",
            t
    }),


    l.addComponent("201", function(e) {

        var t = document.createElement("div");

        return t.id = e.id,
            t.setAttribute("ctype", e.type),
            //t.setAttribute("contenteditable",true),
            t.setAttribute("class", "element comp_paragraph editable-text"),
            e.content && (t.innerHTML = e.content),
            t.style.cursor = "default",
            t
    }),
    /*帮微微秀-20160518-ypx-diytext-start*/
    l.addComponent("x", function(e) {
        var t;
        if (!mobilecheck() && window.top == window && $(".create_left").get(0) && (l.mode = "edit"), "edit" == l.mode) t = document.createElement("div"), t.id = e.id, t.setAttribute("ctype", e.type), t.setAttribute("class", "element comp_paragraph editable-text"), e.content && (t.innerHTML = e.content), t.style.cursor = "default";
        else var t = '<div class="element-box"><img src="' + e.properties.dataUrl + '"></div>';
        return t
    }), l.addComponent("3", function(e, t) {
        var i, n = document.createElement("div");
        "edit" == l.mode ? (i = t ? t.parent(".edit_wrapper") : $("#nr .edit_wrapper"), n.setAttribute("class", "wrapper-background"), n.setAttribute("id", e.id)) : "view" == l.mode && (i = t ? t.parent(".edit_wrapper") : $("#edit_area" + l.def.id).parent(".edit_wrapper"), n.setAttribute("id", "wrapper-background" + l.def.id));
        
        $(n).prependTo(i).css({
            width: "100%",
            height: "100%"
        });
        /*帮微微秀-20170122-ypx*
        *背景长页铺满屏幕防止背景有白底-start
        **/
        if(typeof e.properties.croptype != "undefined" ){
            $(n).prependTo(i).css({"padding-top":"41.5px"})
        }
         /*帮微微秀-20170122-ypx-end*/
        var a, r = new Image;
        return e.properties.imgSrc ? (a = e.properties.imgSrc, /^http.*!/.test(a) ? (r.src = a, n.style.backgroundImage = "url(" + a + ")") : (r.src = a, n.style.backgroundImage = "url(" + a + ")"), n.style.backgroundOrigin = "element content-box", n.style.backgroundSize = "cover", n.style.backgroundPosition = "50% 50%", e.effect && ("scaleUp" == e.effect.type ? $(n).css({
            animation: "scaleUp 7s ease 1s",
            "animation-fill-mode": "both"
        }) : "scaleDown" == e.effect.type && $(n).css({
            animation: "scaleDown 7s ease 1s",
            "animation-fill-mode": "both"
        }))) : e.properties.bgColor && (n.style.backgroundColor = e.properties.bgColor), n
    }), l.addComponent("4", function(e) {
        var t = document.createElement("img");
        return t.id = e.id, t.setAttribute("ctype", e.type), t.setAttribute("class", "element comp_image editable-image"), /^http.*/.test(e.properties.src) ? t.src = e.properties.src : t.src = PREFIX_FILE_HOST + e.properties.src, t;
    }), l.addComponent("403", function(e) {
        var t = document.createElement("img");
        var i = document.createElement("input");
        var d1 = document.createElement("div");
        i.setAttribute("type", "hidden"),
        i.setAttribute("class", "element comp_input editable-text");
        $(d1).append(t);
        $(d1).append(i);
        return t.id = e.id, t.setAttribute("name", "e-image" + e.id), t.setAttribute("ctype", e.type), t.setAttribute("class", "element comp_image editable-image"), /^http.*/.test(e.properties.src) ? t.src = e.properties.src : t.src = PREFIX_FILE_HOST + e.properties.src, d1;
    }), l.addComponent("401", function(e) {
        var t = document.createElement("img");
        var i = document.createElement("input");
        var d1 = document.createElement("div");
        i.setAttribute("type", "hidden"), i.setAttribute("class", "element comp_input editable-text");
        $(d1).append(t);
        $(d1).append(i);
        return t.id = e.id, t.setAttribute("name", "e-image" + e.id), t.setAttribute("ctype", e.type), t.setAttribute("class", "element comp_image editable-image"), /^http.*/.test(e.properties.src) ? t.src = e.properties.src : t.src = PREFIX_FILE_HOST + e.properties.src, d1;
    }),
    /*l.addComponent("h", function(e) {
        var t, i;
        if (e.properties.type.indexOf("symbol") < 0) {
            var t = document.createElementNS(eqxiuSvg.NAMESPACE, "svg");
            return t.id = e.id, t.setAttribute("class", "element svg-element"), t.setAttribute("xmlns", eqxiuSvg.NAMESPACE), t.setAttribute("version", "1.1"), t.setAttribute("width", "100%"), t.setAttribute("height", "100%"), t.setAttribute("preserveAspectRatio", "none"), i = eqxiuSvg.ShapeFromType(e.properties.type), i.setAttribute("fill", "#555"), t.appendChild(i), s = eqxiuSvg.boundingBox(i), viewBox = [Math.round(s.x) || 0, Math.round(s.y) || 0, Math.round(s.width) || 32, Math.round(s.height) || 32].join(" "), t.setAttribute("viewBox", viewBox), t
        }
        return t = document.createElement("div"), i = eqxiuSvg.ShapeFromType(e.properties.type, 100, 100, e.id, e.css.color), t = '<svg id="' + e.id + '" class="element svg-element" ctype="' + e.type + '" xmlns="' + eqxiuSvg.NAMESPACE + '" version="1.1" width="100%" height="100%" preserveAspectRatio="xMidYMid" viewBox="' + e.properties.viewBox + '">' + i + "</svg>"
    })*/
    l.addComponent("h", function(a) {
        var b, c;
        if (a.properties.src) return b = document.createElementNS(eqxiuSvg.NAMESPACE, "svg"), b.setAttribute("class", "element svg-element"), $.ajax({
            type: "GET",
            url: a.properties.src,
            dataType: "xml",
            success: function(c) {
                var e = c.getElementsByTagName("svg"),
                    f = parseFloat($(e).attr("width")),
                    g = parseFloat($(e).attr("height")),
                    h = $(e).find("[fill], [style*='fill']"),
                    i = a.properties.items ? a.properties.items : [];
                if (a.properties.items)
                    if (i[0].elements || (a.properties.items = dNew(i, h)), h.length == i.length)
                        for (var j = 0; j < i.length; j++) h.eq(j).css({
                            fill: i[j].fill
                        });
                    else $.each(h, function(a, b) {
                        for (var c = 0; c < i.length; c++)
                            for (var d = i[c].elements, e = 0; e < d.length; e++) a == d[e] && ("" != i[c].fill ? h.eq(a).css({
                                fill: i[c].fill
                            }) : h.eq(a).css({
                                fill: "none"
                            }))
                    });
                else {
                    var k = [],
                        l = {};
                    $.each(h, function(a, b) {
                        var c = $(b).attr("style");
                        if (c) {
                            for (var d = c.split(";"), e = 0, f = d.length; f > e; e++)
                                if (d[e].indexOf("fill:") >= 0) {
                                    k.push(d[e].split(":")[1]);
                                    break
                                }
                        } else k.push($(b).attr("fill"))
                    });
                    for (var m = 0; m < k.length; m++) l[k[m]] || (l[k[m]] = 1, "none" != k[m] ? i.push({
                        fill: k[m],
                        svgFill: k[m]
                    }) : i.push({
                        fill: "",
                        svgFill: "none"
                    }));
                    a.properties.items = d(i, h)
                }
                viewBoxVal = "0 0 " + f + " " + g;
                var n = b.parentNode;
                n.removeChild(b), b = e[0], n.appendChild(b), b.setAttribute("viewBox", viewBoxVal), b.setAttribute("preserveAspectRatio", "none"), b.setAttribute("width", "100%"), b.setAttribute("height", "100%"), b.id = a.id, b.setAttribute("class", "element svg-element")
            }
        }), b;
        if (a.properties.type.indexOf("symbol") < 0) {
            var b = document.createElementNS(eqxiuSvg.NAMESPACE, "svg");
            return b.id = a.id, b.setAttribute("class", "element svg-element"), b.setAttribute("xmlns", eqxiuSvg.NAMESPACE), b.setAttribute("version", "1.1"), b.setAttribute("width", "100%"), b.setAttribute("height", "100%"), b.setAttribute("preserveAspectRatio", "none"), c = eqxiuSvg.ShapeFromType(a.properties.type), c.setAttribute("fill", "#555"), b.appendChild(c), s = eqxiuSvg.boundingBox(c), viewBox = [Math.round(s.x) || 0, Math.round(s.y) || 0, Math.round(s.width) || 32, Math.round(s.height) || 32].join(" "), b.setAttribute("viewBox", viewBox), b
        }
        return b = document.createElement("div"), c = eqxiuSvg.ShapeFromType(a.properties.type, 100, 100, a.id, a.css.color), b = '<svg id="' + a.id + '" class="element svg-element" ctype="' + a.type + '" xmlns="' + eqxiuSvg.NAMESPACE + '" version="1.1" width="100%" height="100%" preserveAspectRatio="xMidYMid" viewBox="' + a.properties.viewBox + '">' + c + "</svg>"
    }), l.addComponent("v", function(e) {
        var t = document.createElement("a");
        //console.log(e.properties.src);
        var m  = e.properties.src
        jd = m.split("Uploads/")[1];
        t.innerHTML=jd;
        jd.split("height");
        jd.split("width");
        //console.log(jd);
       /* return t.setAttribute("class", "element video_area"), t.id = e.id, t.setAttribute("ctype", e.type), e.properties.src && t.setAttribute("videourl", e.properties.src), t*/
      return t.setAttribute("class", "element video_area"),t.setAttribute("style", "background:none"), t.id = e.id, t.setAttribute("ctype", e.type), e.properties.src && t.setAttribute("src", ""), t
    }),
    l.addComponent("q", function(a) {

        console.log("a的生成二维码");
        console.log(a);
        console.log("a的生成二维码end");
        var b = document.createElement("img");
        b.setAttribute("class", "element comp_image editable-image"),
        b.setAttribute("ctype", a.type),
        b.setAttribute("id", a.id),
        b.setAttribute("src", a.imgurl);
        b.style.width = "100%";
        b.style.height = "100%";
        /*a.properties.src;
            var c = document.createElement("div");
                c.id = "qr"+a.id;
                $("#nr").append(c);
                var qr = $("#"+c.id).qrcode({
                        //render: "table", //table方式
                        width: a.css.width, //宽度
                        height:a.css.width, //高度
                        text: a.content //任意内容
                    });
                var aq = qr;
                console.log("输出二维码");
                console.log(qr);
            $(b).html(c);*/
        return b
    }),

    l.addComponent("5", function(e) {
        var t = document.createElement("textarea");
        return t.id = e.id, t.setAttribute("ctype", e.type), t.setAttribute("class", "element comp_input editable-text"), t.setAttribute("maxlength", "300"), e.properties.required && t.setAttribute("required", e.properties.required), e.properties.placeholder && t.setAttribute("placeholder", e.properties.placeholder), t.setAttribute("name", "eq[f_" + e.id + "]"), t.style.width = "100%",t
    }), l.addComponent("r", function(e) {
        var t = $('<div class="element comp_radio editable-text" id="' + e.id + '"></div>');
        t.attr("ctype", e.type), t.attr("required", e.properties.required), t.attr("title", e.title), t.attr("name", "eq[f_" + e.id + "]");
        var i = $('<div class="radio-title">' + e.title + "</div>");
        e.properties.titleStyle && i.css(e.properties.titleStyle), t.append(i);
        var n = $('<div class="options"></div>'),
            a = JSON.parse(e.choices);
        return $.each(a.options, function(t, i) {
            var r = $('<div class="option-group"><label class="option-label" for="' + (e.id + "" + (t + 1)) + '"><input class="option" id="' + (e.id + "" + (t + 1)) + '" type="radio" name="eq[f_' + e.id + ']" value="' + i.id + '">' + i.label + "</label></div>");
            e.properties.optionStyle && t < a.options.length - 1 && r.css(e.properties.optionStyle), n.append(r)
        }), t.append(n), t.width("100%"), t.get(0)
    }), l.addComponent("c", function(e) {
        var t = $('<div class="element comp_radio editable-text" id="' + e.id + '"></div>');
        t.attr("ctype", e.type), t.attr("required", e.properties.required), t.attr("title", e.title), t.attr("name", "eq[f_" + e.id + "]");
        var i = $('<div class="radio-title">' + e.title + "(可多选)</div>");
        e.properties.titleStyle && i.css(e.properties.titleStyle), t.append(i);
        var n = $('<div class="options"></div>'),
            a = JSON.parse(e.choices);
        return $.each(a.options, function(t, i) {
            var r = $('<div class="option-group"><label class="option-label" for="' + (e.id + "" + (t + 1)) + '"><input class="option" id="' + (e.id + "" + (t + 1)) + '" type="checkbox" name="eq[f_' + e.id + ']" value="' + i.id + '">' + i.label + "</label></div>");
            e.properties.optionStyle && t < a.options.length - 1 && r.css(e.properties.optionStyle), n.append(r)
        }), t.append(n), t.width("100%"), t.get(0)
    }), l.addComponent("a", function(e) {
        var t = $('<div class="element comp_rating editable-text" id="' + e.id + '"></div>');
        t.attr("ctype", e.type), t.attr("required", e.properties.required), t.attr("title", e.title), t.attr("name", "eq[f_" + e.id + "]"), t.append($('<div class="rating-title">' + e.title + "</div>"));
        for (var i = $('<div class="rating-icons"></div>'), n = 0; 5 > n; n++) i.append($('<i class="' + e.properties.icon + "-line " + e.properties.size + '">').css("color", e.properties.color));
        return t.append(i), t.append($('<input type="hidden" name="eq[f_' + e.id + ']" value="">')), t.width("100%"), t.get(0)
    }), l.addComponent("p", function(e) {
        if (e.properties && e.properties.children) {
            var i = e.css.width,
                n = e.css.height,
                a = $('<div id="' + e.id + '" class="slider element" ctype="' + e.type + '"></div>');
            return e.properties.bgColor && a.css("backgroundColor", e.properties.bgColor), $.each(e.properties.children, function(e, r) {
                var s = t(r.width, r.height, i, n),
                    o = $('<img src="' + r.src + '">');
                o.css({
                    margin: (n - s.height) / 2 + "px " + (i - s.width) / 2 + "px",
                    width: s.width,
                    height: s.height
                }), a.append(o)
            }), utilPictures.deleteInterval(e.id), a.get(0)
        }
    }), l.addComponent("n", function(e) {
        if (e.properties && e.properties.pics.length) {
            var t = (e.css.width, e.css.height, $('<div id="' + e.id + '" class="random-event element comp_image editable-image" ctype="' + e.type + '"></div>'));
            return $.each(e.properties.pics, function(e, i) {
                var n = $('<img src="' + PREFIX_FILE_HOST + i.src + '">');
                n.css({
                    width: "100%",
                    height: "100%",
                    display: "none"
                }), 0 === e && (n.css({
                    display: "block"
                }), t.css({
                    width: "100%",
                    height: "100%"
                })), t.append(n)
            }), t.get(0)
        }
    }), l.addComponent("6", function(e) {
        var t = document.createElement("button");
        if (t.id = e.id, t.setAttribute("ctype", e.type), t.setAttribute("class", "element comp_button editable-text"), e.properties.title) {

            var i = e.properties.title.replace(/ /g, "&nbsp;");
            t.innerHTML = i
        }
        return t.style.width = "100%", t
    }), /*帮微微秀-20160729-zqq-DIY按钮添加-start*/
    l.addComponent("N", function(e) {
        var t = document.createElement("button"),
            dateType = e.selected == "share" ? 1 : e.selected == "number" ? 0 : e.selected == "custom" ? 3 : e.selected == "apage" ? 2 : 4;
        if (t.id = e.id, t.setAttribute("ctype", e.type), t.setAttribute("class", "element comp_button editable-text diy_redio"), t.setAttribute("data-type", dateType), e.properties.title) {

            var i = e.properties.title.replace(/ /g, "&nbsp;");
            t.innerHTML = i
        }
        return t.style.width = "100%", t
            /*帮微微秀-20160729-zqq-DIY按钮添加-end*/
    }), l.addComponent("8", function(e) {
        var t = document.createElement("a");
        t.id = e.id, t.setAttribute("ctype", e.type), t.setAttribute("class", "element comp_anchor editable-text");
        var i = null;
        return e.properties.imgSrc ? (i = $('<img style="width: 100%; height: 100%;" src="' + e.properties.imgSrc + '"></img>'), $(t).html(i), "view" == l.mode && $(t).attr("href", "tel:" + e.properties.number)) : e.properties.title && (i = e.properties.title.replace(/ /g, "&nbsp;"), $(t).html(i), "view" == l.mode && $(t).attr("href", "tel:" + e.properties.number)), t.style.cursor = "default", t.style.width = "100%", t
    }), l.addComponent("l", function(e) {
        var t = document.createElement("a");
        t.id = e.id, t.setAttribute("ctype", e.type), t.setAttribute("class", "element comp_anchor editable-text");
        var i = null;
        return e.properties.imgSrc ? (i = $('<img style="width: 100%; height: 100%;" src="' + e.properties.imgSrc + '"></img>'), $(t).html(i)) : e.properties.title && (i = e.properties.title.replace(/ /g, "&nbsp;"), $(t).html(i)), t.style.cursor = "default", t.style.width = "100%", t
    }), l.addComponent("s", function(e) {
        var t = document.createElement("a");
        t.id = e.id, t.setAttribute("ctype", e.type), t.setAttribute("class", "element comp_anchor editable-text");
        var i = null;
        return e.properties.imgSrc ? (i = $('<img style="width: 100%; height: 100%;" src="' + e.properties.imgSrc + '"></img>'), $(t).html(i)) : e.properties.title && (i = e.properties.title.replace(/ /g, "&nbsp;"), $(t).html(i)), t.style.cursor = "default", t.style.width = "100%", t
    }),
    /*帮微微秀-20160729-ypx-start*/
    //添加diy声音组件

    l.addComponent("w", function(a) {
        console.log('创建图片');
        //console.log(a);
        console.log(b);
        var type = a.clicktype;


        var b,
            c = document.createElement("a");
        //初始化w01组件
        //
        console.log("w01 de ----b");
        console.log(a);

        console.log(typeof a.css.lineHeight)
        console.log(a.css.lineHeight);


        a.css.lineHeight == 1 ? (a.css.lineHeight = "40px") : (a.css.lineHeight = a.css.lineHeight);
        console.log(a.css.lineHeight);
        if ((typeof a.css.lineHeight) == "number") {
            a.css.lineHeight = a.css.lineHeight + 'px';
        }
        /*if("w01" == a.type){

                if(type == 2){
                    a.content = $.trim(a.content) ? a.content : '';
                    c.innerHTML = a.content;
                    a.properties.title = a.content;
                    a.css.backgroundColor = 'rgb(244, 113, 31)';
                    c.style.color = '#FFF';
                }else if(type == 3){
                    a.content = $.trim(a.content) ? a.content : '';
                    c.innerHTML = a.content;
                    a.properties.title = a.content;
                    a.css.backgroundColor = 'rgb(253, 175, 7)';
                    c.style.color = '#FFF';
                }else if(type == 4){
                    a.content = $.trim(a.content) ? a.content : '';
                    c.innerHTML = a.content;
                    a.properties.title = a.content;
                    a.css.backgroundColor = 'rgb(121, 196, 80)';
                    c.style.color = '#FFF';
                }else{
                    var c1 = document.createElement("img");
                    c1.style.width = "100%";
                    c1.style.height = "100%";
                    c1.src = a.properties.src;
                }

                // c1.style.display = "none";
                // var c2 = document.createElement("div");
                   //  c2.innerHTML = "双击添加默认声音";
                   //  c2.setAttribute("class", "diy_unsound");
                // var c3 = document.createElement("div");
                   //  c3.setAttribute("class", "diy_unsound_bg");

                // if(typeof a.sound != "undefined"){
                //  console.log(190);
                //  console.log(a);
                //  c1.style.display = "";
                // }else{
                //  // c.appendChild(c2);
                //  // c.appendChild(c3);
                // }
            }*/
        if ("w01" == a.type) {
            console.log("输出diy声音的样式");
            var bgcolor = a.css.backgroundColor;
            if (typeof(bgcolor) == "undefined") {
                if (type == 2) {
                    a.css.backgroundColor = 'rgb(244, 113, 31)';
                } else if (type == 3) {
                    a.css.backgroundColor = 'rgb(253, 175, 7)';
                } else if (type == 4) {
                    a.css.backgroundColor = 'rgb(121, 196, 80)';
                }
            } else {
                a.css.backgroundColor = a.css.backgroundColor;
            }

            if (type == 2) {
                a.content = $.trim(a.content) ? a.content : '';
                c.innerHTML = a.content;
                a.properties.title = a.content;
                //a.css.backgroundColor =   'rgb(244, 113, 31)';
                c.style.color = '#FFF';
            } else if (type == 3) {
                a.content = $.trim(a.content) ? a.content : '';
                c.innerHTML = a.content;
                a.properties.title = a.content;
                //a.css.backgroundColor = 'rgb(253, 175, 7)';
                c.style.color = '#FFF';
            } else if (type == 4) {
                a.content = $.trim(a.content) ? a.content : '';
                c.innerHTML = a.content;
                a.properties.title = a.content;
                //a.css.backgroundColor = 'rgb(121, 196, 80)';
                c.style.color = '#FFF';
            } else {
                var c1 = document.createElement("img");
                c1.style.width = "100%";
                c1.style.height = "100%";
                c1.src = a.properties.src;
            }

        }
        return "w01" == a.type ? type > 1 && type < 5 ? (b = "element comp_wechat_hear", c.innerHTML = a.properties.title) : (b = "element comp_wechat_play", c.appendChild(c1)) : "w02" == a.type && (b = "element comp_wechat_hear", c.innerHTML = a.properties.title),
            c.id = a.id,
            c.setAttribute("class", b),
            c.setAttribute("ctype", a.type),
            c
    }),
    /*帮微微秀-20160519-ypx-diy添加微信图片的组件-end*/

    /*帮微微秀-20160519-ypx-diy添加diy声音的组件-start*/
    l.addComponent("wr", function(a) {
        //alert(a);
        var b,
            c = document.createElement("a");

        return "w01" == a.type ? (b = "element comp_wechat_play", c.innerHTML = '<span style="font-size:16px;" class="eqf-nosy"></span>') : "w02" == a.type && (b = "element comp_wechat_hear", c.innerHTML = a.properties.title),
            c.id = a.id,
            c.setAttribute("class", b),
            c.setAttribute("ctype", a.type),
            c
    }),
    /*帮微微秀-20160729-ypx-end*/
    l.addComponent("i", function(t) {
        var i = $('<div class="element comp_counter not-voted editable-text" id="' + t.id + '"></div>');
        i.attr("ctype", t.type), i.attr("name", "eq[f_" + t.id + "]"), i.addClass(t.properties.layout).addClass(t.properties.size);
        var n = $('<div class="counter-container"></div>');
        t.properties.imgSrc ? n.append($('<img class="counter-elem counter-icon" style="width: 115px; height: 115px; margin: 0 auto;" src="' + (t.properties.imgSrc) + '"></img>')) : n.append($('<i class="counter-elem counter-icon ' + t.properties.icon + '">').css("color", t.properties.color));

        t.properties.content == "" ? t.properties.content = 0 : t.properties.content;
        var a = $('<span class="counter-elem counter-number">' + t.properties.content + '</span>').css("color", t.properties.color);
        if (n.append(a), "view" == l.mode ? e.counterValues && e.counterValues.then(function(i) {
            var n = i.map[t.id] || 0;
            a.attr("data-counter-number", n);
            var r = e.fixedNum(n);
            a.text(r)
        }) : i.removeClass("not-voted"), i.width("100%"), "counter-tb" === t.properties.layout) {
            var r = 0;
            r = t.properties.imgSrc ? "counter-l" == t.properties.size ? 77 : "counter-m" == t.properties.size ? 71 : 66 : "counter-l" == t.properties.size ? 40 : "counter-m" == t.properties.size ? 30 : 20, n.css("margin-top", -r)
        }
        return "edit" != l.mode && setTimeout(function() {
            var e = {
                width: "auto",
                "min-width": t.css.width
            };
            i.css(e), i.parents("li.comp-resize").css(e)
        }, 100), i.append(n), t.css.lineHeight && i.css("line-height", t.css.height + 'px'), i.get(0)
    }),
    /*帮微微秀-20160831-ypx-start*/
    //添加展示页的样式
    l.addComponent("i01", function(t) {


        function GetQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return '';
        }

        /*    console.log(1468)
        console.log(t);*/
        var c = $('<div class="element  editable-text" id="' + t.id + '"></div>');
        c.attr("ctype", t.type);
        var id = "conterseniorpartbg";
        var e0 = $('<div class="set_counter_gaoji_border"></div>'),
            f0 = $(' <div class="listb" style="background:' + t.properties.senior.tNameBg + ';"><span class="listb0"><span class="listb1" style="    text-align: left;color:' + t.properties.senior.color + '">' + t.properties.senior.tName + '</span><span class="listb2" style="color:' + t.properties.senior.color + '" onclick="Diy.ConterSeniorShow(\'' + t.parentid + '\',\'' + t.sceneId + '\',\'' + GetQueryString('entity_id') + '\',$(this))" css="' + t.properties.senior.tNameBg + '-' + t.properties.senior.color + '">' + t.properties.senior.linkName + '</span></span></div>'),



            /*f0 = $(' <div class="listb" style="background:'+t.properties.senior.tNameBg+';"><span class="listb0"><span class="listb1" style="color:'+t.properties.senior.color+'">'+t.properties.senior.tName+'</span><span class="listb2" style="color:'+t.properties.senior.color+'" onclick="Diy.ConterSeniorShow(\''+t.parentid+'\',\''+t.sceneId+'\',\''+GetQueryString('entity_id')+'\')">'+t.properties.senior.linkName+'</span></span></div>'),*/




            g0 = $('<div class="lista" style="background:rgba(0,0,0,0);text-align: left;"></div>'),
            h0 = '';
        /*for(var i0 = 0;i0<6;i0++){
                h0 += '<img src="'+t.properties.theadImg[i0].src+'">';
            }*/
        /*这样写方便手机端的布局当不固定个数的时候*/
        console.log("输出C");
        console.log(t.properties.senior.sons.backgroundImg.length);
        var tLength = t.properties.senior.sons.backgroundImg.length;
        var tBgsImg = t.properties.senior.sons.backgroundImg;
        switch (tLength) {
            case 0:
                h0 = '<span class="displaynone"></span><span class="displaynone"></span><span class="displaynone"></span><span class="displaynone"></span><span class="displaynone"></span><span class="displaynone"></span>';
                break;
            case 1:
                h0 += '<span><img src=' + tBgsImg[0].src + '></span><span class="displaynone"></span><span class="displaynone"></span><span class="displaynone"></span><span class="displaynone"></span><span class="displaynone"></span>';
                break;
            case 2:
                h0 += '<span><img src=' + tBgsImg[0].src + '></span><span><img src=' + tBgsImg[1].src + '></span><span class="displaynone"></span><span class="displaynone"></span><span class="displaynone"></span><span class="displaynone"></span>';
                break;
            case 3:
                h0 += '<span><img src=' + tBgsImg[0].src + '></span><span><img src=' + tBgsImg[1].src + '></span><span><img src=' + tBgsImg[2].src + '></span><span class="displaynone"></span><span class="displaynone"></span><spanclass="displaynone"></span>';
                break;
            case 4:
                h0 += '<span><img src=' + tBgsImg[0].src + '></span><span><img src=' + tBgsImg[1].src + '></span><span><img src=' + tBgsImg[2].src + '></span><span><img src=' + tBgsImg[3].src + '></span><span class="displaynone"></span><span class="displaynone"></span>';
                break;
            case 5:
                h0 += '<span><img src=' + tBgsImg[0].src + '></span><span><img src=' + tBgsImg[1].src + '></span><span><img src=' + tBgsImg[2].src + '></span><span><img src=' + tBgsImg[3].src + '></span><span><img src=' + tBgsImg[4].src + '></span><span class="displaynone"></span>';
                break;
            case 6:
                h0 = '<span><img src=' + tBgsImg[0].src + '></span><span><img src=' + tBgsImg[1].src + '></span><span><img src=' + tBgsImg[2].src + '></span><span><img src=' + tBgsImg[3].src + '></span><span><img src=' + tBgsImg[4].src + '></span><span><img src=' + tBgsImg[5].src + '></span>';
                break;
            default:
                h0 = '<span class="displaynone"></span><span class="displaynone"></span><span class="displaynone"></span><span class="displaynone"></span><span class="displaynone"></span><span class="displaynone"></span>';
                break;

        }
        e0.append(f0);
        e0.append(g0);
        g0.append(h0);
        c.html(e0);

        return "edit" != l.mode && setTimeout(function() {
            var a = {
                width: "auto",
                "min-width": t.css.width
            };
            c.css(a), c.parents("li.comp-resize").css(a)
        }, 100), t.css.lineHeight && c.css("line-height", t.css.lineHeight), c.get(0);
    }),
    /*帮微微秀-20160831-ypx-end*/

    l.addComponent("d", function(t) {
        var i = $('<div class="element comp_counter editable-text" id="' + t.id + '"></div>');
        i.attr("ctype", t.type), i.addClass(t.properties.layout).addClass(t.properties.size);
        var n = $('<div class="counter-container"></div>');
        n.append($('<i class="counter-elem counter-icon ' + t.properties.icon + '">').css("color", t.properties.color));
        var a = $('<span class="counter-elem counter-number">0</span>').css("color", t.properties.color);
        if (n.append(a), "view" == l.mode && e.showCount && e.showCount.then(function(t) {
            var i = e.fixedNum(t),
                n = i || 0;
            a.text(n)
        }), i.width("100%"), "counter-tb" === t.properties.layout) {
            var r = 0;
            r = "counter-l" == t.properties.size ? 40 : "counter-m" == t.properties.size ? 30 : 20, n.css("margin-top", -r)
        }
        return i.append(n), t.css.lineHeight && i.css("line-height", t.css.lineHeight), i.get(0)
    }), l.addComponent("7", function(e) {
        var t = document.createElement("div");
        if (t.id = "map_" + e.id, t.setAttribute("class", "element comp_map_wrapper"), e.content && (t.textContent = e.content), e.css) {
            var i, n = e.css;
            for (i in n) t.style[i] = n[i]
        }
        return t.style.height = "250px", t
    }),
    //手机端添加地图组件-start
    l.addComponent("m", function(a) {
        var b;
        b = document.createElement("div"),
        b.id = a.id,
        b.setAttribute("ctype", a.type),
        b.setAttribute("class", "element");
        var c, d = new qq.maps.LatLng(a.properties.lat ? a.properties.lat : 39.916527, a.properties.lng ? a.properties.lng : 116.397128);
        "edit" == l.mode ? c = {
            draggable: !1,
            scrollwheel: !1,
            disableDoubleClickZoom: !0,
            disableDefaultUI: !0,
            center: d,
            zoom: a.properties.zoom ? a.properties.zoom : 11
        } : (c = {
            disableDefaultUI: !0,
            center: d,
            zoom: a.properties.zoom ? a.properties.zoom : 11
        }, $(b).on("mousedown mousemove mouseup mouseleave touchstart touchmove touchend", function(a) {
            a.stopPropagation()
        }));
        var e = new qq.maps.Map(b, c);
        if ("edit" == l.mode && $(b).data("map", e), a.content && "" != a.content) {
            var f = new qq.maps.Label({
                position: d,
                map: e,
                content: a.content
            });
            "edit" == l.mode && $(b).data("label", f)
        }
        var g = new qq.maps.Point(25, 5),
            h = new qq.maps.Size(34, 34),
            j = new qq.maps.Point(0, 0),
            k = new qq.maps.MarkerImage("/assets/images/marker.png", h, j, g),
            lop = new qq.maps.Marker({
                map: e,
                position: e.getCenter()
            });
        return lop.setIcon(k), $(b).data("marker", lop), b
    }),
    //手机端添加地图组件-end


    l.bindAfterRenderEvent("1", function(e, t) {
        if (e = $("div", e)[0], "view" == l.mode && 1 == t.type) {
            var i = t.properties.labels;
            for (key in i)!
                function(t) {
                    $($(e).find(".label_content")[t]).on("click", function() {
                        pageScroll(i[t])
                    })
            }(key)
        }
    }), l.bindAfterRenderEvent("8", function(e, t) {
        e = $("a", e)[0];
        ({
            id: t.sceneId,
            num: t.properties.number
        });
        if ("view" == l.mode) {
            var i = function() {};
            e.addEventListener("click", i)
        }
    }), l.bindAfterRenderEvent("l", function(e, t) {
        if (e = $("a", e)[0], "view" == l.mode) {
            var i = t.properties.url;
            $(e).click(function(e) {
                isNaN(i) ? window.open(i) : eqxiu.pageScroll(i)
            })
        }
    }),

    l.bindAfterRenderEvent("s", function(e, t) {
        e = $("a", e)[0], "view" == l.mode && $(e).click(function(e) {})
    }),
    /*帮微微秀-20160729-ypx-start*/
    //绑定diy声音的事件
    l.bindAfterRenderEvent("w", function(e, t) {
        var START, END, recordTimer, sess = window.sessionStorage;
        if (t.type == "w01") {
            e = $("img", e)[0],
                "view" == l.mode
        } else if (t.type == "w02") {
            e,
                "view" == l.mode && $(e).on('touchstart', function(e) {
                    console.log($(e));
                    //当touch时将此组件的透明度修改为原来的0.8；
                    $(this).addClass("touchingStyle");
                    event.preventDefault();
                    START = new Date().getTime();

                    recordTimer = setTimeout(function() {

                        wx.startRecord({
                            success: function() {
                                localStorage.rainAllowRecord = 'true';
                            },
                            cancel: function() {
                                alert('用户拒绝授权录音');
                            }
                        });
                    }, 1);
                }) && $(e).on('touchend', function(event) {
                    //当touch结束时将此组件的透明度修改为原来的1；
                    $(this).removeClass("touchingStyle");
                    var parentid = $(e).attr('parentid');
                    event.preventDefault();
                    wx.stopRecord({
                        success: function(res) {
                            //用于存储微信ID
                            // sess.setItem('localId_'+parentid,res.localId);
                            // $('#inside_'+parentid).attr('localid',res.localId);

                            //上传录音
                            //调用微信的上传录音接口把本地录音先上传到微信的服务器
                            //不过，微信只保留3天，而我们需要长期保存，我们需要把资源从微信服务器下载到自己的服务器
                            wx.uploadVoice({
                                localId: res.localId, // 需要上传的音频的本地ID，由stopRecord接口获得
                                isShowProgressTips: 1, // 默认为1，显示进度提示
                                success: function(data) {
                                    //保存音频的服务器端ID、本地ID
                                    sess.setItem('tem_inside', data.localId);
                                    $('#inside_' + parentid).attr({
                                        localid: data.localId,
                                        serverid: data.serverId
                                    });
                                }
                            });

                        }
                    });
                })
        }


    })
    /*帮微微秀-20160729-ypx-end*/

    l.bindAfterRenderEvent("i", function(t, i) {
        if ("view" == l.mode) {
            var n = $(t).find(".counter-icon");
            n.click(function(a) {
                if (!mobilecheck()) {
                    alert('请在微信中浏览');
                    return false;
                }
                var r = {
                        sceneId: i.sceneId,
                        fieldId: i.id,
                        entityId: __entityid
                    },
                    s = $(t);

                var local = window.localStorage,
                    id = ($(t).attr('id')).split('_')[1],
                    error = '您已经点击过';


                if (!local.getItem('i_' + __entityid + '_' + i.sceneId + '_' + id)) {

                    $.ajax({
                        cache: !0,
                        type: "POST",
                        url: "/index.php?c=scene&a=counterset",
                        data: $.param(r),
                        async: !1,
                        error: function(e) {
                            alert("Connection error")
                        },
                        success: function(t) {
                            if (t.code == 200) {

                                local.setItem('i_' + __entityid + '_' + i.sceneId + '_' + id, 1);
                                // n.unbind("click"), s.find(".comp_counter").removeClass("not-voted");
                                // var i = $(".counter-number", s),
                                // a = (parseInt(i.text()) + 1);
                                // i.attr("data-counter-number", a);
                                // var num = parseInt(i.text());
                                // // var r = e.fixedNum(a);
                                // $(".counter-number", s).text(5);
                                s.find(".comp_counter").removeClass("not-voted");
                                var num = parseInt(n.next('span').text());
                                n.unbind("click");
                                n.next('span').text((num + 1));
                            } else {
                                alert('您已点过');
                            }

                        }
                    })
                } else {
                    alert('您已点过');
                }

            })
        }
    }), l.bindAfterRenderEvent("4", function(e, t) {
        i(e, t)
    }), l.bindAfterRenderEvent("403", function(e, t) {
        i(e, t)
    }), l.bindAfterRenderEvent("401", function(e, t) {
        i(e, t)
    }), l.bindAfterRenderEvent("x", function(e, t) {
        i(e, t)
    }), l.bindAfterRenderEvent("n", function(e, t) {}), l.bindAfterRenderEvent("h", function(e, t) {
        "view" == l.mode && t.properties.url && $(e).click(function(e) {
            var i = t.properties.url;
            isNaN(i) ? window.open(i) : eqxiu.pageScroll(i)
        })
    }), l.bindAfterRenderEvent("5", function(e, t) {
        var i = mobilecheck();
        n($(e).find("textarea")), a($(e).find("textarea")), "view" == l.mode && i && parseFloat(t.css.top) >= 200 && ($(e).find("textarea").focus(function(t) {
            $(e).closest(".edit_area").css({
                top: "-150px"
            })
        }), $(e).find("textarea").blur(function(t) {
            $(e).closest(".edit_area").css({
                top: 0
            })
        }))
    }), l.bindAfterRenderEvent("r", function(e, t) {
        "view" == l.mode && n($(e).find("label"))
    }), l.bindAfterRenderEvent("c", function(e, t) {
        "view" == l.mode && n($(e).find("label"))
    }), l.bindAfterRenderEvent("v", function(e, t) {
        /*"view" == l.mode && $(e).click(function() {

            $(e).hide(), $("#audio_btn").hasClass("video_exist") && ($("#audio_btn").hide(), $("#media")[0].pause()), utilSound.pause(), $('<div class="video_mask page_effect lock" id="mask_' + t.id + '"></div>').appendTo($(e).closest(".m-img")), $('<a class = "close_mask" id="close_' + t.id + '"></a>').appendTo($(e).closest(".m-img"));
            var i = t.properties.src,
                n = i.split("Uploads/")[1];
            $(n).appendTo($("#mask_" + t.id)).attr("style", "position: absolute;top:0; min-height: 45%; max-height: 100%; top: 20%;").attr("width", "100%").removeAttr("height"), $("#close_" + t.id).bind("click", function() {
                $(e).show(), $("#mask_" + t.id).remove(), $("#close_" + t.id).remove(), $("#audio_btn").hasClass("video_exist") && $("#audio_btn").show(function() {
                    $("#media")[0].play()
                })
            })
        })*/
        
        //},1000)
        

        $(e).click(function() {
            var tcIframe = $(e).find("iframe");tcIframe.height(t.css.height);tcIframe.width(t.css.width);
                tcIframe.css({"height": t.css.height,"width": t.css.width});
        })
    }),
    l.bindAfterRenderEvent("2", function(e, t) {
        r(e)
    }),

    l.bindAfterRenderEvent("T", function(e, t) {
        r(e)
    }),

    //微信统计数据
    l.bindAfterRenderEvent("A", function(e, t) {
        r(e)
    }),
    l.bindAfterRenderEvent("B", function(e, t) {
        r(e)
    }),
    l.bindAfterRenderEvent("C", function(e, t) {
        r(e)
    }),
    l.bindAfterRenderEvent("D", function(e, t) {
        r(e)
    }),
    l.bindAfterRenderEvent("E", function(e, t) {
        r(e)
    }),
    l.bindAfterRenderEvent("F", function(e, t) {
        r(e)
    }),

    l.bindAfterRenderEvent("N", function(e, t) {
        window.sessionStorage.clear();

        if (e = $("button", e)[0], "view" == l.mode) {

            /*20160926--diy按钮高级设置--zqq*/

            $(".diy_other_btn .save").css("backgroundColor", t.backgroundNewColor);
            $(".diy_quit_edit_tips .save").css("backgroundColor", t.backgroundNewColor);
            if (t.selected == "custom") {
                $(".diy_other_btn:eq(3) .custom_page_guide>div").text(t.customValue)
            }

            var cliks = mobilecheck() ? "touchstart" : 'click';
            var color = $(e).parents('.element-box').css("color");
            var bColor = $(e).parents('.element-box').css("backgroundColor"),
                pagenum = t.pagenum;
            var typeNum = $(e).data("type");
            $(e).off().bind(cliks, function(ev) {

                ev.stopPropagation();
                ev.preventDefault();

                var that = $(this);

                //直接保存
                /*                $(".z-current").find('li').each(function(i,v){
                    if(!($(v).attr("ctype")=="T"||$(v).attr("ctype")=="403")){
                        Diy.insert();
                        typeNum!=4&&Diy.saveTip(typeNum,pagenum,cliks);
                    }
                })*/

                var t, i = $(e).parents(".edit_wrapper").attr("data-scene-id");
                t = i ? $(e).parents(".nr").find('.edit_wrapper[data-scene-id="' + i + '"]') : $(e).parents(".nr");

                $(e).parents("section").find("li").each(function(e, v) {
                    if (v.id == "inside_diy_mask") {
                        if (ev.target.tagName == "BUTTON") {
                            diyAuth();
                            return true;
                        }
                    } else {
                        ev.target.tagName == "BUTTON" && Diy.update();
                    }
                })
                /*t.find("li")*/


                /***锁定当前页面-zqq-20160612***/
                /*$(e).parents(".main-page").removeClass("z-current").addClass("mingpianSuo");*/
                // var btn1=that.parents(".element-box").clone(true),
                //     btn2=that.parents(".element-box").clone(true);

                var box = $(e).parents('.element-box');
                var height = $(e).parents('.element-box').height();
                var sess = window.sessionStorage;
                if (!sess.getItem('oldhtml_' + $(e).attr('id'))) {
                    // JSON.stringify
                    var info = {
                        'oldhtml': $(e).html(),
                        'backcolor': $(e).parents('.element-box').css('background-color')
                    }
                    sess.setItem('oldhtml_' + $(e).attr('id'), JSON.stringify(info));
                }

                $(e).parents(".main-page").addClass("mingpianSuo").removeClass("z-current");

                $(".diy_other_btn .save").css("backgroundColor", bColor);

                $(e).html('<div class="diysub" style="width:49%; background-color:' + bColor + '; color:' + color + '; height:100%;line-height: ' + height + 'px;float:left;">保存</div><div class="diycls" style="width:49%; background-color:' + bColor + '; color:' + color + '; height:100%;float:right; line-height: ' + height + 'px;">放弃</div><div style="clear:both"></div>');


                $(e).parents('.element-box').css('background-color', 'transparent');

                function diyUpload() {

                    var tel = '';
                    $(".diy_loading").show();
                    $.ajax({
                        url: "/index.php?c=scene&a=getTel",
                        type: "get",
                        cache: false,
                        async: false,
                        dataType: 'json',
                        data: {

                            entity_id: __entityid,
                            sceneid_bigint: __wxsceneid
                        },
                        error: function(e) {
                            // alert("数据错误");

                        },
                        success: function(data) {
                            tel = data;
                        }
                    });


                    if (typeNum != 4 && typeNum == 0) {
                        if (localStorage.getItem("teleTest")) {
                            $(".diy_other_btn").eq(typeNum).hide(0);
                        } else {
                            if (!tel) {
                                $(".diy_other_btn").eq(typeNum).delay(500).show(0);
                            }

                        }
                    } else {
                        if (!tel) {
                            $(".diy_other_btn").eq(typeNum).delay(500).show(0);
                        }
                    }

                    setTimeout(function() {

                        $(e).parents(".main-page").addClass("z-current").removeClass("mingpianSuo");
                        that.parents(".element-box").show();
                        // **解除锁定当前页面-zqq-20160612**
                        // 微信分享链接重置
                        $.ajax({
                            type: "get",
                            url: "/Home/view-newLink",
                            dataType: 'json',
                            cache: false,
                            async: false,
                            data: {
                                'id': __wxsceneid,
                            },
                            success: function(data) {

                                $('#show').html(data);
                            }
                        });
                        var old = JSON.parse(sess.getItem('oldhtml_' + $(e).attr('id')));
                        e.innerHTML = old.oldhtml;
                        $(e).parents('.element-box').css('background-color', old.backcolor);
                        Diy.insert();
                        typeNum != 4 && Diy.saveTip(typeNum, pagenum, cliks);
                    }, 1);
                    /*帮微微秀-20170210-ypx-start*/
                    /*判断是安卓手机并且是固定组件则设定.m-img的属性*/
                    setTimeout(function(){

                        if(isAndroid() && $(e).closest("li").hasClass("alock") && $(e).closest("li").offset().top>360){
                            console.log(123456);
                             $(e).closest("li").closest(".m-img").css({
                                "top":"0",
                                "transform":"translateY(60%)",
                                "-webkit-transform":"translateY(60%)",
                                "position":"absolute"
                            })
                             $(e).closest("li").closest(".main-page").css({
                                "top":"0",
                                "transform":"translateY(0px)",
                                "-webkit-transform":"translateY(0px)",
                                "position":"absolute"
                            })
                        }
                    },1500) 
                  /*帮微微秀-20170210-ypx-end*/

                }

                box.find('.diysub').off().on(cliks, function() {
                    // alert(123456);
                    diyUpload();
                });
                box.find('.diycls').on(cliks, function() {

                    setTimeout(function() {
                        $(e).parents(".main-page").addClass("z-current").removeClass("mingpianSuo");
                        diyViewToEditAnim2();
                        /*Diy.quitDiyEdit();*/
                        that.parents(".element-box").show();
                        var old = JSON.parse(sess.getItem('oldhtml_' + $(e).attr('id')));
                        if ($(".diy_quit_edit_tips").is(":hidden")) {
                            e.innerHTML = old.oldhtml;
                            $(e).parents('.element-box').css('background-color', old.backcolor);
                        }

                        $(".diy_quit_edit_tips .save").on('click', function(event) {
                            Diy.quitDiyEdit();
                            e.innerHTML = old.oldhtml;
                            $(e).parents('.element-box').css('background-color', old.backcolor);
                        });


                    }, 100);
                });


            })
        }
    })


    l.bindAfterRenderEvent("6", function(e, t) {
        var deviceType = mobilecheck() ? "touchstart touchmove touchend":"click";
        if (e = $("button", e)[0], "view" == l.mode) {
            var i = {
                    REQUIRED: "为必填项！",
                    WRONG_PHONE_NUMBER_FORMAT: "手机号码格式错误！",
                    WRONG_EMAIL_FORMAT: "邮箱格式错误！",
                    FILL_OUT_THE_FORM: "请填写表单！",
                    DUPLICATED_SUBMISSION: "请不要重复提交！",
                    THANKS_FOR_PARTICIPATION: "谢谢您的参与！"
                },
                n = function(e, t, n) {
                    var a = !0,
                        r = {};
                    if ($("textarea", n).each(function() {
                        if (a) {
                            if ("required" == $(this).attr("required") && "" == $(this).val().trim()) return alert($(this).attr("placeholder") + i.REQUIRED), void(a = !1);
                            if ("502" == $(this).attr("ctype") && "" !== $(this).val().trim()) {
                                var e = new RegExp(/(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/g);
                                if (!e.test($(this).val())) return alert("手机号码格式错误！"), void(a = !1)
                            }
                            if ("503" == $(this).attr("ctype") && "" !== $(this).val().trim()) {
                                var t = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g);
                                if (!t.test($(this).val())) return alert("邮箱格式错误！"), void(a = !1)
                            }
                            r[$(this).attr("name")] = $(this).val()
                        }
                    }), $("input:checked", n).each(function() {
                        var e = $(this);
                        r[e.attr("name")] ? r[e.attr("name")] += "," + e.val() : r[e.attr("name")] = e.val()
                    }), $('.comp_radio[required="required"]', n).each(function() {
                        var e = $(this);
                        r[e.attr("name")] || (alert(e.attr("title") + i.REQUIRED), a = !1)
                    }), $('input[type="hidden"]', n).each(function() {

                        r[$(this).attr("name")] = $(this).val()
                    }), $('.comp_rating[required="required"]', n).each(function() {
                        var e = $(this);
                        r[e.attr("name")] && "0" != r[e.attr("name")] || (alert(e.attr("title") + "为必填项！"), a = !1)
                    }), a) {
                        var s = !1,
                            entity_id;
                        if ($.isEmptyObject(r)) return void(s = !0);
                        for (var o in r)
                            if ("" !== r[o]) {
                                s = !0;
                                break
                            }
                        entity_id = GetQueryString('entity_id');
                       console.log(s);
                        return s ? void $.ajax({
                            cache: !0,
                            type: "POST",
                            url: PREFIX_URL + "index.php?c=scenedata&a=add&id=" + t + '&entity_id=' + entity_id,
                            data: $.param(r),
                            async: !1,
                            error: function(e) {
                                alert("Connection error")
                            },
                            success: function(t) {
                                $(e).off(deviceType).on(deviceType,function() {
                                    alert("请不要重复提交！")
                                }), alert("谢谢您的参与！")
                            }
                        }) : void alert("请填写表单！")
                    }
                };
            l.def.sceneId, $(e).on(deviceType, function() {
                var t, i = $(e).parents(".edit_wrapper").attr("data-scene-id");
                t = i ? $(e).parents(".nr").find('.edit_wrapper[data-scene-id="' + i + '"]') : $(e).parents(".nr"), n(this, i, t)
            })
        }
    }), l.bindAfterRenderEvent("7", function(e, t) {
        var i = new BMap.Map("map_" + t.id, {
                enableMapClick: !1
            }),
            n = new BMap.Point(t.properties.x, t.properties.y),
            a = new BMap.Marker(n);
        i.addOverlay(a);
        var r = new BMap.Label(t.properties.markTitle, {
            offset: new BMap.Size(20, -10)
        });
        a.setLabel(r), i.disableDoubleClickZoom(), i.centerAndZoom(n, 15)
    }), l.bindAfterRenderEvent("p", function(e, t) {
        if (!$(e).closest(".page_tpl_container ").length) {
            $(e).children(".element-box").css("overflow", "visible"), utilPictures.deleteInterval(t.id);
            var i = $(e).find("#" + t.id);
            new flux.slider(i, {
                autoplay: t.properties.autoPlay,
                delay: t.properties.interval,
                pagination: !1,
                transitions: [utilPictures.getPicStyle(t.properties.picStyle).name],
                width: t.css.width,
                height: t.css.height,
                bgColor: t.properties.bgColor,
                onStartEnd: function(e) {
                    utilPictures.addInterval(t.id, e)
                }
            })
        }
    }), l.bindAfterRenderEvent("a", function(e, t) {
        function i(e) {
            r.each(function(t, i) {
                $(i).removeClass(o).addClass(o + "-line"), e >= t && $(i).removeClass(o + "-line").addClass(o)
            })
        }
        var a = $(e);
        if ("view" == l.mode) {
            var r = a.find("i"),
                s = a.find("input"),
                o = t.properties.icon;
            r.each(function(e, t) {
                $(t).bind("click", function() {
                    i(e), s.val(e + 1)
                }), $(t).bind("mouseenter", function() {
                    i(e)
                })
            }), a.find(".rating-icons").bind("mouseleave", function() {
                i(parseInt(s.val(), 10) - 1)
            }), n(a.find(".rating-icons"))
        }
    });
    var p
}(window.eqShow);
var tplCount = 0,
    eqxCommon = function() {
        var e = function(e) {
                var t, i, n = e.type;
                return 0 === n && (t = "fadeIn"), 1 === n && (i = e.direction, 0 === i && (t = "fadeInLeft"), 1 === i && (t = "fadeInDown"), 2 === i && (t = "fadeInRight"), 3 === i && (t = "fadeInUp")), 6 === n && (t = "wobble"), 5 === n && (t = "rubberBand"), 7 === n && (t = "rotateIn"), 8 === n && (t = "flip"), 9 === n && (t = "swing"), 2 === n && (i = e.direction, 0 === i && (t = "bounceInLeft"), 1 === i && (t = "bounceInDown"), 2 === i && (t = "bounceInRight"), 3 === i && (t = "bounceInUp")), 3 === n && (t = "bounceIn"), 4 === n && (t = "zoomIn"), 10 === n && (t = "fadeOut"), 11 === n && (t = "flipOutY"), 12 === n && (t = "rollIn"), 13 === n && (t = "lightSpeedIn"), 14 === n && (t = "bounceOut"), 15 === n && (t = "rollOut"), 16 === n && (t = "lightSpeedOut"), 17 === n && (i = e.direction, 0 === i && (t = "fadeOutRight"), 1 === i && (t = "fadeOutDown"), 2 === i && (t = "fadeOutLeft"), 3 === i && (t = "fadeOutUp")), 18 === n && (t = "zoomOut"), 19 === n && (i = e.direction, 0 === i && (t = "bounceOutRight"), 1 === i && (t = "bounceOutDown"), 2 === i && (t = "bounceOutLeft"), 3 === i && (t = "bounceOutUp")), 20 === n && (t = "flipInY"), 21 === n && (t = "tada"), 22 === n && (t = "jello"), 23 === n && (t = "flash"), 24 === n && (t = "flipInX"), 25 === n && (t = "flipOutX"), t
            },
            t = function(e, t, i, r) {
                /*function n(e, t, r) {
                    r.length && a < r.length && (e.css("animation", ""), e.get(0), e.css("animation", t[a] + " " + r[a].duration + "s ease " + r[a].delay + "s " + (r[a].countNum ? r[a].countNum : "")), "view" == i ? (r[a].count && a == r.length - 1 && e.css("animation-iteration-count", "infinite"), e.css("animation-fill-mode", "both")) : (e.css("animation-iteration-count", "1"), e.css("animation-fill-mode", "backwards")), r[a].linear && e.css("animation-timing-function", "linear"), e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                        a++, n(e, t, r)
                    }))
                }*/
                function n(e, t, r, g, h) {
                    if (r.length && a < r.length) {
                        e.css("animation", "");
                        e.get(0);
                        var counts = r[a].count ? "9999" : String(r[a].countNum);


                        /*帮微微秀-20160526-ypx-正则匹配包含所有退出的动画消失后隐藏-start*/
                        var repAnom = /Out/;
                        var string = t[a];
                        var tolive = repAnom.test(string);
                        /*帮微微秀-20160526-ypx-正则匹配包含所有退出的动画消失后隐藏-end*/
                        if (
                            e.css("animation", t[a] + " " + r[a].duration + "s ease " + r[a].delay + "s " + (r[a].countNum ? r[a].countNum : "")),

                            "view" == c ? (r[a].count && a == r.length - 1 && e.css("animation-iteration-count", "infinite"), e.css("animation-fill-mode", "both")) : (

                                e.css("animation-iteration-count", counts),

                                e.css("animation-fill-mode",
                                    /*帮微微秀-20160526-ypx-正则匹配包含所有退出的动画消失后隐藏-start*/
                                    tolive ? "both" : "backwards"
                                    /*帮微微秀-20160526-ypx-正则匹配包含所有退出的动画消失后隐藏-end*/
                                )),

                            r[a].linear && e.css("animation-timing-function", "linear"), g && h.top > 486 && "view" == c

                        ) {
                            e.css("display", "none");
                            var i = function(t, c) {
                                Math.abs(c) > h.top && (e.css("display", "block"), $(document).unbind("pageScrollPos", i))
                            };
                            $(document).bind("pageScrollPos", i)
                        }
                        e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                            a++, n(e, t, r)
                        })
                    }
                }
                var a = 0;
                if (t.properties && t.properties.anim) {
                    var z = [];
                    t.properties.anim.length ? z = t.properties.anim : z.push(t.properties.anim);
                    var s = $(".element-box", e);
                    s.attr("element-anim", "");
                    for (var o, c = [], l = [], p = 0, d = z.length; d > p; p++) null != z[p].type && -1 != z[p].type && (o = eqxCommon.convertType(z[p]), c.push(o), l.push(z[p]));
                    t.properties.anim.trigger ? e.click(function() {
                        n(s, o, t.properties.anim)
                    }) /*: n(s, c, l)*/ : r && r.longPage ? eqxiu.animB() : (n(s, c, l))
                }
            },
            i = function(e, t) {
                var i = $(e);
                t.trigger && t.trigger.receives && t.trigger.receives.length && $.each(t.trigger.receives, function(e, n) {
                    if (n.ids.length) {
                        var a = utilTrigger.getHandleType(n.type).name;
                        ("show" == a || "randomEvent" == a) && i.hide(), "hide" == a && i.show(), i.bind(a, function() {
                            if ("show" == a) $(this).show();
                            else if ("hide" == a) $(this).hide();
                            else if ("randomEvent" == a) {
                                $(this).show();
                                var e = Math.floor(Math.random() * t.properties.pics.length);
                                $(this).find("img").css({
                                    display: "none"
                                }), $(this).find("img").eq(e).css({
                                    display: "block"
                                })
                            }
                        })
                    }
                })
            },
            n = function() {
                var e, t, i = window.navigator,
                    n = ["language", "browserLanguage", "systemLanguage", "userLanguage"];
                if ($.isArray(i.languages))
                    for (e = 0; e < i.languages.length; e++)
                        if (t = i.languages[e], t && t.length) return t;
                for (e = 0; e < n.length; e++)
                    if (t = i[n[e]], t && t.length) return t;
                return null
            };
        return {
            convertType: e,
            animation: t,
            bindTrigger: i,
            getFirstBrowserLanguage: n
        }
    }();
eqShow.getShowCount = function(e) {
    return this.showCount = $.ajax({
        type: "GET",
        url: PREFIX_S1_URL + "index.php?c=scene&a=pv&sceneId=" + e,
        xhrFields: {
            withCredentials: !0
        },
        error: function(e) {
            alert("Connection error")
        },
        crossDomain: !0
    }), this.showCount
}, eqShow.fixedNum = function(e) {
    var t;
    return 1e4 > e ? t = e : e >= 1e4 && 1e8 > e ? t = (e / 1e4).toFixed(2) + "万" : e >= 1e8 && (t = (e / 1e8).toFixed(2) + "亿"), t
}, eqShow.showProgressBar = function(e, t, i) {
    if (e.obj.property.slideNumber) {
        var n = $('<div class="progress"></div>'),
            a = $("<span></span>"),
            r = $('<em class="page-tip"></em>');
        n.append(a).append(r), i && e.obj.property.slideDisplay ? i.append(n.css("display", e.obj.property.slideDisplay)) : $("#nr").append(n.css("display", "block"))
    }
    var s = function() {

        e.obj.property.slideNumber && a && setTimeout(function() {
            var e = $(".z-active").get(0) ? $(".z-active").get(0) : $(".z-current").get(0);
            if (e) {

                var i = $(e).find(".m-img").attr("id").substring(4),
                    s = t.length,
                    o = i / s,
                    c = 100;


                // if(!$('#page'+i).attr('is_diy') && $('.diy_right1').is(':hidden')){
                //   $('.diy_box').hide();
                // }else{
                //   $('.diy_box').show();
                // }

                r.text(i + "/" + s), a.css("width", parseFloat(n.width()) * o), $(e).find(".lock").length && (c = 0), n.css("z-index", c)
            }
        }, 100);

        /*帮微微秀-20160623-llg-start*/
        //判断是否含有DIY组件
        setTimeout(function() {
            var e = $(".z-active").get(0) ? $(".z-active").get(0) : $(".z-current").get(0);

            if (e) {

                var i = $(e).find(".m-img").attr("id").substring(4);

                if ( /*$('#page'+i).attr('is_diy') &&*/ $('.diy_right1').is(':hidden')) {
                    for (var j = 0; j < eqxiu._pageData[i - 1].elements.length; j++) {
                        if (eqxiu._pageData[i - 1].elements[j].type == "N" && eqxiu._pageData[i - 1].elements[j].btnIndex != "undefined" && eqxiu._pageData[i - 1].elements[j].btnIndex == 6) {
                            $('.diy_box').show();
                            return false;
                        } else {
                            !$('#page' + i).attr('is_diy') && $('.diy_box').hide();

                        }
                    }
                } else {
                    /*  $('.diy_box').hide();
                     */
                }
            }

        }, 100);
        /*帮微微秀-20160623-llg-end*/

    };
    s(), t.eq(0).find(".u-arrow-bottom").css("bottom", "30px"), eqShow.progressInterval = setInterval(function() {
        s()
    }, 300)
}, eqShow.selectElement = function(e) {
    var t;
    return t = $("#inside_" + e, ".phone-view").length ? $("#inside_" + e, ".phone-view") : $("#inside_" + e)
},
function(e) {
    function t(t) {
        return t.classList ? t.classList : e(t).attr("class").match(/\S+/gi)
    }
    e.fn.ShareLink = function(i) {
        function n(e) {
            var t = s[e];
            return t = t.replace("{url}", encodeURIComponent(i.url)), t = t.replace("{title}", encodeURIComponent(i.title)), t = t.replace("{text}", encodeURIComponent(i.text)), t = t.replace("{image}", encodeURIComponent(i.image))
        }
        var a = {
                title: "",
                text: "",
                image: "",
                url: window.location.href,
                class_prefix: "s_"
            },
            i = e.extend({}, a, i),
            r = i.class_prefix.length,
            s = {
                twitter: "https://twitter.com/intent/tweet?url={url}&text={text}",
                pinterest: "https://www.pinterest.com/pin/create/button/?media={image}&url={url}&description={text}",
                facebook: "https://www.facebook.com/sharer.php?u={url}",
                vk: "https://vkontakte.ru/share.php?url={url}&title={title}&description={text}&image={image}&noparse=true",
                linkedin: "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={text}&source={url}",
                myworld: "https://connect.mail.ru/share?url={url}&title={title}&description={text}&imageurl={image}",
                odnoklassniki: "http://odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl={url}&st.comments={text}",
                tumblr: "https://tumblr.com/share?s=&v=3&t={title}&u={url}",
                blogger: "https://blogger.com/blog-this.g?t={text}&n={title}&u={url}",
                delicious: "https://delicious.com/save?url={url}&title={title}",
                plus: "https://plus.google.com/share?url={url}",
                digg: "https://digg.com/submit?url={url}&title={title}",
                reddit: "http://reddit.com/submit?url={url}&title={title}",
                stumbleupon: "https://www.stumbleupon.com/submit?url={url}&title={title}",
                pocket: "https://getpocket.com/edit?url={url}&title={title}",
                chiq: "http://www.chiq.com/create/bookmarklet?u={url}&i={image}&d={title}&c={url}",
                qrifier: "http://qrifier.com/q?inc=qr&type=url&size=350&string={url}",
                qrsrc: "http://www.qrsrc.com/default.aspx?shareurl={url}",
                qzone: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}",
                tulinq: "http://www.tulinq.com/enviar?url={url}&title={title}",
                misterwong: "http://www.mister-wong.com/index.php?action=addurl&bm_url={url}&bm_description={title}&bm_notice=",
                sto_zakladok: "http://www.100zakladok.ru/save/?bmurl={url}&bmtitle={title}",
                two_linkme: "http://www.2linkme.com/?collegamento={url}&id=2lbar",
                adifni: "http://www.adifni.com/account/bookmark/?bookmark_url={url}",
                amazonwishlist: "http://www.amazon.com/gp/wishlist/static-add?u={url}&t={title}",
                amenme: "http://www.amenme.com/AmenMe/Amens/AmenToThis.aspx?url={url}&title={title}",
                aim: "http://lifestream.aol.com/share/?url={url}&title={title}&description={text} ",
                aolmail: "http://webmail.aol.com/25045/aol/en-us/Mail/compose-message.aspx?to=&subject={title}&body={{content}}",
                arto: "http://www.arto.com/section/linkshare/?lu={url}&ln={title}",
                baidu: "http://cang.baidu.com/do/add?it={title}&iu={url}&fr=ien&dc={text}",
                bitly: "https://bitly.com/a/bitmarklet?u={url}",
                bizsugar: "http://www.bizsugar.com/bizsugarthis.php?url={url}",
                blinklist: "http://www.blinklist.com/blink?u={url}&t={title}&d={text}",
                blip: "http://blip.pl/dashboard?body={title}%3A%20{url}",
                blogmarks: "http://blogmarks.net/my/new.php?mini=1&simple=1&url={url}&title={title}&content={text}",
                blurpalicious: "http://www.blurpalicious.com/submit/?url={url}&title={title}&desc={text}",
                bobrdobr: "http://bobrdobr.ru/addext.html?url={url}&title={title}&desc={text}",
                bonzobox: "http://bonzobox.com/toolbar/add?u={url}&t={title}&desc={text}",
                bookmerkende: "http://www.bookmerken.de/?url={url}&title={title}",
                box: "https://www.box.net/api/1.0/import?import_as=link&url={url}&name={title}&description={text}",
                bryderi: "http://bryderi.se/add.html?u={url}",
                buddymarks: "http://buddymarks.com/add_bookmark.php?bookmark_title={title}&bookmark_url={url}&bookmark_desc={text}",
                camyoo: "http://www.camyoo.com/note.html?url={url}",
                care2: "http://www.care2.com/news/compose?sharehint=news&share[share_type]news&bookmarklet=Y&share[title]={title}&share[link_url]={url}&share[content]={text}",
                citeulike: "http://www.citeulike.org/posturl?url={url}&title={title}",
                classicalplace: "http://www.classicalplace.com/?u={url}&t={title}&c={text}",
                cosmiq: "http://www.cosmiq.de/lili/my/add?url={url}",
                diggita: "http://www.diggita.it/submit.php?url={url}&title={title}",
                diigo: "http://www.diigo.com/post?url={url}&title={title}&desc={text}",
                domelhor: "http://domelhor.net/submit.php?url={url}&title={title}",
                dotnetshoutout: "http://dotnetshoutout.com/Submit?url={url}&title={title}",
                douban: "http://www.douban.com/recommend/?url={url}&title={title}",
                dropjack: "http://www.dropjack.com/submit.php?url={url}",
                edelight: "http://www.edelight.de/geschenk/neu?purl={url}",
                ekudos: "http://www.ekudos.nl/artikel/nieuw?url={url}&title={title}&desc={text}",
                elefantapl: "http://elefanta.pl/member/bookmarkNewPage.action?url={url}&title={title}&bookmarkVO.notes=",
                embarkons: "http://www.embarkons.com/sharer.php?u={url}&t={title}",
                evernote: "http://www.evernote.com/clip.action?url={url}&title={title}",
                extraplay: "http://www.extraplay.com/members/share.php?url={url}&title={title}&desc={text}",
                ezyspot: "http://www.ezyspot.com/submit?url={url}&title={title}",
                fabulously40: "http://fabulously40.com/writeblog?subject={title}&body={url}",
                informazione: "http://fai.informazione.it/submit.aspx?url={url}&title={title}&desc={text}",
                fark: "http://www.fark.com/cgi/farkit.pl?u={url}&h={title}",
                farkinda: "http://www.farkinda.com/submit?url={url}",
                favable: "http://www.favable.com/oexchange?url={url}&title={title}&desc={text}",
                favlogde: "http://www.favlog.de/submit.php?url={url}",
                flaker: "http://flaker.pl/add2flaker.php?title={title}&url={url}",
                folkd: "http://www.folkd.com/submit/{url}",
                fresqui: "http://fresqui.com/enviar?url={url}",
                friendfeed: "http://friendfeed.com/share?url={url}&title={title}",
                funp: "http://funp.com/push/submit/?url={url}",
                fwisp: "http://fwisp.com/submit.php?url={url}",
                givealink: "http://givealink.org/bookmark/add?url={url}&title={title}",
                gmail: "http://mail.google.com/mail/?view=cm&fs=1&to=&su={title}&body={text}&ui=1",
                goodnoows: "http://goodnoows.com/add/?url={url}",
                google: "http://www.google.com/bookmarks/mark?op=add&bkmk={url}&title={title}&annotation={text}",
                googletranslate: "http://translate.google.com/translate?hl=en&u={url}&tl=en&sl=auto",
                greaterdebater: "http://greaterdebater.com/submit/?url={url}&title={title}",
                hackernews: "http://news.ycombinator.com/submitlink?u={url}&t={title}",
                hatena: "http://b.hatena.ne.jp/bookmarklet?url={url}&btitle={title}",
                hedgehogs: "http://www.hedgehogs.net/mod/bookmarks/add.php?address={url}&title={title}",
                hotmail: "http://www.hotmail.msn.com/secure/start?action=compose&to=&subject={title}&body={{content}}",
                w3validator: "http://validator.w3.org/check?uri={url}&charset=%28detect+automatically%29&doctype=Inline&group=0",
                ihavegot: "http://www.ihavegot.com/share/?url={url}&title={title}&desc={text}",
                instapaper: "http://www.instapaper.com/edit?url={url}&title={title}&summary={text}",
                isociety: "http://isociety.be/share/?url={url}&title={title}&desc={text}",
                iwiw: "http://iwiw.hu/pages/share/share.jsp?v=1&u={url}&t={title}",
                jamespot: "http://www.jamespot.com/?action=spotit&u={url}&t={title}",
                jumptags: "http://www.jumptags.com/add/?url={url}&title={title}",
                kaboodle: "http://www.kaboodle.com/grab/addItemWithUrl?url={url}&pidOrRid=pid=&redirectToKPage=true",
                kaevur: "http://kaevur.com/submit.php?url={url}",
                kledy: "http://www.kledy.de/submit.php?url={url}&title={title}",
                librerio: "http://www.librerio.com/inbox?u={url}&t={title}",
                linkuj: "http://linkuj.cz?id=linkuj&url={url}&title={title}&description={text}&imgsrc=",
                livejournal: "http://www.livejournal.com/update.bml?subject={title}&event={url}",
                logger24: "http://logger24.com/?url={url}",
                mashbord: "http://mashbord.com/plugin-add-bookmark?url={url}",
                meinvz: "http://www.meinvz.net/Suggest/Selection/?u={url}&desc={title}&prov=addthis.com",
                mekusharim: "http://mekusharim.walla.co.il/share/share.aspx?url={url}&title={title}",
                memori: "http://memori.ru/link/?sm=1&u_data[url]={url}",
                meneame: "http://www.meneame.net/submit.php?url={url}",
                mixi: "http://mixi.jp/share.pl?u={url}",
                moemesto: "http://moemesto.ru/post.php?url={url}&title={title}",
                myspace: "http://www.myspace.com/Modules/PostTo/Pages/?u={url}&t={title}&c=",
                n4g: "http://www.n4g.com/tips.aspx?url={url}&title={title}",
                netlog: "http://www.netlog.com/go/manage/links/?view=save&origin=external&url={url}&title={title}&description={text}",
                netvouz: "http://netvouz.com/action/submitBookmark?url={url}&title={title}&popup=no&description={text}",
                newstrust: "http://newstrust.net/submit?url={url}&title={title}&ref=addthis",
                newsvine: "http://www.newsvine.com/_tools/seed&save?u={url}&h={title}&s={text}",
                nujij: "http://nujij.nl/jij.lynkx?u={url}&t={title}&b={text}",
                oknotizie: "http://oknotizie.virgilio.it/post?title={title}&url={url}",
                oyyla: "http://www.oyyla.com/gonder?phase=2&url={url}",
                pdfonline: "http://savepageaspdf.pdfonline.com/pdfonline/pdfonline.asp?cURL={url}",
                pdfmyurl: "http://pdfmyurl.com?url={url}",
                phonefavs: "http://phonefavs.com/bookmarks?action=add&address={url}&title={title}",
                plaxo: "http://www.plaxo.com/events?share_link={url}&desc={text}",
                plurk: "http://www.plurk.com/m?content={url}+({title})&qualifier=shares ",
                posteezy: "http://posteezy.com/node/add/story?title={title}&body={url}",
                pusha: "http://www.pusha.se/posta?url={url}&title={title}&description={text}",
                rediff: "http://share.rediff.com/bookmark/addbookmark?title={title}&bookmarkurl={url}",
                redkum: "http://www.redkum.com/add?url={url}&step=1&title={title}",
                scoopat: "http://scoop.at/submit?url={url}&title={title}&body={text}",
                sekoman: "http://sekoman.lv/home?status={title}&url={url}",
                shaveh: "http://shaveh.co.il/submit.php?url={url}&title={title}",
                shetoldme: "http://shetoldme.com/publish?url={url}&title={title}&body={text}",
                sinaweibo: "http://v.t.sina.com.cn/share/share.php?url={url}&title={title}",
                sodahead: "http://www.sodahead.com/news/submit/?url={url}&title={title}",
                sonico: "http://www.sonico.com/share.php?url={url}&title={title}",
                springpad: "http://springpadit.com/s?type=lifemanagr.Bookmark&url={url}&name={title}",
                startaid: "http://www.startaid.com/index.php?st=AddBrowserLink&type=Detail&v=3&urlname={url}&urltitle={title}&urldesc={text}",
                startlap: "http://www.startlap.hu/sajat_linkek/addlink.php?url={url}&title={title}",
                studivz: "http://www.studivz.net/Suggest/Selection/?u={url}&desc={title}&prov=addthis.com",
                stuffpit: "http://www.stuffpit.com/add.php?produrl={url}",
                stumpedia: "http://www.stumpedia.com/submit?url={url}",
                svejo: "http://svejo.net/story/submit_by_url?url={url}&title={title}&summary={text}",
                symbaloo: "http://www.symbaloo.com/en/add/?url={url}&title={title}",
                thewebblend: "http://thewebblend.com/submit?url={url}&title={title}",
                thinkfinity: "http://www.thinkfinity.org/favorite-bookmarklet.jspa?url={url}&subject={title}",
                thisnext: "http://www.thisnext.com/pick/new/submit/url/?description={text}&name={title}&url={url}",
                tuenti: "http://www.tuenti.com/share?url={url}",
                typepad: "http://www.typepad.com/services/quickpost/post?v=2&qp_show=ac&qp_title={title}&qp_href={url}&qp_text={text}",
                viadeo: "http://www.viadeo.com/shareit/share/?url={url}&title={title}&urlaffiliate=32005&encoding=UTF-8",
                virb: "http://virb.com/share?external&v=2&url={url}&title={title}",
                visitezmonsite: "http://www.visitezmonsite.com/publier?url={url}&title={title}&body={text}",
                vybralisme: "http://vybrali.sme.sk/sub.php?url={url}",
                webnews: "http://www.webnews.de/einstellen?url={url}&title={title}",
                wirefan: "http://www.wirefan.com/grpost.php?d=&u={url}&h={title}&d={text}",
                wordpress: "http://wordpress.com/wp-admin/press-this.php?u={url}&t={title}&s={text}&v=2",
                wowbored: "http://www.wowbored.com/submit.php?url={url}",
                wykop: "http://www.wykop.pl/dodaj?url={url}&title={title}&desc={text}",
                yahoobkm: "http://bookmarks.yahoo.com/toolbar/savebm?opener=tb&u={url}&t={title}&d={text}",
                yahoomail: "http://compose.mail.yahoo.com/?To=&Subject={title}&body={{content}}",
                yammer: "https://www.yammer.com/home/bookmarklet?bookmarklet_pop=1&u={url}&t={title}",
                yardbarker: "http://www.yardbarker.com/author/new/?pUrl={url}&pHead={title}",
                yigg: "http://www.yigg.de/neu?exturl={url}&exttitle={title}&extdesc={text}",
                yoolink: "http://go.yoolink.to/addorshare?url_value={url}&title={title}",
                yorumcuyum: "http://www.yorumcuyum.com/?baslik={title}&link={url}",
                youmob: "http://youmob.com/mobit.aspx?title={title}&mob={url}",
                zakladoknet: "http://zakladok.net/link/?u={url}&t={title}",
                ziczac: "http://ziczac.it/a/segnala/?gurl={url}&gtit={title}"
            };
        this.each(function(a, o) {
            for (var c = t(o), a = 0; a < c.length; a++) {
                var l = c[a];
                if (l.substr(0, r) == i.class_prefix && s[l.substr(r)]) {
                    var p = n(l.substr(r));
                    e(o).attr("href", p).click(function() {
                        var t = screen.width,
                            n = screen.height,
                            a = i.width ? i.width : t - .2 * t,
                            r = i.height ? i.height : n - .2 * n,
                            s = t / 2 - a / 2,
                            o = n / 2 - r / 2,
                            c = "toolbar=0,status=0,width=" + a + ",height=" + r + ",top=" + o + ",left=" + s;
                        return window.open(e(this).attr("href"), "", c) && !1
                    })
                }
            }
        })
    }
}(jQuery),
function() {
    eqShow.shakeTrigger = function(e, t) {
        function i(e) {
            var t = e.accelerationIncludingGravity,
                a = (new Date).getTime();
            if (a - l > 100) {
                var h = parseInt(a - l);
                l = a, r = t.x, s = t.y, o = t.z;
                var g = Math.abs(r + s + o - p - d - u) / h * 1e4;
                g > c && (window.removeEventListener("devicemotion", i, !0), n.sends && n.sends.length && $.each(n.sends, function(e, t) {
                    time = setTimeout(function() {
                        $.each(t.handles, function(e, t) {
                            var i = utilTrigger.getHandleType(t.type).name;
                            $.each(t.ids, function(e, t) {
                                var n = $("#inside_" + t);
                                n.trigger(i)
                            })
                        })
                    }, 1e3 * t.delay)
                })), p = r, d = s, u = o
            }
        }
        var n, a = $(t).find(".m-img").attr("id").substring(4);
        if (e[a - 1].properties && (n = e[a - 1].properties.trigger), n && n.sends) {
            var r, s, o, c = 3e3,
                l = 0,
                p = 0,
                d = 0,
                u = 0;
            window.DeviceMotionEvent && t && window.addEventListener("devicemotion", i, !1)
        }
    }
}(),
function(e) {
    function t(e, t, c) {
        var l = 0,
            p = [0],
            d = "",
            u = null,
            d = c || "UTF8";
        if ("UTF8" !== d && "UTF16" !== d) throw "encoding must be UTF8 or UTF16";
        if ("HEX" === t) {
            if (0 !== e.length % 2) throw "srcString of HEX type must be in byte increments";
            u = n(e), l = u.binLen, p = u.value
        } else if ("ASCII" === t || "TEXT" === t) u = i(e, d), l = u.binLen, p = u.value;
        else {
            if ("B64" !== t) throw "inputFormat must be HEX, TEXT, ASCII, or B64";
            u = a(e), l = u.binLen, p = u.value
        }
        this.getHash = function(e, t, i, n) {
            var a, c = null,
                d = p.slice(),
                u = l;
            if (3 === arguments.length ? "number" != typeof i && (n = i, i = 1) : 2 === arguments.length && (i = 1), i !== parseInt(i, 10) || 1 > i) throw "numRounds must a integer >= 1";
            switch (t) {
                case "HEX":
                    c = r;
                    break;
                case "B64":
                    c = s;
                    break;
                default:
                    throw "format must be HEX or B64"
            }
            if ("SHA-1" !== e) throw "Chosen SHA variant is not supported";
            for (a = 0; i > a; a++) d = g(d, u), u = 160;
            return c(d, o(n))
        }, this.getHMAC = function(e, t, c, u, h) {
            var m, f, v, b, w = [],
                x = [];
            switch (m = null, u) {
                case "HEX":
                    u = r;
                    break;
                case "B64":
                    u = s;
                    break;
                default:
                    throw "outputFormat must be HEX or B64"
            }
            if ("SHA-1" !== c) throw "Chosen SHA variant is not supported";
            if (f = 64, b = 160, "HEX" === t) m = n(e), v = m.binLen, m = m.value;
            else if ("ASCII" === t || "TEXT" === t) m = i(e, d), v = m.binLen, m = m.value;
            else {
                if ("B64" !== t) throw "inputFormat must be HEX, TEXT, ASCII, or B64";
                m = a(e), v = m.binLen, m = m.value
            }
            if (e = 8 * f, t = f / 4 - 1, v / 8 > f) {
                if ("SHA-1" !== c) throw "Unexpected error in HMAC implementation";
                m = g(m, v), m[t] &= 4294967040
            } else f > v / 8 && (m[t] &= 4294967040);
            for (f = 0; t >= f; f += 1) w[f] = 909522486 ^ m[f], x[f] = 1549556828 ^ m[f];
            if ("SHA-1" !== c) throw "Unexpected error in HMAC implementation";
            return c = g(x.concat(g(w.concat(p), e + l)), e + b), u(c, o(h))
        }
    }

    function i(e, t) {
        var i, n, a = [],
            r = [],
            s = 0;
        if ("UTF8" === t)
            for (n = 0; n < e.length; n += 1)
                for (i = e.charCodeAt(n), r = [], i > 2048 ? (r[0] = 224 | (61440 & i) >>> 12, r[1] = 128 | (4032 & i) >>> 6, r[2] = 128 | 63 & i) : i > 128 ? (r[0] = 192 | (1984 & i) >>> 6, r[1] = 128 | 63 & i) : r[0] = i, i = 0; i < r.length; i += 1) a[s >>> 2] |= r[i] << 24 - s % 4 * 8, s += 1;
        else if ("UTF16" === t)
            for (n = 0; n < e.length; n += 1) a[s >>> 2] |= e.charCodeAt(n) << 16 - s % 4 * 8, s += 2;
        return {
            value: a,
            binLen: 8 * s
        }
    }

    function n(e) {
        var t, i, n = [],
            a = e.length;
        if (0 !== a % 2) throw "String of HEX type must be in byte increments";
        for (t = 0; a > t; t += 2) {
            if (i = parseInt(e.substr(t, 2), 16), isNaN(i)) throw "String of HEX type contains invalid characters";
            n[t >>> 3] |= i << 24 - t % 8 * 4
        }
        return {
            value: n,
            binLen: 4 * a
        }
    }

    function a(e) {
        var t, i, n, a, r, s = [],
            o = 0;
        if (-1 === e.search(/^[a-zA-Z0-9=+\/]+$/)) throw "Invalid character in base-64 string";
        if (t = e.indexOf("="), e = e.replace(/\=/g, ""), -1 !== t && t < e.length) throw "Invalid '=' found in base-64 string";
        for (i = 0; i < e.length; i += 4) {
            for (r = e.substr(i, 4), n = a = 0; n < r.length; n += 1) t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(r[n]), a |= t << 18 - 6 * n;
            for (n = 0; n < r.length - 1; n += 1) s[o >> 2] |= (a >>> 16 - 8 * n & 255) << 24 - o % 4 * 8, o += 1
        }
        return {
            value: s,
            binLen: 8 * o
        }
    }

    function r(e, t) {
        var i, n, a = "",
            r = 4 * e.length;
        for (i = 0; r > i; i += 1) n = e[i >>> 2] >>> 8 * (3 - i % 4), a += "0123456789abcdef".charAt(n >>> 4 & 15) + "0123456789abcdef".charAt(15 & n);
        return t.outputUpper ? a.toUpperCase() : a
    }

    function s(e, t) {
        var i, n, a, r = "",
            s = 4 * e.length;
        for (i = 0; s > i; i += 3)
            for (a = (e[i >>> 2] >>> 8 * (3 - i % 4) & 255) << 16 | (e[i + 1 >>> 2] >>> 8 * (3 - (i + 1) % 4) & 255) << 8 | e[i + 2 >>> 2] >>> 8 * (3 - (i + 2) % 4) & 255, n = 0; 4 > n; n += 1) r = 8 * i + 6 * n <= 32 * e.length ? r + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a >>> 6 * (3 - n) & 63) : r + t.b64Pad;
        return r
    }

    function o(e) {
        var t = {
            outputUpper: !1,
            b64Pad: "="
        };
        try {
            e.hasOwnProperty("outputUpper") && (t.outputUpper = e.outputUpper), e.hasOwnProperty("b64Pad") && (t.b64Pad = e.b64Pad)
        } catch (i) {}
        if ("boolean" != typeof t.outputUpper) throw "Invalid outputUpper formatting option";
        if ("string" != typeof t.b64Pad) throw "Invalid b64Pad formatting option";
        return t
    }

    function c(e, t) {
        return e << t | e >>> 32 - t
    }

    function l(e, t, i) {
        return e ^ t ^ i
    }

    function p(e, t, i) {
        return e & t ^ ~e & i
    }

    function d(e, t, i) {
        return e & t ^ e & i ^ t & i
    }

    function u(e, t) {
        var i = (65535 & e) + (65535 & t);
        return ((e >>> 16) + (t >>> 16) + (i >>> 16) & 65535) << 16 | 65535 & i
    }

    function h(e, t, i, n, a) {
        var r = (65535 & e) + (65535 & t) + (65535 & i) + (65535 & n) + (65535 & a);
        return ((e >>> 16) + (t >>> 16) + (i >>> 16) + (n >>> 16) + (a >>> 16) + (r >>> 16) & 65535) << 16 | 65535 & r
    }

    function g(e, t) {
        var i, n, a, r, s, o, g, m, f, v = [],
            b = p,
            w = l,
            x = d,
            y = c,
            $ = u,
            M = h,
            z = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        for (e[t >>> 5] |= 128 << 24 - t % 32, e[(t + 65 >>> 9 << 4) + 15] = t, f = e.length, g = 0; f > g; g += 16) {
            for (i = z[0], n = z[1], a = z[2], r = z[3], s = z[4], m = 0; 80 > m; m += 1) v[m] = 16 > m ? e[m + g] : y(v[m - 3] ^ v[m - 8] ^ v[m - 14] ^ v[m - 16], 1), o = 20 > m ? M(y(i, 5), b(n, a, r), s, 1518500249, v[m]) : 40 > m ? M(y(i, 5), w(n, a, r), s, 1859775393, v[m]) : 60 > m ? M(y(i, 5), x(n, a, r), s, 2400959708, v[m]) : M(y(i, 5), w(n, a, r), s, 3395469782, v[m]), s = r, r = a, a = y(n, 30), n = i, i = o;
            z[0] = $(i, z[0]), z[1] = $(n, z[1]), z[2] = $(a, z[2]), z[3] = $(r, z[3]), z[4] = $(s, z[4])
        }
        return z
    }
    "function" == typeof define ? define(function() {
        return t
    }) : "undefined" != typeof exports ? "undefined" != typeof module && module.exports ? module.exports = exports = t : exports = t : e.jsSHA = t
}(this),
function(e, t) {
    e.completeEffect = function(e) {
        return !e.find(".lock").get(0)
    }
}(window, jQuery),
function() {
    window.eqx = {}, window.eqx.money = {
        config: {
            mode: 3,
            effectCallback: "editMoney",
            imageCallback: "countMoney",
            resources: [{
                url: CLIENT_CDN + "view/js/countMoney.js",
                type: "js"
            }, {
                url: CLIENT_CDN + "assets/images/money/moneybg.png",
                type: "image"
            }, {
                url: CLIENT_CDN + "assets/images/money/moremoney.png",
                type: "image"
            }, {
                url: CLIENT_CDN + "assets/images/money/flymoney.png",
                type: "image"
            }, {
                url: CLIENT_CDN + "assets/images/money/float.png",
                type: "image"
            }, {
                url: CLIENT_CDN + "assets/images/money/float2.png",
                type: "image"
            }, {
                url: CLIENT_CDN + "assets/images/money/float3.png",
                type: "image"
            }]
        }
    }, window.eqx.snowFly = {
        config: {
            mode: 4,
            effectCallback: "flyAction",
            resources: [{
                url: CLIENT_CDN + "view/js/effect/snoweffect.js",
                type: "js"
            }, {
                url: CLIENT_CDN + "view/js/effect/threecanvas.js",
                type: "js"
            }]
        }
    }, window.eqx.rainyDay = {
        config: {
            mode: 4,
            effectCallback: "rainyEffect",
            resources: [{
                url: CLIENT_CDN + "view/js/effect/rainyday.js",
                type: "js"
            }, {
                url: CLIENT_CDN + "view/js/effect/rainyeffect.js",
                type: "js"
            }]
        }
    }, window.eqx.fireWorks = {
        config: {
            mode: 4,
            effectCallback: "fireWorks",
            resources: [{
                url: CLIENT_CDN + "view/js/effect/fireworks.js",
                type: "js"
            }]
        }
    }
}(),
function() {
    function e(e) {
        resources.loaded = !0, e instanceof Array ? e.forEach(function(e) {
            t(e)
        }) : t(e)
    }

    function t(e) {
        if ("loading" != r[e.url]) {
            if (r[e.url]) return r[e.url];
            if (r[e.url] = !1, "image" == e.type) {
                var t = new Image;
                r[e.url] = "loading", t.onload = function() {
                    r[e.url] = t, n() && s.forEach(function(e) {
                        e()
                    })
                }, t.src = e.url
            } else "js" == e.type && (r[e.url] = "loading", $.getScript(e.url, function(t, i, a) {
                r[e.url] = !0, n() && s.forEach(function(e) {
                    e()
                })
            }))
        }
    }

    function i(e) {
        return r[e]
    }

    function n() {
        var e = !0;
        for (var t in r)
            if (r.hasOwnProperty(t) && (!r[t] || "loading" == r[t])) return !1;
        return e
    }

    function a(e) {
        s.push(e)
    }
    var r = {},
        s = [];
    window.resources = {
        load: e,
        get: i,
        onReady: a,
        isReady: n
    }
}(),
function(e, t) {
    function i(e, i) {
        completeEffect(t(".z-current")) && (S = "started", I.length || (I = h.find(".main-page")), i || (_ ? (e = event, f = {
            x: e.touches[0].pageX - h.offset().left,
            y: e.touches[0].pageY - h.offset().top
        }) : f = {
            x: e.pageX - h.offset().left,
            y: e.pageY - h.offset().top
        }))
    }

    function n(e, i) {
        if (S = "turning", Z && Z.obj.property.autoFlip && Z.obj.property.autoFlipTime && u(), i || (_ ? (e = event, v = {
            x: e.touches[0].pageX - h.offset().left,
            y: e.touches[0].pageY - h.offset().top
        }) : v = {
            x: e.pageX - h.offset().left,
            y: e.pageY - h.offset().top
        }), b = v.x - f.x, 0 > b) {
            if (M) {
                M = !1, _ && m ? y = !0 : f.y >= h.height() / 2 ? w = !0 : f.y < h.height() / 2 && (x = !0), z = t(".z-current").get(0);
                var n = t(z).find(".m-img").attr("id").substring(4);
                g = t("#flip" + n), K || (k = t(z).parent(".flip-mask").get(0).nextElementSibling && t(t(z).parent(".flip-mask").get(0).nextElementSibling).find(".main-page").get(0) ? t(t(z).parent(".flip-mask").get(0).nextElementSibling).find(".main-page").get(0) : P ? I.first().get(0) : !1), k && (t(k).find(".m-img").attr("id").substring(4), t(z).parent(".flip-mask").css({
                    zIndex: 100,
                    display: "block"
                }), t(k).addClass("z-active").parent(".flip-mask").css({
                    zIndex: 99,
                    display: "block"
                }), c(k), completeEffect(t(k)) || t("#audio_btn").css("opacity", 0), w ? (t(".z-current").css({
                    top: g.height() - h.height() + "px",
                    left: "0"
                }), g.css({
                    top: "-" + (g.height() - h.height()) + "px"
                }), t(".turning").css({
                    transformOrigin: "0% 100% 0px",
                    left: h.width() + "px",
                    top: h.height() + "px"
                })) : x ? t(".turning").css({
                    top: "0",
                    left: h.width() + "px",
                    transformOrigin: "0% 0% 0px"
                }) : y && (t(".z-current").css({
                    top: 0,
                    left: t(this).width() - h.width() + "px"
                }), g.css({
                    top: 0,
                    left: -(g.width() - h.width()) + "px"
                }), t(".turning").css({
                    transformOrigin: "0% 100% 0px",
                    left: h.width() + "px",
                    top: 0
                })))
            }
        } else if (b > 0 && M) {
            M = !1, $ = !0, z = t(".z-current").get(0);
            var n = t(z).find(".m-img").attr("id").substr(4);
            g = t("#flip" + n), K || (k = t(z).parent(".flip-mask").get(0).previousElementSibling && t(t(z).parent(".flip-mask").get(0).previousElementSibling).find(".main-page").get(0) ? t(t(z).parent(".flip-mask").get(0).previousElementSibling).find(".main-page").get(0) : P ? I.last().get(0) : !1), k && (c(k), completeEffect(t(k)) || t("#audio_btn").css("opacity", 0), t(z).parent(".flip-mask").css({
                display: "block"
            }), t(k).addClass("z-active").parent(".flip-mask").css({
                zIndex: 99,
                display: "block"
            }), t(".turning").css({
                top: "0",
                left: "0",
                transformOrigin: "0% 0% 0px"
            }))
        }
        k && r(v)
    }

    function a(e, t) {
        if (!k) return S = "feeling", w = !1, x = !1, y = !1, $ = !1, void(M = !0);
        S = "leaving";
        var i, n, a, s;
        t ? (i = e.x, n = e.y) : _ ? (i = v.x - h.offset().left, n = v.y - h.offset().top) : (i = e.pageX - h.offset().left, n = e.pageY - h.offset().top), w ? (E = 16, a = -h.width(), s = h.height(), C = setInterval(function() {
            i = E >= i - a ? i : i - E, n = E >= s - n ? n : n + E, r({
                x: i,
                y: n
            }), E >= i - a && E >= s - n && (clearInterval(C), o())
        }, 10)) : x ? (E = 16, a = -h.width(), s = 0, C = setInterval(function() {
            i = E >= i - a ? i : i - E, n = E >= n - s ? n : n - E, r({
                x: i,
                y: n
            }), E >= i - a && E >= n - s && (clearInterval(C), o())
        }, 1)) : y ? (E = 5, a = -h.width(), C = setInterval(function() {
            i = E >= i - a ? i : i - E, r({
                x: i,
                y: n
            }), E >= i - a && (clearInterval(C), o())
        }, 1)) : $ && (E = 3, a = h.width(), s = 0, C = setInterval(function() {
            i = E >= a - i ? i : i + E, r({
                x: i,
                y: n
            }), E >= a - i && (clearInterval(C), o())
        }, 1))
    }

    function r(e) {
        w || x ? (A = h.width() - e.x, w ? L = Math.abs(h.height() - e.y) : x && (L = e.y), q = L / A, j = L / Math.sqrt(A * A + L * L), N = Math.sqrt(1 - j * j), F = Math.sqrt(A * A + L * L) / 2, H = F * q, D = Math.sqrt(H * H + F * F), R = D / q, T = 180 * Math.atan(q) / Math.PI > 0 ? 180 * Math.atan(q) / Math.PI : 0, O = (h.width() - D) * N, X = (h.width() - D) * j * N, B = (h.width() - D) * (1 - j * j), O >= 1 && (w ? (T > 1 ? t(".turning").css({
            width: D + "px",
            height: R + "px",
            backgroundColor: "#ff0000",
            background: "-webkit-linear-gradient(" + (180 - T) + "deg, #fff 10%, #d1cfc7 40%, #f2eee2 50%, transparent 50%, transparent 100%)",
            transform: "translateX(-" + (D - 3) + "px) translateY(-" + (R - 3) + "px) rotate(" + 2 * T + "deg) scaleX(-1)"
        }) : s(e), V = "0% 100% 0px", U = "rotate(-" + (90 - T) + "deg) translateY(" + O + "px)", Y = "rotate(" + (90 - T) + "deg) translateY(-" + X + "px) translateX(-" + B + "px)") : x && (T > 1 ? t(".turning").css({
            width: D + "px",
            height: R + "px",
            backgroundColor: "#000",
            background: "-webkit-linear-gradient(-" + (180 - T) + "deg, #fff 10%, #d1cfc7 40%, #f2eee2 50%, transparent 50%, transparent 100%)",
            transform: "translateX(-" + (D - 2) + "px) rotate(-" + 2 * T + "deg) scaleX(-1)"
        }) : s(e), V = "0% 0% 0px", U = "rotate(" + (90 - T) + "deg) translateY(-" + O + "px)", Y = "rotate(-" + (90 - T) + "deg) translateY(" + X + "px) translateX(-" + B + "px)"), g.css({
            zIndex: 100,
            transformOrigin: V,
            transform: U
        }), t(k).parent(".flip-mask").css({
            zIndex: 99,
            display: "block"
        }), t(k).css({
            zIndex: 1e3
        }), t(z).css({
            transformOrigin: V,
            transform: Y
        }))) : y ? (t(".turning").css({
            width: (h.width() - e.x) / 2 + "px",
            height: h.height() + "px",
            left: e.x + "px",
            background: "-webkit-linear-gradient(left, #fff 0% , #d1cfc7 15%, #f2eee2 85%, #fff 100%)"
        }), g.css({
            transformOrigin: "0% 50% 0px",
            left: 0,
            transform: "translateX(-" + (g.width() - e.x) + "px)"
        }), t(z).css({
            transformOrigin: "0% 50% 0px",
            transform: "translateX(" + (g.width() - e.x) + "px)"
        })) : $ && (g.css({
            zIndex: 100,
            transformOrigin: "0% 50% 0px",
            transform: "translateX(" + e.x + "px)"
        }), t(z).css({
            transformOrigin: "0% 50% 0px",
            transform: "translateX(-" + e.x + "px)"
        }), t(".turning").css({
            width: h.width() - e.x + "px",
            height: h.height() + "px",
            left: -(h.width() - 2 * e.x) + "px",
            background: "-webkit-linear-gradient(left, #fff 0% , #d1cfc7 15%, #f2eee2 85%, #fff 100%)"
        }))
    }

    function s(e) {
        t(".turning").css({
            width: (h.width() - e.x + 6) / 2 + "px",
            height: h.height() + "px",
            top: 0,
            left: e.x + 2 + "px",
            background: "-webkit-linear-gradient(left, #fff 0% , #d1cfc7 10%, #f2eee2 90%, #fff 100%)",
            transform: "",
            border: 0
        })
    }

    function o() {
        var e = Z.list;
        Z.obj.property.autoFlip && Z.obj.property.autoFlipTime && d(), utilSound.pause();
        var i = t("#report0");
        i.length && i.remove(), S = "feeling", w = !1, x = !1, y = !1, $ = !1, M = !0, b = 0, t(".flip-mask").css({
            transform: "",
            top: 0,
            left: 0,
            zIndex: 0
        }), t(z).removeClass("z-current").css({
            transform: "",
            top: 0,
            left: 0
        }), 
        t(z).find(".edit_wrapper").css({
            transform: "",
        }).removeClass("z-current"),
        t(k).removeClass("z-active").addClass("z-current").css({
            transform: ""
        }), t(".turning").css({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            transform: "",
            background: "none"
        }), z = k;
        var n = t(k).find(".m-img").attr("id").substring(4);

        t("#flip" + n).css({
            zIndex: 100
        }), t("#audio_btn").css("opacity", 1), k = null;
        var a = t(z).find(".m-img").attr("id").substring(4);
        e[a - 1].elements && e[a - 1].elements.length && t.each(e[a - 1].elements, function(e, i) {
            "d" == i.type && eqShow.getShowCount(Z.obj.id).then(function(e) {
                var n = eqShow.fixedNum(e);
                t("#" + i.id).find(".counter-number").text(n)
            })
        }), J || eqShow.showProgressBar(Z, t("#nr").find(".main-page")), J = !0
    }

    function c(e) {
        if (e) {
            var i = t(e).find(".m-img").attr("id").substring(4);
            t(e).find("li").each(function(e) {
                for (var n = 0; n < Z.list[i - 1].elements.length; n++) Z.list[i - 1].elements[n].id == parseInt(t(this).attr("id").substring(7), 10) && eqxCommon.animation(t(this), Z.list[i - 1].elements[n], "view")
            })
        }
    }

    function l() {
        "turning" != S && "leaving" != S && (f = {
            x: 0,
            y: h.height()
        }, i(f, "mock"), S = "turning", t(".main-page").css({
            width: h.width() + "px",
            height: h.height() + "px"
        }), v = {
            x: 0,
            y: h.height()
        }, $ = !0, C = setInterval(function() {
            v.x++, n(v, "mock"), v.x <= 250 && (clearInterval(C), a(v, "mock"))
        }, 1))
    }

    function p() {
        "turning" != S && "leaving" != S && (f = {
            x: h.width(),
            y: h.height()
        }, i(f, "mock"), S = "turning", t(".main-page").css({
            width: h.width() + "px",
            height: h.height() + "px"
        }), v = {
            x: h.width(),
            y: h.height()
        }, _ && m ? y = !0 : w = !0, W = setInterval(function() {
            v.x -= 5, v.y -= 5, n(v, "mock"), v.x <= 200 && (clearInterval(W), a(v, "mock"), P || k || u())
        }, 1))
    }

    function d() {
        G = setInterval(function() {
            return completeEffect(t(".z-current")) ? void p() : void u()
        }, 1e3 * Q)
    }

    function u() {
        clearInterval(G)
    }
    var h = t(".nr"),
        g = null,
        m = isAndroid(),
        f = {},
        v = {},
        b = 0,
        w = !1,
        x = !1,
        y = !1,
        $ = !1,
        M = !0,
        z = null,
        k = null,
        P = !1,
        _ = mobilecheck(),
        C = null,
        I = [],
        S = "feeling",
        E = 0,
        T = 0,
        A = 0,
        L = 0,
        q = 0,
        j = 0,
        N = 0,
        F = 0,
        H = 0,
        D = 0,
        R = 0,
        O = 0,
        X = 0,
        B = 0,
        V = 0,
        U = 0,
        Y = 0,
        Z = null,
        Q = 0,
        W = "",
        K = !1;
    e.turnBook = function(e) {
        Z = e, Z.obj.property.autoFlip && Z.obj.property.autoFlipTime && (Q = Z.obj.property.autoFlipTime, d()), P = Z.obj.property.triggerLoop, t('<div class="turning"></div>').appendTo(".nr"), t(".main-page").css({
            width: t(".nr").width() + "px",
            height: t(".nr").height() + "px"
        }), h.on(_ ? "touchstart" : "mousedown", function(e) {
            Z.obj.property.forbidHandFlip || "feeling" == S && (i(e), t(".main-page").css({
                width: h.width() + "px",
                height: h.height() + "px"
            }))
        }).on(_ ? "touchmove" : "mousemove", function(e) {
            Z.obj.property.forbidHandFlip || ("started" == S || "turning" == S) && n(e)
            /*("started" == S || "turning" == S) && n(e)*/
        }).on(_ ? "touchend" : "mouseup mouseleave", function(e) {
            return !Z.obj.property.forbidHandFlip && (K = !1, t(".z-current").get(0)) ? 0 == b ? (M = !0, void(S = "feeling")) : void("turning" == S && a(e)) : void 0
            /*K = !1, t(".z-current").get(0) ? 0 == b ? (M = !0, void(S = "feeling")) : void("turning" == S && a(e)) : void 0*/
        })
    };
    var J = !1;
    e.flipBookScroll = function(e) {
        K = !0;
        for (var i, n = 0, a = Z.list.length; a > n; n++) e == Z.list[n].id && (i = Z.list[n].num);
        i || (i = e), z = t(".z-current").get(0);
        var r = t(z).find(".m-img").attr("id").substring(4),
            s = t(z).parent(".flip-mask").siblings(".flip-mask").find(".main-page").find("#page" + i);
        s && (k = t(s).parent(".main-page").get(0), r > i ? l() : i > r && p())
    }, t(document).on("bookFlipPre", function(e) {
        l()
    }), t(document).on("bookFlipNext", function(e) {
        p()
    });
    var G
}(window, jQuery);
var eqxiu = function() {
    function e(e, n) {
        for (var a, r = 0, s = h._pageData.length; s > r; r++) {
            console.log(h._pageData[r].id);
            e == h._pageData[r].id && (a = h._pageData[r].num);
        }
        if (a || (a = e), n) {
            if (1 == a) return;
            $(h.$currentPage).find(".edit_wrapper").css({
                "transform": "translateY(0px)",
                "-webkit-transform": "translateY(0px)"
            });
            $(h.$currentPage).find(".m-img").css("transform","translateY(0px)");
            $(h.$currentPage).find(".m-img").css("-webkit-transform", "translateY(0px)");
            $(h.$currentPage).removeClass("z-current"), h.$currentPage = $(h.$currentPage).siblings(".main-page").find("#page" + a).parent().addClass("z-current")
        } else if ("10" != h._scrollMode) {
            I = !0;
            var o = $(h.$currentPage).find(".m-img").attr("id").substring(4),
                c = $(h.$currentPage).siblings(".main-page").find("#page" + a);
            if (!c) return;
            h.$activePage = $(c).parent(".main-page").get(0), o > a ? t() : a > o && i()
        } else flipBookScroll(e)
    }

    function alEl(e) {
        var ele = [];
        h._pageData.forEach(function(e) {
            for (var i = 0; i < e.elements.length; i++) {
                ele.push(e.elements[i])
            }
        })

        return ele
    }

    function aeH(e, n) {
        var num = alEl();

        for (var r = 0; num.length > r; r++) {
            if (num[r].properties.anim) {
                h._$pages.find("li[id=inside_" + num[r].id + "]>div").css("display", "none")
            }
        }
    }

    function aeS(e, n) {
        //h.$currentPage当前页面
        //longPage长页  anim动画
        var num = alEl();
        // var numL=h.
        for (var r = 0; num.length > r; r++) {
            if (num[r].properties.anim) {
                /*if(a.css)*/
                if (parseInt(num[r].css.top) <= 486) {
                    h._$pages.find("li[id=inside_" + num[r].id + "]>div").css("display", "block")
                } else if (num[r].css.top <= (486 + e) && num[r].css.top > 486) {
                    h._$pages.find("li[id=inside_" + num[r].id + "]>div").css("display", "block")
                }
            }
        }
    }

    function t(e) {
        if (!(M && 2 == e || z && 1 == e))
            if ("10" != h._scrollMode) {
                var t = 0;
                g();
                var i = setInterval(function() {
                    t += 2, "0" == h._scrollMode || "1" == h._scrollMode || "2" == h._scrollMode || "6" == h._scrollMode || "7" == h._scrollMode || "8" == h._scrollMode || "11" == h._scrollMode || "12" == h._scrollMode || "13" == h._scrollMode || "14" == h._scrollMode || "15" == h._scrollMode ? q = t : ("3" == h._scrollMode || "4" == h._scrollMode || "5" == h._scrollMode || "9" == h._scrollMode) && (L = t), m(), t >= 21 && (clearInterval(i), f())
                }, 1)
            } else $(document).trigger("bookFlipPre")
    }

    function i(e) {
        if (!(M && 2 == e || z && 1 == e))
            if ("10" != h._scrollMode) {
                x = !1;
                var t = 0;
                "block" == $("body .boards-panel").css("display") && ($("body .boards-panel").hide(), $("body .z-current").show()), g();
                var i = setInterval(function() {
                    t -= 2, "0" == h._scrollMode || "1" == h._scrollMode || "2" == h._scrollMode || "6" == h._scrollMode || "7" == h._scrollMode || "8" == h._scrollMode || "11" == h._scrollMode || "12" == h._scrollMode || "13" == h._scrollMode || "14" == h._scrollMode || "15" == h._scrollMode ? q = t : ("3" == h._scrollMode || "4" == h._scrollMode || "5" == h._scrollMode || "9" == h._scrollMode) && (L = t), m(), -21 >= t && (clearInterval(i), f(), C || h.$activePage || clearInterval(P))
                }, 1)
            } else $(document).trigger("bookFlipNext")
    }

    function n() {
        P = setInterval(function() {
            "10" != h._scrollMode && i()
        }, y)
    }

    function a() {
        clearInterval(P)
    }

    function r() {
        h.$activePage = h._$pages.last().get(0),
        h._$pages.parent().find(".z-current").find(".edit_wrapper").css({
                "transform": "translateY(0px)",
                "-webkit-transform": "translateY(0px)"
            }),
        h._$pages.parent().find(".z-current").find(".m-img").css({
                "transform": "translateY(0px)",
                "-webkit-transform": "translateY(0px)"
            }),

         h._$pages.parent().find(".z-current").removeClass("z-current"), h._$pages.last().addClass("z-current")
    }

    function s(e) {
        e ? h._$pages.last().prev().remove() : h._$pages.last().remove()
    }

    function o(e) {
        h._scrollMode = e, v = e, _scrollMode = e
    }

    function c(e) {
        h._isforbidHandFlip = e
    }

    function l(e) {
        y = 1e3 * e, a(), n()
    }

    function p() {
        h._$pages = h._$app.find(".main-page")
    }

    function r(e) {
        h._$pages.parent().find(".z-current").removeClass("z-current"),
        h._$pages.parent().find(".z-current").find(".edit_wrapper").css({
                "transform": "translateY(0px)",
                "-webkit-transform": "translateY(0px)"
            }),
        h._$pages.parent().find(".z-current").find(".m-img").css({
                "transform": "translateY(0px)",
                "-webkit-transform": "translateY(0px)"
            }),

         e ? (h.$activePage = h._$pages.last().prev().get(0), h._$pages.last().prev().addClass("z-current")) : (h.$activePage = h._$pages.last().get(0), h._$pages.last().addClass("z-current"))
    }

    function d(e) {
        h._pageData = e
    }

    function u(e) {
        C = e
    }
    var h, g, m, f, v, b, w, x, y, M, z, k, P, _ = $(window),
        ae, alEl,
        C = !1,
        I = !1,
        S = mobilecheck(),
        E = tabletCheck(),
        T = 0,
        A = 0,
        L = 0,
        q = 0,
        j = !1,
        N = !1,
        F = !0,
        H = 500,
        D = .4,
        R = function(e, t, i, a) {
            function r(e, t, i) {
                for (var n = ["", "webkit", "moz"], a = 0, r = n.length; r > a; a++) {
                    0 != a || mobilecheck() || (t = t.substring(0, 1).toLowerCase() + t.substring(1, t.length));
                    var s = i instanceof Array ? i[a] : i,
                        o = n[a] + t;
                    e[o] = s
                }
            }

            function s(e, t, i) {
                for (var n = ["", "-webkit-", "-moz-"], a = 0; a < n.length; a++) e.css(n[a] + t, i)
            }

            function o(e) {
                var t;
                return t = $("#inside_" + e, ".phone-view").length ? $("#inside_" + e, ".phone-view") : $("#inside_" + e)
            }

            function c() {
                h._isDisableFlipPage = !0;
                var e;
                "0" == t || "1" == t || "2" == t || "6" == t || "9" == t || "11" == t || "12" == t ? (e = q > 0 ? -w : w, s($(h.$activePage), "transform", "translateY(" + e + "px)"), s($(h.$currentPage), "transform", "translateY(0) scale(1)")) : ("3" == t || "5" == t) && (e = L > 0 ? -b : b, s($(h.$activePage), "transform", "translateX(" + e + "px)"), s($(h.$currentPage), "transform", "translateX(0) scale(1)")), setTimeout(function() {
                    $(h.$currentPage).attr("style", ""), $(h.$activePage).attr("style", ""), $(h.$activePage).removeClass("z-active z-move"), h._isDisableFlipPage = !1
                }, 500)
            }

            function l() {
                if (Math.abs(q) > Math.abs(L) && completeEffect($(h.$currentPage)))
                    if (q > 0) {
                        if (h._isDisableFlipPrevPage) return;
                        N || F ? (N = !1, F = !1, ee(!0), te(!0, "bottom center", "translateY", w)) : ie(!0, "translateY", w, q, h._scrollMode)
                    } else if (0 > q) {
                    if (h._isDisableFlipNextPage) return;
                    !N || F ? (N = !0, F = !1, ee(!1), te(!1, "top center", "translateY", w)) : ie(!1, "translateY", w, q, h._scrollMode)
                }
            }

            function p() {
                Math.abs(q) > Math.abs(L) && Math.abs(q) > 20 ? (ne("translateY", q, w, h._scrollMode), $(document).trigger("flipend")) : (h._isDisableFlipPage = !1, c())
            }

            function d() {
                if (Math.abs(L) > Math.abs(q) && completeEffect($(h.$currentPage)))
                    if (L > 0) {
                        if (h._isDisableFlipPrevPage) return;
                        N || F ? (N = !1, F = !1, ee(!0), te(!0, "center right", "translateX", b)) : ie(!0, "translateX", b, L, h._scrollMode)
                    } else if (0 > L) {
                    if (h._isDisableFlipNextPage) return;
                    !N || F ? (N = !0, F = !1, ee(!1), te(!1, "center left", "translateX", b)) : ie(!1, "translateX", b, L, h._scrollMode)
                }
            }

            function u() {
                Math.abs(L) > Math.abs(q) && Math.abs(L) > 20 ? (ne("translateX", L, b, h._scrollMode), $(document).trigger("flipend")) : (h._isDisableFlipPage = !1, c())
            }

            function v() {
                if (Math.abs(L) > Math.abs(q) && completeEffect($(h.$currentPage)))
                    if (L > 0) {
                        if (h._isDisableFlipPrevPage) return;
                        N || F ? (N = !1, F = !1, ee(!0), b = S ? window.innerWidth : $(".nr").width(), te(!0, "", "translateX", b)) : ie(!0, "translateX", b, L, h._scrollMode)
                    } else if (0 > L) {
                    if (h._isDisableFlipNextPage) return;
                    !N || F ? (N = !0, F = !1, ee(!1), b = S ? window.innerWidth : $(".nr").width(), te(!1, "", "translateX", b)) : ie(!1, "translateX", b, L, h._scrollMode)
                }
            }

            function x() {
                Math.abs(L) > Math.abs(q) && Math.abs(L) > 20 ? (ne("translateX", L, b, h._scrollMode), $(document).trigger("flipend")) : (h._isDisableFlipPage = !1, c())
            }

            function P() {
                if (Math.abs(q) > Math.abs(L) && completeEffect($(h.$currentPage)))
                    if (q > 0) {
                        if (h._isDisableFlipPrevPage) return;
                        N || F ? (N = !1, F = !1, ee(!0), w = S ? window.innerHeight : $(".nr").height(), te(!0, "", "translateY", w)) : ie(!0, "translateY", w, q, h._scrollMode)
                    } else if (0 > q) {
                    if (h._isDisableFlipNextPage) return;
                    !N || F ? (N = !0, F = !1, ee(!1), w = S ? window.innerHeight : $(".nr").height(), te(!1, "", "translateY", w)) : ie(!1, "translateY", w, q, h._scrollMode)
                }
            }

            function R() {
                Math.abs(q) > Math.abs(L) && Math.abs(q) > 20 ? (ne("translateY", q, w, h._scrollMode), $(document).trigger("flipend")) : (h._isDisableFlipPage = !1, c())
            }

            function O() {
                if (Math.abs(q) > Math.abs(L) && completeEffect($(h.$currentPage)))
                    if (q > 0) {
                        if (h._isDisableFlipNextPage) return;
                        (!N || F) && (N = !0, F = !1, h.$activePage && $(h.$activePage).removeClass("z-move z-active"), ee(!0), r(h.$activePage.style, "Transform", "rotateX(90deg) translateY(-" + w / 2 + "px) translateZ(" + w / 2 + "px)"), r(ae.get(0).style, "Perspective", "700px"), r(ae.get(0).style, "TransformStyle", "preserve-3d")), h.$activePage && h.$activePage.classList.contains("main-page") && ($(h.$activePage).addClass("z-active z-move").trigger("active").css("zIndex", 1), r(h.$currentPage.style, "Transform", "rotateX(-" + q / w * 90 + "deg) translateY(" + q / 2 + "px) translateZ(" + q / 2 + "px)"), r(h.$activePage.style, "Transform", "rotateX(" + (90 - q / w * 90) + "deg) translateY(" + (-(w / 2) + q / 2) + "px) translateZ(" + (w / 2 - q / 2) + "px)"))
                    } else if (0 > q) {
                    if (h._isDisableFlipNextPage) return;
                    (!N || F) && (N = !0, F = !1, h.$activePage && $(h.$activePage).removeClass("z-move z-active"), ee(!1), r(h.$activePage.style, "Transform", "rotateX(-90deg) translateY(-" + w / 2 + "px) translateZ(-" + w / 2 + "px)"), r(ae.get(0).style, "Perspective", "700px"), r(ae.get(0).style, "TransformStyle", "preserve-3d")), h.$activePage && h.$activePage.classList.contains("main-page") ? ($(h.$activePage).addClass("z-active z-move").trigger("active").css("zIndex", 0), r(h.$currentPage.style, "Transform", "rotateX(" + -q / w * 90 + "deg) translateY(" + q / 2 + "px) translateZ(" + -q / 2 + "px)"), r(h.$activePage.style, "Transform", "rotateX(" + (-90 - q / w * 90) + "deg) translateY(" + (w / 2 + q / 2) + "px) translateZ(" + (w / 2 + q / 2) + "px)")) : (r(h.$currentPage.style, "Transform", "translateX(0px) scale(1)"), h.$activePage = null)
                }
            }

            function X() {
                Math.abs(q) > Math.abs(L) && Math.abs(q) > 20 ? (q > 0 ? r(h.$currentPage.style, "Transform", "rotateX(-90deg) translateY(" + w / 2 + "px) translateZ(" + w / 2 + "px)") : r(h.$currentPage.style, "Transform", "rotateX(90deg) translateY(-" + w / 2 + "px) translateZ(" + w / 2 + "px)"), r(h.$currentPage.style, "zIndex", "0"), r(h.$activePage.style, "Transform", "rotateX(0deg) translateY(0px) translateZ(0px)"), r(h.$activePage.style, "zIndex", "2"), $(document).trigger("flipend")) : (r(h.$currentPage.style, "Transition", "none"), r(h.$activePage.style, "Transition", "none"), h._isDisableFlipPage = !1, c())
            }

            function B() {
                if (Math.abs(q) > Math.abs(L) && completeEffect($(h.$currentPage)))
                    if (q > 0) {
                        if (h._isDisableFlipNextPage) return;
                        (!N || F) && (N = !0, F = !1, h.$activePage && $(h.$activePage).removeClass("z-move z-active"), ee(!0), s(ae, "perspective", "700px"), s(ae, "transform-style", "preserve-3d"), r(h.$activePage.style, "TransformOrigin", "top"), r(h.$activePage.style, "Transform", "rotateX(90deg)")), h.$activePage && h.$activePage.classList.contains("main-page") && ($(h.$activePage).addClass("z-active z-move").trigger("active"), r(h.$activePage.style, "Transform", "rotateX(" + (90 - q / w * 90) + "deg) "))
                    } else if (0 > q) {
                    if (h._isDisableFlipNextPage) return;
                    (!N || F) && (N = !0, F = !1, h.$activePage && $(h.$activePage).removeClass("z-move z-active"), ee(!1), r(h.$activePage.style, "TransformOrigin", "bottom"), r(h.$activePage.style, "Transform", "rotateX(-90deg)"), s(ae, "perspective", "700px"), s(ae, "transform-style", "preserve-3d")), h.$activePage && h.$activePage.classList.contains("main-page") ? ($(h.$activePage).addClass("z-active z-move").trigger("active"), r(h.$activePage.style, "Transform", "rotateX(" + (-90 - q / w * 90) + "deg) ")) : (r(h.$currentPage.style, "Transform", "translateX(0px) scale(1)"), h.$activePage = null)
                }
            }

            function V() {
                Math.abs(q) > Math.abs(L) && Math.abs(q) > 20 ? (q > 0 ? r(h.$activePage.style, "Transform", "rotateX(0deg)") : r(h.$activePage.style, "Transform", "rotateX(0deg)"), $(document).trigger("flipend")) : (r(h.$currentPage.style, "Transition", "none"), r(h.$activePage.style, "Transition", "none"), h._isDisableFlipPage = !1, c())
            }

            function U() {
                if (Math.abs(q) > Math.abs(L) && completeEffect($(h.$currentPage))) {
                    if (q > 0) {
                        if (h._isDisableFlipPrevPage) return;
                        (N || F) && (N = !1, F = !1, h.$activePage && (h.$activePage.classList.remove("z-active"), h.$activePage.classList.remove("z-move")), ee(!0), h.$activePage.style.zIndex = 2, h.$activePage && h.$activePage.classList.contains("main-page") && (h.$activePage.classList.add("z-active"), h.$activePage.classList.add("z-move")), h.$activePage.style.opacity = 0)
                    } else if (0 > q) {
                        if (h._isDisableFlipNextPage) return;
                        (!N || F) && (N = !0, F = !1, h.$activePage && (h.$activePage.classList.remove("z-active"), h.$activePage.classList.remove("z-move")), ee(!1), h.$activePage.style.zIndex = 2, h.$activePage && h.$activePage.classList.contains("main-page") && (h.$activePage.classList.add("z-active"), h.$activePage.classList.add("z-move")), h.$activePage.style.opacity = 0)
                    }
                    var e = Math.abs(q) / w * 1.3;
                    h.$activePage.style.opacity = e.toFixed(1), e.toFixed(3) <= 1 && s($(h.$activePage), "transform", "scale(" + e.toFixed(3) + ")")
                }
            }

            function Y() {
                Math.abs(q) > Math.abs(L) && Math.abs(q) > 20 ? (s($(h.$activePage), "transform", "scale(1)"), h.$activePage.style.opacity = 1, $(document).trigger("flipend")) : (r(h.$currentPage.style, "Transition", "none"), r(h.$activePage.style, "Transition", "none"), h._isDisableFlipPage = !1, c())
            }

            function Z() {
                if (Math.abs(q) > Math.abs(L) && completeEffect($(h.$currentPage)))
                    if (q > 0) {
                        if (h._isDisableFlipPrevPage) return;
                        (N || F) && (N = !1, F = !1, h.$activePage && (h.$activePage.classList.remove("z-active"), h.$activePage.classList.remove("z-fade-in"), h.$activePage.classList.remove("z-move")), ee(!0), h.$currentPage.style.zIndex = 1, h.$activePage.style.zIndex = 2, h.$activePage && h.$activePage.classList.contains("main-page") && (h.$activePage.classList.add("z-active"), h.$activePage.classList.add("z-fade-in"), h.$activePage.classList.add("z-move")))
                    } else if (0 > q) {
                    if (h._isDisableFlipNextPage) return;
                    (!N || F) && (N = !0, F = !1, h.$activePage && (h.$activePage.classList.remove("z-active"), h.$activePage.classList.remove("z-fade-in"), h.$activePage.classList.remove("z-move")), ee(!1), h.$currentPage.style.zIndex = 1, h.$activePage.style.zIndex = 2, h.$activePage && h.$activePage.classList.contains("main-page") && (h.$activePage.classList.add("z-active"), h.$activePage.classList.add("z-fade-in"), h.$activePage.classList.add("z-move")))
                }
            }

            function Q() {
                Math.abs(q) > Math.abs(L) && Math.abs(q) > 20 ? setTimeout(function() {
                    $(document).trigger("flipend")
                }, 1600) : (h._isDisableFlipPage = !1, c())
            }

            function W() {
                if (Math.abs(L) > Math.abs(q) && completeEffect($(h.$currentPage)))
                    if (L > 0) {
                        if (h._isDisableFlipPrevPage) return;
                        N || F ? (N = !1, F = !1, h.$activePage && (h.$activePage.classList.remove("z-active"), h.$activePage.classList.remove("z-move")), ee(!0), h.$activePage && h.$activePage.classList.contains("main-page") && (h.$activePage.classList.add("z-active"), h.$activePage.classList.add("z-move"), s($(h.$activePage), "Transform", "scale(0.3) translateX(0) translateZ(-" + w + "px) rotateY(45deg)"), h.$activePage.style.zIndex = "0"), s(ae, "perspective", "1000px"), h.$currentPage.style.zIndex = "100") : h.$activePage && (b / 4 >= L ? s($(h.$currentPage), "Transform", "translateX(" + L + "px)") : s($(h.$currentPage), "Transform", "translateX(" + 1.5 * L + "px) scale(" + ((5 * b / 4 - L) / b).toFixed(3) + ") rotateY(" + L / b * 45 + "deg) translateZ(-" + (L - b / 4) + "px)"))
                    } else if (0 > L) {
                    if (h._isDisableFlipNextPage) return;
                    !N || F ? (N = !0, F = !1, h.$activePage && (h.$activePage.classList.remove("z-active"), h.$activePage.classList.remove("z-move")), ee(!1), h.$activePage && h.$activePage.classList.contains("main-page") && (h.$activePage.classList.add("z-active"), h.$activePage.classList.add("z-move"), s($(h.$activePage), "Transform", "scale(0.3) translateX(" + (b + 300) + "px) translateZ(-" + w + "px) rotateY(-45deg)"), h.$activePage.style.zIndex = "0"), s(ae, "perspective", "1000px"), h.$currentPage.style.zIndex = "100") : h.$activePage && (L >= -b / 4 ? s($(h.$currentPage), "Transform", "translateX(" + L + "px)") : s($(h.$currentPage), "Transform", "translateX(" + 1.5 * L + "px) scale(" + ((5 * b / 4 + L) / b).toFixed(3) + ") rotateY(" + L / b * 45 + "deg) translateZ(" + (L + b / 4) + "px)"), s($(h.$activePage), "Transform", "scale(" + (.3 - (L + b / 4) / b).toFixed(3) + ") translateX(" + (-L - b / 4 + 200) + "px) translateZ(" + (-L - 3 * b / 4) + "px) rotateY(-" + (45 + (L + b / 4) / b * 45) + "deg)"))
                }
            }

            function K() {
                Math.abs(L) > Math.abs(q) && Math.abs(L) > 20 ? (L > 0 ? (h.$currentPage.style.webkitTransformOrigin = "left", h.$currentPage.style.webkitTransform = "translateX(0) translateZ(-" + w + "px) rotateY(0) scale(0.2)", h.$activePage.style.webkitTransform = "translateX(0) translateZ(0) rotateY(0) scale(1)", h.$currentPage.style.zIndex = "0", h.$activePage.style.zIndex = "1") : (h.$currentPage.style.webkitTransformOrigin = "right", h.$currentPage.style.webkitTransform = "translateX(" + b + "px) translateZ(-" + w + "px) rotateY(0) scale(0.2)", h.$activePage.style.webkitTransform = "translateX(0) translateZ(0) rotateY(0) scale(1)", h.$activePage.style.zIndex = "1", h.$currentPage.style.zIndex = "0"), $(document).trigger("flipend")) : (r(h.$currentPage.style, "Transition", "none"), r(h.$activePage.style, "Transition", "none"), h._isDisableFlipPage = !1, c())
            }

            function J() {
                if (Math.abs(q) > Math.abs(L) && completeEffect($(h.$currentPage))) {
                    if (q > 0) {
                        if (h._isDisableFlipPrevPage) return;
                        (N || F) && (N = !1, F = !1, h.$activePage && (h.$activePage.classList.remove("z-active"), h.$activePage.classList.remove("z-move")), ee(!0), h.$activePage && h.$activePage.classList.contains("main-page") && ($(h.$activePage).addClass("z-active z-move"), $(h.$activePage).css({
                            zIndex: 0,
                            opacity: 1
                        })), $(h.$currentPage).css({
                            opacity: 1
                        }), $(h.$activePage).css({
                            zIndex: 0,
                            opacity: 1
                        }), s($(h.$activePage), "transform", "translateY(0)"), s($(h.$currentPage), "transform-origin", "0% 0% 0px"))
                    } else if (0 > q) {
                        if (h._isDisableFlipNextPage) return;
                        (!N || F) && (N = !0, F = !1, h.$activePage && (h.$activePage.classList.remove("z-active"), h.$activePage.classList.remove("z-move")), ee(!1), h.$activePage && h.$activePage.classList.contains("main-page") && (h.$activePage.classList.add("z-active"), h.$activePage.classList.add("z-move"), $(h.$activePage).css({
                            zIndex: 0,
                            opacity: 1
                        })), $(h.$currentPage).css({
                            opacity: 1
                        }), $(h.$activePage).css({
                            zIndex: 0,
                            opacity: 1
                        }), s($(h.$activePage), "transform", "translateY(0)"), s($(h.$currentPage), "transform-origin", "0% 0% 0px"))
                    }
                    h.$activePage && (s($(h.$currentPage), "transform-origin", "0% 0% 0px"), s($(h.$currentPage), "transform", "rotate(" + Math.abs(q) / w * 90 + "deg)"), h.$currentPage.style.opacity = ((w - Math.abs(q)) / w).toFixed(1))
                }
            }

            function G() {
                Math.abs(q) > Math.abs(L) && Math.abs(q) > 20 ? (s($(h.$currentPage), "transform", "translateY(" + w + "px) rotate(" + Math.abs(q) / w * 90 + "deg)"), $(h.$currentPage).css({
                    opacity: .5
                }), $(document).trigger("flipend")) : (r(h.$currentPage.style, "Transition", "none"), r(h.$activePage.style, "Transition", "none"), h._isDisableFlipPage = !1, c())
            }

            function ee(e) {
                I || (e ? h.$currentPage.previousElementSibling && h.$currentPage.previousElementSibling.classList.contains("main-page") ? h.$activePage = h.$currentPage.previousElementSibling : C ? h.$activePage = h._$pages.last().get(0) : h.$activePage = !1 : h.$currentPage.nextElementSibling && h.$currentPage.nextElementSibling.classList.contains("main-page") ? h.$activePage = h.$currentPage.nextElementSibling : C ? h.$activePage = h._$pages.first().get(0) : h.$activePage = !1)
            }

            function te(e, t, i, n) {
                if (h.$activePage && (h.$activePage.classList.remove("z-active"), h.$activePage.classList.remove("z-move")), h.$activePage && h.$activePage.classList.contains("main-page")) {
                    h.$activePage.classList.add("z-active"), h.$activePage.classList.add("z-move");
                    var a = e ? "-" : "";
                    h.$activePage.style.webkitTransition = "none", h.$activePage.style.webkitTransform = i + "(" + a + n + "px)", h.$activePage.style.mozTransition = "none", h.$activePage.style.mozTransform = i + "(" + a + n + "px)", h.$activePage.style.transition = "none", h.$activePage.style.transform = i + "(" + a + n + "px)", $(h.$activePage).trigger("active"), t && s($(h.$currentPage), "transform-origin", t)
                } else r(h.$currentPage.style, "Transform", i + "(0px) scale(1)")
            }

            function ie(e, t, i, n, a) {
                if (h.$activePage) {
                    var r = e ? "-" : "";
                    s($(h.$activePage), "transform", t + "(" + r + (i - Math.abs(n)) + "px)"), "1" == a || "3" == a ? s($(h.$currentPage), "transform", "scale(" + ((i - Math.abs(n)) / w).toFixed(3) + ")") : ("5" == a || "11" == a) && s($(h.$currentPage), "transform", t + "(" + n + "px)")
                }
            }

            function ne(e, t, i, n) {
                if ("1" == n || "3" == n) s($(h.$currentPage), "transform", "scale(0.2)");
                else if ("5" == n || "11" == n) {
                    var a = t > 0 ? "" : "-";
                    s($(h.$currentPage), "transform", e + "(" + a + i + "px)")
                } else s($(h.$currentPage), "transform", "scale(1)");
                s($(h.$activePage), "transform", e + "(0px)")
            }
            this._$app = e, this._$pages = this._$app.find(".main-page"), this.$currentPage = this._$pages.eq(0), this.$activePage = null, this._isInitComplete = !1, this._isDisableFlipPage = !1, this._isDisableFlipPrevPage = !1, this._isDisableFlipNextPage = !1, this._scrollMode = t, this._pageData = i, this.pageData = a, t = t,
             this._isforbidHandFlip = a.obj.property.forbidHandFlip, h = this, b = S || E ? window.innerWidth : e.width(), w = S || E ? window.innerHeight : e.height();
            var ae = $("#con"),

                re = !1;
            ("8" == t || "9" == t) && (D = .7, H = 800), 0 == t || 1 == t || 2 == t || 6 == t || 7 == t || 8 == t || 11 == t || 12 == t ? z = !0 : (3 == t || 4 == t || 5 == t || 10 == t) && (M = !0), z ? (k = $(".ctrl_panel_dir .ctrl-down"), $nextCtrl = $(".ctrl_panel_dir .ctrl-up")) : M && (k = $(".ctrl_panel_dir .ctrl-right"), $nextCtrl = $(".ctrl_panel_dir .ctrl-left")), a.obj.property.hasOwnProperty("triggerLoop") || (a.obj.property.triggerLoop = !0), C = a.obj.property.triggerLoop, a.obj.property.autoFlip && (y = 1e3 * a.obj.property.autoFlipTime, n());
            var se;
            if (i[0].elements && i[0].elements.length)
                for (var oe = 0; oe < i[0].elements.length; oe++) {
                    se || (eqShow.shakeTrigger(i, h.$currentPage), se = !0);
                    var ce = o(i[0].elements[oe].id);
                    eqxCommon.bindTrigger(ce, i[0].elements[oe])
                }
            if (function() {
                _.on("scroll.elasticity", function(e) {
                    e.preventDefault()
                }).on("touchmove.elasticity", function(e) {
                    e.preventDefault()
                }), _.delegate("img", "mousemove", function(e) {
                    e.preventDefault()
                })
            }(), "10" != t) {

                var le = !1;
                /***********翻页代码位置***********/
                h._$app.on("mousedown touchstart", function(e) {
                    h._isforbidHandFlip || (g(e), le = !0)
                }).on("mousemove touchmove", function(e) {
                    h._isforbidHandFlip || le && m(e)
                }).on("mouseup touchend mouseleave", function(e) {
                    h._isforbidHandFlip || (f(e), le = !1)

                    /*翻页动画隐藏*/
                    eqxiu.animH();
                    eqxiu.animB();

                    /*公告显示不能翻页添加---zqq---20160831*/
                    if ($(".notice_page1").length && !$(".notice_page1").is(":hidden")) {
                        $(".z-current").addClass("mingpianSuo").removeClass('z-current')
                    }

                    /*按钮和弹幕冲突修改---zqq---20160831*/
                    $(".z-current").find("li").each(function(e, v) {
                        if ($(v).attr("ctype") == "N" && $(v).css("opacity") != 0) {
                            $("#diy_danmu_diy").hide();
                            if (!$(".diy_box_new").hasClass("active")) {
                                $(".diy_box_new").addClass('moreWidth1');
                                $(".translate3D_new").addClass('translate3D_newW');
                            }
                            $("#diy_danmu_danmu").addClass('cur');
                            return false;
                        }else if($(v).attr("ctype") == "N" && $(v).css("opacity") != 1){
                            $("#diy_danmu_diy").show();
                            $(".diy_box_new").removeClass('moreWidth1');
                            $(".translate3D_new").removeClass('translate3D_newW');
                            $("#diy_danmu_danmu").removeClass('cur');
                            return true;
                        }
                    })

                    var diy_box_new = $(".diy_box_new"),
                        diy_box = $(".diy_box");
                    setTimeout(function() {
                        diy_box.removeClass("diy_fadein");
                    }, 2500)
                    setTimeout(function() {
                        diy_box_new.removeClass("diy_fadein");
                    }, 2500)
                })

            } else turnBook(a);


            g = function(e) {
                re = !1, S && e && (e = event), h._isDisableFlipPage || (h.$currentPage = h._$pages.filter(".z-current").get(0), I || (h.$activePage = null), h.$currentPage && completeEffect($(h.$currentPage)) && (j = !0, N = !1, F = !0, L = 0, q = 0, e && "mousedown" == e.type ? (T = e.pageX, A = e.pageY) : e && "touchstart" == e.type && (T = e.touches ? e.touches[0].pageX : e.originalEvent.touches[0].pageX, A = e.touches ? e.touches[0].pageY : e.originalEvent.touches[0].pageY), h.$currentPage.classList.add("z-move"), r(h.$currentPage.style, "Transition", "none"), "12" == h._scrollMode && (h.$currentPage.style.zIndex = 3)))

            }, m = function(e) {

                S && e && (e = event), j && h._$pages.length > 1 && (e && "mousemove" == e.type ? (L = e.pageX - T, q = e.pageY - A) : e && "touchmove" == e.type && (L = (e.touches ? e.touches[0].pageX : e.originalEvent.touches[0].pageX) - T, q = (e.touches ? e.touches[0].pageY : e.originalEvent.touches[0].pageY) - A), !re && (Math.abs(L) > 20 || Math.abs(q) > 20) && (re = !0), "0" == h._scrollMode || "2" == h._scrollMode || "1" == h._scrollMode || "15" == h._scrollMode ? l() : "4" == h._scrollMode || "3" == h._scrollMode ? d() : "5" == h._scrollMode ? v() : "6" == h._scrollMode ? O() : "7" == h._scrollMode ? B() : "8" == h._scrollMode ? U() : "9" == h._scrollMode ? W() : "11" == h._scrollMode ? P() : "12" == h._scrollMode ? J() : "13" == h._scrollMode ? Z() : "14" == h._scrollMode && Z())

            }, f = function(e) {



                if (j && completeEffect($(h.$currentPage)))
                    if (j = !1, h.$activePage) {
                        h._isDisableFlipPage = !0;
                        var t;
                        t = "6" == h._scrollMode || "7" == h._scrollMode ? "cubic-bezier(0,0,0.99,1)" : "12" == h._scrollMode ? "cubic-bezier(.17,.67,.87,.13)" : "linear", h.$currentPage.style.webkitTransition = "-webkit-transform " + D + "s " + t, h.$activePage.style.webkitTransition = "-webkit-transform " + D + "s " + t, h.$currentPage.style.mozTransition = "-moz-transform " + D + "s " + t, h.$activePage.style.mozTransition = "-moz-transform " + D + "s " + t, h.$currentPage.style.transition = "transform " + D + "s " + t, h.$activePage.style.transition = "transform " + D + "s " + t, "0" == h._scrollMode || "2" == h._scrollMode || "1" == h._scrollMode || "15" == h._scrollMode ? p() : "4" == h._scrollMode || "3" == h._scrollMode ? u() : "5" == h._scrollMode ? x() : "6" == h._scrollMode ? X() : "7" == h._scrollMode ? V() : "8" == h._scrollMode ? Y() : "9" == h._scrollMode ? K() : "11" == h._scrollMode ? R() : "12" == h._scrollMode ? G() : "13" == h._scrollMode ? Q() : "14" == h._scrollMode && Q();
                        var i = $(h.$activePage).find(".m-img").attr("id").replace("page", "") - 1;
                        h._pageData[i].properties && h._pageData[i].properties.longPage && (


                            $(h.$activePage).find(".edit_area").css("transform", "translateY(0px)"), 
                            $(h.$activePage).find(".edit_area").css("-webkit-transform", "translateY(0px)"), 
                            /*帮微微秀-2017-0210-ypx-start*/

                            $(h.$activePage).find(".edit_wrapper").css("transform","translateY(0px)"),
                            $(h.$activePage).find(".edit_wrapper").css("-webkit-transform", "translateY(0px)"),
                            /*将diy文本安卓的手机键盘弹出位置回退*/
                            $(h.$activePage).find(".m-img").css("transform","translateY(0px)"),
                            $(h.$activePage).find(".m-img").css("-webkit-transform", "translateY(0px)"),
                            /*帮微微秀-2017-0210-ypx-end*/
                            $(document).trigger("clearTouchPos")


                            ), $(h.$activePage).find("li.comp-resize").each(function(e) {
                            for (var t = 0; t < h._pageData[i].elements.length; t++)
                                if (h._pageData[i].elements[t].id == parseInt($(this).attr("id").substring(7), 10)) {
                                    eqxCommon.animation($(this), h._pageData[i].elements[t], "view", h._pageData[i].properties);
                                    var n = o(h._pageData[i].elements[t].id);
                                    eqxCommon.bindTrigger(n, h._pageData[i].elements[t])
                                }
                        });
                        for (var n = 0; n < h._pageData.length; n++) h._pageData[n].effObj && (h._pageData[n].effObj.pause = !0);
                        h._pageData[i].effObj && h._pageData[i].effObj.startPlay()
                    } else h.$currentPage.classList.remove("z-move");
                I = !1



            }, $(document).on("flipend", function(e) {
                completeEffect($(h.$activePage)) || $("#audio_btn").css("opacity", 0);
                var n = $("#report0"),
                    s = $(h.$activePage).find(".m-img").attr("id").substring(4);
                i = h._pageData, i[s - 1].elements && i[s - 1].elements.length && $.each(i[s - 1].elements, function(e, t) {
                    "d" == t.type && eqShow.getShowCount(a.obj.id).then(function(e) {
                        var i = eqShow.fixedNum(e);
                        $("#" + t.id).find(".counter-number").text(i)
                    })
                }), setTimeout(function() {
                    r(h.$currentPage.style, "Transition", "none"), 
                    $(h.$activePage).removeClass("z-active z-move").addClass("z-current"), 
                    $(h.$currentPage).removeClass("z-current z-move"), 
                    h._isDisableFlipPage = !1, 
                    h.$currentPage = $(h.$activePage).trigger("current"), 
                    $(h.$currentPage).trigger("hide"), 
                    utilSound.pause(), n.length && n.remove(), ("8" == t || "9" == t || "12" == t) && ($(h.$currentPage).css("z-index", "1"), $(".main-page").attr("style", "")), eqShow.shakeTrigger(i, h.$currentPage), C || (1 == s ? k.removeClass("enabled") : s == h._pageData.length ? $nextCtrl.removeClass("enabled") : (k.addClass("enabled"), $nextCtrl.addClass("enabled"))), window.wechatUtils && wechatUtils.stopWechatSound()
                }, H)
            }), $(document).on("startAutoFlip", function(e) {
                a.obj.property.autoFlip && n()
            }), eqShow.showProgressBar(a, h._$pages, e)
        };
    return {
        pageScroll: e,
        nextPage: i,
        prePage: t,
        lastPage: r,
        app: R,
        pauseAutoFlip: a,
        removeLastPage: s,
        changeScrollMode: o,
        startAutoFlip: l,
        changeAppPage: p,
        setTriggerLoop: u,
        forbidHandFlip: c,
        setPageData: d,
        animB: aeS,
        animH: aeH,
        allElement: alEl
    }
}();
!
    function(e, t) {
        var reportbindEvent = mobilecheck() ? "touchstart" : 'click';
        function i(e, i) {
            //console.log(t("#report0").length);
            if (t("#report0").length) {
                console.log("--23456--");
                var a = [];
                var id = e;
                a[0] = "", t(a[0]).appendTo("#page" + e), t(a[1]).appendTo("#report0");
                for (var r = 2; 4 >= r; r++) t(a[r]).appendTo("#report1");
                n(i)
            }
        }

        function n(e) {
            if (s.length) return void a(s, e);
            var i = PREFIX_URL + "base/class/expose_types.json";
            t.ajax({
                type: "GET",
                url: i,
                xhrFields: {
                    withCredentials: !0
                },
                crossDomain: !0
            }).then(function(t) {
                
                if((typeof t) == "string" ){
                    var newt=JSON.parse(t);
                    newt.success && (s = newt.list, a(s, e))
                }else{
                    t.success && (s = t.list, a(s, e))
                }
                
            })
        }

        function a(e, i) {
            for (var n, a = 0, s = e.length; s > a; a++) {
                var o = '<li value="' + e[a].value + '"><span>' + e[a].name + "</span></li>";
                t(o).appendTo("#reportList")
            }
            var c = t("#reportList").find("li").eq(0);
            c.addClass("active"), n = c.val(), t("#reportList").find("li").on(reportbindEvent, function(e) {
                t(this).siblings().removeClass("active"), t(this).addClass("active"), n = t(this).val()
            }), t("#reportSubmit").on(reportbindEvent,function(e) {
                r(i, n)
            }), t("#report0").parent(".m-img").on(reportbindEvent,function(e) {
                t("#report0").remove()
            }), t("#report0").on(reportbindEvent,function(e) {
                e.stopPropagation()
            })
        }

        function r(e, i) {
            //获取当前元素的ul:id
            var id = t("#report0").parent("ul").attr("id");
            if(id){
                console.log("短页面的举报弹窗");
            }else{
                id = t("#report0").parent(".m-img").attr("id");
                console.log("长页面的举报弹窗");
            }
            console.log(t("#report0"));
            //var n = PREFIX_URL + "eqs/expose.json",
          /*  var n =  PREFIX_URL + "Review-bongv110?sceneid="+e+"&report_type="+i,
                a = {
                    sceneId: e,
                    type: i
                };

            t.ajax({
                type: "POST",
                url: n,
                data: t.param(a),
                xhrFields: {
                    withCredentials: !0
                },
                crossDomain: !0
            }).then(function(e) {
                console.log(e);
                var enew = JSON.parse(e); 
                if(enew.status == 200){
                    t("#report0").remove();
                    mobileshowtips("举报成功！",id)
                }
            }, function(e) {
                t("#report0").remove()
            })*/


            /*帮微微秀-20170208-ypx-start*/
            var getCurrentPage = t("#report0").parent(".m-img").attr("id");
            var pageNum = getCurrentPage.split("page")[1];
            var getOrigin = window.location.href;
            t("#report0").remove();
            mobileshowtips("举报成功！",id);
            setTimeout(function(){
                t("#report0").remove()
                window.location.href = PREFIX_URL + "Review-bongv110?sceneid="+e+"&report_type="+i+"&redirecturl="+encodeURIComponent(getOrigin) ;
            },1500);
            


            /*帮微微秀-20170208-ypx-end*/
        }

        function mobileshowtips(msg,id){
            console.log(id);
            if(t("#report_alert_tips").length){
                t("#report_alert_tips").show();
                t("#report_alert_tips").html(msg);
                setTimeout(function(){
                  t("#report_alert_tips").hide();  
               },3000)
            }else{
               t("#"+id).append("<div id='report_alert_tips' style='position:absolute;width:100px;height:80px;background:rgba(0,0,0,0.6);border-radius:4px;left:50%;margin-left:-50px;top:50%;margin-top:-40px;    top: 45%; margin-top: -40px;line-height: 80px;text-align: center;color: #fff;font-size: 14px;    z-index: 99999;'>"+msg+"</div>"); 
               setTimeout(function(){
                  t("#report_alert_tips").hide();  
               },3000)
            }
            
        } 
        e.addReport = function(e, n) {
            //付费用户去尾页如果尾页是长页
            

            
            var r = t("#page" + e).find(".edit_wrapper").find("ul");
            var r1 = t("#page" + e).find(".edit_wrapper").siblings("section");
            var lastpageIsLongpage = r.attr("longpage") || 0;

            if(lastpageIsLongpage){
                console.log("长页");

                //console.log(lastpageIsLongpage);
                    
                    if(t("#init_reprot").length){
                        var reportinit = '';
                    }else{
                        var reportinit = '<section id="inside_jubao" style="width: 50px; height: 27px; left: 1px; bottom: 1px; z-index: 20161229;; transform: rotateZ(0deg);position: absolute;"><div   ctype="2" class="element comp_paragraph editable-text" style="cursor: default; width: 50px; height: 27px;    padding: 0;margin: 0;background: rgba(0,0,0,0.701961);color: #fff;text-align: center;border-radius: 1px;"><span id="init_reprot" style="margin-right:0;font-size:12px;display: inline-block;    margin-right: 0;font-size: 12px;display: block;height: 27px;line-height: 27px;margin: 0;padding: 0;">举报</span></div></section>';
                        r1.after(reportinit);
                    }

                    t(".m-img").on(reportbindEvent,"#init_reprot",function(m){
                        if(t("#report0").length){
                        i(e, n) 
                        }else{
                       var reportbox = '<div id="report0"><div id="report1"><div id="report2"><p><img src="view/images/jubao_03.png" width="50px;"></p><h1>请选择举报原因</h1></div><div id="report3"><ul id="reportList"></ul></div><div id="report4"><a id="reportSubmit" data-event="11203">提交举报</a></div></div></div>';

                        t(this).closest(".m-img").append(reportbox);
                         m.stopPropagation(), i(e, n) 
                        }
                    
                        });
                        t("#nr").on(reportbindEvent,function(e){
                            e.stopPropagation(),
                            t("#report0").remove();
                        });


            }else{
                console.log("短页面");
                
                if(t("#init_reprot").length){
                    var reportinit = '';
                }else{
                    var reportinit = '<li comp-drag="" comp-rotate="" class="comp-resize comp-rotate inside  wsite-text" id="inside_jubao" num="1" ctype="2" comp-resize="" style="width: 50px; height: 27px; left: 1px; bottom: 1px; z-index: 20161229;; transform: rotateZ(0deg);"><div class="element-box" element-anim="" style="display: block; animation: fadeIn 5s ease 0s 1 backwards;"><div class="element-box-contents" style="width: 100%; height: 100%;"><div   ctype="2" class="element comp_paragraph editable-text" style="cursor: default; width: 50px; height: 27px;    padding: 0;margin: 0;background: rgba(0,0,0,0.701961);color: #fff;text-align: center;border-radius: 1px;"><span id="init_reprot" style="margin-right:0;font-size:12px;display: inline-block;    margin-right: 0;font-size: 12px;display: block;height: 27px;line-height: 27px;margin: 0;padding: 0;">举报</span></div></div></div></li>';
                    t(reportinit).appendTo(r)
                }
            
                var a = '<li comp-drag="" comp-rotate="" class="comp-resize comp-rotate inside wsite-text" id="inside_439881" num="1" ctype="2" comp-resize="" style="width: 320px; height: 36px; left: -250px; top: 420px; z-index: 999;"><div class="element-box" style="height: 100%; z-index: 3; width: 100%; left: 0px; top: 420px; transform: none;-webkit-animation: fadeIn 3s ease 1s both;-webkit-animation-play-state: initial;"><div class="element-box-contents" style="width: 100%; height: 100%;"><div id="439881" ctype="2" class="element comp_paragraph editable-text" style="cursor: default; width: 320px; height: 36px;"></div></div></div></li>';
                console.log(e,n);
            
                t(".edit_area").on(reportbindEvent,"#init_reprot",function(m){
                    if(t("#report0").length){
                    i(e, n) 
                    }else{
                   var reportbox = '<div id="report0"><div id="report1"><div id="report2"><p><img src="view/images/jubao_03.png" width="50px;"></p><h1>请选择举报原因</h1></div><div id="report3"><ul id="reportList"></ul></div><div id="report4"><a id="reportSubmit" data-event="11203">提交举报</a></div></div></div>';

                    t(this).closest(".edit_area").append(reportbox);
                     m.stopPropagation(), i(e, n) 
                    }
                
                    });
                    t("#nr").on(reportbindEvent,function(e){
                        e.stopPropagation(),
                        t("#report0").remove();
                    });
            }

        };
        var s = []
}(window, jQuery),
function(window, $) {
    function appendActivityPage(e, t) {

        e.obj.property.activityPageId && (activityPagePromise = $.ajax({
            type: "GET",
            url: PREFIX_S2_URL + "?c=scene&a=getlastpagebg&id=" + e.obj.property.activityPageId,
            crossDomain: !0,
            success: function(e) {

                e.obj && t.push(e.obj)
            }
        }))
    }

    function internationalLastPage(e, t, i) {
        var n = '{"id":"","sceneId":"","num":2,"name":null,"properties":null,"elements":[{"id":439880,"pageId":129810,"sceneId":16060,"num":0,"type":"3","isInput":0,"title":null,"content":null,"status":1,"css":{},"properties":{"bgColor":"#E6E9EE"}},{"id":439881,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;\\"><span style=\\"line-height: 1; background-color: initial;\\"><font size=\\"4\\" color=\\"#888888\\"><b>微秀名称</b></font></span></div>","status":1,"css":{"height":"65","zIndex":"10","width":"320","left":"0px","top":"77px"},"properties":{}},{"id":439882,"pageId":129810,"sceneId":16060,"num":1,"type":"4","isInput":0,"title":null,"content":null,"status":1,"css":{"borderRadius":"10px","borderStyle":"solid","zIndex":"9","borderColor":"rgba(0,0,0,1)","paddingTop":"0px","height":"141","backgroundColor":"","color":"","boxShadow":"0px 0px 0px #333333","borderWidth":"0px","width":"142.13709677419354","left":"92px","paddingBottom":"0px","top":"177px"},"properties":{"height":"100px","imgStyle":{"width":142,"height":142,"marginTop":"-0.5px","marginLeft":"0px"},"width":"100px","src":"group1/M00/BA/DA/yq0KA1Rq8COAAYRjAAKU4OVYum0889.jpg"}},{"id":439883,"pageId":129810,"sceneId":16060,"num":1,"type":"4","isInput":0,"title":null,"content":null,"status":1,"css":{"height":"16","zIndex":"11","width":"280","left":"21px","top":"122px"},"properties":{"height":"100px","imgStyle":{"width":280,"height":73,"marginTop":"-24px","marginLeft":"0px"},"width":"100px","src":"' + CLIENT_CDN + 'view/images/line.png"}},';
        return 100 == e.obj.bizType && isMobile && (n += '{"id":439884,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div id=\\"eqx-share-container\\" style=\\"text-align: center;padding-top: 0;\\"></div>","status":1,"css":{"height":"45","zIndex":"11","width":"280","left":"21px","top":"360px","text-align": "center"},"properties":{"anim":[{"type":20,"direction":0,"duration":"1","delay":"1","countNum":"1"}]}},'), n += '{"id":439885,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;padding-top: 0;\\"><span style=\\"font-size: small; line-height: 1; background-color: initial;\\"><a href=\\"' + PREFIX_S1_URL + "eqs/link?id=16060&amp;url=" + encodeURIComponent(redirectUrl) + '\\" target=\\"_blank\\"><img style=\\"width: 140px;\\" src=\\"' + CLIENT_CDN + 'assets/images/available-on-the-app-store.png\\"></a></span></div>","status":1,"css":{"borderRadius":"0px","borderStyle":"solid","height":"50","paddingTop":"0px","borderColor":"rgba(222,220,227,1)","zIndex":"12","boxShadow":"0px 0px 0px rgba(200,200,200,0.6)","color":"","backgroundColor":"rgba(255,255,255,0)","borderWidth":"0px","width":"320","left":"1px","paddingBottom":"20px","top":"410px"},"properties":{"anim":{"type":1,"direction":3,"duration":"1","delay":"0.6"}}}]}'
    }

    function eqFreepage(e, t, i) {
        function n(e, t, i) {
            activityPagePromise ? activityPagePromise.done(function() {
                i.list.push(e), parsePage(t, i)
            }).fail(function() {
                i.list.push(e), parsePage(t, i)
            }) : (i.list.push(e), parsePage(t, i))
        }
        var a = '{"id":"","sceneId":"","num":2,"name":null,"properties":null,"elements":[{"id":439880,"pageId":129810,"sceneId":16060,"num":0,"type":"3","isInput":0,"title":null,"content":null,"status":1,"css":{},"properties":{"bgColor":"#E6E9EE"}},{"id":439881,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;\\"><span style=\\"line-height: 1; background-color: initial;\\"><font size=\\"4\\" color=\\"#888888\\"><b>微秀名称</b></font></span></div>","status":1,"css":{"height":"65","zIndex":"10","width":"320","left":"0px","top":"77px"},"properties":{}},{"id":439882,"pageId":129810,"sceneId":16060,"num":1,"type":"4","isInput":0,"title":null,"content":null,"status":1,"css":{"borderRadius":"10px","borderStyle":"solid","zIndex":"9","borderColor":"rgba(0,0,0,1)","paddingTop":"0px","height":"141","backgroundColor":"","color":"","boxShadow":"0px 0px 0px #333333","borderWidth":"0px","width":"142.13709677419354","left":"92px","paddingBottom":"0px","top":"177px"},"properties":{"height":"100px","imgStyle":{"width":142,"height":142,"marginTop":"-0.5px","marginLeft":"0px"},"width":"100px","src":"group1/M00/BA/DA/yq0KA1Rq8COAAYRjAAKU4OVYum0889.jpg"}},{"id":439883,"pageId":129810,"sceneId":16060,"num":1,"type":"4","isInput":0,"title":null,"content":null,"status":1,"css":{"height":"16","zIndex":"11","width":"280","left":"21px","top":"122px"},"properties":{"height":"100px","imgStyle":{"width":280,"height":73,"marginTop":"-24px","marginLeft":"0px"},"width":"100px","src":"' + CLIENT_CDN + 'view/images/line.png"}},{"id":439885,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;padding-top: 0;\\"><span style=\\"font-size: small; line-height: 1; background-color: initial;\\"><a href=\\"' + PREFIX_S1_URL + "index.php?c=scene&a=link&id=16060&amp;url=" + encodeURIComponent(lastpagelink) + '\\" target=\\"_blank\\"><font color=\\"#888888\\">免费创建一个微秀？→</font><font color=\\"#23a3d3\\">' + lastpagetext + '</font></a></span></div>","status":1,"css":{"borderRadius":"0px","borderStyle":"solid","height":"30","paddingTop":"0px","borderColor":"rgba(222,220,227,1)","zIndex":"12","color":"","backgroundColor":"rgba(255,255,255,0)","borderWidth":"0px","width":"320","left":"1px","paddingBottom":"20px","top":"420px"},"properties":{"anim":{"type":1,"direction":3,"duration":"1","delay":"0.6"}}}]}';
        var sceneCode = window.location.href.split("v-")[1].split("?")[0];
        if (100 == e.obj.bizType && (a = internationalLastPage(e, t, i)), console.log(e.obj.property.lastPageId), ad = 1, e.obj.property.lastPageId) customLastPage = !0, $.ajax({
            type: "GET",
            url: PREFIX_S2_URL + "?c=scene&a=getlastpagebg&id=" + e.obj.property.lastPageId + "&sceneCode=" + sceneCode,
            crossDomain: !0,
            success: function(i) {


                if (!i.obj) {
                    a = a.replace(/id=16060/, "id=" + e.obj.id);
                    var r = JSON.parse(a);
                    return r.num = e.list.length + 1, r.elements[2].properties.src = e.obj.cover, r.elements[1].content = r.elements[1].content.replace(/微秀名称/, e.obj.name), r.elements[1].properties.height = 65, r.elements[1].height = 65, void n(r, t, e)
                }
                i.obj.sceneId = e.obj.id;
                for (var s = 0; s < i.obj.elements.length; s++) "4" != i.obj.elements[s].type || "group1/M00/A5/5E/yq0KA1QmePmAKr7yAAEByp5jyLc752.jpg" != i.obj.elements[s].properties.src && "group1/M00/C5/9D/yq0KA1SH1zuAFgkLAAAFgBR8hJs456.png" != i.obj.elements[s].properties.src && "group1/M00/C5/3F/yq0KA1SHp-2AQZZZAAB-7rIaK6I743.png" != i.obj.elements[s].properties.src && "group1/M00/C5/9D/yq0KA1SH1zuAeQuFAAAFfUkeXDc110.png" != i.obj.elements[s].properties.src || (i.obj.elements.splice(s, 1), s--);
                n(i.obj, t, e)
            }
        });
        else {
            a = a.replace(/id=16060/, "id=" + e.obj.id), console.log(f);
            var r = JSON.parse(a);
            r.num = e.list.length + 1, "group1/M00/61/8A/yq0KA1T2vYSAEgo7AACovQVgHxk048.jpg" != e.obj.cover && (r.elements[2] = JSON.parse(f), r.elements[2].properties.src = e.obj.cover), r.elements[1].content = r.elements[1].content.replace(/微秀名称/, e.obj.name), n(r, t, e)
        }
    }

    function eqDefaultBottomLabel(e, t) {
        var i = '{"id":480292,"pageId":136042,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;transform: none;-webkit-animation: fadeIn 2s ease 1s both;-webkit-animation-play-state: initial;\\"><a href=\\"' + PREFIX_S1_URL + "eqs/link?id=16060&amp;url=" + encodeURIComponent(redirectUrl) + '\\" target=\\"_blank\\" style=\\"font-size: x-small;display:block;line-height: 10px;\\"><font color=\\"#ffffff\\">' + companyName + '</font></a></div>","status":1,"css":{"zIndex":"1000","height":"20","width":"129","left":"97px","top":"418px","backgroundColor":"rgba(0,0,0,0.6)","borderRadius":"20px"},"properties":{"anim":{"type":0,"direction":0,"duration":2,"delay":"0"}}}';
        ad = 2;
        var n;
        i = i.replace(/id=16060/, "id=" + e.obj.id), n = t[t.length - 1].elements, t[t.length - 1].elements || (n = t[t.length - 1].elements = []), n.push(JSON.parse(i)), parsePage(t, e)
    }

    function eqCustomBottomLabel(e, t) {
        ad = 2, $.ajax({
            type: "GET",
            url: PREFIX_S2_URL + "?c=scene&a=getlastpagebg&id=" + e.obj.property.bottomLabel.id,
            crossDomain: !0,
            success: function(i) {
                if (!i.obj) return void eqDefaultBottomLabel(e, t);
                var n = i.obj.elements,
                    a = 0;
                for (n.length; a < n.length; a++) {
                    var r = n[a];
                    if (r.sceneId = e.obj.id, r.pageId = t[t.length - 1].id, e.obj.property.bottomLabel.name && e.obj.property.bottomLabel.url && "http://" != e.obj.property.bottomLabel.url) 2 == r.type && r.content.indexOf(BONGV_DOMAIN_URL) > 0 && (r.content = r.content.replace(eval("/"+BONGV_DOMAIN_URL+"/"), '<a href="' + PREFIX_S1_URL + "eqs/link?id=" + e.obj.id + "&amp;url=" + encodeURIComponent(e.obj.property.bottomLabel.url) + '" target=_blank>' + e.obj.property.bottomLabel.name + "</a>"));
                    else if (e.obj.property.bottomLabel.name) 2 == r.type && r.content.indexOf(BONGV_DOMAIN_URL) > 0 && (r.content = r.content.replace(eval("/"+BONGV_DOMAIN_URL+"/"), e.obj.property.bottomLabel.name));
                    else if (/微秀技术支持/.test(r.content)) {
                        r.content = '<div style="text-align: center;">' + r.content + "</div>";
                        var s = {
                            zIndex: "1000",
                            height: "33",
                            width: "129",
                            left: "97px"
                        };
                        $.extend(r.css, s)
                    } else 2 == r.type && r.content && (r.content = "");
                    r.css.zIndex = 200, e.list[e.list.length - 1].elements || (e.list[e.list.length - 1].elements = []), e.list[e.list.length - 1].elements.push(r), customLastPage = !0
                }
                parsePage(t, e)
            }
        })
    }

    function eqHideAll(e, t) {
        ad = 0, parsePage(t, e)
    }
    /*帮微微秀-20160623-llg-start*/

    //判断微秀页面时候含有DIY组件
    function isDiy(pages) {

        var diy = 0;
        var assembly = 0;
        for (var i in pages['elements']) {
            if (pages['elements'][i]['type'] == 'N') {
                diy = 1;
            }
            if (pages['elements'][i].hasOwnProperty('is_diy')) {
                assembly = 1;
            }
        }
        if (assembly && !diy) {
            return 'is_diy="1"';
        }

    }
    /*帮微微秀-20160623-llg-end*/
    function parsePage(pages, data) {


        for (var initCurPage = void 0 == eqxiu.initCurPage || isNaN(eqxiu.initCurPage) ? 1 : parseInt(eqxiu.initCurPage), pageInfo = [], init = !1, audioObj = {
                bgAudio: data.obj.bgAudio
            }, pageNum = 1;

            pageNum <= pages.length; pageNum++)
        // console.log('----------------------------------');
        // console.log(pages);
            if ($('<section class="main-page"><div class="m-img" ' + isDiy(pages[pageNum - 1]) + ' id="page' + pageNum + '"></div></section>').appendTo(".nr"), 10 == pageMode && ($("#page" + pageNum).parent(".main-page").wrap('<div class="flip-mask" id="flip' + pageNum + '"></div>'), $(".main-page").css({
                width: $(".nr").width() + "px",
                height: $(".nr").height() + "px"
            })), pages.length > 1 && (0 == pageMode || 1 == pageMode || 2 == pageMode || 6 == pageMode || 7 == pageMode || 8 == pageMode || 11 == pageMode || 12 == pageMode ? $('<section class="u-arrow-bottom"><img src="' + CLIENT_CDN + 'view/images/btn01_arrow.png" /></section>').appendTo("#page" + pageNum) : (3 == pageMode || 4 == pageMode || 5 == pageMode || 9 == pageMode || 10 == pageMode) && $('<section class="u-arrow-right"><img src="' + CLIENT_CDN + 'view/images/btn01_arrow_right.png" /></section>').appendTo("#page" + pageNum)), initCurPage == pageNum && ($(".loading").hide(), $(".main-page").eq(initCurPage - 1).addClass("z-current"), pages[pageNum - 1].elements && pages[pageNum - 1].elements.length && $.each(pages[pageNum - 1].elements, function(e, t) {
                "d" == t.type && eqShow.getShowCount(data.obj.id)
            })), pages[pageNum - 1].properties && !$.isEmptyObject(pages[pageNum - 1].properties) ? pages[pageNum - 1].properties.image || pages[pageNum - 1].properties.scratch ? scriptLoaded.scratch ? addScratchEffect(pages, pageNum) : !
            function(e) {
                $.getScript(CLIENT_CDN + "view/js/scratch_effect.js", function(t, i, n) {
                    scriptLoaded.scratch = !0, addScratchEffect(audioObj, pages, e), !0
                })
            }(pageNum) : pages[pageNum - 1].properties.finger ? (pageInfo.push({
                num: pageNum,
                finger: pages[pageNum - 1].properties.finger
            }), init || (init = !0, $.getScript(CLIENT_CDN + "view/js/lock_effect.js", function(e, t, i) {
                test(audioObj, pages, pageInfo, $(".m-img").width(), $(".m-img").height())
            }))) : pages[pageNum - 1].properties.fallingObject ? scriptLoaded.fallingObject ? fallingObject(pages, pageNum) : !
            function(e) {
                $.getScript(CLIENT_CDN + "view/js/falling_object.js", function(t, i, n) {
                    scriptLoaded.fallingObject = !0, fallingObject(pages, e), 1 == e && playVideo(audioObj)
                })
            }(pageNum) : pages[pageNum - 1].properties.effect ? !
            function(e) {
                resources.load(window.eqx[pages[e - 1].properties.effect.name].config.resources),
                resources.onReady(function() {
                    window[pages[e - 1].properties.effect.name].doEffect(audioObj, e, pages, renderPage)
                })
            }
            (pageNum) :
            (renderPage(eqShow, pageNum, pages),
                1 == pageNum && playVideo(audioObj),banEntry("input"), banEntry("textarea")) :
            (renderPage(eqShow, pageNum, pages),
                1 == pageNum && playVideo(audioObj),banEntry("input"), banEntry("textarea")),
            pageNum == pages.length &&
            (eqxiu.app($(".nr"), data.obj.pageMode, pages, data),
                isMobile || $("img").on("dragstart", function(e) {
                    e.preventDefault()

                }), !preview)) {


            var pvUrl = PREFIX_S1_URL + "index.php?c=scene&a=addpv&id=" + data.obj.id;
            param && (pvUrl += "?1=1", pvUrl += /\?.*/.test(param) ? "&" + param.substring(1) : /\&.*/.test(param) ? param : "&" + param), pvUrl += (/\?/.test(pvUrl) ? "&" : "?") + "ad=" + ad, $.ajax({})

            //  var mingpian_module = $("#mingpian_module");
            // $(".main-page").each(function(){
            //  alert($(this).find(mingpian_module).length);
            // })
                //举报的假函数-start
            var url = window.location.href;
            addpostjubao(url);
             
            //addpostjubao(urlmy);
             function addpostjubao(urlmy){
                
                var  auth = urlmy.split("&");//获取auth
                var  review_id = urlmy.split("&");//获取review_id
                var isAuth = "";
                var isReviewId = "";

                for(var i=0;i<auth.length;i++){
                    var m = ""+auth[i].indexOf("auth");
                    var n =  ""+auth[i].indexOf("review");
                    if(m!=-1){
                        isAuth = auth[i];
                    }
                    if(n!=-1){
                        isReviewId = review_id[i];
                    }
                }
                var authStatus = isAuth.split("=")[1];
                var reviewIdStatus = isReviewId.split("=")[1]

                if(authStatus >0){
                    $(".poster_report_btn").fadeIn(500);
                }else if(reviewIdStatus ==0){
                    $(".poster_report_btn").fadeOut(500);
                }
                var data={};
                data.isAttack=0,
                data.review_id=reviewIdStatus;
                $("#noProblem").on("click",function(){//点击无问题按钮
                    data.isAttack = 0;
                    
                    $(".poster_report_btn").fadeOut(500);
                    if(authStatus ==1){
                         window.location.href= your_demain+"/Review-handleProc/"+"&isAttack="+data.isAttack+"&review_id="+data.review_id;
                    }else if(authStatus ==2){
                         window.location.href= your_demain+"/Review-jubaoHandleProc/"+"&isAttack="+data.isAttack+"&review_id="+data.review_id;
                        //http://showt3.bongv.com/Review-jubaoHandleProc

                    }
                    
                   
                });
                $("#isProblem").on("click",function(){//点击有问题按钮
                    data.isAttack = 1;
                   $(".poster_report_btn").fadeOut(500);

                    //window.location.href= your_demain+"/Review-handleProc/"+"&isAttack="+data.isAttack+"&review_id="+data.review_id;
                    //
                   if(authStatus ==1){
                         window.location.href= your_demain+"/Review-handleProc/"+"&isAttack="+data.isAttack+"&review_id="+data.review_id;
                    }else if(authStatus ==2){
                         window.location.href= your_demain+"/Review-jubaoHandleProc/"+"&isAttack="+data.isAttack+"&review_id="+data.review_id;
                        //http://showt3.bongv.com/Review-jubaoHandleProc

                    }
                })
                
            }

            //举报入口加载

            addReport(pages.length, data.obj.id);

        };
        eqxiu.animB()
    }
    var redirectUrl, companyName, pageMode, preview, param, ad, customLastPage = !1,
        isMobile = mobilecheck(),
        scriptLoaded = [],
        activityPagePromise = null;
    window.appendLastPage = function(e, t, i, n, a, r) {
        if (
            pageMode = i,
            preview = n,
            param = a,
            ad = r,
            100 == e.obj.bizType ?
            (
                redirectUrl = "https://itunes.apple.com/us/app/easyshow-free-h5-sence-slides/id987351120?mt=8", companyName = "Hypefolio"

            ) :
            (
                redirectUrl = your_demain, companyName = "帮微技术支持"
            ),

            appendActivityPage(e, t), e.obj.createTime > 14165028e5



        )

            if (100 == e.obj.bizType) eqFreepage(e, t);
            else if (e.obj.property.hideEqAd) eqHideAll(e, t);
        else {
            if (e.obj.property && e.obj.property.eqAdType) switch (e.obj.property.eqAdType) {
                case 1:
                    return void eqFreepage(e, t);
                case 2:
                    return void eqDefaultBottomLabel(e, t);
                case 3:
                    return void eqCustomBottomLabel(e, t)
            }
            e.obj.property.isAdvancedUser ? e.obj.property && e.obj.property.bottomLabel && e.obj.property.bottomLabel.id ? eqCustomBottomLabel(e, t) : eqDefaultBottomLabel(e, t) : eqFreepage(e, t)
        } else eqHideAll(e, t)


        //var main_page =



    }, isMobile && $(".nr").css({
        width: "100%",
        height: "100%",
        "background-color": "#28202f"
    })
}(window, jQuery),
function(window, $) {

    //地图组件新增的公用方法-start
    function getWechatAuth(a, b) { //获取微信认证

        window.weChatUser = {},
        window.wxCompData = {};
        console.log(window.scene);
        return void(a ? completeLoad(b) : getSceneData());
        /* var d = PREFIX_S1_URL + "eqs/wx/user/cache";
        $.ajax({
            type: "GET",
            url: d,
            xhrFields: {
                withCredentials: !0
            },
            success: function(c) {

                if (200 === c.code) if (c.obj) window.weChatUser = c.obj, a ? (replaceNameAndHeader(b, c.obj), completeLoad(b, !0)) : getSceneData(c.obj);
                else {

                    var d = "";
                    getQueryString("userKey") && (d = "?userKey=" + getQueryString("userKey")), window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + APPID_WX + "&redirect_uri=" + encodeURIComponent(PREFIX_S1_URL + "eqs/wx/user/info") + "&response_type=code&scope=snsapi_userinfo&state=" + encodeURIComponent("http://" + getDomain(location.href.split("#")[0]) + "/v-" + window.scene.code + d) + "#wechat_redirect"
                } else alert("error")
            },
            error: function(a) {},
            crossDomain: !0
        })*/
    }

    function getSceneData(a) { //获取场景数据

        var b = window.viewData;

        if (b) return b.obj = window.scene, replaceNameAndHeader(b, a), void completeLoad(b, !1);
        var c = getRequestUrl(),
            d = {
                type: "GET",
                url: c,
                crossDomain: !0
            };
        window.viewOverflow || (d.xhrFields = {
            withCredentials: !0
        }), $.ajax(d).done(function(b) {

            b.obj = b.obj || window.scene,
            replaceNameAndHeader(b, a),
            completeLoad(b, !1)

            /*

           if(b.list[b.list.length-1].properties!=null && b.list[b.list.length-1].properties.longPage && b.obj.property.eqAdType == 1){
                var publish=$("#publish").closest(".element-box");
                var publishHtml = publish.css({
                    "display":"none"
                });
                var text = $("#publish").html();

                var fu = $("#publish").closest(".main-page");
                    publish.attr("id","publishOld");
                    var pubBox = "<div class='newPubclass'></div>"
                    fu.find(".m-img").append(pubBox);
                    $(".newPubclass").append(text)
            }*/

            //帮微微秀-20160530-llg-start
            //进入DIY编辑模式
            if (updateAuth) {
                setTimeout(function() {
                    //Diy.update();
                }, 1000);
            }
            //帮微微秀-20160531-llg-end






        })
    }

    function replaceNameAndHeader(a, b) { //替换名称和标题
        isWeixin() && a.list && a.list.length && $.each(
            a.list, function(c, d) {
                d.elements && d.elements.length && $.each(
                    d.elements, function(c, d) {
                        "201" == d.type && ("own" == d.properties.type && b && (d.content = b.nickname),
                            "share" == d.properties.type && a.map && a.map.wxComponent && a.map.wxComponent.shareUserName && (d.content = a.map.wxComponent.shareUserName)),
                            "401" == d.type && (
                                "own" == d.properties.type && b && (d.properties.src = b.headimgurl, delete d.properties.imgStyle),
                                "share" == d.properties.type && a.map && a.map.wxComponent && a.map.wxComponent.shareUserHeader && (d.properties.src = a.map.wxComponent.shareUserHeader, delete d.properties.imgStyle)
                        )
                    })
            })
    }

    function completeLoad(a, b) { //加载完毕

        a.map && a.map.wxComponent && (window.wxCompData = a.map.wxComponent), getCounterValues(a);

        for (var c = !1, d = 0; d < a.list.length; d++) {
            var e = a.list[d];
            if (e.elements)
                for (var f = 0; f < e.elements.length; f++)
                    if (e.elements[f].type + "" == "m") {
                        c = !0;
                        break
                    }
        }
        if (c) {
            eqShow.parseStart = function() {
                $(document).trigger("parseStart")
            }, $(document).on("parseStart", function() {
                parseJson(a, b)
            });
            var g = document.createElement("script");
            g.type = "text/javascript",
            g.src = "http://map.qq.com/api/js?v=2.exp&callback=eqShow.parseStart",
            document.body.appendChild(g)
        } else parseJson(a, b)
    }

    //地图组件新增的公用方法-end

    function getCounterValues(e) { //获取计数器的值

        var t = {
            sceneId: e.obj.id,
            fieldIds: ""
        };
        $.each(e.list, function(e, i) {
            i.elements && $.each(i.elements, function(e, i) {
                "i" === i.type && (t.fieldIds += (t.fieldIds ? "," : "") + i.id)
            })
        })
        //t.fieldIds && (window.eqShow.counterValues = 1)
        //添加地图修改的地方-start
        // t.fieldIds
        //添加地图修改的地方-end
    }


    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    function getRequestUrl() {
        var entity_id = GetQueryString('entity_id');
        var shareId = GetQueryString('shareId');
        var sId = GetQueryString('sId');
        var type = GetQueryString('type');
        var defaults = GetQueryString('default');

        var str = 0 == cardId ? "" : "&cardId=" + cardId;
        str += str + 0 == repId ? "" : "&repId=" + repId;
        str += type ? '&type=' + type : '';
        str += entity_id ? '&entity_id=' + entity_id : '';
        str += shareId ? '&shareId=' + shareId : '';
        str += sId ? '&sId=' + sId : '';
        str += defaults ? '&default=' + defaults : '';

        var e, t = str;
        return preview ? (e = isNewPreviewLocation ? PREFIX_URL + "index.php?c=scene&a=view&id=" + sceneId + "&preview=preview" + t + ".data" : PREFIX_URL + "index.php?c=scene&a=view&id=" + sceneId + "&preview=preview" + t, branchid && (e += (/\?/.test(e) ? "&" : "?") + "user=" + branchid)) : e = mobileview ? PREFIX_URL + "event/9100?p1=" + sceneId : window.scene && window.scene.id ? window.isCheck ? PREFIX_SERVER_HOST + "m/eqs/view/page/" + window.scene.id : PREFIX_S1_URL + "index.php?c=scene&a=view&id=" + window.scene.id + t : PREFIX_S1_URL + "index.php?c=scene&a=view&id=" + sceneId + t;
    }

    function bindShare(data) {
        /* if (mobilecheck() || tabletCheck()) isWeixin() && configWeixin(data);
        else if (100 != data.obj.bizType) 
        with(window._bd_share_config = {
            common: {
                bdSnsKey: {},
                bdText: data.obj.name,
                bdSign: "on",
                bdDesc: data.obj.name,
                bdUrl: PREFIX_HOST + "/v-" + sceneId,
                bdStyle: "0",
                bdSize: "32"
            },
            share: {}
        }, document) 0[(getElementsByTagName("head")[0] || body).appendChild(createElement("script")).src = "http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=" + ~ (-new Date / 36e5)]*/
    }

    function getDomain(e) {
        var t = "null";
        ("undefined" == typeof e || null == e) && (e = window.location.href);
        var i = /.*\:\/\/([^\/]*).*/,
            n = e.match(i);
        return "undefined" != typeof n && null != n && (t = n[1]), t
    }

    function configWeixin(e) {
        var t = location.href.split("#")[0],
            i = getDomain(t),
            n = Date.now(),
            a = "eqs/wx/ticket",
            r = getDomain(PREFIX_HOST);
        t.indexOf(r) < 0 && (a += (/\?/.test(a) ? "&" : "?") + "domain=" + i), a += (/\?/.test(a) ? "&" : "?") + "time=" + (new Date).getTime(), $.ajax({
            type: "GET",
            url: PREFIX_S1_URL + a,
            crossDomain: !0
        }).then(function(t) {
            t.success && t.obj.appId && t.obj.ticket && -1 != t.obj.ticket && bindWeixinEventWithSDK(t.obj.appId, t.obj.ticket, e, n)
        }, function(e) {})
    }

    function bindWeixinEventWithSDK(e, t, i, n) {
        var a = location.href.split("#")[0],
            r = "eqxiuview",
            s = "jsapi_ticket=" + t + "&noncestr=" + r + "&timestamp=" + n + "&url=" + a,
            o = new jsSHA(s, "TEXT"),
            c = o.getHash("SHA-1", "HEX");
        wx.config({
            debug: !1,
            appId: e,
            timestamp: n,
            nonceStr: r,
            signature: c,
            jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
        }), wx.ready(function() {
            shareWeixinWhenReady(a, i)
        })
    }

    function shareWeixinWhenReady(e, t) {
        var i = t.obj.name,
            n = t.obj.cover,
            a = t.obj.description;
        a || (a = " "), wx.onMenuShareTimeline({
            title: i,
            link: e,
            imgUrl: PREFIX_FILE_HOST + n,
            success: function() {},
            cancel: function() {}
        }), wx.onMenuShareAppMessage({
            title: i,
            desc: a,
            link: e,
            imgUrl: PREFIX_FILE_HOST + n,
            success: function() {},
            cancel: function() {}
        }), wx.onMenuShareQQ({
            title: i,
            desc: a,
            link: e,
            imgUrl: PREFIX_FILE_HOST + n,
            success: function() {},
            cancel: function() {}
        }), wx.onMenuShareWeibo({
            title: i,
            desc: a,
            link: e,
            imgUrl: PREFIX_FILE_HOST + n,
            success: function() {},
            cancel: function() {}
        }), $("#media").get(0).play()
    }

    function parseJson(e, t) {
        isNewPreviewLocation || window.scene || (document.title = e.obj.name, $("#metaDescription").attr("content", e.obj.name + ", " + e.obj.description + ", 由微秀免费移动微秀应用自营销管家提供技术支持"), $(".scene_title").text(e.obj.name)), isWeixin && $("#shareImage").find("img").attr("src", PREFIX_FILE_HOST + e.obj.cover), t || bindShare(e), pageMode = e.obj.pageMode;

        //alert($(".main-page").length);
        var i = [];
        return e.obj.property && (e.obj.property = JSON.parse(e.obj.property) || {}), e.obj.bgAudio && "string" == typeof e.obj.bgAudio && (e.obj.bgAudio = JSON.parse(e.obj.bgAudio) || null), i = e.list, i.length <= 0 ? (alert("此微秀不存在!"), void(window.location.href = your_demain)) : void appendLastPage(e, i, pageMode, preview, param, ad)
    }
    var url, preview, mobileview, pageMode, branchid, ad = 0;
    $.ajaxSetup({
        cache: !0
    });
    var isNewPreviewLocation = /[http|https]:\/\/.*\/m\/scene\/preview\//.test(window.location.href);
    url = /[http|https]:\/\/.*\/v-/.test(window.location.href) ? window.location.href.split("/v-")[1] : isNewPreviewLocation ? window.location.href.split("/m/scene/preview/")[1] : window.location.href.split("id=")[1];
    var sceneId = url.split("#")[0].split("&")[0].split("?")[0];
    isNewPreviewLocation && (sceneId = sceneId.substring(0, sceneId.indexOf(".html")));
    var param = url.split(sceneId)[1];
    if ((param.indexOf("preview=preview") > 0 || window.preview || isNewPreviewLocation) && (preview = !0), param.indexOf("branchid=") > 0 && (branchid = param.substring(param.indexOf("branchid=") + 9)), param.indexOf("mobileview=mobileview") > 0 && (mobileview = !0), !(mobilecheck() || tabletCheck() && window == window.top)) {
        var addElmentsForPc = function(e) {
            var t = document.getElementsByTagName("head")[0],
                i = document.createElement("link");
            i.href = CLIENT_CDN + "common/css/pcviewer.css", i.rel = "stylesheet", t.appendChild(i), window != window.top ? ($("body").css("background-image", "none"), window.location.href.indexOf("hidePhone") > 0 && ($(".top").hide(), $(".bottom").hide(), $(".phone_menubar").hide(), $(".scene_title_baner").attr("style", "display:none !important"), $("body").css({
                "background-color": "rgba(0,0,0,0.6)"
            }), $(".p-index").wrap('<div class = "phone_panel"></div>'), $('<div class = "ctrl_panel_dir"></div>').appendTo($(".phone_panel")), setTimeout(function() {
                $(".phone_panel").css({
                    position: "absolute",
                    width: "94%",
                    height: "94%",
                    top: "3%",
                    left: "3%",
                    "margin-top": 0,
                    "margin-left": 0
                });
                var e = $(".ctrl_panel_dir");
                $(".ctrl_panel_dir").css({
                    position: "fixed",
                    bottom: "3%",
                    right: "3%"
                }), $(".phoneBox").css({
                    width: "100%",
                    height: "100%"
                }), $('<div class="ctrl-left" onclick = "eqxiu.prePage(1)"></div>').appendTo(e), $('<div class="ctrl-right" onclick = "eqxiu.nextPage(1)"></div>').appendTo(e), $('<div class="ctrl-up" onclick = "eqxiu.prePage(2)"></div>').appendTo(e), $('<div class="ctrl-down" onclick = "eqxiu.nextPage(2)"></div>').appendTo(e)
            }, 100))) : ($("body").css("backgroundImage", "url(/view/images/previewbg_spring.jpg)"), $.getScript(PREFIX_URL + "common/js/qrcode.js", function() {
                $.getScript(PREFIX_URL + "common/js/jquery.qrcode.js", function() {
                    window.scene && 100 == window.scene.bizType ? ($("#con").before('<div id="code" style="margin-top: -200px;">\n    <div style="font-size: 14px;">Share your folio on social network!</div>\n    <div class="eqx-share">\n        <a class="eqx-share-btn btn-facebook"><span class="eqx-share-icon icon-facebook"></span></a>\n        <a class="eqx-share-btn btn-twitter"><span class="eqx-share-icon icon-twitter"></span></a>\n        <a class="eqx-share-btn btn-plus"><span class="eqx-share-icon icon-google_plus"></span></a>\n        <a class="eqx-share-btn btn-linkedin"><span class="eqx-share-icon icon-linkedin"></span></a>\n        <a class="eqx-share-btn btn-pinterest"><span class="eqx-share-icon icon-pinterest"></span></a>\n        <a class="addthis_sharing_toolbox"></a>\n    </div>\n    <div id="view_reg" style="border: none;margin-bottom: 26px;"><span>\n        <a target="_blank" href=' + your_demain + ' style="color: #fff;border-bottom-color: #fff;font-size: 14px;">So Cool, Let me try it!</a>\n    </span></div>\n    <div style="text-align: center;background:#fff;padding: 10px;" id="codeImg"/> \n    <div style="text-align: center;font-size: 14px;">Scan the QR Code!</div>\n    <div id="support">Powered BY <a target="_blank" href=' + your_demain + '><img id="logoSmall" style="width: 64px;vertical-align: bottom;" src="' + CLIENT_CDN + 'view/images/hypefolio-logo.png"/></a></div></div>'), $(".eqx-share-btn").ShareLink({
                        title: window.scene.name,
                        text: window.scene.description,
                        image: PREFIX_FILE_HOST + window.scene.cover,
                        url: window.location.href.split("#")[0],
                        class_prefix: "btn-"
                    })) : $("#con").before('<div id="code"><div class="share">现在扫一扫立刻分享给朋友！</div><div style=" padding:22px;border:1px dashed #fff;    border-top-left-radius: 3px;border-top-right-radius: 3px;    margin-right: 18px;"><div style="text-align: center;background:#fff;padding: 10px;" id="codeImg"/></div><div id="view_reg"><span style="font-size: 22px;">这么漂亮的微秀-><a href="' + ADD_URL + '">我也要制作</a></span></div><div id="support"><a target="_blank" href=' + your_demain + '><img id="logoSmall" src="' + CLIENT_CDN + 'view/images/bg_small.png"/></a></div></div><script src="'+WEB_ROOT+'/Tool/qrcode/js/qrcode.js-v=20141219"></script><script>var urls = __wechat_licen ? window.location.href + "&type=1&entity_id=1" : window.location.href;$(\'#codeImg\').qrcode({width: 220,height: 220,text: urls});</script>'), $("body").css({
                        "min-height": "640px",
                        "min-width": "1148px",
                        overflow: "visible",
                        "background-size": "cover"
                    })
                })
            }), $(".p-index").wrap('<div class = "phone_panel"></div>'), $('<div class = "ctrl_panel"></div>').appendTo($(".phone_panel")), setTimeout(function() {
                window.scene && 100 == window.scene.bizType ? ($(".phone_menubar").addClass("hypefolio"), $('<a id = "pre_page" type = "button" class = "pre_btn btn" onclick = "eqxiu.prePage()">\n    <span style="transform: rotateZ(90deg);display: inline-block;font-size: 36px;">&lt;</span>\n</a>').prependTo($(".ctrl_panel")), $('<a id = "next_page" type = "button" class = "next_btn btn" onclick = "eqxiu.nextPage()">\n    <span style="transform: rotateZ(90deg);display: inline-block;font-size: 36px;margin-top: 5px;">&gt;</span>\n</a>').appendTo($(".ctrl_panel"))) : ($('<a id = "pre_page" type = "button" class = "pre_btn btn" onclick = "eqxiu.prePage()">上一页</a>').prependTo($(".ctrl_panel")), $('<a id = "next_page" type = "button" class = "next_btn btn" onclick = "eqxiu.nextPage()">下一页</a>').appendTo($(".ctrl_panel")))
            }, 100))
        };
        addElmentsForPc(sceneId)
    }
    var prev_page_hr = window.parent.location,
        aprev_page_hr = prev_page_hr;
    aprev_page_hr = prev_page_hr.toString();

    var assp = aprev_page_hr.split(WEBURL),
        assp2 = assp[1].substr(1, 9);
    "View-show" === assp2 && $(".p-index").after('<div class = "ctrl_panel" style="float: left;padding-top: 90px;margin-left: 0px;position: absolute;width: 50px;top: 20px;right: 55px;"><a id = "pre_page" type = "button" class = "pre_btn btn" onclick = "eqxiu.prePage()">上一页</a><a id = "next_page" type = "button" class = "next_btn btn" onclick = "eqxiu.nextPage()">下一页</a></div>');
    var cardId = 0;
    if (param.indexOf("cardId") > -1)
        for (var paramArray = param.split("&"), i = 0; i < paramArray.length; i++) paramArray[i].indexOf("cardId") > -1 && (cardId = paramArray[i].split("=")[1]);
    var repId = 0;
    if (param.indexOf("repId") > -1)
        for (var paramArray = param.split("&"), i = 0; i < paramArray.length; i++) paramArray[i].indexOf("repId") > -1 && (repId = paramArray[i].split("=")[1]);
    jQuery.support.cors = !0,

    eqShow.bootstrap = function() {


        //地图组件封装好的方法调用-start
        getWechatAuth();
        //地图组件封装好的方法调用-end
        /* var e = getRequestUrl();
        $.ajax({
            type: "GET",
            url: e,
            xhrFields: {
                withCredentials: !0
            },
            crossDomain: !0
        }).done(function(e) {
            e.obj = e.obj || window.scene, getCounterValues(e), parseJson(e, !1);


           if(e.list[e.list.length-1].properties!=null && e.list[e.list.length-1].properties.longPage && e.obj.property.eqAdType == 1){
                var publish=$("#publish").closest(".element-box");
                var publishHtml = publish.css({
                    "display":"none"
                });
                var text = $("#publish").html();

                var fu = $("#publish").closest(".main-page");
                    publish.attr("id","publishOld");
                    var pubBox = "<div class='newPubclass'></div>"
                    fu.find(".m-img").append(pubBox);
                    $(".newPubclass").append(text)
            }

            //帮微微秀-20160530-llg-start
            //进入DIY编辑模式
            if(updateAuth){
                setTimeout(function (){
                    Diy.update();
                },1000);
            }
            //帮微微秀-20160531-llg-end
        })
        */
    },
    eqShow.bootstrapWithPassword = function() {


        function e() {
            $("#verifyTip").addClass("shake").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                $(this).removeClass("shake"), i()
            })
        }

        function t(t) {
            $("#loading").show(), $.ajax({
                type: "GET",
                url: s,
                data: $.param({
                    password: t
                }),
                xhrFields: {
                    withCredentials: !0
                },
                success: function(t) {
                    200 === t.code ? (t.obj = t.obj || window.scene, $("#verifyCode").remove(), getWechatAuth(!0, t)) : ($("#loading").hide(), $("#verifyCode").show(), e())
                },
                crossDomain: !0
            })
        }

        function i() {
            $(".password-indicator li").each(function(e, t) {
                e < g.length ? $(t).addClass("active") : $(t).removeClass("active")
            })
        }

        function n(e) {
            var n = $(e.target);
            n.addClass("active"), g += n.text(), i(), 4 == g.length && (t(g), g = ""), setTimeout(function() {
                n.removeClass("active")
            }, 100)
        }

        function a(e) {
            g = "", i()
        }

        function r(e) {
            g && (g = g.substring(0, g.length - 1), i())
        }
        var s = getRequestUrl();
        if ($("#loading").hide(), $("#verifyCode").show(), window.scene) {
            var o = {
                name: window.scene.name,
                cover: window.scene.cover,
                description: window.scene.description
            };
            bindShare({
                obj: o
            })
        }
        var c = mobilecheck(),
            l = tabletCheck();
        if (!c || c && /Android (\d+\.\d+)/.test(navigator.userAgent) ? ($(".password-numbers>span").on("click", n), $("#btnClear").on("click", a), $("#btnCancel").on("click", r)) : ($(".password-numbers>span").on("touchstart", n),

            $("#btnClear").on("touchstart", a), $("#btnCancel").on("touchstart", r)), c || l) {
            var p, d = $(".container"),
                u = d.width(),
                h = d.height();
            p = Math.floor(10 * Math.min(document.documentElement.clientHeight / h, document.documentElement.clientWidth / u)) / 10, d.css("transform", "scale(" + p + ", " + p + ")")
        }
        var g = ""
    }
}(window, jQuery),


$(".main").show(), $.easing.jswing = $.easing.swing, $.extend($.easing, {
    def: "easeOutQuad",
    swing: function(e, t, i, n, a) {
        return $.easing[$.easing.def](e, t, i, n, a)
    },
    easeInQuad: function(e, t, i, n, a) {
        return n * (t /= a) * t + i
    },
    easeOutQuad: function(e, t, i, n, a) {
        return -n * (t /= a) * (t - 2) + i
    },
    easeInOutQuad: function(e, t, i, n, a) {
        return (t /= a / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function(e, t, i, n, a) {
        return n * (t /= a) * t * t + i
    },
    easeOutCubic: function(e, t, i, n, a) {
        return n * ((t = t / a - 1) * t * t + 1) + i
    },
    easeInOutCubic: function(e, t, i, n, a) {
        return (t /= a / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function(e, t, i, n, a) {
        return n * (t /= a) * t * t * t + i
    },
    easeOutQuart: function(e, t, i, n, a) {
        return -n * ((t = t / a - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function(e, t, i, n, a) {
        return (t /= a / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function(e, t, i, n, a) {
        return n * (t /= a) * t * t * t * t + i
    },
    easeOutQuint: function(e, t, i, n, a) {
        return n * ((t = t / a - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function(e, t, i, n, a) {
        return (t /= a / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function(e, t, i, n, a) {
        return -n * Math.cos(t / a * (Math.PI / 2)) + n + i
    },
    easeOutSine: function(e, t, i, n, a) {
        return n * Math.sin(t / a * (Math.PI / 2)) + i
    },
    easeInOutSine: function(e, t, i, n, a) {
        return -n / 2 * (Math.cos(Math.PI * t / a) - 1) + i
    },
    easeInExpo: function(e, t, i, n, a) {
        return 0 == t ? i : n * Math.pow(2, 10 * (t / a - 1)) + i
    },
    easeOutExpo: function(e, t, i, n, a) {
        return t == a ? i + n : n * (-Math.pow(2, -10 * t / a) + 1) + i
    },
    easeInOutExpo: function(e, t, i, n, a) {
        return 0 == t ? i : t == a ? i + n : (t /= a / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (-Math.pow(2, -10 * --t) + 2) + i
    },
    easeInCirc: function(e, t, i, n, a) {
        return -n * (Math.sqrt(1 - (t /= a) * t) - 1) + i
    },
    easeOutCirc: function(e, t, i, n, a) {
        return n * Math.sqrt(1 - (t = t / a - 1) * t) + i
    },
    easeInOutCirc: function(e, t, i, n, a) {
        return (t /= a / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function(e, t, i, n, a) {
        var r = 1.70158,
            s = 0,
            o = n;
        if (0 == t) return i;
        if (1 == (t /= a)) return i + n;
        if (s || (s = .3 * a), o < Math.abs(n)) {
            o = n;
            var r = s / 4
        } else var r = s / (2 * Math.PI) * Math.asin(n / o);
        return -(o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * a - r) * (2 * Math.PI) / s)) + i
    },
    easeOutElastic: function(e, t, i, n, a) {
        var r = 1.70158,
            s = 0,
            o = n;
        if (0 == t) return i;
        if (1 == (t /= a)) return i + n;
        if (s || (s = .3 * a), o < Math.abs(n)) {
            o = n;
            var r = s / 4
        } else var r = s / (2 * Math.PI) * Math.asin(n / o);
        return o * Math.pow(2, -10 * t) * Math.sin((t * a - r) * (2 * Math.PI) / s) + n + i
    },
    easeInOutElastic: function(e, t, i, n, a) {
        var r = 1.70158,
            s = 0,
            o = n;
        if (0 == t) return i;
        if (2 == (t /= a / 2)) return i + n;
        if (s || (s = a * (.3 * 1.5)), o < Math.abs(n)) {
            o = n;
            var r = s / 4
        } else var r = s / (2 * Math.PI) * Math.asin(n / o);
        return 1 > t ? -.5 * (o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * a - r) * (2 * Math.PI) / s)) + i : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * a - r) * (2 * Math.PI) / s) * .5 + n + i
    },
    easeInBack: function(e, t, i, n, a, r) {
        return void 0 == r && (r = 1.70158), n * (t /= a) * t * ((r + 1) * t - r) + i
    },
    easeOutBack: function(e, t, i, n, a, r) {
        return void 0 == r && (r = 1.70158), n * ((t = t / a - 1) * t * ((r + 1) * t + r) + 1) + i
    },
    easeInOutBack: function(e, t, i, n, a, r) {
        return void 0 == r && (r = 1.70158), (t /= a / 2) < 1 ? n / 2 * (t * t * (((r *= 1.525) + 1) * t - r)) + i : n / 2 * ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) + i
    },
    easeInBounce: function(e, t, i, n, a) {
        return n - $.easing.easeOutBounce(e, a - t, 0, n, a) + i
    },
    easeOutBounce: function(e, t, i, n, a) {
        return (t /= a) < 1 / 2.75 ? n * (7.5625 * t * t) + i : 2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : 2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    },
    easeInOutBounce: function(e, t, i, n, a) {
        return a / 2 > t ? .5 * $.easing.easeInBounce(e, 2 * t, 0, n, a) + i : .5 * $.easing.easeOutBounce(e, 2 * t - a, 0, n, a) + .5 * n + i
    }
});
function playVideo(e) {
    /***音乐自动播放修改-zqq-20160612***/
    var a = !0;
    if (e && e.bgAudio) {
        var t = $("#media"),
            i = $("#audio_btn"),
            n = ($("#yinfu"), "");

        e.bgAudio.url ? n = 0 == e.bgAudio.url.indexOf("http://") ? e.bgAudio.url : PREFIX_FILE_HOST + e.bgAudio.url : !e.bgAudio.url && e.bgAudio.src && (n = 0 == e.bgAudio.src.indexOf("http://") ? e.bgAudio.src : PREFIX_FILE_HOST + e.bgAudio.src), t.attr("src", n), i.addClass("video_exist"),
        t.bind("canplay", function() {

            $(this).get(0).play();

        }).bind("play", function() {
            i.addClass("rotate")
        }).bind("pause", function(a) {
            i.removeClass("rotate")
        });
        //自微信中自动播放-start

        
            t.get(0).play();
            /*document.addEventListener("WeixinJSBridgeReady", function() {
                WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
                    network = e.err_msg.split(":")[1]; //结果在这里
                    t.get(0).play();
                });
            }, false);*/
        //自微信中自动播放-end
        var a = mobilecheck() ? "touchend" : "click";
        $("#audio_btn").show().on(a, function(e) {
            //alert(diySoundEditFlag);
            // if(diySoundEditFlag){
            //     return false;
            // }

            e.cancelBubble = !0, e.stopPropagation(), $(this).hasClass("rotate") ? (a = !1, t.get(0).pause()) : (t.get(0).play(), a = !0, utilSound.pause())
        });
    }
}