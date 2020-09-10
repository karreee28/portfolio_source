function videoSetting()
{
	if ($("body").hasClass("device"))
	{
		/*var interview01 = "<video preload='metadata' poster='' title='' playsinline id='interviewVideo1_m' class='m_video'><source src='video/Others/Interview_Dr.Muller_m.mp4' type='video/mp4'></video>";
		$(".bg_cont .interview2 .vCover").before(interview01);
		
		var interview02 = "<video preload='metadata' poster='' title='' playsinline id='interviewVideo2_m' class='m_video'><source src='video/Others/Hanwha-Interview_Dr.Kusters_m.mp4' type='video/mp4'></video>";
		$(".bg_cont .interview .vCover").before(interview02);

		interview01mLoad_Able = true;
		interview02mLoad_Able = true;*/
	}else{
		console.log("videoSetting");
		var loadingV;
		var labV;
		var endingV;
		var earthIn;
		var earthOut;

		if ($("body").hasClass("InternetExplorer"))
		{
			loadingV = "<video preload='metadata' poster='' title='' playsinline loop id='loadingVideo'><source src='video/IE/loading_mov.mp4' type='video/mp4'></video>";
			labV = "<video preload='metadata' poster='' title='' playsinline id='labVideo'><source src='video/IE/factory_loop.mp4' type='video/mp4'></video>";
			endingV = "<video preload='metadata' poster='' title='' playsinline loop id='endingVideo'><source src='video/IE/ending_loop_t1_1.mp4' type='video/mp4'></video>";
			earthIn = "<video preload='metadata' poster='' title='' playsinline id='earthVideo_In'><source src='video/IE/earth_movie_inter.mp4' type='video/mp4'></video>";
			earthOut = "<video preload='metadata' poster='' title='' playsinline id='earthVideo_Out'><source src='video/IE/earth_movie_reverse.mp4' type='video/mp4'></video>";
		}else{
			loadingV = "<video preload='metadata' poster='' title='' playsinline loop id='loadingVideo'><source src='video/Others/loading_mov.mp4' type='video/mp4'></video>";
			labV = "<video preload='metadata' poster='' title='' playsinline id='labVideo'><source src='video/Others/factory_loop.mp4' type='video/mp4'></video>";
			endingV = "<video preload='metadata' poster='' title='' playsinline loop id='endingVideo'><source src='video/Others/ending_loop_t1_1.mp4' type='video/mp4'></video>";
			earthIn = "<video preload='metadata' poster='' title='' playsinline id='earthVideo_In'><source src='video/Others/earth_movie_inter.mp4' type='video/mp4'></video>";
			earthOut = "<video preload='metadata' poster='' title='' playsinline id='earthVideo_Out'><source src='video/Others/earth_movie_reverse.mp4' type='video/mp4'></video>";			
		}
		
		$(".loading_wrap .loading_mov .vCover").after(loadingV);
		$(".bg_cont .lab .vCover").after(labV);
		$(".bg_cont .forest .vCover").after(endingV);
		$(".inter_cont .movie .earth_movie .earth_in .vCover").after(earthIn);
		$(".inter_cont .movie .earth_movie .earth_out .vCover").after(earthOut);

		
		document.getElementById("loadingVideo").onloadeddata = function(){
			console.log("loadingVideo Load Success");
		};

		document.getElementById("labVideo").onloadeddata = function(){
			console.log("labVideo Load Success");
		};

		document.getElementById("endingVideo").onloadeddata = function(){
			console.log("endingVideo Load Success");
		};

		document.getElementById("earthVideo_In").onloadeddata = function(){
			console.log("earthVideo_In Load Success");
		};

		document.getElementById("earthVideo_Out").onloadeddata = function(){
			console.log("earthVideo_Out Load Success");
		};

		if (!$("body").hasClass("InternetExplorer"))
		{
			if ($("body").hasClass("m_vw") || $(window).outerWidth() < 768)
			{
				var interview01 = "<video preload='metadata' poster='' title='' playsinline id='interviewVideo1_m' class='m_video'><source src='video/Others/Interview_Dr.Muller_m.mp4' type='video/mp4'></video>";
				$(".bg_cont .interview2 .vCover").before(interview01);
				
				var interview02 = "<video preload='metadata' poster='' title='' playsinline id='interviewVideo2_m' class='m_video'><source src='video/Others/Hanwha-Interview_Dr.Kusters_m.mp4' type='video/mp4'></video>";
				$(".bg_cont .interview .vCover").before(interview02);
				setTimeout(loadVideo_m,100);

				interview01mLoad_Able = true;
				interview02mLoad_Able = true;
			}else{
				var interview01 = "<video preload='metadata' poster='' title='' playsinline id='interviewVideo1_w' class='w_video'><source src='video/Others/Interview_Dr.Muller.mp4' type='video/mp4'></video>";
				$(".bg_cont .interview2 .vCover").before(interview01);
				
				var interview02 = "<video preload='metadata' poster='' title='' playsinline id='interviewVideo2_w' class='w_video'><source src='video/Others/Hanwha-Interview_Dr.Kusters.mp4' type='video/mp4'></video>";
				$(".bg_cont .interview .vCover").before(interview02);
				setTimeout(loadVideo_w,100);
		
				interview01wLoad_Able = true;
				interview02wLoad_Able = true;
			}
			
		}else{
			setTimeout(loadVideo_IE,100);
		}
	}

	if (!$("body").hasClass("device"))
	{
		loadBGM();
	}


	
	loadPageSize();
	
	if (!$("body").hasClass("m_vw"))
	{
		tileMotion_Make();
		playIntro();
		//document.getElementById("bgm").autoplay = true;
	}else{
		$(".indicator_wrap .progress_wrap .progress_bar").css({"background":"#fff","width":"0%"});
		setTimeout(function(){
			imageLoader();
		},2000);	
	}
}

