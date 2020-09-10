function checkBrowser()
{
	var agt = navigator.userAgent.toLowerCase();
	var rv = -1; // Return value assumes failure.    
	if (navigator.appName == 'Microsoft Internet Explorer') {        
		var ua = navigator.userAgent;        
		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");        
		if (re.exec(ua) != null)            
			rv = parseFloat(RegExp.$1);    

		//return "IE" + rv;
		return "InternetExplorer";
	}
	
	if (agt.indexOf("chrome") != -1) return 'Chrome'; 
	if (agt.indexOf("opera") != -1) return 'Opera'; 
	if (agt.indexOf("staroffice") != -1) return 'StarOffice'; 
	if (agt.indexOf("webtv") != -1) return 'WebTV'; 
	if (agt.indexOf("beonex") != -1) return 'Beonex'; 
	if (agt.indexOf("chimera") != -1) return 'Chimera'; 
	if (agt.indexOf("netpositive") != -1) return 'NetPositive'; 
	if (agt.indexOf("phoenix") != -1) return 'Phoenix'; 
	if (agt.indexOf("firefox") != -1) return 'Firefox'; 
	if (agt.indexOf("safari") != -1) return 'Safari'; 
	if (agt.indexOf("skipstone") != -1) return 'SkipStone'; 
	if (agt.indexOf("msie") != -1) return 'InternetExplorer'; 
	if (agt.indexOf("netscape") != -1) return 'Netscape'; 
	//if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
	if (agt.indexOf("mozilla/5.0") != -1) return 'InternetExplorer';

	//return 'InternetExplorer';
}

function checkIE_Version()
{
	var agt = navigator.userAgent.toLowerCase();
	var rv = -1; // Return value assumes failure.    
	if (navigator.appName == 'Microsoft Internet Explorer') {        
		var ua = navigator.userAgent;        
		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");        
		if (re.exec(ua) != null)            
			rv = parseFloat(RegExp.$1);    

		return "IE" + rv;
		
	}
}

