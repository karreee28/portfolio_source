function restartReset()
{
	$(".indicator_wrap").removeClass("type2");
	$(".f1_1 .txt").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":""});
	$(".f1_1 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
	$(".f1_1 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
	$(".f1_2 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
	$(".f1_2 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
	$(".graph_obj").css({"transition":"all 0.3s","margin-left":"0%", "opacity":0});
	$(".graph_obj .obj_graph").css({"transition":"all 0.3s","left":"0%", "bottom":"0%"});
	$(".graph_obj .obj_graph .line").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".graph_obj .obj_graph .val .dot").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".graph_obj .obj_graph .val .num").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".graph_obj .obj_graph .val .val_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".inter_cont .sun img").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"","margin-left":"", "top":"", "margin-top":""});
	$(".inter_cont .earth img").css({"transition":"all 0.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)", "-webkit-transition":"all 0.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)", "transform":"", "-webkit-transform":"", "opacity":1});

	
	$(".f2_4_line").css({"width":"0px"});
	$(".f2_1 .txt").css({"transition":"transform 0.3s","-webkit-transition":"transform 0.3s","transform":"", "-webkit-transform":"", "opacity":1});
	$(".f2_1 .txt .title").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f2_1 .txt .desc").css({"transition":"opacity 0.3s","-webkit-transition":"opacity 0.3s","opacity":0});
	$(".f2_2 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
	$(".f2_2 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
	$(".f2_2 .txt .mid_txt").eq(0).css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f2_2 .txt .mid_txt").eq(1).css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f3_2 .txt .title").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_2 .txt .desc").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".inter_cont .panel").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".inter_cont .panel .panel_obj1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
	$(".inter_cont .panel .panel_obj2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
	$(".inter_cont .panel_full ").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"", "-webkit-transform":"","opacity":0});
	$(".inter_cont .panel_full .panel_obj").css({"transition":"","-webkit-transition":"","opacity":1});

	$(".bg_cont .panel_field_far .panel_field").css({"transition":"", "-webkit-transition":"","transform":"", "-webkit-transform":"","opacity":0});
	$(".bg_cont .panel_field_far .panel_field_blur").css({"transition":"", "-webkit-transition":"","opacity":0})

	$(".f3_2 .obj1 .obj_inner").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".f3_2 .obj2 .obj_inner").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
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
	$(".f3_2 .obj1 .obj_inner .panel_obj3").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f3_2 .obj2 .obj_inner .panel_obj3").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	
	$(".f3_3 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f3_3 .f_ico_wrap .ico").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
	$(".f3_4 .part_wrap .obj_title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});

	$(".f3_4 .f_indi_wrap ul li a").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
	$(".f3_4 .part_wrap .part1 .txt .title").css({"transition":"all 0.1s 0.3s","-webkit-transition":"all 0.1s 0.3s","opacity":0});
	$(".f3_4 .part_wrap .part1 .txt .desc").css({"transition":"all 0.1s 0.3s","-webkit-transition":"all 0.1s 0.3s","opacity":0});
	$(".f3_4 .part_wrap .part1 .txt .obj").css({"transition":"all 0.1s 0.3s","-webkit-transition":"all 0.1s 0.3s","opacity":0});
	$(".f3_4 .part_wrap .part1 .txt .obj .left").css({"transition":"all 0.1s 0.3s","-webkit-transition":"all 0.1s 0.3s","opacity":0});
	$(".f3_4 .part_wrap .part1 .txt .obj .right").css({"transition":"all 0.1s 0.3s","-webkit-transition":"all 0.1s 0.3s","opacity":0});
	$(".f3_5 .txt .title").css({"transition":"0.3s","-webkit-transition":"0.3s","opacity":0});
	$(".f3_5 .txt .desc").css({"transition":"0.3s","-webkit-transition":"0.3s","opacity":0});
	$(".f3_5 .txt .ico").css({"transition":"0.3s","-webkit-transition":"0.3s","opacity":0});
	$(".f3_6 .box_wrap .box .box_in > div").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".f3_7 .box_wrap .box .box_in > div").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".f3_8 .obj_wrap .obj1").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
	$(".f3_8 .obj_wrap .obj2").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
	$(".f3_8 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
	$(".f3_8 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
	$(".f3_75 .obj .line span").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","width":"0%"});
	$(".f3_75 .obj .val .dot").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".f3_75 .obj .val .obj_txt .t_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".f3_75 .obj .val .obj_txt .b_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".f3_75 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".f3_75 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".f3_75 .bg_obj").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","left":"-50%"});
	$(".f3_9 .obj .line span").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","width":"0%"});
	$(".f3_9 .obj .val .dot").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".f3_9 .obj .val .obj_txt .t_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".f3_9 .obj .val .obj_txt .b_txt").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".f3_9 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".f3_9 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".f3_9 .bg_obj").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","left":"-50%"});
	$(".f3_10 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".f3_10 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","opacity":0});
	$(".f3_11 .txt .title").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
	$(".f3_11 .txt .desc").css({"transition":"all 0.3s","-webkit-transition":"all 0.3s","transform":"","-webkit-transform":"","opacity":0});
	$(".f3_11 .obj").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".condition_w .obj .ico").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".condition_w .obj").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":""});
	
	if (interview01wLoad_Able)
		interviewVideo01_w.pause();
	if (interview01mLoad_Able)
		interviewVideo01_m.pause();
	if (interview02wLoad_Able)
		interviewVideo02_w.pause();
	if (interview02mLoad_Able)
		interviewVideo02_m.pause();
	
	$(".bg_cont .interview2 .vCover").css({"display":"block","opacity":1});
	$(".bg_cont .interview .vCover").css({"display":"block","opacity":1});
	$(".bg_cont .interview").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
	$(".bg_cont .skypanel_wrap").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
	$(".bg_cont .skypanel_wrap .skyPanel").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":1});
	$(".f4_1 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_1 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_2 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_3 .txt .ico_wrap").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_3 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_3 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_4 .txt .ico_wrap").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_4 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_4 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_5 .txt .ico_wrap").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_5 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_5 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_6 .txt .ico_wrap").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_6 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_6 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".bg_cont .bg.dot_map img").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
	$(".f5_1 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f5_1 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f5_1 .ico_wrap.type1").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f5_1 .ico_wrap.line").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
	$(".f5_1 .ico_wrap.type2").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f5_2 .dot").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
	$(".f5_2 .click_ico").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
	$(".f5_2 .txt .title").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f5_2 .txt .desc").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f5_3 .txt .title").css({"transition":"0.3s", "-webkit-transition":"0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f5_3 .txt .desc").css({"transition":"0.3s", "-webkit-transition":"0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f5_3 .txt .btn_wrap a").css({"transition":"0.3s", "-webkit-transition":"0.3s", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".bg_cont .forest img").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".tile_cont_half").css({"display":"none"});
	$(".tile_cont_quad").css({"display":"none"});
	$(".inter_cont .panel_half_sf").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
	
	if (!$("body").hasClass("m_vw"))
		endingVideo.pause();

	$(".indicator_wrap .progress_wrap .progress_bar .progress_img").removeClass("step2");
	$(".indicator_wrap .progress_wrap .progress_bar .progress_img").removeClass("step3");
	$(".bg_cont .bg.dot_map img").css({"transform":"", "-webkit-transform":""});

	$(".tile_cont .tile_cont_inner .tile img").attr("src", "images/panel_cell.jpg");

	$(".f3_10 .movie_progress").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
	$(".f4_1 .movie_progress").css({"transition":"all 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});

	$(".condition_w").css({"transition":"","-webkit-transition":"","opacity":0});

	if (endingInterval != "")
	{
		clearInterval(endingInterval);
		endingInterval = "";
	}
	featureIndex = 0;
	nowShowPage = 0;
	pageResizing();	

	$(".graph_obj").css({"opacity":1});
	$(".inter_cont .earth .type2").css({"opacity":0});

	if ($("body").hasClass("h_vw"))
	{
		var progressWidth = ($(window).outerWidth() - 1440) / 2;
		$(".indicator_wrap .progress_bg").css({"width":progressWidth + "px"});
	}else{
		var progressWidth = ($(window).outerWidth() - 1920) / 2;
		$(".indicator_wrap .progress_bg").css({"width":progressWidth + "px"});
	}

	if ($(window).outerWidth() > 1920)
	{
		var progressWidth = ($(window).outerWidth() - 1920) / 2;
		$(".indicator_wrap .progress_bg").css({"width":progressWidth + "px"});

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

function menuFrame_Reset()
{

	timeoutClear();

	audioSound("max");

	$(".bg_cont .bg").css("opacity",0);
	$(".inter_cont .sun").css("display","none");
	$(".indicator_wrap").removeClass("type2");
	$(".f1_1 .txt").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":""});
	$(".f1_1 .txt .desc").css({"transition":"", "-webkit-transition":"", "opacity":0});

	$(".f1_2 .txt .title").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"","opacity":0});
	$(".f1_2 .txt .desc").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"","opacity":0});
	$(".graph_obj").css({"transition":"all 0.3s","margin-left":"0%", "opacity":0});
	$(".graph_obj .obj_graph").css({"transition":"all 0.3s","left":"0%", "bottom":"0%"});
	$(".graph_obj .obj_graph .line").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".graph_obj .obj_graph .val .dot").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".graph_obj .obj_graph .val .num").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".graph_obj .obj_graph .val .val_txt").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".inter_cont .sun img").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"","margin-left":"", "top":"", "margin-top":""});
	$(".inter_cont .earth img").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":1});
	if (!$("body").hasClass("m_vw"))
	{
		earthVideo_In.pause();
		earthVideo_Out.pause();
	}
	$(".f2_4_line").css({"width":"0px"});
	$(".f2_1 .txt").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"", "opacity":1});
	$(".f2_1 .txt .title").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f2_1 .txt .desc").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f2_2 .txt .title").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"","opacity":0});
	$(".f2_2 .txt .desc").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"","opacity":0});
	$(".f2_2 .txt .mid_txt").eq(0).css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f2_2 .txt .mid_txt").eq(1).css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f3_2 .txt .title").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_2 .txt .desc").css({"transition":"","-webkit-transition":"","opacity":0});

	$(".inter_cont .panel").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".inter_cont .panel .panel_obj1").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".inter_cont .panel .panel_obj2").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".inter_cont .panel_full ").css({"transition":"","-webkit-transition":"","transform":"", "-webkit-transform":"","opacity":0});
	$(".inter_cont .panel_full .panel_obj").css({"transition":"","-webkit-transition":"","opacity":1});
	$(".bg_cont .panel_field_far .panel_field").css({"transition":"", "-webkit-transition":"","transform":"", "-webkit-transform":"","opacity":0});
	$(".bg_cont .panel_field_far .panel_field_blur").css({"transition":"", "-webkit-transition":"","opacity":0})

	$(".f3_2 .obj1 .obj_inner").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_2 .obj2 .obj_inner").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_2 .obj1 .obj_inner .panel_obj1").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f3_2 .obj1 .obj_inner .panel_obj2").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f3_2 .obj1 .obj_inner .panel_obj4").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f3_2 .obj2 .obj_inner .panel_obj2").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f3_2 .obj2 .obj_inner .panel_obj4").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f3_2 .obj .obj_inner .obj_title").css({"transition":"", "-webkit-transition":"", "opacity":0});
	$(".f3_2 .obj1 .obj_inner .obj_txt1").css({"transition":"", "-webkit-transition":"", "opacity":0});
	$(".f3_2 .obj1 .obj_inner .obj_txt2").css({"transition":"", "-webkit-transition":"", "opacity":0});
	$(".f3_2 .obj1 .obj_inner .obj_txt3").css({"transition":"", "-webkit-transition":"", "opacity":0});
	$(".f3_2 .obj1 .obj_inner .obj_txt4").css({"transition":"", "-webkit-transition":"", "opacity":0});
	$(".f3_2 .obj2 .obj_inner .obj_txt3").css({"transition":"", "-webkit-transition":"", "opacity":0});
	$(".f3_2 .obj2 .obj_inner .obj_txt4").css({"transition":"", "-webkit-transition":"", "opacity":0});
	$(".f3_2 .obj1 .obj_inner .panel_obj3").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f3_2 .obj2 .obj_inner .panel_obj3").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});

	$(".f3_3 .txt .title").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f3_3 .f_ico_wrap .ico").css({"transition":"", "-webkit-transition":"", "opacity":0});
	$(".f3_4 .part_wrap .obj_title").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_4 .f_indi_wrap ul li a").css({"transition":"", "-webkit-transition":"", "opacity":0});
	$(".f3_4 .part_wrap .part1 .txt .title").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_4 .part_wrap .part1 .txt .desc").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_4 .part_wrap .part1 .txt .obj").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_4 .part_wrap .part1 .txt .obj .left").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_4 .part_wrap .part1 .txt .obj .right").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_5 .txt .title").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_5 .txt .desc").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_5 .txt .ico").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_6 .box_wrap .box .box_in > div").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_7 .box_wrap .box .box_in > div").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_8 .obj_wrap .obj1").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"","opacity":0});
	$(".f3_8 .obj_wrap .obj2").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"","opacity":0});
	$(".f3_8 .txt .title").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"","opacity":0});
	$(".f3_8 .txt .desc").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"","opacity":0});
	$(".f3_75 .obj .line span").css({"transition":"","-webkit-transition":"","width":"0%"});
	$(".f3_75 .obj .val .dot").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_75 .obj .val .obj_txt .t_txt").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_75 .obj .val .obj_txt .b_txt").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_75 .txt .title").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_75 .txt .desc").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_75 .bg_obj").css({"transition":"","-webkit-transition":"","left":"-50%"});
	$(".f3_9 .obj .line span").css({"transition":"","-webkit-transition":"","width":"0%"});
	$(".f3_9 .obj .val .dot").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_9 .obj .val .obj_txt .t_txt").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_9 .obj .val .obj_txt .b_txt").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_9 .txt .title").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_9 .txt .desc").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_9 .bg_obj").css({"transition":"","-webkit-transition":"","left":"-50%"});
	$(".f3_10 .txt .title").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_10 .txt .desc").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_11 .txt .title").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"","opacity":0});
	$(".f3_11 .txt .desc").css({"transition":"","-webkit-transition":"","transform":"","-webkit-transform":"","opacity":0});
	$(".f3_11 .obj").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".condition_w .obj .ico").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".condition_w .obj").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":""});
	if (interview01wLoad_Able)
		interviewVideo01_w.pause();
	if (interview01mLoad_Able)
		interviewVideo01_m.pause();
	if (interview02wLoad_Able)
		interviewVideo02_w.pause();
	if (interview02mLoad_Able)
		interviewVideo02_m.pause();
	$(".bg_cont .interview2 .vCover").css({"display":"block","opacity":1});
	$(".bg_cont .interview .vCover").css({"display":"block","opacity":1});

	$(".bg_cont .interview").css({"transition":"", "-webkit-transition":"", "opacity":0});
	$(".bg_cont .skypanel_wrap").css({"transition":"", "-webkit-transition":"", "opacity":1});
	$(".bg_cont .skypanel_wrap .skyPanel").css({"transition":"", "-webkit-transition":"", "bottom":"", "opacity":1});
	$(".f4_1 .txt .title").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_1 .txt .desc").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_2 .txt .title").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_3 .txt .ico_wrap").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_3 .txt .title").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_3 .txt .desc").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_4 .txt .ico_wrap").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_4 .txt .title").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_4 .txt .desc").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_5 .txt .ico_wrap").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_5 .txt .title").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_5 .txt .desc").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_6 .txt .ico_wrap").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_6 .txt .title").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f4_6 .txt .desc").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".bg_cont .bg.dot_map img").css({"transition":"", "-webkit-transition":"", "opacity":0});
	$(".f5_1 .txt .title").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f5_1 .txt .desc").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f5_1 .ico_wrap.type1").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f5_1 .ico_wrap.line").css({"transition":"", "-webkit-transition":"", "opacity":0});
	$(".f5_1 .ico_wrap.type2").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f5_2 .dot").css({"transition":"", "-webkit-transition":"", "opacity":0});
	$(".f5_2 .click_ico").css({"transition":"", "-webkit-transition":"", "opacity":0});
	$(".f5_2 .txt .title").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f5_2 .txt .desc").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f5_3 .txt .title").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f5_3 .txt .desc").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".f5_3 .txt .btn_wrap a").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".bg_cont .forest img").css({"transition":"", "-webkit-transition":"", "transform":"", "-webkit-transform":"", "opacity":0});
	$(".tile_cont").css({"display":"none"});
	$(".tile_cont_half").css({"display":"none"});
	$(".tile_cont_quad").css({"display":"none"});
	if (!$("body").hasClass("m_vw"))
		endingVideo.pause();

	$(".bg_cont .bg.dot_map img").css({"transform":"", "-webkit-transform":""});
	$(".inter_cont .earth_movie").css({"transition":"","-webkit-transition":"","opacity":0});

	$(".indicator_wrap .scroll_img").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".indicator_wrap .keyboard_img .keyboard_img_txt").css({"transition":"","-webkit-transition":"","opacity":0});

	$(".tile_cont .tile_cont_inner .tile img").attr("src", "images/panel_cell.jpg");
	$(".inter_cont .sky").css({"transition":"","-webkit-transition":"","opacity":0});

	$(".inter_cont .panel_half_sf").css({"transition":"", "-webkit-transition":"", "opacity":0});
	$(".f3_10 .movie_progress").css({"transition":"", "-webkit-transition":"", "opacity":0});
	$(".f4_1 .movie_progress").css({"transition":"", "-webkit-transition":"", "opacity":0});
	
	$(".condition_w").css({"transition":"","-webkit-transition":"","opacity":0});

	if (endingInterval != "")
	{
		clearInterval(endingInterval);
		endingInterval = "";
	}

	$(".indicator_wrap .scroll_img").css({"display":"none"});
	$(".indicator_wrap .keyboard_img .keyboard_img_txt").css({"display":"none"});
	$(".m_scroll_img").css({"display":"none"});

	$(".f3_67_bg .f3_6_bg").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_67_bg .f3_7_bg").css({"transition":"","-webkit-transition":"","opacity":0});
	$(".f3_67_bg").css({"transition":"","-webkit-transition":"","opacity":0});
}