var interview01wLoad_Able = false;
var interview01mLoad_Able = false;
var interview02wLoad_Able = false;
var interview02mLoad_Able = false;


var pageBGM = "";
function loadBGM()
{
	pageBGM = document.getElementById("bgm");
	pageBGM.volume = 0.5;
	pageBGM.play();
}

var introVideo = "";
var earthVideo_In = "";
var earthVideo_Out = "";
var interviewVideo01_m = "";
var interviewVideo01_w = "";
var interviewVideo02_m = "";
var interviewVideo02_w = "";
var factoryVideo = "";
var endingVideo = "";
var baseDelta = 1;
function loadVideo_w()
{
	
	introVideo = document.getElementById("loadingVideo");
	earthVideo_In = document.getElementById("earthVideo_In");
	earthVideo_Out = document.getElementById("earthVideo_Out");

	earthVideo_In.onended = function() {
		fullDelta = (baseDelta * 6);
	
		pageIndex = parseInt(fullDelta/baseDelta);
		if(pageIndex != oldPageIndex)
		{
			pageInteraction_Able = false;
			oldPageIndex = pageIndex;
			showPage(pageIndex);
		}
		$(".inter_cont .earth_movie").css({"transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","opacity":0});
	};

	earthVideo_Out.onended = function() {
		$(".inter_cont .earth").css({"transition":"","-webkit-transition":"","opacity":1});

		$(".inter_cont .earth img").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.0) translate(0vh, 0vh)", "-webkit-transform":"scale(1.0) translate(0vh, 0vh)"});


		fullDelta = (baseDelta * 4);
	
		pageIndex = parseInt(fullDelta/baseDelta);
		if(pageIndex != oldPageIndex)
		{
			pageInteraction_Able = false;
			oldPageIndex = pageIndex;

			showPage(pageIndex);
		}
	};
	
	interviewVideo01_w = document.getElementById("interviewVideo1_w");
	interviewVideo02_w = document.getElementById("interviewVideo2_w");

	interviewVideo01_w.onended = function(){
		$(".f3_10 .video_play_btn a").css({"display":"block", "opacity":0}).animate({"opacity":1});
		if ($("body").hasClass("m_vw"))
		{
			fullDelta = (baseDelta * 17);
		}else{
			fullDelta = (baseDelta * 15);
		}
		
	
		pageIndex = parseInt(fullDelta/baseDelta);
		if(pageIndex != oldPageIndex)
		{
			pageInteraction_Able = false;
			oldPageIndex = pageIndex;
			
			showPage(pageIndex);
		}
	};

	interviewVideo02_w.onended = function(){
		$(".f4_1 .video_play_btn a").css({"display":"block", "opacity":0}).animate({"opacity":1});
		
		if ($("body").hasClass("m_vw"))
		{
			fullDelta = (baseDelta * 21);
		}else{
			fullDelta = (baseDelta * 19);
		}
	
		pageIndex = parseInt(fullDelta/baseDelta);
		if(pageIndex != oldPageIndex)
		{
			pageInteraction_Able = false;
			oldPageIndex = pageIndex;
						
			showPage(pageIndex);
		}
	};


	factoryVideo = document.getElementById("labVideo");
	endingVideo = document.getElementById("endingVideo");
	
	factoryVideo.onended = function(){
		factoryVideo.currentTime = 0;
		factoryVideo.play();
	};

	endingVideo.onended = function(){
		endingVideo.currentTime = 0;
		endingVideo.play();
	};

	if ($("body").hasClass("device"))
	{
		introVideo.muted = pageMute;
		earthVideo_In.muted = pageMute;
		earthVideo_Out.muted = pageMute;
		factoryVideo.muted = pageMute;
		endingVideo.muted = pageMute;
		pageBGM.muted = pageMute;
	}




	introVideo.ontimeupdate = function() {
		if (this.currentTime > 0)
		{
			if (!loadingVideo_Able)
			{

				loadingVideo_Able = true;
				$(".loading_wrap .loading_mov .vCover").animate({"opacity":0},function(){
					$(this).css("display","none");
				});
				sunPlear_Able = true;
			}
			
		}
	};

	earthVideo_In.ontimeupdate = function() {
		if (this.currentTime > 0)
		{
			if (!earthVideo_In_Able)
			{
				earthVideo_In_Able = true;
				if($(".inter_cont .inter.movie").css("opacity") == 0)
					$(".inter_cont .inter.movie").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});	
				
				$(".inter_cont .movie .earth_movie .earth_in .vCover").animate({opacity:0},300,function(){
					$(this).css("display","none");
				});

				$(".inter_cont .inter.earth").css({"transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","opacity":0});
				
			}
		}
	};
	
	earthVideo_Out.ontimeupdate = function() {
		if (this.currentTime > 0)
		{
			if (!earthVideo_Out_Able)
			{
				
				earthVideo_Out_Able = true;
				if($(".inter_cont .inter.movie").css("opacity") == 0)
					$(".inter_cont .inter.movie").css({"transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","opacity":1});
				
				$(".inter_cont .movie .earth_movie .earth_out .vCover").parent().find(".vCover").animate({opacity:0},300,function(){
					$(this).css("display","none");
				});

				$(".inter_cont .inter.earth").css("opacity",1);
			}
		}
	};
	
	interviewVideo01_w.ontimeupdate = function() {
		var timeMin = parseInt(this.currentTime / 60);
		var timeSec = parseInt(this.currentTime % 60);

		if (timeMin < 10)
		{
			timeMin = "0" + timeMin;
		}

		if (timeSec < 10)
		{
			timeSec = "0" + timeSec;
		}
		$(".f3_10 .movie_progress .progress_time").html(timeMin + ":" + timeSec);
		
		var lineHeight = $(".feature .movie_progress .bg_line").outerHeight();
		var moveTime = (this.currentTime / this.duration) * lineHeight;
		$(".f3_10 .movie_progress .progress_ico").css({"transform":"translate(0px, " + moveTime + "px)"});

		interview01_currentTime(this.currentTime);
	};

	interviewVideo02_w.ontimeupdate = function() {
		var timeMin = parseInt(this.currentTime / 60);
		var timeSec = parseInt(this.currentTime % 60);

		if (timeMin < 10)
		{
			timeMin = "0" + timeMin;
		}

		if (timeSec < 10)
		{
			timeSec = "0" + timeSec;
		}
		$(".f4_1 .movie_progress .progress_time").html(timeMin + ":" + timeSec);

		var lineHeight = $(".feature .movie_progress .bg_line").outerHeight();
		var moveTime = (this.currentTime / this.duration) * lineHeight;
		$(".f4_1 .movie_progress .progress_ico").css({"transform":"translate(0px, " + moveTime + "px)", "-webkit-transform":"translate(0px, " + moveTime + "px)"});

		interview02_currentTime(this.currentTime);
	};
	
}

