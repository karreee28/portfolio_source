var earthM = 0;
function earthText_Motion()
{
	++earthM;
	if (earthM % 2 == 0)
	{
		$(".f2_2 .txt .mid_txt").eq(0).css({"transition":"", "-webkit-transition":"", "transform":"translate(-300px, 0px) scale(0.3)", "-webkit-transform":"translate(-300px, 0px) scale(0.3)", "opacity":0});
		setTimeout(function(){
			$(".f2_2 .txt .mid_txt").eq(0).css({"transition":"all 1s", "-webkit-transition":"all 1s", "transform":"translate(0px, 0px) scale(1.0)", "-webkit-transform":"translate(0px, 0px) scale(1.0)", "opacity":1});
			$(".f2_2 .txt .mid_txt").eq(1).css({"transition":"all 1s", "-webkit-transition":"all 1s", "transform":"translate(300px, 0px) scale(0.3)", "-webkit-transform":"translate(300px, 0px) scale(0.3)", "opacity":0});
		},100);
	}else{
		$(".f2_2 .txt .mid_txt").eq(1).css({"transition":"", "-webkit-transition":"", "transform":"translate(-300px, 0px) scale(0.3)", "-webkit-transform":"translate(-300px, 0px) scale(0.3)", "opacity":0});
		setTimeout(function(){
			$(".f2_2 .txt .mid_txt").eq(0).css({"transition":"all 1s", "-webkit-transition":"all 1s", "transform":"translate(300px, 0px) scale(0.3)", "-webkit-transform":"translate(300px, 0px) scale(0.3)", "opacity":0});
			$(".f2_2 .txt .mid_txt").eq(1).css({"transition":"all 1s", "-webkit-transition":"all 1s", "transform":"translate(0px, 0px) scale(1.0)", "-webkit-transform":"translate(0px, 0px) scale(1.0)", "opacity":1});
		},100);
	}
}

var oldShowPage = 0;
var pageDelay = 500;
var viewContent = 0;
var bgNumber = 0;


var number00_0 = "";

var number00_1 = "";
var number00_2 = "";
var number01_1 = "";
var number01_2 = "";
var number01_3 = "";
var number01_4 = "";
var number01_5 = "";
var number02_1 = "";
var number02_2 = "";
var number02_3 = "";
var number03_1 = "";
var number03_2 = "";
var number04_0 = "";
var number04_1 = "";
var number05_1 = "";
var number05_2 = "";
var number06_1 = "";
var number07_1 = "";
var number07_2 = "";
var number07_3 = "";
var number07_4 = "";
var number07_5 = "";
var number08_1 = "";
var number08_2 = "";
var number08_3 = "";
var number08_4 = "";
var number08_5 = "";
var number09_1 = "";
var number09_2 = "";
var number09_3 = "";
var number09_4 = "";
var number12_1 = "";
var number12_2 = "";
var number13_1 = "";
var number13_2 = "";
var number14_1 = "";
var number14_2 = "";
var number15_1 = "";
var number15_2 = "";
var number15_3 = "";
var number16_1 = "";
var number16_2 = "";
var number17_1 = "";
var number17_2 = "";
var number17_3 = "";
var number17_4 = "";
var number18_1 = "";
var number18_2 = "";
var number18_3 = "";
var number18_4 = "";
var number19_1 = "";
var number19_2 = "";
var number19_3 = "";
var number19_4 = "";
var number20_1 = "";
var number20_2 = "";
var number20_3 = "";
var number21_1 = "";
var number21_2 = "";
var number21_3 = "";
var number21_4 = "";
var number22_1 = "";
var number22_2 = "";
var number22_3 = "";
var number22_4 = "";
var number23_1 = "";
var number23_2 = "";
var number27_1 = "";
var number28_1 = "";
var number29_1 = "";
var number29_2 = "";
var number29_3 = "";
var number29_4 = "";
var number30_1 = "";
var number30_2 = "";
var number30_3 = "";
var number30_4 = "";

var featureIndex = 0;
var startPosition = true;

