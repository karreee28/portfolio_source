$(window)
	.load(onLoad)
	.resize(onResize)
	.scroll(onScroll);

var windowWidth = 0;
var windowHeight = 0;
function onLoad()
{
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	if(viewportWidth() < 1440)
	{
		var reBottom = 0;
		if(f04Tab == 1)
			reBottom = ($(".f04 .btn_wrap .pd").height()/2)-($(".f04 .btn .camera img").outerHeight()/2)-($(".f04 .btn_wrap .pd").height() * 0.006527) - 1;
		else
			reBottom = ($(".f04 .btn_wrap .pd").height()/2)-($(".f04 .btn .sensor img").outerHeight()/2)-($(".f04 .btn_wrap .pd").height() * 0.006527) - 1;

		$(".f04 .btn > div a").css({"bottom":"0px","margin-bottom":reBottom + "px"});
	}else{
		$(".f04 .btn > div a").css({"bottom":"50%","margin-bottom":"-151px"});
	}
	
	videoReSize();
	
	if(check_androidDevice() != '')
	{
		$(".f08 .video_wrap .video").css({"width":windowWidth + "px","height":(windowWidth * 0.9086) + "px"});
	}
}

var reSizeInterval = "";
var oldWindowWidth = 0;
function onResize()
{
	pageReSizing = true;
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	if(reSizeInterval == "")
	{
		reSizeInterval = setInterval(function(){
			//console.log("oldWindowWidth : " + oldWindowWidth + ", windowWidth : " + windowWidth);
			if(oldWindowWidth == windowWidth)
			{
				//console.log("*************************************************");
				pageReSizing = false;
				clearInterval(reSizeInterval);
				reSizeInterval = "";
			}
			oldWindowWidth = windowWidth;
		},1000);
	}

	if($(".popup_gallery .gallery_slider").css("display") == "block")
	{
		
		if(galleryIndex == 0)
		{
			$(".popup_gallery .gallery_slider .control .prev_btn").css({"display":"none"});
			$(".popup_gallery .gallery_slider .control .next_btn").css({"display":"block"});
		}
		else if(galleryIndex == 3)
		{
			$(".popup_gallery .gallery_slider .control .prev_btn").css({"display":"block"});
			$(".popup_gallery .gallery_slider .control .next_btn").css({"display":"none"});
		}
		else
		{
			$(".popup_gallery .gallery_slider .control .prev_btn").css({"display":"block"});
			$(".popup_gallery .gallery_slider .control .next_btn").css({"display":"block"});
		}

		
		for (var i = 0;i < 4 ;i++ )
		{
			if(galleryIndex < i)
				$(".popup_gallery .gallery_slider ul li").eq(i).css("left", $(".popup_gallery .gallery_slider ul li").width() + "px");
			else if (galleryIndex > i)
				$(".popup_gallery .gallery_slider ul li").eq(i).css("left", -$(".popup_gallery .gallery_slider ul li").width() + "px");
			else
				$(".popup_gallery .gallery_slider ul li").eq(i).css("left", "0px");
		}
	}

	if(viewportWidth() < 1440)
	{
		if(check_allDevice() == '')
		{
			var reBottom = 0;
			if(f04Tab == 1)
				reBottom = ($(".f04 .btn_wrap .pd").height()/2)-($(".f04 .btn .camera img").outerHeight()/2)-($(".f04 .btn_wrap .pd").height() * 0.006527) - 1;
			else
				reBottom = ($(".f04 .btn_wrap .pd").height()/2)-($(".f04 .btn .sensor img").outerHeight()/2)-($(".f04 .btn_wrap .pd").height() * 0.006527) - 1;
			$(".f04 .btn > div a").css({"bottom":"0px","margin-bottom":reBottom + "px"});
		}
	}else{
		$(".f04 .btn > div a").css({"bottom":"50%","margin-bottom":"-151px"});
	}
	setTimeout(function(){
		if(viewportWidth() < 1440)
		{
			if(check_allDevice() == '')
			{
				var reBottom = 0;
				if(f04Tab == 1)
					reBottom = ($(".f04 .btn_wrap .pd").height()/2)-($(".f04 .btn .camera img").outerHeight()/2)-($(".f04 .btn_wrap .pd").height() * 0.006527) - 1;
				else
					reBottom = ($(".f04 .btn_wrap .pd").height()/2)-($(".f04 .btn .sensor img").outerHeight()/2)-($(".f04 .btn_wrap .pd").height() * 0.006527) - 1;
				$(".f04 .btn > div a").css({"bottom":"0px","margin-bottom":reBottom + "px"});
			}
		}else{
			$(".f04 .btn > div a").css({"bottom":"50%","margin-bottom":"-151px"});
		}
	},100);

	videoReSize();
	setTimeout(function(){
		videoReSize();
	},200);
	

	if($(".popup_gallery .gallery_slider").css("display") == "block")
	{
		$(".gallery_slider ul li").css("width",parseInt($(".gallery_slider ul").width() + 1) + "px");
		for (var i = 0;i < 6 ;i++ )
		{
			if(galleryIndex < i)
				$(".popup_gallery .gallery_slider ul li").eq(i).css("left", (parseInt($(".popup_gallery .gallery_slider ul li").width())+1) + "px");
			else if (galleryIndex > i)
				$(".popup_gallery .gallery_slider ul li").eq(i).css("left", -(parseInt($(".popup_gallery .gallery_slider ul li").width())-1) + "px");
			else
				$(".popup_gallery .gallery_slider ul li").eq(i).css("left", "0px");
		}
	}
}




var scrollTop = 0;
var f03VideoAble = false;
var f03Video_s_position = 0;
var f03Video_e_position = 0;

var f04VideoAble = false;
var f04Video_s_position = 0;
var f04Video_e_position = 0;
var f04Tab = 1;

var f05VideoAble = false;
var f05Video_s_position = 0;
var f05Video_e_position = 0;

var f07VideoAble = false;
var f07Video_s_position = 0;
var f07Video_e_position = 0;