function loadVideo_m()
{
	pageBGM = document.getElementById("bgm");
	pageBGM.volume = 0.5;
	introVideo = document.getElementById("loadingVideo");
	earthVideo_In = document.getElementById("earthVideo_In");
	earthVideo_Out = document.getElementById("earthVideo_Out");

	earthVideo_In.onended = function() {
		fullDelta = (baseDelta * 6);
	
		pageIndex = parseInt(fullDelta/baseDelta);
		if(pageIndex != oldPageIndex)
		{
			pageInteraction_Able = false;
			oldPageIndex = pageIndex;
			if ($("body").hasClass("m_vw"))
				mShowPage(pageIndex);
			else
				showPage(pageIndex);
		}
		$(".inter_cont .earth_movie").css({"transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","opacity":0});
	};

	earthVideo_Out.onended = function() {
		$(".inter_cont .earth").css({"transition":"","-webkit-transition":"","opacity":1});

		$(".inter_cont .earth img").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.0) translate(0vh, 0vh)", "-webkit-transform":"scale(1.0) translate(0vh, 0vh)"});


		fullDelta = (baseDelta * 4);
	
		pageIndex = parseInt(fullDelta/baseDelta);
		if(pageIndex != oldPageIndex)
		{
			pageInteraction_Able = false;
			oldPageIndex = pageIndex;
			
			if ($("body").hasClass("m_vw"))
				mShowPage(pageIndex);
			else
				showPage(pageIndex);
		}
	};
	
	interviewVideo01_m = document.getElementById("interviewVideo1_m");
	interviewVideo02_m = document.getElementById("interviewVideo2_m");

	
	interviewVideo01_m.onended = function(){
		$(".f3_10 .video_play_btn a").css({"display":"block", "opacity":0}).animate({"opacity":1});
		fullDelta = (baseDelta * 19);
	
		pageIndex = parseInt(fullDelta/baseDelta);
		if(pageIndex != oldPageIndex)
		{
			pageInteraction_Able = false;
			oldPageIndex = pageIndex;
			if ($("body").hasClass("m_vw"))
				mShowPage(pageIndex);
			else
				showPage(pageIndex);
		}
	};

	interviewVideo02_m.onended = function(){
		$(".f4_1 .video_play_btn a").css({"display":"block", "opacity":0}).animate({"opacity":1});

		fullDelta = (baseDelta * 23);
	
		pageIndex = parseInt(fullDelta/baseDelta);
		if(pageIndex != oldPageIndex)
		{
			pageInteraction_Able = false;
			oldPageIndex = pageIndex;
			if ($("body").hasClass("m_vw"))
				mShowPage(pageIndex);
			else
				showPage(pageIndex);
		}
	};

	factoryVideo = document.getElementById("labVideo");
	endingVideo = document.getElementById("endingVideo");
	
	factoryVideo.onended = function(){
		factoryVideo.currentTime = 0;
		factoryVideo.play();
	};

	endingVideo.onended = function(){
		endingVideo.currentTime = 0;
		endingVideo.play();
	};

	if ($("body").hasClass("device"))
	{
		introVideo.muted = pageMute;
		earthVideo_In.muted = pageMute;
		earthVideo_Out.muted = pageMute;
		factoryVideo.muted = pageMute;
		endingVideo.muted = pageMute;
		pageBGM.muted = pageMute;
	}




	introVideo.ontimeupdate = function() {
		if (this.currentTime > 0)
		{
			if (!loadingVideo_Able)
			{

				loadingVideo_Able = true;
				$(".loading_wrap .loading_mov .vCover").animate({"opacity":0},function(){
					$(this).css("display","none");
				});
				sunPlear_Able = true;
			}
			
		}
	};

	earthVideo_In.ontimeupdate = function() {
		if (this.currentTime > 0)
		{
			if (!earthVideo_In_Able)
			{
				earthVideo_In_Able = true;
				if($(".inter_cont .inter.movie").css("opacity") == 0)
					$(".inter_cont .inter.movie").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});	
				
				$(".inter_cont .movie .earth_movie .earth_in .vCover").animate({opacity:0},300,function(){
					$(this).css("display","none");
				});

				$(".inter_cont .inter.earth").css({"transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","opacity":0});
				
			}
		}
	};
	
	earthVideo_Out.ontimeupdate = function() {
		if (this.currentTime > 0)
		{
			if (!earthVideo_Out_Able)
			{
				
				earthVideo_Out_Able = true;
				if($(".inter_cont .inter.movie").css("opacity") == 0)
					$(".inter_cont .inter.movie").css({"transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","opacity":1});
				
				$(".inter_cont .movie .earth_movie .earth_out .vCover").parent().find(".vCover").animate({opacity:0},300,function(){
					$(this).css("display","none");
				});

				$(".inter_cont .inter.earth").css("opacity",1);
			}
		}
	};
	
	
	interviewVideo01_m.ontimeupdate = function() {
		var timeMin = parseInt(this.currentTime / 60);
		var timeSec = parseInt(this.currentTime % 60);

		if (timeMin < 10)
		{
			timeMin = "0" + timeMin;
		}

		if (timeSec < 10)
		{
			timeSec = "0" + timeSec;
		}
		$(".f3_10 .movie_progress .progress_time").html(timeMin + ":" + timeSec);
		
		var lineHeight = $(".feature .movie_progress .bg_line").outerHeight();
		var moveTime = (this.currentTime / this.duration) * lineHeight;
		$(".f3_10 .movie_progress .progress_ico").css({"transform":"translate(0px, " + moveTime + "px)"});

		interview01_currentTime(this.currentTime);
	};

	
	interviewVideo02_m.ontimeupdate = function() {
	
		var timeMin = parseInt(this.currentTime / 60);
		var timeSec = parseInt(this.currentTime % 60);

		if (timeMin < 10)
		{
			timeMin = "0" + timeMin;
		}

		if (timeSec < 10)
		{
			timeSec = "0" + timeSec;
		}
		$(".f4_1 .movie_progress .progress_time").html(timeMin + ":" + timeSec);

		var lineHeight = $(".feature .movie_progress .bg_line").outerHeight();
		var moveTime = (this.currentTime / this.duration) * lineHeight;
		$(".f4_1 .movie_progress .progress_ico").css({"transform":"translate(0px, " + moveTime + "px)", "-webkit-transform":"translate(0px, " + moveTime + "px)"});

		interview02_currentTime(this.currentTime);
	};
}


