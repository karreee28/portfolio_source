var nowGuage = 0;
var nowGuage_index = 0;
var nowShowMenu = 0;
function guageMotion(m, idx)
{

	console.log("guageMotion : " + idx);
	$(".indicator_wrap .nav li a").removeClass("active");
	switch (idx)
	{
		case 0:		// Step1
		{
			nowGuage = 10;
			break;
		}
		case 1:
		{
			nowGuage = 16.67;
			break;
		}
		case 2:
		{
			nowGuage = 23.33;
			break;
		}
		case 3:		// Step2
		{
			nowGuage = 30;
			break;
		}
		case 4:
		{
			nowGuage = 40;
			break;
		}
		case 5:		// Step3
		{
			nowGuage = 50;
			break;
		}
		case 6:
		{
			nowGuage = 51.67;
			break;
		}
		case 7:
		{
			nowGuage = 53.33;
			break;
		}
		case 8:
		{
			nowGuage = 55;
			break;
		}
		case 9:
		{
			nowGuage = 56.67;
			break;
		}
		case 10:
		{
			nowGuage = 58.33;
			break;
		}
		case 11:
		{
			nowGuage = 60;
			break;
		}
		case 12:
		{
			nowGuage = 61.67;
			break;
		}
		case 13:
		{
			nowGuage = 63.33;
			break;
		}
		case 14:
		{
			nowGuage = 65;
			break;
		}
		case 15:
		{
			nowGuage = 66.67;
			break;
		}
		case 16:
		{
			nowGuage = 68.33;
			break;
		}
		case 17:		// Step4
		{
			nowGuage = 70;
			break;
		}
		case 18:
		{
			nowGuage = 74;
			break;
		}
		case 19:
		{
			nowGuage = 78;
			break;
		}
		case 20:
		{
			nowGuage = 82;
			break;
		}
		case 21:
		{
			nowGuage = 86;
			break;
		}
		case 22:		// Step5
		{
			nowGuage = 90;
			break;
		}
		case 23:
		{
			nowGuage = 95;
			break;
		}
		case 24:
		{
			nowGuage = 100;
			break;
		}
	}

	console.log("nowGuage : " + nowGuage);

	if (m < 5)
	{
		nowShowMenu = m;
	}else{
		nowShowMenu = 4;
	}
	
	$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").css("display","none");
	$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(nowShowMenu).css("display","block");
	$(".indicator_wrap .nav li").eq(nowShowMenu).find("a").addClass("active");

	if (idx < 5)
	{
		pageColor(1);
	}else if (idx < 6)
	{
		pageColor(2);
	}else if (idx < 8)
	{
		pageColor(3);
	}else if (idx < 9)
	{
		pageColor(4);
	}else if (idx < 11)
	{
		pageColor(5);
	}else if (idx < 15)
	{
		pageColor(6);
	}else if (idx < 17)
	{
		pageColor(7);
	}else if (idx < 22)
	{
		pageColor(8);
	}else if (idx < 24)
	{
		pageColor(9);
	}else
	{
		pageColor(10);
	}
	
	$(".indicator_wrap").removeClass("bg_bk");


	if (idx > 17 && idx < 22)
	{
		if (idx == 18)
		{
			if (!$(".indicator_wrap").hasClass("bg_bl"))
			{
				setTimeout(function(){
					$(".indicator_wrap").addClass("bg_bl");
				},500);
			}
			
		}else if (idx == 21)
		{
			if (!$(".indicator_wrap").hasClass("bg_bl"))
			{
				setTimeout(function(){
					$(".indicator_wrap").addClass("bg_bl");
				},1500);
			}
			
		}else{
			if (!$(".indicator_wrap").hasClass("bg_bl"))
			{
				$(".indicator_wrap").addClass("bg_bl");
			}
		}
		
	}else if (idx == 17)
	{
		$(".indicator_wrap").removeClass("bg_bl");
		setTimeout(function(){
			$(".indicator_wrap").addClass("bg_bk");
		},500);
	}else if ((idx >= 5 && idx <=7) || (idx >= 8 && idx <=10) || idx == 12 || idx == 15)
	{
		$(".indicator_wrap").removeClass("bg_bl");
		$(".indicator_wrap").addClass("bg_bk");
	}else{
		$(".indicator_wrap").removeClass("bg_bl");
	}
	

	if (m < 1)
	{
		$(".indicator_wrap .progress_wrap .progress_bar .progress_img").removeClass("step2");
		$(".indicator_wrap .progress_wrap .progress_bar .progress_img").removeClass("step3");
	}else if (m < 2)
	{
		if (!$(".indicator_wrap .progress_wrap .progress_bar .progress_img").hasClass("step2"))
		{
			if ($(".indicator_wrap .progress_wrap .progress_bar .progress_img").hasClass("step3"))
			{
				$(".indicator_wrap .progress_wrap .progress_bar .progress_img").removeClass("step3");
				$(".indicator_wrap .progress_wrap .progress_bar .progress_img").addClass("step2");
			}else{
				$(".indicator_wrap .progress_wrap .progress_bar .progress_img").addClass("step2");
			}
		}
	}
	else if (m >= 2)
	{
		if (!$(".indicator_wrap .progress_wrap .progress_bar .progress_img").hasClass("step3"))
		{
			if ($(".indicator_wrap .progress_wrap .progress_bar .progress_img").hasClass("step2"))
			{
				$(".indicator_wrap .progress_wrap .progress_bar .progress_img").removeClass("step2");
				$(".indicator_wrap .progress_wrap .progress_bar .progress_img").addClass("step3");
			}else{
				$(".indicator_wrap .progress_wrap .progress_bar .progress_img").addClass("step3");
			}
		}
	}

	var barWidth = $(".indicator_wrap .progress_wrap").outerWidth();

	var reWidth = barWidth * nowGuage / 100;

	if (!$("body").hasClass("m_vw"))
	{
		if (m == 1)
		{
			$(".indicator_wrap .progress_wrap .progress_bar").css({"transform":"translate(-14px, 0px)", "-webkit-transform":"translate(-14px, 0px)"});
		}else{
			$(".indicator_wrap .progress_wrap .progress_bar").css({"transform":"", "-webkit-transform":""});
		}
	}

	$(".indicator_wrap .progress_wrap .progress_bar").css({"transition":"all 1s", "-webkit-transition":"all 1s", "width":nowGuage + "%"});
	if (nowGuage == 100)
	{
		$(".indicator_wrap .progress_wrap .progress_bar .progress_img").css({"transition":"all 0.5s 0.5s", "-webkit-transition":"all 0.5s 0.5s", "opacity":0});

		if ($(window).outerWidth() > 1920)
			$(".indicator_wrap .progress_bg").css({"width":"100%"});

		if ($("body").hasClass("m_size"))
		{
			$(".indicator_wrap .progress_bg").css({"width":"100%"});
		}
	}else{
		$(".indicator_wrap .progress_wrap .progress_bar .progress_img").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "opacity":1});
		
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
	
	
	switch (m)
	{
		case 0:
		{
			if (idx == 0)
			{
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(0).css("opacity",1);
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(0).css("opacity",1);
			}else if (idx == 1)
			{
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(0).css("opacity",0);
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(1).css("opacity",1);
			}else if (idx == 2)
			{
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(0).css("opacity",0);
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(1).css("opacity",0);
			}
			break;
		}
		case 1:
		{
			if (idx == 3)
			{
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(0).css("opacity",1);
			}else if (idx == 4)
			{
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(0).css("opacity",0);
			}
			break;
		}
		case 2:
		{
			$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").css("opacity",1);

			if (idx >= 6)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(0).css("opacity",0);

			if (idx >= 7)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(1).css("opacity",0);

			if (idx >= 8)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(2).css("opacity",0);

			if (idx >= 9)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(3).css("opacity",0);

			if (idx >= 10)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(4).css("opacity",0);

			if (idx >= 11)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(5).css("opacity",0);

			if (idx >= 12)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(6).css("opacity",0);

			if (idx >= 13)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(7).css("opacity",0);

			if (idx >= 14)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(8).css("opacity",0);

			if (idx >= 15)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(9).css("opacity",0);
			
			if (idx >= 16)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(9).css("opacity",0);
			break;
		}
		case 3:
		{
			$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").css("opacity",1);
			if (idx >= 18)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(0).css("opacity",0);

			if (idx >= 19)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(1).css("opacity",0);

			if (idx >= 20)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(2).css("opacity",0);

			if (idx >= 21)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(3).css("opacity",0);

			break;
		}
		case 4:
		{
			$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").css("opacity",1);

			if (idx >= 23)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(m).find("span").eq(0).css("opacity",0);
			break;
		}
		case 5:
		{
			if (idx >= 24)
				$(".indicator_wrap .progress_wrap .bg_line .navigator_btn").eq(4).find("span").eq(1).css("opacity",0);

			break;
		}
	}
}