var f08VideoAble = false;
var f08Video_s_position = 0;
var f08Video_e_position = 0;

var f09VideoAble = false;
var f09Video_s_position = 0;
var f09Video_e_position = 0;

var pageReSizing = false;
function onScroll(e)
{
	scrollTop = $(window).scrollTop();
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	
	if(!pageReSizing)
	{
		f03Video_position = ($(".f03").height() > windowHeight) ? ($(".f03").offset().top - $(".s-top-fix").height()) : ($(".f03").offset().top - ((windowHeight/2) - ($(".f03").height()/2)) - $(".s-top-fix").height());
		f03Video_e_position = ($(".f03").height() > windowHeight) ? $(".f04").offset().top - ($(".f03 .video_wrap").height()/3*2) : ($(".f04").offset().top - ((windowHeight/2) - ($(".f04").height()/2)) - $(".s-top-fix").height());

		f04Video_position = ($(".f04").height() > windowHeight) ? ($(".f04").offset().top - $(".s-top-fix").height()) : ($(".f04").offset().top - ((windowHeight/2) - ($(".f04").height()/2)) - $(".s-top-fix").height());
		f04Video_e_position = ($(".f04").height() > windowHeight) ? $(".f05").offset().top - ($(".f04").height()/3*2) : ($(".f05").offset().top - ((windowHeight/2) - ($(".f05").height()/2)) - $(".s-top-fix").height());

		f05Video_position = ($(".f05").height() > windowHeight) ? ($(".f05").offset().top - $(".s-top-fix").height()) : ($(".f05").offset().top - ((windowHeight/2) - ($(".f05").height()/2)) - $(".s-top-fix").height());
		f05Video_e_position = ($(".f05").height() > windowHeight) ? $(".f07").offset().top - ($(".f05").height()/3*2) : ($(".f07").offset().top - ((windowHeight/2) - ($(".f07").height()/2)) - $(".s-top-fix").height());

		f07Video_position = ($(".f07").height() > windowHeight) ? ($(".f07").offset().top - $(".s-top-fix").height()) : ($(".f07").offset().top - ((windowHeight/2) - ($(".f07").height()/2)) - $(".s-top-fix").height());
		f07Video_e_position = ($(".f07").height() > windowHeight) ? $(".f08").offset().top - ($(".f07").height()/3*2) : ($(".f08").offset().top - ((windowHeight/2) - ($(".f08").height()/2)) - $(".s-top-fix").height());

		f08Video_position = ($(".f08").height() > windowHeight) ? ($(".f08").offset().top - $(".s-top-fix").height()) : ($(".f08").offset().top - ((windowHeight/2) - ($(".f08").height()/2)) - $(".s-top-fix").height());
		f08Video_e_position = ($(".f08").height() > windowHeight) ? $(".f09").offset().top - ($(".f08").height()/3*2) : ($(".f09").offset().top - ((windowHeight/2) - ($(".f09").height()/2)) - $(".s-top-fix").height());
		
		f05Video_position = f05Video_position;
		f05Video_e_position = f05Video_e_position - 200;
		f07Video_position = f07Video_position - 200;
		f07Video_e_position = f07Video_e_position - 200;
		f08Video_position = f08Video_position - 200;
		f08Video_e_position = f08Video_e_position - 200;
		
		if(scrollTop < f03Video_position)
		{
			console.log("f01");
			if(f03VideoAble)
			{
				$(".f03 .video img").css({"display":"block","opacity":1});
				f03VideoAble = false;
				f03Video.pause();
			}
			if(f04VideoAble)
			{
				$(".f04 .video img").css({"display":"block","opacity":1});
				f04VideoAble = false;
				f04Video_1.pause();
				f04Video_2.pause();
				$(".f04 .part1 .video_wrap a").css({"display":"block","opacity":1});
				$(".f04 .part2 .video_wrap a").css({"display":"block","opacity":1});
			}	
			if(f05VideoAble)
			{
				$(".f05 .video img").css({"display":"block","opacity":1});
				f05VideoAble = false;
				f05Video.pause();
				$(".f05 .video_wrap a").css({"display":"block","opacity":1});
			}
			if(f07VideoAble)
			{
				$(".f07 .video img").css({"display":"block","opacity":1});
				f07VideoAble = false;
				f07Video.pause();
			}
			if(f08VideoAble)
			{
				$(".f08 .video img").css({"display":"block","opacity":1});
				f08VideoAble = false;
				f08Video_pc.pause();
				f08Video_mo.pause();
			}
		}else if(scrollTop > f03Video_position && scrollTop < f03Video_e_position && !f03VideoAble)
		{
			console.log("f03");
			
			if(f04VideoAble)
			{
				$(".f04 .video img").css({"display":"block","opacity":1});
				f04VideoAble = false;
				f04Video_1.pause();
				f04Video_2.pause();
				$(".f04 .part1 .video_wrap a").css({"display":"block","opacity":1});
				$(".f04 .part2 .video_wrap a").css({"display":"block","opacity":1});
			}
			if(f05VideoAble)
			{
				$(".f05 .video img").css({"display":"block","opacity":1});
				f05VideoAble = false;
				f05Video.pause();
				$(".f05 .video_wrap a").css({"display":"block","opacity":1});
			}
			if(f07VideoAble)
			{
				$(".f07 .video img").css({"display":"block","opacity":1});
				f07VideoAble = false;
				f07Video.pause();
			}
			if(f08VideoAble)
			{
				$(".f08 .video img").css({"display":"block","opacity":1});
				f08VideoAble = false;
				f08Video_pc.pause();
				f08Video_mo.pause();
			}

			$(".new_sec_pdp .f03").find("video").each(function(){
				if(check_androidDevice() == '')
				{
					if($(this).parent().find("img").css("display") == "block")
					{
						$(this).parent().find("img").animate({opacity:0},300,function(){
							$(this).css("display","none");
						});
					}

					if(this.paused){
						if(!f03VideoAble)
						{
							if(parseInt(f03Video.currentTime) != 0)
								f03Video.currentTime = 0;

							f03VideoAble = true;
							f03Video.play();
						}				
					}
				}else{
					window.addEventListener('touchstart', function videoStart() {
						if(!f03VideoAble && f03Video.paused)
						{
							if($(".new_sec_pdp .f03 .video img").css("display") == "block")
							{
								$(".new_sec_pdp .f03 .video img").animate({opacity:0},300,function(){
									$(this).css("display","none");
								});
							}
							
							if(parseInt(f03Video.currentTime) != 0)
								f03Video.currentTime = 0;

							f03VideoAble = true;
							f03Video.play();
						}
					  // remove from the window and call the function we are removing
					  this.removeEventListener('touchstart', videoStart);
					});
				}
			});
		}else if(scrollTop > f04Video_position && scrollTop < f04Video_e_position && !f04VideoAble)
		{
			console.log("f04");
			if(f03VideoAble)
			{
				$(".f03 .video img").css({"display":"block","opacity":1});
				f03VideoAble = false;
				f03Video.pause();
			}
			if(f05VideoAble)
			{
				$(".f05 .video img").css({"display":"block","opacity":1});
				f05VideoAble = false;
				f05Video.pause();
				$(".f05 .video_wrap a").css({"display":"block","opacity":1});
			}
			if(f07VideoAble)
			{
				$(".f07 .video img").css({"display":"block","opacity":1});
				f07VideoAble = false;
				f07Video.pause();
			}
			if(f08VideoAble)
			{
				$(".f08 .video img").css({"display":"block","opacity":1});
				f08VideoAble = false;
				f08Video_pc.pause();
				f08Video_mo.pause();
			}
			if(f04Tab == 1)
			{
				$(".new_sec_pdp .f04 .part1").find("video").each(function(){
					if(check_androidDevice() == '')
					{
						if($(this).parent().find("img").css("display") == "block")
						{
							$(this).parent().find("img").animate({opacity:0},300,function(){
								$(this).css("display","none");
							});
						}

						if(this.paused){
							if(!f04VideoAble)
							{
								if(parseInt(f04Video_1.currentTime) != 0)
									f04Video_1.currentTime = 0;

								f04VideoAble = true;
								f04Video_1.play();
							}				
						}
						if($(".new_sec_pdp .f04 .part1 a").css("display") == "block")
						{
							$(".new_sec_pdp .f04 .part1 a").animate({"opacity":0},300,function(){
								$(this).css("display","none");
							});
						}
					}else{
						window.addEventListener('touchstart', function videoStart() {
							if(!f04VideoAble && f04Video_1.paused)
							{
								if($(".new_sec_pdp .f04 .part1 .video img").css("display") == "block")
								{
									$(".new_sec_pdp .f04 .part1 .video img").animate({opacity:0},300,function(){
										$(this).css("display","none");
									});
								}

								if($(".new_sec_pdp .f04 .part1 a").css("display") == "block")
								{
									$(".new_sec_pdp .f04 .part1 a").animate({"opacity":0},300,function(){
										$(this).css("display","none");
									});
								}
								if(parseInt(f04Video_1.currentTime) != 0)
									f04Video_1.currentTime = 0;

								f04VideoAble = true;
								f04Video_1.play();
							}
						  // remove from the window and call the function we are removing
						  this.removeEventListener('touchstart', videoStart);
						});
					}
				});
				
			}else{
				$(".new_sec_pdp .f04 .part2").find("video").each(function(){
					if(check_androidDevice() == '')
					{
						if($(this).parent().find("img").css("display") == "block")
						{
							$(this).parent().find("img").animate({opacity:0},300,function(){
								$(this).css("display","none");
							});
						}

						if(this.paused){
							if(!f04VideoAble)
							{
								if(parseInt(f04Video_2.currentTime) != 0)
									f04Video_2.currentTime = 0;

								f04VideoAble = true;
								f04Video_2.play();
							}				
						}

						if($(".new_sec_pdp .f04 .part2 a").css("display") == "block")
						{
							$(".new_sec_pdp .f04 .part2 a").animate({"opacity":0},300,function(){
								$(this).css("display","none");
							});
						}
					}else{
						window.addEventListener('touchstart', function videoStart() {
							if(!f04VideoAble && f04Video_2.paused)
							{
								if($(".new_sec_pdp .f04 .part2 .video img").css("display") == "block")
								{
									$(".new_sec_pdp .f04 .part2 .video img").animate({opacity:0},300,function(){
										$(this).css("display","none");
									});
								}

								if($(".new_sec_pdp .f04 .part2 a").css("display") == "block")
								{
									$(".new_sec_pdp .f04 .part2 a").animate({"opacity":0},300,function(){
										$(this).css("display","none");
									});
								}
								if(parseInt(f04Video_2.currentTime) != 0)
									f04Video_2.currentTime = 0;

								f04VideoAble = true;
								f04Video_2.play();
							}
						  // remove from the window and call the function we are removing
						  this.removeEventListener('touchstart', videoStart);
						});
					}
				});
				
			}
		}else if(scrollTop > f05Video_position && scrollTop < f05Video_e_position && !f05VideoAble)
		{
			console.log("f05");
			if(f03VideoAble)
			{
				$(".f03 .video img").css({"display":"block","opacity":1});
				f03VideoAble = false;
				f03Video.pause();
			}
			if(f04VideoAble)
			{
				$(".f04 .video img").css({"display":"block","opacity":1});
				f04VideoAble = false;
				f04Video_1.pause();
				f04Video_2.pause();
				$(".f04 .part1 .video_wrap a").css({"display":"block","opacity":1});
				$(".f04 .part2 .video_wrap a").css({"display":"block","opacity":1});
			}		
			if(f07VideoAble)
			{
				$(".f07 .video img").css({"display":"block","opacity":1});
				f07VideoAble = false;
				f07Video.pause();
			}
			if(f08VideoAble)
			{
				$(".f08 .video img").css({"display":"block","opacity":1});
				f08VideoAble = false;
				f08Video_pc.pause();
				f08Video_mo.pause();
			}

			$(".new_sec_pdp .f05").find("video").each(function(){
				if(check_androidDevice() == '')
				{
					if($(this).parent().find("img").css("display") == "block")
					{
						$(this).parent().find("img").animate({opacity:0},300,function(){
							$(this).css("display","none");
						});
					}

					if(this.paused){
						if(!f05VideoAble)
						{
							if(parseInt(f05Video.currentTime) != 0)
								f05Video.currentTime = 0;

							f05VideoAble = true;
							f05Video.play();
						}				
					}

					if($(".new_sec_pdp .f05 a").css("display") == "block")
					{
						$(".new_sec_pdp .f05 a").animate({"opacity":0},300,function(){
							$(this).css("display","none");
						});
					}

				}else{
					window.addEventListener('touchstart', function videoStart() {
						if(!f05VideoAble && f05Video.paused)
						{
							if($(".new_sec_pdp .f05 .video img").css("display") == "block")
							{
								$(".new_sec_pdp .f05 .video img").animate({opacity:0},300,function(){
									$(this).css("display","none");
								});
							}

							if($(".new_sec_pdp .f05 a").css("display") == "block")
							{
								$(".new_sec_pdp .f05 a").animate({"opacity":0},300,function(){
									$(this).css("display","none");
								});
							}
							if(parseInt(f05Video.currentTime) != 0)
								f05Video.currentTime = 0;

							f05VideoAble = true;
							f05Video.play();
						}
					  // remove from the window and call the function we are removing
					  this.removeEventListener('touchstart', videoStart);
					});
				}
			});
			
		}else if(scrollTop > f07Video_position && scrollTop < f07Video_e_position && !f07VideoAble)
		{
			console.log("f07");
			if(f03VideoAble)
			{
				$(".f03 .video img").css({"display":"block","opacity":1});
				f03VideoAble = false;
				f03Video.pause();
			}
			if(f04VideoAble)
			{
				$(".f04 .video img").css({"display":"block","opacity":1});
				f04VideoAble = false;
				f04Video_1.pause();
				f04Video_2.pause();
				$(".f04 .part1 .video_wrap a").css({"display":"block","opacity":1});
				$(".f04 .part2 .video_wrap a").css({"display":"block","opacity":1});
			}	
			if(f05VideoAble)
			{
				$(".f05 .video img").css({"display":"block","opacity":1});
				f05VideoAble = false;
				f05Video.pause();
				$(".f05 .video_wrap a").css({"display":"block","opacity":1});
			}
			if(f08VideoAble)
			{
				$(".f08 .video img").css({"display":"block","opacity":1});
				f08VideoAble = false;
				f08Video_pc.pause();
				f08Video_mo.pause();
			}

			$(".new_sec_pdp .f07").find("video").each(function(){
				if(check_androidDevice() == '')
				{
					if($(this).parent().find("img").css("display") == "block")
					{
						$(this).parent().find("img").animate({opacity:0},300,function(){
							$(this).css("display","none");
						});
					}

					if(this.paused){
						if(!f07VideoAble)
						{
							if(parseInt(f07Video.currentTime) != 0)
								f07Video.currentTime = 0;
							f07VideoAble = true;
							f07Video.play();
						}				
					}
				}else{
					window.addEventListener('touchstart', function videoStart() {
						if(!f07VideoAble && f07Video.paused)
						{
							if($(".new_sec_pdp .f07 .video img").css("display") == "block")
							{
								$(".new_sec_pdp .f07 .video img").animate({opacity:0},300,function(){
									$(this).css("display","none");
								});
							}
							if(parseInt(f07Video.currentTime) != 0)
								f07Video.currentTime = 0;
							
							f07VideoAble = true;
							f07Video.play();
						}
					  // remove from the window and call the function we are removing
					  this.removeEventListener('touchstart', videoStart);
					});
				}
			});
		}else if(scrollTop > f08Video_position && scrollTop < f08Video_e_position && !f08VideoAble)
		{
			console.log("f08");
			if(f03VideoAble)
			{
				$(".f03 .video img").css({"display":"block","opacity":1});
				f03VideoAble = false;
				f03Video.pause();
			}
			if(f04VideoAble)
			{
				$(".f04 .video img").css({"display":"block","opacity":1});
				f04VideoAble = false;
				f04Video_1.pause();
				f04Video_2.pause();
				$(".f04 .part1 .video_wrap a").css({"display":"block","opacity":1});
				$(".f04 .part2 .video_wrap a").css({"display":"block","opacity":1});
			}	
			if(f05VideoAble)
			{
				$(".f05 .video img").css({"display":"block","opacity":1});
				f05VideoAble = false;
				f05Video.pause();
				$(".f05 .video_wrap a").css({"display":"block","opacity":1});
			}
			if(f07VideoAble)
			{
				$(".f07 .video img").css({"display":"block","opacity":1});
				f07VideoAble = false;
				f07Video.pause();
			}
			if(viewportWidth() >= 768)
			{
				$(".new_sec_pdp .f08 .pc").find("video").each(function(){
					if($(this).parent().find("img").css("display") == "block")
					{
						$(this).parent().find("img").animate({opacity:0},300,function(){
							$(this).css("display","none");
						});
					}

					if(this.paused){
						if(check_androidDevice() != '')
						{
							window.addEventListener('touchstart', function videoStart() {
								if(!f08VideoAble)
								{
									if(parseInt(f08Video_pc.currentTime) != 0)
										f08Video_pc.currentTime = 0;

									f08VideoAble = true;
									f08Video_pc.play();
								}
							  // remove from the window and call the function we are removing
							  this.removeEventListener('touchstart', videoStart);
							});
						}else{
							if(!f08VideoAble)
							{
								if(parseInt(f08Video_pc.currentTime) != 0)
									f08Video_pc.currentTime = 0;

								f08VideoAble = true;
								f08Video_pc.play();
							}
						}
					}
				});
			}else{
				$(".new_sec_pdp .f08 .mobile").find("video").each(function(){
					if(check_androidDevice() == '')
					{
						if($(this).parent().find("img").css("display") == "block")
						{
							$(this).parent().find("img").animate({opacity:0},300,function(){
								$(this).css("display","none");
							});
						}

						if(this.paused){
							if(!f08VideoAble)
							{
								if(parseInt(f08Video_mo.currentTime) != 0)
									f08Video_mo.currentTime = 0;

								f08VideoAble = true;
								f08Video_mo.play();
							}				
						}
					}else{
						window.addEventListener('touchstart', function videoStart() {
							if(!f08VideoAble && f08Video_mo.paused)
							{
								if($(".new_sec_pdp .f08 .video img").css("display") == "block")
								{
									$(".new_sec_pdp .f08 .video img").animate({opacity:0},300,function(){
										$(this).css("display","none");
									});
								}
								if(parseInt(f08Video_mo.currentTime) != 0)
									f08Video_mo.currentTime = 0;

								f08VideoAble = true;
								f08Video_mo.play();
							}
						  // remove from the window and call the function we are removing
						  this.removeEventListener('touchstart', videoStart);
						});
					}
				});
			}
		}else if(scrollTop > f08Video_e_position)
		{
			console.log("f09");
			if(f03VideoAble)
			{
				$(".f03 .video img").css({"display":"block","opacity":1});
				f03VideoAble = false;
				f03Video.pause();
			}
			if(f04VideoAble)
			{
				$(".f04 .video img").css({"display":"block","opacity":1});
				f04VideoAble = false;
				f04Video_1.pause();
				f04Video_2.pause();
				$(".f04 .part1 .video_wrap a").css({"display":"block","opacity":1});
				$(".f04 .part2 .video_wrap a").css({"display":"block","opacity":1});
			}	
			if(f05VideoAble)
			{
				$(".f05 .video img").css({"display":"block","opacity":1});
				f05VideoAble = false;
				f05Video.pause();
				$(".f05 .video_wrap a").css({"display":"block","opacity":1});
			}
			if(f07VideoAble)
			{
				$(".f07 .video img").css({"display":"block","opacity":1});
				f07VideoAble = false;
				f07Video.pause();
			}
			if(f08VideoAble)
			{
				$(".f08 .video img").css({"display":"block","opacity":1});
				f08VideoAble = false;
				f08Video_pc.pause();
				f08Video_mo.pause();
			}
		}
	}
}
var motionIng = false;
var changeSpeed = 500;
$(function(){
	$(".f04 .btn > div a.camera").click(function(){
		if(f04Tab == 2)
		{

			f04Video_1.pause();
			f04Video_2.pause();

			f04VideoAble = false;
			f04Tab = 1;
			
			$(".f04 .part1 video").css({"width":$(".f04 .part2 video").width() + "px", "height":$(".f04 .part2 video").height() + "px"});

			$(".f04 .part1").css({"display":"block","opacity":0}).animate({"opacity":1},changeSpeed,function(){					
				$(".new_sec_pdp .f04 .part1").find("video").each(function(){
					if($(this).parent().find("img").css("display") == "block")
					{
						$(this).parent().find("img").animate({opacity:0},300,function(){
							$(this).css("display","none");
						});
					}
					if(f04Video_1.paused){

						if(parseInt(f04Video_1.currentTime) != 0)
							f04Video_1.currentTime = 0;

						f04VideoAble = true;
						f04Video_1.play();
					}
				});
				$(".f04 .part1 .video_wrap a").animate({"opacity":0},changeSpeed,function(){
					$(this).css("display","none");
				});
			});
			
			$(".f04 .part2 .video_wrap a").css({"display":"block","opacity":0}).animate({"opacity":1},changeSpeed);

			$(".f04 .btn_wrap .ico .sensor").animate({"opacity":0},changeSpeed,function(){
				$(this).css("display","none");
			});
			$(".f04 .btn_wrap .ico .camera").css({"display":"block","opacity":0}).animate({"opacity":1},changeSpeed);
			
			$(".f04 .btn_wrap .btn .default .sensor").animate({"opacity":0},changeSpeed,function(){
				$(this).css("display","none");
			});
			$(".f04 .btn_wrap .btn .default .camera").css({"display":"block","opacity":0}).animate({"opacity":1},changeSpeed);

			$(".f04 .btn_wrap .btn .active .camera").animate({"opacity":0},changeSpeed,function(){
				$(this).css("display","none");
			});
			$(".f04 .btn_wrap .btn .active .sensor").css({"display":"block","opacity":0}).animate({"opacity":1},changeSpeed);

		}
		return false;
	});
	$(".f04 .btn > div a.sensor").click(function(){
		if(f04Tab == 1)
		{
			f04Video_1.pause();
			f04Video_2.pause();			
			f04VideoAble = false;
			f04Tab = 2;
			
			$(".f04 .part1").animate({"opacity":0},changeSpeed,function(){
				$(".f04 .part1").css({"display":"none"});	
						
				$(".new_sec_pdp .f04 .part2").find("video").each(function(){
					if($(this).parent().find("img").css("display") == "block")
					{
						$(this).parent().find("img").animate({opacity:0},300,function(){
							$(this).css("display","none");
						});
					}
					if(f04Video_2.paused){
						if(parseInt(f04Video_2.currentTime) != 0)
							f04Video_2.currentTime = 0;

						f04VideoAble = true;
						f04Video_2.play();						
					}
				});

				$(".f04 .part2 .video_wrap a").animate({"opacity":0},changeSpeed,function(){
					$(this).css("display","none");
				});
			});

			$(".f04 .part1 .video_wrap a").css({"display":"block","opacity":0}).animate({"opacity":1},changeSpeed);


			$(".f04 .btn_wrap .ico .camera").animate({"opacity":0},changeSpeed,function(){
				$(this).css("display","none");
			});
			$(".f04 .btn_wrap .ico .sensor").css({"display":"block","opacity":0}).animate({"opacity":1},changeSpeed);
			
			$(".f04 .btn_wrap .btn .default .camera").animate({"opacity":0},changeSpeed,function(){
				$(this).css("display","none");
			});
			$(".f04 .btn_wrap .btn .default .sensor").css({"display":"block","opacity":0}).animate({"opacity":1},changeSpeed);

			$(".f04 .btn_wrap .btn .active .sensor").animate({"opacity":0},changeSpeed,function(){
				$(this).css("display","none");
			});
			$(".f04 .btn_wrap .btn .active .camera").css({"display":"block","opacity":0}).animate({"opacity":1},changeSpeed);
		}
		return false;
	});

	$(".f04 .part1 .video .play_btn").click(function(){
		if($(".f04 .part1 .video img").css("display") == "block")
		{
			$(".f04 .part1 .video img").animate({opacity:0},300,function(){
				$(this).css("display","none");
			});
		}

		$(".new_sec_pdp .f04 .part1").find("video").each(function(){
			if(this.paused){
				f04VideoAble = true;
				this.currentTime = 0;
				this.play();
			}
		});
		$(".f04 .part1 .video_wrap a").animate({"opacity":0},changeSpeed,function(){
			$(this).css("display","none");
		});
		return false;
	});

	$(".f04 .part2 .video .play_btn").click(function(){
		if($(".f04 .part2 .video img").css("display") == "block")
		{
			$(".f04 .part2 .video img").animate({opacity:0},300,function(){
				$(this).css("display","none");
			});
		}

		$(".new_sec_pdp .f04 .part2").find("video").each(function(){
			if(this.paused){
				f04VideoAble = true;
				this.currentTime = 0;
				this.play();
			}
		});
		$(".f04 .part2 .video_wrap a").animate({"opacity":0},changeSpeed,function(){
			$(this).css("display","none");
		});
		return false;
	});

	$(".f05 .video .play_btn").click(function(){
		if($(".f05 .video img").css("display") == "block")
		{
			$(".f05 .video img").animate({opacity:0},300,function(){
				$(this).css("display","none");
			});
		}

		$(".new_sec_pdp .f05").find("video").each(function(){
			console.log("this.paused : " + this.paused);
			if(f05Video.paused){
				f05VideoAble = true;
				f05Video.currentTime = 0;
				f05Video.play();
			}
		});
		$(".f05 .video_wrap a").animate({"opacity":0},changeSpeed,function(){
			$(this).css("display","none");
		});
		return false;
	});



	$(".popup_gallery .gallery_thumb ul li a").click(function(){
		$(this).parent().parent().parent().parent().find(".gallery_slider").css({"display":"block", "opacity":0}).animate({"opacity":1},500);
		
		galleryIndex = $(this).parent().index();
				

		if(galleryIndex == 0)
		{
			$(".popup_gallery .gallery_slider .control .prev_btn").css({"display":"none"});
			$(".popup_gallery .gallery_slider .control .next_btn").css({"display":"block"});
		}
		else if(galleryIndex == 3)
		{
			$(".popup_gallery .gallery_slider .control .prev_btn").css({"display":"block"});
			$(".popup_gallery .gallery_slider .control .next_btn").css({"display":"none"});
		}
		else
		{
			$(".popup_gallery .gallery_slider .control .prev_btn").css({"display":"block"});
			$(".popup_gallery .gallery_slider .control .next_btn").css({"display":"block"});
		}
		
		$(".gallery_slider ul li").css("width",parseInt($(".gallery_slider ul").width() + 1) + "px");

		for (var i = 0;i < 4 ;i++ )
		{
			if(galleryIndex < i)
				$(".popup_gallery .gallery_slider ul li").eq(i).css("left", $(".popup_gallery .gallery_slider ul li").width() + "px");
			else if (galleryIndex > i)
				$(".popup_gallery .gallery_slider ul li").eq(i).css("left", -$(".popup_gallery .gallery_slider ul li").width() + "px");
			else
				$(".popup_gallery .gallery_slider ul li").eq(i).css("left", "0px");
		}


		return false;
	});

	$(".popup_gallery .gallery_slider .control .close_btn").click(function(){
		$(".popup_gallery .gallery_slider").animate({"opacity":0},500);
		setTimeout(function(){
			$(".popup_gallery .gallery_slider").css("display","none");
		},500);


		return false;
	});

	$(".popup_gallery .gallery_slider .control .prev_btn").click(function(){
		if(!motionIng)
		{
			motionIng = true;
			$(".popup_gallery .gallery_slider ul li").eq(galleryIndex).animate({"left":$(".popup_gallery .gallery_slider ul li").width() + "px"},500);
			$(".popup_gallery .gallery_slider ul li").eq(galleryIndex-1).animate({"left":"0px"},500);

			galleryIndex--;		
			
			if(galleryIndex == 0)
			{
				$(".popup_gallery .gallery_slider .control .prev_btn").css({"display":"none"});
			}
			else
			{
				$(".popup_gallery .gallery_slider .control .prev_btn").css({"display":"block"});
				$(".popup_gallery .gallery_slider .control .next_btn").css({"display":"block"});
			}

			setTimeout(function(){
				motionIng = false;
			},500);
		}
		return false;
	});

	$(".popup_gallery .gallery_slider .control .next_btn").click(function(){
		if(!motionIng)
		{
			motionIng = true;
			$(".popup_gallery .gallery_slider ul li").eq(galleryIndex).animate({"left":-$(".popup_gallery .gallery_slider ul li").width() + "px"},500);
			$(".popup_gallery .gallery_slider ul li").eq(galleryIndex+1).animate({"left":"0px"},500);


			galleryIndex++;

			if(galleryIndex == 3)
			{
				$(".popup_gallery .gallery_slider .control .next_btn").css({"display":"none"});
			}
			else
			{
				$(".popup_gallery .gallery_slider .control .prev_btn").css({"display":"block"});
				$(".popup_gallery .gallery_slider .control .next_btn").css({"display":"block"});
			}
			setTimeout(function(){
				motionIng = false;
			},500);
		}
		return false;
	});

	$(".popup_gallery .gallery_slider").click(function(){
		return false;
	});

	$(".new_sec_pdp").click(function(){
		if($(".popup_gallery .gallery_slider").css("display") == "block")
		{
			$(".popup_gallery .gallery_slider").animate({"opacity":0},500);
			setTimeout(function(){
				$(".popup_gallery .gallery_slider").css("display","none");
			},500);
		}
		return false;
	});
	videoLoad();
});