function loadVideo_Device()
{
	interviewVideo01_m = document.getElementById("interviewVideo1_m");
	interviewVideo02_m = document.getElementById("interviewVideo2_m");

	interviewVideo01_m.onended = function(){
		$(".f3_10 .video_play_btn a").css({"display":"block", "opacity":0}).animate({"opacity":1});
		fullDelta = (baseDelta * 19);
	
		pageIndex = parseInt(fullDelta/baseDelta);
		if(pageIndex != oldPageIndex)
		{
			pageInteraction_Able = false;
			oldPageIndex = pageIndex;
			
			if ($("body").hasClass("m_vw"))
				mShowPage(pageIndex);
			else
				showPage(pageIndex);
		}
	};

	interviewVideo02_m.onended = function(){
		$(".f4_1 .video_play_btn a").css({"display":"block", "opacity":0}).animate({"opacity":1});

		fullDelta = (baseDelta * 23);
	
		pageIndex = parseInt(fullDelta/baseDelta);
		if(pageIndex != oldPageIndex)
		{
			pageInteraction_Able = false;
			oldPageIndex = pageIndex;
						
			if ($("body").hasClass("m_vw"))
				mShowPage(pageIndex);
			else
				showPage(pageIndex);
		}
	};


	interviewVideo01_m.ontimeupdate = function() {
		var timeMin = parseInt(this.currentTime / 60);
		var timeSec = parseInt(this.currentTime % 60);

		if (timeMin < 10)
		{
			timeMin = "0" + timeMin;
		}

		if (timeSec < 10)
		{
			timeSec = "0" + timeSec;
		}
		$(".f3_10 .movie_progress .progress_time").html(timeMin + ":" + timeSec);
		
		var lineHeight = $(".feature .movie_progress .bg_line").outerHeight();
		var moveTime = (this.currentTime / this.duration) * lineHeight;
		$(".f3_10 .movie_progress .progress_ico").css({"transform":"translate(0px, " + moveTime + "px)"});

		interview01_currentTime(this.currentTime);
	};
	
	interviewVideo02_m.ontimeupdate = function() {
		var timeMin = parseInt(this.currentTime / 60);
		var timeSec = parseInt(this.currentTime % 60);

		if (timeMin < 10)
		{
			timeMin = "0" + timeMin;
		}

		if (timeSec < 10)
		{
			timeSec = "0" + timeSec;
		}
		$(".f4_1 .movie_progress .progress_time").html(timeMin + ":" + timeSec);

		var lineHeight = $(".feature .movie_progress .bg_line").outerHeight();
		var moveTime = (this.currentTime / this.duration) * lineHeight;
		$(".f4_1 .movie_progress .progress_ico").css({"transform":"translate(0px, " + moveTime + "px)", "-webkit-transform":"translate(0px, " + moveTime + "px)"});

		interview02_currentTime(this.currentTime);
	};
}



