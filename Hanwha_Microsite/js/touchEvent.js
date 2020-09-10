var swipeMoving = 0;
var swipeMove = 0;
var swipeStPosition = 0;
var swipeEdPosition = 0;

var devicePage_up = 0;
var devicePage_down = 0;

var mF3_11 = 0;
var txtSwipeNum = 0;

function deviceSwipe()
{
	var startPosition = 0;
	var endPosition = 0;
	var movePosition = 0;
	$(document).bind('touchstart', function(e) {
		var event = e.originalEvent;
		startPosition = event.touches[0].screenY;
		//e.preventDefault();	//	이벤트취소

	});

	$(document).bind('touchmove', function(e) {
		var event = e.originalEvent;
		endPosition = event.touches[0].screenY;	
		//event.preventDefault();
	});

	$(document).bind('touchend', function(e) {
		console.log("touchend");
		if (startPosition != 0 && endPosition != 0)
		{
			movePosition = endPosition - startPosition;
		}
		
		//console.log("startPosition : " + startPosition + ", endPosition : " + endPosition + ", movePosition : " + movePosition);
		if (Math.abs(movePosition) > 100 && pageInteraction_Able)
		{
			if (movePosition > 0)
			{
				movePosition = 1;
			}else{
				movePosition = -1;
			}

			if ($(".wrap_w").innerHeight() < $(".wrap").innerHeight())
			{
				if (document.getElementById('wrap_m').scrollTop == $(".wrap").innerHeight() - $(".wrap_w").innerHeight() && movePosition < 0)
				{
					++devicePage_up;
				}else{
					devicePage_up = 0;
				}
				

				if (document.getElementById('wrap_m').scrollTop == 0 && movePosition > 0)
				{
					++devicePage_down;
				}else{
					devicePage_down = 0;
				}

				if (devicePage_up >= 2 || devicePage_down >= 2)
				{
					devicePage_up = 0;
					devicePage_down = 0;

					fullDelta -= movePosition;
					if(fullDelta < 0)
						 fullDelta = 0;

					if (fullDelta > (baseDelta * 32))
						fullDelta = (baseDelta * 32);
					
					pageIndex = parseInt(fullDelta/baseDelta);
					if(pageIndex != oldPageIndex)
					{
						pageInteraction_Able = false;
						oldPageIndex = pageIndex;
						mShowPage(pageIndex);
					}
				}
			}else{
				devicePage_up = 0;
				devicePage_down = 0;

				fullDelta -= movePosition;
				if(fullDelta < 0)
					 fullDelta = 0;

				if (fullDelta > (baseDelta * 32))
					fullDelta = (baseDelta * 32);
				
				pageIndex = parseInt(fullDelta/baseDelta);
				if(pageIndex != oldPageIndex)
				{
					devicePage_Able = true;
					pageInteraction_Able = false;
					oldPageIndex = pageIndex;
					mShowPage(pageIndex);
				}
			}
		}
		startPosition = 0;
		endPosition = 0;
		movePosition = 0;

		if (swipeStPosition != 0 && swipeEdPosition != 0)
		{
			swipeMove = swipeMoving;
			swipeEdPosition = 0;
			swipeStPosition = 0;
			swipeMoving = 0;

			console.log("swipeMove : " + swipeMove);
		}
		console.log("nowShowPage : " + nowShowPage);
		if (mF3_11_Ed != 0 && mF3_11_St != 0 & nowShowPage == 17)
		{
			if (mF3_11_Ed - mF3_11_St > 100 )
			{
				if (mF3_11 > 0)
				{
					mF3_11--;
					if (mF3_11 == 1)
					{
						$(".m_vw .f3_11 .txt .desc .m_slide").eq(0).animate({"left":"-120%"},400);
						$(".m_vw .f3_11 .txt .desc .m_slide").eq(1).animate({"left":"0%"},400);
						$(".m_vw .f3_11 .txt .desc .m_slide").eq(2).animate({"left":"120%"},400);
						$(".m_vw .f3_11 .m_txt_carousel a").removeClass("active");
						$(".m_vw .f3_11 .m_txt_carousel a").eq(1).addClass("active");
					}else if (mF3_11 == 0)
					{
						$(".m_vw .f3_11 .txt .desc .m_slide").eq(0).animate({"left":"0%"},400);
						$(".m_vw .f3_11 .txt .desc .m_slide").eq(1).animate({"left":"120%"},400);
						$(".m_vw .f3_11 .txt .desc .m_slide").eq(2).animate({"left":"240%"},400);
						$(".m_vw .f3_11 .m_txt_carousel a").removeClass("active");
						$(".m_vw .f3_11 .m_txt_carousel a").eq(0).addClass("active");
					}
				}
			}

			if (mF3_11_Ed - mF3_11_St < -100 )
			{
				if (mF3_11 < 2)
				{
					mF3_11++;
					if (mF3_11 == 1)
					{
						$(".m_vw .f3_11 .txt .desc .m_slide").eq(0).animate({"left":"-120%"},400);
						$(".m_vw .f3_11 .txt .desc .m_slide").eq(1).animate({"left":"0%"},400);
						$(".m_vw .f3_11 .txt .desc .m_slide").eq(2).animate({"left":"120%"},400);
						$(".m_vw .f3_11 .m_txt_carousel a").removeClass("active");
						$(".m_vw .f3_11 .m_txt_carousel a").eq(1).addClass("active");
					}else if (mF3_11 == 2)
					{
						$(".m_vw .f3_11 .txt .desc .m_slide").eq(0).animate({"left":"-240%"},400);
						$(".m_vw .f3_11 .txt .desc .m_slide").eq(1).animate({"left":"-120%"},400);
						$(".m_vw .f3_11 .txt .desc .m_slide").eq(2).animate({"left":"0%"},400);
						$(".m_vw .f3_11 .m_txt_carousel a").removeClass("active");
						$(".m_vw .f3_11 .m_txt_carousel a").eq(2).addClass("active");
					}
				}
			}

			mF3_11_Ed = 0;
			mF3_11_St = 0;
		}
		
		if (txtSwipeEd != 0 && txtSwipeSt != 0)
		{
			if (txtSwipeEd - txtSwipeSt > 100 )
			{
				if (txtSwipeNum > 0)
				{
					txtSwipeNum--;
					$(".m_vw .f4_1 .txt .desc .m_slide").eq(0).animate({"left":"0%"},400);
					$(".m_vw .f4_1 .txt .desc .m_slide").eq(1).animate({"left":"120%"},400);
					$(".m_vw .f4_1 .m_txt_carousel a").removeClass("active");
					$(".m_vw .f4_1 .m_txt_carousel a").eq(0).addClass("active");

				}
			}

			if (txtSwipeEd - txtSwipeSt < -100 )
			{
				if (txtSwipeNum < 1)
				{
					txtSwipeNum++;
					$(".m_vw .f4_1 .txt .desc .m_slide").eq(0).animate({"left":"-120%"},400);
					$(".m_vw .f4_1 .txt .desc .m_slide").eq(1).animate({"left":"0%"},400);
					$(".m_vw .f4_1 .m_txt_carousel a").removeClass("active");
					$(".m_vw .f4_1 .m_txt_carousel a").eq(1).addClass("active");
				}
			}
			txtSwipeEd = 0;
			txtSwipeSt = 0;
		}

		if (fSlider_St != 0 && fSlider_Ed != 0)
		{
			if (fSlider_Ed - fSlider_St > 100 )
			{
				if (moduleIndex > 0)
				{
					$(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.prev").trigger("click");
				}
			}

			if (fSlider_Ed - fSlider_St < -100 )
			{
				if (moduleIndex < 3)
				{
					$(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.next").trigger("click");
				}
			}

			fSlider_St = 0;
			fSlider_Ed = 0;
		}

		if (endingEd != 0 && endingSt != 0)
		{
			if (endingEd - endingSt > 100 )
			{
				if (endingNum > 0)
				{
					endingNum--;

					$(".m_vw .f5_3 .txt .desc .m_slide").eq(0).animate({"left":"0%"},400);
					$(".m_vw .f5_3 .txt .desc .m_slide").eq(1).animate({"left":"120%"},400);
					$(".m_vw .f5_3 .m_txt_carousel a").removeClass("active");
					$(".m_vw .f5_3 .m_txt_carousel a").eq(0).addClass("active");

				}
			}

			if (endingEd - endingSt < -100 )
			{
				if (endingNum < 1)
				{
					endingNum++;
					$(".m_vw .f5_3 .txt .desc .m_slide").eq(0).animate({"left":"-120%"},400);
					$(".m_vw .f5_3 .txt .desc .m_slide").eq(1).animate({"left":"0%"},400);
					$(".m_vw .f5_3 .m_txt_carousel a").removeClass("active");
					$(".m_vw .f5_3 .m_txt_carousel a").eq(1).addClass("active");
				}
			}
			endingEd = 0;
			endingSt = 0;
		}
		
		
	});


	
	$(document).on('touchstart', ".f5_2 .map_area",  function(e) {
		var event = e.originalEvent;
		swipeStPosition = event.touches[0].screenX;
		e.preventDefault();	//	이벤트취소

	});

	$(document).on('touchmove', ".f5_2 .map_area", function(e) {
		var event = e.originalEvent;
		swipeEdPosition = event.touches[0].screenX;	
		
		swipeMoving = swipeMove + ((swipeEdPosition - swipeStPosition)/2);
		if (swipeMoving > (windowWidth * 0.6944))
		{
			swipeMoving = windowWidth * 0.6944;
		}else if (swipeMoving < -(windowWidth * 0.5556))
		{
			swipeMoving = -(windowWidth * 0.5556);
		}


		console.log("swipeMove : " + swipeMove + ", st : " + swipeStPosition + ", ed : " + swipeEdPosition + ", swipeMoving : " + swipeMoving);
		$(".bg_cont .bg.dot_map img").css({"transition":"", "transform":"translate(" + swipeMoving + "px, 0px) scale(1)"});
		$(".m_vw .f5_2 .map_area").css({"transition":"", "transform":"translate(" + swipeMoving + "px, 0px) scale(1)"});
		e.preventDefault();	//	이벤트취소
	});


	
	var mF3_11_St = 0;
	var mF3_11_Ed = 0;
	$(document).on("touchstart",".m_vw .f3_11 .txt",function(e){
		var event = e.originalEvent;
		mF3_11_St = event.touches[0].screenX;
	});

	$(document).on("touchmove",".m_vw .f3_11 .txt",function(e){
		var event = e.originalEvent;
		mF3_11_Ed = event.touches[0].screenX;	
	});


	var txtSwipeSt = 0;
	var txtSwipeEd = 0;

	$(document).on('touchstart', ".m_vw .f4_1 .txt",  function(e) {
		var event = e.originalEvent;
		txtSwipeSt = event.touches[0].screenX;

	});

	$(document).on('touchmove', ".m_vw .f4_1 .txt", function(e) {
		var event = e.originalEvent;
		txtSwipeEd = event.touches[0].screenX;	
	});

	var fSlider_St = 0;
	var fSlider_Ed = 0;
	$(document).on('touchstart', ".f3_3 .slider_wrap",  function(e) {
		var event = e.originalEvent;
		fSlider_St = event.touches[0].screenX;

	});

	$(document).on('touchmove', ".f3_3 .slider_wrap", function(e) {
		var event = e.originalEvent;
		fSlider_Ed = event.touches[0].screenX;	
	});
	var endingNum = 0;
	var endingSt = 0;
	var endingEd = 0;
	$(document).on('touchstart', ".m_vw .f5_3 .txt .desc",  function(e) {
		var event = e.originalEvent;
		endingSt = event.touches[0].screenX;

	});

	$(document).on('touchmove', ".m_vw .f5_3 .txt .desc", function(e) {
		var event = e.originalEvent;
		endingEd = event.touches[0].screenX;	
	});
	

	$(document).on('touchstart', ".m_vw .f5_2 .click_ico a",  function(e) {
		var cIdx = $(this).parent().parent().index();
		e.preventDefault();	//	이벤트취소
		$(".m_vw .f5_2 .click_ico").eq(cIdx).find("a").trigger("click");
	});
	
	
}


function mobileSwipe()
{
	$(".m_vw .f4_1 .txt").swipe({
		swipeStatus:function(event, phase, direction, distance, duration, fingerCount, fingerData) {
		},
		swipe:function(event, phase, direction, distance, duration, fingerCount, fingerData) {
			console.log("distance : " + distance);
			if(distance > 50)
			{
				if(direction == "left" || phase == "left" || direction == "right" || phase == "right")
				{
					if((direction == "left" || phase == "left"))
					{
						txtSwipeNum = 1;
						$(".m_vw .f4_1 .txt .desc .m_slide").eq(0).animate({"left":"-120%"},400);
						$(".m_vw .f4_1 .txt .desc .m_slide").eq(1).animate({"left":"0%"},400);
						$(".m_vw .f4_1 .m_txt_carousel a").removeClass("active");
						$(".m_vw .f4_1 .m_txt_carousel a").eq(1).addClass("active");
					}else if((direction == "right" || phase == "right"))
					{
						txtSwipeNum = 0;
						$(".m_vw .f4_1 .txt .desc .m_slide").eq(0).animate({"left":"0%"},400);
						$(".m_vw .f4_1 .txt .desc .m_slide").eq(1).animate({"left":"120%"},400);
						$(".m_vw .f4_1 .m_txt_carousel a").removeClass("active");
						$(".m_vw .f4_1 .m_txt_carousel a").eq(0).addClass("active");
					}
				}
				
			}
		},
		allowPageScroll:"vertical"
	});

	$(".m_vw .f3_11 .txt .desc").swipe({
		swipeStatus:function(event, phase, direction, distance, duration, fingerCount, fingerData) {
		},
		swipe:function(event, phase, direction, distance, duration, fingerCount, fingerData) {
			console.log("distance : " + distance);
			if(distance > 50)
			{
				if(direction == "left" || phase == "left" || direction == "right" || phase == "right")
				{
					if((direction == "left" || phase == "left"))
					{
						mF3_11++;
						if (mF3_11 > 2)
						{
							mF3_11 = 2;
						}
						if (mF3_11 == 1)
						{
							$(".m_vw .f3_11 .txt .desc .m_slide").eq(0).animate({"left":"-120%"},400);
							$(".m_vw .f3_11 .txt .desc .m_slide").eq(1).animate({"left":"0%"},400);
							$(".m_vw .f3_11 .txt .desc .m_slide").eq(2).animate({"left":"120%"},400);
							$(".m_vw .f3_11 .m_txt_carousel a").removeClass("active");
							$(".m_vw .f3_11 .m_txt_carousel a").eq(1).addClass("active");
						}else if (mF3_11 == 2)
						{
							$(".m_vw .f3_11 .txt .desc .m_slide").eq(0).animate({"left":"-240%"},400);
							$(".m_vw .f3_11 .txt .desc .m_slide").eq(1).animate({"left":"-120%"},400);
							$(".m_vw .f3_11 .txt .desc .m_slide").eq(2).animate({"left":"0%"},400);
							$(".m_vw .f3_11 .m_txt_carousel a").removeClass("active");
							$(".m_vw .f3_11 .m_txt_carousel a").eq(2).addClass("active");
						}
					}else if((direction == "right" || phase == "right"))
					{
						mF3_11--;
						if (mF3_11 < 0)
						{
							mF3_11 = 0;
						}
						if (mF3_11 == 1)
						{
							$(".m_vw .f3_11 .txt .desc .m_slide").eq(0).animate({"left":"-120%"},400);
							$(".m_vw .f3_11 .txt .desc .m_slide").eq(1).animate({"left":"0%"},400);
							$(".m_vw .f3_11 .txt .desc .m_slide").eq(2).animate({"left":"120%"},400);
							$(".m_vw .f3_11 .m_txt_carousel a").removeClass("active");
							$(".m_vw .f3_11 .m_txt_carousel a").eq(1).addClass("active");
						}else if (mF3_11 == 0)
						{
							$(".m_vw .f3_11 .txt .desc .m_slide").eq(0).animate({"left":"0%"},400);
							$(".m_vw .f3_11 .txt .desc .m_slide").eq(1).animate({"left":"120%"},400);
							$(".m_vw .f3_11 .txt .desc .m_slide").eq(2).animate({"left":"240%"},400);
							$(".m_vw .f3_11 .m_txt_carousel a").removeClass("active");
							$(".m_vw .f3_11 .m_txt_carousel a").eq(0).addClass("active");
						}
					}
				}
				
			}
		},
		allowPageScroll:"vertical"
	});

	$(".m_vw .f3_3 .slider_wrap").swipe({
		swipeStatus:function(event, phase, direction, distance, duration, fingerCount, fingerData) {
		},
		swipe:function(event, phase, direction, distance, duration, fingerCount, fingerData) {
			console.log("distance : " + distance);
			if(distance > 50)
			{
				if(direction == "left" || phase == "left" || direction == "right" || phase == "right")
				{
					if((direction == "left" || phase == "left"))
					{
						$(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.next").trigger("click");
					}else if((direction == "right" || phase == "right"))
					{
						$(".f3_3 .slider_wrap .btn_wrap .arrow_wrap a.prev").trigger("click");
					}
				}
			}
		},
		allowPageScroll:"vertical"
	});

	$(".m_vw .f5_3 .txt").swipe({
		swipeStatus:function(event, phase, direction, distance, duration, fingerCount, fingerData) {
		},
		swipe:function(event, phase, direction, distance, duration, fingerCount, fingerData) {
			console.log("distance : " + distance);
			if(distance > 50)
			{
				if(direction == "left" || phase == "left" || direction == "right" || phase == "right")
				{
					if((direction == "left" || phase == "left"))
					{
						endingNum = 1;
						$(".m_vw .f5_3 .txt .desc .m_slide").eq(0).animate({"left":"-120%"},400);
						$(".m_vw .f5_3 .txt .desc .m_slide").eq(1).animate({"left":"0%"},400);
						$(".m_vw .f5_3 .m_txt_carousel a").removeClass("active");
						$(".m_vw .f5_3 .m_txt_carousel a").eq(1).addClass("active");
					}else if((direction == "right" || phase == "right"))
					{
						endingNum = 0;
						$(".m_vw .f5_3 .txt .desc .m_slide").eq(0).animate({"left":"0%"},400);
						$(".m_vw .f5_3 .txt .desc .m_slide").eq(1).animate({"left":"120%"},400);
						$(".m_vw .f5_3 .m_txt_carousel a").removeClass("active");
						$(".m_vw .f5_3 .m_txt_carousel a").eq(0).addClass("active");


					}
				}
				
			}
		},
		allowPageScroll:"vertical"
	});

	$(".m_vw .f5_2 .map_area").swipe({
		swipeStatus:function(event, phase, direction, distance, duration, fingerCount, fingerData) {
			if ($("body").hasClass("m_vw"))
			{
				if(direction == "left" || phase == "left" || direction == "right" || phase == "right")
				{
					if (direction == "left" || phase == "left")
					{
						swipeMoving = swipeMove + (-distance/2);
					}else if (direction == "right" || phase == "right")
					{
						swipeMoving = swipeMove + (distance/2);
					}else {
						swipeMoving = 0;
					}
					
					console.log("direction : " + direction + " // " + swipeMoving);
					
					if (swipeMoving > (windowWidth * 0.6944))
					{
						console.log("left end : " + (windowWidth * 0.6944));
						var endMoving = windowWidth * 0.6944;

						$(".bg_cont .bg.dot_map img").css({"transition":"", "transform":"translate(" + endMoving + "px, 0px) scale(1)"});
						$(".m_vw .f5_2 .map_area").css({"transition":"", "transform":"translate(" + endMoving + "px, 0px) scale(1)"});
						swipeMoving = swipeMove;
					}else if (swipeMoving < -(windowWidth * 0.5556))
					{
						console.log("right end : " + (windowWidth * 0.5556));

						var endMoving = -(windowWidth * 0.5556);

						$(".bg_cont .bg.dot_map img").css({"transition":"", "transform":"translate(" + endMoving + "px, 0px) scale(1)"});
						$(".m_vw .f5_2 .map_area").css({"transition":"", "transform":"translate(" + endMoving + "px, 0px) scale(1)"});
						swipeMoving = swipeMove;
					}else{
						if (swipeMoving > (windowWidth * 0.6944))
							swipeMoving = (windowWidth * 0.6944);
						else if (swipeMoving < -(windowWidth * 0.5556))
							swipeMoving = -(windowWidth * 0.5556);

						$(".bg_cont .bg.dot_map img").css({"transition":"", "transform":"translate(" + swipeMoving + "px, 0px) scale(1)"});
						$(".m_vw .f5_2 .map_area").css({"transition":"", "transform":"translate(" + swipeMoving + "px, 0px) scale(1)"});
					}
				}
			}
			
		},
		swipe:function(event, phase, direction, distance, duration, fingerCount, fingerData) {
			if ($("body").hasClass("m_vw"))
			{
				console.log("swipeMoving : " + swipeMoving);
				swipeMove = swipeMoving;
				swipeMoving = 0;
				console.log("swipeMove : " + swipeMove);
			}
		},
		allowPageScroll:"vertical"
	});
}