var f03Video;
var f04Video_1;
var f04Video_2;
var f05Video;
var f07Video;
var f08Video_pc;
var f08Video_mo;
var f09Video;

var f03Video_Ended = true;
var f04Video_1_Ended = true;
var f04Video_2_Ended = true;
var f05Video_Ended = true;
var f07Video_Ended = true;
var f08Video_pc_Ended = true;
var f08Video_mo_Ended = true;


function videoLoad(){
	f03Video = document.getElementById('slim');
	f04Video_1 = document.getElementById('navigation01');
	f04Video_2 = document.getElementById('navigation02');
	f05Video = document.getElementById('edgeclean');
	f07Video = document.getElementById('autoclean');
	f08Video_pc = document.getElementById('bigbrush_pc');
	f08Video_mo = document.getElementById('bigbrush_mo');
	if(check_androidDevice() != '')
	{
		f07Video.src="./is/content/samsung/p5/sec/products/html-feature/sec-html-feature-vr7000-autoclean-pc001.webm";
		f07Video.load();

		f08Video_mo.src="./is/content/samsung/p5/sec/products/html-feature/sec-html-feature-vr7000-bigbrush-mo001.webm";
		f08Video_mo.load();
	}
	
	
	f03Video.onended = function(e) {
		f03Video.pause();
		f03Video_Ended = true;
    };
	f04Video_1.onended = function(e) {
		$(".f04 .part1 .video_wrap a").css({"display":"block","opacity":0}).animate({"opacity":1},changeSpeed);
		f04Video_1.pause();
    };
	f04Video_2.onended = function(e) {
		$(".f04 .part2 .video_wrap a").css({"display":"block","opacity":0}).animate({"opacity":1},changeSpeed);
		f04Video_2.pause();
    };
	f05Video.onended = function(e) {
		$(".f05 .video_wrap a").css({"display":"block","opacity":0}).animate({"opacity":1},changeSpeed);
		f05Video.pause();
    };
	f07Video.onended = function(e) {
		f03Video.pause();
		f03Video_Ended = true;
    };
	f08Video_pc.onended = function(e) {
		f08Video_pc.pause();
		f08Video_pc_Ended = true;
    };
	f08Video_mo.onended = function(e) {
		f08Video_mo.pause();
		f08Video_mo_Ended = true;
    };
	f03Video.onended = function(e) {
		f03Video.pause();
		f03Video_Ended = true;
    };

	f03Video.addEventListener('loadeddata', function() {
	   console.log("slim load complate");
	}, false);
	f04Video_1.addEventListener('loadeddata', function() {
	   console.log("navigation01 load complate");
	}, false);
	f04Video_2.addEventListener('loadeddata', function() {
	   console.log("navigation02 load complate");
	}, false);
	f05Video.addEventListener('loadeddata', function() {
	   console.log("edgeclean load complate");
	}, false);
	f07Video.addEventListener('loadeddata', function() {
	   console.log("autoclean load complate");
	}, false);
	f08Video_pc.addEventListener('loadeddata', function() {
	   console.log("bigbrush_pc load complate");
	}, false);
	f08Video_mo.addEventListener('loadeddata', function() {
	   console.log("bigbrush_mo load complate");
	}, false);

	f03Video.load();
	f04Video_1.load();
	f04Video_2.load();
	f05Video.load();
	f07Video.load();
	f08Video_pc.load();
	f08Video_mo.load();
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

function check_androidDevice(){
	var mobileKeyWords = new Array('BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
	var device_name = '';
	for (var word in mobileKeyWords){
		if (navigator.userAgent.match(mobileKeyWords[word]) != null){
			device_name = mobileKeyWords[word];
			break;
		}
	}

	return device_name;
}


function videoReSize()
{	
	if(viewportWidth() > 1440)
	{
		$(".f03 .video_wrap .video").css({"width":"1440px", "height":"1080px"});
		$(".f04 .video_wrap .video").css({"width":"1106px", "height":"618px"});
		$(".f05 .video_wrap .video").css({"width":"1240px", "height":"648px"});
		$(".f07 .video_wrap .video").css({"width":"1440px", "height":"882px"});
		$(".f08 .video_wrap.pc .video").css({"width":"1440px", "height":"922px"});
		$(".f08 .video_wrap.mobile .video").css({"width":"768px", "height":"698px"});
		$(".f09 .video_wrap .video").css({"width":"1444px", "height":"946px"});

		$("#slim").css({"width":"1444px", "height":"1084px", "margin":"-3px 0 0 -2px"});
		$("#navigation01").css({"width":"1110px", "height":"622px", "margin":"-2px 0 0 -2px"});
		$("#navigation02").css({"width":"1110px", "height":"622px", "margin":"-2px 0 0 -2px"});
		$("#edgeclean").css({"width":"1244px", "height":"652px", "margin":"-2px 0 0 -2px"});
		$("#autoclean").css({"width":"1444px", "height":"886px", "margin":"-2px 0 0 -2px"});
		$("#bigbrush_pc").css({"width":"1444px", "height":"926px", "margin":"-2px 0 0 -2px"});
		$("#bigbrush_mo").css({"width":"772px", "height":"702px", "margin":"-2px 0 0 -2px"});
		$("#cyclone").css({"width":"1444px", "height":"946px", "margin":"-2px 0 0 -2px"});
	}else if(viewportWidth() >= 320){
		$(".f03 .video_wrap .video").css({"width":windowWidth+"px", "height":parseInt(windowWidth*0.75)+"px"});
		$(".f03 .video_wrap .video img").css({"width":windowWidth+"px", "height":parseInt(windowWidth*0.75)+"px"});
		
		$("#slim").css({"width":(windowWidth + 4)+"px", "height":(parseInt(windowWidth*0.75) + 4)+"px", "margin":"-3px 0 0 -2px"});
		if(windowWidth < 768)
		{
			$(".f04 .video_wrap .video").css({"width":parseInt(windowWidth*0.8044)+"px", "height":parseInt(windowWidth*0.449)+"px"});

			$("#navigation01").css({"width":(parseInt(windowWidth*0.8044) + 4)+"px", "height":(parseInt(windowWidth*0.449) + 4)+"px", "margin":"-2px 0 0 -2px"});
			$("#navigation02").css({"width":(parseInt(windowWidth*0.8044) + 4)+"px", "height":(parseInt(windowWidth*0.449) + 4)+"px", "margin":"-2px 0 0 -2px"});
			
			$(".f05 .video_wrap .video").css({"width":parseInt(windowWidth*0.897)+"px", "height":parseInt(windowWidth*0.469)+"px"});
			$("#edgeclean").css({"width":(parseInt(windowWidth*0.897) + 4)+"px", "height":(parseInt(windowWidth*0.469) + 4)+"px", "margin":"-2px 0 0 -2px"});
		}else{
			$(".f04 .video_wrap .video").css({"width":parseInt(windowWidth*0.771)+"px", "height":parseInt(windowWidth*0.429)+"px"});

			$("#navigation01").css({"width":(parseInt(windowWidth*0.771) + 4)+"px", "height":(parseInt(windowWidth*0.429) + 4)+"px", "margin":"-2px 0 0 -2px"});
			$("#navigation02").css({"width":(parseInt(windowWidth*0.771) + 4)+"px", "height":(parseInt(windowWidth*0.429) + 4)+"px", "margin":"-2px 0 0 -2px"});

			$(".f05 .video_wrap .video").css({"width":parseInt(windowWidth*0.864)+"px", "height":parseInt(windowWidth*0.45)+"px"});
			$("#edgeclean").css({"width":(parseInt(windowWidth*0.864) + 4)+"px", "height":(parseInt(windowWidth*0.45) + 4)+"px", "margin":"-2px 0 0 -2px"});
		}

		
		$(".f07 .video_wrap .video").css({"width":windowWidth+"px", "height":parseInt(windowWidth*0.6125)+"px"});
		$(".f08 .video_wrap.pc .video").css({"width":windowWidth+"px", "height":parseInt(windowWidth*0.64)+"px"});
		$(".f08 .video_wrap.mobile .video").css({"width":windowWidth+"px", "height":parseInt(windowWidth*0.909)+"px"});
		$(".f09 .video_wrap .video").css({"width":windowWidth+"px", "height":parseInt(windowWidth*0.654)+"px"});

		
		$("#autoclean").css({"width":(windowWidth + 4)+"px", "height":(parseInt(windowWidth*0.6125) + 4)+"px", "margin":"-2px 0 0 -2px"});
		$("#bigbrush_pc").css({"width":(windowWidth + 4)+"px", "height":(parseInt(windowWidth*0.64) + 4)+"px", "margin":"-2px 0 0 -2px"});
		$("#bigbrush_mo").css({"width":(windowWidth + 4)+"px", "height":(parseInt(windowWidth*0.909) + 4)+"px", "margin":"-2px 0 0 -2px"});
		$("#cyclone").css({"width":(windowWidth + 4)+"px", "height":(parseInt(windowWidth*0.654) + 4)+"px", "margin":"-2px 0 0 -2px"});
	}else{
		$(".f03 .video_wrap .video").css({"width":"320px", "height":parseInt(320*0.75)+"px"});
		$("#slim").css({"width":(320 + 4)+"px", "height":(parseInt(320*0.75) + 4)+"px", "margin":"-3px 0 0 -2px"});

		$(".f04 .video_wrap .video").css({"width":parseInt(320*0.8044)+"px", "height":parseInt(320*0.449)+"px"});

		$("#navigation01").css({"width":(parseInt(320*0.8044) + 4)+"px", "height":(parseInt(320*0.449) + 4)+"px", "margin":"-2px 0 0 -2px"});
		$("#navigation02").css({"width":(parseInt(320*0.8044) + 4)+"px", "height":(parseInt(320*0.449) + 4)+"px", "margin":"-2px 0 0 -2px"});	
	

		$(".f05 .video_wrap .video").css({"width":parseInt(320*0.864)+"px", "height":parseInt(320*0.45)+"px"});
		$(".f07 .video_wrap .video").css({"width":"320px", "height":parseInt(320*0.6125)+"px"});
		$(".f08 .video_wrap.pc .video").css({"width":"320px", "height":parseInt(320*0.64)+"px"});
		$(".f08 .video_wrap.mobile .video").css({"width":"320px", "height":parseInt(320*0.909)+"px"});
		$(".f09 .video_wrap .video").css({"width":"320px", "height":parseInt(320*0.654)+"px"});

		$("#edgeclean").css({"width":(parseInt(320*0.864) + 4)+"px", "height":(parseInt(320*0.45) + 4)+"px", "margin":"-2px 0 0 -2px"});
		$("#autoclean").css({"width":(320 + 4)+"px", "height":(parseInt(320*0.6125) + 4)+"px", "margin":"-2px 0 0 -2px"});
		$("#bigbrush_pc").css({"width":(320 + 4)+"px", "height":(parseInt(320*0.64) + 4)+"px", "margin":"-2px 0 0 -2px"});
		$("#bigbrush_mo").css({"width":(320 + 4)+"px", "height":(parseInt(320*0.909) + 4)+"px", "margin":"-2px 0 0 -2px"});
		$("#cyclone").css({"width":(320 + 4)+"px", "height":(parseInt(320*0.654) + 4)+"px", "margin":"-2px 0 0 -2px"});
	}
}