function timeoutClear()
{
	clearTimeout(number00_1);
	clearTimeout(number00_2);
	clearTimeout(number01_1);
	clearTimeout(number01_2);
	clearTimeout(number01_3);
	clearTimeout(number01_4);
	clearTimeout(number01_5);
	clearTimeout(number02_1);
	clearTimeout(number02_2);
	clearTimeout(number02_3);
	clearTimeout(number03_1);
	clearTimeout(number03_2);
	clearInterval(number04_0);
	clearTimeout(number04_1);
	clearTimeout(number05_1);
	clearTimeout(number05_2);
	clearTimeout(number06_1);
	clearTimeout(number07_1);
	clearTimeout(number07_2);
	clearTimeout(number07_3);
	clearTimeout(number07_4);
	clearTimeout(number07_5);
	clearTimeout(number08_1);
	clearTimeout(number08_2);
	clearTimeout(number08_3);
	clearTimeout(number08_4);
	clearTimeout(number08_5);
	clearTimeout(number09_1);
	clearTimeout(number09_2);
	clearTimeout(number09_3);
	clearTimeout(number09_4);
	clearTimeout(number12_1);
	clearTimeout(number12_2);
	clearTimeout(number13_1);
	clearTimeout(number13_2);
	clearTimeout(number14_1);
	clearTimeout(number14_2);
	clearTimeout(number15_1);
	clearTimeout(number15_2);
	clearTimeout(number15_3);
	clearTimeout(number16_1);
	clearTimeout(number16_2);
	clearTimeout(number17_1);
	clearTimeout(number17_2);
	clearTimeout(number17_3);
	clearTimeout(number17_4);
	clearTimeout(number18_1);
	clearTimeout(number18_2);
	clearTimeout(number18_3);
	clearTimeout(number18_4);
	clearTimeout(number19_1);
	clearTimeout(number19_2);
	clearTimeout(number19_3);
	clearTimeout(number19_4);
	clearTimeout(number20_1);
	clearTimeout(number20_2);
	clearTimeout(number20_3);
	clearTimeout(number21_1);
	clearTimeout(number21_2);
	clearTimeout(number21_3);
	clearTimeout(number21_4);
	clearTimeout(number22_1);
	clearTimeout(number22_2);
	clearTimeout(number22_3);
	clearTimeout(number22_4);
	clearTimeout(number23_1);
	clearTimeout(number23_2);
	clearTimeout(number27_1);
	clearTimeout(number28_1);
	clearTimeout(number29_1);
	clearTimeout(number29_2);
	clearTimeout(number29_3);
	clearTimeout(number29_4);
	clearTimeout(number30_1);
	clearTimeout(number30_2);
	clearTimeout(number30_3);
	clearTimeout(number30_4);
}