function loadVideo_IE()
{
	pageBGM = document.getElementById("bgm");
	pageBGM.volume = 0.5;
	introVideo = document.getElementById("loadingVideo");
	earthVideo_In = document.getElementById("earthVideo_In");
	earthVideo_Out = document.getElementById("earthVideo_Out");

	earthVideo_In.onended = function() {
		fullDelta = (baseDelta * 6);
	
		pageIndex = parseInt(fullDelta/baseDelta);
		if(pageIndex != oldPageIndex)
		{
			pageInteraction_Able = false;
			oldPageIndex = pageIndex;
			if ($("body").hasClass("m_vw"))
				mShowPage(pageIndex);
			else
				showPage(pageIndex);
		}
		$(".inter_cont .earth_movie").css({"transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","opacity":0});
	};

	earthVideo_Out.onended = function() {
		$(".inter_cont .earth").css({"transition":"","-webkit-transition":"","opacity":1});

		$(".inter_cont .earth img").css({"transition":"", "-webkit-transition":"", "transform":"scale(1.0) translate(0vh, 0vh)", "-webkit-transform":"scale(1.0) translate(0vh, 0vh)"});


		fullDelta = (baseDelta * 4);
	
		pageIndex = parseInt(fullDelta/baseDelta);
		if(pageIndex != oldPageIndex)
		{
			pageInteraction_Able = false;
			oldPageIndex = pageIndex;
			
			if ($("body").hasClass("m_vw"))
				mShowPage(pageIndex);
			else
				showPage(pageIndex);
		}
	};
	
	factoryVideo = document.getElementById("labVideo");
	endingVideo = document.getElementById("endingVideo");
	
	factoryVideo.onended = function(){
		factoryVideo.currentTime = 0;
		factoryVideo.play();
	};

	endingVideo.onended = function(){
		endingVideo.currentTime = 0;
		endingVideo.play();
	};

	if ($("body").hasClass("device"))
	{
		introVideo.muted = pageMute;
		earthVideo_In.muted = pageMute;
		earthVideo_Out.muted = pageMute;
		factoryVideo.muted = pageMute;
		endingVideo.muted = pageMute;
		pageBGM.muted = pageMute;
	}


	introVideo.ontimeupdate = function() {
		if (this.currentTime > 0)
		{
			if (!loadingVideo_Able)
			{

				loadingVideo_Able = true;
				$(".loading_wrap .loading_mov .vCover").animate({"opacity":0},function(){
					$(this).css("display","none");
				});
				sunPlear_Able = true;
			}
			
		}
	};

	earthVideo_In.ontimeupdate = function() {
		if (this.currentTime > 0)
		{
			if (!earthVideo_In_Able)
			{
				earthVideo_In_Able = true;
				if($(".inter_cont .inter.movie").css("opacity") == 0)
					$(".inter_cont .inter.movie").css({"transition":"all 0.5s","-webkit-transition":"all 0.5s","opacity":1});	
				
				$(".inter_cont .movie .earth_movie .earth_in .vCover").animate({opacity:0},300,function(){
					$(this).css("display","none");
				});

				$(".inter_cont .inter.earth").css({"transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","opacity":0});
				
			}
		}
	};
	
	earthVideo_Out.ontimeupdate = function() {
		if (this.currentTime > 0)
		{
			if (!earthVideo_Out_Able)
			{
				
				earthVideo_Out_Able = true;
				if($(".inter_cont .inter.movie").css("opacity") == 0)
					$(".inter_cont .inter.movie").css({"transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","opacity":1});
				
				$(".inter_cont .movie .earth_movie .earth_out .vCover").parent().find(".vCover").animate({opacity:0},300,function(){
					$(this).css("display","none");
				});

				$(".inter_cont .inter.earth").css("opacity",1);
			}
		}
	};
}

