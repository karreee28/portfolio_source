var scrollIng = false;
var logoColor_Able = false;
function mShowPage(idx)
{
	scrollIng = true;
	nowShowPage = idx;

	console.log("showPage idx : " + idx);

	clearTimeout(delayTimeout);
	pageDelay = 1000;
	startPosition = false;
	timeoutClear();
	
	if ($("body").hasClass("m_vw"))
	{
		mobileOpenLayer_reset();

		if ($("body").hasClass("pc"))
		{
			$('#wrap_m').stop().animate({"scrollTop":"0px"},0);
		}
	}

	
	$(".wrap").css({"width":"100%","height":windowHeight + "px", "position":"relative", "margin-left":"", "left":""});
	$(".feature").css({"width":realWidth + "px", "height":windowHeight + "px", "margin-left":"0px", "max-width":"100%"});
	$(".feature_cont").css({"height":windowHeight + "px"});
	$(".feature_cont_cover").css({"height":windowHeight + "px"});

	if (idx > 0)
	{
		$(".m_vw .m_scroll_img").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});
		$(".indicator_wrap .scroll_img").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});
		$(".indicator_wrap .keyboard_img .keyboard_img_txt").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});

		setTimeout(function(){
			$(".indicator_wrap .scroll_img").css({"display":"none"});
			$(".indicator_wrap .keyboard_img .keyboard_img_txt").css({"display":"none"});
			$(".m_scroll_img").css({"display":"none"});
		},500);

		$(".m_vw .header_wrap .header_bg img").css({"display":"none"});
		$(".m_vw .header_wrap .header_bg").css("background", "none");
	}
	switch (idx)
	{
		case 0:
		{
			startPosition = true;

			featureIndex = 0;
			bgNumber = 0;
			$(".inter_cont .sun").css("display","block");
			$(".bg_cont .bg.space").css("opacity",1);

			$(".bg_cont").css({"transition":"margin-top 0.5s","-webkit-transition":"margin-top 0.5s","margin-top":"0px"});
			//$(".inter_cont .sun .flame").css({"transform":"","margin-left":"","top":"","margin-top":""});

			//clearInterval(sunFlameMotion);
			$(".f1_2 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
			$(".f1_2 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
			$(".graph_obj .obj_graph .val .dot").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
			$(".graph_obj .obj_graph .line").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
			$(".graph_obj .obj_graph .val .num").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
			$(".graph_obj .obj_graph .val .val_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
			$(".graph_obj .obj_wrap.graph div").css({"transition":"opacity 0.3s","-webkit-transition":"opacity 0.3s", "opacity":0});
			
			$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*0) + "px"});
			
			var sunHeight = $(".inter_cont .sun img").outerHeight();
			var sunTop = Math.abs(parseInt($(".inter_cont .sun img").css("margin-top")));

			var sunP = (sunTop / 2) + (windowHeight * 0.28);

			$(".inter_cont .sun img").css({"transition":"all 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)","-webkit-transition":"all 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)","transform":"scale(2.0) translate(0px, " + sunP + "px)", "-webkit-transform":"scale(2.0) translate(0px, " + sunP + "px)"});
			
			number00_1 = setTimeout(function(){
				$(".f1_1 .txt").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)"});
				$(".f1_1 .txt .desc").css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s", "opacity":1});
				$(".f1_1 .txt .title").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s", "opacity":1});				
				viewContent = 0;
			},500);

			pageDelay = 1300;

			guageMotion(0,0);

			break;
		}
		case 1:
		{
			if ($("body").hasClass("device"))
			{
				$(".m_vw .header_wrap .header_bg").css("background", "#000");
			}
			featureIndex = 1;
			bgNumber = 0;
			viewContent = 1;
			if(oldShowPage < idx)
			{
				$(".f1_1 .txt").css({"transition":"all 0.1s 0.3s", "-webkit-transition":"all 0.1s 0.3s", "transform":"", "-webkit-transform":""});
				$(".f1_1 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s", "opacity":0});
				$(".f1_1 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s", "opacity":0});

				$(".graph_obj").css("opacity",1);
				$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*1) + "px"});
				$(".graph_obj .obj_graph").css({"transition":"","-webkit-transition":"","left":"0%","bottom":"0%"});
				
				$(".inter_cont .sun img").css({"transition":"all 0.5s 0.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)","-webkit-transition":"all 0.5s 0.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)","transform":"scale(2.0) translate(0vw, 0vw)","-webkit-transform":"scale(2.0) translate(0vw, 0vw)"});


				number01_2 = setTimeout(function(){
					$(".graph_obj .obj_graph .val .dot").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
				
					$(".f1_2 .txt .title").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f1_2 .txt .desc").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					
					$(".inter_cont .sun img").css({"transition":"all 0.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)","-webkit-transition":"all 0.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)","transform":"scale(0.5) translate(0vw, 0vw)","-webkit-transform":"scale(0.5) translate(0vw, 0vw)"});

					$(".graph_obj .obj_wrap.graph div").css({"transition":"opacity 0.3s","-webkit-transition":"opacity 0.3s", "opacity":1});
					sunPlear_Able = true;

					$(".graph_obj .obj_graph .line").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".graph_obj .obj_graph .val1 .num").css({"transition":"all 0.3s 0.3s","-webkit-transition":"all 0.3s 0.3s","opacity":1});
					$(".graph_obj .obj_graph .val1 .val_txt").css({"transition":"all 0.3s 0.3s","-webkit-transition":"all 0.3s 0.3s","opacity":1});
					$(".graph_obj .obj_graph .val2 .num").css({"transition":"all 0.3s 0.8s","-webkit-transition":"all 0.3s 0.8s","opacity":1});
					$(".graph_obj .obj_graph .val2 .val_txt").css({"transition":"all 0.3s 0.8s","-webkit-transition":"all 0.3s 0.8s","opacity":1});
				},700);

				pageDelay = 2100;
			}else{
				$(".graph_obj .obj_graph .val3 .num").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".graph_obj .obj_graph .val3 .val_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".graph_obj .obj_graph .line").css({"transition":"","-webkit-transition":"","opacity":1});
				number01_3 = setTimeout(function(){
					$(".graph_obj .obj_graph").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "left":"0%", "bottom":"0%"});
					
					$(".feature_cont").css({"transition":"margin-top 0.5s", "-webkit-transition":"margin-top 0.5s", "margin-top":-(windowHeight*1) + "px"});


					//clearInterval(sunFlameMotion);
					var mTop = windowHeight / 2 - 423;

					
					$(".inter_cont .sun img").css({"transition":"all 0.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)","-webkit-transition":"all 0.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)"," transform":"scale(0.5) translate(0vw, 0vw)", "-webkit-transform":"scale(0.5) translate(0vw, 0vw)"});
					
					number01_5 = setTimeout(function(){
						$(".f1_2 .txt .title").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
						$(".f1_2 .txt .desc").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});

						$(".graph_obj .obj_wrap.graph div").css({"transition":"opacity 0.3s","-webkit-transition":"opacity 0.3s", "opacity":1});
						sunPlear_Able = true;

						$(".graph_obj .obj_graph .val1 .num").css({"transition":"all 0.3s 0.3s","-webkit-transition":"all 0.3s 0.3s","opacity":1});
						$(".graph_obj .obj_graph .val1 .val_txt").css({"transition":"all 0.3s 0.3s","-webkit-transition":"all 0.3s 0.3s","opacity":1});
						$(".graph_obj .obj_graph .val2 .num").css({"transition":"all 0.3s 0.6s","-webkit-transition":"all 0.3s 0.6s","opacity":1});
						$(".graph_obj .obj_graph .val2 .val_txt").css({"transition":"all 0.3s 0.6s","-webkit-transition":"all 0.3s 0.6s","opacity":1});
					},500);

				},300);

				pageDelay = 1700;
			}
			guageMotion(0,1);
			break;
		}
		case 2:
		{
			if ($("body").hasClass("device"))
			{
				$(".m_vw .header_wrap .header_bg").css("background", "#000");
			}
			featureIndex = 1;
			bgNumber = 0;
			viewContent = 1;
			if(oldShowPage < idx)
			{
				$(".graph_obj .obj_graph .val .num").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".graph_obj .obj_graph .val .val_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				
				if ($("body").hasClass("m_vw"))
					$(".graph_obj .obj_graph").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s","left":"-100%","bottom":"-100%"});
				else
					$(".graph_obj .obj_graph").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s","left":"-100%","bottom":"-100%"});

				$(".graph_obj .obj_graph .val3 .num").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","opacity":1});
				$(".graph_obj .obj_graph .val3 .val_txt").css({"transition":"all 0.5s 1.0s","-webkit-transition":"all 0.5s 1.0s","opacity":1});

				$(".feature_cont").css({"transition":"margin-top 0.5s","-webkit-transition":"margin-top 0.5s","margin-top":-(windowHeight*1) + "px"});

				pageDelay = 1500;
			}else{
				$(".f2_1 .txt").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":""});
				$(".f2_1 .txt .title ").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s", "opacity":0});
				$(".f2_1 .txt .desc ").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s", "opacity":0});

				if ($("body").hasClass("m_vw"))
					$(".graph_obj .obj_graph").css({"transition":"","-webkit-transition":"","left":"-100%","bottom":"-100%"});
				else
					$(".graph_obj .obj_graph").css({"transition":"","-webkit-transition":"","left":"-100%","bottom":"-100%"});

				var mTop = windowHeight / 2 - 423;
				$(".inter_cont .sun").css("display","block");
				
				var sunMargin_Left = parseInt($(".inter_cont .sun .flame").css("margin-left")) + (windowWidth/3);
				var sunMargin_Top = parseInt($(".inter_cont .sun .flame").css("margin-top")) - (windowHeight/3);
				console.log("sunMargin_Left : " + sunMargin_Left + ", sunMargin_Top : " + sunMargin_Top);
				$(".inter_cont .sun img").css({"transition":"","-webkit-transition":"","transform":"scale(0) translate(500px,-200px)","-webkit-transform":"scale(0) translate(0vw, 0vw)", "margin-left":sunMargin_Left + "px", "margin-top":sunMargin_Top + "px"});
				$(".inter_cont .earth img").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.0) translate(0vw, 0vw)", "-webkit-transform":"scale(1.0) translate(0vw, 0vw)"});
				setTimeout(function(){
					$(".inter_cont .sun img").css({"transition":"all 1.5s 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)","-webkit-transition":"all 1.5s 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)","transform":"scale(0.5) translate(0vw, 0vw)","-webkit-transform":"scale(0.5) translate(0vw, 0vw)", "margin-left":"","margin-top":""});
					$(".inter_cont .earth img").css({"transition":"all 1.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)", "-webkit-transition":"all 1.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)", "transform":"","-webkit-transform":""});

					//clearInterval(sunFlameMotion);
					$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*1) + "px"});
				},300);

				number02_2 = setTimeout(function(){
					$(".f1_2 .txt .title").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f1_2 .txt .desc").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".graph_obj").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".graph_obj .obj_graph .val .dot").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});

					number02_3 = setTimeout(function(){
						$(".graph_obj .obj_graph .line").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
						$(".graph_obj .obj_graph .val3 .num").css({"transition":"all 0.5s 0.3s","-webkit-transition":"all 0.5s 0.3s","opacity":1});
						$(".graph_obj .obj_graph .val3 .val_txt").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
					},500);
				},2000);

				pageDelay = 3500;
			}
			guageMotion(0,2);
			break;
		}
		case 3:
		{
			startPosition = true;

			featureIndex = 2;
			bgNumber = 0;
			$(".bg_cont .bg.space").css("opacity",1);
			viewContent = idx -2;
			$(".bg_cont").css({"transition":"margin-top 0.5s","-webkit-transition":"margin-top 0.5s","margin-top":"0px"});

			if(oldShowPage < idx)
			{
				$(".graph_obj .obj_graph .val .dot").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".graph_obj .obj_graph .line").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".graph_obj .obj_graph .val .num").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".graph_obj .obj_graph .val .val_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

				$(".f1_2 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f1_2 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".inter_cont .earth").css({"opacity":1});
				$(".inter_cont .earth .type2").css({"opacity":0});
				$(".f2_1 .txt .desc").css({"display":"block","opacity":0});

				number03_1 = setTimeout(function(){
					$(".f1_2 .obj_2 .obj_wrap.graph div").css({"transition":"opacity 0.3s", "-webkit-transition":"opacity 0.3s", "opacity":0});

					//clearInterval(sunFlameMotion);
					sunPlear_Able = false;
					$(".feature_cont").css({"transition":"margin-top 0.5s","-webkit-transition":"margin-top 0.5s","margin-top":-(windowHeight*2) + "px"});
					
					var sunMargin_Left = parseInt($(".inter_cont .sun .flame").css("margin-left")) + (windowWidth/3);
					var sunMargin_Top = parseInt($(".inter_cont .sun .flame").css("margin-top")) - (windowHeight/3);
					console.log("sunMargin_Left : " + sunMargin_Left + ", sunMargin_Top : " + sunMargin_Top);
					if ($("body").hasClass("InternetExplorer"))
					{
						var reSunMargin_Left = sunMargin_Left / windowWidth * 100;
						var reSunMargin_Top = sunMargin_Top / windowWidth * 100;
						$(".inter_cont .sun img").css({"transition":"all 0.8s cubic-bezier(0.060, 0.475, 0.015, 1.000)","-webkit-transition":"all 0.8s cubic-bezier(0.060, 0.475, 0.015, 1.000)","transform":"scale(0) translate(0vw, 0vw)","-webkit-transform":"scale(0) translate(0vw, 0vw)", "margin-left":reSunMargin_Left + "vw", "margin-top":reSunMargin_Top + "vw"});
						$(".inter_cont .earth img").css({"transition":"all 2.5s 0.7s cubic-bezier(0.000, 0.990, 0.355, 1.000)", "-webkit-transition":"all 2.5s 0.7s cubic-bezier(0.000, 0.990, 0.355, 1.000)", "transform":"scale(1.0) translate(0vw, 0vw)", "-webkit-transform":"scale(1.0) translate(0vw, 0vw)"});
					}else{
						$(".inter_cont .sun img").css({"transition":"all 0.8s cubic-bezier(0.060, 0.475, 0.015, 1.000)","-webkit-transition":"all 0.8s cubic-bezier(0.060, 0.475, 0.015, 1.000)","transform":"scale(0) translate(0vw, 0vw)","-webkit-transform":"scale(0) translate(0vw, 0vw)", "margin-left":sunMargin_Left + "px", "margin-top":sunMargin_Top + "px"});
						$(".inter_cont .earth img").css({"transition":"all 2.5s 0.7s cubic-bezier(0.000, 0.990, 0.355, 1.000)", "-webkit-transition":"all 2.5s 0.7s cubic-bezier(0.000, 0.990, 0.355, 1.000)", "transform":"scale(1.0) translate(0vw, 0vw)", "-webkit-transform":"scale(1.0) translate(0vw, 0vw)"});
					}
					
					
					
					$(".f2_1 .txt .title ").css({"transition":"all 0.5s 2.3s", "-webkit-transition":"all 0.5s 2.3s", "opacity":1});
					$(".f2_1 .txt").css({"transition":"transform 0.5s 3.3s","-webkit-transition":"transform 0.5s 3.3s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)"});
					$(".f2_1 .txt .desc").css({"transition":"opacity 0.5s 3.5s","-webkit-transition":"opacity 0.5s 3.5s","opacity":1});
				},500);

				pageDelay = 4500;
			}else{
				clearInterval(number04_0);
				number04_0 = "";
				earthM = 0;
				animationAble = false;
				$(".bg_cont .bg.earth .earth_txt_wrap").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f2_2 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f2_2 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f2_2 .txt .mid_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s", "opacity":0, "transform":"", "-webkit-transform":""});

				animate_image = false;

				//earthRemove();
				$(".inter_cont .earth").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":1});

				
				$(".inter_cont .earth img.type1").css({"transition":"0.5s","-webkit-transition":"0.5s","opacity":1});
				$(".inter_cont .earth .type2").css({"opacity":0});
				number03_2 = setTimeout(function(){
					$(".inter_cont .earth .type2").css({"opacity":0});
					$(".inter_cont .earth img").css({"transition":"all 1s cubic-bezier(0.040, 0.620, 0.170, 0.995)", "-webkit-transition":"all 1s cubic-bezier(0.040, 0.620, 0.170, 0.995)", "transform":"scale(1.0) translate(0vw, 0vw)", "-webkit-transform":"scale(1.0) translate(0vw, 0vw)"});

					$(".feature_cont").css({"transition":"margin-top 0.3s","-webkit-transition":"margin-top 0.3s","margin-top":-(windowHeight*2) + "px"});
					$(".bg_cont").css({"margin-top":"0px"});

					$(".f2_1 .txt").css({"transition":"all 0.5s 0.3s","-webkit-transition":"all 0.5s 0.3s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
					$(".f2_1 .txt .title").css({"transition":"opacity 0.5s 0.3s","-webkit-transition":"opacity 0.5s 0.3s","opacity":1});
					$(".f2_1 .txt .desc").css("display","block");
					$(".f2_1 .txt .desc").css({"transition":"opacity 0.5s 0.3s","-webkit-transition":"opacity 0.5s 0.3s","opacity":1});
				},500);

				pageDelay = 1500;
			}
			guageMotion(1,3);

			break;
		}
		case 4:
		{
			if ($("body").hasClass("device"))
			{
				$(".m_vw .header_wrap .header_bg").css("background", "#000");
			}

			if(oldShowPage < idx)
			{
				$(".inter_cont .sun").css("display","none");

				featureIndex = 3;
				$(".f2_1 .txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":"0"});

				bgNumber = 0;

				$(".bg_cont .bg.earth").css("opacity",1);
				$(".f2_2 .txt .mid_txt").eq(0).css({"transition":"","-webkit-transition":"", "opacity":0});

				viewContent = 3;
				$(".f2_2 .txt .title").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
				$(".f2_2 .txt .desc").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
				$(".f2_2 .txt .midText1").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","opacity":1});

				$(".inter_cont .earth img").css({"transition":"all 1s cubic-bezier(0.040, 0.620, 0.170, 0.995)", "-webkit-transition":"all 1s cubic-bezier(0.040, 0.620, 0.170, 0.995)", "transform":"scale(0.868) translateY(1.425vw)", "-webkit-transform":"scale(0.868) translateY(1.425vw)"});
				
				number04_1 = setTimeout(function()
				{
					$(".inter_cont .earth .type2").css({"transition":"0.1s","-webkit-transition":"0.1s","opacity":1});
					$(".inter_cont .earth img.type1").css({"transition":"0.5s","-webkit-transition":"0.5s","opacity":0});
				},1000);
			

				$(".feature_cont").css({"transition":"margin-top 0.3s 0.3s","-webkit-transition":"margin-top 0.3s 0.3s","margin-top":-(windowHeight*3) + "px"});

				pageDelay = 1300;
			}else{
				$(".bg_cont").css({"margin-top":"0px"});

				$(".inter_cont .earth").css({"transition":"","-webkit-transition":"","opacity":1});

				$(".inter_cont .earth img").css({"transition":"", "-webkit-transition":"", "transform":"scale(0.868) translateY(1.425vw)", "-webkit-transform":"scale(0.868) translateY(1.425vw)"});
				$(".inter_cont .earth .type2").css({"opacity":1});
				$(".inter_cont .earth img.type1").css({"opacity":0});
				$(".inter_cont .earth_movie .earth_in").animate({"opacity":0});
				$(".inter_cont .earth_movie .earth_out").animate({"opacity":0},function(){
					$(this).css({"display":"none"});

					$(".inter_cont .sun").css("display","none");

					featureIndex = 3;
					$(".f2_1 .txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":"0"});
					bgNumber = 0;
					viewContent = 3;
					$(".f2_2 .txt .midText1").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","opacity":1});
					$(".f2_2 .txt .title").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f2_2 .txt .desc").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".feature_cont").css({"transition":"margin-top 0.3s 0.3s","-webkit-transition":"margin-top 0.3s 0.3s","margin-top":-(windowHeight*3) + "px"});
				});

				pageDelay = 1900;
			}

			if (number04_0 == "")
			{
				number04_0 = setInterval(earthText_Motion,3000);
			}

			guageMotion(1,4);
			break;
		}
		case 5:
		{
			featureIndex = 4;
			bgNumber = 0;
			viewContent = 4;
			if(oldShowPage <= idx)
			{
				earthM = 0;
				clearInterval(number04_0);
				number04_0 = "";
				$(".bg_cont .bg.earth .earth_txt_wrap").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f2_2 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":0});
				$(".f2_2 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":0});
				$(".f2_2 .txt .mid_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0, "transform":"", "-webkit-transform":""});
				
				
				setTimeout(function(){
					fullDelta = (baseDelta * 6);

					pageIndex = parseInt(fullDelta/baseDelta);
					if(pageIndex != oldPageIndex)
					{
						pageInteraction_Able = false;
						oldPageIndex = pageIndex;
						mShowPage(pageIndex);
					}
				},300);

				pageDelay = 1000;
			}else{

				$(".f2_4_line").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":"0"});
				$(".f2_4 .obj").find(".year").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f2_4 .obj").find(".year_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

				$(".bg_cont").css({"margin-top":"0vh"});
				
				setTimeout(function(){
					$(".inter_cont .earth").css({"transition":"","-webkit-transition":"","opacity":1});
					$(".inter_cont .earth img").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.58) translate(0vh, 0vh)", "-webkit-transform":"scale(1.0) translate(0vh, 0vh)"});
					
					$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*4) + "px"});
					
					fullDelta = (baseDelta * 4);
				
					pageIndex = parseInt(fullDelta/baseDelta);
					if(pageIndex != oldPageIndex)
					{
						pageInteraction_Able = false;	
						oldPageIndex = pageIndex;
						mShowPage(pageIndex);
					}
				},300);

				pageDelay = 1000;
			}

			break;
		}
		case 6:
		{
			featureIndex = 5;
			bgNumber = 1;
			viewContent = 5;

			$(".bg_cont .bg").eq(2).css("opacity",1);
			$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*1) + "px"});
			$(".f2_4 .obj").find(".year").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"","opacity":0});
			$(".f2_4 .obj").find(".year_txt").css({"transition":"","-webkit-transition":"","opacity":0});
			if (oldShowPage < idx)
			{
				$(".inter_cont .earth").css({"transition":"","-webkit-transition":"","opacity":0});
				$(".inter_cont .earth_movie").css({"transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","opacity":0});
				$(".inter_cont .earth_movie .earth_out").animate({"opacity":0});
				$(".inter_cont .earth_movie .earth_in").animate({"opacity":0},function(){
					$(this).css({"display":"none"});
					$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*5) + "px"});

					$(".bg_cont .panel_field_far .panel_field").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.0)", "-webkit-transform":"scale(1.0)", "opacity":0});
					$(".bg_cont .panel_field_far .panel_field_blur").css({"transition":"", "-webkit-transition":"", "opacity":0});

					for (var i = 0;i < $(".bg_cont .bg").length ; i++)
					{
						if(i == 2)
							$(".bg_cont .bg").eq(i).css("opacity",1);
						else
							$(".bg_cont .bg").eq(i).css("opacity",0);
					}

					$(".f2_4_line").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1, "width":""});
					$(".f2_4 .obj").eq(2).find(".year").css({"transition":"all 0.5s 1.0s cubic-bezier(0.215, 0.610, 0.355, 1.000)","-webkit-transition":"all 0.5s 1.0s cubic-bezier(0.215, 0.610, 0.355, 1.000)","transform":"translate(0vw, 0vw) scale(1.0)","-webkit-transform":"translate(0vw, 0vw) scale(1.0)","opacity":1});
					$(".f2_4 .obj").eq(2).find(".year_txt").css({"transition":"all 0.5s 1.0s","-webkit-transition":"all 0.5s 1.0s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f2_4 .obj").eq(1).find(".year").css({"transition":"all 0.5s 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000)","-webkit-transition":"all 0.5s 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000)","transform":"translate(0vw, 0vw) scale(1.0)","-webkit-transform":"translate(0vw, 0vw) scale(1.0)","opacity":1});
					$(".f2_4 .obj").eq(1).find(".year_txt").css({"transition":"all 0.5s 1.2s","-webkit-transition":"all 0.5s 1.2s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f2_4 .obj").eq(0).find(".year").css({"transition":"all 0.5s 1.4s cubic-bezier(0.215, 0.610, 0.355, 1.000)","-webkit-transition":"all 0.5s 1.4s cubic-bezier(0.215, 0.610, 0.355, 1.000)","transform":"translate(0vw, 0vw) scale(1.0)","-webkit-transform":"translate(0vw, 0vw) scale(1.0)","opacity":1});
					$(".f2_4 .obj").eq(0).find(".year_txt").css({"transition":"all 0.5s 1.4s","-webkit-transition":"all 0.5s 1.4s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
				});
				pageDelay = 2600;

			}else if (oldShowPage > idx){
				logoColor_Able = false;

				$(".f3_2 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f3_2 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});

				$(".inter_cont .panel").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_2 .obj1 .obj_inner").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_2 .obj2 .obj_inner").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

				$(".bg_cont .panel_field_far .panel_field").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "transform":"scale(1.0)", "-webkit-transform":"scale(1.0)", "opacity":0});
				$(".bg_cont .panel_field_far .panel_field_blur").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});

				number06_1 = setTimeout(function(){
				
					$(".inter_cont .panel .panel_side").removeAttr("style");
					$(".inter_cont .panel .panel_obj1").removeAttr("style");
					$(".inter_cont .panel .panel_obj2").removeAttr("style");

					$(".f3_2 .obj1 .obj_inner .panel_obj1").removeAttr("style");
					$(".f3_2 .obj1 .obj_inner .panel_obj2").removeAttr("style");
					$(".f3_2 .obj1 .obj_inner .panel_obj3").removeAttr("style");
					$(".f3_2 .obj1 .obj_inner .panel_obj4").removeAttr("style");
					$(".f3_2 .obj2 .obj_inner .panel_obj2").removeAttr("style");
					$(".f3_2 .obj2 .obj_inner .panel_obj3").removeAttr("style");
					$(".f3_2 .obj2 .obj_inner .panel_obj4").removeAttr("style");

					$(".f3_2 .obj1 .obj_inner .obj_txt1").removeAttr("style");
					$(".f3_2 .obj1 .obj_inner .obj_txt2").removeAttr("style");
					$(".f3_2 .obj1 .obj_inner .obj_txt3").removeAttr("style");
					$(".f3_2 .obj1 .obj_inner .obj_txt4").removeAttr("style");
					$(".f3_2 .obj2 .obj_inner .obj_txt3").removeAttr("style");
					$(".f3_2 .obj2 .obj_inner .obj_txt4").removeAttr("style");

					$(".feature_cont").css({"transition":"margin-top 0.5s","-webkit-transition":"margin-top 0.5s","margin-top":-(windowHeight*5) + "px"});

					$(".f2_4_line").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1, "width":""});

					$(".f2_4 .obj").eq(2).find(".year").css({"transition":"all 0.5s 1.0s cubic-bezier(0.215, 0.610, 0.355, 1.000)","-webkit-transition":"all 0.5s 1.0s cubic-bezier(0.215, 0.610, 0.355, 1.000)","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f2_4 .obj").eq(2).find(".year_txt").css({"transition":"all 0.5s 1.0s","-webkit-transition":"all 0.5s 1.0s","opacity":1});
					$(".f2_4 .obj").eq(1).find(".year").css({"transition":"all 0.5s 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000)","-webkit-transition":"all 0.5s 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000)","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f2_4 .obj").eq(1).find(".year_txt").css({"transition":"all 0.5s 1.2s","-webkit-transition":"all 0.5s 1.2s","opacity":1});
					$(".f2_4 .obj").eq(0).find(".year").css({"transition":"all 0.5s 1.4s cubic-bezier(0.215, 0.610, 0.355, 1.000)","-webkit-transition":"all 0.5s 1.4s cubic-bezier(0.215, 0.610, 0.355, 1.000)","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f2_4 .obj").eq(0).find(".year_txt").css({"transition":"all 0.5s 1.4s","-webkit-transition":"all 0.5s 1.4s","opacity":1});
				},300);

				pageDelay = 2300;
			}else{
				pageDelay = 0;
			}

			guageMotion(2,5);
			break;
		}
		case 7:
		{
			


			startPosition = true;

			featureIndex = 6;
			bgNumber = 1;
			viewContent = 6;
			if(oldShowPage > idx)
			{
				logoColor_Able = true;

				$(".f3_3 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f3_3 .f_ico_wrap .ico").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*6) + "px"});

				$(".inter_cont .panel_full").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".inter_cont .panel").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

				setTimeout(function(){
					$(".inter_cont .panel .panel_obj1 img").eq(0).css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
					$(".inter_cont .panel .panel_obj1 img").eq(1).css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":1});
					$(".inter_cont .panel .panel_obj2 img").eq(0).css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
					$(".inter_cont .panel .panel_obj2 img").eq(1).css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":1});
				},300);

				number07_1 = setTimeout(function(){
					

					$(".f3_2 .txt").css("opacity",1);
					$(".f3_2 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
					$(".f3_2 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});

					number07_2 = setTimeout(function(){
						$(".f3_2 .obj .obj_inner").css({"transition":"all 0.3s 0.2s", "-webkit-transition":"all 0.3s 0.2s", "opacity":1});
					},500);

					$(".f3_2 .obj1 .obj_inner .panel_obj3").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .panel_obj1").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "transform":"translateX(0vw) translate(0vw)", "-webkit-transform":"translateX(0vw) translate(0vw)", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .panel_obj2").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "transform":"translateX(0vw) translate(0vw)", "-webkit-transform":"translateX(0vw) translate(0vw)", "opacity":1});

					$(".f3_2 .obj2 .obj_inner .panel_obj3").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "opacity":1});
					$(".f3_2 .obj2 .obj_inner .panel_obj2").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "transform":"translateX(0vw) translate(0vw)", "-webkit-transform":"translateX(0vw) translate(0vw)", "opacity":1});

					$(".f3_2 .obj1 .obj_inner .panel_obj4").css({"transition":"all 0.3s 1.1s", "-webkit-transition":"all 0.3s 1.1s", "opacity":1});
					$(".f3_2 .obj2 .obj_inner .panel_obj4").css({"transition":"all 0.3s 1.1s", "-webkit-transition":"all 0.3s 1.1s", "opacity":1});

					$(".f3_2 .obj .obj_inner .obj_title").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "opacity":1});



					$(".f3_2 .obj1 .obj_inner .obj_txt1").css({"transition":"all 0.3s 1.2s", "-webkit-transition":"all 0.3s 1.2s", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .obj_txt2").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .obj_txt3").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .obj_txt4").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});

					$(".f3_2 .obj2 .obj_inner .obj_txt3").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});
					$(".f3_2 .obj2 .obj_inner .obj_txt4").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});
					
					if ($("body").hasClass("device"))
					{
						$(".m_vw .header_wrap .header_bg img").css({"display":"block"});
					}
				},600);

				pageDelay = 1500;

			}else{
				$(".f2_4_line").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":"0"});
				$(".f2_4 .obj").find(".year").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f2_4 .obj").find(".year_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				
				$(".inter_cont .panel .panel_obj1 img").eq(0).css({"transition":"", "-webkit-transition":"", "opacity":0});
				$(".inter_cont .panel .panel_obj1 img").eq(1).css({"transition":"", "-webkit-transition":"", "opacity":1});
				$(".inter_cont .panel .panel_obj2 img").eq(0).css({"transition":"", "-webkit-transition":"", "opacity":0});
				$(".inter_cont .panel .panel_obj2 img").eq(1).css({"transition":"", "-webkit-transition":"", "opacity":1});

				$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*6) + "px"});

				$(".bg_cont .panel_field_far .panel_field").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "transform":"scale(1.5)", "-webkit-transform":"scale(1.5)", "opacity":1});
				$(".bg_cont .panel_field_far .panel_field_blur").css({"transition":"all 0.3s 0.6s", "-webkit-transition":"all 0.3s 0.6s", "opacity":1});

				$(".inter_cont .panel_full").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".inter_cont .panel").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				number07_4 = setTimeout(function(){
					logoColor_Able = true;

					$(".f3_2 .txt").css("opacity",1);
					$(".f3_2 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
					$(".f3_2 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});

					number07_5 = setTimeout(function(){
						$(".f3_2 .obj1 .obj_inner").css({"transition":"all 0.1s","-webkit-transition":"all 0.1s","opacity":1});
						$(".f3_2 .obj2 .obj_inner").css({"transition":"all 0.1s","-webkit-transition":"all 0.1s","opacity":1});
					},500);

					$(".f3_2 .obj1 .obj_inner .panel_obj3").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .panel_obj1").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "transform":"translateX(0vw) translate(0vw)", "-webkit-transform":"translateX(0vw) translate(0vw)", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .panel_obj2").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "transform":"translateX(0vw) translate(0vw)", "-webkit-transform":"translateX(0vw) translate(0vw)", "opacity":1});

					$(".f3_2 .obj2 .obj_inner .panel_obj3").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "opacity":1});
					$(".f3_2 .obj2 .obj_inner .panel_obj2").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "transform":"translateX(0vw) translate(0vw)", "-webkit-transform":"translateX(0vw) translate(0vw)", "opacity":1});

					$(".f3_2 .obj1 .obj_inner .panel_obj4").css({"transition":"all 0.3s 1.1s", "-webkit-transition":"all 0.3s 1.1s", "opacity":1});
					$(".f3_2 .obj2 .obj_inner .panel_obj4").css({"transition":"all 0.3s 1.1s", "-webkit-transition":"all 0.3s 1.1s", "opacity":1});

					$(".f3_2 .obj .obj_inner .obj_title").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "opacity":1});

					$(".f3_2 .obj1 .obj_inner .obj_txt1").css({"transition":"all 0.3s 1.2s", "-webkit-transition":"all 0.3s 1.2s", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .obj_txt2").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .obj_txt3").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .obj_txt4").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});

					$(".f3_2 .obj2 .obj_inner .obj_txt3").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});
					$(".f3_2 .obj2 .obj_inner .obj_txt4").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});

					if ($("body").hasClass("device"))
					{
						$(".m_vw .header_wrap .header_bg img").css({"display":"block"});
					}
				},1000);

				pageDelay = 3500;
			}

			guageMotion(2,6);

			break;
		}
		case 8:
		{
			featureIndex = 7;

			bgNumber = 1;
			viewContent = 7;
			if(oldShowPage < idx)
			{
				logoColor_Able = true;

				$(".f3_2 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f3_2 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});

				$(".f3_2 .obj1 .obj_inner .panel_obj1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f3_2 .obj1 .obj_inner .panel_obj2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f3_2 .obj1 .obj_inner .panel_obj4").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f3_2 .obj2 .obj_inner .panel_obj2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f3_2 .obj2 .obj_inner .panel_obj4").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});

				setTimeout(function(){
					$(".inter_cont .panel .panel_obj1 img").eq(0).css({"transition":"", "-webkit-transition":"", "opacity":1});
					$(".inter_cont .panel .panel_obj1 img").eq(1).css({"transition":"", "-webkit-transition":"", "opacity":0});
					$(".inter_cont .panel .panel_obj2 img").eq(0).css({"transition":"", "-webkit-transition":"", "opacity":1});
					$(".inter_cont .panel .panel_obj2 img").eq(1).css({"transition":"", "-webkit-transition":"", "opacity":0});
				},300);

				$(".f3_2 .obj .obj_inner .obj_title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});


				$(".f3_2 .obj1 .obj_inner .obj_txt1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_2 .obj1 .obj_inner .obj_txt2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_2 .obj1 .obj_inner .obj_txt3").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_2 .obj1 .obj_inner .obj_txt4").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});

				$(".f3_2 .obj2 .obj_inner .obj_txt3").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_2 .obj2 .obj_inner .obj_txt4").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});

				$(".f3_2 .obj1 .obj_inner .panel_obj3").css({"transition":"all 0.3s 0.3s", "-webkit-transition":"all 0.3s 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f3_2 .obj2 .obj_inner .panel_obj3").css({"transition":"all 0.3s 0.3s", "-webkit-transition":"all 0.3s 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				
				$(".feature_cont").css({"transition":"margin-top 0.1s 0.8s","-webkit-transition":"margin-top 0.1s 0.8s","margin-top":-(windowHeight*7) + "px"});

				var panelM_Left = -($(".inter_cont .panel .panel_obj1").outerWidth() / 2);
				var panelM_Top = -($(".inter_cont .panel .panel_obj1").outerHeight() / 2) - 60;

				if (windowWidth > 550)
					panelM_Top = -($(".inter_cont .panel .panel_obj1").outerHeight() / 2) - 95;
				

				if ($("body").hasClass("InternetExplorer"))
				{
					var rePanelM_Left = panelM_Left / windowWidth * 100;
					var rePanelM_Top = panelM_Top / windowWidth * 100;
					$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.1s 0.8s", "-webkit-transition":"all 0.1s 0.8s", "transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "-webkit-transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "margin-left":rePanelM_Left + "vw", "margin-top":rePanelM_Top + "vw"});
					$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.1s 0.8s", "-webkit-transition":"all 0.1s 0.8s", "transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "-webkit-transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "margin-left":rePanelM_Left + "vw", "margin-top":rePanelM_Top + "vw"});
				}else{
					$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.1s 0.8s", "-webkit-transition":"all 0.1s 0.8s", "transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "-webkit-transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "margin-left":panelM_Left + "px", "margin-top":panelM_Top + "px"});
					$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.1s 0.8s", "-webkit-transition":"all 0.1s 0.8s", "transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "-webkit-transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "margin-left":panelM_Left + "px", "margin-top":panelM_Top + "px"});
				}
				

				$(".inter_cont .panel").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 1.0s", "opacity":1});
				$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 1.0s", "opacity":1});

				$(".f3_3 .txt .title").css({"transition":"all 0.5s 1.0s", "-webkit-transition":"all 0.5s 1.0s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
				$(".f3_3 .f_ico_wrap .ico").css({"transition":"all 0.5s 1.0s", "-webkit-transition":"all 0.5s 1.0s", "opacity":1});

				pageDelay = 1800;
			}else{
				$(".f3_5 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_5 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_5 .txt .ico").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".tile_cont .tile_cont_inner .tile").css({"opacity":1});
				$(".tile_cont").css({"display":"block", "opacity":0, "z-index":2}).animate({"opacity":1},300,function(){
					$(".tile_cont").delay(300).animate({"opacity":0},300,function(){
						$(this).css({"display":"none"});
					});
				});
				
				number08_3 = setTimeout(function(){
					$(".inter_cont .panel_full > div").css({"transition":"","-webkit-transition":"","opacity":1});
					$(".inter_cont .panel_full").css({"transition":"","-webkit-transition":"","transform":"scale(3) perspective(" + positinoSize(3216) + ") rotate3d(0, 0, 0, 0deg)","-webkit-transform":"scale(3) perspective(" + positinoSize(3216) + ") rotate3d(0, 0, 0, 0deg)"});

					var panelM_Left = -($(".inter_cont .panel .panel_obj1").outerWidth() / 2);
					var panelM_Top = -($(".inter_cont .panel .panel_obj1").outerHeight() / 2) - 60;

					if (windowWidth > 550)
						panelM_Top = -($(".inter_cont .panel .panel_obj1").outerHeight() / 2) - 95;
					
					$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "margin-left":panelM_Left + "px", "margin-top":panelM_Top + "px"});
					$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "margin-left":panelM_Left + "px", "margin-top":panelM_Top + "px"});
				
				},600);

				number08_4 = setTimeout(function(){
					$(".inter_cont .panel_full").css({"transition":"opacity 0.3s, transform 1.0s", "-webkit-transition":"opacity 0.3s, transform 1.0s","opacity":1, "transform":"scale(0.31) perspective(1920px) rotate3d(0.34, 1, -0.5, 93deg)", "-webkit-transform":"scale(0.31) perspective(1920px) rotate3d(0.34, 1, -0.5, 93deg)"});

					$(".bg_cont").css({"transition":"all 0.1s","-webkit-transition":"all 0.1s","margin-top":-(windowHeight*1) + "px"});
					$(".bg_cont .panel_field_far").css({"opacity":1});
					$(".bg_cont .panel_field_far .panel_field").css({"transition":"all 0.1s", "-webkit-transition":"all 0.1s", "transform":"scale(1.0)", "-webkit-transform":"scale(1.0)", "opacity":1});
					$(".bg_cont .panel_field_far .panel_field_blur").css({"transition":"all 0.1s", "-webkit-transition":"all 0.1s", "opacity":1});

					$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*7) + "px"});


					$(".f3_3 .txt .title").css({"transition":"all 0.5s 1.1s", "-webkit-transition":"all 0.5s 1.1s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
					$(".inter_cont .panel").css({"transition":"all 0.5s 1.3s", "-webkit-transition":"all 0.5s 1.3s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
					$(".f3_3 .f_ico_wrap .ico").css({"transition":"all 0.5s 1.5s", "-webkit-transition":"all 0.5s 1.5s", "opacity":1});
				},700);

				number08_5 = setTimeout(function(){
					$(".inter_cont .panel_full").css({"transition":"opacity 0.3s 0.2s, transform 0.5s", "-webkit-transition":"opacity 0.3s 0.2s, transform 0.5s", "opacity":0, "transform":"scale(0.31) perspective(1920px) rotate3d(0.34, 1, -0.5, 93deg)", "-webkit-transform":"scale(0.31) perspective(1920px) rotate3d(0.34, 1, -0.5, 93deg)"});
					
					$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "-webkit-transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "opacity":1});
					$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "-webkit-transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "opacity":1});

					logoColor_Able = true;
				},1100);
				pageDelay = 2000;
			}

			guageMotion(2,7);
			break;
		}
		case 9:
		{
			featureIndex = 9;

			bgNumber = 4;
			$(".f3_4 .f_indi_wrap ul li a").removeClass("active");
			$(".f3_4 .f_indi_wrap ul li").eq(0).addClass("active");

			if(oldShowPage < idx)
			{
				if ($("body").hasClass("device"))
				{
					logoColor_Able = false;
					$(".header_wrap .logo a img").css({"display":"", "opacity":""});
					$(".header_wrap .logo a img.black").css({"display":"", "opacity":""});

					$(".f3_3 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":0});
					$(".f3_3 .f_ico_wrap .ico").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
					$(".inter_cont .panel").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
					$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
					
					$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*8) + "px"});
					$(".tile_cont").css({"display":"block","z-index":0});
					number09_2 = setTimeout(function(){
						$(".tile_cont").css({"transition":"all 1s","-webkit-transition":"all 1s","opacity":1});
						$(".tile_cont .tile_cont_inner .tile").css({"transition":"opacity 0.1s", "-webkit-transition":"opacity 0.1s", "opacity":1});
						$(".inter_cont .panel_full > div").css({"transition":"opacity 0.5s 0.3s","-webkit-transition":"opacity 0.5s 0.3s","opacity":0});
					},100);

					number09_3 = setTimeout(function(){
						$(".bg_cont").css({"transition":"all 0.1s","-webkit-transition":"all 0.1s","margin-top":-(windowHeight*4) + "px"});
						$(".bg_cont .lab").css({"opacity":1});
						$(".feature_cont").css({"transition":"all 0.1s","-webkit-transition":"all 0.1s","margin-top":-(windowHeight*9) + "px"});
						number13_1 = setTimeout(function(){
							$(".tile_cont").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});
							$(".f3_5 .txt .title").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
							$(".f3_5 .txt .desc").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
							$(".f3_5 .txt .ico").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","opacity":1});
						},200);						
					},400);
					pageDelay = 2000;
				}else{
					$(".f3_3 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":0});
					$(".f3_3 .f_ico_wrap .ico").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
					
					$(".inter_cont .panel_full").css({"transition":"opacity 0.5s, transform 1.5s","-webkit-transition":"opacity 0.5s, transform 1.5s","opacity":1, "transform":"scale(1) perspective(1920px) rotate3d(0, 0, 0, 0deg)", "-webkit-transform":"scale(1) perspective(1920px) rotate3d(0, 0, 0, 0deg)"});

					$(".inter_cont .panel .panel_obj1").css({"transition":"","-webkit-transition":"","opacity":0});
					$(".inter_cont .panel .panel_obj2").css({"transition":"","-webkit-transition":"","opacity":0});
					number09_1 = setTimeout(function(){
						logoColor_Able = false;
						$(".feature_cont").css({"transition":"margin-top 0.3s","-webkit-transition":"margin-top 0.3s","margin-top":-(windowHeight*8) + "px"});

						$(".tile_cont").css({"display":"block","z-index":0});
						number09_2 = setTimeout(function(){
							$(".tile_cont").css({"transition":"all 1s","-webkit-transition":"all 1s","opacity":1});
							$(".tile_cont .tile_cont_inner .tile").css({"transition":"opacity 0.1s", "-webkit-transition":"opacity 0.1s", "opacity":1});
							$(".inter_cont .panel_full > div").css({"transition":"opacity 0.5s 0.3s","-webkit-transition":"opacity 0.5s 0.3s","opacity":0});
						},100);

						number09_3 = setTimeout(function(){
							$(".inter_cont .panel_full").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});						
							number13_1 = setTimeout(function(){
								$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*4) + "px"});
								$(".bg_cont .lab").css({"opacity":1});
								$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*9) + "px"});

								$(".tile_cont").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});
								$(".f3_5 .txt .title").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
								$(".f3_5 .txt .desc").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
								$(".f3_5 .txt .ico").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","opacity":1});
							},400);

							pageDelay = 1700;
						},300);
					},500);
				}
				pageDelay = 2300;
			}else
			{
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","margin-top":"0px","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".btn").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".box").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

				$(".f3_6 .box_wrap .box .box_in > div").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"", "opacity":0});
				$(".f3_6 .box_wrap .btn").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"", "opacity":0});
				$(".f3_67_bg .f3_6_bg").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

				$(".bg_cont").css({"transition":"all 0.5s 0.3s","-webkit-transition":"all 0.5s 0.3s","margin-top":-(windowHeight*4) + "px"});
				$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*9) + "px"});

				number13_2 = setTimeout(function(){
					$(".f3_67_bg").css({"display":"none"});
					$(".f3_67_bg .f3_6_bg").css({"display":"none"});
					$(".f3_67_bg .f3_7_bg").css({"display":"none"});

					$(".f3_5 .txt .title").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".f3_5 .txt .desc").css({"transition":"all 0.5s 0.3s","-webkit-transition":"all 0.5s 0.3s","opacity":1});
					$(".f3_5 .txt .ico").css({"transition":"all 0.5s 0.7s","-webkit-transition":"all 0.5s 0.7s","opacity":1});
				},800);

				pageDelay = 2000;
			}
			guageMotion(2,8);
			break;
		}case 10:
		{
			featureIndex = 10;

			bgNumber = 4;
			if (oldShowPage < idx)
			{
				$(".tile_cont").css({"display":"none"});
				$(".f3_5 .txt .title").css({"transition":"0.3s","-webkit-transition":"0.3s","opacity":0});
				$(".f3_5 .txt .desc").css({"transition":"0.3s","-webkit-transition":"0.3s","opacity":0});
				$(".f3_5 .txt .ico").css({"transition":"0.3s","-webkit-transition":"0.3s","opacity":0});

				$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*10) + "px"});
				number14_1 = setTimeout(function(){
					$(".f3_6 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
					$(".f3_6 .box_wrap .box_sec").eq(0).find(".box").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".f3_6 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".f3_6 .box_wrap .box_sec").eq(0).find(".btn").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
				},400);

				pageDelay = 1100;
			}else{
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).css({"transition":"","-webkit-transition":"","margin-top":"0px","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"","-webkit-transition":"","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"","-webkit-transition":"","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".btn").css({"transition":"","-webkit-transition":"","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".box").css({"transition":"","-webkit-transition":"","opacity":0});
				setTimeout(function(){
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).find(".txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":0});
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).find(".obj_wrap").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":1});
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).find(".btn").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".box").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).css({"transition":"all 0.3s","opacity":0});
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).css({"transition":"all 0.1s 0.5s","margin-top":"0px","opacity":1});
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"all 0.5s 0.4s","-webkit-transition":"all 0.5s 0.4s","opacity":1});
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".btn").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".box").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
				},100);
			}

			guageMotion(2,9);
			break;
		}case 11:
		{
			featureIndex = 10;

			bgNumber = 4;
			if (oldShowPage < idx)
			{
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".box").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".btn").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).css({"transition":"all 0.1s 0.3s","opacity":0,"margin-top":-($(".f3_6 .feature_inner").outerHeight()) + "px"});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).css({"transition":"all 0.1s 0.3s","opacity":1});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).find(".box").css({"transition":"all 0.5s 0.4s","-webkit-transition":"all 0.5s 0.4s","opacity":1});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).find(".txt").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).find(".obj_wrap").css({"transition":"all 0.5s 0.4s","-webkit-transition":"all 0.5s 0.4s","opacity":1});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).find(".btn").css({"transition":"all 0.5s 0.4s","-webkit-transition":"all 0.5s 0.4s","opacity":1});
			}else{
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).css({"transition":"","-webkit-transition":"","margin-top":"0px","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"","-webkit-transition":"","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"","-webkit-transition":"","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".btn").css({"transition":"","-webkit-transition":"","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).find(".box").css({"transition":"","-webkit-transition":"","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).css({"transition":"","-webkit-transition":"","margin-top":"0px","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).find(".txt").css({"transition":"","-webkit-transition":"","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).find(".obj_wrap").css({"transition":"","-webkit-transition":"","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).find(".btn").css({"transition":"","-webkit-transition":"","opacity":0});
				$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).find(".box").css({"transition":"","-webkit-transition":"","opacity":0});

				$(".f3_7 .box_wrap .box .box_in > div").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"", "opacity":0});
				$(".f3_7 .box_wrap .btn").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_7 .box_wrap .box_sec .box").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

				$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*10) + "px"});
				number14_2 = setTimeout(function(){
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).css({"transition":"all 0.1s 0.3s","opacity":0,"margin-top":-($(".f3_6 .feature_inner").outerHeight()) + "px"});
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).css({"transition":"all 0.1s 0.3s","opacity":1});
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).find(".box").css({"transition":"all 0.5s 0.4s","-webkit-transition":"all 0.5s 0.4s","opacity":1});
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).find(".txt").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).find(".obj_wrap").css({"transition":"all 0.5s 0.4s","-webkit-transition":"all 0.5s 0.4s","opacity":1});
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(1).find(".btn").css({"transition":"all 0.5s 0.4s","-webkit-transition":"all 0.5s 0.4s","opacity":1});
				},400);

				pageDelay = 1100;
			}

			guageMotion(2,9);
			break;
		}case 12:
		{
			featureIndex = 11;

			bgNumber = 4;
			if (oldShowPage < idx)
			{
				$(".f3_6 .box_wrap .box .box_in > div").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"", "opacity":0});
				$(".f3_6 .box_wrap .btn").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_6 .box_wrap .box_sec .box").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

				$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*11) + "px"});
				$(".f3_7 .box_wrap .box_sec").css("opacity",1);
				number15_1 = setTimeout(function(){
					
					$(".f3_7 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
					$(".f3_7 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".f3_7 .box_wrap .box_sec").eq(0).find(".box").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".f3_7 .box_wrap .box_sec").eq(0).find(".btn").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
				},400);

				pageDelay = 1100;
			}else{
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).css({"transition":"","-webkit-transition":"","margin-top":"0px","opacity":0});
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"","-webkit-transition":"","opacity":0});
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"","-webkit-transition":"","opacity":0});
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).find(".btn").css({"transition":"","-webkit-transition":"","opacity":0});
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).find(".box").css({"transition":"","-webkit-transition":"","opacity":0});

				$(".m_vw .f3_7 .box_wrap .box_sec").eq(1).find(".txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":0});
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(1).find(".obj_wrap").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":1});
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(1).find(".btn").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).find(".box").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(1).css({"transition":"all 0.3s","opacity":0});
				setTimeout(function(){
					$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).css({"transition":"all 0.1s","-webkit-transition":"all 0.1s","margin-top":"0px","opacity":1});
					$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"all 0.5s 0.1s","-webkit-transition":"all 0.5s 0.1s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
					$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).find(".btn").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).find(".box").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
				},500);

			}

			guageMotion(2,10);
			break;
		}case 13:
		{
			featureIndex = 11;

			bgNumber = 4;
			if (oldShowPage < idx)
			{
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":0});
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).find(".box").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).find(".btn").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

				$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).css({"transition":"all 0.1s 0.3s","opacity":0,"margin-top":-($(".f3_7 .feature_inner").outerHeight()) + "px"});
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(1).css({"transition":"all 0.1s 0.3s","opacity":1});
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(1).find(".box").css({"transition":"all 0.5s 0.4s","-webkit-transition":"all 0.5s 0.4s","opacity":1});
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(1).find(".txt").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(1).find(".obj_wrap").css({"transition":"all 0.5s 0.4s","-webkit-transition":"all 0.5s 0.4s","opacity":1});
				$(".m_vw .f3_7 .box_wrap .box_sec").eq(1).find(".btn").css({"transition":"all 0.5s 0.4s","-webkit-transition":"all 0.5s 0.4s","opacity":1});

			}else{
				

				$(".f3_8 .obj_wrap .obj1").css({"transition":"0.3s","-webkit-transition":"0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_8 .obj_wrap .obj2").css({"transition":"0.3s","-webkit-transition":"0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_8 .txt .title").css({"transition":"0.3s","-webkit-transition":"0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_8 .txt .desc").css({"transition":"0.3s","-webkit-transition":"0.3s","transform":"","-webkit-transform":"","opacity":0});
				
				$(".bg_cont .lab img").css({"display":"block","opacity":1});
				$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*4) + "px"});
				number15_2 = setTimeout(function(){
					$(".tile_cont").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
					$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*11) + "px"});
					$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).css({"margin-top":-($(".f3_7 .feature_inner").outerHeight()) + "px"});
					number15_3 = setTimeout(function(){
						$(".tile_cont").css({"display":"none"});

						$(".f3_7 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
						$(".f3_7 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
						$(".f3_7 .box_wrap .box_sec").eq(1).find(".obj_wrap").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
						$(".f3_7 .box_wrap .box_sec").eq(1).find(".txt").css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
						$(".f3_7 .box_wrap .btn").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					},300);
				},300);

				pageDelay = 1300;
			}

			guageMotion(2,10);
			break;
		}case 14:
		{
			featureIndex = 12;
			bgNumber = 4;
			if (oldShowPage < idx)
			{	
				$(".tile_cont").css({"display":"block", "opacity":"0", "z-index":2});
				$(".f3_7 .box_wrap .box .box_in > div").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"", "opacity":0});
				$(".f3_7 .box_wrap .btn").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

				setTimeout(function(){
					$(".tile_cont").css({"display":"block","z-index":"2", "opacity":0}).animate({"opacity":1}, 500, function(){
						$(".tile_cont").css({"z-index":0});
						$(".bg_cont .bg").eq(5).css("opacity",1);
						$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*4) + "px"});
						$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*12) + "px"});
					});
				},300);

				number17_2 = setTimeout(function(){
					$(".f3_8 .obj_wrap .obj1").css({"transition":"0.5s 0.2s","-webkit-transition":"0.5s 0.2s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f3_8 .obj_wrap .obj2").css({"transition":"0.5s 0.5s","-webkit-transition":"0.5s 0.5s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f3_8 .txt .title").css({"transition":"0.5s 0.2s","-webkit-transition":"0.5s 0.2s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f3_8 .txt .desc").css({"transition":"0.5s 0.2s","-webkit-transition":"0.5s 0.2s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});					

					if (check_allDevice() != "")
					{
						var fHeight = windowHeight + 150;
						$(".wrap").css({"transition":"height 0.5s", "height":fHeight + "px"});
						$(".feature_cont_cover").css({"height":fHeight + "px"});
						$(".feature_cont").css({"height":fHeight + "px"});
						$(".f3_8").css({"height":fHeight + "px", "overflow":"visible"});
						$(".tile_cont").css({"height":fHeight + "px"});
					}
					if ($("body").hasClass("device"))
					{
						$(".m_vw .header_wrap .header_bg").css("background", "#171721");
					}
				},600);
			

				pageDelay = 1400;
			}else{
				$(".f3_75 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".m_vw .f3_75 .txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .txt .ico").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .obj .obj_line").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .obj .obj_txt .t_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .obj .obj_txt .b_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});


				setTimeout(function(){
					$(".tile_cont").css({"display":"block","z-index":"2", "opacity":0}).animate({"opacity":1}, 500, function(){
						$(".tile_cont").css({"z-index":0});
						$(".bg_cont .bg").eq(5).css("opacity",1);
						$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*4) + "px"});
						$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*12) + "px"});

					});
				},300);

				
				number17_4 = setTimeout(function(){
					$(".f3_8 .obj_wrap .obj1").css({"transition":"0.5s","-webkit-transition":"0.5s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f3_8 .obj_wrap .obj2").css({"transition":"0.5s 0.3s","-webkit-transition":"0.5s 0.3s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f3_8 .txt .title").css({"transition":"0.5s","-webkit-transition":"0.5s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f3_8 .txt .desc").css({"transition":"0.5s","-webkit-transition":"0.5s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					
					if (check_allDevice() != "")
					{
						var fHeight = windowHeight + 150;
						$(".wrap").css({"transition":"height 0.5s", "height":fHeight + "px"});
						$(".feature_cont_cover").css({"height":fHeight + "px"});
						$(".feature_cont").css({"height":fHeight + "px"});
						$(".f3_8").css({"height":fHeight + "px", "overflow":"visible"});
						$(".tile_cont").css({"height":fHeight + "px"});
					}

					if ($("body").hasClass("device"))
					{
						$(".m_vw .header_wrap .header_bg").css("background", "#171721");
					}
				},1000);

				pageDelay = 2200;
			}

			guageMotion(2,11);
			break;
		}case 15:
		{
			featureIndex = 13;

			bgNumber = 4;
			if(oldShowPage < idx)
			{
				
				$(".f3_8 .obj_wrap .obj1").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_8 .obj_wrap .obj2").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_8 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_8 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				
				$(".tile_cont").css({"transition":"all 0.3s 0.3s","-webkit-transition":"all 0.3s 0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".bg_cont .bg").eq(5).css("opacity",1);
				$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*4) + "px"});

				number16_1 = setTimeout(function(){
					$(".tile_cont").css({"display":"none"});
					
					$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*13) + "px"});
					$(".m_vw .f3_75 .txt").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_75 .txt .title").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_75 .txt .desc").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_75 .txt .ico").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});

					$(".f3_75 .obj2 .obj_line").css({"transition":"all 0.3s 0.7s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_75 .obj2 .obj_txt .t_txt").css({"transition":"all 0.3s 0.7s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_75 .obj2 .obj_txt .b_txt").css({"transition":"all 0.3s 0.7s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_75 .obj3 .obj_line").css({"transition":"all 0.3s 0.7s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_75 .obj3 .obj_txt .t_txt").css({"transition":"all 0.3s 0.7s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_75 .obj3 .obj_txt .b_txt").css({"transition":"all 0.3s 0.7s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
				},600);

				pageDelay = 1400;
			}else{
				if (interview01wLoad_Able)
					interviewVideo01_w.pause();
				
				if (interview01mLoad_Able)
					interviewVideo01_m.pause();

				$(".f3_10 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_10 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_10 .movie_progress").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_10 .video_play_btn a").css({"transition":"opacity 0.3s", "-webkit-transition":"opacity 0.3s", "opacity":0});
				$(".f3_10 .caption_w .c_circle").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_10 .caption_w2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "display":"none"});

				setTimeout(function(){
					$(".tile_cont").css({"display":"block","z-index":"2", "opacity":0}).animate({"opacity":1}, 300, function(){
						$(".m_vw .bg_cont .interview2 video.m_video").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
						$(".m_vw .bg_cont .interview2 .vCover").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});

						$(".bg_cont .bg").eq(5).css("opacity",1);
						$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*4) + "px"});
						$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*13) + "px"});
						$(".tile_cont").delay(100).animate({"opacity":0},300,function(){
							$(this).css("display","none");
						});
					});
				},300);

				number16_2 = setTimeout(function(){
					audioSound("max");

					$(".m_vw .f3_75 .txt").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","opacity":1});
					$(".f3_75 .txt .title").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f3_75 .txt .desc").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f3_75 .txt .ico").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","opacity":1});

					$(".f3_75 .obj2 .obj_line").css({"transition":"all 0.3s 0.9s","-webkit-transition":"all 0.5s 0.6s","opacity":1});
					$(".f3_75 .obj2 .obj_txt .t_txt").css({"transition":"all 0.3s 0.9s","-webkit-transition":"all 0.5s 0.6s","opacity":1});
					$(".f3_75 .obj2 .obj_txt .b_txt").css({"transition":"all 0.3s 0.9s","-webkit-transition":"all 0.5s 0.6s","opacity":1});
					$(".f3_75 .obj3 .obj_line").css({"transition":"all 0.3s 0.9s","-webkit-transition":"all 0.5s 0.6s","opacity":1});
					$(".f3_75 .obj3 .obj_txt .t_txt").css({"transition":"all 0.3s 0.9s","-webkit-transition":"all 0.5s 0.6s","opacity":1});
					$(".f3_75 .obj3 .obj_txt .b_txt").css({"transition":"all 0.3s 0.9s","-webkit-transition":"all 0.5s 0.6s","opacity":1});
				},600);

				pageDelay = 1800;
			}

			guageMotion(2,12);
			break;
		}case 16:
		{
			featureIndex = 14;

			bgNumber = 9;
			if(oldShowPage < idx)
			{
				$(".f3_75 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .txt .ico").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".m_vw .f3_75 .txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .obj .obj_line").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .obj .obj_txt .t_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .obj .obj_txt .b_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_10 .txt").css({"transition":"", "-webkit-transition":"", "opacity":0});
				
				$(".m_vw .bg_cont .interview2 video.m_video").css({"display":"none"});
				setTimeout(function(){
					$(".tile_cont").css({"display":"block","z-index":"2", "opacity":0}).animate({"opacity":1}, 300, function(){
						$(".tile_cont").css({"z-index":0});
					});
					$(".f3_10 .txt").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"","opacity":1, "display":"block"});

				},300);

				number18_1 = setTimeout(function(){
					$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*14) + "px"});
					$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*9) + "px"});
					$(".bg_cont .bg").eq(10).css("opacity",1);

					$(".tile_cont").animate({"opacity":0}, 300, function(){
						$(".tile_cont").css({"display":"none"});
					});

					$(".m_vw .bg_cont .interview2 video.m_video").css({"transition":"all 0.5s 0.4s", "-webkit-transition":"all 0.5s 0.4s", "opacity":1, "display":"block"});
					$(".m_vw .bg_cont .interview2 .vCover").css({"transition":"all 0.5s 0.4s", "-webkit-transition":"all 0.5s 0.4s", "opacity":1});
					
					$(".f3_10 .txt .title").css({"transition":"all 0.5s 0.7s","-webkit-transition":"all 0.5s 0.7s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f3_10 .txt .desc").css({"transition":"all 0.5s 0.7s","-webkit-transition":"all 0.5s 0.7s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f3_10 .movie_progress").css({"transition":"all 0.5s 0.7s", "-webkit-transition":"all 0.5s 0.7s", "opacity":1});
					$(".f3_10 .video_play_btn a").css({"transition":"opacity 0.5s 0.7s", "-webkit-transition":"opacity 0.5s 0.7s", "display":"block", "opacity":1});
	
					$(".f3_10 .caption_w .c_circle").css({"transition":"opacity 0.5s 0.7s", "-webkit-transition":"opacity 0.5s 0.7s", "display":"block", "opacity":0});
					$(".f3_10 .movie_progress .progress_ico").css({"transition":"", "-webkit-transition":"", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)"});
					$(".f3_10 .movie_progress .progress_time").html("00:00");

				},600);

				pageDelay = 1500;
			}else{
				$(".f3_11 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s", "opacity":0, "transform":"", "-webkit-transform":""});
				$(".f3_11 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0, "transform":"", "-webkit-transform":""});
				$(".f3_11 .obj").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0, "transform":"", "-webkit-transform":""});
				$(".m_vw .bg_cont .interview2 video").css({"transition":"", "-webkit-transition":"", "opacity":0});
				$(".m_vw .bg_cont .interview2 .vCover").css({"transition":"", "-webkit-transition":"", "opacity":0});

				$(".tile_cont").css({"transition":"","-webkit-transition":"","opacity":1});
				$(".f3_10 .txt").css({"transition":"", "-webkit-transition":"", "opacity":0});
				$(".m_vw .bg_cont .interview2 video.m_video").css({"display":"none"});
				
				$(".f3_10 .txt").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"","opacity":1, "display":"block"});

				number18_3 = setTimeout(function(){
					$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*14) + "px"});
					$(".bg_cont").css({"transition":"all 0.1s","-webkit-transition":"all 0.1s","margin-top":-(windowHeight*9) + "px"});
					$(".bg_cont .bg").eq(10).css("opacity",1);
					
					$(".tile_cont").animate({"opacity":0}, 300, function(){
						$(".tile_cont").css({"display":"none"});
					});

					$(".m_vw .bg_cont .interview2 video.m_video").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":1, "display":"block"});
					$(".m_vw .bg_cont .interview2 .vCover").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":1});
					
					$(".f3_10 .txt .title").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f3_10 .txt .desc").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
					$(".f3_10 .movie_progress").css({"transition":"all 0.5s 0.6s", "-webkit-transition":"all 0.5s 0.6s", "opacity":1});
					$(".f3_10 .video_play_btn a").css({"transition":"opacity 0.5s 0.6s", "-webkit-transition":"opacity 0.5s 0.6s", "display":"block", "opacity":1});

					$(".f3_10 .caption_w .c_circle").css({"transition":"opacity 0.5s 0.6s", "-webkit-transition":"opacity 0.5s 0.6s", "display":"block", "opacity":0});
					$(".f3_10 .movie_progress .progress_ico").css({"transition":"", "-webkit-transition":"", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)"});
					$(".f3_10 .movie_progress .progress_time").html("00:00");

				},300);

				pageDelay = 1400;
			}
			guageMotion(2,13);
			break;
		}case 17:
		{
			featureIndex = 15;

			bgNumber = 4;
			if(oldShowPage < idx)
			{
				if (interview01wLoad_Able)
					interviewVideo01_w.pause();
				
				if (interview01mLoad_Able)
					interviewVideo01_m.pause();

				$(".f3_10 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0, "transform":"", "-webkit-transform":""});
				$(".f3_10 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0, "transform":"", "-webkit-transform":""});
				$(".f3_10 .movie_progress").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_10 .video_play_btn a").css({"transition":"opacity 0.3s", "-webkit-transition":"opacity 0.3s", "opacity":0});
				$(".m_vw .bg_cont .interview2 video.m_video").css({"transition":"opacity 0.3s", "-webkit-transition":"opacity 0.3s", "opacity":0});
				$(".m_vw .bg_cont .interview2 .vCover").css({"transition":"opacity 0.3s", "-webkit-transition":"opacity 0.3s", "opacity":0});
				$(".f3_10 .caption_w .c_circle").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_10 .caption_w2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "display":"none"});

				setTimeout(function(){
					$(".tile_cont").css({"display":"block","z-index":"2", "opacity":0}).animate({"opacity":1}, 300, function(){
						$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*15) + "px"});
						setTimeout(function(){
							$(".tile_cont").css({"z-index":0});
						},100);
					});
				},300);
				number19_1 = setTimeout(function(){
					$(".bg_cont .interview2").css("z-index","");
					audioSound("max");
					

					
					number19_2 = setTimeout(function(){

						$(".f3_11 .txt .title").css({"transition":"all 0.5s 1.0s","-webkit-transition":"all 0.5s 1.0s","transform":"","-webkit-transform":"","opacity":1});
						$(".f3_11 .txt .desc").css({"transition":"all 0.5s 1.0s","-webkit-transition":"all 0.5s 1.0s","transform":"","-webkit-transform":"","opacity":1});

						$(".f3_11 .obj").eq(0).css({"transition":"all 0.5s 1.0s","-webkit-transition":"all 0.5s 1.0s", "opacity":1, "transform":"", "-webkit-transform":""});
						$(".f3_11 .obj").eq(0).find(".obj_txt").css({"transition":"all 0.5s 1.2s","-webkit-transition":"all 0.5s 1.2s","opacity":1});
						$(".f3_11 .obj").eq(1).css({"transition":"all 0.5s 1.1s","-webkit-transition":"all 0.5s 1.1s", "opacity":1, "transform":"", "-webkit-transform":""});
						$(".f3_11 .obj").eq(1).find(".obj_txt").css({"transition":"all 0.5s 1.3s","-webkit-transition":"all 0.5s 1.3s","opacity":1});
						$(".f3_11 .obj").eq(2).css({"transition":"all 0.5s 1.2s","-webkit-transition":"all 0.5s 1.2s", "opacity":1, "transform":"", "-webkit-transform":""});
						$(".f3_11 .obj").eq(2).find(".obj_txt").css({"transition":"all 0.5s 1.4s","-webkit-transition":"all 0.5s 1.4s", "opacity":1});
						$(".f3_11 .obj").eq(3).css({"transition":"all 0.5s 1.3s","-webkit-transition":"all 0.5s 1.3s", "opacity":1, "transform":"", "-webkit-transform":""});
						$(".f3_11 .obj").eq(3).find(".obj_txt").css({"transition":"all 0.5s 1.5s","-webkit-transition":"all 0.5s 1.5s", "opacity":1});
						$(".f3_11 .obj").eq(4).css({"transition":"all 0.5s 1.4s","-webkit-transition":"all 0.5s 1.4s", "opacity":1, "transform":"", "-webkit-transform":""});
						$(".f3_11 .obj").eq(4).find(".obj_txt").css({"transition":"all 0.5s 1.6s","-webkit-transition":"all 0.5s 1.6s", "opacity":1});
					},700);
				},300);

				pageDelay = 3100;
			}else{
				$(".feature_cont").css({"transition":"margin-top 0.3s","-webkit-transition":"margin-top 0.3s","margin-top":-(windowHeight*15) + "px"});
				$(".f3_11 .txt .middle").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				number19_4 = setTimeout(function(){
					$(".f3_11 .txt .desc .desc1").css({"display":"block"});
					$(".f3_11 .txt .desc .desc2").css({"display":"none"});

					$(".f3_11 .txt .middle").css({"transition":"all 0.5s 0.3s","-webkit-transition":"all 0.5s 0.3s","opacity":1});
				},300);
				$(".f3_11 .obj_wrap").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "transform":"", "-webkit-transform":""});
				$(".f3_11 .obj").eq(0).css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":1, "transform":"", "-webkit-transform":""});
				$(".f3_11 .obj").eq(0).find(".obj_txt").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
				$(".f3_11 .obj").eq(1).css({"transition":"all 0.6s 0.3s", "-webkit-transition":"all 0.6s 0.3s", "opacity":1, "transform":"", "-webkit-transform":""});
				$(".f3_11 .obj").eq(1).find(".obj_txt").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
				$(".f3_11 .obj").eq(2).css({"transition":"all 0.7s 0.3s", "-webkit-transition":"all 0.7s 0.3s", "opacity":1, "transform":"", "-webkit-transform":""});
				$(".f3_11 .obj").eq(2).find(".obj_txt").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
				$(".f3_11 .obj").eq(3).css({"transition":"all 0.8s 0.3s", "-webkit-transition":"all 0.8s 0.3s", "opacity":1, "transform":"", "-webkit-transform":""});
				$(".f3_11 .obj").eq(3).find(".obj_txt").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
				$(".f3_11 .obj").eq(4).css({"transition":"all 0.9s 0.3s", "-webkit-transition":"all 0.9s 0.3s", "opacity":1, "transform":"", "-webkit-transform":""});
				$(".f3_11 .obj").eq(4).find(".obj_txt").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});

				pageDelay = 1200;
			}

			guageMotion(2,14);
			break;
		}case 18:
		{
			featureIndex = 15;

			bgNumber = 4;
			if(oldShowPage > idx){
			
				$(".condition_w .obj .ico").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".condition_w .obj img").css({"transition":"", "-webkit-transition":"", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)"});

				var maxTime = 0;
				$(".condition_w .obj").eq(0).css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":0});
				$(".condition_w .obj").eq(1).css({"transition":"all 0.5s 0.1s", "-webkit-transition":"all 0.5s 0.1s", "opacity":0});
				$(".condition_w .obj").eq(2).css({"transition":"all 0.5s 0.2s", "-webkit-transition":"all 0.5s 0.2s", "opacity":0});
				$(".condition_w .obj").eq(3).css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":0});
				$(".condition_w .obj").eq(4).css({"transition":"all 0.5s 0.4s", "-webkit-transition":"all 0.5s 0.4s", "opacity":0});
				$(".condition_w .obj").eq(5).css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":0});

				$(".m_vw .tile_cont").css({"display":"block", "opacity":1, "z-index":0});
				number20_1 = setTimeout(function(){
					$(".condition_w").css({"opacity":0, "background":"", "display":"none"});					
					$(".feature_cont").css({"transition":"margin-top 0.1s","-webkit-transition":"margin-top 0.1s","margin-top":-(windowHeight*15) + "px"});

					number20_2 = setTimeout(function(){
						$(".f3_11 .txt .desc .desc1").css({"display":"none"});
						$(".f3_11 .txt .desc .desc2").css({"display":"block"});
						$(".f3_11 .txt .title").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});
						$(".f3_11 .txt .desc").css({"transition":"all 0.5s 0.3s","-webkit-transition":"all 0.5s 0.3s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)","opacity":1});

						$(".f3_11 .obj").eq(0).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)"});
						$(".f3_11 .obj").eq(0).find(".obj_txt").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":1});
						$(".f3_11 .obj").eq(1).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)"});
						$(".f3_11 .obj").eq(1).find(".obj_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
						$(".f3_11 .obj").eq(2).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)"});
						$(".f3_11 .obj").eq(2).find(".obj_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
						$(".f3_11 .obj").eq(3).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)"});
						$(".f3_11 .obj").eq(3).find(".obj_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
						$(".f3_11 .obj").eq(4).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)"});
						$(".f3_11 .obj").eq(4).find(".obj_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});


					},100);
					$(".condition_w .obj").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "animation-name":"", "animation-duration": "","animation-delay":"","animation-fill-mode": "", "animation-timing-function":""});
					$(".condition_w .obj img").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "animation-name":"", "animation-duration": "","animation-delay":"","animation-fill-mode": "", "animation-timing-function":""});
				}, 1000);

				pageDelay = 1600;
			}else{
				$(".f3_11 .txt .middle").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				number20_3 = setTimeout(function(){
					$(".f3_11 .txt .desc .desc1").css({"display":"none"});
					$(".f3_11 .txt .desc .desc2").css({"display":"block"});

					$(".f3_11 .txt .middle").css({"transition":"all 0.5s 0.3s","-webkit-transition":"all 0.5s 0.3s","opacity":1});
				},300);

				

				$(".f3_11 .obj").eq(0).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)"});
				//$(".f3_11 .obj").eq(0).find(".obj_txt").css({"transition":"all 0.3s","opacity":0});
				$(".f3_11 .obj").eq(1).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)"});
				$(".f3_11 .obj").eq(1).find(".obj_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_11 .obj").eq(2).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)"});
				$(".f3_11 .obj").eq(2).find(".obj_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_11 .obj").eq(3).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)"});
				$(".f3_11 .obj").eq(3).find(".obj_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_11 .obj").eq(4).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)"});
				$(".f3_11 .obj").eq(4).find(".obj_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});

				pageDelay = 1100;
			}

			guageMotion(2,15);
			break;
		}case 19:
		{
			featureIndex = 16;

			bgNumber = 4;
			if(oldShowPage < idx)
			{
				$(".f3_11 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_11 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_11 .obj").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

				$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*16) + "px"});
				var maxTime = 0;
				$(".condition_w").css({"opacity":1, "display":"block"});
				number21_1 = setTimeout(function(){
					$(".condition_w .obj").eq(0).css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":1});
					$(".condition_w .obj").eq(1).css({"transition":"all 0.5s 0.4s", "-webkit-transition":"all 0.5s 0.4s", "opacity":1});
					$(".condition_w .obj").eq(2).css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
					$(".condition_w .obj").eq(3).css({"transition":"all 0.5s 0.6s", "-webkit-transition":"all 0.5s 0.6s", "opacity":1});
					$(".condition_w .obj").eq(4).css({"transition":"all 0.5s 0.7s", "-webkit-transition":"all 0.5s 0.7s", "opacity":1});
					$(".condition_w .obj").eq(5).css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "opacity":1});

					$(".condition_w .obj").eq(0).find(".ico").css({"transition":"all 0.3s 1.3s", "-webkit-transition":"all 1.3s 0.3s", "opacity":1, "transform":"translate(0vw, 0vw)"});
					$(".condition_w .obj").eq(1).find(".ico").css({"transition":"all 0.3s 1.3s", "-webkit-transition":"all 1.3s 0.3s", "opacity":1, "transform":"translate(0vw, 0vw)"});
					$(".condition_w .obj").eq(2).find(".ico").css({"transition":"all 0.3s 1.3s", "-webkit-transition":"all 1.3s 0.3s", "opacity":1, "transform":"translate(0vw, 0vw)"});
					$(".condition_w .obj").eq(3).find(".ico").css({"transition":"all 0.3s 1.3s", "-webkit-transition":"all 1.3s 0.3s", "opacity":1, "transform":"translate(0vw, 0vw)"});
					$(".condition_w .obj").eq(4).find(".ico").css({"transition":"all 0.3s 1.3s", "-webkit-transition":"all 1.3s 0.3s", "opacity":1, "transform":"translate(0vw, 0vw)"});
					$(".condition_w .obj").eq(5).find(".ico").css({"transition":"all 0.3s 1.3s", "-webkit-transition":"all 1.3s 0.3s", "opacity":1, "transform":"translate(0vw, 0vw)"});

					number21_2 = setTimeout(function(){
						$(".condition_w").css({"background":"#000"});
						$(".bg_cont .interview img").css({"display":"block","opacity":1});
					},1600);
				},600);
				pageDelay = 2200;
			}else{
				interviewViedo02_Able = false;
				if (interview02wLoad_Able)
					interviewVideo02_w.pause();

				if (interview02mLoad_Able)
					interviewVideo02_m.pause();

				$(".f4_1 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_1 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_1 .movie_progress").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f4_1 .video_play_btn a").css({"transition":"opacity 0.3s", "-webkit-transition":"opacity 0.3s", "opacity":0});
				$(".m_vw .f4_1 .bg_obj video.m_video").css({"transition":"", "-webkit-transition":"", "opacity":0});
				$(".m_vw .f4_1 .bg_obj .vCover").css({"transition":"", "-webkit-transition":"", "opacity":0});
				$(".f4_1 .caption_w .c_circle").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f4_1 .caption_w2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "display":"none"});

				var maxTime = 0;
				$(".condition_w").css({"opacity":1, "z-index":2, "display":"block"});
				number21_3 = setTimeout(function(){
					$(".condition_w .obj").eq(0).css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":1});
					$(".condition_w .obj").eq(1).css({"transition":"all 0.5s 0.4s", "-webkit-transition":"all 0.5s 0.4s", "opacity":1});
					$(".condition_w .obj").eq(2).css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
					$(".condition_w .obj").eq(3).css({"transition":"all 0.5s 0.6s", "-webkit-transition":"all 0.5s 0.6s", "opacity":1});
					$(".condition_w .obj").eq(4).css({"transition":"all 0.5s 0.7s", "-webkit-transition":"all 0.5s 0.7s", "opacity":1});
					$(".condition_w .obj").eq(5).css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "opacity":1});
					
					$(".condition_w .obj").eq(0).find(".ico").css({"transition":"all 0.3s 1.3s", "-webkit-transition":"all 0.3s 1.3s", "opacity":1, "transform":"translate(0vw, 0vw)"});
					$(".condition_w .obj").eq(1).find(".ico").css({"transition":"all 0.3s 1.3s", "-webkit-transition":"all 0.3s 1.3s", "opacity":1, "transform":"translate(0vw, 0vw)"});
					$(".condition_w .obj").eq(2).find(".ico").css({"transition":"all 0.3s 1.3s", "-webkit-transition":"all 0.3s 1.3s", "opacity":1, "transform":"translate(0vw, 0vw)"});
					$(".condition_w .obj").eq(3).find(".ico").css({"transition":"all 0.3s 1.3s", "-webkit-transition":"all 0.3s 1.3s", "opacity":1, "transform":"translate(0vw, 0vw)"});
					$(".condition_w .obj").eq(4).find(".ico").css({"transition":"all 0.3s 1.3s", "-webkit-transition":"all 0.3s 1.3s", "opacity":1, "transform":"translate(0vw, 0vw)"});
					$(".condition_w .obj").eq(5).find(".ico").css({"transition":"all 0.3s 1.3s", "-webkit-transition":"all 0.3s 1.3s", "opacity":1, "transform":"translate(0vw, 0vw)"});


					
					//$(".bg_cont .interview .vCover").css({"display":"block","opacity":1});
					//$("#interviewVideo2").first().attr('src','');

					number21_4 = setTimeout(function(){
						$(".f4_1 .txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
						$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*16) + "px"});
						$(".condition_w").css({"background":"#000", "z-index":""});
						$(".bg_cont .interview img").css({"display":"block","opacity":1});
					},1300);
				},600);
				pageDelay = 2200;
			}
			guageMotion(2,15);
			break;
		}case 20:
		{
			featureIndex = 17;

			bgNumber = 5;

			

			if(oldShowPage < idx)
			{
				$(".m_vw .tile_cont").css({"display":"none", "opacity":0});
				$(".bg_cont .bg").eq(6).css("opacity",1);
				$(".bg_cont").css({"transition":"all 0.1s","-webkit-transition":"all 0.1s","margin-top":-(windowHeight*5) + "px"});
				$(".condition_w").css({"background":"none", "z-index":""});
				$(".condition_w .obj .ico").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".condition_w .obj img").css({"transition":"", "-webkit-transition":"", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)"});

				$(".condition_w .obj").eq(0).css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":0});
				$(".condition_w .obj").eq(1).css({"transition":"all 0.5s 0.4s", "-webkit-transition":"all 0.5s 0.4s", "opacity":0});
				$(".condition_w .obj").eq(2).css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":0});
				$(".condition_w .obj").eq(3).css({"transition":"all 0.5s 0.6s", "-webkit-transition":"all 0.5s 0.6s", "opacity":0});
				$(".condition_w .obj").eq(4).css({"transition":"all 0.5s 0.7s", "-webkit-transition":"all 0.5s 0.7s", "opacity":0});
				$(".condition_w .obj").eq(5).css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "opacity":0});
				$(".f4_1 .txt").css({"transition":"", "-webkit-transition":"", "opacity":1, "display":"block"});
				number22_1 = setTimeout(function(){
					$(".condition_w").css({"opacity":0, "background":"", "display":"none"});
					$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*17) + "px"});
					$(".m_vw .f4_1 .bg_obj video.m_video").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":1});
					$(".m_vw .f4_1 .bg_obj .vCover").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":1});

					$(".f4_1 .txt .title").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
					$(".f4_1 .txt .desc").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
					$(".f4_1 .movie_progress").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":1});

					$(".condition_w .obj").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "animation-name":"", "animation-duration": "","animation-delay":"","animation-fill-mode": "", "animation-timing-function":""});
					$(".condition_w .obj img").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "animation-name":"", "animation-duration": "","animation-delay":"","animation-fill-mode": "", "animation-timing-function":""});
					$(".f4_1 .video_play_btn a").css({"transition":"opacity 0.5s 0.3s", "-webkit-transition":"opacity 0.5s 0.3s", "display":"block", "opacity":1});
					
					$(".f4_1 .caption_w .c_circle").css({"transition":"opacity 0.5s 0.3s", "-webkit-transition":"opacity 0.5s 0.3s", "display":"block", "opacity":0});
					$(".f4_1 .movie_progress .progress_ico").css({"transition":"", "-webkit-transition":"", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)"});
					$(".f4_1 .movie_progress .progress_time").html("00:00");
				},1300);

				pageDelay = 2100;
			}else{
				$(".f4_2 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});

				$(".inter_cont .sky").css({"transition":"all 0.1s 0.3s", "-webkit-transition":"all 0.1s 0.3s", "opacity":1, "z-index":2});

				number22_3 = setTimeout(function(){
					$(".bg_cont .interview").css("opacity",1);
					$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*5) + "px"});
					$(".inter_cont .sky").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":0});
					$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*17) + "px"});

					$(".f4_1 .txt").css({"transition":"", "-webkit-transition":"", "opacity":1, "display":"block"});
					setTimeout(function(){
						$(".inter_cont .sky").css({"display":"none"});
					},800);
					number22_4 = setTimeout(function(){
						$(".m_vw .f4_1 .bg_obj video.m_video").css({"transition":"all 0.5s 0.1s", "-webkit-transition":"all 0.5s 0.1s", "opacity":1});
						$(".m_vw .f4_1 .bg_obj .vCover").css({"transition":"all 0.5s 0.1s", "-webkit-transition":"all 0.5s 0.1s", "opacity":1});

						$(".f4_1 .txt .title").css({"transition":"all 0.5s 0.1s", "-webkit-transition":"all 0.5s 0.1s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
						$(".f4_1 .txt .desc").css({"transition":"all 0.5s 0.1s", "-webkit-transition":"all 0.5s 0.1s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
						$(".f4_1 .movie_progress").css({"transition":"all 0.5s 0.1s", "-webkit-transition":"all 0.5s 0.1s", "opacity":1});
						$(".f4_1 .video_play_btn a").css({"transition":"opacity 0.5s 0.1s", "-webkit-transition":"opacity 0.5s 0.1s", "display":"block", "opacity":1});

						$(".f4_1 .caption_w .c_circle").css({"transition":"opacity 0.5s 0.1s", "-webkit-transition":"opacity 0.5s 0.1s", "display":"block", "opacity":0});
						$(".f4_1 .movie_progress .progress_ico").css({"transition":"", "-webkit-transition":"", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)"});
						$(".f4_1 .movie_progress .progress_time").html("00:00");
					},100);
				},400);

				pageDelay = 1500;
			}
			guageMotion(2,16);
			break;
		}
		case 21:
		{
			startPosition = true;

			featureIndex = 18;

			bgNumber = 6;
			if(oldShowPage < idx)
			{
				interviewViedo02_Able = false;
				if (interview02wLoad_Able)
					interviewVideo02_w.pause();
				if (interview02mLoad_Able)
					interviewVideo02_m.pause();

				$(".tile_cont").css("display","none");

				$(".f4_1 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_1 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_1 .txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f4_1 .movie_progress").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f4_1 .video_play_btn a").css({"transition":"opacity 0.3s", "-webkit-transition":"opacity 0.3s", "opacity":0});
				$(".m_vw .f4_1 .bg_obj video.m_video").css({"transition":"", "-webkit-transition":"", "opacity":0});
				$(".m_vw .f4_1 .bg_obj .vCover").css({"transition":"", "-webkit-transition":"", "opacity":0});
				$(".f4_1 .caption_w .c_circle").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f4_1 .caption_w2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "display":"none"});

				audioSound("max");
				$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"","-webkit-transition":"","opacity":1, "bottom":"0px"});
				$(".inter_cont .sky").css({"transition":"opacity 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":1, "z-index":2, "display":"block"});
				number23_1 = setTimeout(function(){
					$(".feature_cont").css({"transition":"margin-top 0.1s","-webkit-transition":"margin-top 0.1s","margin-top":-(windowHeight*18) + "px"});
					$(".bg_cont .bg").eq(7).css("opacity",1);
					$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*6) + "px"});
					$(".bg_cont .skypanel_wrap .skypanel").css({"bottom":"0px"});

					number23_2 = setTimeout(function(){
						$(".inter_cont .sky").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":0, "z-index":0});
						$(".f4_2 .txt .title").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
						setTimeout(function(){
							$(".inter_cont .sky").css({"display":"none"});
						},500);
					},100);
				},800);

				pageDelay = 1400;
			}else{
				$(".f4_3 .txt .ico_wrap").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_3 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_3 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});

				$(".bg_cont .bg").eq(7).css("opacity",1);
				$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*6) + "px"});
				
				$(".m_vw .tile_cont .tile_cont_inner").css({"background":"url('./images/panel_cell.jpg') repeat left top"});

				$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"bottom 0.5s 0.3s","-webkit-transition":"bottom 0.5s 0.3s","bottom":"0px"});
				$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*18) + "px"});
				$(".f4_2 .txt .title").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});

				pageDelay = 1300;
			}
			guageMotion(3,17);


			break;
		}
		case 22:
		{
			featureIndex = 19;

			bgNumber = 6;
			if (oldShowPage < idx)
			{
				$(".f4_2 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
			}else{
				$(".f4_4 .txt .ico_wrap").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_4 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_4 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
			}
			var reBottom = -(2230 / 8500) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight() + ($(window).outerHeight() / 2);
			$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"bottom 0.5s 0.3s","-webkit-transition":"bottom 0.5s 0.3s","bottom":reBottom + "px"});
			$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*19) + "px"});

			$(".f4_3 .txt .ico_wrap").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
			$(".f4_3 .txt .title").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
			$(".f4_3 .txt .desc").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
			
			pageDelay = 1300;
			guageMotion(3,18);
			break;
		}
		case 23:
		{
			featureIndex = 20;

			bgNumber = 6;
			if (oldShowPage < idx)
			{
				$(".f4_3 .txt .ico_wrap").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_3 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_3 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
			}else{
				$(".f4_5 .txt .ico_wrap").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_5 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_5 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
			}
			var reBottom = -(3900 / 8500) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight() + ($(window).outerHeight() / 2);
			$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"bottom 0.5s 0.3s","-webkit-transition":"bottom 0.5s 0.3s","bottom":reBottom + "px"});
			$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*20) + "px"});

			$(".f4_4 .txt .ico_wrap").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
			$(".f4_4 .txt .title").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
			$(".f4_4 .txt .desc").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
			
			pageDelay = 1300;
			guageMotion(3,19);
			break;
		}
		case 24:
		{
			featureIndex = 21;

			bgNumber = 6;
			if (oldShowPage < idx)
			{
				$(".f4_4 .txt .ico_wrap").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_4 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_4 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
			}else{
				$(".f4_6 .txt .ico_wrap").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_6 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_6 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
			}
			var reBottom = -(5475 / 8500) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight() + ($(window).outerHeight() / 2);
			$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"bottom 0.5s 0.3s","-webkit-transition":"bottom 0.5s 0.3s","bottom":reBottom + "px"});
			$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*21) + "px"});

			$(".f4_5 .txt .ico_wrap").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
			$(".f4_5 .txt .title").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
			$(".f4_5 .txt .desc").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
			
			pageDelay = 1300;
			guageMotion(3,20);
			break;
		}
		case 25:
		{
			featureIndex = 22;

			bgNumber = 6;
			if(oldShowPage < idx)
			{
				$(".f4_5 .txt .ico_wrap").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_5 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_5 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				
				var reBottom = -(6972 / 8500) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight() + ($(window).outerHeight() / 2);
				$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"bottom 0.5s 0.3s","-webkit-transition":"bottom 0.5s 0.3s","bottom":reBottom + "px"});
				$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*22) + "px"});

				$(".f4_6 .txt .ico_wrap").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s", "opacity":1});
				$(".f4_6 .txt .title").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
				$(".f4_6 .txt .desc").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","transform":"translate(0vw, 0vw)","-webkit-transform":"translate(0vw, 0vw)", "opacity":1});

				pageDelay = 1300;
			}else{
				$(".bg_cont .bg.dot_map img").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s", "opacity":0});
				$(".f5_1 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f5_1 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});

				$(".f5_1 .ico_wrap.type1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f5_1 .ico_wrap.line").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f5_1 .ico_wrap.type2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});

				var reBottom = -($(".bg_cont .skypanel_wrap .skypanel").outerHeight() - $(window).outerHeight());
				$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"","-webkit-transition":"","bottom":reBottom + "px"});
				$(".bg_cont .skypanel_wrap").css({"transition":"opacity 0.3s 0.3s", "-webkit-transition":"opacity 0.3s 0.3s", "opacity":1});
				$(".bg_cont .bg").eq(7).css("opacity",1);
				number27_1 = setTimeout(function(){
					$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*6) + "px"});
					$(".indicator_wrap").removeClass("type2");
					$(".header_wrap").removeClass("type2");
					var reBottom = -(6972 / 8500) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight() + ($(window).outerHeight() / 2);
					$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"all 1s","-webkit-transition":"all 1s","bottom":reBottom + "px", "opacity":1});
					$(".feature_cont").css({"transition":"margin-top 0.5s","-webkit-transition":"margin-top 0.5s","margin-top":-(windowHeight*22) + "px"});

					$(".inter_cont .inter.light img").css({"transition":"all 1s","-webkit-transition":"all 1s","opacity":0});

					$(".f4_6 .txt .ico_wrap").css({"transition":"all 0.5s 1s", "-webkit-transition":"all 0.5s 1s", "opacity":1});
					$(".f4_6 .txt .title").css({"transition":"all 0.5s 1.3s", "-webkit-transition":"all 0.5s 1.3s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
					$(".f4_6 .txt .desc").css({"transition":"all 0.5s 1.3s", "-webkit-transition":"all 0.5s 1.3s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
				},1000);

				pageDelay = 2800;
			}

			guageMotion(3,21);
			break;
		}
		case 26:
		{
			startPosition = true;

			featureIndex = 24;

			bgNumber = 7;
			if(oldShowPage < idx)
			{
				$(".f4_6 .txt .ico_wrap").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f4_6 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s","transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_6 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"", "-webkit-transform":"", "opacity":0});
				
				var reBottom = -($(".bg_cont .skypanel_wrap .skypanel").outerHeight() - $(window).outerHeight());

				console.log($(".bg_cont .skypanel_wrap .skypanel").outerHeight() + " - " + $(window).outerHeight() + " = reBottom :" + reBottom);

				$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"bottom 1.0s 0.3s, opacity 0.7s 0.5s","bottom":reBottom + "px", "opacity":0});

				number28_1 = setTimeout(function(){
					if(!$(".indicator_wrap").hasClass("type2"))
						$(".indicator_wrap").addClass("type2");
					
					if(!$(".header_wrap").hasClass("type2"))
						$(".header_wrap").addClass("type2");

					$(".bg_cont .bg").eq(8).css("opacity",1);
					$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*7) + "px"});

					$(".feature_cont").css({"transition":"margin-top 0.5s 0.2s","-webkit-transition":"margin-top 0.5s 0.2s","margin-top":-(windowHeight*24) + "px"});
					$(".bg_cont .bg.dot_map img").css({"transition":"all 0.5s 0.2s", "-webkit-transition":"all 0.5s 0.2s", "opacity":1});
					$(".f5_1 .txt .title").css({"transition":"all 0.5s 0.7s", "-webkit-transition":"all 0.5s 0.7s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
					$(".f5_1 .txt .desc").css({"transition":"all 0.5s 0.7s", "-webkit-transition":"all 0.5s 0.7s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});

					$(".f5_1 .ico_wrap.type1").css({"transition":"all 0.5s 1.2s", "-webkit-transition":"all 0.5s 1.2s", "transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)", "opacity":1});
					$(".f5_1 .ico_wrap.line").css({"transition":"all 0.3s 0.7s", "-webkit-transition":"all 0.3s 0.7s", "opacity":1, "display":"block"});
					$(".f5_1 .ico_wrap.type2").css({"transition":"all 0.5s 1.2s", "-webkit-transition":"all 0.5s 1.2s", "transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)", "opacity":1});

				},1000);

				pageDelay = 2700;
			}else{
				$(".f5_2 .location_popup .lo_popup_close a").trigger("click");
				$(".f5_2 .dot").css({"transition":"all 0.3s", "opacity":0});
				$(".f5_2 .click_ico").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f5_2 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f5_2 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f5_2 .swipe_m").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});

				$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*24) + "px"});

				$(".bg_cont .bg.dot_map img").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "left":"50%", "top":"50%", "margin-top":"", "margin-left":"", "transform":"scale(1.5)", "-webkit-transform":"scale(1.5)"});

				$(".f5_1 .txt .title").css({"transition":"all 0.5s 1.3s", "-webkit-transition":"all 0.5s 1.3s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
				$(".f5_1 .txt .desc").css({"transition":"all 0.5s 1.3s", "-webkit-transition":"all 0.5s 1.3s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});

				$(".f5_1 .ico_wrap.type1").css({"transition":"all 0.5s 1.8s", "-webkit-transition":"all 0.5s 1.8s", "transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)", "opacity":1});
				$(".f5_1 .ico_wrap.line").css({"transition":"all 0.3s 1.3s", "-webkit-transition":"all 0.3s 1.3s", "opacity":1, "display":"block"});
				$(".f5_1 .ico_wrap.type2").css({"transition":"all 0.5s 1.8s", "-webkit-transition":"all 0.5s 1.8s", "transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)", "opacity":1});

				pageDelay = 2300;
			}

			guageMotion(4,22);

			break;
		}
		case 27:
		{
			featureIndex = 25;

			bgNumber = 7;
			if(oldShowPage < idx)
			{
				if(!$(".indicator_wrap").hasClass("type2"))
					$(".indicator_wrap").addClass("type2");

				if(!$(".header_wrap").hasClass("type2"))
					$(".header_wrap").addClass("type2");

				$(".f5_1 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f5_1 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});

				$(".f5_1 .ico_wrap.type1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f5_1 .ico_wrap.line").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f5_1 .ico_wrap.type2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});


				$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*25) + "px"});
				$(".bg_cont .bg.dot_map img").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "transform":"scale(1.0) translate(0vw, 0vw)", "-webkit-transform":"scale(1.0) translate(0vw, 0vw)"});
				number29_1 = setTimeout(function(){
					for (var i = 0;i < $(".f5_2 .dot").length ;i++ )
					{
						$(".f5_2 .dot").eq(i).css({"transition":"all 300ms " + (i * 10) + "ms", "-webkit-transition":"all 300ms " + (i * 10) + "ms", "opacity":1});
					}

					$(".f5_2 .click_ico").eq(0).css({"transition":"all 300ms 300ms", "-webkit-transition":"all 300ms 300ms", "opacity":1});
					$(".f5_2 .click_ico").eq(1).css({"transition":"all 300ms 400ms", "-webkit-transition":"all 300ms 400ms", "opacity":1});
					$(".f5_2 .click_ico").eq(2).css({"transition":"all 300ms 500ms", "-webkit-transition":"all 300ms 500ms", "opacity":1});
					$(".f5_2 .click_ico").eq(3).css({"transition":"all 300ms 600ms", "-webkit-transition":"all 300ms 600ms", "opacity":1});
					$(".f5_2 .click_ico").eq(4).css({"transition":"all 300ms 700ms", "-webkit-transition":"all 300ms 700ms", "opacity":1});
					$(".f5_2 .click_ico").eq(5).css({"transition":"all 300ms 800ms", "-webkit-transition":"all 300ms 800ms", "opacity":1});

					$(".f5_2 .txt .title").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
					$(".f5_2 .txt .desc").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
					$(".f5_2 .swipe_m").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
				},800);

				pageDelay = 1900;
			}else{
				clearInterval(endingInterval);
				$(".f5_3 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f5_3 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f5_3 .txt .btn_wrap a").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".tile_cont").css({"transform":"", "-webkit-transform":"", "transition":"", "-webkit-transition":"", "z-index":1, "display":"block"});
				number29_2 = setTimeout(function(){
					$(".tile_cont .tile_cont_inner .tile").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "transform":"", "-webkit-transform":"", "opacity":1});
				},300);

				number29_3 = setTimeout(function(){
					$(".indicator_wrap").addClass("type2");
					$(".header_wrap").addClass("type2");

					$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*25) + "px"});
					$(".bg_cont .bg").eq(8).css("opacity",1);
					$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*7) + "px"});

					$(".tile_cont").css({"transform":"", "-webkit-transform":"", "transition":"", "-webkit-transition":"", "z-index":0, "display":"none"});

					$(".bg_cont .bg.dot_map img").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "transform":"scale(1.0) translate(0vw, 0vw)", "-webkit-transform":"scale(1.0) translate(0vw, 0vw)", "opacity":1});
					$(".f5_2 .map_area").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "transform":"scale(1.0) translate(0vw, 0vw)", "-webkit-transform":"scale(1.0) translate(0vw, 0vw)", "opacity":1});
					swipeMove = 0;
					swipeMoving = 0;

					number29_4 = setTimeout(function(){
						for (var i = 0;i < $(".f5_2 .dot").length ;i++ )
						{
							$(".f5_2 .dot").eq(i).css({"transition":"all 300ms " + (i * 50) + "ms", "-webkit-transition":"all 300ms " + (i * 50) + "ms", "opacity":1});
						}

						$(".f5_2 .click_ico").eq(0).css({"transition":"all 300ms 300ms", "-webkit-transition":"all 300ms 300ms", "opacity":1});
						$(".f5_2 .click_ico").eq(1).css({"transition":"all 300ms 400ms", "-webkit-transition":"all 300ms 400ms", "opacity":1});
						$(".f5_2 .click_ico").eq(2).css({"transition":"all 300ms 500ms", "-webkit-transition":"all 300ms 500ms", "opacity":1});
						$(".f5_2 .click_ico").eq(3).css({"transition":"all 300ms 600ms", "-webkit-transition":"all 300ms 600ms", "opacity":1});
						$(".f5_2 .click_ico").eq(4).css({"transition":"all 300ms 700ms", "-webkit-transition":"all 300ms 700ms", "opacity":1});
						$(".f5_2 .click_ico").eq(5).css({"transition":"all 300ms 800ms", "-webkit-transition":"all 300ms 800ms", "opacity":1});

						$(".f5_2 .txt .title").css({"transition":"all 0.5s 1.0s", "-webkit-transition":"all 0.5s 1.0s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
						$(".f5_2 .txt .desc").css({"transition":"all 0.5s 1.0s", "-webkit-transition":"all 0.5s 1.0s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
						$(".f5_2 .swipe_m").css({"transition":"all 0.5s 1.0s", "-webkit-transition":"all 0.5s 1.0s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});

						
					},500);
				},800);

				pageDelay = 2800;
			}

			guageMotion(4,23);
			break;
		}case 28:
		{
			featureIndex = 26;

			bgNumber = 8;

			$(".f5_2 .location_popup .lo_popup_close a").trigger("click");


			$(".f5_2 .dot").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
			$(".f5_2 .click_ico").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
			$(".f5_2 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
			$(".f5_2 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
			$(".f5_2 .swipe_m").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});

			$(".bg_cont .bg.dot_map img").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
			$(".tile_cont .tile_cont_inner .tile").css({"opacity":1});
			$(".m_vw .tile_cont .tile_cont_inner").css({"background":"url('./images/panel_white.jpg') repeat left top"});
			$(".bg_cont .bg").eq(9).css("opacity",1);
			$(".f5_3 .txt").css("opacity",1);
			number30_1 = setTimeout(function(){

				$(".tile_cont").css({"transform":"", "-webkit-transform":"", "transition":"", "-webkit-transition":"", "z-index":1, "display":"block"});
				$(".m_vw .bg_cont .forest .m_bg_img").css({"opacity":1});
				$(".m_vw .bg_cont .forest .m_bg_img img").eq(0).css({"opacity":1});
				number30_2 = setTimeout(function(){
					$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*8) + "px"});
					$(".tile_cont").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "transform":"", "-webkit-transform":"", "opacity":0});
					number30_4 = setTimeout(function(){
						$(".indicator_wrap").removeClass("type2");
						$(".header_wrap").removeClass("type2");
						$(".tile_cont").css({"display":"none"});
						if (endingInterval != "")
						{
							clearInterval(endingInterval);
							endingInterval = "";
						}
						endingInterval = setInterval(endingMotion,3000);
					},700);
					number30_3 = setTimeout(function(){

						$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*26) + "px"});


						$(".f5_3 .txt .title").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
						$(".f5_3 .txt .desc").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
						$(".f5_3 .txt .btn_wrap a").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "transform":"scale(1.0)", "-webkit-transform":"scale(1.0)", "opacity":1});
					},1400);
				}, 200);
			},300);

			pageDelay = 3200;


			guageMotion(5,24);
			break;
		}
		default:
		{
			fullDelta = 30 * baseDelta;
		}
	}

	if (autoPass_Able)
	{
		pageDelay = 1000;
	}else{
		pageDelay = pageDelay + 200;
	}
	
	pageTracking("");

	delayTimeout = setTimeout(function(){
		scrollIng = false;

		pageInteraction_Able = true;

		$('#wrap_m').stop().animate({"scrollTop":"0px"},300);
	},pageDelay);
	console.log("oldShowPage : " + oldShowPage + " // showPage : " + idx + "// pageDelay : " + pageDelay);
	oldShowPage = idx;
}

var endingInterval = "";
var endingNum = 0;
function endingMotion()
{
	++endingNum;
	if (endingNum % 3 == 1)
	{
		$(".m_vw .bg_cont .forest .m_bg_img img").eq(1).animate({"opacity":1});
	}else if (endingNum % 3 == 2)
	{
		$(".m_vw .bg_cont .forest .m_bg_img img").eq(2).animate({"opacity":1});
	}else{
		$(".m_vw .bg_cont .forest .m_bg_img img").eq(0).css({"opacity":1});
		$(".m_vw .bg_cont .forest .m_bg_img img").eq(1).css({"opacity":0});
		$(".m_vw .bg_cont .forest .m_bg_img img").eq(2).animate({"opacity":0});
	}
}