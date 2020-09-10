var imageTotalCnt = 0;
var imageCnt = 0;
var videoCnt = 0;
var loadAble = false;
var pageLoading = false;
function imageLoader()
{
	imageTotalCnt = $('img.responsiveImg').length;
	console.log("imageTotalCnt : " + imageTotalCnt);
	
	var imgData = imageData();
	$("img.responsiveImg").each(function(){
		//var dataSrc = $(this).attr("data-src");
		var dataSrc = $(this).attr('data-media-' + imgData);
		var newImage = new Image();
		var nowImg = $(this);
		newImage.src = dataSrc;
		//console.log("dataSrc : " + dataSrc);
		newImage.onload = function(){
			++imageCnt;
			//nowImg.attr("src",newImage.src);
			if (imageCnt >= imageTotalCnt) {
				 loadAble = true;
                // now all images are loaded.
                //console.log("all images are loaded. Click OK to view.");
				$(".container").css("opacity",1);
				
				if ($("body").hasClass("m_vw"))
				{
					$(".indicator_wrap .progress_wrap .progress_bar").css({"width":"100%"});
				}else{
					$(".loading_wrap .loading_bar .loading_progress").css({"width":"100%"});
				}

				if (!$("body").hasClass("device"))
				{
					loadSuccess();
				}else{
					setTimeout(loadSuccess,1000);
				}
				
            }else{
				//console.log("now Loading : " + imageCnt + " // " + (imageCnt / imageTotalCnt * 100) + "%");
				if ($("body").hasClass("m_vw"))
				{
					$(".indicator_wrap .progress_wrap .progress_bar").css({"width":(imageCnt / imageTotalCnt * 100) + "%"});
				}else{
					$(".loading_wrap .loading_bar .loading_progress").css({"width":(imageCnt / imageTotalCnt * 100) + "%"});
				}
			}
		}
	});
	
	if (!$("body").hasClass("device"))
	{
		setTimeout(function(){
			if (!loadAble)
			{
				loadAble = true;
				$(".loading_wrap .loading_bar .loading_progress").css({"width":"100%"});
				console.log("loaded fail - imageCnt : " + imageCnt);
				$(".container").css("opacity",1);
				loadSuccess();
			}		
		},2000);
	}else{
		setTimeout(function(){
			if (!loadAble)
			{
				loadAble = true;
				$(".loading_wrap .loading_bar .loading_progress").css({"width":"100%"});
				console.log("loaded fail - imageCnt : " + imageCnt);
				$(".container").css("opacity",1);
				loadSuccess();
			}		
		},4000);
	}
}

function loadSuccess()
{
	console.log("loadSuccess");
	
	if (!$("body").hasClass("m_vw"))
	{
		console.log("tile MAKE");
		motionGridTile.Make();
	}else{
		if (!$("body").hasClass("device"))
		{
			for (var i = 0;i < 676 ; i++)
			{
				var imgTile = "<div class='tile'><img src='images/panel_cell.jpg' data-media-web='images/panel_cell.jpg' data-media-mobile='images/panel_cell.jpg'></div>";
				$(".tile_cont .tile_cont_inner").append(imgTile);
			}
		}

		$(".loading_wrap .loading_bar .loading_progress").animate({"opacity":0},300,function(){
			$(".indicator_wrap .progress_wrap .progress_bar").css({"background":"#ffb400","width":"0%"});
		});

		$(".loading_wrap").animate({"opacity":0},500,function(){
			pageTracking("");

			$(".indicator_wrap .progress_wrap .progress_bar").css({"transition":"all 0.4s 0.2s","-webkit-transition":"all 0.4s 0.2s","width":"10%"});

			$(".tile_cont").css("display","none");

			$(this).css("display","none");
			pageInteraction_Able = true;

			$(".f1_1 .txt").css({"transition":"all 0.5s", "-webkit-transition":"all 0.5s", "transform":"translate(0px,0px)", "-webkit-transform":"translate(0px,0px)"});
			$(".f1_1 .txt .desc").css({"transition":"all 0.5s 0.2s", "-webkit-transition":"all 0.5s 0.2s", "opacity":1,"display":"block"});

			$(".indicator_wrap").css({"transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","opacity":1});
			$(".indicator_wrap .scroll_img").css({"transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","opacity":1});
			$(".indicator_wrap .keyboard_img .keyboard_img_txt").css({"transition":"opacity 0.5s","-webkit-transition":"opacity 0.5s","opacity":1});
			pageLoading = true;
		});
	}

	pageResizing();
	graphLine();
	pageColor(1);
}

function imageData()
{
	if ($(window).outerWidth() > 768)
	{
		return "web";
	}else{
		return "mobile";
	}
}