function interview01Load()
{
	if (!$("body").hasClass("m_vw"))
	{
		if (!interview01wLoad_Able)
		{
			interview01wLoad_Able = true;

			var interview01;
			if ($("body").hasClass("InternetExplorer"))
			{
				interview01 = "<video preload='metadata' poster='' title='' playsinline id='interviewVideo1_w' class='w_video'><source src='video/IE/Interview_Dr.Muller.mp4' type='video/mp4'></video>";
			}else{
				interview01 = "<video preload='metadata' poster='' title='' playsinline id='interviewVideo1_w' class='w_video'><source src='video/Others/Interview_Dr.Muller.mp4' type='video/mp4'></video>";
			}

			$(".bg_cont .interview2 .vCover").before(interview01);
			pageSize();
			interviewVideo01_w = document.getElementById("interviewVideo1_w");
			interviewVideo01_w.onloadeddata = function(){
				interviewVideo01_w.onended = function(){
					$(".f3_10 .video_play_btn a").css({"display":"block", "opacity":0}).animate({"opacity":1});
					fullDelta = (baseDelta * 15);
				
					pageIndex = parseInt(fullDelta/baseDelta);
					if(pageIndex != oldPageIndex)
					{
						pageInteraction_Able = false;
						oldPageIndex = pageIndex;
						
						showPage(pageIndex);
					}
				};

				interviewVideo01_w.ontimeupdate = function() {
					var timeMin = parseInt(this.currentTime / 60);
					var timeSec = parseInt(this.currentTime % 60);

					if (timeMin < 10)
					{
						timeMin = "0" + timeMin;
					}

					if (timeSec < 10)
					{
						timeSec = "0" + timeSec;
					}
					$(".f3_10 .movie_progress .progress_time").html(timeMin + ":" + timeSec);
					
					var lineHeight = $(".feature .movie_progress .bg_line").outerHeight();
					var moveTime = (this.currentTime / this.duration) * lineHeight;
					$(".f3_10 .movie_progress .progress_ico").css({"transform":"translate(0px, " + moveTime + "px)"});

					interview01_currentTime(this.currentTime);
				};

				if(interviewVideo01_w.currentTime != 0)
					interviewVideo01_w.currentTime = 0;

				audioSound("min");

				if(interviewVideo01_w.paused){
					interviewVideo01_w.play();
					$(".f3_10 .movie_progress .control_btn").addClass("pause");
					$(".f3_10 .movie_progress .control_btn").removeClass("play");
					interviewViedo01_Able = true;
				}
			}
		}else{
			interview01wLoad_Able = true;

			if(interviewVideo01_w.currentTime != 0)
				interviewVideo01_w.currentTime = 0;

			audioSound("min");

			if(interviewVideo01_w.paused){
				interviewVideo01_w.play();
				$(".f3_10 .movie_progress .control_btn").addClass("pause");
				$(".f3_10 .movie_progress .control_btn").removeClass("play");
				interviewViedo01_Able = true;
			}
		}
	}else{
		if (!interview01mLoad_Able)
		{
			interview01mLoad_Able = true;

			var interview01;
			if ($("body").hasClass("InternetExplorer"))
			{
				interview01 = "<video preload='metadata' poster='' title='' playsinline id='interviewVideo1_m' class='m_video'><source src='video/IE/Interview_Dr.Muller_m.mp4' type='video/mp4'></video>";
			}else{
				interview01 = "<video preload='metadata' poster='' title='' playsinline id='interviewVideo1_m' class='m_video'><source src='video/Others/Interview_Dr.Muller_m.mp4' type='video/mp4'></video>";
			}

			$(".bg_cont .interview2 .vCover").after(interview01);

			interviewVideo01_m = document.getElementById("interviewVideo1_m");
			interviewVideo01_m.load();
			interviewVideo01_m.onloadeddata = function(){
				interviewVideo01_m.onended = function(){
					$(".f3_10 .video_play_btn a").css({"display":"block", "opacity":0}).animate({"opacity":1});
					fullDelta = (baseDelta * 17);
				
					pageIndex = parseInt(fullDelta/baseDelta);
					if(pageIndex != oldPageIndex)
					{
						pageInteraction_Able = false;
						oldPageIndex = pageIndex;
						
						mShowPage(pageIndex);
					}
				};

				interviewVideo01_m.ontimeupdate = function() {
					var timeMin = parseInt(this.currentTime / 60);
					var timeSec = parseInt(this.currentTime % 60);

					if (timeMin < 10)
					{
						timeMin = "0" + timeMin;
					}

					if (timeSec < 10)
					{
						timeSec = "0" + timeSec;
					}
					$(".f3_10 .movie_progress .progress_time").html(timeMin + ":" + timeSec);
					var lineHeight = $(".feature .movie_progress .bg_line").outerHeight();
					var moveTime = (this.currentTime / this.duration) * lineHeight;
					$(".f3_10 .movie_progress .progress_ico").css({"transform":"translate(0px, " + moveTime + "px)"});

					interview01_currentTime(this.currentTime);
				};

				if(interviewVideo01_m.currentTime != 0)
					interviewVideo01_m.currentTime = 0;

				if(interviewVideo01_m.paused){
					interviewVideo01_m.play();
					$(".f3_10 .movie_progress .control_btn").addClass("pause");
					$(".f3_10 .movie_progress .control_btn").removeClass("play");
					interviewViedo01_Able = true;

					if ($("#interviewVideo1_m").css("display") == "none")
					{
						$("#interviewVideo1_m").css("display", "block");
					}
				}
			}

			if ($("body").hasClass("device"))
			{
				if (($(window).outerHeight()  / 3 * 2) < $(window).outerWidth())
				{
					interViewSize = $(window).outerWidth();
					interViewMargin = (($(window).outerHeight()  / 3 * 2) - $(window).outerWidth())/2;

					$(".m_vw .bg_cont .interview2 video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				}else{
					interViewSize = $(window).outerHeight()  / 3 * 2;
					interViewMargin = -(interViewSize/2);
					$(".m_vw .bg_cont .interview2 video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left":interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				}
			}else{
				var wrapWidth = $(".wrap").outerWidth();
				var wrapHeight = $(".wrap").outerHeight();
				if ((wrapHeight / 2) < wrapWidth)
				{
					interViewSize = wrapWidth;
					interViewMargin = 0;
					$(".m_vw .bg_cont .interview2 video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				}else{
					interViewSize = wrapHeight / 2;
					interViewMargin = -(interViewSize/2);
					$(".m_vw .bg_cont .interview2 video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left":interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				}
			}
		}else{
			interview01mLoad_Able = true;

			if(interviewVideo01_m.currentTime != 0)
				interviewVideo01_m.currentTime = 0;

			if(interviewVideo01_m.paused){
				interviewVideo01_m.play();
				$(".f3_10 .movie_progress .control_btn").addClass("pause");
				$(".f3_10 .movie_progress .control_btn").removeClass("play");
				interviewViedo01_Able = true;

				if ($("#interviewVideo1_m").css("display") == "none")
				{
					$("#interviewVideo1_m").css("display", "block");
				}
			}
		}
	}
}

function interview02Load()
{
	if (!$("body").hasClass("m_vw"))
	{
		
		if (!interview02wLoad_Able)
		{
			interview02wLoad_Able = true;

			var interview02;
			if ($("body").hasClass("InternetExplorer"))
			{
				interview02 = "<video preload='metadata' poster='' title='' playsinline id='interviewVideo2_w' class='w_video'><source src='video/IE/Hanwha-Interview_Dr.Kusters.mp4' type='video/mp4'></video>";
			}else{
				interview02 = "<video preload='metadata' poster='' title='' playsinline id='interviewVideo2_w' class='w_video'><source src='video/Others/Hanwha-Interview_Dr.Kusters.mp4' type='video/mp4'></video>";
			}
			$(".bg_cont .interview .vCover").before(interview02);
			pageSize();
			interviewVideo02_w = document.getElementById("interviewVideo2_w");
			interviewVideo02_w.onloadeddata = function(){
				interviewVideo02_w.onended = function(){
					$(".f4_1 .video_play_btn a").css({"display":"block", "opacity":0}).animate({"opacity":1});

					fullDelta = (baseDelta * 19);
				
					pageIndex = parseInt(fullDelta/baseDelta);
					if(pageIndex != oldPageIndex)
					{
						pageInteraction_Able = false;
						oldPageIndex = pageIndex;
									
						if ($("body").hasClass("m_vw"))
							mShowPage(pageIndex);
						else
							showPage(pageIndex);
					}
				};

				interviewVideo02_w.ontimeupdate = function() {
					var timeMin = parseInt(this.currentTime / 60);
					var timeSec = parseInt(this.currentTime % 60);

					if (timeMin < 10)
					{
						timeMin = "0" + timeMin;
					}

					if (timeSec < 10)
					{
						timeSec = "0" + timeSec;
					}
					$(".f4_1 .movie_progress .progress_time").html(timeMin + ":" + timeSec);

					var lineHeight = $(".feature .movie_progress .bg_line").outerHeight();
					var moveTime = (this.currentTime / this.duration) * lineHeight;
					$(".f4_1 .movie_progress .progress_ico").css({"transform":"translate(0px, " + moveTime + "px)", "-webkit-transform":"translate(0px, " + moveTime + "px)"});

					interview02_currentTime(this.currentTime);
				};
				
				if(interviewVideo02_w.currentTime != 0)
					interviewVideo02_w.currentTime = 0;
				
				audioSound("min");

				if(interviewVideo02_w.paused){
					console.log("interviewVideo02_w Play");

					interviewVideo02_w.play();
					$(".f4_1 .movie_progress .control_btn").addClass("pause");
					$(".f4_1 .movie_progress .control_btn").removeClass("play");
					interviewViedo02_Able = true;
				}
			};
		}else{
			interview02wLoad_Able = true;

			if(interviewVideo02_w.currentTime != 0)
				interviewVideo02_w.currentTime = 0;
			
			audioSound("min");

			if(interviewVideo02_w.paused){
				interviewVideo02_w.play();
				$(".f4_1 .movie_progress .control_btn").addClass("pause");
				$(".f4_1 .movie_progress .control_btn").removeClass("play");
				interviewViedo02_Able = true;
			}
		}
	}else{
		if (!interview02mLoad_Able)
		{
			interview02mLoad_Able = true;

			var interview02;
			if ($("body").hasClass("InternetExplorer"))
			{
				interview02 = "<video preload='metadata' poster='' title='' playsinline id='interviewVideo2_m' class='m_video'><source src='video/IE/Hanwha-Interview_Dr.Kusters_m.mp4' type='video/mp4'></video>";
			}else{
				interview02 = "<video preload='metadata' poster='' title='' playsinline id='interviewVideo2_m' class='m_video'><source src='video/Others/Hanwha-Interview_Dr.Kusters_m.mp4' type='video/mp4'></video>";
			}
			$(".bg_cont .interview .vCover").after(interview02);


			interviewVideo02_m = document.getElementById("interviewVideo2_m");
			interviewVideo02_m.load();
			interviewVideo02_m.onloadeddata = function(){
				interviewVideo02_m.onended = function(){
					$(".f4_1 .video_play_btn a").css({"display":"block", "opacity":0}).animate({"opacity":1});

					fullDelta = (baseDelta * 21);
				
					pageIndex = parseInt(fullDelta/baseDelta);
					if(pageIndex != oldPageIndex)
					{
						pageInteraction_Able = false;
						oldPageIndex = pageIndex;
									
						if ($("body").hasClass("m_vw"))
							mShowPage(pageIndex);
						else
							showPage(pageIndex);
					}
				};

				interviewVideo02_m.ontimeupdate = function() {
					var timeMin = parseInt(this.currentTime / 60);
					var timeSec = parseInt(this.currentTime % 60);

					if (timeMin < 10)
					{
						timeMin = "0" + timeMin;
					}

					if (timeSec < 10)
					{
						timeSec = "0" + timeSec;
					}
					$(".f4_1 .movie_progress .progress_time").html(timeMin + ":" + timeSec);
					var lineHeight = $(".feature .movie_progress .bg_line").outerHeight();
					console.log("lineHeight : " + lineHeight);
					var moveTime = (this.currentTime / this.duration) * lineHeight;
					$(".f4_1 .movie_progress .progress_ico").css({"transform":"translate(0px, " + moveTime + "px)", "-webkit-transform":"translate(0px, " + moveTime + "px)"});

					interview02_currentTime(this.currentTime);
				};
				
				if(interviewVideo02_m.currentTime != 0)
					interviewVideo02_m.currentTime = 0;

				if(interviewVideo02_m.paused){
					interviewVideo02_m.play();
					$(".f4_1 .movie_progress .control_btn").addClass("pause");
					$(".f4_1 .movie_progress .control_btn").removeClass("play");
					interviewViedo02_Able = true;
					
					if ($("#interviewVideo2_m").css("display") == "none")
					{
						$("#interviewVideo2_m").css("display", "block");
					}
				}
			}

			if ($("body").hasClass("device"))
			{
				if (($(window).outerHeight()  / 3 * 2) < $(window).outerWidth())
				{
					interViewSize = $(window).outerWidth();
					interViewMargin = (($(window).outerHeight()  / 3 * 2) - $(window).outerWidth())/2;

					$(".m_vw .bg_cont .interview video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				}else{
					interViewSize = $(window).outerHeight()  / 3 * 2;
					interViewMargin = -(interViewSize/2);
					$(".m_vw .bg_cont .interview video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				}
			}else{
				var wrapWidth = $(".wrap").outerWidth();
				var wrapHeight = $(".wrap").outerHeight();
				if ((wrapHeight / 2) < wrapWidth)
				{
					interViewSize = wrapWidth;
					interViewMargin = 0;
					$(".m_vw .bg_cont .interview video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				}else{
					interViewSize = wrapHeight / 2;
					interViewMargin = -(interViewSize/2);
					$(".m_vw .bg_cont .interview video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				}
			}
		}else{
			interview02mLoad_Able = true;

			if(interviewVideo02_m.currentTime != 0)
				interviewVideo02_m.currentTime = 0;

			if(interviewVideo02_m.paused){
				interviewVideo02_m.play();
				$(".f4_1 .movie_progress .control_btn").addClass("pause");
				$(".f4_1 .movie_progress .control_btn").removeClass("play");
				interviewViedo02_Able = true;
				
				if ($("#interviewVideo2_m").css("display") == "none")
				{
					$("#interviewVideo2_m").css("display", "block");
				}
			}
		}
	}
}



function interview01_currentTime(t)
{
	if (t > 0)
	{
		if(!interview01Play)
		{
			interview01Play = true;
			if($(".bg_cont .interview2 .vCover").css("display") == "block")
			{
				$(".bg_cont .interview2 .vCover").animate({opacity:0},300,function(){
					$(this).css("display","none");
				});
			}
		}
	}else{
		interview01Play = false;
		if($(".bg_cont .interview2 .vCover").css("display") == "none")
		{
			$(".bg_cont .interview2 .vCover").css({"display":"block","opacity":1});
		}
	}

	video01Title(t);
	video01Caption(t);
	video01Info(t);
}

function interview02_currentTime(t)
{
	if (t > 0)
	{
		if (!interview02Play)
		{
			interview02Play = true;
			if($(".bg_cont .interview .vCover").css("display") == "block")
			{
				$(".bg_cont .interview .vCover").animate({opacity:0},300,function(){
					$(this).css("display","none");
				});
			}
		}			
	}else{
		interview02Play = false;
		if($(".bg_cont .interview .vCover").css("display") == "none")
		{
			$(".bg_cont .interview .vCover").css({"display":"block","opacity":1});
		}
	}

	video02Title(t);
	video02Caption(t);
	video02Info(t);
}

function playIntro()
{
	$(".loading_wrap .loading_mov").find("video").each(function(){
		this.load();

		if(this.paused){
			this.play();
		}
	});
}
var earthType = "in";

function playEarth(t)
{
	earthType = t;
	console.log("playEarth " + t);
	if (earthType == "in")
	{
		
		$(".inter_cont .earth_movie .earth_in").css({"display":"block", "opacity":1});
		$(".inter_cont .earth_movie .earth_out").css({"display":"none"});
		
		$(".inter_cont .earth_movie .earth_in").find("video").each(function(){
			if(this.currentTime != 0)
				this.currentTime = 0;

			earthVideo_In_Able = false;
			if(this.paused){
				this.play();
			}
		});
		
	}else {
		
		$(".inter_cont .earth_movie .earth_in").css({"display":"none"});
		$(".inter_cont .earth_movie .earth_out").css({"display":"block", "opacity":1});
		
		$(".inter_cont .earth_movie .earth_out").find("video").each(function(){
			if(this.currentTime != 0)
				this.currentTime = 0;
			
			earthVideo_Out_Able = false;
			
			if(this.paused){
				this.play();
				setTimeout(function(){
					$(".inter_cont .earth").css({"transition":"","-webkit-transition":"","opacity":1});

					$(".feature_cont").css({"transition":"margin-top 0.1s","-webkit-transition":"margin-top 0.1s","margin-top":-(windowHeight*4) + "px"});
					$(".bg_cont").css({"margin-top":"0vh"});

					for (var i = 0;i < $(".bg_cont .bg").length ; i++)
					{
						if(i <= 1)
							$(".bg_cont .bg").eq(i).css("opacity",1);	
						else
							$(".bg_cont .bg").eq(i).css("opacity",0);	
					}
				},200);
			}
		});
	}

	
}

var loadingVideo_Able = false;
var interview01Play = false;
var interview01Question = false;
var interview02Play = false;
var interview02Question = false;