var nowShowPage = 0;
function showPage(idx)
{
	nowShowPage = idx;
	pageShowIndex = idx;

	console.log("showPage idx : " + idx);


	clearTimeout(delayTimeout);
	pageDelay = 1000;
	startPosition = false;
	timeoutClear();
	
	if ($("body").hasClass("m_vw"))
	{
		mobileOpenLayer_reset();
	}

	if (idx > 0)
	{
		$(".indicator_wrap .scroll_img").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});
		$(".indicator_wrap .keyboard_img .keyboard_img_txt").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});
		$(".m_scroll_img").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});
		setTimeout(function(){
			$(".indicator_wrap .scroll_img").css({"display":"none"});
			$(".indicator_wrap .keyboard_img .keyboard_img_txt").css({"display":"none"});
			$(".m_scroll_img").css({"display":"none"});
		},500);
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

			var sunP = (sunTop / 2) + (windowHeight * 0.32);
			if ($("body").hasClass("m_size"))
			{
				sunTop = Math.abs(parseInt($(".inter_cont .sun img").css("margin-top")));
				sunP = (sunTop / 2) + (windowHeight * 0.28);
			}else{
				if ($(window).outerHeight() > 960 && $(window).outerHeight() < 1080)
				{
					sunP = (sunTop / 2) + (windowHeight * 0.32);
				}else if ($(window).outerWidth() < 1024)
				{
					sunTop = Math.abs(parseInt($(".inter_cont .sun img").css("margin-top")));
					sunP = (sunTop / 2) + (windowHeight * 0.28);
				}else if ($(window).outerWidth() < 1440)
				{
					sunTop = windowHeight * 0.7916;
					sunP = 425 + (windowHeight * 0.32) - ((1920 - $(window).outerWidth()) / 1920 * ($(window).outerWidth() * 0.8333) * 0.5);
				}else if ($(window).outerWidth() < 1920)
				{
					sunTop = windowHeight * 0.7916;
					sunP = 425 + (windowHeight * 0.32) - ((1920 - $(window).outerWidth()) / 1920 * ($(window).outerWidth() * 0.8333) * 0.4);
				}else{
					sunTop = Math.abs(parseInt($(".inter_cont .sun img").css("margin-top")));
					sunP = (sunTop / 2) + (windowHeight * 0.32);
				}
			}

			console.log("showPage");
			$(".inter_cont .sun img").css({"transition":"all 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)","-webkit-transition":"all 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)","transform":"scale(2.0) translate(0px, " + sunP + "px)", "-webkit-transform":"scale(2.0) translate(0px, " + sunP + "px)"});
			
			number00_1 = setTimeout(function(){
				$(".f1_1 .txt").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "transform":"translate(0px,0px)", "-webkit-transform":"translate(0px,0px)"});
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
			featureIndex = 1;
			bgNumber = 0;
			viewContent = 1;
			if(oldShowPage < idx)
			{
				$(".f1_1 .txt").css({"transition":"all 0.1s 0.3s", "-webkit-transition":"all 0.1s 0.3s", "transform":"", "-webkit-transform":""});
				$(".f1_1 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s", "opacity":0});
				$(".f1_1 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s", "opacity":0});


				$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*1) + "px"});
				$(".graph_obj").css("opacity",1);
				$(".obj_graph .obj_graph").css({"transition":"","-webkit-transition":"","left":"0%","bottom":"0%"});				
				$(".inter_cont .sun img").css({"transition":"all 0.5s 0.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)","-webkit-transition":"all 0.5s 0.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)","transform":"scale(2.0) translate(0px, 0px)","-webkit-transform":"scale(2.0) translate(0px, 0px)"});


				number01_2 = setTimeout(function(){
					$(".graph_obj .obj_graph .val .dot").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});

					$(".f1_2 .txt .title").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f1_2 .txt .desc").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					
					$(".inter_cont .sun img").css({"transition":"all 0.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)","-webkit-transition":"all 0.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)","transform":"scale(0.6) translate(0px, 0px)","-webkit-transform":"scale(0.6) translate(0px, 0px)"});

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

					$(".inter_cont .sun img").css({"transition":"all 0.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)","-webkit-transition":"all 0.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)"," transform":"scale(0.6) translate(0px, 0px)", "-webkit-transform":"scale(0.6) translate(0px, 0px)"});



					number01_5 = setTimeout(function(){
						$(".f1_2 .txt .title").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
						$(".f1_2 .txt .desc").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});

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
			featureIndex = 1;
			bgNumber = 0;
			viewContent = 1;
			if(oldShowPage < idx)
			{
				$(".graph_obj .obj_graph .val .num").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".graph_obj .obj_graph .val .val_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				
				$(".graph_obj .obj_graph").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s","left":"-100%","bottom":"-100%"});

				$(".graph_obj .obj_graph .val3 .num").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","opacity":1});
				$(".graph_obj .obj_graph .val3 .val_txt").css({"transition":"all 0.5s 1.0s","-webkit-transition":"all 0.5s 1.0s","opacity":1});

				$(".feature_cont").css({"transition":"margin-top 0.5s","-webkit-transition":"margin-top 0.5s","margin-top":-(windowHeight*1) + "px"});

				pageDelay = 1500;
			}else{
				$(".f2_1 .txt").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":""});
				$(".f2_1 .txt .title ").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s", "opacity":0});
				$(".f2_1 .txt .desc ").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s", "opacity":0});
				var sunMargin_Left = parseInt($(".inter_cont .sun .flame").css("margin-left")) + (windowWidth/3);
				var sunMargin_Top = parseInt($(".inter_cont .sun .flame").css("margin-top")) - (windowHeight/4);
				$(".inter_cont .sun img").css({"transition":"","-webkit-transition":"","transform":"scale(0) translate(0px,0px)","-webkit-transform":"scale(0) translate(0px,0px)", "margin-left":sunMargin_Left + "px", "margin-top":sunMargin_Top + "px"});

				$(".graph_obj").css("opacity",1);
				$(".graph_obj .obj_graph").css({"transition":"","-webkit-transition":"","left":"-100%","bottom":"-100%"});

				var mTop = windowHeight / 2 - 423;
				$(".inter_cont .sun").css("display","block");
				setTimeout(function(){
					if ($("body").hasClass("InternetExplorer"))
					{
						if ($(window).outerWidth() > 1920)
						{
							$(".inter_cont .sun img").css({"transition":"all 1.5s 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)","-webkit-transition":"all 1.5s 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)","transform":"scale(0.6) translate(0px, 0px)","-webkit-transform":"scale(0.6) translate(0px, 0px)", "margin-left": "-800px", "margin-top": "-855px"});
						}else if ($(window).outerWidth() > 1024)
						{
							var sunLeft = $(window).outerWidth() * 0.4166;
							var sunTop = $(window).outerWidth() * 0.4453;
							$(".inter_cont .sun img").css({"transition":"all 1.5s 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)","-webkit-transition":"all 1.5s 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)","transform":"scale(0.6) translate(0px, 0px)","-webkit-transform":"scale(0.6) translate(0px, 0px)", "margin-left": -sunLeft + "px", "margin-top": -sunTop + "px"});
						}else
						{
							$(".inter_cont .sun img").css({"transition":"all 1.5s 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)","-webkit-transition":"all 1.5s 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)","transform":"scale(0.6) translate(0px, 0px)","-webkit-transform":"scale(0.6) translate(0px, 0px)", "margin-left": "-426.5px", "margin-top": "-456px"});
						}

						if ($("body").hasClass("m_header") || $("body").hasClass("m_size"))
							$(".inter_cont .sun img").css({"transition":"all 1.5s 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)","-webkit-transition":"all 1.5s 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)","transform":"scale(0.6) translate(0px, 0px)","-webkit-transform":"scale(0.6) translate(0px, 0px)", "margin-left": "-426.5px", "margin-top": "-456px"});

					}else{
						$(".inter_cont .sun img").css({"transition":"all 1.5s 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)","-webkit-transition":"all 1.5s 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)","transform":"scale(0.6) translate(0px, 0px)","-webkit-transform":"scale(0.6) translate(0px, 0px)", "margin-left":"","margin-top":""});
					}
				},100);
				$(".inter_cont .earth img").css({"transition":"all 1.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)", "-webkit-transition":"all 1.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)", "transform":"","-webkit-transform":""});

				//clearInterval(sunFlameMotion);
				$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*1) + "px"});

				number02_2 = setTimeout(function(){
					$(".f1_2 .txt .title").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f1_2 .txt .desc").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});

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
				$(".f2_1 .txt .desc").css({"display":"block","opacity":0});
				
				//$(".inter_cont .sun .flame").css("margin-left", $(".inter_cont .sun .flame").css("margin-left"));
				//$(".inter_cont .sun .flame").css("margin-top", $(".inter_cont .sun .flame").css("margin-top"));
				number03_1 = setTimeout(function(){
					//clearInterval(sunFlameMotion);
					sunPlear_Able = false;
					$(".feature_cont").css({"transition":"margin-top 0.5s","-webkit-transition":"margin-top 0.5s","margin-top":-(windowHeight*2) + "px"});
					
					var sunMargin_Left = parseInt($(".inter_cont .sun .flame").css("margin-left")) + (windowWidth/3);
					var sunMargin_Top = parseInt($(".inter_cont .sun .flame").css("margin-top")) - (windowHeight/4);
					console.log("sunMargin_Left : " + sunMargin_Left + ", sunMargin_Top : " + sunMargin_Top);
					sunMargin_Left = (sunMargin_Left * 2);
					$(".inter_cont .sun img").css({"transition":"all 0.8s cubic-bezier(0.060, 0.475, 0.015, 1.000)","-webkit-transition":"all 0.8s cubic-bezier(0.060, 0.475, 0.015, 1.000)","transform":"scale(0) translate(0px,0px)","-webkit-transform":"scale(0) translate(0px,0px)", "margin-left":sunMargin_Left + "px", "margin-top":sunMargin_Top + "px"});

					$(".inter_cont .earth img").css({"transition":"all 2.5s 0.7s cubic-bezier(0.000, 0.990, 0.355, 1.000)", "-webkit-transition":"all 2.5s 0.7s cubic-bezier(0.000, 0.990, 0.355, 1.000)", "transform":"scale(1.0) translate(0px, 0px)", "-webkit-transform":"scale(1.0) translate(0px, 0px)"});
					
					
					$(".f2_1 .txt .title ").css({"transition":"all 0.5s 2.3s", "-webkit-transition":"all 0.5s 2.3s", "opacity":1});
					$(".f2_1 .txt").css({"transition":"transform 0.5s 3.3s","-webkit-transition":"transform 0.5s 3.3s","transform":"translate(0px,0px)","-webkit-transform":"translate(0px,0px)"});
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
				number03_2 = setTimeout(function(){
					$(".inter_cont .earth img").css({"transition":"all 1s cubic-bezier(0.040, 0.620, 0.170, 0.995)", "-webkit-transition":"all 1s cubic-bezier(0.040, 0.620, 0.170, 0.995)", "transform":"scale(1.0) translate(0px, 0px)", "-webkit-transform":"scale(1.0) translate(0px, 0px)"});

					$(".feature_cont").css({"transition":"margin-top 0.3s","-webkit-transition":"margin-top 0.3s","margin-top":-(windowHeight*2) + "px"});
					$(".bg_cont").css({"margin-top":"0px"});

					$(".f2_1 .txt").css({"transition":"all 0.5s 0.3s","-webkit-transition":"all 0.5s 0.3s","transform":"translate(0px,px)","-webkit-transform":"translate(0px,0px)", "opacity":1});
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
			if(oldShowPage < idx)
			{
				$(".inter_cont .sun").css("display","none");

				featureIndex = 3;
				$(".f2_1 .txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":"0"});

				bgNumber = 0;

				$(".bg_cont .bg.earth").css("opacity",1);
				$(".f2_2 .txt .mid_txt").eq(0).css({"transition":"","-webkit-transition":"", "opacity":0});

				viewContent = 3;
				$(".f2_2 .txt .title").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
				$(".f2_2 .txt .desc").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
				$(".f2_2 .txt .midText1").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","opacity":1});
				

				var earthScale = 0;
				if (windowWidth < 1920)
				{
					earthScale = (windowWidth * 0.2713 * 1.568) / $(".inter_cont .earth img").outerWidth();
				}else{
					earthScale = (1920 * 0.2713 * 1.568) / $(".inter_cont .earth img").outerWidth();
				}

				if ($("body").hasClass("m_header") || $("body").hasClass("m_size"))
					earthScale = (1024 * 0.2713 * 1.568) / $(".inter_cont .earth img").outerWidth();

				console.log("earthScale : " + earthScale);
				$(".inter_cont .earth img").css({"transition":"all 1s cubic-bezier(0.040, 0.620, 0.170, 0.995)", "-webkit-transition":"all 1s cubic-bezier(0.040, 0.620, 0.170, 0.995)", "transform":"scale(" + earthScale + ") translate(0px, 0px)", "-webkit-transform":"scale(" + earthScale + ") translate(0px, 0px)"});

				

				number04_1 = setTimeout(function()
				{
					$(".inter_cont .earth .type2").css({"transition":"0.1s","-webkit-transition":"0.1s","opacity":1});
					$(".inter_cont .earth img.type1").css({"transition":"0.5s","-webkit-transition":"0.5s","opacity":0});
				},1000);
			

				$(".feature_cont").css({"transition":"margin-top 0.3s 0.3s","-webkit-transition":"margin-top 0.3s 0.3s","margin-top":-(windowHeight*3) + "px"});

				pageDelay = 1300;
			}else{
				earthVideo_In.pause();
				earthVideo_Out.pause();
				$(".inter_cont .earth").css({"transition":"","-webkit-transition":"","opacity":1});
				var earthScale = 0;
				if (windowWidth < 1920)
				{
					earthScale = (windowWidth * 0.2713 * 1.568) / $(".inter_cont .earth img").outerWidth();
				}else{
					earthScale = (1920 * 0.2713 * 1.568) / $(".inter_cont .earth img").outerWidth();
				}

				if ($("body").hasClass("m_header") || $("body").hasClass("m_size"))
					earthScale = (1024 * 0.2713 * 1.568) / $(".inter_cont .earth img").outerWidth();

				$(".inter_cont .earth img").css({"transition":"", "-webkit-transition":"", "transform":"scale(" + earthScale + ") translate(0px, 0px)", "-webkit-transform":"scale(" + earthScale + ") translate(0px, 0px)"});

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
					$(".f2_2 .txt .title").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f2_2 .txt .desc").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
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
			if(oldShowPage < idx)
			{
				earthM = 0;
				clearInterval(number04_0);
				number04_0 = "";
				$(".bg_cont .bg.earth .earth_txt_wrap").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});
				$(".f2_2 .txt .title").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","transform":"translate(0px,0px)","opacity":0});
				$(".f2_2 .txt .desc").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","transform":"translate(0px,0px)","opacity":0});
				$(".f2_2 .txt .mid_txt").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0, "transform":"", "-webkit-transform":""});

				$(".inter_cont .earth_movie").css({"transition":"","-webkit-transition":"","opacity":1});

				number05_1 = setTimeout(function(){
					animationAble = false;
					/*playMovie_EarthPosition();*/
					earthVideo_In.currentTime = 0;
					$(".inter_cont .movie .earth_movie .vCover").css({"display":"block","opacity":1});
					playEarth('in');
				},500);

				pageDelay = 10000;
			}else{
				$(".f2_4_line").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","width":"0px"});
				$(".f2_4 .obj").find(".year").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f2_4 .obj").find(".year_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

				$(".inter_cont .earth_movie").css({"transition":"","-webkit-transition":"","opacity":1});
				number05_2 = setTimeout(function(){
					$(".inter_cont .movie .earth_movie .vCover").css({"display":"block","opacity":1});
					earthVideo_Out.currentTime = 0;
					playEarth('out');
				},300);

				pageDelay = 10000;
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
				earthVideo_In.pause();
				earthVideo_Out.pause();
				$(".inter_cont .earth").css({"transition":"","-webkit-transition":"","opacity":0});
				$(".inter_cont .earth_movie").css({"transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","opacity":0});
				$(".inter_cont .earth_movie .earth_out").animate({"opacity":0});
				$(".inter_cont .earth_movie .earth_in").animate({"opacity":0},function(){
					$(this).css({"display":"none"});
					$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*5) + "px"});

					$(".bg_cont .panel_field_far .panel_field").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.0)", "-webkit-transform":"scale(1.0)", "opacity":0});
					$(".bg_cont .panel_field_far .panel_field_blur").css({"transition":"", "-webkit-transition":"", "opacity":0})
					for (var i = 0;i < $(".bg_cont .bg").length ; i++)
					{
						if(i == 2)
							$(".bg_cont .bg").eq(i).css("opacity",1);
						else
							$(".bg_cont .bg").eq(i).css("opacity",0);
					}

					$(".f2_4_line").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","width":"3500px", "opacity":1});
					$(".f2_4 .obj").eq(2).find(".year").css({"transition":"all 0.5s 1.0s cubic-bezier(0.215, 0.610, 0.355, 1.000)","-webkit-transition":"all 0.5s 1.0s cubic-bezier(0.215, 0.610, 0.355, 1.000)","transform":"translate(0px, 0px) scale(1.0)","-webkit-transform":"translate(0px, 0px) scale(1.0)","opacity":1});
					$(".f2_4 .obj").eq(2).find(".year_txt").css({"transition":"all 0.5s 1.1s","-webkit-transition":"all 0.5s 1.1s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f2_4 .obj").eq(1).find(".year").css({"transition":"all 0.5s 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000)","-webkit-transition":"all 0.5s 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000)","transform":"translate(0px, 0px) scale(1.0)","-webkit-transform":"translate(0px, 0px) scale(1.0)","opacity":1});
					$(".f2_4 .obj").eq(1).find(".year_txt").css({"transition":"all 0.5s 1.3s","-webkit-transition":"all 0.5s 1.3s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f2_4 .obj").eq(0).find(".year").css({"transition":"all 0.5s 1.4s cubic-bezier(0.215, 0.610, 0.355, 1.000)","-webkit-transition":"all 0.5s 1.4s cubic-bezier(0.215, 0.610, 0.355, 1.000)","transform":"translate(0px, 0px) scale(1.0)","-webkit-transform":"translate(0px, 0px) scale(1.0)","opacity":1});
					$(".f2_4 .obj").eq(0).find(".year_txt").css({"transition":"all 0.5s 1.5s","-webkit-transition":"all 0.5s 1.5s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});

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

					$(".f2_4_line").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","width":"3500px", "opacity":1});

					$(".f2_4 .obj").eq(2).find(".year").css({"transition":"all 0.5s 1.0s cubic-bezier(0.215, 0.610, 0.355, 1.000)","-webkit-transition":"all 0.5s 1.0s cubic-bezier(0.215, 0.610, 0.355, 1.000)","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f2_4 .obj").eq(2).find(".year_txt").css({"transition":"all 0.5s 1.1s","-webkit-transition":"all 0.5s 1.1s","opacity":1});
					$(".f2_4 .obj").eq(1).find(".year").css({"transition":"all 0.5s 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000)","-webkit-transition":"all 0.5s 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000)","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f2_4 .obj").eq(1).find(".year_txt").css({"transition":"all 0.5s 1.3s","-webkit-transition":"all 0.5s 1.3s","opacity":1});
					$(".f2_4 .obj").eq(0).find(".year").css({"transition":"all 0.5s 1.4s cubic-bezier(0.215, 0.610, 0.355, 1.000)","-webkit-transition":"all 0.5s 1.4s cubic-bezier(0.215, 0.610, 0.355, 1.000)","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f2_4 .obj").eq(0).find(".year_txt").css({"transition":"all 0.5s 1.5s","-webkit-transition":"all 0.5s 1.5s","opacity":1});
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
				$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*6) + "px"});

				$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.3s 0.3s", "-webkit-transition":"all 0.3s 0.3s", "transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)", "-webkit-transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)", "opacity":1});
				$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.3s 0.3s", "-webkit-transition":"all 0.3s 0.3s", "transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)", "-webkit-transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)", "opacity":1});
				
				setTimeout(function(){
					$(".inter_cont .panel .panel_obj1 img").eq(0).css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
					$(".inter_cont .panel .panel_obj1 img").eq(1).css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":1});
					$(".inter_cont .panel .panel_obj2 img").eq(0).css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
					$(".inter_cont .panel .panel_obj2 img").eq(1).css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":1});
				},300);

				number07_1 = setTimeout(function(){
					

					$(".f3_2 .txt").css({"opacity":1, "display":"block"});
					$(".f3_2 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".f3_2 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					if ($("body").hasClass("m_header"))
					{
						$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "-webkit-transition":"all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "margin-left":$(".f3_2 .obj1").css("margin-left"), "margin-top":(parseInt($(".f3_2 .obj1").css("margin-top")) + 30) +  "px", "transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)", "-webkit-transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)"});
						$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "-webkit-transition":"all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "margin-left":$(".f3_2 .obj2").css("margin-left"), "margin-top":(parseInt($(".f3_2 .obj2").css("margin-top")) + 30) +  "px", "transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)", "-webkit-transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)"});
					}else{
						$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "-webkit-transition":"all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "margin-left":$(".f3_2 .obj1").css("margin-left"), "margin-top":(parseInt($(".f3_2 .obj1").css("margin-top")) - 50) +  "px", "transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)", "-webkit-transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)"});
						$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "-webkit-transition":"all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "margin-left":$(".f3_2 .obj2").css("margin-left"), "margin-top":(parseInt($(".f3_2 .obj2").css("margin-top")) - 50) +  "px", "transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)", "-webkit-transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)"});
					}

					number07_2 = setTimeout(function(){
						$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.3s 0.2s", "-webkit-transition":"all 0.3s 0.2s", "opacity":0});
						$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.3s 0.2s", "-webkit-transition":"all 0.3s 0.2s", "opacity":0});

						$(".f3_2 .obj .obj_inner").css({"transition":"all 0.3s 0.2s", "-webkit-transition":"all 0.3s 0.2s", "opacity":1});
					},500);

					$(".f3_2 .obj1 .obj_inner .panel_obj3").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .panel_obj1").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .panel_obj2").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});

					$(".f3_2 .obj2 .obj_inner .panel_obj3").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "opacity":1});
					$(".f3_2 .obj2 .obj_inner .panel_obj2").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});

					$(".f3_2 .obj1 .obj_inner .panel_obj4").css({"transition":"all 0.3s 1.1s", "-webkit-transition":"all 0.3s 1.1s", "opacity":1});
					$(".f3_2 .obj2 .obj_inner .panel_obj4").css({"transition":"all 0.3s 1.1s", "-webkit-transition":"all 0.3s 1.1s", "opacity":1});

					$(".f3_2 .obj .obj_inner .obj_title").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "opacity":1});



					$(".f3_2 .obj1 .obj_inner .obj_txt1").css({"transition":"all 0.3s 1.2s", "-webkit-transition":"all 0.3s 1.2s", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .obj_txt2").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .obj_txt3").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .obj_txt4").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});

					$(".f3_2 .obj2 .obj_inner .obj_txt3").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});
					$(".f3_2 .obj2 .obj_inner .obj_txt4").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});
				},600);

				pageDelay = 1500;

			}else{
				logoColor_Able = true;

				$(".f2_4_line").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","width":"0px"});
				$(".f2_4 .obj").find(".year").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f2_4 .obj").find(".year_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

				$(".inter_cont .panel .panel_obj1 img").eq(0).css({"transition":"", "-webkit-transition":"", "opacity":0});
				$(".inter_cont .panel .panel_obj1 img").eq(1).css({"transition":"", "-webkit-transition":"", "opacity":1});
				$(".inter_cont .panel .panel_obj2 img").eq(0).css({"transition":"", "-webkit-transition":"", "opacity":0});
				$(".inter_cont .panel .panel_obj2 img").eq(1).css({"transition":"", "-webkit-transition":"", "opacity":1});

				$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*6) + "px"});

				$(".bg_cont .panel_field_far .panel_field").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "transform":"scale(1.5)", "-webkit-transform":"scale(1.5)", "opacity":1});
				$(".bg_cont .panel_field_far .panel_field_blur").css({"transition":"all 0.3s 0.6s", "-webkit-transition":"all 0.3s 0.6s", "opacity":1});

				$(".inter_cont .panel").css({"transition":"all 0.3s 1.1s","-webkit-transition":"all 0.3s 1.1s","opacity":1});
				$(".inter_cont .panel .panel_obj").css({"transition":"all 0.3s 1.1s","-webkit-transition":"all 0.3s 1.1s","opacity":1});
				number07_3 = setTimeout(function(){
					if ($("body").hasClass("m_vw") || $("body").hasClass("m_size"))
					{
						logoColor_Able = true;
					}

					$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","transform":"perspective(" + positinoSize(406) + ") rotate3d(1, 1, 0, 0deg) scale(1.0)", "-webkit-transform":"perspective(" + positinoSize(406) + ") rotate3d(1, 1, 0, 0deg) scale(1.0)"});
					$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","transform":"perspective(" + positinoSize(406) + ") rotate3d(1, 1, 0, 0deg) scale(1.0)", "-webkit-transform":"perspective(" + positinoSize(406) + ") rotate3d(1, 1, 0, 0deg) scale(1.0)"});
				},1400);
				

				number07_4 = setTimeout(function(){
					
					$(".f3_2 .txt").css({"opacity":1, "display":"block"});
					$(".f3_2 .txt .desc p").css({"opacity":1, "display":"block"});
					$(".f3_2 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".f3_2 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});

					if ($("body").hasClass("m_header"))
					{
						$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "-webkit-transition":"all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "margin-left":$(".f3_2 .obj1").css("margin-left"), "margin-top":(parseInt($(".f3_2 .obj1").css("margin-top")) + 30) +  "px", "transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)", "-webkit-transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)"});
						$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "-webkit-transition":"all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "margin-left":$(".f3_2 .obj2").css("margin-left"), "margin-top":(parseInt($(".f3_2 .obj2").css("margin-top")) + 30) +  "px", "transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)", "-webkit-transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)"});
					}else{
						$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "-webkit-transition":"all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "margin-left":$(".f3_2 .obj1").css("margin-left"), "margin-top":(parseInt($(".f3_2 .obj1").css("margin-top")) - 50) +  "px", "transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)", "-webkit-transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)"});
						$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "-webkit-transition":"all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "margin-left":$(".f3_2 .obj2").css("margin-left"), "margin-top":(parseInt($(".f3_2 .obj2").css("margin-top")) - 50) +  "px", "transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)", "-webkit-transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)"});
					}
					

					number07_5 = setTimeout(function(){
						$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":0});
						$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":0});
						$(".f3_2 .obj1 .obj_inner").css({"transition":"all 0.1s","-webkit-transition":"all 0.1s","opacity":1});
						$(".f3_2 .obj2 .obj_inner").css({"transition":"all 0.1s","-webkit-transition":"all 0.1s","opacity":1});
					},500);

					$(".f3_2 .obj1 .obj_inner .panel_obj3").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .panel_obj1").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .panel_obj2").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});

					$(".f3_2 .obj2 .obj_inner .panel_obj3").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "opacity":1});
					$(".f3_2 .obj2 .obj_inner .panel_obj2").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});

					$(".f3_2 .obj1 .obj_inner .panel_obj4").css({"transition":"all 0.3s 1.1s", "-webkit-transition":"all 0.3s 1.1s", "opacity":1});
					$(".f3_2 .obj2 .obj_inner .panel_obj4").css({"transition":"all 0.3s 1.1s", "-webkit-transition":"all 0.3s 1.1s", "opacity":1});

					$(".f3_2 .obj .obj_inner .obj_title").css({"transition":"all 0.3s 0.5s", "-webkit-transition":"all 0.3s 0.5s", "opacity":1});



					$(".f3_2 .obj1 .obj_inner .obj_txt1").css({"transition":"all 0.3s 1.2s", "-webkit-transition":"all 0.3s 1.2s", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .obj_txt2").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .obj_txt3").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});
					$(".f3_2 .obj1 .obj_inner .obj_txt4").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});

					$(".f3_2 .obj2 .obj_inner .obj_txt3").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});
					$(".f3_2 .obj2 .obj_inner .obj_txt4").css({"transition":"all 0.3s 0.8s", "-webkit-transition":"all 0.3s 0.8s", "opacity":1});
				},2000);

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
				$(".f3_2 .obj .obj_inner .obj_title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});


				$(".f3_2 .obj1 .obj_inner .obj_txt1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_2 .obj1 .obj_inner .obj_txt2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_2 .obj1 .obj_inner .obj_txt3").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_2 .obj1 .obj_inner .obj_txt4").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});

				$(".f3_2 .obj2 .obj_inner .obj_txt3").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_2 .obj2 .obj_inner .obj_txt4").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});

				$(".f3_2 .obj1 .obj_inner .panel_obj3").css({"transition":"all 0.3s 0.3s", "-webkit-transition":"all 0.3s 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f3_2 .obj2 .obj_inner .panel_obj3").css({"transition":"all 0.3s 0.3s", "-webkit-transition":"all 0.3s 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.3s 0.3s", "-webkit-transition":"all 0.3s 0.3s", "opacity":1});
				$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.3s 0.3s", "-webkit-transition":"all 0.3s 0.3s", "opacity":1});
				number08_1 = setTimeout(function(){
					var panelWidth = $(".inter_cont .panel .panel_obj1").outerWidth();
					var panelHeight = $(".inter_cont .panel .panel_obj1").outerHeight();
					if (windowWidth < 1025)
					{
						$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "margin-left":-(panelWidth/2-70) + "px", "margin-top":-(panelHeight/2-30) + "px"});
						$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "margin-left":-(panelWidth/2-70) + "px", "margin-top":-(panelHeight/2-30) + "px"});
					}else{
						$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "margin-left":-(panelWidth/2) + "px", "margin-top":-(panelHeight/2) + "px"});
						$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "margin-left":-(panelWidth/2) + "px", "margin-top":-(panelHeight/2) + "px"});
					}

					if ($("body").hasClass("m_header"))
					{
						$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "margin-left":-(panelWidth/2 - 130) + "px", "margin-top":-(panelHeight/2 - 130) + "px"});
						$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "margin-left":-(panelWidth/2 - 130) + "px", "margin-top":-(panelHeight/2 - 130) + "px"});
					}else if ($("body").hasClass("m_size"))
					{
						$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "margin-left":-(panelWidth/2 - 80) + "px", "margin-top":-(panelHeight/2 - 30) + "px"});
						$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "margin-left":-(panelWidth/2 - 80) + "px", "margin-top":-(panelHeight/2 - 30) + "px"});
					}
					setTimeout(function(){
						$(".inter_cont .panel .panel_obj1 img").eq(0).css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":1});
						$(".inter_cont .panel .panel_obj1 img").eq(1).css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
						$(".inter_cont .panel .panel_obj2 img").eq(0).css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":1});
						$(".inter_cont .panel .panel_obj2 img").eq(1).css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
					},300);

					number08_2 = setTimeout(function(){
						$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "transform":"scale(1.6) perspective(203px) rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "-webkit-transform":"scale(1.6) perspective(203px) rotate3d(1,1,0, 50deg) translate(-100px, -100px)"});
						$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "transform":"scale(1.6) perspective(203px) rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "-webkit-transform":"scale(1.6) perspective(203px) rotate3d(1,1,0, 50deg) translate(-100px, -100px)"});
					},300);
				},500);
				$(".feature_cont").css({"transition":"margin-top 0.1s 0.8s","-webkit-transition":"margin-top 0.1s 0.8s","margin-top":-(windowHeight*7) + "px"});

				$(".f3_3 .txt .title").css({"transition":"all 0.5s 1.0s", "-webkit-transition":"all 0.5s 1.0s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
				$(".f3_3 .f_ico_wrap .ico").css({"transition":"all 0.5s 1.0s", "-webkit-transition":"all 0.5s 1.0s", "opacity":1});

				pageDelay = 1800;
			}else{
				$(".f3_5 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_5 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_5 .txt .ico").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".tile_cont .tile_cont_inner .tile").css({"opacity":1});
				$(".tile_cont").css({"display":"block", "opacity":0}).animate({"opacity":1},300,function(){
					$(".tile_cont").delay(300).animate({"opacity":0},500,function(){
						$(".tile_cont").css({"display":"none"});
					});

				});
				
				if($("body").hasClass("Safari"))
				{
					number08_5 = setTimeout(function(){
						var panelWidth = $(".inter_cont .panel .panel_obj1").outerWidth();
						var panelHeight = $(".inter_cont .panel .panel_obj1").outerHeight();
						if (windowWidth < 1025)
						{
							$(".inter_cont .panel .panel_obj1").css({"transition":"", "-webkit-transition":"", "margin-left":-(panelWidth/2-70) + "px", "margin-top":-(panelHeight/2-30) + "px"});
							$(".inter_cont .panel .panel_obj2").css({"transition":"", "-webkit-transition":"", "margin-left":-(panelWidth/2-70) + "px", "margin-top":-(panelHeight/2-30) + "px"});
						}else{
							$(".inter_cont .panel .panel_obj1").css({"transition":"", "-webkit-transition":"", "margin-left":-(panelWidth/2) + "px", "margin-top":-(panelHeight/2) + "px"});
							$(".inter_cont .panel .panel_obj2").css({"transition":"", "-webkit-transition":"", "margin-left":-(panelWidth/2) + "px", "margin-top":-(panelHeight/2) + "px"});
						}

						if ($("body").hasClass("m_header"))
						{
							$(".inter_cont .panel .panel_obj1").css({"transition":"", "-webkit-transition":"", "margin-left":-(panelWidth/2 - 130) + "px", "margin-top":-(panelHeight/2 - 130) + "px"});
							$(".inter_cont .panel .panel_obj2").css({"transition":"", "-webkit-transition":"", "margin-left":-(panelWidth/2 - 130) + "px", "margin-top":-(panelHeight/2 - 130) + "px"});
						}else if ($("body").hasClass("m_size"))
						{
							$(".inter_cont .panel .panel_obj1").css({"transition":"", "-webkit-transition":"", "margin-left":-(panelWidth/2 - 80) + "px", "margin-top":-(panelHeight/2 - 30) + "px"});
							$(".inter_cont .panel .panel_obj2").css({"transition":"", "-webkit-transition":"", "margin-left":-(panelWidth/2 - 80) + "px", "margin-top":-(panelHeight/2 - 30) + "px"});
						}

						number08_2 = setTimeout(function(){
							$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "transform":"scale(1.6) perspective(203px) rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "-webkit-transform":"scale(1.6) perspective(203px) rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "opacity":1});
							$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "transform":"scale(1.6) perspective(203px) rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "-webkit-transform":"scale(1.6) perspective(203px) rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "opacity":1});
						},300);
					},800);
				}else{
					number08_3 = setTimeout(function(){
						$(".inter_cont .panel_full > div").css({"transition":"","-webkit-transition":"","opacity":1});
						$(".inter_cont .panel_full").css({"transition":"","-webkit-transition":"","transform":"scale(3) perspective(" + positinoSize(3216) + ") rotate3d(0, 0, 0, 0deg)","-webkit-transform":"scale(3) perspective(" + positinoSize(3216) + ") rotate3d(0, 0, 0, 0deg)"});

						var panelWidth = $(".inter_cont .panel .panel_obj1").outerWidth();
						var panelHeight = $(".inter_cont .panel .panel_obj1").outerHeight();
						if (windowWidth < 1025)
						{
							$(".inter_cont .panel .panel_obj1").css({"transition":"","-webkit-transition":"", "margin-left":-(panelWidth/2-70) + "px", "margin-top":-(panelHeight/2-30) + "px","opacity":0, "transform":"scale(2) perspective(203px) rotate3d(1,1,0, 50deg) translate(0px, 0px)", "-webkit-transform":"scale(2) perspective(203px) rotate3d(1,1,0, 50deg) translate(0px, 0px)"});
							$(".inter_cont .panel .panel_obj2").css({"transition":"","-webkit-transition":"", "margin-left":-(panelWidth/2-70) + "px", "margin-top":-(panelHeight/2-30) + "px","opacity":0, "transform":"scale(2) perspective(203px) rotate3d(1,1,0, 50deg) translate(0px, 0px)", "-webkit-transform":"scale(2) perspective(203px) rotate3d(1,1,0, 50deg) translate(0px, 0px)"});
						}else{
							$(".inter_cont .panel .panel_obj1").css({"transition":"","-webkit-transition":"", "margin-left":-(panelWidth/2) + "px", "margin-top":-(panelHeight/2) + "px","opacity":0, "transform":"scale(2) perspective(203px) rotate3d(1,1,0, 50deg) translate(0px, 0px)", "-webkit-transform":"scale(2) perspective(203px) rotate3d(1,1,0, 50deg) translate(0px, 0px)"});
							$(".inter_cont .panel .panel_obj2").css({"transition":"","-webkit-transition":"", "margin-left":-(panelWidth/2) + "px", "margin-top":-(panelHeight/2) + "px","opacity":0, "transform":"scale(2) perspective(203px) rotate3d(1,1,0, 50deg) translate(0px, 0px)", "-webkit-transform":"scale(2) perspective(203px) rotate3d(1,1,0, 50deg) translate(0px, 0px)"});
						}

						if ($("body").hasClass("m_header"))
						{
							$(".inter_cont .panel .panel_obj1").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.6) perspective(203px) rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "-webkit-transform":"scale(1.6) perspective(203px) rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "margin-left":-(panelWidth/2 - 130) + "px", "margin-top":-(panelHeight/2 - 130) + "px"});
							$(".inter_cont .panel .panel_obj2").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.6) perspective(203px) rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "-webkit-transform":"scale(1.6) perspective(203px) rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "margin-left":-(panelWidth/2 - 130) + "px", "margin-top":-(panelHeight/2 - 130) + "px"});
						}else if ($("body").hasClass("m_size"))
						{
							$(".inter_cont .panel .panel_obj1").css({"transition":"", "-webkit-transition":"", "margin-left":-(panelWidth/2 - 80) + "px", "margin-top":-(panelHeight/2 - 30) + "px"});
							$(".inter_cont .panel .panel_obj2").css({"transition":"", "-webkit-transition":"", "margin-left":-(panelWidth/2 - 80) + "px", "margin-top":-(panelHeight/2 - 30) + "px"});
						}
					},600);

					number08_4 = setTimeout(function(){
						$(".inter_cont .panel_full").css({"transition":"opacity 0.3s, transform 1.0s", "-webkit-transition":"opacity 0.3s, transform 1.0s","opacity":1, "transform":"scale(0.31) perspective(" + positinoSize(3216) + ") rotate3d(0.34, 1, -0.5, 93deg)", "-webkit-transform":"scale(0.31) perspective(" + positinoSize(3216) + ") rotate3d(0.34, 1, -0.5, 93deg)"});
					},700);

					number08_5 = setTimeout(function(){
						$(".inter_cont .panel_full").css({"transition":"opacity 0.3s 0.2s, transform 0.5s", "-webkit-transition":"opacity 0.3s 0.2s, transform 0.5s", "opacity":0, "transform":"scale(0.31) perspective(" + positinoSize(3216) + ") rotate3d(0.34, 1, -0.5, 93deg)", "-webkit-transform":"scale(0.31) perspective(" + positinoSize(3216) + ") rotate3d(0.34, 1, -0.5, 93deg)"});
						
						
						$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":1, "transform":"scale(1.6) perspective(203px) rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "-webkit-transform":"scale(1.6) perspective(203px) rotate3d(1,1,0, 50deg) translate(-100px, -100px)"});
						$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":1, "transform":"scale(1.6) perspective(203px) rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "-webkit-transform":"scale(1.6) perspective(203px) rotate3d(1,1,0, 50deg) translate(-100px, -100px)"});
						$(".tile_cont").css({"display":"none"});


						logoColor_Able = true;
					},1100);
				}
				
				setTimeout(function(){
					$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*1) + "px"});
					$(".bg_cont .panel_field_far").css({"opacity":1});
					$(".bg_cont .panel_field_far .panel_field").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.0)", "-webkit-transform":"scale(1.0)", "opacity":1});
					$(".bg_cont .panel_field_far .panel_field_blur").css({"transition":"", "-webkit-transition":"", "opacity":1});

					$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*7) + "px"});
				},500);

				$(".f3_3 .txt .title").css({"transition":"all 0.5s 1.1s", "-webkit-transition":"all 0.5s 1.1s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
				$(".inter_cont .panel").css({"transition":"all 0.5s 1.3s", "-webkit-transition":"all 0.5s 1.3s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
				$(".f3_3 .f_ico_wrap .ico").css({"transition":"all 0.5s 1.5s", "-webkit-transition":"all 0.5s 1.5s", "opacity":1});

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
				$(".f3_3 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"translate(0px,0px)","-webkit-transform":"translate(0px,0px)","opacity":0});
				$(".f3_3 .f_ico_wrap .ico").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				
				if($("body").hasClass("Safari"))
				{
					$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
					$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
					number09_1 = setTimeout(function(){
						$(".tile_cont").css({"display":"block", "z-index":2});						
						number09_2 = setTimeout(function(){
							$(".tile_cont").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
							$(".tile_cont .tile_cont_inner .tile").css({"transition":"opacity 0.1s", "-webkit-transition":"opacity 0.1s", "opacity":1});
						},100);


						number09_3 = setTimeout(function(){
							$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*8) + "px"});
							$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*4) + "px"});
							$(".bg_cont .lab").css({"opacity":1});
							$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*9) + "px"});
							number13_1 = setTimeout(function(){

								$(".tile_cont").css({"display":"block", "z-index":0});
								$(".tile_cont .tile_cont_inner .tile").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});

								$(".bg_cont .lab").find("video").each(function(){
									if($(this).parent().find(".vCover").css("display") == "block")
									{
										$(this).parent().find(".vCover").delay(300).animate({opacity:0},500,function(){
											$(this).css("display","none");
										});
									}

									if(this.paused){
										this.play();
									}
								});

								$(".f3_5 .txt .title").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
								$(".f3_5 .txt .desc").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
								$(".f3_5 .txt .ico").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","opacity":1});
							},400);

							pageDelay = 1700;
						},500);
					},300);
					pageDelay = 2100;
				}else{
					$(".inter_cont .panel_full").css({"transition":"opacity 0.5s, transform 1.5s","-webkit-transition":"opacity 0.5s, transform 1.5s","opacity":1, "transform":"scale(3) perspective(" + positinoSize(3216) + ") rotate3d(0, 0, 0, 0deg)", "-webkit-transform":"scale(3) perspective(" + positinoSize(3216) + ") rotate3d(0, 0, 0, 0deg)"});

					$(".inter_cont .panel .panel_obj1").css({"transition":"","-webkit-transition":"","opacity":0});
					$(".inter_cont .panel .panel_obj2").css({"transition":"","-webkit-transition":"","opacity":0});
					number09_1 = setTimeout(function(){
						logoColor_Able = false;

						$(".tile_cont").css({"display":"block", "z-index":0});
						$(".feature_cont").css({"transition":"margin-top 0.3s","-webkit-transition":"margin-top 0.3s","margin-top":-(windowHeight*8) + "px"});
						number09_2 = setTimeout(function(){
							$(".tile_cont").css({"transition":"all 1s","-webkit-transition":"all 1s","opacity":1});
							$(".tile_cont .tile_cont_inner .tile").css({"transition":"opacity 0.1s", "-webkit-transition":"opacity 0.1s", "opacity":1});
							if($("body").hasClass("Safari"))
							{
							}else{
								$(".inter_cont .panel_full > div").css({"transition":"opacity 0.5s 0.3s","-webkit-transition":"opacity 0.5s 0.3s","opacity":0});
							}
						},100);


						number09_3 = setTimeout(function(){
							$(".bg_cont").css({"transition":"all 0.1s 0.4s","-webkit-transition":"all 0.1s 0.4s","margin-top":-(windowHeight*4) + "px"});
							$(".bg_cont .lab").css({"opacity":1});
							$(".feature_cont").css({"transition":"margin-top 0.1s 0.4s","-webkit-transition":"margin-top 0.1s 0.4s","margin-top":-(windowHeight*9) + "px"});
							number13_1 = setTimeout(function(){

								$(".tile_cont").css({"display":"block", "z-index":1});
								$(".tile_cont .tile_cont_inner .tile").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});

								$(".bg_cont .lab").find("video").each(function(){
									if($(this).parent().find(".vCover").css("display") == "block")
									{
										$(this).parent().find(".vCover").animate({opacity:0},300,function(){
											$(this).css("display","none");
										});
									}

									if(this.paused){
										this.play();
									}
								});

								$(".f3_5 .txt .title").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
								$(".f3_5 .txt .desc").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
								$(".f3_5 .txt .ico").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","opacity":1});
							},400);

							pageDelay = 1700;
						},300);
					},500);
					pageDelay = 2300;
				}				
			}else
			{

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

					$(".bg_cont .lab").find("video").each(function(){
						if($(this).parent().find(".vCover").css("display") == "block")
						{
							$(this).parent().find(".vCover").animate({opacity:0},300,function(){
								$(this).css("display","none");
							});
						}

						if(this.paused){
							this.play();
						}
					});
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
				factoryVideo.pause();

				$(".tile_cont").css({"display":"none"});
				$(".f3_5 .txt .title").css({"transition":"0.3s","-webkit-transition":"0.3s","opacity":0});
				$(".f3_5 .txt .desc").css({"transition":"0.3s","-webkit-transition":"0.3s","opacity":0});
				$(".f3_5 .txt .ico").css({"transition":"0.3s","-webkit-transition":"0.3s","opacity":0});

				$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*10) + "px"});
				$(".f3_67_bg").css({"display":"block", "opacity":1});
				$(".f3_67_bg .f3_6_bg").css({"display":"block", "opacity":0});
				$(".f3_6 .box_wrap .box").css({"opacity":1});
				$(".f3_6 .box_wrap .box_sec").css({"opacity":1, "margin-top":""});
				number14_1 = setTimeout(function(){
					
					$(".f3_6 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".f3_6 .box_wrap .box_sec").eq(1).find(".txt").css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".f3_6 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".f3_6 .box_wrap .box_sec").eq(1).find(".obj_wrap").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".f3_6 .box_wrap .btn").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".f3_67_bg .f3_6_bg").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
				},400);

				pageDelay = 1100;
			}else{
				if(interview01wLoad_Able)
					interviewVideo01_w.pause();
				if(interview01mLoad_Able)
					interviewVideo01_m.pause();

				$(".f3_7 .box_wrap .box .box_in > div").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"", "opacity":0});
				$(".f3_7 .box_wrap .btn").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_67_bg .f3_7_bg").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*10) + "px"});

				$(".f3_67_bg").css({"display":"block", "opacity":"1"});
				$(".f3_67_bg .f3_6_bg").css({"display":"block", "opacity":0});
				$(".f3_6 .box_wrap .box").css({"opacity":1});
				$(".f3_6 .box_wrap .box_sec").css({"opacity":1, "margin-top":""});
				number14_2 = setTimeout(function(){
					
					//$(".bg_cont .interview2 .vCover").css({"display":"block","opacity":1});
					//$("#interviewVideo1").first().attr('src','');

					$(".f3_6 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".f3_6 .box_wrap .box_sec").eq(1).find(".txt").css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)", "opacity":1});

					$(".f3_6 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".f3_6 .box_wrap .box_sec").eq(1).find(".obj_wrap").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".f3_67_bg .f3_6_bg").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".f3_6 .box_wrap .btn").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
				},400);

				pageDelay = 1100;
			}

			guageMotion(2,9);
			break;
		}case 11:
		{
			featureIndex = 11;

			bgNumber = 4;
			if (oldShowPage < idx)
			{
				$(".f3_6 .box_wrap .box .box_in > div").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"", "opacity":0});
				$(".f3_6 .box_wrap .btn").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_67_bg .f3_6_bg").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*11) + "px"});
				
				$(".f3_67_bg").css({"display":"block"});
				$(".f3_67_bg .f3_7_bg").css({"display":"block", "opacity":0});
				$(".f3_7 .box_wrap .box").css({"opacity":1});
				$(".f3_7 .box_wrap .box_sec").css({"opacity":1, "margin-top":""});
				number15_1 = setTimeout(function(){
					$(".f3_67_bg .f3_6_bg").css({"display":"none"});
					$(".f3_7 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".f3_7 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".f3_7 .box_wrap .box_sec").eq(1).find(".obj_wrap").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".f3_7 .box_wrap .box_sec").eq(1).find(".txt").css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".f3_67_bg .f3_7_bg").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					$(".f3_7 .box_wrap .btn").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
				},400);

				pageDelay = 1100;
			}else{
				$(".f3_8 .obj_wrap .obj1").css({"transition":"0.3s","-webkit-transition":"0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_8 .obj_wrap .obj2").css({"transition":"0.3s","-webkit-transition":"0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_8 .txt .title").css({"transition":"0.3s","-webkit-transition":"0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_8 .txt .desc").css({"transition":"0.3s","-webkit-transition":"0.3s","transform":"","-webkit-transform":"","opacity":0});

				$(".f3_67_bg").css({"display":"block", "opacity":1});
				$(".f3_67_bg .f3_7_bg").css({"display":"block", "opacity":0});
				$(".f3_67_bg .f3_6_bg").css({"display":"none"});
				$(".f3_7 .box_wrap .box").css({"opacity":1});
				$(".f3_7 .box_wrap .box_sec").css({"opacity":1, "margin-top":""});

				$(".bg_cont .lab .vCover").css({"opacity":1});
				$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*4) + "px"});
				number15_2 = setTimeout(function(){
					$(".tile_cont").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
					$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*11) + "px"});
					number15_3 = setTimeout(function(){
						$(".tile_cont").css({"display":"none"});

						$(".f3_7 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)", "opacity":1});
						$(".f3_7 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
						$(".f3_7 .box_wrap .box_sec").eq(1).find(".obj_wrap").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
						$(".f3_7 .box_wrap .box_sec").eq(1).find(".txt").css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)", "opacity":1});
						$(".f3_67_bg .f3_7_bg").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
						$(".f3_7 .box_wrap .btn").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					},300);
				},300);

				pageDelay = 1300;
			}

			guageMotion(2,10);
			break;
		}case 12:
		{
			featureIndex = 12;

			bgNumber = 4;
			if(oldShowPage < idx)
			{
				if(interview01wLoad_Able)
					interviewVideo01_w.pause();
				if(interview01mLoad_Able)
					interviewVideo01_m.pause();
				interviewViedo01_Able = false;

				$(".f3_7 .box_wrap .box .box_in > div").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"", "opacity":0});
				$(".f3_7 .box_wrap .btn").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_67_bg .f3_7_bg").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

				$(".tile_cont").css({"display":"block", "opacity":0, "z-index":2,"transform":"","-webkit-transform":""});
				$(".tile_cont .tile_cont_inner .tile").css({"transition":"","-webkit-transition":"","opacity":1});
				number17_1 = setTimeout(function(){
					$(".tile_cont").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
					
					$(".feature_cont").css({"transition":"margin-top 0.1s 0.5s","-webkit-transition":"margin-top 0.1s 0.5s","margin-top":-(windowHeight*12) + "px"});
					number17_2 = setTimeout(function(){

						audioSound("max");
						
						$(".tile_cont_quad").css({"transition":"","-webkit-transition":"","opacity":0});
						$(".tile_cont").css({"z-index":0});
						$(".tile_cont_quad").css({"display":"none"});
						$(".f3_8 .obj_wrap .obj1").css({"transition":"0.5s 0.2s","-webkit-transition":"0.5s 0.2s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
						$(".f3_8 .obj_wrap .obj2").css({"transition":"0.5s 0.2s","-webkit-transition":"0.5s 0.2s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
						$(".f3_8 .txt .title").css({"transition":"0.5s 0.2s","-webkit-transition":"0.5s 0.2s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
						$(".f3_8 .txt .desc").css({"transition":"0.5s 0.2s","-webkit-transition":"0.5s 0.2s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					},600);
				},100);

				pageDelay = 1400;

				pageDelay = 1400;
			}else{
				$(".f3_75 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .txt .ico").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .obj .obj_line").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .obj .obj_txt .t_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .obj .obj_txt .b_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				number17_3 = setTimeout(function(){
					$(".tile_cont").css({"display":"block", "z-index":2});
					$(".tile_cont .tile_cont_inner .tile").css({"transition":"","-webkit-transition":"","opacity":1});
					$(".tile_cont_quad").css({"display":"block","opacity":1, "z-index":0});
				},300);

				$(".tile_cont").css({"transition":"all 0.3s 0.3s","-webkit-transition":"all 0.3s 0.3s","transform":"","-webkit-transform":"","opacity":1});
				
				number17_4 = setTimeout(function(){
					$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*12) + "px"});
					$(".tile_cont").css({"z-index":0});
					$(".tile_cont_quad").css({"display":"none","opacity":0});

					$(".f3_8 .obj_wrap .obj1").css({"transition":"0.5s","-webkit-transition":"0.5s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f3_8 .obj_wrap .obj2").css({"transition":"0.5s","-webkit-transition":"0.5s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f3_8 .txt .title").css({"transition":"0.5s","-webkit-transition":"0.5s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f3_8 .txt .desc").css({"transition":"0.5s","-webkit-transition":"0.5s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
				},700);
				pageDelay = 2200;
			}

			guageMotion(2,11);
			break;
		}case 13:
		{
			featureIndex = 13;

			bgNumber = 4;
			if (oldShowPage < idx)
			{
				$(".f3_8 .obj_wrap .obj1").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_8 .obj_wrap .obj2").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_8 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_8 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
				
				$(".tile_cont").css({"z-index":2});
				$(".tile_cont_quad").css({"display":"block","opacity":1, "z-index":0});
				number16_1 = setTimeout(function(){
					$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*13) + "px"});

					$(".f3_67_bg .f3_7_bg").css({"display":"none"});
					$(".tile_cont").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});

					$(".f3_75 .txt .title").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_75 .txt .desc").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_75 .txt .ico").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});

					$(".f3_75 .obj2 .obj_line").css({"transition":"all 0.3s 0.7s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_75 .obj2 .obj_txt .t_txt").css({"transition":"all 0.3s 0.7s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_75 .obj2 .obj_txt .b_txt").css({"transition":"all 0.3s 0.7s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_75 .obj3 .obj_line").css({"transition":"all 0.3s 0.7s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_75 .obj3 .obj_txt .t_txt").css({"transition":"all 0.3s 0.7s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_75 .obj3 .obj_txt .b_txt").css({"transition":"all 0.3s 0.7s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
				},300);
			}else{
				if(interview01wLoad_Able)
					interviewVideo01_w.pause();
				if(interview01mLoad_Able)
					interviewVideo01_m.pause();

				interviewViedo01_Able = false;

				$(".f3_10 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_10 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_10 .movie_progress").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_10 .caption_w .c_circle").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_10 .caption_w2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				
				$(".tile_cont").css({"z-index":2, "display":"block", "transform":"", "-webkit-transform":""});
				number17_3 = setTimeout(function(){
					$(".tile_cont").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":1});
					setTimeout(function(){
						$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*13) + "px"});
						$(".bg_cont .lab").css({"opacity":1});
						$(".bg_cont .lab .vCover").css({"opacity":1, "display":"block"});
						$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*4) + "px"});
						$(".tile_cont").css({"transition":"all 0.3s 0.2s", "-webkit-transition":"all 0.3s 0.2s", "opacity":0});						
					},300);
				},300);
			
				number17_4 = setTimeout(function(){
					$(".tile_cont_quad").css({"transition":"","-webkit-transition":"","opacity":1, "display":"block"});
					audioSound("max");					

					$(".f3_75 .txt .title").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f3_75 .txt").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f3_75 .txt .desc").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
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
		}case 14:
		{
			featureIndex = 14;

			bgNumber = 9;
			if(oldShowPage < idx)
			{
				$(".f3_75 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .txt .ico").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .obj .obj_line").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .obj .obj_txt .t_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".f3_75 .obj .obj_txt .b_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

				$(".tile_cont").css({"transition":"","-webkit-transition":"","display":"block", "opacity":0, "z-index":2}).animate({"opacity":1},500);
				$(".tile_cont .tile_cont_inner .tile").css({"opacity":"1"});
				number18_1 = setTimeout(function(){
					$(".feature_cont").css({"transition":"margin-top 0.1s","-webkit-transition":"margin-top 0.1s","margin-top":-(windowHeight*14) + "px"});
					$(".bg_cont").css({"transition":"all 0.1s","-webkit-transition":"all 0.1s","margin-top":-(windowHeight*9) + "px"});
					$(".bg_cont .bg").eq(10).css("opacity",1);

					$(".tile_cont_quad").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"","opacity":0});
					
					
					number18_2 = setTimeout(function(){
						$(".tile_cont").css({"transition":"opacity 0.3s","-webkit-transition":"opacity 0.3s","opacity":0, "z-index":0});
					},500);

					$(".f3_10 .txt .title").css({"transition":"all 0.5s 0.7s","-webkit-transition":"all 0.5s 0.7s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f3_10 .txt .desc").css({"transition":"all 0.5s 0.7s","-webkit-transition":"all 0.5s 0.7s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f3_10 .movie_progress").css({"transition":"all 0.5s 0.7s", "-webkit-transition":"all 0.5s 0.7s", "opacity":1});
					$(".f3_10 .caption_w .c_circle").css({"transition":"all 0.5s 0.7s", "-webkit-transition":"all 0.5s 0.7s", "opacity":1});
					$(".f3_10 .caption_w2").css({"transition":"all 0.5s 0.7s", "-webkit-transition":"all 0.5s 0.7s", "opacity":1});
					$(".f3_10 .movie_progress .progress_time").html("00:00");
					interview01Load();
				},500);

				pageDelay = 1500;
			}else{
				$(".f3_11 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s", "opacity":0, "transform":"", "-webkit-transform":""});
				$(".f3_11 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0, "transform":"", "-webkit-transform":""});
				$(".f3_11 .obj").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0, "transform":"", "-webkit-transform":""});
				
				
				
				number18_3 = setTimeout(function(){
					
					if($("body").hasClass("Safari"))
					{
						$(".inter_cont .panel_half_sf").css({"z-index":2});
						setTimeout(function(){
							$(".inter_cont .panel_half_sf").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":0});
							setTimeout(function(){
								$(".inter_cont .panel_half_sf").css({"display":"none"});
							},500);
						},300);
					}else{
						$(".tile_cont").css({"z-index":2});
						setTimeout(function(){
							$(".tile_cont").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":0});
							setTimeout(function(){
								$(".tile_cont").css({"display":"none"});
							},500);
						},300);
					}

					$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*14) + "px"});
					$(".bg_cont").css({"transition":"all 0.1s","-webkit-transition":"all 0.1s","margin-top":-(windowHeight*9) + "px"});
					$(".bg_cont .bg").eq(10).css("opacity",1);

					$(".f3_10 .txt .title").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f3_10 .txt .desc").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
					$(".f3_10 .movie_progress").css({"transition":"all 0.5s 0.6s", "-webkit-transition":"all 0.5s 0.6s", "opacity":1});
					$(".f3_10 .caption_w .c_circle").css({"transition":"all 0.5s 0.6s", "-webkit-transition":"all 0.5s 0.6s", "opacity":1});
					$(".f3_10 .caption_w2").css({"transition":"all 0.5s 0.6s", "-webkit-transition":"all 0.5s 0.6s", "opacity":1});
					$(".f3_10 .movie_progress .progress_time").html("00:00");
					interview01Load();
				},300);

				pageDelay = 1400;
			}
			guageMotion(2,13);
			break;
		}case 15:
		{
			featureIndex = 15;

			bgNumber = 4;
			if(oldShowPage < idx)
			{
				interviewViedo01_Able = false;

				if(interview01wLoad_Able)
					interviewVideo01_w.pause();
				if(interview01mLoad_Able)
					interviewVideo01_m.pause();

				$(".f3_10 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0, "transform":"", "-webkit-transform":""});
				$(".f3_10 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0, "transform":"", "-webkit-transform":""});
				$(".f3_10 .movie_progress").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_10 .caption_w .c_circle").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_10 .caption_w2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});

				number19_1 = setTimeout(function(){
					if($("body").hasClass("Safari"))
					{
						$(".inter_cont .panel_half_sf").css({"z-index":2});
						setTimeout(function(){
							$(".inter_cont .panel_half_sf").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":1, "display":"block"});
						},300);
					}else{
						$(".tile_cont").css({"z-index":2});
						setTimeout(function(){
							$(".tile_cont").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":1});
						},300);
					}

					audioSound("max");					

					number19_2 = setTimeout(function(){
						if($("body").hasClass("Safari"))
						{
							$(".inter_cont .panel_half_sf").css({"z-index":0});
							$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*15) + "px"});

							$(".f3_11 .txt .title").css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
							$(".f3_11 .txt .desc").css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
							
							$(".f3_11 .obj_wrap").css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s", "opacity":1, "transform":"", "-webkit-transform":""});
							$(".f3_11 .obj").eq(0).css({"transition":"all 0.5s 0.2s","-webkit-transition":"all 0.5s 0.2s", "opacity":1, "transform":"", "-webkit-transform":""});
							$(".f3_11 .obj").eq(0).find(".obj_txt").css({"transition":"all 0.5s 0.4s","-webkit-transition":"all 0.5s 0.4s","opacity":1});
							$(".f3_11 .obj").eq(1).css({"transition":"all 0.5s 0.3s","-webkit-transition":"all 0.5s 0.3s", "opacity":1, "transform":"", "-webkit-transform":""});
							$(".f3_11 .obj").eq(1).find(".obj_txt").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s","opacity":1});
							$(".f3_11 .obj").eq(2).css({"transition":"all 0.5s 0.4s","-webkit-transition":"all 0.5s 0.4s", "opacity":1, "transform":"", "-webkit-transform":""});
							$(".f3_11 .obj").eq(2).find(".obj_txt").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s", "opacity":1});
							$(".f3_11 .obj").eq(3).css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s", "opacity":1, "transform":"", "-webkit-transform":""});
							$(".f3_11 .obj").eq(3).find(".obj_txt").css({"transition":"all 0.5s 0.7s","-webkit-transition":"all 0.5s 0.7s", "opacity":1});
							$(".f3_11 .obj").eq(4).css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s", "opacity":1, "transform":"", "-webkit-transform":""});
							$(".f3_11 .obj").eq(4).find(".obj_txt").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s", "opacity":1});
						}else{
							$(".tile_cont").css({"transition":"all 1.0s", "-webkit-transition":"all 1.0s", "display":"block","z-index":0, "transform":"rotate3d(1, -0.5, 0.22, 45deg) perspective(" + positinoSize(1920) + ") scale(1.7)", "-webkit-transform":"rotate3d(1, -0.5, 0.22, 45deg) perspective(" + positinoSize(1920) + ") scale(1.7)"});
							

							$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*15) + "px"});

							$(".f3_11 .txt .title").css({"transition":"all 0.5s 1.0s","-webkit-transition":"all 0.5s 1.0s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
							$(".f3_11 .txt .desc").css({"transition":"all 0.5s 1.0s","-webkit-transition":"all 0.5s 1.0s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
							
							$(".f3_11 .obj_wrap").css({"transition":"all 0.5s 1.0s","-webkit-transition":"all 0.5s 1.0s", "opacity":1, "transform":"", "-webkit-transform":""});
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
						}
					},800);
				},300);

				pageDelay = 3100;
			}else{
				$(".feature_cont").css({"transition":"margin-top 0.3s","-webkit-transition":"margin-top 0.3s","margin-top":-(windowHeight*15) + "px"});
				number19_3 = setTimeout(function(){
					$(".tile_cont").css({"z-index":0});
				},500);
				$(".f3_11 .txt .middle").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				number19_4 = setTimeout(function(){
					$(".f3_11 .txt .desc .desc1").css({"display":"block"});
					$(".f3_11 .txt .desc .desc2").css({"display":"none"});

					$(".f3_11 .txt .middle").css({"transition":"all 0.5s 0.3s","-webkit-transition":"all 0.5s 0.3s","opacity":1});
				},300);

				$(".f3_11 .obj_wrap").css({"transition":"all 0.8s 0.3s","-webkit-transition":"all 0.8s 0.3s", "opacity":1, "transform":"", "-webkit-transform":""});
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
		}case 16:
		{
			featureIndex = 15;

			bgNumber = 4;
			if(oldShowPage > idx){
				if($("body").hasClass("Safari"))
				{
					$(".inter_cont .panel_half_sf").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":1, "display":"block"});
				}else{
					$(".tile_cont").css({"display":"block","z-index":0, "transform":"rotate3d(1, -0.5, 0.22, 45deg) perspective(" + positinoSize(1920) + ") scale(1.7)", "-webkit-transform":"rotate3d(1, -0.5, 0.22, 45deg) perspective(" + positinoSize(1920) + ") scale(1.7)", "opacity":1});
					$(".tile_cont .tile_cont_inner .tile").css({"opacity":1});
				}

				$(".condition_w .obj .ico").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".condition_w .obj img").css({"transition":"", "-webkit-transition":"", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
				$(".condition_w .obj").css({"transition":"", "-webkit-transition":"", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});

				var maxTime = 0;
				if($("body").hasClass("Safari"))
				{
					$(".condition_w .obj").eq(0).animate({"opacity":0},500);
					$(".condition_w .obj").eq(1).delay(100).animate({"opacity":0},500);
					$(".condition_w .obj").eq(2).delay(200).animate({"opacity":0},500);
					$(".condition_w .obj").eq(3).delay(300).animate({"opacity":0},500);
					$(".condition_w .obj").eq(4).delay(400).animate({"opacity":0},500);
					$(".condition_w .obj").eq(5).delay(500).animate({"opacity":0},500);
				}else{
					$(".condition_w .obj").eq(0).css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":0, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
					$(".condition_w .obj").eq(1).css({"transition":"all 0.5s 0.1s", "-webkit-transition":"all 0.5s 0.1s", "opacity":0, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
					$(".condition_w .obj").eq(2).css({"transition":"all 0.5s 0.2s", "-webkit-transition":"all 0.5s 0.2s", "opacity":0, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
					$(".condition_w .obj").eq(3).css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":0, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
					$(".condition_w .obj").eq(4).css({"transition":"all 0.5s 0.4s", "-webkit-transition":"all 0.5s 0.4s", "opacity":0, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
					$(".condition_w .obj").eq(5).css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":0, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
				}

				number20_1 = setTimeout(function(){
					$(".feature_cont").css({"transition":"margin-top 0.1s","-webkit-transition":"margin-top 0.1s","margin-top":-(windowHeight*15) + "px"});
					
					number20_2 = setTimeout(function(){
						$(".f3_11 .txt .desc .desc1").css({"display":"none"});
						$(".f3_11 .txt .desc .desc2").css({"display":"block"});
						$(".f3_11 .txt .title").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
						$(".f3_11 .txt .desc").css({"transition":"all 0.5s 0.3s","-webkit-transition":"all 0.5s 0.3s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});

						$(".f3_11 .obj_wrap").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
						
						$(".f3_11 .obj").eq(0).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
						$(".f3_11 .obj").eq(1).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});				
						$(".f3_11 .obj").eq(2).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
						$(".f3_11 .obj").eq(3).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
						$(".f3_11 .obj").eq(4).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
						
						$(".f3_11 .obj").eq(0).find(".obj_txt").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":1});
						$(".f3_11 .obj").eq(1).find(".obj_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
						$(".f3_11 .obj").eq(2).find(".obj_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
						$(".f3_11 .obj").eq(3).find(".obj_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
						$(".f3_11 .obj").eq(4).find(".obj_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});

						


					},100);
					setTimeout(function(){
						$(".condition_w").css({"transition":"","-webkit-transition":"","opacity":0});
						$(".condition_w .obj").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "animation-name":"", "animation-duration": "","animation-delay":"","animation-fill-mode": "", "animation-timing-function":""});
						$(".condition_w .obj img").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "animation-name":"", "animation-duration": "","animation-delay":"","animation-fill-mode": "", "animation-timing-function":""});
					},500);
				}, 1000);

				pageDelay = 1600;
			}else{
				$(".f3_11 .txt .middle").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				number20_3 = setTimeout(function(){
					$(".f3_11 .txt .desc .desc1").css({"display":"none"});
					$(".f3_11 .txt .desc .desc2").css({"display":"block"});

					$(".f3_11 .txt .middle").css({"transition":"all 0.5s 0.3s","-webkit-transition":"all 0.5s 0.3s","opacity":1});
				},300);
				
				$(".f3_11 .obj_wrap").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});

				$(".f3_11 .obj").eq(0).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
				$(".f3_11 .obj").eq(1).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});				
				$(".f3_11 .obj").eq(2).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
				$(".f3_11 .obj").eq(3).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
				$(".f3_11 .obj").eq(4).css({"transition":"all 0.5s 0.0s", "-webkit-transition":"all 0.5s 0.0s", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
			
				$(".f3_11 .obj").eq(1).find(".obj_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_11 .obj").eq(2).find(".obj_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_11 .obj").eq(3).find(".obj_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f3_11 .obj").eq(4).find(".obj_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});

				pageDelay = 1100;
			}

			guageMotion(2,14);
			break;
		}case 17:
		{
			featureIndex = 16;

			bgNumber = 4;
			if(oldShowPage < idx)
			{
				$(".f3_11 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_11 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
				$(".f3_11 .obj").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				$(".condition_w").css({"transition":"","-webkit-transition":"","opacity":1, "display":"block"});
				$(".condition_w .obj").css({"transition":"","-webkit-transition":"","opacity":1});

				$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*16) + "px"});
				var maxTime = 0;
				number21_1 = setTimeout(function(){
					for (var i = 0; i < $(".condition_w .obj").size(); i++)
					{
						var ranTime = (Math.random() * 6) + 8 * 100;
						var ranDelay = (Math.random() * 5) * 50;

						if (maxTime < (ranTime+ranDelay))
						{
							maxTime = ranTime+ranDelay;
						}
						if ($("body").hasClass("InternetExplorer"))
						{
							if(i % 2 == 0)
							{
								$(".condition_w .obj").eq(i).css({"animation-name":"IMAGESLIDE_LEFT-ANIMATION_IE", "animation-duration": ranTime + "ms","animation-delay":ranDelay + "ms","animation-fill-mode": "forwards", "animation-timing-function":"cubic-bezier(0.250, 0.460, 0.445, 1)"});
								$(".condition_w .obj").eq(i).find("> img").css({"animation-name":"IMAGESLIDE_IMAGE_LEFT-ANIMATION", "animation-duration": (ranTime + 500) + "ms","animation-delay":ranDelay + "ms","animation-fill-mode": "forwards", "animation-timing-function":"cubic-bezier(0.250, 0.460, 0.445, 1)"});
							}
							else
							{
								$(".condition_w .obj").eq(i).css({"animation-name":"IMAGESLIDE_RIGHT-ANIMATION_IE", "animation-duration": ranTime + "ms","animation-delay":ranDelay + "ms","animation-fill-mode": "forwards", "animation-timing-function":"cubic-bezier(0.250, 0.460, 0.445, 1)"});
								$(".condition_w .obj").eq(i).find("> img").css({"animation-name":"IMAGESLIDE_IMAGE_RIGHT-ANIMATION", "animation-duration": (ranTime + 500) + "ms","animation-delay":ranDelay + "ms","animation-fill-mode": "forwards", "animation-timing-function":"cubic-bezier(0.250, 0.460, 0.445, 1)"});
							}
						}else{
							if(i % 2 == 0)
							{
								$(".condition_w .obj").eq(i).css({"animation-name":"IMAGESLIDE_LEFT-ANIMATION", "animation-duration": ranTime + "ms","animation-delay":ranDelay + "ms","animation-fill-mode": "forwards", "animation-timing-function":"cubic-bezier(0.250, 0.460, 0.445, 1)"});
								$(".condition_w .obj").eq(i).find("> img").css({"animation-name":"IMAGESLIDE_IMAGE_LEFT-ANIMATION", "animation-duration": (ranTime + 500) + "ms","animation-delay":ranDelay + "ms","animation-fill-mode": "forwards", "animation-timing-function":"cubic-bezier(0.250, 0.460, 0.445, 1)"});
							}
							else
							{
								$(".condition_w .obj").eq(i).css({"animation-name":"IMAGESLIDE_RIGHT-ANIMATION", "animation-duration": ranTime + "ms","animation-delay":ranDelay + "ms","animation-fill-mode": "forwards", "animation-timing-function":"cubic-bezier(0.250, 0.460, 0.445, 1)"});
								$(".condition_w .obj").eq(i).find("> img").css({"animation-name":"IMAGESLIDE_IMAGE_RIGHT-ANIMATION", "animation-duration": (ranTime + 500) + "ms","animation-delay":ranDelay + "ms","animation-fill-mode": "forwards", "animation-timing-function":"cubic-bezier(0.250, 0.460, 0.445, 1)"});
							}
						}
						
					}

					$(".condition_w .obj").eq(0).find(".ico").css({"transition":"all 0.3s " + maxTime + "ms", "transform":"translate(0px, 0px)", "-webkit-transition":"all 0.3s " + maxTime + "ms", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".condition_w .obj").eq(1).find(".ico").css({"transition":"all 0.3s " + (maxTime+100) + "ms", "-webkit-transition":"all 0.3s " + (maxTime+100) + "ms", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".condition_w .obj").eq(2).find(".ico").css({"transition":"all 0.3s " + (maxTime+200) + "ms", "-webkit-transition":"all 0.3s " + (maxTime+200) + "ms", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".condition_w .obj").eq(3).find(".ico").css({"transition":"all 0.3s " + (maxTime+300) + "ms", "-webkit-transition":"all 0.3s " + (maxTime+300) + "ms", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".condition_w .obj").eq(4).find(".ico").css({"transition":"all 0.3s " + (maxTime+400) + "ms", "-webkit-transition":"all 0.3s " + (maxTime+400) + "ms", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".condition_w .obj").eq(5).find(".ico").css({"transition":"all 0.3s " + (maxTime+500) + "ms", "-webkit-transition":"all 0.3s " + (maxTime+500) + "ms", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});

					number21_2 = setTimeout(function(){
						$(".bg_cont .interview img").css({"display":"block","opacity":1});

						$(".condition_w .obj").eq(0).css({"transition":"", "-webkit-transition":"", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
						$(".condition_w .obj").eq(1).css({"transition":"", "-webkit-transition":"", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
						$(".condition_w .obj").eq(2).css({"transition":"", "-webkit-transition":"", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
						$(".condition_w .obj").eq(3).css({"transition":"", "-webkit-transition":"", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
						$(".condition_w .obj").eq(4).css({"transition":"", "-webkit-transition":"", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
						$(".condition_w .obj").eq(5).css({"transition":"", "-webkit-transition":"", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
						$(".condition_w .obj img").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "animation-name":"", "animation-duration": "","animation-delay":"","animation-fill-mode": "", "animation-timing-function":""});
					},maxTime);
				},600);
				if (maxTime < 1500)
				{
					maxTime = 1500;
				}
				pageDelay = maxTime + 1000;
			}else{
				interviewViedo02_Able = false;
				if(interview02wLoad_Able)
					interviewVideo02_w.pause();
				if(interview02mLoad_Able)
					interviewVideo02_m.pause();

				var maxTime = 0;
				setTimeout(function()
				{
					$(".f4_1 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
					$(".f4_1 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
					$(".f4_1 .movie_progress").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
					$(".f4_1 .caption_w .c_circle").css({"transition":"", "-webkit-transition":"", "opacity":0});
					$(".f4_1 .caption_w2").css({"transition":"", "-webkit-transition":"", "opacity":0});

					$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*16) + "px"});
					$(".condition_w").css({"transition":"","-webkit-transition":"","opacity":1, "display":"block"});
					$(".condition_w .obj").css({"transition":"","-webkit-transition":"","opacity":1});

					number21_3 = setTimeout(function(){

						for (var i = 0; i < $(".condition_w .obj").size(); i++)
						{
							var ranTime = (Math.random() * 6) + 8 * 100;
							var ranDelay = (Math.random() * 5) * 50;

							if (maxTime < (ranTime+ranDelay))
							{
								maxTime = ranTime+ranDelay;
							}
							if ($("body").hasClass("InternetExplorer"))
							{
								if(i % 2 == 0)
								{
									$(".condition_w .obj").eq(i).css({"animation-name":"IMAGESLIDE_LEFT-ANIMATION_IE", "animation-duration": ranTime + "ms","animation-delay":ranDelay + "ms","animation-fill-mode": "forwards", "animation-timing-function":"cubic-bezier(0.250, 0.460, 0.445, 1)"});
									$(".condition_w .obj").eq(i).find("> img").css({"animation-name":"IMAGESLIDE_IMAGE_LEFT-ANIMATION", "animation-duration": (ranTime+500) + "ms","animation-delay":ranDelay + "ms","animation-fill-mode": "forwards", "animation-timing-function":"cubic-bezier(0.250, 0.460, 0.445, 1)"});
								}
								else
								{
									$(".condition_w .obj").eq(i).css({"animation-name":"IMAGESLIDE_RIGHT-ANIMATION_IE", "animation-duration": ranTime + "ms","animation-delay":ranDelay + "ms","animation-fill-mode": "forwards", "animation-timing-function":"cubic-bezier(0.250, 0.460, 0.445, 1)"});
									$(".condition_w .obj").eq(i).find("> img").css({"animation-name":"IMAGESLIDE_IMAGE_RIGHT-ANIMATION", "animation-duration": (ranTime+500) + "ms","animation-delay":ranDelay + "ms","animation-fill-mode": "forwards", "animation-timing-function":"cubic-bezier(0.250, 0.460, 0.445, 1)"});
								}
							}else{
								if(i % 2 == 0)
								{
									$(".condition_w .obj").eq(i).css({"animation-name":"IMAGESLIDE_LEFT-ANIMATION", "animation-duration": ranTime + "ms","animation-delay":ranDelay + "ms","animation-fill-mode": "forwards", "animation-timing-function":"cubic-bezier(0.250, 0.460, 0.445, 1)"});
									$(".condition_w .obj").eq(i).find("> img").css({"animation-name":"IMAGESLIDE_IMAGE_LEFT-ANIMATION", "animation-duration": (ranTime+500) + "ms","animation-delay":ranDelay + "ms","animation-fill-mode": "forwards", "animation-timing-function":"cubic-bezier(0.250, 0.460, 0.445, 1)"});
								}
								else
								{
									$(".condition_w .obj").eq(i).css({"animation-name":"IMAGESLIDE_RIGHT-ANIMATION", "animation-duration": ranTime + "ms","animation-delay":ranDelay + "ms","animation-fill-mode": "forwards", "animation-timing-function":"cubic-bezier(0.250, 0.460, 0.445, 1)"});
									$(".condition_w .obj").eq(i).find("> img").css({"animation-name":"IMAGESLIDE_IMAGE_RIGHT-ANIMATION", "animation-duration": (ranTime+500) + "ms","animation-delay":ranDelay + "ms","animation-fill-mode": "forwards", "animation-timing-function":"cubic-bezier(0.250, 0.460, 0.445, 1)"});
								}
							}
						}
						
						$(".condition_w .obj").eq(0).find(".ico").css({"transition":"all 0.3s " + maxTime + "ms", "-webkit-transition":"all 0.3s " + maxTime + "ms", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
						$(".condition_w .obj").eq(1).find(".ico").css({"transition":"all 0.3s " + (maxTime+100) + "ms", "-webkit-transition":"all 0.3s " + (maxTime+100) + "ms", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
						$(".condition_w .obj").eq(2).find(".ico").css({"transition":"all 0.3s " + (maxTime+200) + "ms", "-webkit-transition":"all 0.3s " + (maxTime+200) + "ms", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
						$(".condition_w .obj").eq(3).find(".ico").css({"transition":"all 0.3s " + (maxTime+300) + "ms", "-webkit-transition":"all 0.3s " + (maxTime+300) + "ms", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
						$(".condition_w .obj").eq(4).find(".ico").css({"transition":"all 0.3s " + (maxTime+400) + "ms", "-webkit-transition":"all 0.3s " + (maxTime+400) + "ms", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
						$(".condition_w .obj").eq(5).find(".ico").css({"transition":"all 0.3s " + (maxTime+500) + "ms", "-webkit-transition":"all 0.3s " + (maxTime+500) + "ms", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});

						audioSound("max");

						number21_4 = setTimeout(function(){
							$(".bg_cont .interview img").css({"display":"block","opacity":1});

							$(".condition_w .obj").eq(0).css({"transition":"", "-webkit-transition":"", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
							$(".condition_w .obj").eq(1).css({"transition":"", "-webkit-transition":"", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
							$(".condition_w .obj").eq(2).css({"transition":"", "-webkit-transition":"", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
							$(".condition_w .obj").eq(3).css({"transition":"", "-webkit-transition":"", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
							$(".condition_w .obj").eq(4).css({"transition":"", "-webkit-transition":"", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
							$(".condition_w .obj").eq(5).css({"transition":"", "-webkit-transition":"", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
							$(".condition_w .obj img").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "animation-name":"", "animation-duration": "","animation-delay":"","animation-fill-mode": "", "animation-timing-function":""});

						},maxTime);
					},600);
				},100);
				if (maxTime < 1500)
				{
					maxTime = 1500;
				}
				pageDelay = maxTime + 1000;
			}
			guageMotion(2,15);
			break;
		}case 18:
		{
			featureIndex = 17;

			bgNumber = 5;
			if(oldShowPage < idx)
			{
				$(".tile_cont").css({"transition":"all 0.1s", "-webkit-transition":"all 0.1s", "opacity":0});
				$(".bg_cont .bg").eq(6).css("opacity",1);
				$(".inter_cont .panel_half_sf").css({"transition":"all 0.1s", "-webkit-transition":"all 0.1s", "opacity":0});
				$(".bg_cont").css({"transition":"all 0.1s","-webkit-transition":"all 0.1s","margin-top":-(windowHeight*5) + "px"});

				$(".condition_w .obj .ico").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".condition_w .obj img").css({"transition":"", "-webkit-transition":"", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
				$(".condition_w .obj").css({"transition":"", "-webkit-transition":"", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
				$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*17) + "px"});

				if($("body").hasClass("Safari"))
				{
					$(".condition_w .obj").eq(0).delay(300).animate({"opacity":0},500);
					$(".condition_w .obj").eq(1).delay(400).animate({"opacity":0},500);
					$(".condition_w .obj").eq(2).delay(500).animate({"opacity":0},500);
					$(".condition_w .obj").eq(3).delay(600).animate({"opacity":0},500);
					$(".condition_w .obj").eq(4).delay(700).animate({"opacity":0},500);
					$(".condition_w .obj").eq(5).delay(800).animate({"opacity":0},500);
				}else{
					$(".condition_w .obj").eq(0).css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":0});
					$(".condition_w .obj").eq(1).css({"transition":"all 0.5s 0.4s", "-webkit-transition":"all 0.5s 0.4s", "opacity":0});
					$(".condition_w .obj").eq(2).css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":0});
					$(".condition_w .obj").eq(3).css({"transition":"all 0.5s 0.6s", "-webkit-transition":"all 0.5s 0.6s", "opacity":0});
					$(".condition_w .obj").eq(4).css({"transition":"all 0.5s 0.7s", "-webkit-transition":"all 0.5s 0.7s", "opacity":0});
					$(".condition_w .obj").eq(5).css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "opacity":0});
				}
				number22_1 = setTimeout(function(){
					$(".f4_1 .txt").css({"opacity":1});
					$(".f4_1 .txt .title").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".f4_1 .txt .desc").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".f4_1 .movie_progress").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":1});
					$(".f4_1 .caption_w .c_circle").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":1});
					$(".f4_1 .movie_progress .progress_time").html("00:00");
					
					interview02Load();
					
					setTimeout(function(){
						$(".condition_w").css({"transition":"","-webkit-transition":"","opacity":0});
						$(".condition_w .obj").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "animation-name":"", "animation-duration": "","animation-delay":"","animation-fill-mode": "", "animation-timing-function":""});
						$(".condition_w .obj img").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "animation-name":"", "animation-duration": "","animation-delay":"","animation-fill-mode": "", "animation-timing-function":""});
					},500);
				},1300);

				pageDelay = 2100;
			}else{
				$(".f4_2 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});

				$(".inter_cont .sky").css({"transition":"all 0.1s 0.3s", "-webkit-transition":"all 0.1s 0.3s", "opacity":1});

				number22_3 = setTimeout(function(){
					$(".bg_cont .interview").css("opacity",1);
					$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*5) + "px"});
					$(".inter_cont .sky").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":0});
					setTimeout(function(){
						$(".inter_cont .sky").css({"display":"none"});
					},500);
					number22_4 = setTimeout(function(){
						$(".feature_cont").css({"transition":"margin-top 0.1s","-webkit-transition":"margin-top 0.1s","margin-top":-(windowHeight*17) + "px"});
						$(".f4_1 .txt").css({"opacity":1});
						$(".f4_1 .txt .title").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
						$(".f4_1 .txt .desc").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
						$(".f4_1 .movie_progress").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
						$(".f4_1 .caption_w .c_circle").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
						$(".f4_1 .movie_progress .progress_time").html("00:00");
						
						interview02Load();
					},100);
				},400);

				pageDelay = 1500;
			}
			guageMotion(2,16);
			break;
		}
		case 19:
		{
			startPosition = true;

			featureIndex = 18;

			bgNumber = 6;
			if(oldShowPage < idx)
			{
				interviewViedo02_Able = false;
				if(interview02wLoad_Able)
					interviewVideo02_w.pause();
				if(interview02mLoad_Able)
					interviewVideo02_m.pause();

				setTimeout(function(){
					$(".tile_cont").css("display","none");
					$(".f4_1 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
					$(".f4_1 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
					$(".f4_1 .movie_progress").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
					$(".f4_1 .caption_w .c_circle").css({"transition":"", "-webkit-transition":"", "opacity":0});
					$(".f4_1 .caption_w2").css({"transition":"", "-webkit-transition":"", "opacity":0});

					//$(".bg_cont .interview .vCover").css({"display":"block","opacity":1});
					//$("#interviewVideo2").first().attr('src','');

					audioSound("max");
					$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"","-webkit-transition":"","opacity":1, "bottom":"0px"});
					$(".inter_cont .sky").css({"display":"block"});
					$(".inter_cont .sky").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "opacity":1});
					number23_1 = setTimeout(function(){
						$(".feature_cont").css({"transition":"margin-top 0.1s","-webkit-transition":"margin-top 0.1s","margin-top":-(windowHeight*18) + "px"});
						$(".bg_cont .bg").eq(7).css("opacity",1);
						$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*6) + "px"});
						$(".bg_cont .skypanel_wrap .skypanel").css({"bottom":"0px"});

						number23_2 = setTimeout(function(){
							$(".inter_cont .sky").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":0});
							$(".f4_2 .txt .title").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
						},100);
					},800);
				},100);

				pageDelay = 1400;
			}else{
				$(".f4_3 .txt .ico_wrap").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_3 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_3 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});

				$(".bg_cont .bg").eq(7).css("opacity",1);
				$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*6) + "px"});

				$(".tile_cont .tile_cont_inner .tile img").attr("src", "images/panel_cell.jpg");

				$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"bottom 0.5s 0.3s","-webkit-transition":"bottom 0.5s 0.3s","bottom":"0px"});
				$(".feature_cont").css({"transition":"margin-top 0.1s 0.3s","-webkit-transition":"margin-top 0.1s 0.3s","margin-top":-(windowHeight*18) + "px"});
				$(".f4_2 .txt .title").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});

				pageDelay = 1300;
			}
			guageMotion(3,17);


			break;
		}
		case 20:
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

			var reBottom = -(1412 / 10000) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight();
			$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"bottom 0.5s 0.3s","-webkit-transition":"bottom 0.5s 0.3s","bottom":reBottom + "px"});
			$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*19) + "px"});

			$(".f4_3 .txt .ico_wrap").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
			$(".f4_3 .txt .title").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
			$(".f4_3 .txt .desc").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
			
			pageDelay = 1300;
			guageMotion(3,18);
			break;
		}
		case 21:
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

			var reBottom = -(2524 / 10000) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight();
			$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"bottom 0.5s 0.3s","-webkit-transition":"bottom 0.5s 0.3s","bottom":reBottom + "px"});
			$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*20) + "px"});

			$(".f4_4 .txt .ico_wrap").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
			$(".f4_4 .txt .title").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
			$(".f4_4 .txt .desc").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
			
			pageDelay = 1300;
			guageMotion(3,19);
			break;
		}
		case 22:
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

			var reBottom = -(4213 / 10000) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight();
			$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"bottom 0.5s 0.3s","-webkit-transition":"bottom 0.5s 0.3s","bottom":reBottom + "px"});

			$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*21) + "px"});

			$(".f4_5 .txt .ico_wrap").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
			$(".f4_5 .txt .title").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)", "opacity":1});
			$(".f4_5 .txt .desc").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)", "opacity":1});
			
			pageDelay = 1300;
			guageMotion(3,20);
			break;
		}
		case 23:
		{
			featureIndex = 22;

			bgNumber = 6;
			if(oldShowPage < idx)
			{
				$(".f4_5 .txt .ico_wrap").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_5 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_5 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});

				var reBottom = -(5719 / 10000) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight();
				$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"bottom 0.5s 0.3s","-webkit-transition":"bottom 0.5s 0.3s","bottom":reBottom + "px"});
				$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*22) + "px"});

				$(".f4_6 .txt .ico_wrap").css({"transition":"all 0.5s 0.5s","-webkit-transition":"all 0.5s 0.5s", "opacity":1});
				$(".f4_6 .txt .title").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)", "opacity":1});
				$(".f4_6 .txt .desc").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)", "opacity":1});

				pageDelay = 1300;
			}else{
				$(".bg_cont .bg.dot_map img").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s", "opacity":0});
				$(".f5_1 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f5_1 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});

				$(".f5_1 .ico_wrap.type1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f5_1 .ico_wrap.line").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f5_1 .ico_wrap.type2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});


				var reBottom = -(8920 / 10000) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight();
				$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"","-webkit-transition":"","bottom":reBottom + "px"});

				$(".bg_cont .skypanel_wrap").css({"transition":"opacity 0.3s 0.3s", "-webkit-transition":"opacity 0.3s 0.3s", "opacity":1});
				$(".bg_cont .bg").eq(7).css("opacity",1);
				number27_1 = setTimeout(function(){
					$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*6) + "px"});
					$(".indicator_wrap").removeClass("type2");
					$(".header_wrap").removeClass("type2");
					var reBottom = -(5719 / 10000) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight();
					$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"all 1s","-webkit-transition":"all 1s","bottom":reBottom + "px", "opacity":1});
					$(".feature_cont").css({"transition":"margin-top 0.5s","-webkit-transition":"margin-top 0.5s","margin-top":-(windowHeight*22) + "px"});

					$(".inter_cont .inter.light img").css({"transition":"all 1s","-webkit-transition":"all 1s","opacity":0});

					$(".f4_6 .txt .ico_wrap").css({"transition":"all 0.5s 1s", "-webkit-transition":"all 0.5s 1s", "opacity":1});
					$(".f4_6 .txt .title").css({"transition":"all 0.5s 1.3s", "-webkit-transition":"all 0.5s 1.3s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".f4_6 .txt .desc").css({"transition":"all 0.5s 1.3s", "-webkit-transition":"all 0.5s 1.3s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
				},1000);

				pageDelay = 2800;
			}

			guageMotion(3,21);
			break;
		}
		case 24:
		{
			startPosition = true;

			featureIndex = 24;

			bgNumber = 7;
			if(oldShowPage < idx)
			{
				$(".f4_6 .txt .ico_wrap").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f4_6 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s","transform":"", "-webkit-transform":"", "opacity":0});
				$(".f4_6 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"", "-webkit-transform":"", "opacity":0});
				
				var reBottom = -(8920 / 10000) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight();
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
					$(".f5_1 .txt .title").css({"transition":"all 0.5s 0.7s", "-webkit-transition":"all 0.5s 0.7s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".f5_1 .txt .desc").css({"transition":"all 0.5s 0.7s", "-webkit-transition":"all 0.5s 0.7s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});

					$(".f5_1 .ico_wrap.type1").css({"transition":"all 0.5s 1.2s", "-webkit-transition":"all 0.5s 1.2s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".f5_1 .ico_wrap.line").css({"transition":"all 0.3s 0.7s", "-webkit-transition":"all 0.3s 0.7s", "opacity":1});
					$(".f5_1 .ico_wrap.type2").css({"transition":"all 0.5s 1.2s", "-webkit-transition":"all 0.5s 1.2s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});

				},1000);

				pageDelay = 2700;
			}else{
				$(".f5_2 .location_popup .lo_popup_close a").trigger("click");
				$(".f5_2 .dot").css({"transition":"all 0.3s", "opacity":0});
				$(".f5_2 .click_ico").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
				$(".f5_2 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f5_2 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});

				$(".feature_cont").css({"transition":"margin-top 0.5s 0.3s","-webkit-transition":"margin-top 0.5s 0.3s","margin-top":-(windowHeight*24) + "px"});

				$(".bg_cont .bg.dot_map img").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "left":"50%", "top":"50%", "margin-top":"", "margin-left":"", "transform":"scale(1.5)", "-webkit-transform":"scale(1.5)"});

				$(".f5_1 .txt .title").css({"transition":"all 0.5s 1.3s", "-webkit-transition":"all 0.5s 1.3s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
				$(".f5_1 .txt .desc").css({"transition":"all 0.5s 1.3s", "-webkit-transition":"all 0.5s 1.3s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});

				$(".f5_1 .ico_wrap.type1").css({"transition":"all 0.5s 1.8s", "-webkit-transition":"all 0.5s 1.8s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
				$(".f5_1 .ico_wrap.line").css({"transition":"all 0.3s 1.3s", "-webkit-transition":"all 0.3s 1.3s", "opacity":1});
				$(".f5_1 .ico_wrap.type2").css({"transition":"all 0.5s 1.8s", "-webkit-transition":"all 0.5s 1.8s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});

				pageDelay = 2300;
			}

			guageMotion(4,22);

			break;
		}
		case 25:
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
				$(".bg_cont .bg.dot_map img").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "left":"", "top":"", "margin-top":"", "margin-left":"", "transform":"scale(1.0)", "-webkit-transform":"scale(1.0)"});
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

					$(".f5_2 .txt .title").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					$(".f5_2 .txt .desc").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
				},800);

				pageDelay = 1900;
			}else{
				endingVideo.pause();
				$(".f5_3 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f5_3 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".f5_3 .txt .btn_wrap a").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
				$(".tile_cont").css({"transform":"", "-webkit-transform":"", "transition":"", "-webkit-transition":"", "z-index":1, "display":"block"});

				$(".f5_2 .map_area").css({"transform":"", "-webkit-transform":"", "transition":"", "-webkit-transition":""});
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

					$(".bg_cont .bg.dot_map img").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "left":"", "top":"", "margin-top":"", "margin-left":"", "transform":"scale(1.0)", "-webkit-transform":"scale(1.0)", "opacity":1});
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

						$(".f5_2 .txt .title").css({"transition":"all 0.5s 1.0s", "-webkit-transition":"all 0.5s 1.0s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
						$(".f5_2 .txt .desc").css({"transition":"all 0.5s 1.0s", "-webkit-transition":"all 0.5s 1.0s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
					},500);
				},800);

				pageDelay = 2800;
			}

			guageMotion(4,23);
			break;
		}case 26:
		{
			featureIndex = 26;

			bgNumber = 8;

			$(".f5_2 .location_popup .lo_popup_close a").trigger("click");


			$(".f5_2 .dot").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
			$(".f5_2 .click_ico").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
			$(".f5_2 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
			$(".f5_2 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
			$(".bg_cont .bg.dot_map img").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
			$(".tile_cont .tile_cont_inner .tile").css({"opacity":1});
			$(".tile_cont .tile_cont_inner .tile img").attr("src", "images/panel_white.jpg");
			$(".bg_cont .bg").eq(9).css("opacity",1);
			$(".f5_3 .txt").css("opacity",1);
			number30_1 = setTimeout(function(){

				$(".tile_cont").css({"transform":"", "-webkit-transform":"", "transition":"", "-webkit-transition":"", "z-index":1, "display":"block", "opacity":1});
				number30_2 = setTimeout(function(){
					$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*8) + "px"});
					motionGridTile.Hide();
					number30_4 = setTimeout(function(){
						$(".indicator_wrap").removeClass("type2");
						$(".header_wrap").removeClass("type2");
					},700);
					number30_3 = setTimeout(function(){

						$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*26) + "px"});


						$(".f5_3 .txt .title").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
						$(".f5_3 .txt .desc").css({"transition":"all 0.5s 0.3s", "-webkit-transition":"all 0.5s 0.3s", "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)", "opacity":1});
						$(".f5_3 .txt .btn_wrap a").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "transform":"scale(1.0)", "-webkit-transform":"scale(1.0)", "opacity":1});
						$(".bg_cont .forest").find("video").each(function(){
							if($(this).parent().find(".vCover").css("display") == "block")
							{
								$(this).parent().find(".vCover").animate({opacity:0},300,function(){
									$(this).css("display","none");
								});
							}

							if(this.paused){
								this.play();
							}
						});
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
		pageInteraction_Able = true;
	},pageDelay);
	console.log("oldShowPage : " + oldShowPage + " // showPage : " + idx + "// pageDelay : " + pageDelay);
	oldShowPage = idx;
}
var delayTimeout = "";