var orientationChk;
function check_device(){
	var mobileKeyWords = new Array('iPhone', 'iPad', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson'); //160625 device 목록에 ipad 추가
	var device_name = '';
	for (var word in mobileKeyWords){
		if (navigator.userAgent.match(mobileKeyWords[word]) != null){
			device_name = mobileKeyWords[word];
			break;
		}
	}
	
	if (device_name == "iPhone" || device_name == "iPad" || device_name == "iPod")
	{
		return "ios";
	}else if (device_name == "Android")
	{
		return "android";
	}
	
	/*if(window.orientation == 0){ // portrait
		orientationChk = 'portrait';
		if(viewportWidth() < 560)
			return device_name;
		else
			return '';
	}else { // landscape
		orientationChk = 'landscape';
		
		if(viewportWidth() < 966)
			return device_name;
		else
			return '';
	}*/
}



function check_allDevice(){
	var mobileKeyWords = new Array('iPhone', 'iPad', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson'); //160625 device 목록에 ipad 추가
	var device_name = '';
	for (var word in mobileKeyWords){
		if (navigator.userAgent.match(mobileKeyWords[word]) != null){
			device_name = mobileKeyWords[word];
			break;
		}
	}

	return device_name;
}


function positinoSize(px)
{
	if ($("body").hasClass("InternetExplorer"))
	{
		/*if ($("body").hasClass("w_vh"))
		{
			if (px == 0)
				return "0vh"; 
			else
				return px / 1080 * windowHeight + "px"; 
		}else if ($("body").hasClass("w_vw"))
		{
			if (px == 0)
				return "0vw"
			else
				return px / 1920 * windowWidth + "px"; 
		}else if ($("body").hasClass("w_px"))
		{
			return px / 1080 * windowHeight + "px";
		}else if ($("body").hasClass("m_vw"))
		{
			if (px == 0)
				return "0vw"
			else
				return px / 1080 * windowWidth + "px"; 
		}*/
		return px + "px";
	}else{
		/*if ($("body").hasClass("w_vh"))
		{
			if (px == 0)
				return "0vh"; 
			else
				return px / 1080 * 100 + "vh"; 
		}else if ($("body").hasClass("w_vw"))
		{
			if (px == 0)
				return "0vw"
			else
				return px / 1920 * 100 + "vw"; 
		}else if ($("body").hasClass("w_px"))
		{
			return px / 1080 * windowHeight + "px";
		}else if ($("body").hasClass("m_vw"))
		{
			if (px == 0)
				return "0vw"
			else
				return px / 1920 * 100 + "vw"; 
		}*/

		return px + "px";
	}
}

function mobileReSet()
{
	if ($(window).outerWidth() > 768 && $("body").hasClass("m_vw"))
	{
		if ($(".mobile_menu_wrap").css("display") == "block")
		{
			if (nowShowPage == 7 || nowShowPage == 8)
			{
				logoColor_Able = true;
			}	
		}
		if (pageLoading)
			$(".indicator_wrap").css({"transition":"opacity 0.5s", "-webkit-transition":"opacity 0.5s", "opacity":1});
		$(".header_wrap").removeClass("open");
		$(".mobile_menu_wrap").css({"display":"none", "opacity":0});
	}else{
	}

	if (!$("body").hasClass("m_header") && !$("body").hasClass("m_vw")) 
	{
		if ($(".mobile_menu_wrap").css("display") == "block")
		{
			if (nowShowPage == 7 || nowShowPage == 8)
			{
				logoColor_Able = true;
			}	
		}
		if (pageLoading)
			$(".indicator_wrap").css({"transition":"opacity 0.5s", "-webkit-transition":"opacity 0.5s", "opacity":1});
		$(".header_wrap").removeClass("open");
		$(".mobile_menu_wrap").css({"display":"none", "opacity":0});
	}
}

function pageResizing(){
	if (mobileType_Able && $(".header_wrap").hasClass("type2"))
	{
		if ($(".mobile_menu_wrap").css("display") == "none")
		{
			mobileType_Able = false;
			$(".header_wrap").addClass("type2");
		}
	}
	
	if (featureIndex == 26)
	{
		$(".indicator_wrap .progress_bg").css({"width":"100%"});
	}else{
		if ($(window).outerWidth() > 1920)
		{
			if ($("body").hasClass("m_size"))
			{
				var progressWidth = ($(window).outerWidth() - 1024) / 2;
				$(".indicator_wrap .progress_bg").css({"width":progressWidth + "px"});
			}else{
				var progressWidth = ($(window).outerWidth() - 1920) / 2;
				$(".indicator_wrap .progress_bg").css({"width":progressWidth + "px"});
			}
		}else{
			if ($("body").hasClass("m_size"))
			{
				var progressWidth = ($(window).outerWidth() - 1024) / 2;
				$(".indicator_wrap .progress_bg").css({"width":progressWidth + "px"});
			}else{
				$(".indicator_wrap .progress_bg").css({"width":"0px"});
			}
		}
	}
	switch (featureIndex)
	{
		case 0:
		{
			if (!$("body").hasClass("m_vw"))
			{			
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

				$(".inter_cont .sun img").css({"transform":"scale(2.0) translate(0px, " + sunP + "px)", "-webkit-transform":"scale(2.0) translate(0px, " + sunP + "px)"});
			}else{
				var sunHeight = $(".inter_cont .sun img").outerHeight();
				var sunTop = Math.abs(parseInt($(".inter_cont .sun img").css("margin-top")));

				var sunP = (sunTop / 2) + (windowHeight * 0.28);

				console.log("pageResizing() - 2");
				$(".inter_cont .sun img").css({"transform":"scale(2.0) translate(0px, " + sunP + "px)", "-webkit-transform":"scale(2.0) translate(0px, " + sunP + "px)"});
			}

			break;
		}
		case 1:
		{
			$(".inter_cont .sun img").css({"margin-top":"", "margin-left":""});
			break;
		}
		case 3:
		{
			if (!$("body").hasClass("m_vw"))
			{
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
				
			}
			break;
		}
		case 6:
		{
			if ($(".header_wrap .mobile_menu_wrap").css("display") == "none")
			{
				if (logoColor_Able)
				{
				}else{
				}
			}

			if (!$("body").hasClass("m_vw"))
			{
				if ($("body").hasClass("m_header"))
				{
					$(".inter_cont .panel .panel_obj1").css({"transition":"", "-webkit-transition":"", "margin-left":$(".f3_2 .obj1").css("margin-left"), "margin-top":(parseInt($(".f3_2 .obj1").css("margin-top")) + 30) +  "px", "transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)", "-webkit-transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)"});
					$(".inter_cont .panel .panel_obj2").css({"transition":"", "-webkit-transition":"", "margin-left":$(".f3_2 .obj2").css("margin-left"), "margin-top":(parseInt($(".f3_2 .obj2").css("margin-top")) + 30) +  "px", "transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)", "-webkit-transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)"});
				}else{
					$(".inter_cont .panel .panel_obj1").css({"transition":"", "-webkit-transition":"", "margin-left":$(".f3_2 .obj1").css("margin-left"), "margin-top":(parseInt($(".f3_2 .obj1").css("margin-top")) - 50) +  "px", "transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)", "-webkit-transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)"});
					$(".inter_cont .panel .panel_obj2").css({"transition":"", "-webkit-transition":"", "margin-left":$(".f3_2 .obj2").css("margin-left"), "margin-top":(parseInt($(".f3_2 .obj2").css("margin-top")) - 50) +  "px", "transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)", "-webkit-transform":"scale(1.0) perspective(203px) rotate3d(1,1,0, 0deg) translate(0px, 0px)"});
				}
			}else{
				var textHeight = showPopupSize * windowWidth;
				$(".m_vw .f3_2 .obj_wrap").css({"transition":"", "-webkit-transition":"","transform":"translate(0px, " + textHeight + "px)"});
			}


			
			break;
		}
		case 7:
		{
			if ($(".header_wrap .mobile_menu_wrap").css("display") == "none")
			{
				if (logoColor_Able)
				{
				}else{
				}
			}

			if (!$("body").hasClass("m_vw"))
			{
				var panelWidth = $(".inter_cont .panel .panel_obj1").outerWidth();
				var panelHeight = $(".inter_cont .panel .panel_obj1").outerHeight();
				if (windowWidth < 1025)
				{
					$(".inter_cont .panel .panel_obj1").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.6) perspective(" + positinoSize(203) + ") rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "-webkit-transform":"scale(1.6) perspective(" + positinoSize(203) + ") rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "margin-left":-(panelWidth/2 - 70) + "px", "margin-top":-(panelHeight/2 - 30) + "px"});
					$(".inter_cont .panel .panel_obj2").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.6) perspective(" + positinoSize(203) + ") rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "-webkit-transform":"scale(1.6) perspective(" + positinoSize(203) + ") rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "margin-left":-(panelWidth/2 - 70) + "px", "margin-top":-(panelHeight/2 - 30) + "px"});
				}else{
					$(".inter_cont .panel .panel_obj1").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.6) perspective(" + positinoSize(203) + ") rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "-webkit-transform":"scale(1.6) perspective(" + positinoSize(203) + ") rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "margin-left":-(panelWidth/2) + "px", "margin-top":-(panelHeight/2) + "px"});
					$(".inter_cont .panel .panel_obj2").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.6) perspective(" + positinoSize(203) + ") rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "-webkit-transform":"scale(1.6) perspective(" + positinoSize(203) + ") rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "margin-left":-(panelWidth/2) + "px", "margin-top":-(panelHeight/2) + "px"});
				}

				if ($("body").hasClass("m_header"))
				{
					$(".inter_cont .panel .panel_obj1").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.6) perspective(" + positinoSize(203) + ") rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "-webkit-transform":"scale(1.6) perspective(" + positinoSize(203) + ") rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "margin-left":-(panelWidth/2 - 130) + "px", "margin-top":-(panelHeight/2 - 130) + "px"});
					$(".inter_cont .panel .panel_obj2").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.6) perspective(" + positinoSize(203) + ") rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "-webkit-transform":"scale(1.6) perspective(" + positinoSize(203) + ") rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "margin-left":-(panelWidth/2 - 130) + "px", "margin-top":-(panelHeight/2 - 130) + "px"});
				}else if ($("body").hasClass("m_size"))
				{
					$(".inter_cont .panel .panel_obj1").css({"transition":"", "-webkit-transition":"", "margin-left":-(panelWidth/2 - 80) + "px", "margin-top":-(panelHeight/2 - 30) + "px"});
					$(".inter_cont .panel .panel_obj2").css({"transition":"", "-webkit-transition":"", "margin-left":-(panelWidth/2 - 80) + "px", "margin-top":-(panelHeight/2 - 30) + "px"});
				}
			}else{
				var panelM_Left = -($(".inter_cont .panel .panel_obj1").outerWidth() / 2);
				var panelM_Top = -($(".inter_cont .panel .panel_obj1").outerHeight() / 2) - 60;
				if (windowWidth > 550)
					panelM_Top = -($(".inter_cont .panel .panel_obj1").outerHeight() / 2) - 95;

				$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.1s 0.8s", "-webkit-transition":"all 0.1s 0.8s", "transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "-webkit-transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "margin-left":panelM_Left + "px", "margin-top":panelM_Top + "px"});
				$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.1s 0.8s", "-webkit-transition":"all 0.1s 0.8s", "transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "-webkit-transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "margin-left":panelM_Left + "px", "margin-top":panelM_Top + "px"});
			}
			break;
		}
		case 10:
		{
			if ($("body").hasClass("m_vw"))
			{
				if (nowShowPage == 11)
				{
					$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).css({"margin-top":-($(".f3_6 .feature_inner").outerHeight()) + "px"});
				}
			}
			
		}
		case 11:
		{
			if ($("body").hasClass("m_vw"))
			{
				if (nowShowPage == 13)
				{
					$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).css({"margin-top":-($(".f3_7 .feature_inner").outerHeight()) + "px"});
				}
			}
		}
		case 15:
		{
			if (nowShowPage == 15 || nowShowPage == 17)
			{
				$(".f3_11 .obj").eq(0).css({"transition":"", "-webkit-transition":"", "opacity":1, "transform":"", "-webkit-transform":""});
				$(".f3_11 .obj").eq(1).css({"transition":"", "-webkit-transition":"", "opacity":1, "transform":"", "-webkit-transform":""});
				$(".f3_11 .obj").eq(2).css({"transition":"", "-webkit-transition":"", "opacity":1, "transform":"", "-webkit-transform":""});
				$(".f3_11 .obj").eq(3).css({"transition":"", "-webkit-transition":"", "opacity":1, "transform":"", "-webkit-transform":""});
				$(".f3_11 .obj").eq(4).css({"transition":"", "-webkit-transition":"", "opacity":1, "transform":"", "-webkit-transform":""});
			}else{
				$(".f3_11 .obj_wrap").css({"transition":"", "-webkit-transition":"", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});

				$(".f3_11 .obj").eq(0).css({"transition":"", "-webkit-transition":"", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
				$(".f3_11 .obj").eq(1).css({"transition":"", "-webkit-transition":"", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
				$(".f3_11 .obj").eq(2).css({"transition":"", "-webkit-transition":"", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
				$(".f3_11 .obj").eq(3).css({"transition":"", "-webkit-transition":"", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
				$(".f3_11 .obj").eq(4).css({"transition":"", "-webkit-transition":"", "opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});

				$(".f3_11 .obj").eq(0).find(".obj_txt").css({"transition":"", "-webkit-transition":"", "opacity":1});
				$(".f3_11 .obj").eq(1).find(".obj_txt").css({"transition":"", "-webkit-transition":"", "opacity":0});
				$(".f3_11 .obj").eq(2).find(".obj_txt").css({"transition":"", "-webkit-transition":"", "opacity":0});
				$(".f3_11 .obj").eq(3).find(".obj_txt").css({"transition":"", "-webkit-transition":"", "opacity":0});
				$(".f3_11 .obj").eq(4).find(".obj_txt").css({"transition":"", "-webkit-transition":"", "opacity":0});
			}
			break;
		}
		case 18:
		{
			var moveBottom = 0;
			$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"","-webkit-transition":"","opacity":1, "bottom":moveBottom + "px"});
			break;
		}
		case 19:
		{
			var moveBottom = 0;
			if (!$("body").hasClass("m_vw"))
			{
				moveBottom = -(1412 / 10000) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight();
			}else{
				moveBottom = -(2232 / 8500) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight() + ($(window).outerHeight() / 2);
			}
			$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"","-webkit-transition":"","opacity":1, "bottom":moveBottom + "px"});
			break;
		}
		case 20:
		{
			var moveBottom = 0;
			if (!$("body").hasClass("m_vw"))
			{
				moveBottom = -(2524 / 10000) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight();
			}else{
				moveBottom = -(3900 / 8500) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight() + ($(window).outerHeight() / 2);
			}
			$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"","-webkit-transition":"","opacity":1, "bottom":moveBottom + "px"});
			break;
		}
		case 21:
		{
			var moveBottom = 0;
			if (!$("body").hasClass("m_vw"))
			{
				moveBottom = -(4213 / 10000) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight();
			}else{
				moveBottom = -(5475 / 8500) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight() + ($(window).outerHeight() / 2);
			}
			$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"","-webkit-transition":"","opacity":1, "bottom":moveBottom + "px"});
			break;
		}	
		case 22:
		{
			var moveBottom = 0;
			if (!$("body").hasClass("m_vw"))
			{
				moveBottom = -(5719 / 10000) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight();
			}else{
				moveBottom = -(6972 / 8500) * $(".bg_cont .skypanel_wrap .skypanel").outerHeight() + ($(window).outerHeight() / 2);
			}
			$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"","-webkit-transition":"","opacity":1, "bottom":moveBottom + "px"});
			break;
		}
	}
}

