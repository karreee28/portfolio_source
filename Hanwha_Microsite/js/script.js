var autoPass_Able = false;

$(window)
	.load(onLoad)
	.resize(onResize);

var windowWidth = $(window).innerWidth();
var windowHeight = $(window).innerHeight();
var realWidth = windowHeight / 9 * 16;
var headerHeight = $(".header_wrap").innerHeight();
var deviceLoad_Able = false;
function onLoad()
{
	document.body.onorientationchange = updateOrientation;

	//updateOrientation();
	console.log("window.orientation : " + window.orientation);
	if (window.orientation)
	{
		if((window.orientation % 180) == 0)
		{
			init();
		}
	}else{
		init();
	}
}

function init()
{
	if (!deviceLoad_Able)
	{
		deviceLoad_Able = true;
		$("body").addClass(checkBrowser());
		$("body").addClass(check_device());
		if (check_allDevice() != "")
		{
			$("body").addClass("m_vw");
			$("body").addClass("device");
			$(".loading_wrap .loading_mov .vCover").attr("src", $(".loading_wrap .loading_mov .vCover").attr("data-media-mobile"));
			$(".loading_wrap").css({"opacity":1});
		}else{
			if (windowWidth > 768)
			{
				$("body").addClass("w_vw");
			}else{
				$("body").addClass("m_vw");
				$(".header_wrap").css({"width":$(".m_vw .wrap").innerWidth() + "px"});
				$(".bg_cont").css({"width":$(".m_vw .wrap").innerWidth() + "px"});
				$(".indicator_wrap").css({"width":$(".m_vw .wrap").innerWidth() + "px"});
			}
			$("body").addClass("pc");
		}
		
		setTimeout(function(){
			$(".header_wrap").css({"display":"block","width":$(".m_vw .wrap").innerWidth() + "px"});
			$(".indicator_wrap").css({"width":$(".m_vw .wrap").innerWidth() + "px"});
		},500);

		

		if ($("body").hasClass("m_vw"))
		{
			if (check_allDevice() == "")
			{
				mobileSwipe();
			}
			$(".m_vw .movie_progress .control_btn").removeClass("pause");
			$(".m_vw .movie_progress .control_btn").addClass("play");
		}

		videoSetting();
	}
	
}

var tileWidth = 0;
var tileSize = 676;
var tileRow_Cnt = 26;
var tileCol_Cnt = 26;

var oldWidth = $(window).innerWidth();
var oldHeight = $(window).innerHeight();
var resizeCheck = "";

var pageShowIndex = 0;
function onResize()
{
	if (!$("body").hasClass("device"))
	{
		mobileReSet();

		if (check_allDevice() == "")
		{
			pageResizing();
			

			pageSize();
			$("div").css({"transition":"", "-webkit-transition":""});
			$("img").css({"transition":"", "-webkit-transition":""});
			
			graphLine();

			setTimeout(pageSize, 500);
			setTimeout(pageResizing, 500);
			setTimeout(mobileReSet, 500);
		}

		if ($("body").hasClass("m_vw"))
		{
			if ($("body").hasClass("pc"))
			{
				$(".header_wrap").css({"width":$(".wrap").innerWidth() + "px"});
				$(".bg_cont").css({"width":$(".m_vw .wrap").innerWidth() + "px"});
				$(".indicator_wrap").css({"width":$(".m_vw .wrap").innerWidth() + "px"});
			}
			
			if (check_allDevice() == "")
			{
				mobileSwipe();
			}
		}else{
			$(".header_wrap").css({"width":""});
			$(".bg_cont").css({"width":""});
			$(".indicator_wrap").css({"width":""});
		}
	}
}

