var pageMute = false;
var moduleIndex = 0;
$(function(){
	function moduleSubTitle()
	{
		var subTitle = "";
		switch (moduleIndex)
		{
			case 0:
			{
				subTitle = "ADVANCED MODULE PERFORMANCE>Enhanced UV response";
				break;
			}
			case 1:
			{
				subTitle = "ADVANCED MODULE PERFORMANCE>UV transmitting and blocking EVA";
				break;
			}
			case 2:
			{
				subTitle = "ADVANCED MODULE PERFORMANCE>Optimized anti-reflection";
				break;
			}
			case 3:
			{
				subTitle = "ADVANCED MODULE PERFORMANCE>Optimized glass";
				break;
			}
		}
		
		pageTracking(subTitle);
	}

	$(".f3_3 .f_ico_wrap .ico a").click(function(){
		pageInteraction_Able = false;
		moduleIndex = $(this).parent().index();
		
		logoColor_Able = false;


		switch (moduleIndex)
		{
			case 0:
			{
				$(".feature .slider_wrap .slider_cont").eq(0).css("left","0%");
				$(".feature .slider_wrap .slider_cont").eq(1).css("left","100%");
				$(".feature .slider_wrap .slider_cont").eq(2).css("left","200%");
				
				setTimeout(function(){
					$(".f3_3 .slider_wrap .slider_cont.cont1 .obj_wrap .obj .motion.circle").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s","opacity":1});
				},500);
				break;
			}
			case 1:
			{
				$(".feature .slider_wrap .slider_cont").eq(0).css("left","-100%");
				$(".feature .slider_wrap .slider_cont").eq(1).css("left","0%");
				$(".feature .slider_wrap .slider_cont").eq(2).css("left","100%");
				setTimeout(function(){
					$(".f3_3 .slider_wrap .slider_cont.cont2 .obj_wrap .obj .motion.line").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
					$(".f3_3 .slider_wrap .slider_cont.cont2 .obj_wrap .obj .motion.motion_txt").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s","opacity":1});
				},500);
				break;
			}
			case 2:
			{
				$(".feature .slider_wrap .slider_cont").eq(0).css("left","-200%");
				$(".feature .slider_wrap .slider_cont").eq(1).css("left","-100%");
				$(".feature .slider_wrap .slider_cont").eq(2).css("left","0%");
				setTimeout(function(){
					$(".f3_3 .slider_wrap .slider_cont.cont4 .obj_wrap .obj .arrow1").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_3 .slider_wrap .slider_cont.cont4 .obj_wrap .obj .arrow2").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s","opacity":1});
					$(".f3_3 .slider_wrap .slider_cont.cont4 .obj_wrap .obj .arrow3").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s","opacity":1});
					$(".f3_3 .slider_wrap .slider_cont.cont4 .obj_wrap .obj .motion_txt").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s","opacity":1});
				},500);
				break;
			}
		
		}
		$(".f3_3 .slider_wrap .btn_wrap .carousel_wrap a").removeClass("active");
		$(".f3_3 .slider_wrap .btn_wrap .carousel_wrap a").eq(moduleIndex).addClass("active");

		$(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.next").css("display","block");
		$(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.prev").css("display","block");

		if(moduleIndex == 0)
			$(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.prev").css("display","none");
		else if (moduleIndex == 2)
			$(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.next").css("display","none");


		$(".f3_3 .slider_wrap").css({"display":"block","opacity":0}).animate({"opacity":1},500);
		$(".popup_dimmed").css({"display":"block","opacity":0}).animate({"opacity":1},500);

		moduleSubTitle();

		innerTracking("Button_Middle Center_ADVANCED MODULE PERFORMANCE-Learn More");
		return false;
	});

	function sliderPopup_reSet()
	{
		$(".f3_3 .slider_wrap .slider_cont.cont1 .obj_wrap .obj .motion.circle").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
		$(".f3_3 .slider_wrap .slider_cont.cont2 .obj_wrap .obj .motion.line").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
		$(".f3_3 .slider_wrap .slider_cont.cont2 .obj_wrap .obj .motion.motion_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
		$(".f3_3 .slider_wrap .slider_cont.cont3 .obj_wrap .obj .arrow1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
		$(".f3_3 .slider_wrap .slider_cont.cont3 .obj_wrap .obj .arrow2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
		$(".f3_3 .slider_wrap .slider_cont.cont3 .obj_wrap .obj .arrow3").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
		$(".f3_3 .slider_wrap .slider_cont.cont4 .obj_wrap .obj .arrow1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
		$(".f3_3 .slider_wrap .slider_cont.cont4 .obj_wrap .obj .arrow2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
		$(".f3_3 .slider_wrap .slider_cont.cont4 .obj_wrap .obj .arrow3").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
		$(".f3_3 .slider_wrap .slider_cont.cont4 .obj_wrap .obj .motion_txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
	}

	$(".f3_3 .slider_wrap .btn_wrap .close").click(function(){
		$(".f3_3 .slider_wrap").animate({"opacity":0},500,function(){
			pageInteraction_Able = true;
			$(this).css("display","none");		
			sliderPopup_reSet();

			if ($("body").hasClass("m_vw") || $("body").hasClass("m_size"))
			{
				if (nowShowPage == 7 || nowShowPage == 8)
				{
					logoColor_Able = true;
				}				
			}
		});

		$(".popup_dimmed").animate({"opacity":0},500,function(){
			$(this).css("display","none");
		});
		return false;
	});
	var sliderMotion = false;
	$(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.prev").click(function(){
		console.log(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.prev");
		if (moduleIndex > 0)
		{
			if (!sliderMotion)
			{
				sliderMotion = true;

				--moduleIndex;
				moduleSlider(moduleIndex);
				if(moduleIndex == 0)
					$(this).css("display","none");

				$(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.next").css("display","block");
			}
			
		}
		
		return false;
	});

	$(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.next").click(function(){
		console.log(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.next");
		if (moduleIndex < 3)
		{
			if (!sliderMotion)
			{
				sliderMotion = true;
				++moduleIndex;
				moduleSlider(moduleIndex);

				if(moduleIndex == 2)
					$(this).css("display","none");

				$(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.prev").css("display","block");
			}
		}
		
		return false;
	});

	$(".f3_3 .slider_wrap .btn_wrap .carousel_wrap a").click(function(){
		var clickIdx = $(this).index();
		
		$(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.prev").css("display","block");
		$(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.next").css("display","block");

		if(clickIdx == 0)
			$(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.prev").css("display","none");
		else if(clickIdx == 2)
			$(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.next").css("display","none");
		moduleSlider(clickIdx);
		moduleIndex = clickIdx;
		return false;
	});

	function moduleSlider(idx)
	{
		if (idx > 2)
		{
			moduleIndex = 2;
			sliderMotion = false;
		}else{
			sliderPopup_reSet();
			switch (idx)
			{
				case 0:
				{
					$(".feature .slider_wrap .slider_cont").eq(0).animate({"left":"0%"},500);
					$(".feature .slider_wrap .slider_cont").eq(1).animate({"left":"100%"},500);
					$(".feature .slider_wrap .slider_cont").eq(2).animate({"left":"200%"},500);

					$(".f3_3 .slider_wrap .slider_cont.cont1 .obj_wrap .obj .motion.circle").css({"transition":"all 0.5s 1s", "-webkit-transition":"all 0.5s 1s", "opacity":1});
					break;
				}
				case 1:
				{
					$(".f3_3 .slider_wrap .slider_cont.cont2 .obj_wrap .obj .motion.line").css({"transition":"all 0.5s 1s", "-webkit-transition":"all 0.5s 1s", "opacity":1});
					$(".f3_3 .slider_wrap .slider_cont.cont2 .obj_wrap .obj .motion.motion_txt").css({"transition":"all 0.5s 1.3s", "-webkit-transition":"all 0.5s 1.3s", "opacity":1});
					$(".feature .slider_wrap .slider_cont").eq(0).animate({"left":"-100%"},500);
					$(".feature .slider_wrap .slider_cont").eq(1).animate({"left":"0%"},500);
					$(".feature .slider_wrap .slider_cont").eq(2).animate({"left":"100%"},500);
					break;
				}
				case 2:
				{
					$(".f3_3 .slider_wrap .slider_cont.cont4 .obj_wrap .obj .arrow1").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
					$(".f3_3 .slider_wrap .slider_cont.cont4 .obj_wrap .obj .arrow2").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":1});
					$(".f3_3 .slider_wrap .slider_cont.cont4 .obj_wrap .obj .arrow3").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "opacity":1});
					$(".f3_3 .slider_wrap .slider_cont.cont4 .obj_wrap .obj .motion_txt").css({"transition":"all 0.5s 0.8s", "-webkit-transition":"all 0.5s 0.8s", "opacity":1});

					$(".feature .slider_wrap .slider_cont").eq(0).animate({"left":"-200%"},500);
					$(".feature .slider_wrap .slider_cont").eq(1).animate({"left":"-100%"},500);
					$(".feature .slider_wrap .slider_cont").eq(2).animate({"left":"0%"},500);
					break;
				}
			
			}

			$(".f3_3 .slider_wrap .btn_wrap .carousel_wrap a").removeClass("active");
			$(".f3_3 .slider_wrap .btn_wrap .carousel_wrap a").eq(idx).addClass("active");

			setTimeout(function(){
				sliderMotion = false;
			},500);		
			moduleSubTitle();
		}
		
	}


	$(".f3_4 .f_indi_wrap ul li a").click(function(){
		$(".f3_4 .f_indi_wrap ul li a").removeClass("active");
		$(this).addClass("active");
		advancedIndex = $(this).parent().index();
		console.log("advancedIndex : " + advancedIndex + ", oldAdvancedIndex : " + oldAdvancedIndex);
		idx = advancedIndex + 9;
		fullDelta = (idx * baseDelta);

		$(".f3_4 .part_wrap .part").find(".title").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});
		$(".f3_4 .part_wrap .part").find(".desc").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});
		$(".f3_4 .part_wrap .part").find(".obj").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});
		$(".f3_4 .part_wrap .part").find(".obj .left").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});
		$(".f3_4 .part_wrap .part").find(".obj .right").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});
		$(".f3_4 .part_wrap .obj_title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
		$(".f3_4 .part_wrap .obj_line").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
		$(".f3_4 .part_wrap .part").eq(advancedIndex).find(".title").css({"transition":"all 0.5s 0.1s","-webkit-transition":"all 0.5s 0.1s","opacity":1});
		$(".f3_4 .part_wrap .part").eq(advancedIndex).find(".desc").css({"transition":"all 0.5s 0.1s","-webkit-transition":"all 0.5s 0.1s","opacity":1});
		$(".f3_4 .part_wrap .part").eq(advancedIndex).find(".obj").css({"transition":"all 0.5s 0.1s","-webkit-transition":"all 0.5s 0.1s","opacity":1});
		$(".f3_4 .part_wrap .part").eq(advancedIndex).find(".obj .left").css({"transition":"all 0.5s 0.1s","-webkit-transition":"all 0.5s 0.1s","opacity":1});
		$(".f3_4 .part_wrap .part").eq(advancedIndex).find(".obj .right").css({"transition":"all 0.5s 0.1s","-webkit-transition":"all 0.5s 0.1s","opacity":1});
		
		console.log("advancedIndex : " + advancedIndex);

		if ($("body").hasClass("m_vw"))
		{
			if (advancedIndex < 2)
			{
				$(".f3_4 .f_indi_wrap").css({"left":"0px", "right":"auto"});
			}else{
				$(".f3_4 .f_indi_wrap").css({"left":"auto", "right":"0px"});
			}
		}

		setTimeout(function(){
			$(".f3_4 .part_wrap .obj_title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":1});
			$(".f3_4 .part_wrap .obj_line").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":1});
		},300);
		oldAdvancedIndex = advancedIndex;
		return false;
	});
	
	var layerPopupIdx = 0;
	$(".f3_6 .box_wrap .btn a").click(function(){
		pageInteraction_Able = false;
		layerPopupIdx = $(this).parent().parent().parent().index();

		console.log("f3_6 layerPopupIdx : " + layerPopupIdx);

		if(layerPopupIdx == 0)
		{
			$(".f3_6 .slider_wrap .slider_cont").eq(0).css({"display":"block","opacity":1});
			$(".f3_6 .slider_wrap .slider_cont").eq(1).css({"display":"none","opacity":0});

			setTimeout(function(){
				$(".f3_6 .slider_wrap .slider_cont.cont1 .obj_wrap .obj .motion_txt1").css({"transition":"all 0.5s 0.3s","-webkit-transition":"all 0.5s 0.3s","opacity":1});
				$(".f3_6 .slider_wrap .slider_cont.cont1 .obj_wrap .obj .motion_txt2").css({"transition":"all 0.5s 0.6s","-webkit-transition":"all 0.5s 0.6s","opacity":1});
				$(".f3_6 .slider_wrap .slider_cont.cont1 .obj_wrap .obj .motion_txt3").css({"transition":"all 0.5s 0.9s","-webkit-transition":"all 0.5s 0.9s","opacity":1});
			},1000);

			pageTracking("ANTI-PID>ANTI-PID TECHNOLOGY");

			innerTracking("Button_Middle Center_ANTI-PID-Learn More");
		}
		else if(layerPopupIdx == 1)
		{
			$(".f3_6 .slider_wrap .slider_cont").eq(0).css({"display":"none","opacity":0});
			$(".f3_6 .slider_wrap .slider_cont").eq(1).css({"display":"block","opacity":1});
			$(".f3_6 .slider_wrap .slider_cont.cont2 .obj_wrap .obj1").css({"transition":"","-webkit-transition":"","opacity":0});
			$(".f3_6 .slider_wrap .slider_cont.cont2 .obj_wrap .obj1 > div").css({"transition":"","-webkit-transition":"","opacity":0});
			$(".f3_6 .slider_wrap .slider_cont.cont2 .obj_wrap .obj2").css({"transition":"","-webkit-transition":"","opacity":1});

			setTimeout(function(){
				$(".f3_6 .slider_wrap .slider_cont.cont2 .obj_wrap .obj1").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
				$(".f3_6 .slider_wrap .slider_cont.cont2 .obj_wrap .obj1 > div").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});
				$(".f3_6 .slider_wrap .slider_cont.cont2 .obj_wrap .obj2").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});
			},1000);

			pageTracking("ANTI-LID LIGHT INDUCED DEGRADATION>PERFORMANCE COMPARISON : STANDARD PRODUCT vs. Q.ANTUM WITH ANTI-LID");
			innerTracking("Button_Middle Center_ANTI-LID LIGHT INDUCED DEGRADATION-Learn More");
		}

		$(".f3_6 .slider_wrap").css({"display":"block","opacity":0}).animate({"opacity":1});
		$(".popup_dimmed").css({"display":"block","opacity":0}).animate({"opacity":1});
		return false;
	});

	$(".f3_6 .slider_wrap .btn_wrap .close a").click(function(){
		$(".f3_6 .slider_wrap").animate({"opacity":0}, 600, function(){
			$(this).css("display","none");
			pageInteraction_Able = true;

			$(".f3_6 .slider_wrap .slider_cont.cont1 .obj_wrap .obj .motion_txt1").css({"transition":"","-webkit-transition":"","opacity":0});
			$(".f3_6 .slider_wrap .slider_cont.cont1 .obj_wrap .obj .motion_txt2").css({"transition":"","-webkit-transition":"","opacity":0});
			$(".f3_6 .slider_wrap .slider_cont.cont1 .obj_wrap .obj .motion_txt3").css({"transition":"","-webkit-transition":"","opacity":0});

			$(".f3_6 .slider_wrap .slider_cont.cont2 .obj_wrap .obj1").css({"transition":"","-webkit-transition":"","opacity":0});
			$(".f3_6 .slider_wrap .slider_cont.cont2 .obj_wrap .obj1 > div").css({"transition":"","-webkit-transition":"","opacity":0});
			$(".f3_6 .slider_wrap .slider_cont.cont2 .obj_wrap .obj2").css({"transition":"","-webkit-transition":"","opacity":1});
		});

		$(".popup_dimmed").animate({"opacity":0},500,function(){
			$(this).css("display","none");
		});

		return false;
	});

	$(".f3_7 .box_wrap .btn a").click(function(){
		pageInteraction_Able = false;
		layerPopupIdx = $(this).parent().parent().parent().index();

		console.log("f3_7 layerPopupIdx : " + layerPopupIdx);
		
		if ($("body").hasClass("device"))
		{
			$(".m_vw .header_wrap .header_bg").css("background", "#000");
		}

		if(layerPopupIdx == 0)
		{
			$(".f3_7 .slider_wrap .slider_cont").eq(0).css({"display":"block","opacity":1});
			$(".f3_7 .slider_wrap .slider_cont").eq(1).css({"display":"none","opacity":0});
			setTimeout(function(){
				$(".f3_7 .slider_wrap .slider_cont.cont1 .obj_wrap .obj .graph").css({"transition":"all 0.5s 0.3s","-webkit-transition":"all 0.5s 0.3s","opacity":1});
				$(".f3_7 .slider_wrap .slider_cont.cont1 .obj_wrap .obj .motion_txt").css({"transition":"all 0.5s 0.8s","-webkit-transition":"all 0.5s 0.8s","opacity":1});
			},1000);
			if ($("body").hasClass("m_vw"))
			{
				var textHeight = windowHeight * 0.26;
				showPopupSize = textHeight / windowWidth;
				$(".wrap").css({"transition":"height 0.5s", "height":(windowHeight + textHeight) + "px"});
				$(".feature_cont_cover").css({"height":(windowHeight + textHeight) + "px"});
				$(".feature_cont").css({"height":(windowHeight +textHeight) + "px"});
				$(".m_vw .feature").css({"overflow":"visible"});
			}
			
			pageTracking("HOT-SPOT PROTECT>ACTUAL HOT-SPOT CLASSIFICATION vs. SHUNT CLASSIFICATION WITHOUT IR CAMERA");
			innerTracking("Button_Middle Center_ANTI-LHOT-SPOT PROTECT-Learn More");
		}
		else if(layerPopupIdx == 1)
		{
			$(".f3_7 .slider_wrap .slider_cont").eq(0).css({"display":"none","opacity":0});
			$(".f3_7 .slider_wrap .slider_cont").eq(1).css({"display":"block","opacity":1});

			setTimeout(function(){
				$(".f3_7 .slider_wrap .slider_cont.cont2 .obj_wrap .obj .graph1").css({"transition":"all 2s","-webkit-transition":"all 2s","width":"100%"});
				$(".f3_7 .slider_wrap .slider_cont.cont2 .obj_wrap .obj .graph2").css({"transition":"all 2s","-webkit-transition":"all 2s","width":"100%"});
			},1000);
			
			if ($("body").hasClass("m_vw"))
			{
				var textHeight = windowHeight * 0.55;
				
				showPopupSize = textHeight / windowWidth;

				$(".wrap").css({"transition":"height 0.5s", "height":(windowHeight + textHeight) + "px"});
				$(".feature_cont_cover").css({"height":(windowHeight + textHeight) + "px"});
				$(".feature_cont").css({"height":(windowHeight +textHeight) + "px", "overflow":"visible"});
				$(".m_vw .feature").css({"overflow":"visible"});
			}

			pageTracking("TRA.Q™>BEFORE TRA.Q™ vs. AFTER TRA.Q™");
			innerTracking("Button_Middle Center_ANTI-TRA.Q™-Learn More");
		}

		$(".f3_7 .slider_wrap").css({"display":"block","opacity":0}).animate({"opacity":1});
		$(".popup_dimmed").css({"display":"block","opacity":0}).animate({"opacity":1});
		return false;
	});

	$(".f3_7 .slider_wrap .btn_wrap .close a").click(function(){
		if ($("body").hasClass("device"))
		{
			$(".m_vw .header_wrap .header_bg").css("background", "none");
		}

		if ($("body").hasClass("m_vw"))
			$(".m_vw .feature").css({"overflow":"hidden"});
		
		$(".f3_7 .slider_wrap").animate({"opacity":0}, 600, function(){
			$(this).css("display","none");
			pageInteraction_Able = true;
			$(".f3_7 .slider_wrap .slider_cont.cont1 .obj_wrap .obj .graph").css({"transition":"","-webkit-transition":"","opacity":0.6});
			$(".f3_7 .slider_wrap .slider_cont.cont1 .obj_wrap .obj .motion_txt").css({"transition":"","-webkit-transition":"","opacity":0});
			$(".f3_7 .slider_wrap .slider_cont.cont2 .obj_wrap .obj .graph1").css({"transition":"","-webkit-transition":"","width":"0%"});
			$(".f3_7 .slider_wrap .slider_cont.cont2 .obj_wrap .obj .graph2").css({"transition":"","-webkit-transition":"","width":"0%"});

			$(".f3_7 .slider_wrap").css({"overflow":""});
			$(".f3_7 .slider_wrap .slider_inner").css({"height":""});
			$(".f3_7 .slider_wrap .slider_cont").eq(0).css({"height":""});

			if ($("body").hasClass("m_vw"))
			{
				showPopupSize = 0;
				pageSize();				
			}
		});

		$(".popup_dimmed").animate({"opacity":0},500,function(){
			$(this).css("display","none");
		});
		return false;
	});
	
	var locationIdx = -1;
	$(".f5_2 .click_ico a").click(function(){
		locationIdx = $(this).parent().parent().index();

		$(".f5_2 .location_popup .location").css("display","none");
		$(".f5_2 .location_popup .location").eq(locationIdx).css("display","block");
		
		$(".f5_2 .location_popup").css({"display":"block", "opacity":0}).animate({"opacity":1});
		$(".f5_2 .location_popup_dimmed").css({"display":"block", "opacity":0}).animate({"opacity":1});
		
		
		switch (locationIdx)
		{
			case 0:
			{
				innerTracking("Button_Middle Center_KREP OAHU, HAWAII, USA-Learn More");
				pageTracking("PROVIDING ENERGY SOLUTIONS TO GLOBAL MARKET>KREP OAHU, HAWAII, USA");
				break;
			}
			case 1:
			{
				innerTracking("Button_Middle Center_MAYWOOD-INDIANAPOLIS, INDIANA, USA-Learn More");
				pageTracking("PROVIDING ENERGY SOLUTIONS TO GLOBAL MARKET>MAYWOOD-INDIANAPOLIS, INDIANA, USA");
				break;
			}
			case 2:
			{
				innerTracking("Button_Middle Center_TOWER HILL FARM, UK-Learn More");
				pageTracking("PROVIDING ENERGY SOLUTIONS TO GLOBAL MARKET>TOWER HILL FARM, UK");
				break;
			}
			case 3:
			{
				innerTracking("Button_Middle Center_BRANDENBURG-BRIEST, GERMANY-Learn More");
				pageTracking("PROVIDING ENERGY SOLUTIONS TO GLOBAL MARKET>BRANDENBURG-BRIEST, GERMANY");
				break;
			}
			case 4:
			{
				innerTracking("Button_Middle Center_SEONAM SEWAGE TREATMENT CENTER SOLAR POWER PLANT, KOREA-Learn More");
				pageTracking("PROVIDING ENERGY SOLUTIONS TO GLOBAL MARKET>SEONAM SEWAGE TREATMENT CENTER SOLAR POWER PLANT, KOREA");
				break;
			}
			case 5:
			{
				innerTracking("Button_Middle Center_OITA, JAPAN-Learn More");
				pageTracking("PROVIDING ENERGY SOLUTIONS TO GLOBAL MARKET>OITA, JAPAN");
				break;
			}
		
		}
		return false;
	});

	$(".f5_2 .location_popup .lo_popup_close a").click(function(){
		$(".f5_2 .location_popup").animate({"opacity":0}, function(){
			locationIdx = -1;
			$(this).css("display","none");
		});

		$(".f5_2 .location_popup_dimmed").animate({"opacity":0}, function(){
			$(this).css("display","none");
		});

		return false;
	});
	
	var languagePopup_Able = false;
	$(".header_wrap .sns_wrap a.lan").click(function(){	
		if(!languagePopup_Able)
		{
			languagePopup_Able = true;
			$(".header_wrap .language_popup").css({"display":"block","opacity":0}).animate({"opacity":1});
		}else{
			$(".header_wrap .language_popup .popup_close").trigger("click");
		}
		innerTracking("Button_Top Right_Language Popup");
		pageTracking("Language Popup>Open");
		
		return false;
	});

	$(".header_wrap .sns_wrap a.nr").click(function(){
		innerTracking("Button_Middle Center_Newsroom:https://www.hanwha.com/en/news_and_media/newsroom.html");

		var openNewWindow = window.open("about:blank");
		openNewWindow.location.href = "https://www.hanwha.com/en/news_and_media/newsroom.html";
		return false;
	});

	$(".header_wrap .sns_wrap a.speaker").click(function(){
		if($(this).hasClass("mute"))
		{
			pageMute = false;
			$(this).removeClass("mute");
			innerTracking("Button_Top Right_Sound-Off");
		}else{
			pageMute = true;
			$(this).addClass("mute");
			innerTracking("Button_Top Right_Sound-On");
		}

		introVideo.muted = pageMute;
		earthVideo_In.muted = pageMute;
		earthVideo_Out.muted = pageMute;
		interviewVideo01_w.muted = pageMute;
		interviewVideo01_m.muted = pageMute;
		interviewVideo02_w.muted = pageMute;
		interviewVideo02_m.muted = pageMute;
		factoryVideo.muted = pageMute;
		endingVideo.muted = pageMute;
		pageBGM.muted = pageMute;
		return false;
	});

	$(".header_wrap .language_popup .popup_close").click(function(){
		$(".header_wrap .language_popup").animate({"opacity":0},function(){
			$(this).css("display","none");
			languagePopup_Able = false;
		});
		return false;
	});
	
	$(".f5_3 .txt .btn_wrap a").click(function(){
		var btnIndex = $(this).index();
		if (btnIndex == 0)
		{
			innerTracking("Button_Middle Center_Newsroom:https://www.hanwha.com/en/news_and_media/newsroom.html"); 

			var openNewWindow = window.open("about:blank");
			openNewWindow.location.href = "https://www.hanwha.com/en/news_and_media/newsroom.html";
		}else 
		{
			innerTracking("Button_Middle Center_Start Over");
			pageTracking("Start Over");
			if(pageInteraction_Able)
			{
				pageInteraction_Able = false;

				$(".f5_3 .txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
				if ($("body").hasClass("m_vw"))
				{
					$(".m_vw .tile_cont .tile_cont_inner").css({"background":""});
					$(".m_vw .tile_cont").css({"display":"block", "opacity":0, "z-index":3}).animate({"opacity":1},function(){
						$(".indicator_wrap .progress_wrap .progress_bar .progress_img").css("opacity",1);
						fullDelta = 0;
						oldShowPage = 0;
						$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":"0px"});
						$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":"0px"});
						$(".bg_cont .bg.space").css("opacity",1);
						$(".indicator_wrap .progress_wrap .progress_bar").css({"transition":"","-webkit-transition":"","width":"0%"});
						$(".indicator_wrap .progress_wrap .progress_bar .progress_img").css({"background":"","width":"","height":"","top":"","right":""});
						$(".loading_wrap .loading_inner").css("display","none");
						$(".inter_cont .sun").css("display","block");

						$(".bg_cont").css("display","block");
						motionGridTile.restartAble = false;
						restartReset();
						bgNumber = 0;
						featureIndex = 0;
						$(".indicator_wrap .nav li a").removeClass("active");
						$(".indicator_wrap .nav li").eq(0).find("a").addClass("active");

						setTimeout(function(){
							$(".m_vw .tile_cont").animate({"opacity":0},function(){
								$(this).css({"display":"none","z-index":""});
								
								$(".f1_1 .txt").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "transform":"translate(0px,0px)", "-webkit-transform":"translate(0px,0px)"});
								$(".f1_1 .txt .title").css({"transition":"all 0.5s 0.2s", "-webkit-transition":"all 0.5s 0.2s", "opacity":1,"display":"block"});
								$(".f1_1 .txt .desc").css({"transition":"all 0.5s 0.2s", "-webkit-transition":"all 0.5s 0.2s", "opacity":1,"display":"block"});

								pageInteraction_Able = true;
							});
						},1000);
					});

				}else{
					$(".tile_cont .tile_cont_inner .tile img").attr("src", "images/panel_cell.jpg");
					setTimeout(function(){
						endingVideo.pause();
						motionGridTile.restartAble = true;
						motionGridTile.intervalNumber = 0;
						motionGridTile.Play();
						oldPageIndex = 0;
					},300);
				}
			}
		}
		return false;
	});
	
	$(".f3_10 .movie_progress .movie_clip a").click(function(){
		var clipIdx = $(this).parent().index();
		interview01Question = false;
		switch (clipIdx)
		{
			case 0:
			{
				if ($("body").hasClass("m_vw"))
					interviewVideo01_m.currentTime = 0;
				else
					interviewVideo01_w.currentTime = 0;
				break;
			}
			case 1:
			{
				if ($("body").hasClass("m_vw"))
					interviewVideo01_m.currentTime = 60;
				else
					interviewVideo01_w.currentTime = 60;

				break;
			}
			case 2:
			{
				if ($("body").hasClass("m_vw"))
					interviewVideo01_m.currentTime = 118;
				else
					interviewVideo01_w.currentTime = 118;
				break;
			}
		
		}

		innerTracking("Button_Top Right_DR. JÖRG MÜLLER INTERVIEW - Video Step " + (clipIdx+1));
		return false;
	});

	$(".f3_10 .movie_progress .control_btn a").click(function(){
		if (interviewViedo01_Able)
		{
			interviewViedo01_Able = false;
			if (!$("body").hasClass("m_vw"))
				interviewVideo01_w.pause();
			else
				interviewVideo01_m.pause();
			
			$(this).parent().removeClass("pause");
			$(this).parent().addClass("play");

			innerTracking("Button_Top Right_DR. JÖRG MÜLLER INTERVIEW - Video Stop");
		}else{
			interviewViedo01_Able = true;
			if (!$("body").hasClass("m_vw"))
				interviewVideo01_w.play();
			else
				interviewVideo01_m.play();
			
			if ($(".f3_10 .video_play_btn a").css("display")=="block")
			{
				$(".f3_10 .video_play_btn a").animate({"opacity":0},300,function(){
					$(this).css("display","none");
				});
			}

			$(this).parent().removeClass("play");
			$(this).parent().addClass("pause");

			innerTracking("Button_Top Right_DR. JÖRG MÜLLER INTERVIEW - Video Play");
		}
		return false;
	});

	$(".f4_1 .movie_progress .movie_clip a").click(function(){
		var clipIdx = $(this).parent().index();
		interview02Question = false;
		switch (clipIdx)
		{
			case 0:
			{
				if (!$("body").hasClass("m_vw"))
					interviewVideo02_w.currentTime = 0;
				else
					interviewVideo02_m.currentTime = 0;
				break;
			}
			case 1:
			{
				if (!$("body").hasClass("m_vw"))
					interviewVideo02_w.currentTime = 61;
				else
					interviewVideo02_m.currentTime = 61;
				break;
			}
			case 2:
			{
				if (!$("body").hasClass("m_vw"))
					interviewVideo02_w.currentTime = 98;
				else
					interviewVideo02_m.currentTime = 98;
				break;
			}
			case 3:
			{
				if (!$("body").hasClass("m_vw"))
					interviewVideo02_w.currentTime = 175;
				else
					interviewVideo02_m.currentTime = 175;
				break;
			}
		
		}

		innerTracking("Button_Top Right_KARL HEINZ KUSTERS INTERVIEW - Video Step " + (clipIdx+1));
		return false;
	});

	$(".f4_1 .movie_progress .control_btn a").click(function(){
		if (interviewViedo02_Able)
		{
			interviewViedo02_Able = false;
			if (!$("body").hasClass("m_vw"))
				interviewVideo02_w.pause();
			else
				interviewVideo02_m.pause();
			
			$(this).parent().removeClass("pause");
			$(this).parent().addClass("play");

			innerTracking("Button_Top Right_DR. KARL HEINZ KUSTERS INTERVIEW - Video Pause");
		}else{
			interviewViedo02_Able = true;
			if (!$("body").hasClass("m_vw"))
				interviewVideo02_w.play();
			else
				interviewVideo02_m.play();
			
			if ($(".f4_1 .video_play_btn a").css("display")=="block")
			{
				$(".f4_1 .video_play_btn a").animate({"opacity":0},300,function(){
					$(this).css("display","none");
				});
			}

			$(this).parent().removeClass("play");
			$(this).parent().addClass("pause");

			innerTracking("Button_Top Right_DR. KARL HEINZ KUSTERS INTERVIEW - Video Play");
		}
		return false;
	});

	var naviIndex = 0;
	var menuIndex;
	$(".indicator_wrap .nav li a").click(function(){
		if (!skipMenu && pageInteraction_Able)
		{
			skipMenu = true;
			startPosition = true;
			$(".indicator_wrap").removeClass("bg_bk");
			$(".indicator_wrap").removeClass("bg_bl");

			$(".container").css({"transition":"opacity 0.3s","-webkit-transition":"opacity 0.3s", "opacity":0});
			pageInteraction_Able = false;
			menuIndex = $(this).parent().index();
			nowShowMenu = menuIndex;

			setTimeout(function(){
				menuFrame_Reset();

				setTimeout(function(){				
					switch (menuIndex)
					{
						case 0:		// 0
						{
							naviIndex = 0;
							fullDelta = 0 * baseDelta;
							featureIndex = 0;
							nowShowPage = 0;

							bgNumber = 0;
							$(".inter_cont .sun").css("display","block");
							$(".bg_cont .bg.space").css("opacity",1);
							$(".f1_1 .txt").css({"transition":"", "-webkit-transition":"", "transform":"translate(0px,0px)", "-webkit-transform":"translate(0px,0px)"});
							$(".f1_1 .txt .title").css({"transition":"", "-webkit-transition":"", "opacity":1});
							$(".f1_1 .txt .desc").css({"transition":"", "-webkit-transition":"", "opacity":1});
							$(".feature_cont").css({"transition":"","-webkit-transition":"", "margin-top":"0vh"});
							$(".bg_cont").css({"transition":"","margin-top":"0vh"});
							$(".inter_cont .sun .flame").css({"transform":"","-webkit-transform":"","margin-left":"","top":"","margin-top":""});
							
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
								console.log("$('.indicator_wrap .nav li a').click() - 1");
								$(".inter_cont .sun img").css({"transform":"scale(2.0) translate(0px, " + sunP + "px)", "-webkit-transform":"scale(2.0) translate(0px, " + sunP + "px)"});
							}else{
								var sunHeight = $(".inter_cont .sun img").outerHeight();
								var sunTop = Math.abs(parseInt($(".inter_cont .sun img").css("margin-top")));

								var sunP = (sunTop / 2) + (windowHeight * 0.28);

								console.log("$('.indicator_wrap .nav li a').click() - 2");
								$(".inter_cont .sun img").css({"transform":"scale(2.0) translate(0px, " + sunP + "px)", "-webkit-transform":"scale(2.0) translate(0px, " + sunP + "px)"});
							}

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

							innerTracking("Button_Middle Center_ENERGY INNOVATION");
							break;
						}
						case 1:		// 4
						{
							naviIndex = 3;
							featureIndex = 2;
							fullDelta = 3 * baseDelta;
							nowShowPage = 3;

							bgNumber = 0;
							$(".bg_cont .bg.space").css("opacity",1);
							viewContent = 2;
							$(".bg_cont").css({"transition":"0","-webkit-transition":"0","margin-top":"0vh"});
							$(".f1_2 .obj_2 .obj_wrap.graph div").css({"transition":"0", "-webkit-transition":"0", "opacity":0});
							sunPlear_Able = false;

							var sunMargin_Left = parseInt($(".inter_cont .sun .flame").css("margin-left")) + (windowWidth/3);
							var sunMargin_Top = parseInt($(".inter_cont .sun .flame").css("margin-top")) - (windowHeight/3);
							$(".inter_cont .sun img").css({"transition":"","-webkit-transition":"","transform":"scale(0) translate(0px,0px)","-webkit-transform":"scale(0) translate(0px,0px)", "margin-left":sunMargin_Left + "px", "margin-top":sunMargin_Top + "px"});
							

							$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*(2)) + "px"});

							$(".inter_cont .earth img").css({"transition":"", "-webkit-transition":"","transform":"scale(1.0) translate(0vw, 0vw)", "-webkit-transform":"scale(1.0) translate(0vw, 0vw)", "opacity":1});
							$(".f2_1 .txt").css({"transition":"", "-webkit-transition":"","opacity":1, "transform":"translate(0px,0px)", "-webkit-transform":"translate(0px,0px)"});
							$(".f2_1 .txt .title").css({"transition":"", "-webkit-transition":"","opacity":1});
							$(".f2_1 .txt .desc").css({"transition":"", "-webkit-transition":"","opacity":1, "display":"block"});
							
							$(".inter_cont .earth").css({"transition":"", "-webkit-transition":"","opacity":1});
							$(".inter_cont .earth .type2").css({"opacity":0});
							innerTracking("Button_Middle Center_TECHNOLOGY LEADERSHIP");
							break;
						}
						case 2:		//11
						{
							naviIndex = 5;
							featureIndex = 5;

							fullDelta = 6 * baseDelta;
							nowShowPage = 6;
							bgNumber = 1;
							idx = 9;
							viewContent = 5;
							$(".bg_cont .bg").eq(2).css("opacity",1);
							$(".bg_cont").css({"margin-top":-(windowHeight*1) + "px"});
							
							$(".bg_cont .panel_field_far .panel_field").css({"transition":"", "-webkit-transition":"","transform":"scale(1.0)", "-webkit-transform":"scale(1.0)","opacity":0});
							$(".bg_cont .panel_field_far .panel_field_blur").css({"transition":"", "-webkit-transition":"","opacity":0})

							$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*5) + "px"});
						
							$(".f2_4_line").css({"transition":"","-webkit-transition":"","width":"3500px", "opacity":1});
							$(".f2_4 .obj .year").css({"transition":"","-webkit-transition":"","transform":"translate(0vh,0vh) scale(1.0)","-webkit-transform":"translate(0vh,0vh) scale(1.0)","opacity":1});
							$(".f2_4 .obj .year_txt").css({"transition":"","-webkit-transition":"","transform":"translate(0vh,0vh)","-webkit-transform":"translate(0vh,0vh)","opacity":1});
							innerTracking("Button_Middle Center_Q.ANTUM TECHNOLOGY");
							break;
						}
						case 3:		//22
						{
							naviIndex = 17;
							featureIndex = 18;

							fullDelta = 19 * baseDelta;
							nowShowPage = 19;

							bgNumber = 6;
							$(".tile_cont").css("display","none");	
							$(".inter_cont .sky").css({"transition":"", "-webkit-transition":"", "opacity":1});							
							$(".bg_cont .bg").eq(7).css("opacity",1);	
							$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*6) + "px"});
							$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"","-webkit-transition":"","bottom":"0vh", "opacity":1});
							$(".inter_cont .sky").css({"transition":"", "-webkit-transition":"","opacity":0});
							$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*18) + "px"});
							$(".f4_2 .txt .title").css({"transition":"","-webkit-transition":"","transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
							innerTracking("Button_Middle Center_PERFORMANCE&RELIABILITY");
							break;
						}
						case 4:		//27
						{
							naviIndex = 22;
							featureIndex = 24;
							fullDelta = 24 * baseDelta;
							nowShowPage = 24;

							bgNumber = 7;
							if(!$(".indicator_wrap").hasClass("type2"))
								$(".indicator_wrap").addClass("type2");

							if(!$(".header_wrap").hasClass("type2"))
								$(".header_wrap").addClass("type2");

							$(".bg_cont .bg").eq(8).css("opacity",1);	
							$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*7) + "px"});
							$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*24) + "px"});
							$(".bg_cont .bg.dot_map img").css({"transition":"", "-webkit-transition":"","opacity":1});
							$(".f5_1 .txt .title").css({"transition":"", "-webkit-transition":"","transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
							$(".f5_1 .txt .desc").css({"transition":"", "-webkit-transition":"","transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});						
							$(".f5_1 .ico_wrap.type1").css({"transition":"", "-webkit-transition":"","transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)", "opacity":1});
							$(".f5_1 .ico_wrap.line").css({"transition":"", "-webkit-transition":"","opacity":1});
							$(".f5_1 .ico_wrap.type2").css({"transition":"", "-webkit-transition":"","transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)", "opacity":1});
							innerTracking("Button_Middle Center_GLOBAL FOOTPRINT");
							break;
						}
					}

					
				
					oldPageIndex = parseInt(fullDelta/baseDelta);
					oldShowPage = parseInt(fullDelta/baseDelta);
					
					guageMotion(menuIndex, naviIndex);
					pageTracking("");
				},300);
				
				$(".container").css({"transition":"opacity 0.5s 0.3s", "-webkit-transition":"opacity 0.5s 0.3s", "opacity":1});
				setTimeout(function(){
					pageInteraction_Able = true;
				},500);
			},300);

			setTimeout(function(){
				skipMenu = false;
			}, 1000);
		}
		
		return false;
	});

	$(document).on("click", ".m_vw .header_wrap .mobile_menu_wrap .menu_middle ul li a", function(){
		$(".indicator_wrap").css({"transition":"opacity 0.5s", "-webkit-transition":"opacity 0.5s", "opacity":1});
		$(".header_wrap").removeClass("open");
		if (!skipMenu && pageInteraction_Able)
		{
			$(".m_vw .m_scroll_img").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});

			skipMenu = true;
			startPosition = true;
			$(".indicator_wrap").removeClass("bg_bk");
			$(".indicator_wrap").removeClass("bg_bl");

			$(".container").css({"transition":"opacity 0.3s","-webkit-transition":"opacity 0.3s", "opacity":0});
			pageInteraction_Able = false;
			menuIndex = $(this).parent().index();
			nowShowMenu = menuIndex;

			if($(".header_wrap").hasClass("type2"))
				$(".header_wrap").removeClass("type2");

			setTimeout(function(){
				menuFrame_Reset();

				setTimeout(function(){				
					switch (menuIndex)
					{
						case 0:		// 0
						{
							naviIndex = 0;
							fullDelta = 0 * baseDelta;
							featureIndex = 0;
							nowShowPage = 0;

							bgNumber = 0;
							$(".inter_cont .sun").css("display","block");
							$(".bg_cont .bg.space").css("opacity",1);
							$(".f1_1 .txt").css({"transition":"", "-webkit-transition":"", "transform":"translate(0px,0px)", "-webkit-transform":"translate(0px,0px)"});
							$(".f1_1 .txt .title").css({"transition":"", "-webkit-transition":"", "opacity":1});
							$(".f1_1 .txt .desc").css({"transition":"", "-webkit-transition":"", "opacity":1});
							$(".feature_cont").css({"transition":"","-webkit-transition":"", "margin-top":"0vh"});
							$(".bg_cont").css({"transition":"","margin-top":"0vh"});
							$(".inter_cont .sun .flame").css({"transform":"","-webkit-transform":"","margin-left":"","top":"","margin-top":""});
							
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
								console.log("$('.m_vw .header_wrap .mobile_menu_wrap .menu_middle ul li a').click() - 1");
								$(".inter_cont .sun img").css({"transform":"scale(2.0) translate(0px, " + sunP + "px)", "-webkit-transform":"scale(2.0) translate(0px, " + sunP + "px)"});
							}else{
								var sunHeight = $(".inter_cont .sun img").outerHeight();
								var sunTop = Math.abs(parseInt($(".inter_cont .sun img").css("margin-top")));

								var sunP = (sunTop / 2) + (windowHeight * 0.28);
								
								console.log("$('.m_vw .header_wrap .mobile_menu_wrap .menu_middle ul li a').click() - 2");
								$(".inter_cont .sun img").css({"transform":"scale(2.0) translate(0px, " + sunP + "px)", "-webkit-transform":"scale(2.0) translate(0px, " + sunP + "px)"});
							}

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
							innerTracking("Button_Middle Center_ENERGY INNOVATION");
							break;
						}
						case 1:		// 4
						{
							naviIndex = 3;
							featureIndex = 2;
							fullDelta = 3 * baseDelta;
							nowShowPage = 3;

							bgNumber = 0;
							$(".bg_cont .bg.space").css("opacity",1);
							viewContent = 2;
							$(".bg_cont").css({"transition":"0","-webkit-transition":"0","margin-top":"0vh"});
							$(".f1_2 .obj_2 .obj_wrap.graph div").css({"transition":"0", "-webkit-transition":"0", "opacity":0});
							sunPlear_Able = false;
							var sunMargin_Left = parseInt($(".inter_cont .sun .flame").css("margin-left")) + (windowWidth/3);
							var sunMargin_Top = parseInt($(".inter_cont .sun .flame").css("margin-top")) - (windowHeight/3);
							$(".inter_cont .sun img").css({"transition":"","-webkit-transition":"","transform":"scale(0) translate(0px,0px)","-webkit-transform":"scale(0) translate(0px,0px)", "margin-left":sunMargin_Left + "px", "margin-top":sunMargin_Top + "px"});

							$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*(2)) + "px"});

							$(".inter_cont .earth img").css({"transition":"", "-webkit-transition":"","transform":"scale(1.0) translate(0vw, 0vw)", "-webkit-transform":"scale(1.0) translate(0vw, 0vw)", "opacity":1});
							$(".f2_1 .txt").css({"transition":"", "-webkit-transition":"","opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
							$(".f2_1 .txt .title").css({"transition":"", "-webkit-transition":"","opacity":1});
							$(".f2_1 .txt .desc").css({"transition":"", "-webkit-transition":"","opacity":1, "display":"block"});
							
							$(".inter_cont .earth").css({"transition":"", "-webkit-transition":"","opacity":1});
							$(".inter_cont .earth .type2").css({"opacity":0});

							innerTracking("Button_Middle Center_TECHNOLOGY LEADERSHIP");
							break;
						}
						case 2:		//11
						{
							naviIndex = 5;
							featureIndex = 5;

							fullDelta = 6 * baseDelta;
							nowShowPage = 6;

							bgNumber = 1;
							idx = 9;
							viewContent = 5;
							$(".bg_cont .bg").eq(2).css("opacity",1);
							$(".bg_cont").css({"margin-top":-(windowHeight*1) + "px"});
							
							$(".bg_cont .panel_field_far .panel_field").css({"transition":"", "-webkit-transition":"","transform":"scale(1.0)", "-webkit-transform":"scale(1.0)","opacity":0});
							$(".bg_cont .panel_field_far .panel_field_blur").css({"transition":"", "-webkit-transition":"","opacity":0})

							$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*5) + "px"});
						
							$(".f2_4_line").css({"transition":"", "-webkit-transition":"","opacity":1, "width":""});
							$(".f2_4 .obj .year").css({"transition":"","-webkit-transition":"","transform":"translate(0vh,0vh) scale(1.0)","-webkit-transform":"translate(0vh,0vh) scale(1.0)","opacity":1});
							$(".f2_4 .obj .year_txt").css({"transition":"","-webkit-transition":"","transform":"translate(0vh,0vh)","-webkit-transform":"translate(0vh,0vh)","opacity":1});

							innerTracking("Button_Middle Center_Q.ANTUM TECHNOLOGY");
							break;
						}
						case 3:		//22
						{
							naviIndex = 17;
							featureIndex = 18;

							fullDelta = 21 * baseDelta;
							nowShowPage = 21;

							bgNumber = 6;
							$(".tile_cont").css("display","none");	
							$(".inter_cont .sky").css({"transition":"", "-webkit-transition":"", "opacity":1});							
							$(".bg_cont .bg").eq(7).css("opacity",1);	
							$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*6) + "px"});
							$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"","-webkit-transition":"","bottom":"0vh", "opacity":1});
							$(".inter_cont .sky").css({"transition":"", "-webkit-transition":"","opacity":0});
							$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*18) + "px"});
							$(".f4_2 .txt .title").css({"transition":"","-webkit-transition":"","transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});

							innerTracking("Button_Middle Center_PERFORMANCE&RELIABILITY");
							break;
						}
						case 4:		//27
						{
							naviIndex = 22;
							featureIndex = 24;
							fullDelta = 26 * baseDelta;
							nowShowPage = 26;

							bgNumber = 7;
							if(!$(".indicator_wrap").hasClass("type2"))
								$(".indicator_wrap").addClass("type2");

							if(!$(".header_wrap").hasClass("type2"))
								$(".header_wrap").addClass("type2");

							$(".bg_cont .bg").eq(8).css("opacity",1);	
							$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*7) + "px"});
							$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*24) + "px"});
							$(".bg_cont .bg.dot_map img").css({"transition":"", "-webkit-transition":"","opacity":1});
							$(".f5_1 .txt .title").css({"transition":"", "-webkit-transition":"","transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
							$(".f5_1 .txt .desc").css({"transition":"", "-webkit-transition":"","transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});						
							$(".f5_1 .ico_wrap.type1").css({"transition":"", "-webkit-transition":"","transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)", "opacity":1});
							$(".f5_1 .ico_wrap.line").css({"transition":"", "-webkit-transition":"","opacity":1});
							$(".f5_1 .ico_wrap.type2").css({"transition":"", "-webkit-transition":"","transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)", "opacity":1});

							innerTracking("Button_Middle Center_GLOBAL FOOTPRINT");
							break;
						}
					}

					
				
					oldPageIndex = parseInt(fullDelta/baseDelta);
					oldShowPage = parseInt(fullDelta/baseDelta);
					
					guageMotion(menuIndex, naviIndex);
					pageTracking("");
				},300);
				
				$(".container").css({"transition":"opacity 0.5s 0.3s", "-webkit-transition":"opacity 0.5s 0.3s", "opacity":1});
				setTimeout(function(){
					pageInteraction_Able = true;
				},500);
			},300);

			setTimeout(function(){
				skipMenu = false;
			}, 1000);

			$(".m_vw .header_wrap .mobile_menu_wrap").animate({"opacity":0}, 500, function(){
				$(this).css("display","none");
			});
		}
		return false;
	});

	$(document).on("click",".m_header .header_wrap .mobile_menu_wrap .menu_middle ul li a", function(){
		$(".indicator_wrap").css({"transition":"opacity 0.5s", "-webkit-transition":"opacity 0.5s", "opacity":1});
		$(".header_wrap").removeClass("open");
		if (!skipMenu && pageInteraction_Able)
		{
			$(".m_header .m_scroll_img").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":0});

			skipMenu = true;
			startPosition = true;
			$(".indicator_wrap").removeClass("bg_bk");
			$(".indicator_wrap").removeClass("bg_bl");

			$(".container").css({"transition":"opacity 0.3s","-webkit-transition":"opacity 0.3s", "opacity":0});
			pageInteraction_Able = false;
			menuIndex = $(this).parent().index();
			nowShowMenu = menuIndex;

			if($(".header_wrap").hasClass("type2"))
				$(".header_wrap").removeClass("type2");

			setTimeout(function(){
				menuFrame_Reset();

				setTimeout(function(){				
					switch (menuIndex)
					{
						case 0:		// 0
						{
							naviIndex = 0;
							fullDelta = 0 * baseDelta;
							featureIndex = 0;

							nowShowPage = 0;

							bgNumber = 0;
							$(".inter_cont .sun").css("display","block");
							$(".bg_cont .bg.space").css("opacity",1);
							$(".f1_1 .txt").css({"transition":"", "-webkit-transition":"", "transform":"translate(0px,0px)", "-webkit-transform":"translate(0px,0px)"});
							$(".f1_1 .txt .title").css({"transition":"", "-webkit-transition":"", "opacity":1});
							$(".f1_1 .txt .desc").css({"transition":"", "-webkit-transition":"", "opacity":1});
							$(".feature_cont").css({"transition":"","-webkit-transition":"", "margin-top":"0vh"});
							$(".bg_cont").css({"transition":"","margin-top":"0vh"});
							$(".inter_cont .sun .flame").css({"transform":"","-webkit-transform":"","margin-left":"","top":"","margin-top":""});
							
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

								console.log("$('.m_header .header_wrap .mobile_menu_wrap .menu_middle ul li a').click() - 1");
								$(".inter_cont .sun img").css({"transform":"scale(2.0) translate(0px, " + sunP + "px)", "-webkit-transform":"scale(2.0) translate(0px, " + sunP + "px)"});
							}else{
								var sunHeight = $(".inter_cont .sun img").outerHeight();
								var sunTop = Math.abs(parseInt($(".inter_cont .sun img").css("margin-top")));

								var sunP = (sunTop / 2) + (windowHeight * 0.28);
								
								console.log("$('.m_header .header_wrap .mobile_menu_wrap .menu_middle ul li a').click() - 1");
								$(".inter_cont .sun img").css({"transform":"scale(2.0) translate(0px, " + sunP + "px)", "-webkit-transform":"scale(2.0) translate(0px, " + sunP + "px)"});
							}

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

							innerTracking("Button_Middle Center_ENERGY INNOVATION");
							break;
						}
						case 1:		// 4
						{
							naviIndex = 3;
							featureIndex = 2;
							fullDelta = 3 * baseDelta;

							nowShowPage = 3;

							bgNumber = 0;
							$(".bg_cont .bg.space").css("opacity",1);
							viewContent = 2;
							$(".bg_cont").css({"transition":"0","-webkit-transition":"0","margin-top":"0vh"});
							$(".f1_2 .obj_2 .obj_wrap.graph div").css({"transition":"0", "-webkit-transition":"0", "opacity":0});
							sunPlear_Able = false;
							var sunMargin_Left = parseInt($(".inter_cont .sun .flame").css("margin-left")) + (windowWidth/3);
							var sunMargin_Top = parseInt($(".inter_cont .sun .flame").css("margin-top")) - (windowHeight/3);
							$(".inter_cont .sun img").css({"transition":"","-webkit-transition":"","transform":"scale(0) translate(0px,0px)","-webkit-transform":"scale(0) translate(0px,0px)", "margin-left":sunMargin_Left + "px", "margin-top":sunMargin_Top + "px"});

							$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*(2)) + "px"});

							$(".inter_cont .earth img").css({"transition":"", "-webkit-transition":"","transform":"scale(1.0) translate(0vw, 0vw)", "-webkit-transform":"scale(1.0) translate(0vw, 0vw)", "opacity":1});
							$(".f2_1 .txt").css({"transition":"", "-webkit-transition":"","opacity":1, "transform":"translate(0px, 0px)", "-webkit-transform":"translate(0px, 0px)"});
							$(".f2_1 .txt .title").css({"transition":"", "-webkit-transition":"","opacity":1});
							$(".f2_1 .txt .desc").css({"transition":"", "-webkit-transition":"","opacity":1, "display":"block"});
							
							$(".inter_cont .earth").css({"transition":"", "-webkit-transition":"","opacity":1});
							$(".inter_cont .earth .type2").css({"opacity":0});

							innerTracking("Button_Middle Center_TECHNOLOGY LEADERSHIP");
							break;
						}
						case 2:		//11
						{
							naviIndex = 5;
							featureIndex = 5;

							fullDelta = 6 * baseDelta;

							nowShowPage = 6;

							bgNumber = 1;
							idx = 9;
							viewContent = 5;
							$(".bg_cont .bg").eq(2).css("opacity",1);
							$(".bg_cont").css({"margin-top":-(windowHeight*1) + "px"});
							
							$(".bg_cont .panel_field_far .panel_field").css({"transition":"", "-webkit-transition":"","transform":"scale(1.0)", "-webkit-transform":"scale(1.0)","opacity":0});
							$(".bg_cont .panel_field_far .panel_field_blur").css({"transition":"", "-webkit-transition":"","opacity":0})

							$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*5) + "px"});
							if ($("body").hasClass("m_vw"))
							{
								$(".f2_4_line").css({"transition":"", "-webkit-transition":"","opacity":1, "width":""});
							}else{
								$(".f2_4_line").css({"transition":"", "-webkit-transition":"","opacity":1, "width":"3000px"});
							}
							
							$(".f2_4 .obj .year").css({"transition":"","-webkit-transition":"","transform":"translate(0vh,0vh) scale(1.0)","-webkit-transform":"translate(0vh,0vh) scale(1.0)","opacity":1});
							$(".f2_4 .obj .year_txt").css({"transition":"","-webkit-transition":"","transform":"translate(0vh,0vh)","-webkit-transform":"translate(0vh,0vh)","opacity":1});

							innerTracking("Button_Middle Center_Q.ANTUM TECHNOLOGY");
							break;
						}
						case 3:		//22
						{
							naviIndex = 17;
							featureIndex = 18;

							fullDelta = 19 * baseDelta;

							nowShowPage = 19;

							bgNumber = 6;
							$(".tile_cont").css("display","none");	
							$(".inter_cont .sky").css({"transition":"", "-webkit-transition":"", "opacity":1});							
							$(".bg_cont .bg").eq(7).css("opacity",1);	
							$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*6) + "px"});
							$(".bg_cont .skypanel_wrap .skypanel").css({"transition":"","-webkit-transition":"","bottom":"0vh", "opacity":1});
							$(".inter_cont .sky").css({"transition":"", "-webkit-transition":"","opacity":0});
							$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*18) + "px"});
							$(".f4_2 .txt .title").css({"transition":"","-webkit-transition":"","transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});

							innerTracking("Button_Middle Center_PERFORMANCE&RELIABILITY");
							break;
						}
						case 4:		//27
						{
							naviIndex = 22;
							featureIndex = 24;
							fullDelta = 24 * baseDelta;

							nowShowPage = 24;

							bgNumber = 7;
							if(!$(".indicator_wrap").hasClass("type2"))
								$(".indicator_wrap").addClass("type2");

							if(!$(".header_wrap").hasClass("type2"))
								$(".header_wrap").addClass("type2");

							$(".bg_cont .bg").eq(8).css("opacity",1);	
							$(".bg_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*7) + "px"});
							$(".feature_cont").css({"transition":"","-webkit-transition":"","margin-top":-(windowHeight*24) + "px"});
							$(".bg_cont .bg.dot_map img").css({"transition":"", "-webkit-transition":"","opacity":1});
							$(".f5_1 .txt .title").css({"transition":"", "-webkit-transition":"","transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});
							$(".f5_1 .txt .desc").css({"transition":"", "-webkit-transition":"","transform":"translate(0vw, 0vw)", "-webkit-transform":"translate(0vw, 0vw)", "opacity":1});						
							$(".f5_1 .ico_wrap.type1").css({"transition":"", "-webkit-transition":"","transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)", "opacity":1});
							$(".f5_1 .ico_wrap.line").css({"transition":"", "-webkit-transition":"","opacity":1});
							$(".f5_1 .ico_wrap.type2").css({"transition":"", "-webkit-transition":"","transform":"translateX(0vw) translateY(0vw)", "-webkit-transform":"translateX(0vw) translateY(0vw)", "opacity":1});

							innerTracking("Button_Middle Center_GLOBAL FOOTPRINT");
							break;
						}
					}

					
				
					oldPageIndex = parseInt(fullDelta/baseDelta);
					oldShowPage = parseInt(fullDelta/baseDelta);
					
					guageMotion(menuIndex, naviIndex);
					pageTracking("");
				},300);
				
				$(".container").css({"transition":"opacity 0.5s 0.3s", "-webkit-transition":"opacity 0.5s 0.3s", "opacity":1});
				setTimeout(function(){
					pageInteraction_Able = true;
				},500);
			},300);

			setTimeout(function(){
				skipMenu = false;
			}, 1000);

			$(".m_header .header_wrap .mobile_menu_wrap").animate({"opacity":0}, 500, function(){
				$(this).css("display","none");
			});
		}
		return false;
	});

	$(".header_wrap .mobile_menu_wrap .menu_bottom .hr_btn a").click(function(){
		innerTracking("Button_Middle Center_Newsroom:https://www.hanwha.com/en/news_and_media/newsroom.html"); 

		var openNewWindow = window.open("about:blank");
		openNewWindow.location.href = "https://www.hanwha.com/en/news_and_media/newsroom.html";
		return false;
	});

	$(".header_wrap .logo a").click(function(){

		innerTracking("Button_Middle Center_HANWHA Logo");

		document.location.reload();
		return false;
	});

	$(".indicator_wrap .keyboard_img .keyboard_img_inner a").click(function(){
		if (pageInteraction_Able)
		{
			if ($(this).index() == 0)
			{
				fullDelta -= baseDelta;
				if(fullDelta < 0)
					 fullDelta = 0;
				pageIndex = parseInt(fullDelta/baseDelta);
				if(pageIndex != oldPageIndex)
				{
					pageInteraction_Able = false;
					oldPageIndex = pageIndex;
					showPage(pageIndex);
				}
			}else{
				fullDelta += baseDelta;
				if(fullDelta > 26)
					 fullDelta = 26;
				pageIndex = parseInt(fullDelta/baseDelta);
				if(pageIndex != oldPageIndex)
				{
					pageInteraction_Able = false;
					oldPageIndex = pageIndex;
					showPage(pageIndex);
				}
			}
		}		
		return false;
	});

	$(".indicator_wrap .cr_btn").click(function(){
		clearTimeout(copyrightTimmer);
		copyright_Able = true;
		$(".indicator_wrap .copyright_w").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s", "bottom":"0px"});
		$(this).stop().animate({"opacity":0},300,function(){
			$(this).css({"display":"none"});
		});

		copyrightTimmer = setTimeout(function(){
			console.log("timeout");
			if (copyright_Able)
			{
				opyright_Able = false;
				$(".indicator_wrap .copyright_w").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s", "bottom":"-40px"});
				$(".indicator_wrap .cr_btn").stop().css({"display":"block","opacity":0}).animate({"opacity":1},300);
			}
		}, 3000);
		
		innerTracking("Button_Bottom Right_Copylight");
		return false;
	});

	$(".copyright_w").hover(function(){
		/*if (!copyright_Able)
		{
			copyright_Able = true;
			$(".indicator_wrap .copyright_w").css({"transition":"all 0.5s", "bottom":"0px"});
			$(".indicator_wrap .cr_btn").stop().animate({"opacity":0},300,function(){
				$(this).css({"display":"none"});
				
			});
		}*/
	}, function(){
		clearTimeout(copyrightTimmer);
		if (copyright_Able)
		{
			copyright_Able = false;
			$(".indicator_wrap .copyright_w").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s", "bottom":"-40px"});
			$(".indicator_wrap .cr_btn").stop().css({"display":"block","opacity":0}).animate({"opacity":1},300);
		}
	});


	$(".f1_2 .mobile_txt_btn a").click(function(){
		if ($(this).hasClass("active"))
		{
			$(this).removeClass("active");

			showPopupSize = 0;
			pageSize();		

			$(".f1_2").css({"overflow":"hidden"});
			$(".f1_2 .txt .desc.use_exp p").css({"display":"none"});
		}else{
			$(this).addClass("active");
			$(".f1_2 .txt .desc.use_exp p").css({"display":"block"});
			
			var textHeight = $(".m_vw .f1_2 .txt .desc.use_exp p").outerHeight() + (windowWidth * 0.0787);
			
			showPopupSize = textHeight / windowWidth;

			$(".wrap").css({"transition":"height 0.5s", "-webkit-transition":"height 0.5s", "height":(windowHeight + textHeight) + "px"});
			$(".feature_cont_cover").css({"height":(windowHeight + textHeight) + "px"});
			$(".feature_cont").css({"height":(windowHeight +textHeight) + "px"});
			$(".f1_2").css({"overflow":"visible"});

			innerTracking("Button_Bottom Center_THE GROWTH IN POPULARITY OF SOLAR ENERGY - Learn More");
		}

		
		return false;
	});

	$(".f2_2 .mobile_txt_btn a").click(function(){
		if ($(this).hasClass("active"))
		{
			$(this).removeClass("active");

			showPopupSize = 0;
			
			showPopupSize = 0;
			pageSize();		
			$(".f2_2").css({"overflow":"hidden"});
			$(".f2_2 .txt .desc.use_exp p").css({"display":"none"});		
		}else{
			$(this).addClass("active");
			$(".f2_2 .txt .desc.use_exp p").css({"display":"block"});
			
			var textHeight = $(".m_vw .f2_2 .txt .desc.use_exp p").outerHeight() + (windowWidth * 0.0787);
			
			showPopupSize = textHeight / windowWidth;

			$(".wrap").css({"transition":"height 0.5s", "height":(windowHeight + textHeight) + "px"});
			$(".feature_cont_cover").css({"height":(windowHeight + textHeight) + "px"});
			$(".feature_cont").css({"height":(windowHeight +textHeight) + "px"});
			$(".f2_2").css({"overflow":"visible"});

			innerTracking("Button_Bottom Center_GLOBAL R&D NETWORK - Learn More");
		}
		
		return false;
	});

	$(".f3_2 .mobile_txt_btn a").click(function(){
		if ($(this).hasClass("active"))
		{
			$(this).removeClass("active");
			
			showPopupSize = 0;
			pageSize();	
			
			$(".f3_2").css({"overflow":"hidden"});
			$(".f3_2 .txt .desc.use_exp p").animate({"opacity":0},300,function(){
				$(this).css({"display":"none"});

				$(".m_vw .f3_2 .obj_wrap").css({"transition":"transform 0.5s", "-webkit-transition":"transform 0.5s","transform":"translate(0px,0px)"});			
			});
		}else{
			$(this).addClass("active");
			$(".f3_2 .txt .desc.use_exp p").css({"display":"block", "opacity":0}).animate({"opacity":1},300);
			
			var textHeight = $(".m_vw .f3_2 .txt .desc.use_exp p").outerHeight() + (windowWidth * 0.0787);
			
			showPopupSize = textHeight / windowWidth;

			$(".wrap").css({"transition":"height 0.5s", "height":(windowHeight + textHeight) + "px"});
			$(".feature_cont_cover").css({"height":(windowHeight + textHeight) + "px"});
			$(".feature_cont").css({"height":(windowHeight +textHeight) + "px"});
			$(".m_vw .f3_2 .obj_wrap").css({"transition":"transform 0.5s", "-webkit-transition":"transform 0.5s","transform":"translate(0px, " + textHeight + "px)"});
			$(".f3_2").css({"overflow":"visible"});
			
			innerTracking("Button_Bottom Center_DON'T JUST BUY PERC, BUY Q.ANTUM - Learn More");
		}
		return false;
	});
	
	$(".header_wrap .mobile_btn a").click(function(){
		if($(".header_wrap").hasClass("type2"))
		{
			mobileType_Able = true;
			$(".header_wrap").removeClass("type2");
		}else{
			mobileType_Able = false;
		}

		
		$(".header_wrap").addClass("open");
		$(".indicator_wrap").css({"transition":"opacity 0.5s", "-webkit-transition":"opacity 0.5s", "opacity":0});
		$(".header_wrap .mobile_menu_wrap").css({"display":"block", "opacity":0}).animate({"opacity":1});

		var mMenuHeight = $(window).outerHeight() - 166;
		console.log("mMenuHeight : " + mMenuHeight);
		$(".pc.m_mini .header_wrap .mobile_menu_wrap .menu_middle").css("height",mMenuHeight + "px");

		innerTracking("Button_Top Left_Header Menu");
		return false;
	});

	$(document).on("click", ".m_vw .header_wrap .mobile_menu_wrap .menu_top .menu_close_btn a", function(){
		$(".indicator_wrap").css({"transition":"opacity 0.5s", "-webkit-transition":"opacity 0.5s", "opacity":1});
		$(".header_wrap").removeClass("open");
		$(".m_vw .header_wrap .mobile_menu_wrap").animate({"opacity":0}, 500, function(){

			$(this).css("display","none");
			if (mobileType_Able)
			{
				mobileType_Able = false;
				$(".header_wrap").addClass("type2");
			}

			if ($("body").hasClass("m_vw") || $("body").hasClass("m_size"))
			{
				if (nowShowPage == 7 || nowShowPage == 8)
				{
					logoColor_Able = true;
				}				
			}
		});
		return false;
	});

	$(document).on("click", ".m_header .header_wrap .mobile_menu_wrap .menu_top .menu_close_btn a", function(){
		$(".indicator_wrap").css({"transition":"opacity 0.5s", "-webkit-transition":"opacity 0.5s", "opacity":1});
		$(".header_wrap").removeClass("open");
		$(".m_header .header_wrap .mobile_menu_wrap").animate({"opacity":0}, 500, function(){
			$(this).css("display","none");
			if (mobileType_Able)
			{
				mobileType_Able = false;
				$(".header_wrap").addClass("type2");
			}

			if ($("body").hasClass("m_vw") || $("body").hasClass("m_size"))
			{
				if (nowShowPage == 7 || nowShowPage == 8)
				{
					logoColor_Able = true;
				}				
			}
		});
		return false;
	});

	$(".f3_10 .video_play_btn a").click(function(){
		$(this).animate({"opacity":0},300,function(){
			$(this).css("display","none");
		});

		interview01Load();
		$(".f3_10 .movie_progress .control_btn").addClass("pause");


		innerTracking("Button_Top Right_DR. JÖRG MÜLLER INTERVIEW - Play");
		return false;
	});

	$(".f4_1 .video_play_btn a").click(function(){
		$(this).animate({"opacity":0},300,function(){
			$(this).css("display","none");
		});

		interview02Load();
		$(".f4_1 .movie_progress .control_btn").addClass("pause");

		innerTracking("Button_Top Right_DR. KARL HEINZ KUSTERS INTERVIEW - Play");
		return false;
	});
	
	

});

var showPopupSize = 0;

var interviewViedo01_Able = false;
var interviewViedo02_Able = false;
var advancedIndex = 0;
var oldAdvancedIndex = 0;
var copyright_Able = false;
var copyrightTimmer = "";
var mobileType_Able = false;

function mobileOpenLayer_reset()
{
	$(".mobile_txt_btn a").removeClass("active");
	$(".f1_2 .txt .desc.use_exp p").css({"display":"none"});
	$(".f2_2 .txt .desc.use_exp p").css({"display":"none"});
	$(".f3_2 .txt .desc.use_exp p").css({"display":"none"});
	$(".wrap").css({"transition":"height 0.5s", "height":windowHeight + "px"});
	$(".feature_cont_cover").css({"height":windowHeight + "px"});
	$(".feature_cont").css({"height":windowHeight + "px"});
	$(".f1_2").css({"overflow":"hidden"});
	$(".m_vw .f3_2 .obj_wrap").css({"transform":"translate(0px,0px)"});
	$(".f3_8").css({"height":windowHeight + "px"});
}