function pageChange(t)
{
	console.log("*******************************************************");
	console.log("pageChange : " + t + ", featureIndex : " + featureIndex);
	console.log("*******************************************************");

	if (t == "web")
	{
		if ($(".indicator_wrap").css("opacity") == 1)
		{
			$(".indicator_wrap .nav li").css({"transform":"translate(0px,0px)", "-webkit-transform":"translate(0px,0px)", "opacity":1});
		}
		
		console.log("pageChange nowShowPage : " + nowShowPage);
		if (nowShowPage == 10 || nowShowPage == 11)
		{
			console.log("1. pageChange fullDelta : " + fullDelta);
			oldShowPage = 10;
			oldPageIndex = 10;
			if (nowShowPage == 11)
			{
				fullDelta--;
				nowShowPage = nowShowPage - 1;
			}			
		}else if (nowShowPage == 12 || nowShowPage == 13)
		{
			console.log("2. pageChange fullDelta : " + fullDelta);
			oldShowPage = 11;
			oldPageIndex = 11;
			if (nowShowPage == 12)
			{
				fullDelta = fullDelta - 1;
				nowShowPage = nowShowPage - 1;
			}else{
				fullDelta = fullDelta - 2;
				nowShowPage = nowShowPage - 2;
			}
			
		}else if (nowShowPage > 13)
		{
			console.log("3. pageChange fullDelta : " + fullDelta);
			oldShowPage = nowShowPage - 2;
			oldPageIndex = nowShowPage - 2;
			fullDelta = fullDelta - 2;
			nowShowPage = nowShowPage - 2;
		}
	}else
	{
		$(".m_vw .movie_progress .control_btn").removeClass("pause");
		$(".m_vw .movie_progress .control_btn").addClass("play");

		console.log("nowShowPage : " + nowShowPage);
		if (nowShowPage == 10)
		{
			oldShowPage = 10;
			oldPageIndex = 10;
		}else if (nowShowPage == 11)
		{
			oldShowPage = 11;
			oldPageIndex = 11;
			fullDelta = fullDelta + 1;
			nowShowPage = nowShowPage + 1;
		}else if (nowShowPage > 11)
		{
			console.log("Mobile pageChange fullDelta : " + fullDelta);

			oldShowPage = nowShowPage + 2;
			oldPageIndex = nowShowPage + 2;
			fullDelta = fullDelta + 2;
			nowShowPage = nowShowPage + 2;
		}

		$(".vCover").css({"transition":"", "-webkit-transition":"","display":"block", "opacity":1});
		$(".tile_cont").css({"transform":""});
	}

	switch (featureIndex)
	{
		case 2:
		{
			$(".inter_cont .earth .type2").css({"opacity":0});
			break;
		}
		case 5:
		{
			if (t == "web")
			{
				$(".f2_4_line").css({"transition":"","-webkit-transition":"","width":"3500px","opacity":1});
			}else{
				$(".f2_4_line").css({"transition":"","-webkit-transition":"","width":"","opacity":1});
			}
			break;
		}
		case 6:
		{
			if (!$("body").hasClass("m_vw"))
			{
				$(".inter_cont .panel").css({"opacity":1});
			}
			
			if ($(".header_wrap .mobile_menu_wrap").css("display") == "none")
			{
				if (t == "web")
				{
				}else{
				}
			}

			if (t == "web")
			{
				$(".f3_2 .txt .desc p").css({"display":"block", "opacity":"1"});
				$(".f3_2 .obj_wrap").css({"transform":"", "-webkit-transition":""});
				$(".f3_2 .mobile_txt_btn a").removeClass("active");
				showPopupSize = 0;
			}else{
				$(".f3_2 .txt .desc p").css({"display":"none", "opacity":"0"});
				$(".f3_2 .obj_wrap").css({"transform":"", "-webkit-transition":""});
			}
			break;
		}
		case 7:
		{
			if (!$("body").hasClass("m_vw"))
			{
				var panelWidth = $(".inter_cont .panel .panel_obj1").outerWidth();
				var panelHeight = $(".inter_cont .panel .panel_obj1").outerHeight();
				$(".inter_cont .panel .panel_obj1").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.6) perspective(" + positinoSize(203) + ") rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "-webkit-transform":"scale(1.6) perspective(" + positinoSize(203) + ") rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "margin-left":-(panelWidth/2) + "px", "margin-top":-(panelHeight/2) + "px"});
				$(".inter_cont .panel .panel_obj2").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.6) perspective(" + positinoSize(203) + ") rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "-webkit-transform":"scale(1.6) perspective(" + positinoSize(203) + ") rotate3d(1,1,0, 50deg) translate(-100px, -100px)", "margin-left":-(panelWidth/2) + "px", "margin-top":-(panelHeight/2) + "px"});
				$(".inter_cont .panel").css({"opacity":1});
			}else{
				var panelM_Left = -($(".inter_cont .panel .panel_obj1").outerWidth() / 2);
				var panelM_Top = -($(".inter_cont .panel .panel_obj1").outerHeight() / 2) - 50;

				$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.1s 0.8s", "-webkit-transition":"all 0.1s 0.8s", "transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "-webkit-transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "margin-left":panelM_Left + "px", "margin-top":panelM_Top + "px"});
				$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.1s 0.8s", "-webkit-transition":"all 0.1s 0.8s", "transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "-webkit-transform":"scale(1) perspective(67.18vw) rotate3d(1,1,0, 50deg)", "margin-left":panelM_Left + "px", "margin-top":panelM_Top + "px"});
			}

			if ($(".header_wrap .mobile_menu_wrap").css("display") == "none")
			{
				if (t == "web")
				{
				}else{
				}
			}
			break;
		}
		case 8:
		{
			if (t == "web")
			{
				$(".tile_cont .tile_cont_inner .tile").css({"opacity":1});
			}else{

			}
			break;
		}		
		case 9:
		{
			if (t == "web")
			{
				$(".bg_cont .lab img").css({"display":"none","opacity":0});
				factoryVideo.play();
			}else{
				$(".tile_cont").css({"display":"none"});	
				$(".bg_cont .lab img").css({"display":"block","opacity":1});
			}
			break;
		}
		case 10:
		{
			if (t == "web")
			{
				$(".bg_cont .lab img").css({"display":"none","opacity":0});
				$(".f3_6 .box_wrap .box_sec").css({"opacity":1, "margin-top":""});
				$(".f3_6 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"","-webkit-transition":"","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)", "opacity":1});
				$(".f3_6 .box_wrap .box_sec").eq(0).find(".box").css({"transition":"","-webkit-transition":"","opacity":1});
				$(".f3_6 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"","-webkit-transition":"","opacity":1});
				$(".f3_6 .box_wrap .box_sec").eq(0).find(".btn").css({"transition":"","-webkit-transition":"","opacity":1});

				$(".f3_6 .box_wrap .box_sec").eq(1).find(".txt").css({"transition":"","-webkit-transition":"","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)", "opacity":1});
				$(".f3_6 .box_wrap .box_sec").eq(1).find(".box").css({"transition":"","-webkit-transition":"","opacity":1});
				$(".f3_6 .box_wrap .box_sec").eq(1).find(".obj_wrap").css({"transition":"","-webkit-transition":"","opacity":1});
				$(".f3_6 .box_wrap .box_sec").eq(1).find(".btn").css({"transition":"","-webkit-transition":"","opacity":1});

				$(".f3_67_bg").css({"display":"block"});
				$(".f3_67_bg .f3_6_bg").css({"display":"block", "opacity":1});
				factoryVideo.pause();
				$(".bg_cont .lab .vCover").css({"opacity":1});
				$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*4) + "px"});
			}else{
				$(".tile_cont").css({"display":"none"});
				$(".bg_cont .lab img").css({"display":"block","opacity":1});
				$(".f3_6 .box_wrap .box").css({"opacity":1});
				$(".f3_67_bg").css({"display":"none"});
				$(".f3_67_bg .f3_6_bg").css({"display":"none"});
				$(".f3_67_bg .f3_7_bg").css({"display":"none"});

				if ($(".f3_6 .slider_wrap").css("display") == "block")
				{
					if ($(".f3_6 .slider_wrap .slider_cont.cont1").css("display") == "block")
					{
						$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).css({"margin-top":"0px"});
					}else if ($(".f3_6 .slider_wrap .slider_cont.cont2").css("display") == "block")
					{
						$(".m_vw .f3_6 .box_wrap .box_sec").eq(0).css({"margin-top":-($(".f3_6 .feature_inner").outerHeight()) + "px"});

						oldShowPage++;
						oldPageIndex++;
						fullDelta++;
						nowShowPage++;
					}
				}
			}
			break;
		}
		case 11:
		{
			if (t == "web")
			{
				$(".bg_cont .lab img").css({"display":"none","opacity":0});
				$(".f3_7 .box_wrap .box_sec").css({"opacity":1, "margin-top":""});
				$(".f3_7 .box_wrap .box_sec").eq(0).find(".txt").css({"transition":"","-webkit-transition":"","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)", "opacity":1});
				$(".f3_7 .box_wrap .box_sec").eq(0).find(".box").css({"transition":"","-webkit-transition":"","opacity":1});
				$(".f3_7 .box_wrap .box_sec").eq(0).find(".obj_wrap").css({"transition":"","-webkit-transition":"","opacity":1});
				$(".f3_7 .box_wrap .box_sec").eq(0).find(".btn").css({"transition":"","-webkit-transition":"","opacity":1});

				$(".f3_7 .box_wrap .box_sec").eq(1).find(".txt").css({"transition":"","-webkit-transition":"","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)", "opacity":1});
				$(".f3_7 .box_wrap .box_sec").eq(1).find(".box").css({"transition":"","-webkit-transition":"","opacity":1});
				$(".f3_7 .box_wrap .box_sec").eq(1).find(".obj_wrap").css({"transition":"","-webkit-transition":"","opacity":1});
				$(".f3_7 .box_wrap .box_sec").eq(1).find(".btn").css({"transition":"","-webkit-transition":"","opacity":1});

				$(".f3_67_bg").css({"display":"block"});
				$(".f3_67_bg .f3_7_bg").css({"display":"block", "opacity":1});
				
				factoryVideo.pause();
				$(".bg_cont .lab .vCover").css({"opacity":1});
				$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*4) + "px"});

				if ($(".f3_7 .slider_wrap").css("display") == "block")
				{
					if ($(".f3_7 .slider_wrap .slider_cont.cont1").css("display") == "block" || $(".f3_7 .slider_wrap .slider_cont.cont2").css("display") == "block")
					{
						$(".m_vw .feature").css({"overflow":"hidden"});
						showPopupSize = 0;
						pageSize();
					}
				}
			}else{
				$(".tile_cont").css({"display":"none"});
				$(".bg_cont .lab img").css({"display":"block","opacity":1});
				$(".f3_7 .box_wrap .box").css({"opacity":1});
				$(".f3_67_bg").css({"display":"none"});
				$(".f3_67_bg .f3_6_bg").css({"display":"none"});
				$(".f3_67_bg .f3_7_bg").css({"display":"none"});

				if ($(".f3_7 .slider_wrap").css("display") == "block")
				{
					if ($(".f3_7 .slider_wrap .slider_cont.cont1").css("display") == "block")
					{
						var textHeight = windowHeight * 0.26;
						showPopupSize = textHeight / windowWidth;
						$(".wrap").css({"transition":"height 0.5s", "height":(windowHeight + textHeight) + "px"});
						$(".feature_cont_cover").css({"height":(windowHeight + textHeight) + "px"});
						$(".feature_cont").css({"height":(windowHeight +textHeight) + "px"});
						$(".m_vw .feature").css({"overflow":"visible"});

						$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).css({"margin-top":"0px"});
					}else if ($(".f3_7 .slider_wrap .slider_cont.cont2").css("display") == "block")
					{
						var textHeight = windowHeight * 0.55;				
						showPopupSize = textHeight / windowWidth;
						$(".wrap").css({"transition":"height 0.5s", "height":(windowHeight + textHeight) + "px"});
						$(".feature_cont_cover").css({"height":(windowHeight + textHeight) + "px"});
						$(".feature_cont").css({"height":(windowHeight +textHeight) + "px", "overflow":"visible"});
						$(".m_vw .feature").css({"overflow":"visible"});

						$(".m_vw .f3_7 .box_wrap .box_sec").eq(0).css({"margin-top":-($(".f3_7 .feature_inner").outerHeight()) + "px"});

						oldShowPage+=2;
						oldPageIndex+=2;
						fullDelta+=2;
						nowShowPage+=2;
					}
				}
			}
			break;
		}
		
		case 12:
		{
			$(".tile_cont").css({"display":"block", "opacity":1});
			break;
		}
		case 13:
		{
			if (t == "web")
			{
				$(".tile_cont_quad").css({"display":"block","opacity":1});
				$(".bg_cont .lab img").css({"display":"none","opacity":0});
			}else{
				$(".tile_cont_quad").css({"display":"none","opacity":0});
				$(".f3_75 .txt").css({"display":"block","opacity":1});
				$(".bg_cont .lab img").css({"display":"block","opacity":1});
			}
			break;
		}
		case 14:
		{
			if (t == "web")
			{
				interview01Load();
				if (interview01mLoad_Able)
				{
					interviewVideo01_m.pause();
					interviewVideo01_m.currentTime = 0;
					$(".bg_cont .interview2 .m_video").css("display","none");
				}
				$(".bg_cont .interview2 .w_video").css({"display":"block", "opacity":1});
				$(".f3_10 .txt .title").css({"transition":"","-webkit-transition":"","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
				$(".f3_10 .txt .desc").css({"transition":"","-webkit-transition":"","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
				$(".f3_10 .movie_progress").css({"transition":"", "-webkit-transition":"", "opacity":1});
				$(".f3_10 .caption_w .c_circle").css({"transition":"", "-webkit-transition":"", "opacity":0});
				$(".tile_cont").css({"display":"block"});
			}else
			{
				if (interview01wLoad_Able)
				{
					interviewVideo01_w.pause();
					interviewVideo01_w.currentTime = 0;
					$(".bg_cont .interview2 .w_video").css("display","none");
				}
				$(".bg_cont .interview2 .m_video").css({"display":"block", "opacity":1});
				interview01Question = false;
				$(".f3_10 .txt .title").css({"transition":"","-webkit-transition":"","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
				$(".f3_10 .txt .desc").css({"transition":"","-webkit-transition":"","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
				$(".f3_10 .movie_progress").css({"transition":"", "-webkit-transition":"", "opacity":1});
				$(".f3_10 .video_play_btn a").css({"transition":"", "-webkit-transition":"", "display":"block", "opacity":1});
				$(".f3_10 .caption_w .c_circle").css({"transition":"", "-webkit-transition":"", "opacity":0});
				$(".tile_cont").css({"display":"none"});
			}
			break;
		}
		case 15:
		{
			if (t == "web")
			{
				if ($("body").hasClass("Safari"))
				{
					$(".inter_cont .panel_half_sf").css({"transition":"", "-webkit-transition":"", "opacity":1, "display":"block"});
				}
			}else
			{
				if ($("body").hasClass("Safari"))
				{
					$(".inter_cont .panel_half_sf").css({"transition":"", "-webkit-transition":"", "opacity":0, "display":"none"});
				}
			}
			break;
		}
		case 16:
		{
			$(".condition_w .obj").css({"transition":"","-webkit-transition":"","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)"});
			break;
		}
		case 17:
		{
			if (t == "web")
			{
				interview02Load();
				if (interview02mLoad_Able)
				{
					interviewVideo02_m.pause();
					interviewVideo02_m.currentTime = 0;
					$(".bg_cont .interview .m_video").css("display","none");
				}
				$(".bg_cont .interview .w_video").css("display","block");
				$(".f4_1 .txt .title").css({"transition":"","-webkit-transition":"","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
				$(".f4_1 .txt .desc").css({"transition":"","-webkit-transition":"","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
				$(".f4_1 .movie_progress").css({"transition":"", "-webkit-transition":"", "opacity":1});
				$(".f4_1 .caption_w .c_circle").css({"transition":"", "-webkit-transition":"", "opacity":0});
			}else
			{
				if (interview02wLoad_Able)
				{
					interviewVideo02_w.pause();
					interviewVideo02_w.currentTime = 0;
					$(".bg_cont .interview .w_video").css("display","none");
				}
				$(".bg_cont .interview .m_video").css("display","block");
				interview02Question = false;
				$(".f4_1 .txt .title").css({"transition":"","-webkit-transition":"","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
				$(".f4_1 .txt .desc").css({"transition":"","-webkit-transition":"","transform":"translate(0px, 0px)","-webkit-transform":"translate(0px, 0px)","opacity":1});
				$(".f4_1 .movie_progress").css({"transition":"", "-webkit-transition":"", "opacity":1});
				$(".f4_1 .video_play_btn a").css({"transition":"", "-webkit-transition":"", "display":"block", "opacity":1});
				$(".f4_1 .caption_w .c_circle").css({"transition":"", "-webkit-transition":"", "opacity":0});
			}
			break;
		}
		case 25:
		{
			if (t == "web")
			{
				$(".bg_cont .bg.dot_map img").css({"transition":"", "transform":"translate(0px, 0px) scale(1)"});
				$(".f5_2 .map_area").css({"transition":"", "transform":"translate(0px, 0px) scale(1)"});
			}
		}
		case 26:
		{
			if (t == "web")
			{
				$(".bg_cont .forest .vCover").css({"display":"none","opacity":0});
				endingVideo.play();
				clearInterval(endingInterval);
			}else{
				endingVideo.pause();
				endingVideo.currentTime = 0;

				$(".tile_cont").css({"display":"none"});	
				$(".bg_cont .forest .m_bg_img").css({"opacity":1});
				endingInterval = setInterval(endingMotion,3000);
				$(".m_vw .bg_cont .forest .m_bg_img img:first-child").css({"opacity":1});
			}
		}
	}
}