function pageSize()
{	
	if ($(window).innerWidth() > 1440 && $(window).innerHeight() < 810)
	{
		$(".feature_cont_cover").css({"max-width":"1440px"});
		if (pageLoading)
		{
			$(".indicator_wrap .scroll_img p").css({"transition":"all 0.3s", "opacity":0});
			$(".indicator_wrap .keyboard_img .keyboard_img_txt").css({"transition":"all 0.3s", "opacity":0});
			$(".indicator_wrap .indicator_inner").css({"max-width":"1440px"});
		}
	}else{
		$(".feature_cont_cover").css({"max-width":"1920px"});
		
		if (pageLoading)
		{
			$(".indicator_wrap .scroll_img p").css({"transition":"all 0.3s", "opacity":1});
			$(".indicator_wrap .keyboard_img .keyboard_img_txt").css({"transition":"all 0.3s", "opacity":1});
			$(".indicator_wrap .indicator_inner").css({"max-width":"1920px"});
		}
	}

	if (pageLoading)
	{
		if ($(window).innerHeight() < 768)
		{
			$(".indicator_wrap .scroll_img").css({"transition":"all 0.3s", "opacity":0});
		}else{
			$(".indicator_wrap .scroll_img").css({"transition":"all 0.3s", "opacity":1});
		}
	}
	
	if ($(window).innerWidth() > 768)
	{
		$("body").addClass("w_px");
		$("body").removeClass("m_vw");
		windowWidth = $(window).innerWidth();
		windowHeight = $(window).innerHeight();
		
		if ($(window).innerHeight() < 768 || $(window).innerWidth() < 1024)
		{
			if ($(window).innerHeight() < 768)
			{
				windowHeight = 768;
				$("body").addClass("m_mini");
			}else{
				$("body").removeClass("m_mini");
			}

			if ($(window).innerWidth() < 1024)
				windowWidth = 1024;

			$(".wrap").css({"width":windowWidth + "px","height":windowHeight + "px", "position":"relative", "margin-left":"", "left":""});
		}else{
			$(".wrap").css({"width":"","height":"", "position":"fixed", "margin-left":"", "left":""});
			$("body").removeClass("m_mini");
		}
		
		if (!$("body").hasClass("m_vw"))
		{
			if ($(window).innerHeight() < 810)
			{
				$("body").addClass("m_size");
				$("body").addClass("m_header");	

				$(".feature_cont_cover").css({"max-width":"1024px"});
				$(".indicator_wrap .indicator_inner").css({"max-width":"1024px"});

				if ($(window).outerWidth() > 1024)
				{
					$(".progress_bg").css({"width":(($(window).outerWidth() - 1024)/2) + "px"});
				}
			}else if ($(window).innerHeight() < 960)
			{
				$("body").removeClass("m_header");
				$("body").addClass("m_size");

				$(".feature_cont_cover").css({"max-width":"1024px"});
				$(".indicator_wrap .indicator_inner").css({"max-width":"1024px"});

				if ($(window).outerWidth() > 1024)
				{
					$(".progress_bg").css({"width":(($(window).outerWidth() - 1024)/2) + "px"});
				}
			}else {
				$("body").removeClass("m_header");
				$("body").removeClass("m_size");

				$(".progress_bg").css({"width":""});

				if ($(window).innerWidth() > 1440 && $(window).innerHeight() < 810)
				{
					$(".feature_cont_cover").css({"max-width":"1440px"});
					$(".indicator_wrap .indicator_inner").css({"max-width":"1440px"});
				}else{
					$(".feature_cont_cover").css({"max-width":"1920px"});
					$(".indicator_wrap .indicator_inner").css({"max-width":"1920px"});
				}
			}
		}else{
			$("body").removeClass("m_header");
			$("body").removeClass("m_size");
			
			$(".progress_bg").css({"width":""});

			if ($(window).innerWidth() > 1440 && $(window).innerHeight() < 810)
			{
				$(".feature_cont_cover").css({"max-width":"1440px"});
				$(".indicator_wrap .indicator_inner").css({"max-width":"1440px"});
			}else{
				$(".feature_cont_cover").css({"max-width":"1920px"});
				$(".indicator_wrap .indicator_inner").css({"max-width":"1920px"});
			}
		}

		var coverWidth = $(window).innerWidth();
		if ($(window).innerHeight() / 9 * 16 < $(window).innerWidth())
		{
			tileWidth = $(window).innerWidth() * 0.039;
			var reWidth = $(window).innerWidth();
			var reHeight = $(window).innerWidth() / 16 * 9;

			if (reHeight < 768)
			{
				reWidth = 1365;
				reHeight = 768;
			}

			coverWidth = reWidth;

			$(".loading_wrap").css({"width":"100%","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
			$(".bg_cont .bg img").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":"", "max-width":"none"});
			$(".inter_cont .sky img").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"auto", "margin-top":"0px", "left":"", "margin-left":"", "bottom":"0px", "max-width":"none"});
			$(".inter_cont .panel_half_sf").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"auto", "margin-top":"0px", "left":"", "margin-left":"", "bottom":"0px", "max-width":"none"});

			$(".bg_cont .interview video").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
			$(".inter_cont .movie .earth_movie .earth_in").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
			$(".inter_cont .movie .earth_movie .earth_out").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
			$(".inter_cont .movie .earth_movie .earth_in video").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
			$(".inter_cont .movie .earth_movie .earth_out video").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});

			$(".bg_cont .interview2 .vCover").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
			$(".bg_cont .interview2 video").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
		}else{
			tileWidth = $(window).innerWidth() * 0.039;
			var reWidth = $(window).innerHeight() / 9 * 16;
			
			if (reWidth < 1365)
			{
				reWidth = 1365;
				reHeight = 768;
			}

			coverWidth = reWidth;

			$(".loading_wrap").css({"width":reWidth + "px","height":"100%", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});
			$(".bg_cont .bg img").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":"", "max-width":"none"});
			$(".inter_cont .sky img").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":"", "max-width":"none"});
			$(".inter_cont .panel_half_sf").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":"", "max-width":"none"});

			$(".bg_cont .interview video").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});			
			$(".inter_cont .movie .earth_movie .earth_in").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});			
			$(".inter_cont .movie .earth_movie .earth_out").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});			
			$(".inter_cont .movie .earth_movie .earth_in video").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});			
			$(".inter_cont .movie .earth_movie .earth_out video").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});			

			$(".bg_cont .interview2 .vCover").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});			
			$(".bg_cont .interview2 video").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});			
		}
		
		if ($(window).innerWidth() > $(window).innerHeight())
		{
			if (coverWidth > $(window).innerWidth())
			{
				$(".bg_cont .lab video").css({"position":"absolute", "width":coverWidth + "px", "height":coverWidth + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(coverWidth/2)+ "px"});
				$(".bg_cont .forest video").css({"position":"absolute", "width":coverWidth + "px", "height":coverWidth + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(coverWidth/2)+ "px"});
			}else{
				$(".bg_cont .lab video").css({"position":"absolute", "width":windowWidth + "px", "height":windowWidth + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(windowWidth/2)+ "px"});
				$(".bg_cont .forest video").css({"position":"absolute", "width":windowWidth + "px", "height":windowWidth + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(windowWidth/2)+ "px"});
			}
			
			
			tileWidth = Math.ceil($(window).innerWidth() / 26);

			var reTileSize = tileWidth * 26;
			$(".tile_cont").css({"width":reTileSize + "px", "height":reTileSize + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(reTileSize/2)+ "px"});
			$(".tile_cont .tile_cont_inner").css({"width":reTileSize + "px", "height":reTileSize + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(reTileSize/2)+ "px"});
		}else{
			if ($(window).innerHeight() > 1024)
			{
				$(".bg_cont .lab video").css({"position":"absolute", "width":windowHeight + "px", "height":windowHeight + "px", "left":"50%", "margin-left":-(windowHeight / 2) + "px", "top":"0px", "margin-top":"0px"});
				$(".bg_cont .forest video").css({"position":"absolute", "width":windowHeight + "px", "height":windowHeight + "px", "left":"50%", "margin-left":-(windowHeight / 2) + "px", "top":"0px", "margin-top":"0px"});

				tileWidth = Math.ceil($(window).innerHeight() / 26);
				var reTileSize = tileWidth * 26;
				$(".tile_cont").css({"width":reTileSize + "px", "height":reTileSize + "px", "left":"50%", "margin-left":-(reTileSize/2) + "px", "top":"0px", "margin-top":"0px"});
				$(".tile_cont .tile_cont_inner").css({"width":reTileSize + "px", "height":reTileSize + "px", "left":"50%", "margin-left":-(reTileSize/2) + "px", "top":"0px", "margin-top":"0px"});
			}else{
				$(".bg_cont .lab video").css({"position":"absolute", "width":"1024px", "height":"1024px", "left":"50%", "margin-left":"-512px", "top":"50%", "margin-top":"-512px"});
				$(".bg_cont .forest video").css({"position":"absolute", "width":"1024px", "height":"1024px", "left":"50%", "margin-left":"-512px", "top":"50%", "margin-top":"-512px"});

				tileWidth = Math.ceil(1024 / 26);
				var reTileSize = tileWidth * 26;
				$(".tile_cont").css({"width":reTileSize + "px", "height":reTileSize + "px", "left":"50%", "margin-left":-(reTileSize/2) + "px", "top":"0px", "margin-top":"0px"});
				$(".tile_cont .tile_cont_inner").css({"width":reTileSize + "px", "height":reTileSize + "px", "left":"50%", "margin-left":-(reTileSize/2) + "px", "top":"0px", "margin-top":"0px"});
			}
		}

		$(".tile_cont .tile_cont_inner .tile").css({"width":tileWidth + "px"});

		$(".bg_cont .bg").css({"width":"100%", "height":windowHeight + "px"});
		$(".loading_wrap .loading_bar").css({"position":"fixed"});


		var bgWidth = windowHeight / 9 * 16 * 2;
		$(".bg_cont .bg.space").css({"width":windowWidth + "px", "height": windowHeight + "px"});
		$(".bg_cont .bg.space img").css({"width":bgWidth + "px", "height":windowHeight + "px", "left":"50%", "margin-left":-(bgWidth/2) + "px", "top":"50%", "margin-top":-(windowHeight/2) + "px"});

		$(".bg_cont .skypanel_wrap .skypanel img").css({"position":"relative", "height":""});

		$(".feature").css({"width":"100%", "height":"100%", "margin-left":"0px", "max-width":"1920px"});
		$(".feature_cont").css({"height":"100%"});
		$(".loading_wrap .loading_txt").css({"width":"100%", "left":"", "margin-left":""});

		$(".inter_cont").css({"height":""});
		$(".bg_cont").css({"width":""});
		$(".graph_obj").css({"height":""});

		//$(".inter_cont .sky img").css({"left":"", "margin-left":"", "top":"auto", "margin-top":"", "max-width":"none", "bottom":"0px"});
		$(".bg_cont .skypanel_wrap .skypanel img").css({"top":"auto", "margin-top":""});
		$(".feature_cont_cover").css({"height":""});

		$(".bg_cont .bg.dot_map img ").css({"width":"","height":"","left":"", "top":"","margin-left":"","margin-top":""});
		
		$(".f3_10 .caption_w").css({"position":"absolute","width":"", "height":"","left":"", "margin-left":"", "top":"", "margin-top":""});
		$(".f4_1 .caption_w").css({"position":"absolute","width":"", "height":"","left":"", "margin-left":"", "top":"", "margin-top":""});

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

		$(".bg_cont").css("margin-top",-(bgNumber * windowHeight) + "px");

		if ((windowHeight *1.7778) < windowWidth)
		{
			var imgSizeW = $(window).outerWidth() / 3;
			var imgSizeH = imgSizeW * 1.6875;
			$(".condition_w .obj > img").css({"width":imgSizeW + "px","height":imgSizeH + "px","left":"50%", "margin-left":-(imgSizeW/2) + "px", "top":"50%", "margin-top":-(imgSizeH/2) + "px"});
		}else{
			var imgSize = $(window).outerHeight() * 0.5926;
			$(".condition_w .obj > img").css({"width":"auto","height":"100%","left":"50%", "margin-left":-(imgSize/2) + "px", "top":"0px", "margin-top":"0px"});
		}
		

		
		if (featureIndex == 26)
		{
			$(".indicator_wrap .progress_bg").css({"width":"100%"});
		}

		$(".feature_cont").css("margin-top",-(featureIndex * windowHeight) + "px");
	}else{
		
		$("body").removeClass("m_header");
		$("body").removeClass("m_size");
		$("body").removeClass("w_px");
		$("body").addClass("m_vw");
		realWidth = $(window).innerWidth();
		windowWidth = $(window).innerWidth();
		

		if ($(window).innerHeight() < 768)
		{
			$("body").addClass("m_mini");
		}else{
			$("body").removeClass("m_mini");
		}
		
		if ($("body").hasClass("device"))
		{
			windowHeight = $(window).innerHeight();
		}else{
			if($(window).innerHeight() > ($(window).innerWidth() / 9 * 16))
			{
				windowHeight = $(window).innerHeight();
			}else{
				windowHeight = $(window).innerWidth() / 9 *16;
			}
		}
		

		if (showPopupSize > 0)
		{
			$(".wrap").css({"width":"100%","height":(windowHeight + (showPopupSize * windowWidth)) + "px", "position":"relative", "margin-left":"", "left":""});
			//$(".feature").css({"width":realWidth + "px", "height":(windowHeight + (showPopupSize * windowWidth)) + "px", "margin-left":"0px", "max-width":"100%"});
			$(".feature").css({"width":realWidth + "px", "height":windowHeight + "px", "margin-left":"0px", "max-width":"100%"});
			$(".feature_cont").css({"height":(windowHeight + (showPopupSize * windowWidth)) + "px"});
			$(".feature_cont_cover").css({"height":(windowHeight + (showPopupSize * windowWidth)) + "px"});
		}else{
			$(".wrap").css({"width":"100%","height":windowHeight + "px", "position":"relative", "margin-left":"", "left":""});
			$(".feature").css({"width":realWidth + "px", "height":windowHeight + "px", "margin-left":"0px", "max-width":"100%"});
			$(".feature_cont").css({"height":windowHeight + "px"});
			$(".feature_cont_cover").css({"height":windowHeight + "px"});
		}

		$(".tile_cont").css({"width":(realWidth * 1.016) + "px", "height":"100%", "top":"", "margin-top":""});
		$(".loading_wrap .loading_txt").css({"width":windowWidth + "px", "left":"50%", "margin-left":-(windowWidth/2) + "px"});

		$(".inter_cont").css({"height":windowHeight + "px"});
		$(".bg_cont").css({"width":$(".wrap").innerWidth() + "px", "overflow":"hidden"});

		$(".bg_cont .skypanel_wrap .skypanel img").css({"position":"relative", "height":"auto"});
		
		var imgWidth = $(".wrap").outerWidth();
		if ((imgWidth / 9 * 16) > $(window).innerHeight())
		{
			var spaceHeight = $(window).innerWidth() / 9 * 16;
			$(".m_vw .header_wrap .header_bg").css({"position":"absolute","width":imgWidth + "px", "height":spaceHeight + "px", "left":"0px", "margin-left":"0px", "top":($(window).innerHeight() / 2) + "px", "margin-top":-(spaceHeight/2) + "px", "max-width":"none"});
			$(".m_vw .header_wrap .header_bg img").css({"width":imgWidth + "px", "height":spaceHeight + "px"});
			$(".bg_cont .bg.space img").css({"width":imgWidth + "px", "height":spaceHeight + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(spaceHeight/2) + "px"});
			$(".inter_cont .sky img").css({"position":"absolute","width":imgWidth + "px", "height":spaceHeight + "px", "left":"0px", "margin-left":"0px", "top":"auto", "margin-top":"0px", "bottom":"0px", "max-width":"none"});
			$(".bg_cont .bg img").css({"position":"absolute","width":imgWidth + "px", "height":spaceHeight + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(spaceHeight/2) + "px", "max-width":"none"});
			$(".bg_cont .forest .m_bg_img img").css({"position":"absolute","width":imgWidth + "px", "height":spaceHeight + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(spaceHeight/2) + "px"});
		}else{
			var spaceWidth = $(window).innerHeight() / 16 * 9;
			$(".m_vw .header_wrap .header_bg").css({"position":"absolute","width":spaceWidth + "px", "height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(spaceWidth/2) + "px", "top":"0px", "margin-top":"0px", "max-width":"none"});
			$(".m_vw .header_wrap .header_bg img").css({"width":imgWidth + "px", "height":$(window).innerHeight() + "px"});
			$(".bg_cont .bg.space img").css({"width":spaceWidth + "px", "height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(spaceWidth/2) + "px", "top":"0px", "margin-top":"0px"});
			$(".inter_cont .sky img").css({"position":"absolute","width":spaceWidth + "px", "height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(spaceWidth/2) + "px", "top":"0px", "margin-top":"0px", "max-width":"none"});
			$(".bg_cont .bg img").css({"position":"absolute","width":spaceWidth + "px", "height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(spaceWidth/2) + "px", "top":"0px", "margin-top":"0px", "max-width":"none"});
			$(".bg_cont .forest .m_bg_img img").css({"position":"absolute","width":spaceWidth + "px", "height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(spaceWidth/2) + "px", "top":"0px", "margin-top":"0px"});
		}

		$(".bg_cont .bg").css({"width":windowWidth + "px", "height": $(window).innerHeight() + "px"});
		
		var interViewSize = 0;
		var interViewMargin = 0;
		if ($("body").hasClass("device"))
		{
			if (($(window).outerHeight() / 3 * 2) < $(window).outerWidth())
			{
				interViewSize = $(window).outerWidth();
				interViewMargin = (($(window).outerHeight() / 3 * 2) - $(window).outerWidth())/2;
				$(".m_vw .bg_cont .interview2 video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview2 .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
			}else{
				interViewSize = $(window).outerHeight() / 3 * 2;
				interViewMargin = -(interViewSize/2);
				$(".m_vw .bg_cont .interview2 video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left":interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview2 .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left":interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
			}
		}else{
			var wrapWidth = $(".wrap").outerWidth();
			var wrapHeight = $(".wrap").outerHeight();
			if ((wrapHeight / 2) < wrapWidth)
			{
				interViewSize = wrapWidth;
				//interViewMargin = ((wrapHeight / 2) - wrapWidth)/2;
				interViewMargin = 0;
				$(".m_vw .bg_cont .interview2 .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview2 video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview2 .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				//$(".m_vw .f3_10 .caption_w").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				//$(".m_vw .f4_1 .caption_w").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
			}else{
				interViewSize = wrapHeight / 2;
				interViewMargin = -(interViewSize/2);
				$(".m_vw .bg_cont .interview2 .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left":interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview2 video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left":interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview2 .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left":interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				//$(".m_vw .f3_10 .caption_w").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				//$(".m_vw .f4_1 .caption_w").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
			}
		}

		$(".m_vw .bg_cont .bg.dot_map img ").css({"width":"","height":"","left":"", "top":"","margin-left":"","margin-top":""});

		$(".graph_obj").css({"height":windowHeight + "px"});
		
		$(".bg_cont .skypanel_wrap .skypanel img").css({"position":"relative", "height":"auto"});

		$(".m_vw .tile_cont").css({"width":windowWidth + "px","height":windowHeight + "px","left":"","margin-left":"", "top":"", "margin-top":""});
		$(".m_vw .tile_cont .tile_cont_inner").css({"width":"100%","height":"100%","left":"","margin-left":"", "top":"", "margin-top":""});
		$(".bg_cont .bg").css({"height":windowHeight + "px"});
		$(".bg_cont").css("margin-top",-(bgNumber * windowHeight) + "px");

		$(".condition_w .obj > img").css({"width":"","height":"","left":"", "margin-left":"", "top":"", "margin-top":""});
		
		if (windowHeight > $(".m_vw .feature").outerHeight())
			$(".feature_cont").css("margin-top",-(featureIndex * windowHeight) + "px");
		else
			$(".feature_cont").css("margin-top",-(featureIndex * $(".m_vw .feature").outerHeight()) + "px");
	}
	
	if ($("body").hasClass("m_mini"))
	{
		var mMenuHeight = $(window).outerHeight() - 166;
		$(".header_wrap .mobile_menu_wrap .menu_middle").css("height",mMenuHeight + "px");
	}else{
		$(".header_wrap .mobile_menu_wrap .menu_middle").css("height","100%");
	}
	
}


function loadPageSize()
{
	console.log("loadPageSize()");
	if ($(window).innerWidth() > 1440 && $(window).innerHeight() < 810)
	{
		$(".indicator_wrap .scroll_img p").css({"transition":"all 0.3s", "opacity":0});
		$(".indicator_wrap .keyboard_img .keyboard_img_txt").css({"transition":"all 0.3s", "opacity":0});
		$(".feature_cont_cover").css({"max-width":"1440px"});
		$(".indicator_wrap .indicator_inner").css({"max-width":"1440px"});
	}else{
		$(".indicator_wrap .scroll_img p").css({"transition":"all 0.3s", "opacity":1});
		$(".indicator_wrap .keyboard_img .keyboard_img_txt").css({"transition":"all 0.3s", "opacity":1});
		$(".feature_cont_cover").css({"max-width":"1920px"});
		$(".indicator_wrap .indicator_inner").css({"max-width":"1920px"});
	}
	
	if ($(window).innerWidth() > 768)
	{
		$("body").addClass("w_px");
		$("body").removeClass("m_vw");
		
		windowWidth = $(window).innerWidth();
		windowHeight = $(window).innerHeight();
		
		if ($(window).innerHeight() < 768 || $(window).innerWidth() < 1024)
		{
			if ($(window).innerHeight() < 768)
			{
				windowHeight = 768;
				$("body").addClass("m_mini");
			}else{
				$("body").removeClass("m_mini");
			}

			if ($(window).innerWidth() < 1024)
				windowWidth = 1024;

			$(".wrap").css({"width":windowWidth + "px","height":windowHeight + "px", "position":"relative", "margin-left":"", "left":""});
		}else{
			$(".wrap").css({"width":"","height":"", "position":"fixed", "margin-left":"", "left":""});
			$("body").removeClass("m_mini");
		}

		if (!$("body").hasClass("m_vw"))
		{
			if ($(window).innerHeight() < 810)
			{
				$("body").addClass("m_size");
				$("body").addClass("m_header");	

				$(".feature_cont_cover").css({"max-width":"1024px"});
				$(".indicator_wrap .indicator_inner").css({"max-width":"1024px"});

				if ($(window).outerWidth() > 1024)
				{
					$(".progress_bg").css({"width":(($(window).outerWidth() - 1024)/2) + "px"});
				}
			}else if ($(window).innerHeight() < 960)
			{
				$("body").removeClass("m_header");
				$("body").addClass("m_size");

				$(".feature_cont_cover").css({"max-width":"1024px"});
				$(".indicator_wrap .indicator_inner").css({"max-width":"1024px"});

				if ($(window).outerWidth() > 1024)
				{
					$(".progress_bg").css({"width":(($(window).outerWidth() - 1024)/2) + "px"});
				}
			}else {
				$("body").removeClass("m_header");
				$("body").removeClass("m_size");

				$(".progress_bg").css({"width":""});

				if ($(window).innerWidth() > 1440 && $(window).innerHeight() < 810)
				{
					$(".feature_cont_cover").css({"max-width":"1440px"});
					$(".indicator_wrap .indicator_inner").css({"max-width":"1440px"});
				}else{
					$(".feature_cont_cover").css({"max-width":"1920px"});
					$(".indicator_wrap .indicator_inner").css({"max-width":"1920px"});
				}
			}
		}else{
			$("body").removeClass("m_header");
			$("body").removeClass("m_size");
			
			$(".progress_bg").css({"width":""});

			if ($(window).innerWidth() > 1440 && $(window).innerHeight() < 810)
			{
				$(".feature_cont_cover").css({"max-width":"1440px"});
				$(".indicator_wrap .indicator_inner").css({"max-width":"1440px"});
			}else{
				$(".feature_cont_cover").css({"max-width":"1920px"});
				$(".indicator_wrap .indicator_inner").css({"max-width":"1920px"});
			}
		}
		
		var coverWidth = $(window).innerWidth();
		if ($(window).innerHeight() / 9 * 16 < $(window).innerWidth())
		{
			var reWidth = $(window).innerWidth();
			var reHeight = $(window).innerWidth() / 16 * 9;

			if (reHeight < 768)
			{
				reWidth = 1365;
				reHeight = 768;
			}

			coverWidth = reWidth;

			$(".loading_wrap").css({"width":"100%","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
			$(".bg_cont .bg img").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":"", "max-width":"none"});
			$(".inter_cont .sky img").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"auto", "margin-top":"0px", "left":"", "margin-left":"", "bottom":"0px", "max-width":"none"});
			$(".inter_cont .panel_half_sf").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"auto", "margin-top":"0px", "left":"", "margin-left":"", "bottom":"0px", "max-width":"none"});

			$(".bg_cont .interview video").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
			$(".inter_cont .movie .earth_movie .earth_in").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
			$(".inter_cont .movie .earth_movie .earth_out").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
			$(".inter_cont .movie .earth_movie .earth_in video").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
			$(".inter_cont .movie .earth_movie .earth_out video").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});

			$(".bg_cont .interview2 .vCover").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
			$(".bg_cont .interview2 video").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
		}else{
			var reWidth = $(window).innerHeight() / 9 * 16;
			
			if (reWidth < 1365)
			{
				reWidth = 1365;
				reHeight = 768;
			}

			coverWidth = reWidth;

			$(".loading_wrap").css({"width":reWidth + "px","height":"100%", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});
			$(".bg_cont .bg img").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":"", "max-width":"none"});
			$(".inter_cont .sky img").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":"", "max-width":"none"});
			$(".inter_cont .panel_half_sf").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":"", "max-width":"none"});

			$(".bg_cont .interview video").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});						
			$(".inter_cont .movie .earth_movie .earth_in").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});						
			$(".inter_cont .movie .earth_movie .earth_out").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});						
			$(".inter_cont .movie .earth_movie .earth_in video").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});						
			$(".inter_cont .movie .earth_movie .earth_out video").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});						

			$(".bg_cont .interview2 .vCover").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});						
			$(".bg_cont .interview2 video").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});						
		}

		if ($(window).innerWidth() > $(window).innerHeight())
		{
			if (coverWidth > $(window).innerWidth())
			{
				$(".bg_cont .lab video").css({"position":"absolute", "width":coverWidth + "px", "height":coverWidth + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(coverWidth/2)+ "px"});
				$(".bg_cont .forest video").css({"position":"absolute", "width":coverWidth + "px", "height":coverWidth + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(coverWidth/2)+ "px"});
			}else{
				$(".bg_cont .lab video").css({"position":"absolute", "width":windowWidth + "px", "height":windowWidth + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(windowWidth/2)+ "px"});
				$(".bg_cont .forest video").css({"position":"absolute", "width":windowWidth + "px", "height":windowWidth + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(windowWidth/2)+ "px"});
			}

			tileWidth = Math.ceil($(window).innerWidth() / 26);
			var reTileSize =tileWidth * 26;
			$(".tile_cont").css({"width":reTileSize + "px", "height":reTileSize + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(reTileSize/2)+ "px"});
			$(".tile_cont .tile_cont_inner").css({"width":reTileSize + "px", "height":reTileSize + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(reTileSize/2)+ "px"});			
		}else{
			if ($(window).innerHeight() > 1024)
			{
				$(".bg_cont .lab video").css({"position":"absolute", "width":windowHeight + "px", "height":windowHeight + "px", "left":"50%", "margin-left":-(windowHeight / 2) + "px", "top":"0px", "margin-top":"0px"});
				$(".bg_cont .forest video").css({"position":"absolute", "width":windowHeight + "px", "height":windowHeight + "px", "left":"50%", "margin-left":-(windowHeight / 2) + "px", "top":"0px", "margin-top":"0px"});

				tileWidth = Math.ceil($(window).innerHeight() / 26);
				var reTileSize = tileWidth * 26;
				$(".tile_cont").css({"width":reTileSize + "px", "height":reTileSize + "px", "left":"50%", "margin-left":-(reTileSize/2) + "px", "top":"0px", "margin-top":"0px"});
				$(".tile_cont .tile_cont_inner").css({"width":reTileSize + "px", "height":reTileSize + "px", "left":"50%", "margin-left":-(reTileSize/2) + "px", "top":"0px", "margin-top":"0px"});
			}else{
				$(".bg_cont .lab video").css({"position":"absolute", "width":"1024px", "height":"1024px", "left":"50%", "margin-left":"-512px", "top":"50%", "margin-top":"-512px"});
				$(".bg_cont .forest video").css({"position":"absolute", "width":"1024px", "height":"1024px", "left":"50%", "margin-left":"-512px", "top":"50%", "margin-top":"-512px"});
			
				tileWidth = Math.ceil(1024 / 26);
				var reTileSize = tileWidth * 26;
				$(".tile_cont").css({"width":reTileSize + "px", "height":reTileSize + "px", "left":"50%", "margin-left":-(reTileSize/2) + "px", "top":"0px", "margin-top":"0px"});
				$(".tile_cont .tile_cont_inner").css({"width":reTileSize + "px", "height":reTileSize + "px", "left":"50%", "margin-left":-(reTileSize/2) + "px", "top":"0px", "margin-top":"0px"});
			}			
		}
		
		$(".tile_cont .tile_cont_inner .tile").css({"width":tileWidth + "px"});

		$(".bg_cont .bg").css({"width":"100%", "height":windowHeight + "px"});
		$(".loading_wrap .loading_bar").css({"position":"fixed"});
	
		
		var bgWidth = windowHeight / 9 * 16 * 2;
		
		$(".bg_cont .bg.space").css({"width":windowWidth + "px", "height": windowHeight + "px"});
		$(".bg_cont .bg.space img").css({"width":bgWidth + "px", "height":windowHeight + "px", "left":"50%", "margin-left":-(bgWidth/2) + "px", "top":"50%", "margin-top":-(windowHeight/2) + "px"});

		$(".bg_cont .skypanel_wrap .skypanel img").css({"position":"relative", "height":""});

		$(".loading_wrap .loading_txt").css({"width":"100%", "left":"", "margin-left":""});
		$(".inter_cont").css({"height":""});
		$(".bg_cont").css({"width":""});
		$(".graph_obj").css({"height":""});

		//$(".inter_cont .sky img").css({"left":"", "margin-left":"", "top":"auto", "margin-top":"", "max-width":"none", "bottom":"0px"});
		$(".bg_cont .bg.dot_map img ").css({"width":"","height":"","left":"", "top":"","margin-left":"","margin-top":""});

		$(".bg_cont .skypanel_wrap .skypanel img").css({"top":"auto", "margin-top":""});
		$(".feature_cont_cover").css({"height":""});
		
		$(".f3_10 .caption_w").css({"position":"absolute","width":"", "height":"","left":"", "margin-left":"", "top":"", "margin-top":""});
		$(".f4_1 .caption_w").css({"position":"absolute","width":"", "height":"","left":"", "margin-left":"", "top":"", "margin-top":""});

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


		if ((windowHeight *1.7778) < windowWidth)
		{
			var imgSizeW = $(window).outerWidth() / 3;
			var imgSizeH = imgSizeW * 1.6875;
			$(".condition_w .obj > img").css({"width":imgSizeW + "px","height":imgSizeH + "px","left":"50%", "margin-left":-(imgSizeW/2) + "px", "top":"50%", "margin-top":-(imgSizeH/2) + "px"});
		}else{
			var imgSize = $(window).outerHeight() * 0.5926;
			$(".condition_w .obj > img").css({"width":"auto","height":"100%","left":"50%", "margin-left":-(imgSize/2) + "px", "top":"0px", "margin-top":"0px"});
		}

		if (featureIndex == 26)
		{
			$(".indicator_wrap .progress_bg").css({"width":"100%"});
		}

		$(".feature_cont").css("margin-top",-(featureIndex * windowHeight) + "px");
	}else{
		$("body").removeClass("w_px");
		$("body").removeClass("m_header");
		$("body").removeClass("m_size");
		$("body").addClass("m_vw");
		
		if ($(window).innerHeight() < 768)
		{
			$("body").addClass("m_mini");
		}else{
			$("body").removeClass("m_mini");
		}
	
		realWidth = $(window).innerWidth();
		windowWidth = $(window).innerWidth();
	
		if (check_allDevice() != "")
		{
			windowHeight = $(window).innerHeight();
			$(".wrap").css({"width":"100%","height":$(window).innerHeight() + "px", "position":"relative", "margin-left":"", "left":""});
			$(".feature").css({"width":realWidth + "px", "height":$(window).innerHeight() + "px", "margin-left":"0px", "max-width":"100%"});
			$(".feature_cont").css({"height":$(window).innerHeight() + "px"});
			$(".feature_cont_cover").css({"height":$(window).innerHeight() + "px"});
		}else{
			if(windowHeight > ($(window).innerWidth() / 9 *16))
			{
				windowHeight = $(window).innerHeight();
			}else{
				windowHeight = $(window).innerWidth() / 9 *16;
			}

			$(".wrap").css({"width":"100%","height":windowHeight + "px", "position":"relative", "margin-left":"", "left":""});
			$(".feature").css({"width":realWidth + "px", "height":windowHeight + "px", "margin-left":"0px", "max-width":"100%"});
			$(".feature_cont").css({"height":windowHeight + "px"});
			$(".feature_cont_cover").css({"height":windowHeight + "px"});
		}

		tileWidth = $(window).innerWidth() * 0.039;
		
		var imgWidth = $(".wrap").outerWidth();
		
		if ((imgWidth / 9 * 16) > $(window).innerHeight())
		{
			var spaceHeight = $(window).innerWidth() / 9 * 16;			
			$(".m_vw .header_wrap .header_bg").css({"position":"absolute","width":imgWidth + "px", "height":spaceHeight + "px", "left":"0px", "margin-left":"0px", "top":($(window).innerHeight() / 2) + "px", "margin-top":-(spaceHeight/2) + "px", "max-width":"none"});
			$(".m_vw .header_wrap .header_bg img").css({"width":imgWidth + "px", "height":spaceHeight + "px"});
			$(".bg_cont .bg.space img").css({"width":imgWidth + "px", "height":spaceHeight + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(spaceHeight/2) + "px"});
			$(".inter_cont .sky img").css({"position":"absolute","width":imgWidth + "px", "height":spaceHeight + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(spaceHeight/2) + "px", "max-width":"none"});
			$(".loading_wrap").css({"position":"absolute","width":imgWidth + "px", "height":spaceHeight + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(spaceHeight/2) + "px"});
			$(".bg_cont .bg img").css({"position":"absolute","width":imgWidth + "px", "height":spaceHeight + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(spaceHeight/2) + "px", "max-width":"none"});
			$(".bg_cont .forest .m_bg_img img").css({"position":"absolute","width":imgWidth + "px", "height":spaceHeight + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(spaceHeight/2) + "px"});
		}else{
			var spaceWidth = $(window).innerHeight() / 16 * 9;
			$(".m_vw .header_wrap .header_bg").css({"position":"absolute","width":spaceWidth + "px", "height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(spaceWidth/2) + "px", "top":"0px", "margin-top":"0px", "max-width":"none"});
			$(".m_vw .header_wrap .header_bg img").css({"width":imgWidth + "px", "height":$(window).innerHeight() + "px"});
			$(".bg_cont .bg.space img").css({"width":spaceWidth + "px", "height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(spaceWidth/2) + "px", "top":"0px", "margin-top":"0px"});
			$(".inter_cont .sky img").css({"position":"absolute","width":spaceWidth + "px", "height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(spaceWidth/2) + "px", "top":"0px", "margin-top":"0px", "max-width":"none"});
			$(".loading_wrap").css({"position":"absolute","width":spaceWidth + "px", "height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(spaceWidth/2) + "px", "top":"0px", "margin-top":"0px"});
			$(".bg_cont .bg img").css({"position":"absolute","width":spaceWidth + "px", "height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(spaceWidth/2) + "px", "top":"0px", "margin-top":"0px", "max-width":"none"});
			$(".bg_cont .forest .m_bg_img img").css({"position":"absolute","width":spaceWidth + "px", "height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(spaceWidth/2) + "px", "top":"0px", "margin-top":"0px"});
		}

		$(".bg_cont .bg.space").css({"width":windowWidth + "px", "height": $(window).innerHeight() + "px"});

		var moveMargin = 0;
		if (windowWidth > windowHeight)
			moveMargin = -(reWidth / 2);
		else
			moveMargin = -(windowHeight / 2);

		$(".inter_cont .movie .earth_movie .earth_in").css({"position":"absolute", "width":reWidth + "px", "height":"100%", "left":"50%", "margin-left":moveMargin + "px","top":"50%", "margin-top":moveMargin+ "px"});
		$(".inter_cont .movie .earth_movie .earth_out").css({"position":"absolute", "width":reWidth + "px", "height":"100%", "left":"50%", "margin-left":moveMargin + "px", "top":"50%", "margin-top":moveMargin+ "px"});
		$(".bg_cont .lab video").css({"position":"absolute", "width":windowWidth + "px", "height":"100%", "left":"50%", "margin-left":moveMargin + "px", "top":"50%", "margin-top":moveMargin+ "px"});
		
		$(".feature").css({"width":realWidth + "px", "height":windowHeight + "px", "margin-left":"0px", "max-width":"100%"});
		$(".feature_cont").css({"height":windowHeight + "px"});

		$(".m_vw .tile_cont").css({"width":windowWidth + "px","height":windowHeight + "px","left":"","margin-left":""});

		$(".bg_cont .bg").css({"width":windowWidth + "px", "height":windowHeight + "px"});

		$(".loading_wrap .loading_txt").css({"width":windowWidth + "px", "left":"50%", "margin-left":-(windowWidth/2) + "px"});
		$(".inter_cont").css({"height":windowHeight + "px"});
		$(".bg_cont").css({"width":$(".wrap").innerWidth() + "px", "overflow":"hidden"});

		$(".bg_cont .skypanel_wrap .skypanel img").css({"position":"relative", "height":"auto"});
		
		var interViewSize = 0;
		var interViewMargin = 0;
		if ($("body").hasClass("device"))
		{
			if (($(window).outerHeight()  / 3 * 2) < $(window).outerWidth())
			{
				interViewSize = $(window).outerWidth();
				interViewMargin = (($(window).outerHeight()  / 3 * 2) - $(window).outerWidth())/2;

				$(".m_vw .bg_cont .interview2 video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview2 .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				//$(".m_vw .f3_10 .caption_w").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				//$(".m_vw .f4_1 .caption_w").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
			}else{
				interViewSize = $(window).outerHeight()  / 3 * 2;
				interViewMargin = -(interViewSize/2);
				$(".m_vw .bg_cont .interview2 video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left":interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview2 .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left":interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				//$(".m_vw .f3_10 .caption_w").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				//$(".m_vw .f4_1 .caption_w").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
			}
		}else{
			var wrapWidth = $(".wrap").outerWidth();
			var wrapHeight = $(".wrap").outerHeight();
			if ((wrapHeight / 2) < wrapWidth)
			{
				interViewSize = wrapWidth;
				//interViewMargin = ((wrapHeight / 2) - wrapWidth)/2;
				interViewMargin = 0;
				$(".m_vw .bg_cont .interview2 video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview2 .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				//$(".m_vw .f3_10 .caption_w").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				//$(".m_vw .f4_1 .caption_w").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
			}else{
				interViewSize = wrapHeight / 2;
				interViewMargin = -(interViewSize/2);
				$(".m_vw .bg_cont .interview2 video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left":interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview2 .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left":interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				//$(".m_vw .f3_10 .caption_w").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				//$(".m_vw .f4_1 .caption_w").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
			}
		}

		$(".m_vw .bg_cont .bg.dot_map img ").css({"width":"","height":"","left":"", "top":"","margin-left":"","margin-top":""});

		$(".graph_obj").css({"height":windowHeight + "px"});

		$(".m_vw .tile_cont").css({"width":"100%","height":"100%","left":"","margin-left":"", "top":"", "margin-top":""});
		$(".m_vw .tile_cont .tile_cont_inner").css({"width":"100%","height":"100%","left":"","margin-left":"", "top":"", "margin-top":""});

		$(".condition_w .obj > img").css({"width":"","height":"","left":"", "margin-left":"", "top":"", "margin-top":""});

		if (windowHeight > $(".m_vw .feature").outerHeight())
			$(".feature_cont").css("margin-top",-(featureIndex * windowHeight) + "px");
		else
			$(".feature_cont").css("margin-top",-(featureIndex * $(".m_vw .feature").outerHeight()) + "px");
	}
	
	
	
	$(".bg_cont").css("margin-top",-(bgNumber * windowHeight) + "px");
	

	if ($("body").hasClass("m_mini"))
	{
		var mMenuHeight = $(window).outerHeight() - 166;
		$(".header_wrap .mobile_menu_wrap .menu_middle").css("height",mMenuHeight + "px");
	}else{
		$(".header_wrap .mobile_menu_wrap .menu_middle").css("height","100%");
	}


	setTimeout(function(){
		$(".loading_wrap").css({"transition":"opacity 0.3s", "opacity":1});
	},100);
}


function videoReSize()
{
	console.log("videoReSize()");
	if ($(window).innerWidth() > 768)
	{
		if ($(window).innerHeight() / 9 * 16 < $(window).innerWidth())
		{
			var reWidth = $(window).innerWidth();
			var reHeight = $(window).innerWidth() / 16 * 9;

			if (reHeight < 768)
			{
				reWidth = 1365;
				reHeight = 768;
			}

			$(".bg_cont .interview video").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
			$(".inter_cont .movie .earth_movie .earth_in").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
			$(".inter_cont .movie .earth_movie .earth_out").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
			$(".inter_cont .movie .earth_movie .earth_in video").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
			$(".inter_cont .movie .earth_movie .earth_out video").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});

			$(".bg_cont .interview2 video").css({"position":"absolute","width":reWidth + "px","height":reHeight + "px", "top":"50%", "margin-top":-(reHeight/2) + "px", "left":"", "margin-left":""});
		}else{
			var reWidth = $(window).innerHeight() / 9 * 16;

			$(".bg_cont .interview video").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});			
			$(".inter_cont .movie .earth_movie .earth_in").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});			
			$(".inter_cont .movie .earth_movie .earth_out").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});			
			$(".inter_cont .movie .earth_movie .earth_in video").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});			
			$(".inter_cont .movie .earth_movie .earth_out video").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});			

			$(".bg_cont .interview2 video").css({"position":"absolute","width":reWidth + "px","height":$(window).innerHeight() + "px", "left":"50%", "margin-left":-(reWidth/2) + "px", "top":"", "margin-top":""});			
		}
		
		if ($(window).innerWidth() > $(window).innerHeight())
		{
			$(".bg_cont .lab video").css({"position":"absolute", "width":windowWidth + "px", "height":windowWidth + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(windowWidth/2)+ "px"});
			$(".bg_cont .forest video").css({"position":"absolute", "width":windowWidth + "px", "height":windowWidth + "px", "left":"0px", "margin-left":"0px", "top":"50%", "margin-top":-(windowWidth/2)+ "px"});
		}else{
			if ($(window).innerHeight() > 1024)
			{
				$(".bg_cont .lab video").css({"position":"absolute", "width":windowHeight + "px", "height":windowHeight + "px", "left":"50%", "margin-left":-(windowHeight / 2) + "px", "top":"0px", "margin-top":"0px"});
				$(".bg_cont .forest video").css({"position":"absolute", "width":windowHeight + "px", "height":windowHeight + "px", "left":"50%", "margin-left":-(windowHeight / 2) + "px", "top":"0px", "margin-top":"0px"});
			}else{
				$(".bg_cont .lab video").css({"position":"absolute", "width":"1024px", "height":"1024px", "left":"50%", "margin-left":"-512px", "top":"50%", "margin-top":"-512px"});
				$(".bg_cont .forest video").css({"position":"absolute", "width":"1024px", "height":"1024px", "left":"50%", "margin-left":"-512px", "top":"50%", "margin-top":"-512px"});
			}
		}
	}else{
		realWidth = $(window).innerWidth();
		windowWidth = $(window).innerWidth();
		var imgWidth = $(".wrap").outerWidth();

		var interViewSize = 0;
		var interViewMargin = 0;
		if ($("body").hasClass("device"))
		{
			if (($(window).outerHeight() / 3 * 2) < $(window).outerWidth())
			{
				interViewSize = $(window).outerWidth();
				interViewMargin = (($(window).outerHeight() / 3 * 2) - $(window).outerWidth())/2;
				$(".m_vw .bg_cont .interview2 video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview2 .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
			}else{
				interViewSize = $(window).outerHeight() / 3 * 2;
				interViewMargin = -(interViewSize/2);
				$(".m_vw .bg_cont .interview2 video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left":interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview2 .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left":interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
			}
		}else{
			var wrapWidth = $(".wrap").outerWidth();
			var wrapHeight = $(".wrap").outerHeight();
			if ((wrapHeight / 2) < wrapWidth)
			{
				interViewSize = wrapWidth;
				interViewMargin = 0;
				$(".m_vw .bg_cont .interview2 video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview2 .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
				$(".m_vw .bg_cont .interview .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"0px", "margin-left":"0px", "top":"0px", "margin-top":interViewMargin + "px"});
			}else{
				interViewSize = wrapHeight / 2;
				interViewMargin = -(interViewSize/2);
				$(".m_vw .bg_cont .interview2 video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left":interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview2 .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left":interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview video.m_video").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
				$(".m_vw .bg_cont .interview .vCover").css({"position":"absolute","width":interViewSize + "px", "height":interViewSize + "px","left":"50%", "margin-left": interViewMargin + "px", "top":"0px", "margin-top":"0px"});
			}
		}
	}
}


function tileMotion_Make()
{
	motionGridTile.Able = false;
	motionGridTile.flipArray = new Array();
	motionGridTile.flipInterval = "";
	motionGridTile.intervalNumber = 0;
	
	setTimeout(function(){
		imageLoader();
	},2000);
}



function progressBar_Motion()
{
	$(".loading_wrap .loading_bar .loading_progress").css({"animation-name":"PROGRESSBAR-ANIMATION", "animation-duration": "2s","animation-fill-mode": "forwards"});
	$(".loading_wrap .loading_bar").css({"animation-name":"PROGRESSBAR_BG-ANIMATION", "animation-duration": "2s","animation-fill-mode": "forwards"});

	setTimeout(function(){
		motionGridTile.Play();
	},2000);
}

var motionGridTile = {
	makeAble : false,
	restartAble : false,
	Able : false, 
	flipArray : new Array(),
	flipInterval : "",
	intervalNumber : 0,
	Make: function()
	{
		if(!this.Able)
		{
			for (var i = 0;i < tileSize ; i++)
			{
				var imgTile = "<div class='tile'><img src='images/panel_cell.jpg' data-media-web='images/panel_cell.jpg' data-media-mobile='images/panel_cell.jpg' alt='Solar Cell background image'></div>";
				$(".tile_cont .tile_cont_inner").append(imgTile);
			}
		}

		for (var i = 0;i < ((tileCol_Cnt-1) + tileRow_Cnt) ; i++ )
		{
			var maxNum = i > tileRow_Cnt ? tileRow_Cnt : i;
			
			this.flipArray[i] = new Array();
			for (var j = 0;j <= maxNum ; j++)
			{
				if((tileCol_Cnt-1) < i && j < i - (tileCol_Cnt-1))
				{
				}else{
					var arrayNum = j * (tileCol_Cnt-1) + i;
					this.flipArray[i][j] = arrayNum;

				}
			}
		}
		makeAble = true;
		$(".tile_cont .tile_cont_inner .tile").css({"width":tileWidth + "px"});
		if ($("body").hasClass("InternetExplorer"))
		{
			introVideo.pause();
		}
		motionGridTile.Play();
	},
	Play :function()
	{
		animationAble = false;
		$(".tile_cont").css({"display":"block","z-index":4});
		if (!makeAble)
		{
			console.log("motionGridTile Tile reMake");
			this.Make();
		}else{
			this.flipInterval = setInterval(function(){
				for (var j = 0; j < motionGridTile.flipArray[motionGridTile.intervalNumber].length; j++ )
				{
					if(motionGridTile.flipArray[motionGridTile.intervalNumber][j] || motionGridTile.intervalNumber == 0)
					{
						var opacitySpeed = (Math.floor((Math.random() * 10)))/15;
						var delaySpeed = (Math.floor((Math.random() * 5)))/20;
						if ($("body").hasClass("InternetExplorer"))
							$(".tile_cont .tile_cont_inner .tile").eq(motionGridTile.flipArray[motionGridTile.intervalNumber][j]).css({"opacity":0}).stop().delay(delaySpeed*1000).animate({"opacity":1},(opacitySpeed*1000));
						else
							$(".tile_cont .tile_cont_inner .tile").eq(motionGridTile.flipArray[motionGridTile.intervalNumber][j]).css({"transition":"opacity " + opacitySpeed + "s " + delaySpeed + "s", "-webkit-transition":"opacity " + opacitySpeed + "s " + delaySpeed + "s", "opacity":"1"});
					}
				}
				++motionGridTile.intervalNumber;
				if(motionGridTile.intervalNumber == motionGridTile.flipArray.length)
				{
					clearInterval(motionGridTile.flipInterval);
					motionGridTile.intervalNumber = 0;
					
					sunPlear_Able = false;
					
					setTimeout(function(){
						//$(".loading_wrap").empty();
						$(".loading_wrap").css("display","none");

						introVideo.pause();
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
						if (motionGridTile.restartAble)
						{
							motionGridTile.restartAble = false;
							restartReset();
						}
						
						motionGridTile.rePlay();
						bgNumber = 0;
						featureIndex = 0;

						$(".indicator_wrap .nav li a").removeClass("active");
						$(".indicator_wrap .nav li").eq(0).find("a").addClass("active");
					},500);
				}
			},10);
		}
	},
	rePlay :function()
	{
		$(".tile_cont").css("display","block");
		$(".inter_cont").css("display","block");
		$(".tile_cont .tile_cont_inner .tile").css({"transition":"","-webkit-transition":"","opacity":1});
		setTimeout(function(){
			$(".tile_cont .tile_cont_inner .tile").css({"transition":"opacity 1s","-webkit-transition":"opacity 1s","opacity":0});
		},100);
		setTimeout(function(){
			pageTracking("");

			$(".tile_cont").css("display","none");
			textLightMotion();					
			naviAnimation();
			$(".indicator_wrap .scroll_img").css({"transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","opacity":1});
			$(".indicator_wrap .keyboard_img .keyboard_img_txt").css({"transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","opacity":1});
			pageLoading = true;
		},1100);
	},
	Show :function()
	{
		motionGridTile.intervalNumber = 0;
		animationAble = false;
		$(".tile_cont").css("display","block");
		this.flipInterval = setInterval(function(){
			for (var j = 0; j < motionGridTile.flipArray[motionGridTile.intervalNumber].length; j++ )
			{
				if(motionGridTile.flipArray[motionGridTile.intervalNumber][j] || motionGridTile.intervalNumber == 0)
				{
					var opacitySpeed = (Math.floor((Math.random() * 10)))/10;
					var delaySpeed = (Math.floor((Math.random() * 5)))/10;
					$(".tile_cont .tile_cont_inner .tile").eq(motionGridTile.flipArray[motionGridTile.intervalNumber][j]).css({"transition":"opacity " + opacitySpeed + "s " + delaySpeed + "s", "-webkit-transition":"opacity " + opacitySpeed + "s " + delaySpeed + "s", "opacity":"1"});
				}
			}
			++motionGridTile.intervalNumber;
			if(motionGridTile.intervalNumber == motionGridTile.flipArray.length)
			{
				clearInterval(motionGridTile.flipInterval);
				motionGridTile.intervalNumber = 0;
				setTimeout(function(){
					animationAble = true;
				},1000);
			}
		},1);
	},
	Hide :function()
	{
		motionGridTile.intervalNumber = 0;

		$(".tile_cont").css("display","block");
		$(".inter_cont").css("display","block");
		this.flipInterval = setInterval(function(){
			for (var j = 0; j < motionGridTile.flipArray[motionGridTile.intervalNumber].length; j++ )
			{
				if(motionGridTile.flipArray[motionGridTile.intervalNumber][j] || motionGridTile.intervalNumber == 0)
				{
					var opacitySpeed = (Math.floor((Math.random() * 10)))/10;
					var delaySpeed = (Math.floor((Math.random() * 5)))/10;
					$(".tile_cont .tile_cont_inner .tile").eq(motionGridTile.flipArray[motionGridTile.intervalNumber][j]).css({"transition":"opacity " + opacitySpeed + "s " + delaySpeed + "s", "-webkit-transition":"opacity " + opacitySpeed + "s " + delaySpeed + "s", "opacity":"0"});
				}
			}
			++motionGridTile.intervalNumber;
			if(motionGridTile.intervalNumber == motionGridTile.flipArray.length)
			{
				clearInterval(motionGridTile.flipInterval);
				setTimeout(function(){
					animationAble = true;
					$(".tile_cont").css("display","none");
				},1000);	
			}
		},1);
	}
}

function naviAnimation()
{
	$(".indicator_wrap").css({"transition":"all 0.4s","-webkit-transition":"all 0.4s","opacity":1});
	$(".indicator_wrap .nav li").css({"transition":"all 0.4s 0.4s","-webkit-transition":"all 0.4s 0.4s","transform":"translate(0px,0px)","-webkit-transform":"translate(0px,0px)","opacity":1});

	$(".indicator_wrap .progress_wrap .progress_bar").css({"transition":"all 0.4s 0.6s","-webkit-transition":"all 0.4s 0.6s","width":"10%", "background":""});
	$(".indicator_wrap .scroll_img").css({"transition":"all 0.4s 0.4s","-webkit-transition":"all 0.4s 0.4s","opacity":1});
	$(".indicator_wrap .keyboard_img").css({"transition":"all 0.4s 0.4s","-webkit-transition":"all 0.4s 0.4s","opacity":1});
	setTimeout(function(){
		pageInteraction_Able = true;
	},600);

	number00_0 = setTimeout(function(){
		$(".f1_1 .txt").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "transform":"translate(0px,0px)", "-webkit-transform":"translate(0px,0px)"});
		$(".f1_1 .txt .title").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "transform":"translate(0px,0px)", "-webkit-transform":"translate(0px,0px)", "opacity":1});
		$(".f1_1 .txt .desc").css({"transition":"all 0.5s 0.2s", "-webkit-transition":"all 0.5s 0.2s", "opacity":1,"display":"block"});
	},600);
}

var skipMenu = false;
var skipIng = false;
function handle(delta) {
	if (autoPass_Able)
	{
		if (Math.abs(delta) > 4)
		{
			if (!skipMenu)
			{
				skipIng = true;
				if (delta < 0)
				{
					if (nowShowMenu < 4)
					{
						pageInteraction_Able = true;
						nowShowMenu = nowShowMenu + 1;
						$(".indicator_wrap .nav li").eq(nowShowMenu).find("a").trigger("click");
					}	
				}else{
					if (nowShowMenu >= 0)
					{
						pageInteraction_Able = true;
						if (startPosition && nowShowMenu > 0)
						{
							nowShowMenu = nowShowMenu - 1;
						}
						
						$(".indicator_wrap .nav li").eq(nowShowMenu).find("a").trigger("click");
					}	
				}
				setTimeout(function(){
					skipIng = false;
				}, 1500);
			}		
		}else{
			if(pageInteraction_Able)
			{
				if (delta > 0)
				{
					delta = 1;
				}else{
					delta = -1;
				}

				fullDelta -= delta;
				if(fullDelta < 0)
					 fullDelta = 0;

				if (fullDelta > (baseDelta * 26))
					fullDelta = (baseDelta * 26);
				
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
			}
		}
	}else{
		if(pageInteraction_Able)
		{
			if (delta > 0)
			{
				delta = 1;
			}else{
				delta = -1;
			}
			console.log("move fullDelta : " + fullDelta);

			fullDelta -= delta;
			if(fullDelta < 0)
				 fullDelta = 0;

			if (fullDelta > (baseDelta * 26))
				fullDelta = (baseDelta * 26);
			
			pageIndex = parseInt(fullDelta/baseDelta);

			
			oldShowPage = fullDelta + delta;
			if(pageIndex != oldPageIndex)
			{
				pageInteraction_Able = false;
				oldPageIndex = pageIndex;
				if ($("body").hasClass("m_vw"))
					mShowPage(pageIndex);
				else
					showPage(pageIndex);
			}
		}
	}
}

function m_handle(delta)
{
	if(pageInteraction_Able)
	{
		if (delta > 0)
		{
			delta = 1;
		}else{
			delta = -1;
		}

		if ($(".wrap_w").innerHeight() < $(".wrap").innerHeight() && document.getElementById('wrap_m').scrollTop < ($(".wrap").innerHeight() - $(".wrap_w").innerHeight() - 10))
		{
			if (document.getElementById('wrap_m').scrollTop == 0 && delta == 1)
			{
				fullDelta -= delta;
				if(fullDelta < 0)
					 fullDelta = 0;

				if (fullDelta > (baseDelta * 28))
					fullDelta = (baseDelta * 28);
				
				pageIndex = parseInt(fullDelta/baseDelta);
				oldShowPage = fullDelta + delta;
				if(pageIndex != oldPageIndex)
				{
					pageInteraction_Able = false;
					oldPageIndex = pageIndex;
					mShowPage(pageIndex);
				}
			}
		}else{
			fullDelta -= delta;
			if(fullDelta < 0)
				 fullDelta = 0;

			if (fullDelta > (baseDelta * 28))
				fullDelta = (baseDelta * 28);
			
			pageIndex = parseInt(fullDelta/baseDelta);
			oldShowPage = fullDelta + delta;
			if(pageIndex != oldPageIndex)
			{
				pageInteraction_Able = false;
				oldPageIndex = pageIndex;
				mShowPage(pageIndex);
			}
		}
	}
}
var oldPageIndex = 0;
var pageIndex = 0;
var fullDelta = 0;
var pageInteraction_Able = false;
function wheel(event){
	if (scrollIng)
	{
		return false;
	}
	if (!skipIng)
	{	
		var delta = 0;
		if (!event) event = window.event;
		if (event.wheelDelta) {
			delta = event.wheelDelta/120;
		
		if (window.opera) 
			delta = -delta;
		} else if (event.detail) 
			delta = -event.detail/baseDelta;
		
		if ($("body").hasClass("m_vw"))
		{
			if (delta) 
				m_handle(delta);
		}else{
			if (delta) 
				handle(delta);
		}		
	}
	
}

function textLightMotion()
{
	$(".f1_1 .obj_wrap .obj").eq(0).css({"animation-name":"TEXTLIGHTING-ANIMATION", "animation-duration": "5s","animation-iteration-count":"infinite","animation-direction":"normal", "animation-delay":"3s"});
	setTimeout(function(){
		$(".f1_1 .obj_wrap .obj").eq(1).css({"animation-name":"TEXTLIGHTING-ANIMATION", "animation-duration": "5s","animation-iteration-count":"infinite","animation-direction":"normal", "animation-delay":"3s"});
	},500);
}



/* Initialization code. */
if (window.addEventListener)
	window.addEventListener('DOMMouseScroll', wheel);
window.onmousewheel = document.onmousewheel = wheel;

document.onmousemove = handleMouseMove;
var pageX = 0;
function handleMouseMove(event) {
	event = event || window.event;
	pageX = event.pageX;
	setTimeout(function(){
		var movePoint_X01 = (pageX - (windowWidth / 2)) / 20;
		var movePoint_X02 = (pageX - (windowWidth / 2)) / 16;
		var movePoint_X03 = (pageX - (windowWidth / 2)) / 14;
		var movePoint_X04 = (pageX - (windowWidth / 2)) / 10;

		$(".bg_cont .bg.space img").eq(1).css({"transition":"transform 4s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "-webkit-transition":"transform 4s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "transform":"translate(" + movePoint_X01 + "px, 0px)", "-webkit-transform":"translate(" + movePoint_X01 + "px, 0px)"});
		$(".bg_cont .bg.space img").eq(2).css({"transition":"transform 3.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "-webkit-transition":"transform 3.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "transform":"translate(" + movePoint_X02 + "px, 0px)", "-webkit-transform":"translate(" + movePoint_X02 + "px, 0px)"});
		$(".bg_cont .bg.space img").eq(3).css({"transition":"transform 3s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "-webkit-transition":"transform 3s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "transform":"translate(" + movePoint_X03 + "px, 0px)", "-webkit-transform":"translate(" + movePoint_X03 + "px, 0px)"});
		$(".bg_cont .bg.space img").eq(4).css({"transition":"transform 2.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "-webkit-transition":"transform 2.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)", "transform":"translate(" + movePoint_X04 + "px, 0px)", "-webkit-transform":"translate(" + movePoint_X04 + "px, 0px)"});
	},100);
}

var longPress = "";
var longPress_Able = false;
var keyDown_Able = false;
$(function() {
	$(window).keydown(function(e){
		if (autoPass_Able)
		{		
			if(!keyDown_Able)
			{
				if (longPress == "")
				{
					longPress = setTimeout(function(){
						longPress_Able = true;
					},1000);
				}
				
				switch (e.keyCode)
				{
					case 37: /* Left */
					{
						if (longPress_Able)
						{
							longPress_Able = false;
							keyDown_Able = true;
							if (nowShowMenu >= 0)
							{
								pageInteraction_Able = true;
								if (startPosition && nowShowMenu > 0)
								{
									nowShowMenu = nowShowMenu - 1;
								}
								$(".indicator_wrap .nav li").eq(nowShowMenu).find("a").trigger("click");
							}	
						}else{
							if(pageInteraction_Able)
							{
								fullDelta -= baseDelta;
								if(fullDelta < 0)
									 fullDelta = 0;
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
							}
						}

						break;
					}
					case 39: /* Right */
					{
						if (longPress_Able)
						{
							longPress_Able = false;
							keyDown_Able = true;
							if (nowShowMenu < 4)
							{
								pageInteraction_Able = true;
								nowShowMenu = nowShowMenu + 1;
								$(".indicator_wrap .nav li").eq(nowShowMenu).find("a").trigger("click");
							}

							setTimeout(function(){
								skipIng = false;
							}, 1500);
						}else{
							if(pageInteraction_Able)
							{
								fullDelta += baseDelta;
								if(fullDelta < 0)
									 fullDelta = 0;
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
							}
						}

						break;
					}
					case 9:
					{
						e.preventDefault();
						break;
					}
				}
			}
		}else{
			if(!keyDown_Able)
			{
				switch (e.keyCode)
				{
					case 37: /* Left */
					{
						if(pageInteraction_Able)
						{
							fullDelta -= baseDelta;
							if(fullDelta < 0)
								 fullDelta = 0;
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
						}

						break;
					}
					case 39: /* Right */
					{
						
						if(pageInteraction_Able)
						{
							fullDelta += baseDelta;
							if(fullDelta < 0)
								 fullDelta = 0;
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
						}

						break;
					}
					case 9:
					{
						e.preventDefault();
						break;
					}
				}
			}
		}
		

		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			e.preventDefault();
		};

		if((e.keyCode === 9 && !e.shiftKey)){ // tab
			e.preventDefault();
		}
	});	

	$(window).keyup(function(e){
		longPress_Able = false;
		clearTimeout(longPress);	
		longPress = "";
		keyDown_Able = false;
	});
});

var earthVideo_In_Able = false;
var earthVideo_Out_Able = false;

var audioControl = "";
var audioVolume = 1;
function audioSound(t)
{
	if (audioControl != "")
		clearInterval(audioControl);

	if (t == "min")
	{
		if (audioVolume > 0.2)
		{
			audioControl = setInterval(function()
			{
				if (audioVolume > 0.10)
				{
					audioVolume -= 0.05;
					pageBGM.volume = audioVolume;
				}else{
					clearInterval(audioControl);
					audioControl = "";
				}
			},100);
		}
	}
	else{
		if (audioVolume < 1)
		{
			audioControl = setInterval(function()
			{
				if (audioVolume < 0.5)
				{
					audioVolume += 0.05;
					pageBGM.volume = audioVolume;
				}else{
					clearInterval(audioControl);
					audioControl = "";
				}
			},100);
		}
	}
}

function pageColor(idx)
{
	var newColor = "";
	switch (idx)
	{
		case 0:
		{
			newColor = "#486d8a";
			break;
		}
		case 1:
		{
			newColor = "#000000";
			break;
		}
		case 2:
		{
			newColor = "#685f42";
			break;
		}
		case 3:
		{
			newColor = "#474246";
			break;
		}
		case 4:
		{
			newColor = "#0f111d";
			break;
		}
		case 5:
		{
			newColor = "#464e45";
			break;
		}
		case 6:
		{
			newColor = "#0f111d";
			break;
		}
		case 7:
		{
			newColor = "#808a8c";
			break;
		}
		case 8:
		{
			newColor = "#2d7eb6";
			break;
		}
		case 9:
		{
			newColor = "#FFFFFF";
			break;
		}
		case 10:
		{
			newColor = "#000000";
			break;
		}
	}

	$("body").css({"transition":"background-color 1s", "background-color":newColor});
}

function graphLine()
{
	graphWidth = 1920;
	if (!$("body").hasClass("m_vw"))
	{
		var headerHeight = $(".header_wrap").innerHeight();
		var txtHeight = $(".f1_2 .txt .desc .valign").innerHeight();
		var pHeight = $(".f1_2 .txt .desc .middle p").innerHeight();		
		var txtPosition = (((txtHeight / 2) - (pHeight/2)) / 2);
		
		graphWidth = windowWidth;
		var line01_row = (graphWidth / 2) - 360;
		if (windowWidth > 1440)
		{
			line01_row = (graphWidth / 2) - 360;
		}else if (windowWidth > 1024)
		{
			line01_row = (graphWidth / 2) - 295;
		}else{
			line01_row = (graphWidth / 2) - 296;
		}
		

		var line01_col = (windowHeight / 4);
		if (windowWidth > 1440)
		{
			line01_col = (windowHeight / 4) + 200;
		}else if (windowWidth > 1024)
		{
			line01_col = (windowHeight / 4) + 100;
		}else{
			line01_col = (windowHeight / 4) - 100;
		}
		
		if ($("body").hasClass("m_header") || $("body").hasClass("m_size"))
		{
			line01_row = (graphWidth / 2) - 296;
			if ($("body").hasClass("m_header"))
			{
				line01_col = (windowHeight / 4) - 100;
			}else{
				line01_col = (windowHeight / 4);
			}
			
		}

		var line01_Width = Math.sqrt(Math.pow(line01_row,2) + Math.pow(line01_col,2));
		var line01_A = (Math.atan(line01_row/line01_col) / Math.PI * 180) - 90;
		var line01_left = line01_row - line01_Width;
		var line01_bottom = line01_col - line01_Width+100;
			
		
		if (windowWidth > 1440)
		{
			line01_bottom = line01_col - line01_Width - 100;
		}else if (windowWidth > 1024)
		{
			line01_bottom = line01_col - line01_Width;
		}else{
			line01_bottom = line01_col - line01_Width + 100;
		}
		


		if ($("body").hasClass("m_header") || $("body").hasClass("m_size"))
		{
			line01_bottom = line01_col - line01_Width + 100;
		}


		var line01_Text = line01_bottom + line01_Width - $(".graph_obj .obj_graph .val1").innerHeight()+3;
		
		var line02_row = 802;
		if (windowWidth > 1440)
		{
			line02_row = 802;
		}else if (windowWidth > 1024)
		{
			line02_row = 596;
		}else{
			line02_row = 592;
		}

		
		if ($("body").hasClass("m_header") || $("body").hasClass("m_size"))
		{
			line02_row = 592;
		}


		var line02_col = (windowHeight - txtPosition - headerHeight + ($(".graph_obj .obj_graph .val2").innerHeight()/2)) - (line01_bottom + line01_Width);
		
		if ($("body").hasClass("m_header"))
			line02_col = line02_col - 50;


		var line02_Width = Math.sqrt(Math.pow(line02_row,2) + Math.pow(line02_col,2));
		var line02_A = (Math.atan(line02_row/line02_col) / Math.PI * 180) - 90;
		var line02_left = (graphWidth / 2) + 443 - line02_Width;

		if (windowWidth > 1440)
		{
			line02_left = (graphWidth / 2) + 443 - line02_Width;
		}else if (windowWidth > 1024)
		{
			line02_left = (graphWidth / 2) + 299 - line02_Width;
		}else{
			line02_left = (graphWidth / 2) + 294 - line02_Width;
		}


		if ($("body").hasClass("m_header") || $("body").hasClass("m_size"))
		{
			line02_left = (graphWidth / 2) + 294 - line02_Width;
		}

		var line02_bottom = line02_col - line02_Width + line01_Width + line01_bottom;
		var line02_Text = line02_bottom + line02_Width - $(".graph_obj .obj_graph .val2").innerHeight()+3;

		var line03_row = graphWidth;
		var line03_col = (windowHeight - txtPosition - headerHeight + ($(".graph_obj .obj_graph .val3").innerHeight()/2) + windowHeight) - (line02_bottom + line02_Width);
		
		if ($("body").hasClass("m_header"))
			line03_col = line03_col - 50;

		var line03_Width = Math.sqrt(Math.pow(line03_row,2) + Math.pow(line03_col,2));
		var line03_A = (Math.atan(line03_row/line03_col) / Math.PI * 180) - 90;
		var line03_left = graphWidth + (graphWidth/2) + 443 - line03_Width;
		if (windowWidth > 1440)
		{
			line03_left = graphWidth + (graphWidth / 2) + 443 - line03_Width;
		}else if (windowWidth > 1024)
		{
			line03_left = graphWidth + (graphWidth / 2) + 297 - line03_Width;
		}else{
			line03_left = graphWidth + (graphWidth / 2) + 294 - line03_Width;
		}

		
		if ($("body").hasClass("m_header") || $("body").hasClass("m_size"))
		{
			line03_left = graphWidth + (graphWidth / 2) + 294 - line03_Width;
		}

		var line03_bottom = line03_col - line03_Width + line01_Width + line02_Width + line02_col - line02_Width + line01_bottom;
		var line03_Text = line03_bottom + line03_Width - $(".graph_obj .obj_graph .val3").innerHeight()+3;
		

		$(".graph_obj .obj_graph .line1").css({"width":line01_Width + "px", "height":line01_Width + "px", "transform":"rotate(" + line01_A + "deg)", "-webkit-transform":"rotate(" + line01_A + "deg)", "transform-origin":"right top", "margin-left":line01_left + "px", "margin-bottom":line01_bottom + "px", "top":"auto", "left": "0px", "bottom":"0px"});

		$(".graph_obj .obj_graph .val1").css({"top":"auto", "bottom":"0px", "margin-bottom":line01_Text + "px", "margin-left":""});
		$(".graph_obj .obj_graph .line2").css({"width":line02_Width + "px", "height":line02_Width + "px", "transform":"rotate(" + line02_A + "deg)", "-webkit-transform":"rotate(" + line02_A + "deg)", "transform-origin":"right top", "margin-left":line02_left + "px", "margin-bottom":line02_bottom + "px", "top":"auto", "left":"0px", "bottom":"0px"});
		$(".graph_obj .obj_graph .val2").css({"top":"auto", "bottom":"0px", "margin-bottom":line02_Text + "px", "margin-left":""});
		$(".graph_obj .obj_graph .line3").css({"width":line03_Width + "px", "height":line03_Width + "px", "transform":"rotate(" + line03_A + "deg)", "-webkit-transform":"rotate(" + line03_A + "deg)", "transform-origin":"right top", "margin-left":line03_left + "px", "margin-bottom":line03_bottom + "px", "top":"auto", "left":"0px", "bottom":"0px"});
		$(".graph_obj .obj_graph .val3").css({"top":"auto", "bottom":"0px", "margin-bottom":line03_Text + "px", "margin-left":""});
	}else
	{
		var graphWidth = $(".wrap").innerWidth();
		var graphHeight = $(".graph_obj .obj_graph").outerHeight() / 2;

		var headerHeight = $(".header_wrap").innerHeight();
		var txtHeight = $(".f1_2 .txt .desc .valign").innerHeight();
		var pHeight = $(".f1_2 .txt .desc .middle p").innerHeight();
		
		var txtPosition = (((txtHeight / 2) - (pHeight/2)) / 2);
		
		var line01_row = 188 / 1080 * graphWidth;
		var line01_col = 170 / 1920 * graphHeight;
		var line01_Width = Math.sqrt(Math.pow(line01_row,2) + Math.pow(line01_col,2));
		var line01_A = (Math.atan(line01_row/line01_col) / Math.PI * 180) - 90;
		var line01_left = (graphWidth * 0.1741) - line01_Width;
		
		var line01_bottom = line01_col - line01_Width + (graphHeight * (583 / 1920));
		if ($("body").hasClass("device"))
			line01_bottom = line01_col - line01_Width + (graphHeight * (290 / 1920));
		
		var line01_Text = line01_bottom + line01_Width - $(".graph_obj .obj_graph .val1").innerHeight()+3;
		
		var line02_row = 704 / 1080 * graphWidth;
		var line02_col = 549 / 1080 * graphWidth;
		var line02_Width = Math.sqrt(Math.pow(line02_row,2) + Math.pow(line02_col,2));
		var line02_A = (Math.atan(line02_row/line02_col) / Math.PI * 180) - 90;
		var line02_left = (graphWidth * 0.8259) - line02_Width;
		var line02_bottom = line02_col - line02_Width + line01_Width + line01_bottom;
		var line02_Text = line02_bottom + line02_Width - $(".graph_obj .obj_graph .val2").innerHeight()+3;

		var line03_row = 1082 / 1080 * graphWidth;
		
		var line03_col = graphHeight;

		var line03_Width = Math.sqrt(Math.pow(line03_row,2) + Math.pow(line03_col,2));
		var line03_A = (Math.atan(line03_row/line03_col) / Math.PI * 180) - 90;
		var line03_left = (graphWidth * 1.8259) - line03_Width;
		var line03_bottom = line03_col - line03_Width + line01_Width + line02_Width + line02_col - line02_Width + line01_bottom;
		var line03_Text = line03_bottom + line03_Width - $(".graph_obj .obj_graph .val3").innerHeight()+3;

		$(".graph_obj .obj_graph .line1").css({"width":line01_Width + "px", "height":line01_Width + "px", "transform":"rotate(" + line01_A + "deg)", "-webkit-transform":"rotate(" + line01_A + "deg)", "transform-origin":"right top", "margin-left":line01_left + "px", "margin-bottom":line01_bottom + "px", "top":"auto", "left": "0px", "bottom":"0px"});
		
		
		if ($("body").hasClass("pc"))
		{
			var graphVal1_Left = graphWidth * -0.8958;
			var graphVal2_Left = graphWidth * -0.2459;
			var graphVal3_Left = graphWidth * 0.7136;
			$(".graph_obj .obj_graph .val1").css({"top":"auto", "bottom":"0px", "margin-bottom":line01_Text + "px", "margin-left":graphVal1_Left + "px"});
			$(".graph_obj .obj_graph .val2").css({"top":"auto", "bottom":"0px", "margin-bottom":line02_Text + "px", "margin-left":graphVal2_Left + "px"});
			$(".graph_obj .obj_graph .val3").css({"top":"auto", "bottom":"0px", "margin-bottom":line03_Text + "px", "margin-left":graphVal3_Left + "px"});
		}else{
			$(".graph_obj .obj_graph .val1").css({"top":"auto", "bottom":"0px", "margin-bottom":line01_Text + "px"});
			$(".graph_obj .obj_graph .val2").css({"top":"auto", "bottom":"0px", "margin-bottom":line02_Text + "px"});
			$(".graph_obj .obj_graph .val3").css({"top":"auto", "bottom":"0px", "margin-bottom":line03_Text + "px"});
		}		
		$(".graph_obj .obj_graph .line2").css({"width":line02_Width + "px", "height":line02_Width + "px", "transform":"rotate(" + line02_A + "deg)", "-webkit-transform":"rotate(" + line02_A + "deg)", "transform-origin":"right top", "margin-left":line02_left + "px", "margin-bottom":line02_bottom + "px", "top":"auto", "left":"0px", "bottom":"0px"});
		$(".graph_obj .obj_graph .line3").css({"width":line03_Width + "px", "height":line03_Width + "px", "transform":"rotate(" + line03_A + "deg)", "-webkit-transform":"rotate(" + line03_A + "deg)", "transform-origin":"right top", "margin-left":line03_left + "px", "margin-bottom":line03_bottom + "px", "top":"auto", "left":"0px", "bottom":"0px"});
		
	}	
}

$(function(){
	if (check_allDevice() != "")
	{
		deviceSwipe();
	}

});


function updateOrientation()
{
	switch(window.orientation)
    {
        case 0:
			$("body > div").css({"transform":"rotate(0deg)"});
			$("body > div").css({"display":"block"});
			$(".rotate_img").css({"display":"none"});
			init();
            break;
        case -90:
            event.preventDefault();
			$("body > div").css({"transform":"rotate(90deg)"});
			$("body > div").css({"display":"none"});
			$(".rotate_img").css({"display":"block","transform":"rotate(0deg)"});
            break;
        case 90:
            event.preventDefault();
			$("body > div").css({"transform":"rotate(-90deg)"});
			$("body > div").css({"display":"none"});
			$(".rotate_img").css({"display":"block","transform":"rotate(0deg)"});
            break;
        case 180:
			$("body > div").css({"transform":"rotate(0deg)"});
			$("body > div").css({"display":"block"});
			$(".rotate_img").css({"display":"none"});
			init();
            break;
    }
}