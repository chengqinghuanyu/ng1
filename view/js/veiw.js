if(mobilecheck()){
			$("#bgimg").css({
				"background":"none",
				"overflow":"hidden"
			})
			$("#phone_top_cirlce").remove();
			$("#phone_top").remove();
			$("#phone_bottom").remove();
			$("#title").remove();
			$("#phone").css({
				width:"100%",
				height:"100%"
			})
			var bHeight = parseInt($("body").css("height"));
			$("#phone_box").css({
				height:bHeight+"px",
				left:"0",
				top:'0'
			})
			$("#phone_contain").css({
				"top":(bHeight-486)/2+"px"
			});

			var n, a, r = 1,
        		s = $(document).width(),
        		o = $(document).height(),
    			imageWidth = $("#phone_box").width(),
    			imageHeight = $("#phone_box").height();
    			$("#phone_box").css({"border":0,"border-radius":0})
			    if(s / o >= 320 / 486){
			    	r = o / 486, n = (s / r - 320) / 2
			    }else{
			    	r = s / 320, a = (o / r - 486) / 2
			    }
			     window != window.top && $("#phone").css({
			        width: "100%",
			        height: "100%",
			        overflow: "hidden",
			        "transform-origin": "top left",
			        transform: "scale(" + r + ")",
			        border:0,
			        "border-radius":0
			    });

    			$("#mobileViewport").attr("content", "width=320, initial-scale=" + r + ", maximum-scale=" + r + ", user-scalable=no")

		}else{
			
		}