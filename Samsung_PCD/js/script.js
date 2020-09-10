
$(window).load(onLoad)
	.resize(onResize);

function onLoad()
{
	if (check_device() == "")
		$(".ac_wrap").addClass("pc");
	else
		$(".ac_wrap").addClass("device");
}

function loadScript(url, callback) {
	var script = document.createElement('script');
	script.src = url;
	script.onload = callback;
	document.getElementsByTagName('head')[0].appendChild(script);
}


function onResize()
{

}

var motionIng = false;
var motionDelay = 500;
var step01_gauge = 1;
var step01_omni = 1;

var step01_quiz = new Array(12);
var step02 = 0;
$(function(){
	$(".f01 .txt .start_btn").click(function(){
		if (!motionIng)
		{
			motionIng = true;
		
			$(".f01 .airtest_wrap .airtest_inner > div").css({"display":"block"});
			$(".f01 .airtest_wrap .airtest_inner .airtest_r").css({"display":"none"});
			$(".f01 .airtest_select .select_element").css({"display":"none","opacity":0});
			$(".f01 .airtest_box").eq(0).css({"display":"block","opacity":1});
			$(".f01 .airtest_wrap").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);

			$(".f01 .airtest_select .select_o").attr("data-omni-type","microsite").attr("data-omni","sec:air-purifier:oxquiz:o_1");
			$(".f01 .airtest_select .select_x").attr("data-omni-type","microsite").attr("data-omni","sec:air-purifier:oxquiz:x_1");
			$(".f01 .replay_btn").attr("data-omni-type","microsite").attr("data-omni","sec:air-purifier:oxquiz:restart");
			setTimeout(function(){
				$(".f01 .airtest_select .select_o").css({"display":"block"}).stop().animate({"opacity":1},motionDelay);
				setTimeout(function(){
					$(".f01 .airtest_select .select_x").css({"display":"block"}).stop().animate({"opacity":1},motionDelay);
					motionIng = false;
				},300);
			},300);
		}
		return false;
	});
	
	var oxQuizPoint = 0;
	$(".f01 .airtest_select .select_element").click(function(){
		if (!motionIng)
		{
			console.log("click");
			motionIng = true;
			
			if (step01_gauge == 3)
			{
				if ($(this).index() == 0)
				{
					--oxQuizPoint;
				}
			}else{
				if ($(this).index() == 0)
				{
					++oxQuizPoint;
				}
			}
			
			step01_quiz[step01_gauge-1] = $(this).index();
			$(".f01 .airtest_select .select_element").stop().animate({"opacity":0}, 300, function(){
				$(this).css("display","none");
				$(".f01 .cs_wrap span").eq(step01_gauge).addClass("active");
				
				if (step01_gauge < $(".f01 .airtest_box").length)
				{
					console.log("step01_gauge : " + step01_gauge + ", Len : " + $(".f01 .airtest_box").length);
					$(".f01 .airtest_box").eq(step01_gauge).css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
					$(".f01 .airtest_select .select_o").attr("data-omni","sec:air-purifier:oxquiz:o_" + (step01_omni+1));
					$(".f01 .airtest_select .select_x").attr("data-omni","sec:air-purifier:oxquiz:x_" + (step01_omni+1));
					setTimeout(function(){
						$(".f01 .airtest_select .select_o").css({"display":"block"}).stop().animate({"opacity":1},300);
						setTimeout(function(){
							$(".f01 .airtest_select .select_x").css({"display":"block"}).stop().animate({"opacity":1},300,function(){
								motionIng = false;
							});
						},200);

						if (step01_gauge < 12 )
						{
							console.log("old step01_gauge : " + step01_gauge);
							step01_gauge = step01_gauge+1;
							console.log("new step01_gauge : " + step01_gauge);
							step01_omni = step01_gauge;
						}
						
						$(".f01 .cs_count span").html(step01_gauge);
					},300);
				}else{
					$(".f01 .airtest_r .txt .txt_ending").css("display","none");
					if (oxQuizPoint > 7)
					{
						$(".f01 .airtest_r .txt .txt_ending01").css("display","block");
					}else if (oxQuizPoint > 3)
					{
						$(".f01 .airtest_r .txt .txt_ending02").css("display","block");
					}else if (oxQuizPoint > 0)
					{
						$(".f01 .airtest_r .txt .txt_ending03").css("display","block");
					}else
					{
						$(".f01 .airtest_r .txt .txt_ending04").css("display","block");
					}

					$(".f01 .airtest_wrap .airtest_inner .airtest_r").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay,function(){
						motionIng = false;
					});
					$(".f01 .replay_btn").attr("data-omni-type","microsite").attr("data-omni","sec:air-purifier:oxquiz:result_restart");

				}
			});
		}
		return false;
	});

	$(".f01 .replay_btn").click(function(){
		if (!motionIng)
		{
			motionIng = true;

			$(".f01 .airtest_wrap").stop().animate({"opacity":0},motionDelay, function(){
				$(this).css({"display":"none"});

				$(".f01 .cs_count span").html(1);
				oxQuizPoint = 0;
				step01_gauge = 1;
				step01_omni = 1;
				step01_quiz = new Array(12);

				$(".f01 .cs_wrap span").removeClass("active");
				$(".f01 .cs_wrap span").eq(0).addClass("active");

				$(".f01 .airtest_box").css({"display":"none","opacity":0});

				motionIng = false;
			});
		}
		return false;
	});

	$(".f01 .airtest_r .airtest_r_btn").click(function(){
		if (viewportWidth() > 768)
		{
			var goTo = $(".f02").offset().top - ($(window).outerHeight() - $(".f02").outerHeight()) / 2;
			var speed = (goTo - $(window).scrollTop());
			$("html, body").stop().animate({scrollTop:goTo}, speed, 'swing');

			setTimeout(function(){
				$(".f02").focus();
			},speed);
		}else{
			var goTo = $(".f02").offset().top;
			var speed = (goTo - $(window).scrollTop());
			$("html, body").stop().animate({scrollTop:goTo}, speed, 'swing');

			setTimeout(function(){
				$(".f02").focus();
			},speed);
		}
		
		return false;
	});

	$(".f01 .airtest_r .airtest_r_btn02").click(function(){
		if (viewportWidth() > 768)
		{
			var goTo = $(".f03").offset().top - ($(window).outerHeight() - $(".f03").outerHeight()) / 2;
			var speed = (goTo - $(window).scrollTop());
			$("html, body").stop().animate({scrollTop:goTo}, speed, 'swing');

			setTimeout(function(){
				$(".f03").focus();
			},speed);
		}else{
			var goTo = $(".f03").offset().top;
			var speed = (goTo - $(window).scrollTop());
			$("html, body").stop().animate({scrollTop:goTo}, speed, 'swing');

			setTimeout(function(){
				$(".f03").focus();
			},speed);
		}
		
		return false;
	});

	$(".f02 .slider_wrap .slider .slider_el .guide_ico").click(function(){
		if (!motionIng)
		{
			motionIng = true;
			step02 = 1;
			$(".f02 .slider_wrap .slider .slider_el").eq(step02).css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);

			$(".f02 .slider_wrap .slider_control .cs_wrap a").removeClass("active");
			$(".f02 .slider_wrap .slider_control .cs_wrap a").eq(step02).addClass("active");

			$(".f02 .slider_wrap .slider_control .arrow_btn a.left").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);

			setTimeout(function(){
				motionIng = false;
			}, motionDelay);
		}
		return false;
	});

	$(".f02 .slider_wrap .slider_control .arrow_btn a.left").click(function(){
		if (!motionIng)
		{
			motionIng = true;

			$(".f02 .slider_wrap .slider .slider_el").eq(step02).stop().animate({"opacity":0},motionDelay,function(){
				$(this).css({"display":"none"});
			});

			--step02;
			$(".f02 .slider_wrap .slider .slider_el").eq(step02).css({"display":"block","opacity":1});

			$(".f02 .slider_wrap .slider_control .cs_wrap a").removeClass("active");
			$(".f02 .slider_wrap .slider_control .cs_wrap a").eq(step02).addClass("active");

			if (step02 < 5 && $(".f02 .slider_wrap .slider_control .arrow_btn a.right").css("display") == "none")
			{
				$(".f02 .slider_wrap .slider_control .arrow_btn a.right").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
			}
			if (step02 < 1)
			{
				$(".f02 .slider_wrap .slider_control .arrow_btn a.left").stop().animate({"opacity":0},motionDelay,function(){
					$(this).css({"display":"none"});
				});
			}

			setTimeout(function(){
				motionIng = false;
			}, motionDelay);
		}
		return false;
	});

	$(".f02 .slider_wrap .slider_control .arrow_btn a.right").click(function(){
		if (!motionIng)
		{
			motionIng = true;

			++step02;
			$(".f02 .slider_wrap .slider .slider_el").eq(step02).css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);

			$(".f02 .slider_wrap .slider_control .cs_wrap a").removeClass("active");
			$(".f02 .slider_wrap .slider_control .cs_wrap a").eq(step02).addClass("active");

			if (step02 > 0 && $(".f02 .slider_wrap .slider_control .arrow_btn a.left").css("display") == "none")
			{
				$(".f02 .slider_wrap .slider_control .arrow_btn a.left").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
			}
			if (step02 > 4)
			{
				$(".f02 .slider_wrap .slider_control .arrow_btn a.right").stop().animate({"opacity":0},motionDelay,function(){
					$(this).css({"display":"none"});
				});
			}

			setTimeout(function(){
				motionIng = false;
			}, motionDelay);

			if ($(".f02 .slider_wrap .slider .slider_el01 .ico_wrap .ico .ico_title .caption_popup").css("display") == "block")
			{
				$(".f02 .slider_wrap .slider .slider_el01 .ico_wrap .ico .ico_title .caption_popup").stop().animate({"opacity":0},motionDelay,function(){
					$(this).css({"display":"none"});
				});
			}
		}
		return false;
	});

	$(".f02 .slider_wrap .slider .slider_el01 .ico_wrap a.ico").click(function(){
		if (step02 > $(this).index()+1)
		{
			if (!motionIng)
			{
				motionIng = true;
				
				for (var i = $(this).index()+1; i < step02 ;i++ )
				{
					$(".f02 .slider_wrap .slider .slider_el").eq(i).css({"opacity":0, "display":"none"});
				}

				$(".f02 .slider_wrap .slider .slider_el").eq(step02).stop().animate({"opacity":0},motionDelay,function(){
					$(this).css({"display":"none"});
				});

				step02 = $(this).index()+1;
				$(".f02 .slider_wrap .slider .slider_el").eq(step02).css({"display":"block","opacity":1});

				$(".f02 .slider_wrap .slider_control .cs_wrap a").removeClass("active");
				$(".f02 .slider_wrap .slider_control .cs_wrap a").eq(step02).addClass("active");

				if (step02 < 5 && $(".f02 .slider_wrap .slider_control .arrow_btn a.right").css("display") == "none")
				{
					$(".f02 .slider_wrap .slider_control .arrow_btn a.right").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
				}
				if (step02 < 1)
				{
					$(".f02 .slider_wrap .slider_control .arrow_btn a.left").stop().animate({"opacity":0},motionDelay,function(){
						$(this).css({"display":"none"});
					});
				}
			}

			setTimeout(function(){
				motionIng = false;
			}, motionDelay);
		}else if (step02 < $(this).index()+1)
		{
			if (!motionIng)
			{
				motionIng = true;

				step02 = $(this).index()+1;
				$(".f02 .slider_wrap .slider .slider_el").eq(step02).css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);

				$(".f02 .slider_wrap .slider_control .cs_wrap a").removeClass("active");
				$(".f02 .slider_wrap .slider_control .cs_wrap a").eq(step02).addClass("active");

				if (step02 > 0 && $(".f02 .slider_wrap .slider_control .arrow_btn a.left").css("display") == "none")
				{
					$(".f02 .slider_wrap .slider_control .arrow_btn a.left").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
				}
				if (step02 > 4)
				{
					$(".f02 .slider_wrap .slider_control .arrow_btn a.right").stop().animate({"opacity":0},motionDelay,function(){
						$(this).css({"display":"none"});
					});
				}
				setTimeout(function(){
					motionIng = false;
				}, motionDelay);
			}
		}
		return false;
	});

	$(".f02 .slider_wrap .slider_control .cs_wrap a").click(function(){
		

		if (step02 > $(this).index())
		{
			if (!motionIng)
			{
				motionIng = true;
				
				for (var i = $(this).index()+1; i < step02 ;i++ )
				{
					$(".f02 .slider_wrap .slider .slider_el").eq(i).css({"opacity":0, "display":"none"});
				}

				$(".f02 .slider_wrap .slider .slider_el").eq(step02).stop().animate({"opacity":0},motionDelay,function(){
					$(this).css({"display":"none"});
				});

				step02 = $(this).index();
				$(".f02 .slider_wrap .slider .slider_el").eq(step02).css({"display":"block","opacity":1});

				$(".f02 .slider_wrap .slider_control .cs_wrap a").removeClass("active");
				$(".f02 .slider_wrap .slider_control .cs_wrap a").eq(step02).addClass("active");

				if (step02 < 5 && $(".f02 .slider_wrap .slider_control .arrow_btn a.right").css("display") == "none")
				{
					$(".f02 .slider_wrap .slider_control .arrow_btn a.right").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
				}
				if (step02 < 1)
				{
					$(".f02 .slider_wrap .slider_control .arrow_btn a.left").stop().animate({"opacity":0},motionDelay,function(){
						$(this).css({"display":"none"});
					});
				}
			}

			setTimeout(function(){
				motionIng = false;
			}, motionDelay);
		}else if (step02 < $(this).index())
		{
			if (!motionIng)
			{
				motionIng = true;

				step02 = $(this).index();
				$(".f02 .slider_wrap .slider .slider_el").eq(step02).css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);

				$(".f02 .slider_wrap .slider_control .cs_wrap a").removeClass("active");
				$(".f02 .slider_wrap .slider_control .cs_wrap a").eq(step02).addClass("active");

				if (step02 > 0 && $(".f02 .slider_wrap .slider_control .arrow_btn a.left").css("display") == "none")
				{
					$(".f02 .slider_wrap .slider_control .arrow_btn a.left").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
				}
				if (step02 > 4)
				{
					$(".f02 .slider_wrap .slider_control .arrow_btn a.right").stop().animate({"opacity":0},motionDelay,function(){
						$(this).css({"display":"none"});
					});
				}
				setTimeout(function(){
					motionIng = false;
				}, motionDelay);
			}
		}

		if ($(".f02 .slider_wrap .slider .slider_el01 .ico_wrap .ico .ico_title .caption_popup").css("display") == "block")
		{
			$(".f02 .slider_wrap .slider .slider_el01 .ico_wrap .ico .ico_title .caption_popup").stop().animate({"opacity":0},motionDelay,function(){
				$(this).css({"display":"none"});
			});
		}

		if ($(".f02 .slider_wrap .slider .slider_el02 .tool_tip_w .caption_popup").css("display") == "block")
		{
			$(".f02 .slider_wrap .slider .slider_el02 .tool_tip_w .caption_popup").stop().animate({"opacity":0},motionDelay,function(){
				$(this).css({"display":"none"});
			});
		}
		return false;
	});
	
	$(".f03 .aircheck01 .aircheck_list .aircheck_list_caption .aircheck_lisk_caption_in > a").click(function(){
		if ($(".f03 .aircheck01 .aircheck_list .caption_click_popup").css("display") == "none")
		{
			if (!motionIng)
			{
				motionIng = true;
				$(".f03 .aircheck01 .aircheck_list .caption_click_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1});
				
				setTimeout(function(){
					motionIng = false;
				},motionDelay);
			}
		}
		
		return false;
	});

	$(".f03 .aircheck04 .aircheck_list .aircheck_list_caption .aircheck_lisk_caption_in > a").click(function(){
		if ($(this).parent().find(".caption_popup").css("display") == "none")
		{
			if (!motionIng)
			{
				if ($(this).parent().parent().hasClass("caption_99_999"))
				{
					$(".f03 .aircheck04 .aircheck_list .aircheck_list_caption.caption_99_9 .caption_popup").stop().animate({"opacity":0},motionDelay,function(){
						$(this).css({"display":"none"});
					});
				}else{
					$(".f03 .aircheck04 .aircheck_list .aircheck_list_caption.caption_99_999 .caption_popup").stop().animate({"opacity":0},motionDelay,function(){
						$(this).css({"display":"none"});
					});
				}
				

				motionIng = true;
				$(this).parent().find(".caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1});
				
				setTimeout(function(){
					motionIng = false;
				},motionDelay);
			}
		}
		
		return false;
	});

	$(".f03 .aircheck_box .aircheck_list .caption_click_popup .popup_close").click(function(){
		if (!motionIng)
		{
			motionIng = true;
			$(this).parent().parent().animate({"opacity":0},motionDelay,function(){
				motionIng = false;
				$(this).css({"display":"none"});
			});
		}
		return false;
	});

	$(".f03 .aircheck_box .aircheck_list .aircheck_btn > a").click(function(){
		if (!motionIng)
		{
			motionIng = true;
			
			$(".f03 .aircheck01 .aircheck_list .caption_click_popup").stop().animate({"opacity":0},motionDelay,function(){
				$(this).css({"display":"none"});
			});

			$(".f03 .aircheck_box .aircheck_list .aircheck_btn > a").removeClass("active");
			$(this).addClass("active");

			var clickIndex = 0;

			if ($(this).parent().hasClass("aircheck_btn01"))
			{
				clickIndex = 1;
			}else if ($(this).parent().hasClass("aircheck_btn02"))
			{
				clickIndex = 2;
			}else if ($(this).parent().hasClass("aircheck_btn03"))
			{
				clickIndex = 3;
			}
			quiz03Answer[quiz03Step-1] = clickIndex;
			
			quizReturn = chkQuiz();
			console.log("quiz03Answer : " + quiz03Answer + ", quizReturn : " + quizReturn);
			if (!quizReturn)
			{
				$(".f03 .aircheck01 .aircheck_list .aircheck_list_caption").stop().animate({"opacity":0},motionDelay,function(){
					$(this).css({"display":"none"});
				});
				console.log("quiz03Step : " + quiz03Step + ", clickIndex : " + clickIndex + ", quiz03Answer : " + quiz03Answer);

				if (quiz03Step == 1 && clickIndex != 1)
				{
					quiz03Step = 3;
				}

				if (quiz03Step == 4 && clickIndex == 2)
				{
					quiz03Step++;
				}

				$(".f03 .aircheck_box").eq(quiz03Step).css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
				$(".f03 .aircheck_cs .cs_wrap span").eq(quiz03Step).addClass("active");
				
				++quiz03Step;

				if (quiz03Answer[0] == 3 && quiz03Step == 7)
				{
					$(".f03 .aircheck_box.aircheck07 .aircheck_list .aircheck_btn.aircheck_btn01").css("display","none");
					$(".f03 .aircheck_box.aircheck07 .aircheck_list .aircheck_btn_wrap").removeClass("three_set").addClass("two_set");
				}else{
					$(".f03 .aircheck_box.aircheck07 .aircheck_list .aircheck_btn.aircheck_btn01").css("display","inline-block");
					$(".f03 .aircheck_box.aircheck07 .aircheck_list .aircheck_btn_wrap").removeClass("two_set").addClass("three_set");
				}
								
				$(".f03 .cs_count span").html(quiz03Step);	
				if ($(".f03 .replay_btn").css("display") == "none")
				{
					$(".f03 .replay_btn").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
				}
				$(".f03 .replay_btn").attr("data-omni-type","microsite").attr("data-omni","sec:air-purifier:curation:contents_restart");
			}else{
				var quizA = quizAnswerView[quizEnd].split(",");

				switch (quizAnswerView[quizEnd].split(",").length)
				{
					case 1:
					{
						showSpac(acSpac[quizA],null);
						break;
					}
					case 2:
					{
						showSpac(acSpac[quizA[0]],acSpac[quizA[1]]);
						break;
					}		
				}

				$(".f03 .aircheck_r").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
				if ($(".f03 .replay_btn").css("display") == "none")
				{
					$(".f03 .replay_btn").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
				}
				$(".f03 .replay_btn").attr("data-omni-type","microsite").attr("data-omni","sec:air-purifier:curation:recommend_restart");
			}

			$(".f03 .aircheck_list .aircheck_list_caption .caption_popup").stop().animate({"opacity":0},motionDelay,function(){
				$(this).css({"display":"none"});
			});

			setTimeout(function(){
				motionIng = false;
			},motionDelay);
		}
		return false;
	});


	$(".f03 .replay_btn").click(function(){
		if (!motionIng)
		{

			$(this).stop().animate({"opacity":0},motionDelay,function(){
				$(this).css({"display":"none"});
			});

			motionIng = true;
			for (var i = 1; i < $(".f03 .aircheck_box").size() ; i++)
			{
				if ($(".f03 .aircheck_box").eq(i).css("display") == "block")
				{
					$(".f03 .aircheck_box").eq(i).stop().animate({"opacity":0},motionDelay,function(){
						$(this).css({"display":"none"});
					});
				}
			}

			$(".f03 .aircheck_r").stop().animate({"opacity":0},motionDelay,function(){
				$(this).css({"display":"none"});
			});

			$(".f03 .aircheck_box.aircheck01").css({"display":"block","opacity":1});

			$(".f03 .aircheck_cs .cs_wrap span").removeClass("active").eq(0).addClass("active");
			$(".f03 .cs_count span").html(1);
			quiz03Answer = [0,0,0,0,0,0,0];
			quiz03Step = 1;
			quizEnd = 0;
			quizAble = false;
			$(".f03 .aircheck01 .aircheck_list .aircheck_btn > a").removeClass("active");
			$(".f03 .aircheck_r .result_tab_w ul li a").removeClass("active");

			setTimeout(function(){
				motionIng = false;
			},motionDelay);

		
			$(".f03 .aircheck_list .aircheck_list_caption .caption_popup").stop().animate({"opacity":0},motionDelay,function(){
				$(this).css({"display":"none"});
			});

			$(".f03 .aircheck01 .aircheck_list .aircheck_list_caption").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
		}
		return false;
	});
	
	
	if (check_device() == "")
	{
		$(".f02 .slider_wrap .slider .slider_el a.caption_txt").hover(function(){
			$(this).parent().find(".caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
		},function(){
			$(this).parent().find(".caption_popup").stop().animate({"opacity":0},motionDelay,function(){
				$(this).css({"display":"none"});
			});
		});
		$(".f02 .slider_wrap .slider .slider_el a.caption_txt").click(function(){
			return false;
		});

		$(".f03 .aircheck_box .aircheck_list .aircheck_list_caption .aircheck_lisk_caption_in > a").hover(function(){
			$(this).parent().find(".caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
		},function(){
			$(this).parent().find(".caption_popup").stop().animate({"opacity":0},motionDelay,function(){
				$(this).css({"display":"none"});
			});
		});
		$(".f03 .aircheck_box .aircheck_list .aircheck_list_caption .aircheck_lisk_caption_in > a").click(function(){
			return false;
		});

		$(document).on({
			mouseenter: function () {
				$(this).parent().find(".caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
			},
			mouseleave: function () {
				$(this).parent().find(".caption_popup").stop().animate({"opacity":0},motionDelay,function(){
				$(this).css({"display":"none"});
			});
			}
		}, ".f03 .aircheck_result .result_pd_spec .tool_tip_w.divide_combine .caption_txt");

		$(document).on("click",".f03 .aircheck_result .result_pd_spec .tool_tip_w.divide_combine .caption_txt",function(){
			return false;
		});
	}else{
		$(".f02 .slider_wrap .slider .slider_el a.caption_txt").click(function(){
			if (!motionIng)
			{
				motionIng = true;
				$(this).parent().find(".caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);

				setTimeout(function(){
					motionIng = false;
				},motionDelay);
			}
			return false;
		});
		
		$(".f02 .slider_wrap .slider .slider_el .caption_popup .popup_close").click(function(){
			if (!motionIng)
			{
				motionIng = true;
				$(this).parent().parent().stop().animate({"opacity":0},motionDelay,function(){
					$(this).css({"display":"none"});
				});

				setTimeout(function(){
					motionIng = false;
				},motionDelay);
			}
			return false;
		});

		$(document).on("click",".f03 .aircheck_result .result_pd_spec .tool_tip_w.divide_combine .caption_txt",function(){
			if (!motionIng)
			{
				motionIng = true;
				if ($(this).parent().find(".caption_popup").css("display") == "block")
				{
					$(this).parent().find(".caption_popup").stop().animate({"opacity":0},motionDelay,function(){
						$(this).css("display","none");
					});
				}else{
					$(this).parent().find(".caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
				}
				

				setTimeout(function(){
					motionIng = false;
				},motionDelay);
			}
			return false;
		});
		$(document).on("click",".f03 .aircheck_result .result_pd_spec .tool_tip_w.divide_combine .caption_popup .popup_close",function(){
			if (!motionIng)
			{
				motionIng = true;
				$(this).parent().parent().stop().animate({"opacity":0},motionDelay,function(){
					$(this).css({"display":"none"});
				});

				setTimeout(function(){
					motionIng = false;
				},motionDelay);
			}
			return false;
		});

		$(".f03 .aircheck_box .aircheck_list .aircheck_list_caption .aircheck_lisk_caption_in > a").click(function(){
			if (!motionIng)
			{
				motionIng = true;

				if ($(this).parent().parent().hasClass("caption_99_999"))
				{
					if ($(".f03 .aircheck04 .aircheck_list .caption_99_9 .caption_popup").css("display") == "block")
					{
						$(".f03 .aircheck04 .aircheck_list .caption_99_9 .caption_popup").stop().animate({"opacity":0},motionDelay,function(){
							$(this).css({"display":"none"});
						});
					}
				}

				if ($(this).parent().parent().hasClass("caption_99_9"))
				{
					if ($(".f03 .aircheck04 .aircheck_list .caption_99_999 .caption_popup").css("display") == "block")
					{
						$(".f03 .aircheck04 .aircheck_list .caption_99_999 .caption_popup").stop().animate({"opacity":0},motionDelay,function(){
							$(this).css({"display":"none"});
						});
					}
				}



				if ($(this).parent().find(".caption_popup").css("display") == "none")
				{
					$(this).parent().find(".caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1});
				}else{
					$(this).parent().find(".caption_popup").stop().animate({"opacity":0},motionDelay,function(){
						$(this).css({"display":"none"});
					});
				}
				
				setTimeout(function(){
					motionIng = false;
				},motionDelay);
			}
		});
	}
	

	$(".f02 .slider_wrap .slider .slider_el06 .guide_ico_btn").click(function(){
		if (viewportWidth() > 768)
		{
			var goTo = $(".f03").offset().top - ($(window).outerHeight() - $(".f03").outerHeight()) / 2;
			var speed = (goTo - $(window).scrollTop());
			$("html, body").stop().animate({scrollTop:goTo}, speed, 'swing');
			setTimeout(function(){
				$(".f03").focus();
			},speed);
		}else{
			var goTo = $(".f03").offset().top;
			var speed = (goTo - $(window).scrollTop());
			$("html, body").stop().animate({scrollTop:goTo}, speed, 'swing');
			setTimeout(function(){
				$(".f03").focus();
			},speed);
		}
		return false;
	});

	

	$(".f03 .aircheck_box .aircheck_list .aircheck_list_caption .caption_popup .popup_close").click(function(){
		if (!motionIng)
		{
			motionIng = true;
			$(this).parent().parent().stop().animate({"opacity":0},motionDelay,function(){
				$(this).css({"display":"none"});
			});
			
			setTimeout(function(){
				motionIng = false;
			},motionDelay);
		}
		return false;
	});

	$(".f03 .aircheck_r .result_tab_w ul li a").click(function(){
		var clickIdx = $(this).parent().index();

		if (!$(".f03 .aircheck_r .result_tab_w ul li").eq(clickIdx).find("a").hasClass("active"))
		{
			$(".f03 .aircheck_r .result_tab_w ul li a").removeClass("active");
			$(this).addClass("active");
			
			if (clickIdx == 0)
			{
				$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result").eq(0).css({"display":"block","opacity":0}).animate({"opacity":1},motionDelay);
				$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result").eq(1).animate({"opacity":0},motionDelay,function(){
					$(this).css("display","none");
				});
			}else{
				$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result").eq(0).animate({"opacity":0},motionDelay,function(){
					$(this).css("display","none");
				});
				$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result").eq(1).css({"display":"block","opacity":0}).animate({"opacity":1},motionDelay);
			}
			
		}
		return false;
	});

	

	if (check_device() == "")
	{
		$(".ac_wrap a").hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		});
	}





});
var quizReturn;
var quiz03Answer = [0,0,0,0,0,0,0];
var quiz03Step = 1;
var quizAnswer = [[1,2,0,0,0,0,0],[1,1,2,0,0,0,0],[1,1,1,1,1,0,0],[1,1,1,1,2,1,0],[1,1,1,1,2,2,0],[1,1,1,2,0,1,1],[1,1,1,2,0,1,2],[1,1,1,2,0,1,3],[1,1,1,2,0,2,1],[1,1,1,2,0,2,2],[1,1,1,2,0,2,3],[2,0,0,1,1,0,0],[2,0,0,1,2,1,1],[2,0,0,1,2,1,2],[2,0,0,1,2,1,3],[2,0,0,1,2,2,1],[2,0,0,1,2,2,2],[2,0,0,1,2,2,3],[2,0,0,2,0,1,1],[2,0,0,2,0,1,2],[2,0,0,2,0,1,3],[2,0,0,2,0,2,1],[2,0,0,2,0,2,2],[2,0,0,2,0,2,3],[3,0,0,1,1,0,0],[3,0,0,1,2,1,2],[3,0,0,1,2,1,3],[3,0,0,1,2,2,2],[3,0,0,1,2,2,3],[3,0,0,2,0,1,2],[3,0,0,2,0,1,3],[3,0,0,2,0,2,2],[3,0,0,2,0,2,3]];
var quizAnswerView = ["AX34N3020WWD","AX40N3081WMD,AX47N9980SSD","AX47N9980SSD,AX47N9880WFD","AX47N9980SSD,AX46N6580WMD","AX47N9980SSD,AX47N9880WFD","AX46N6580WMD,AX60N5580WBD","AX60N5580WBD,AX47N9980SSD","AX60N5580WBD,AX46N6580WMD","AX46N6580WMD,AX60N5580WBD","AX60N5580WBD,AX47N9980SSD","AX60N5580WBD,AX46N6580WMD","AX47N9980SSD,AX47N9880WFD","AX90N9980SSD,AX46N6580WMD","AX90N9980SSD,AX90N9880WFD","AX90N9980SSD,AX90N9880WFD","AX90N9980SSD,AX46N6580WMD","AX90N9980SSD,AX90N9880WFD","AX90N9980SSD,AX90N9880WFD","AX46N6580WMD,AX60N5580WBD","AX60N5580WBD,AX90N9980SSD","AX60N5580WBD","AX46N6580WMD","AX90N9980SSD","AX60N5580WBD","AX94N9980SSD,AX94N9880WFD","AX90N9980SSD,AX90N9880WFD","AX90N9980SSD,AX90N9880WFD","AX90N9980SSD,AX90N9880WFD","AX90N9980SSD,AX90N9880WFD","AX60N5580WBD,AX90N9980SSD","AX60N5580WBD,AX90N9980SSD","AX90N7580WBD,AX94N9980SSD","AX90N7580WBD"];
var quizEnd = 0;
var quizAble = false;
function chkQuiz()
{
	quizEnd = 0;
	quizAble = false;
	for (var i = 0; i < quizAnswer.length ; i++)
	{
		if (JSON.stringify(quiz03Answer) == JSON.stringify(quizAnswer[i]))
		{
			quizAble = true;
			quizEnd = i;
		}
	}
	
	return quizAble;
}

var spacCount = 0;
function showSpac(obj1, obj2)
{
	if (obj2 !== null)
	{
		$(".f03 .aircheck_r").removeClass("type2");

		$(".f03 .aircheck_result_w.w_only .aircheck_result.one_result").css({"display":"none"});
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result").css({"display":"block","left":"0px"});
		$(".f03 .aircheck_result_w.w_only .cs_wrap").css({"display":"none"});

		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_img.pd_left .pd_img_area img").attr("src",obj1.thumb);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_img.pd_left .pd_img_area img").attr("alt",obj1.name + " " + obj1.model + " 제품 이미지 입니다.");
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_img.pd_left .pd_img_area p").html(obj1.dis);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_img.pd_left .result_pd_btn").attr("href",obj1.site).attr("data-omni-type","microsite").attr("data-omni",obj1.omni);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_spec_w .result_pd_spec.spec_left ul li").eq(0).html(obj1.persent);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_spec_w .result_pd_spec.spec_left ul li").eq(1).html(obj1.area + " m<sup>2</sup>");
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_spec_w .result_pd_spec.spec_left ul li").eq(2).html(obj1.saver);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_spec_w .result_pd_spec.spec_left ul li").eq(3).html(obj1.guide);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_spec_w .result_pd_spec.spec_left ul li").eq(4).html(obj1.sensor);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_spec_w .result_pd_spec.spec_left ul li").eq(5).html(obj1.cleanliness);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_spec_w .result_pd_spec.spec_left ul li").eq(6).html(obj1.skill);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_spec_w .result_pd_spec.spec_left ul li").eq(7).html(obj1.move);

		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_img.pd_right .pd_img_area img").attr("src",obj2.thumb);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_img.pd_right .pd_img_area img").attr("alt",obj2.name + " " + obj2.model + " 제품 이미지 입니다.");
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_img.pd_right .pd_img_area p").html(obj2.dis);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_img.pd_right .result_pd_btn").attr("href",obj2.site).attr("data-omni-type","microsite").attr("data-omni",obj2.omni);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_spec_w .result_pd_spec.spec_right ul li").eq(0).html(obj2.persent);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_spec_w .result_pd_spec.spec_right ul li").eq(1).html(obj2.area + " m<sup>2</sup>");
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_spec_w .result_pd_spec.spec_right ul li").eq(2).html(obj2.saver);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_spec_w .result_pd_spec.spec_right ul li").eq(3).html(obj2.guide);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_spec_w .result_pd_spec.spec_right ul li").eq(4).html(obj2.sensor);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_spec_w .result_pd_spec.spec_right ul li").eq(5).html(obj2.cleanliness);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_spec_w .result_pd_spec.spec_right ul li").eq(6).html(obj2.skill);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result .result_pd_spec_w .result_pd_spec.spec_right ul li").eq(7).html(obj2.move);


		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result").css({"display":"none"});
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result.one_result01").css({"display":"block","opacity":"1"});
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result.one_result02").css({"display":"none","opacity":"0"});
		$(".f03 .aircheck_r .result_tab_w ul li").eq(0).find("a").addClass("active");
		$(".f03 .aircheck_result_w.m_only .cs_wrap").css({"display":"block"});
		$(".f03 .aircheck_result_w.m_only .cs_wrap a").css({"display":"inline-block"});
		$(".f03 .aircheck_result_w.m_only .cs_wrap a").eq(2).css({"display":"none"});
		$(".f03 .aircheck_result_w.m_only .cs_wrap a").removeClass("active").eq(0).addClass("active");

		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_img .pd_img_area img").attr("src",obj1.thumb_m);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_img .pd_img_area img").attr("alt",obj1.name + " " + obj1.model + " 제품 이미지 입니다.");
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_img .pd_img_area p").html(obj1.dis);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_img .result_pd_btn").attr("href",obj1.site).attr("data-omni-type","microsite").attr("data-omni",obj1.omni);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(0).html(obj1.persent);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(1).html(obj1.area + " m<sup>2</sup>");
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(2).html(obj1.saver);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(3).html(obj1.guide);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(4).html(obj1.sensor);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(5).html(obj1.cleanliness);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(6).html(obj1.skill);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(7).html(obj1.move);

		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result02 .result_pd_img .pd_img_area img").attr("src",obj2.thumb_m);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result02 .result_pd_img .pd_img_area img").attr("alt",obj2.name + " " + obj2.model + " 제품 이미지 입니다.");
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result02 .result_pd_img .pd_img_area p").html(obj2.dis);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result02 .result_pd_img .result_pd_btn").attr("href",obj2.site).attr("data-omni-type","microsite").attr("data-omni",obj2.omni);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result02 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(0).html(obj2.persent);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result02 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(1).html(obj2.area + " m<sup>2</sup>");
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result02 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(2).html(obj2.saver);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result02 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(3).html(obj2.guide);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result02 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(4).html(obj2.sensor);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result02 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(5).html(obj2.cleanliness);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result02 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(6).html(obj2.skill);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result02 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(7).html(obj2.move);
	}else{
		$(".f03 .aircheck_r").addClass("type2");

		$(".f03 .aircheck_result_w.w_only .aircheck_result.one_result").css({"display":"block","left":"0px"});
		$(".f03 .aircheck_result_w.w_only .aircheck_result.two_result").css({"display":"none"});
		$(".f03 .aircheck_result_w.w_only .cs_wrap").css({"display":"none"});


		$(".f03 .aircheck_result_w.w_only .aircheck_result.one_result .result_pd_img .pd_img_area img").attr("src",obj1.thumb);	
		$(".f03 .aircheck_result_w.w_only .aircheck_result.one_result .result_pd_img .pd_img_area img").attr("alt",obj1.name + " " + obj1.model + " 제품 이미지 입니다.");
		$(".f03 .aircheck_result_w.w_only .aircheck_result.one_result .result_pd_img .pd_img_area p").html(obj1.dis);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.one_result .result_pd_img .result_pd_btn").attr("href",obj1.site);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.one_result .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(0).html(obj1.persent);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.one_result .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(1).html(obj1.area + " m<sup>2</sup>");
		$(".f03 .aircheck_result_w.w_only .aircheck_result.one_result .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(2).html(obj1.saver);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.one_result .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(3).html(obj1.guide);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.one_result .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(4).html(obj1.sensor);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.one_result .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(5).html(obj1.cleanliness);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.one_result .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(6).html(obj1.skill);
		$(".f03 .aircheck_result_w.w_only .aircheck_result.one_result .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(7).html(obj1.move);


		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result").css({"display":"none"});
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result.one_result01").css({"display":"block","left":"0px"});
		$(".f03 .aircheck_result_w.m_only .cs_wrap").css({"display":"none"});
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_img .pd_img_area img").attr("src",obj1.thumb_m);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_img .pd_img_area img").attr("alt",obj1.name + " " + obj1.model + " 제품 이미지 입니다.");
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_img .pd_img_area p").html(obj1.dis);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_img .result_pd_btn").attr("href",obj1.site);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(0).html(obj1.persent);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(1).html(obj1.area + " m<sup>2</sup>");
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(2).html(obj1.saver);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(3).html(obj1.guide);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(4).html(obj1.sensor);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(5).html(obj1.cleanliness);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(6).html(obj1.skill);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(7).html(obj1.move);
		$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result01 .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(6).html(obj1.move);
	}
}


var acSpac = {
	AX94N9880WFD : {
		name:"삼성 큐브"
		, model : "AX94N9880WFD"
		, thumb : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-01_1.png"
		, thumb_m : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-01-m_1.png"
		, dis : "강력한 초순도 청정"
		, site : "http://www.samsung.com/sec/eventList/air_cleaners/"
		, area : "94"
		, persent : "99.999 %"
		, saver : "있음"
		, change : "필터 수명 2배 연장"
		, price : "4~6만원선"
		, guide : "있음"
		, sensor : "있음"
		, cleanliness : "있음"
		, skill : "무풍청정"
		, move : "<span class='tool_tip_w divide_combine'><a href='#' class='caption_txt'>분리결합</a><div class='caption_popup'><div class='popup_inner'><div class='popup_txt'>2개 이상의 큐브 제품을 구매할 <br/>경우 제품 간 결합이 가능합니다.</div><a href='#' class='popup_close'><img src='./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-popup-close.png' alt='팝업 닫기 버튼입니다.'></a></div></div></span>"
		, ca : "-"
		, color : "메탈실버(플래티넘)/골드, 화이트(프리미엄)"
		, head : "-"
		, omni : "sec:air-purifier:curation:recommend_AX94N9880WFD"
	}, 
	AX94N9980SSD : {
		name:"삼성 큐브"
		, model : "AX94N9980SSD"
		, thumb : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-14.png"
		, thumb_m : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-14-m.png"
		, dis : "강력한 초순도 청정"
		, site : "http://www.samsung.com/sec/air-conditioners/package-ax94n9980ssd/"
		, area : "94"
		, persent : "99.999 %"
		, saver : "있음"
		, change : "필터 수명 2배 연장"
		, price : "4~6만원선"
		, guide : "있음"
		, sensor : "있음"
		, cleanliness : "있음"
		, skill : "무풍청정"
		, move : "<span class='tool_tip_w divide_combine'><a href='#' class='caption_txt'>분리결합</a><div class='caption_popup'><div class='popup_inner'><div class='popup_txt'>2개 이상의 큐브 제품을 구매할 <br/>경우 제품 간 결합이 가능합니다.</div><a href='#' class='popup_close'><img src='./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-popup-close.png' alt='팝업 닫기 버튼입니다.'></a></div></div></span>"
		, ca : "-"
		, color : "메탈실버(플래티넘)/골드, 화이트(프리미엄)"
		, head : "-"
		, omni : "sec:air-purifier:curation:recommend_AX94N9980SSD"
	}, 
	AX47N9980SSD : {
		name:"큐브 정사각형"
		, model : "AX47N9980SSD"
		, thumb : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-02_1.png"
		, thumb_m : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-02-m_1.png"
		, dis : "강력한 초순도 청정"
		, site : "http://www.samsung.com/sec/air-conditioners/air-purifier-ax47n9980ssd/"
		, area : "47"
		, persent : "99.999 %"
		, saver : "있음"
		, change : "필터 수명 2배 연장"
		, price : "4~6만원선"
		, guide : "있음"
		, sensor : "있음"
		, cleanliness : "있음"
		, skill : "무풍청정"
		, move : "<span class='tool_tip_w divide_combine'><a href='#' class='caption_txt'>분리결합</a><div class='caption_popup'><div class='popup_inner'><div class='popup_txt'>2개 이상의 큐브 제품을 구매할 <br/>경우 제품 간 결합이 가능합니다.</div><a href='#' class='popup_close'><img src='./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-popup-close.png' alt='팝업 닫기 버튼입니다.'></a></div></div></span>"
		, ca : "-"
		, color : "메탈실버(플래티넘)/골드, 화이트(프리미엄)"
		, head : "-"
		, omni : "sec:air-purifier:curation:recommend_AX47N9980SSD"
	}, 
	AX47N9880WFD : {
		name:"큐브 정사각형"
		, model : "AX47N9880WFD"
		, thumb : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-13.png"
		, thumb_m : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-13-m.png"
		, dis : "강력한 초순도 청정"
		, site : "http://www.samsung.com/sec/air-conditioners/air-purifier-ax47n9880wfd/"
		, area : "47"
		, persent : "99.999 %"
		, saver : "있음"
		, change : "필터 수명 2배 연장"
		, price : "4~6만원선"
		, guide : "있음"
		, sensor : "있음"
		, cleanliness : "있음"
		, skill : "무풍청정"
		, move : "<span class='tool_tip_w divide_combine'><a href='#' class='caption_txt'>분리결합</a><div class='caption_popup'><div class='popup_inner'><div class='popup_txt'>2개 이상의 큐브 제품을 구매할 <br/>경우 제품 간 결합이 가능합니다.</div><a href='#' class='popup_close'><img src='./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-popup-close.png' alt='팝업 닫기 버튼입니다.'></a></div></div></span>"
		, ca : "-"
		, color : "메탈실버(플래티넘)/골드, 화이트(프리미엄)"
		, head : "-"
		, omni : "sec:air-purifier:curation:recommend_AX47N9880WFD"
	}, 
	AX90N9980SSD : {
		name:"큐브 일체형"
		, model : "AX90N9980SSD"
		, thumb : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-03_1.png"
		, thumb_m : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-03-m_1.png"
		, dis : "강력한 초순도 청정"
		, site : "http://www.samsung.com/sec/air-conditioners/air-purifier-ax90n9980ssd/"
		, area : "90"
		, persent : "99.999 %"
		, saver : "있음"
		, change : "필터 수명 2배 연장"
		, price : "4~6만원선"
		, guide : "있음"
		, sensor : "있음"
		, cleanliness : "있음"
		, skill : "무풍청정"
		, move : "히든휠"
		, ca : "-"
		, color : "메탈실버(플래티넘)/골드, 화이트(프리미엄)"
		, head : "-"
		, omni : "sec:air-purifier:curation:recommend_AX90N9980SSD"
	}, 
	AX90N9880WFD : {
		name:"큐브 일체형"
		, model : "AX90N9880WFD"
		, thumb : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-12.png"
		, thumb_m : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-12-m.png"
		, dis : "강력한 초순도 청정"
		, site : "http://www.samsung.com/sec/eventList/air_cleaners/"
		, area : "90"
		, persent : "99.999 %"
		, saver : "있음"
		, change : "필터 수명 2배 연장"
		, price : "4~6만원선"
		, guide : "있음"
		, sensor : "있음"
		, cleanliness : "있음"
		, skill : "무풍청정"
		, move : "히든휠"
		, ca : "-"
		, color : "메탈실버(플래티넘)/골드, 화이트(프리미엄)"
		, head : "-"
		, omni : "sec:air-purifier:curation:recommend_AX90N9880WFD"
	}, 
	AX80N9080WWD : {
		name:"큐브 디럭스"
		, model : "AX80N9080WWD"
		, thumb : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-04_1.png"
		, thumb_m : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-04-m_1.png"
		, dis : "초순도 청정"
		, site : "http://www.samsung.com/sec/air-conditioners/air-purifier-ax80n9080wwd/"
		, area : "80"
		, persent : "99.9 %"
		, saver : "-"
		, change : "평균 1년"
		, price : "4~6만원선"
		, guide : "있음"
		, sensor : "있음"
		, cleanliness : "있음"
		, skill : "무풍청정"
		, move : "히든휠"
		, ca : "-"
		, color : "화이트"
		, head : "-"
		, omni : "sec:air-purifier:curation:recommend_AX80N9080WWD"
	}, 
	AX80N7580WFD : {
		name:"블루스카이 7000 (79.9)"
		, model : "AX80N7580WFD"
		, thumb : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-11.png"
		, thumb_m : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-11-m.png"
		, dis : "2개의 펜으로 더 빠르게"
		, site : "http://www.samsung.com/sec/air-conditioners/air-purifier-ax80n7580wfd/"
		, area : "79.9"
		, persent : "99.9 %"
		, saver : "있음"
		, change : "필터 수명 2배 연장"
		, price : "4~6만원선"
		, guide : "있음"
		, sensor : "있음"
		, cleanliness : "있음"
		, skill : "-"
		, move : "-"
		, ca : "-"
		, color : "화이트/골드"
		, head : "블랙/골드/핑크골드/다크그레이"
		, omni : "sec:air-purifier:curation:recommend_bluesky7000_79.9"
	},
	AX90N7580WBD : {
		name:"블루스카이 7000"
		, model : "AX90N7580WBD"
		, thumb : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-05.png"
		, thumb_m : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-05-m.png"
		, dis : "2개의 펜으로 더 빠르게"
		, site : "http://www.samsung.com/sec/air-conditioners/air-purifier-ax90n7580wbd/"
		, area : "90"
		, persent : "99.9 %"
		, saver : "있음"
		, change : "필터 수명 2배 연장"
		, price : "4~6만원선"
		, guide : "있음"
		, sensor : "있음"
		, cleanliness : "있음"
		, skill : "-"
		, move : "-"
		, ca : "-"
		, color : "화이트/골드"
		, head : "블랙/골드/핑크골드/다크그레이"
		, omni : "sec:air-purifier:curation:recommend_bluesky7000_70"
	}, 
	AX60N5580WBD : {
		name:"블루스카이 5000"
		, model : "AX60N5580WBD"
		, thumb : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-06_1.png"
		, thumb_m : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-06-m_1.png"
		, dis : "방마다 이동이 편리해요"
		, site : "http://www.samsung.com/sec/air-conditioners/air-purifier-ax60n5580wbd/"
		, area : "60"
		, persent : "99.9 %"
		, saver : "있음"
		, change : "필터 수명 2배 연장"
		, price : "4~6만원선"
		, guide : "있음"
		, sensor : "있음"
		, cleanliness : "있음"
		, skill : "-"
		, move : "히든휠"
		, ca : "-"
		, color : "화이트"
		, head : "-"
		, omni : "sec:air-purifier:curation:recommend_bluesky5000"
	}, 
	AX46N6580WMD : {
		name:"블루스카이 6000"
		, model : "AX46N6580WMD"
		, thumb : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-07.png"
		, thumb_m : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-07-m.png"
		, dis : "청정과 가습을 동시에"
		, site : "http://www.samsung.com/sec/air-conditioners/air-purifier-ax46n6580wmd/"
		, area : "46"
		, persent : "99.9 %"
		, saver : "있음"
		, change : "필터 수명 2배 연장"
		, price : "4~6만원선"
		, guide : "있음"
		, sensor : "있음"
		, cleanliness : "있음"
		, skill : "가습기능"
		, move : "히든휠"
		, ca : "-"
		, color : "다크브라운/화이트"
		, head : "-"
		, omni : "sec:air-purifier:curation:recommend_bluesky6000"
	}, 
	AX40N3081WMD : {
		name:"블루스카이 3000"
		, model : "AX40N3081WMD"
		, thumb : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-08.png"
		, thumb_m : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-08-m.png"
		, dis : "한 눈에 보이는 청정디스플레이"
		, site : "http://www.samsung.com/sec/air-conditioners/air-purifier-ax40n3081wmd/"
		, area : "40"
		, persent : "99.9 %"
		, saver : "-"
		, change : "평균 1년"
		, price : "4~6만원선"
		, guide : "있음"
		, sensor : "있음"
		, cleanliness : "있음"
		, skill : "-"
		, move : "이지무빙핸들"
		, ca : "-"
		, color : "다크브라운/화이트"
		, head : "-"
		, omni : "sec:air-purifier:curation:recommend_bluesky3000_AX40N3081WMD"
	},
	AX40N3030WMD : {
		name:"블루스카이"
		, model : "AX40N3030WMD"
		, thumb : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-09.png"
		, thumb_m : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-09-m.png"
		, dis : "한 눈에 보이는 청정디스플레이"
		, site : "http://www.samsung.com/sec/air-conditioners/air-purifier-ax40n3030wmd/"
		, area : "40"
		, persent : "99.9 %"
		, saver : "-"
		, change : "평균 1년"
		, price : "4~6만원선"
		, guide : "있음"
		, sensor : "있음"
		, cleanliness : "있음"
		, skill : "-"
		, move : "이지무빙핸들"
		, ca : "-"
		, color : "-"
		, head : "-"
		, omni : "sec:air-purifier:curation:recommend_AX40N3030WMD"
	}, 
	AX34N3020WWD : {
		name:"블루스카이"
		, model : "AX34N3020WWD"
		, thumb : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-10.png"
		, thumb_m : "./is/image/samsung/sec-html-feature-air-cleaners-experience-f03-08-10-m.png"
		, dis : "한 눈에 보이는 청정디스플레이"
		, site : "http://www.samsung.com/sec/air-conditioners/air-purifier-ax34n3020wwd/"
		, area : "34"
		, persent : "99.9 %"
		, saver : "-"
		, change : "평균 1년"
		, price : "4~6만원선"
		, guide : "있음"
		, sensor : "있음"
		, cleanliness : "있음"
		, skill : "-"
		, move : "-"
		, ca : "-"
		, color : "-"
		, head : "-"
		, omni : "sec:air-purifier:curation:recommend_AX34N3020WWD"
	}
}

function check_device(){
	var mobileKeyWords = new Array('iPhone', 'iPad', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson'); //160625 device 목록에 ipad 추가
	var device_name = '';
	for (var word in mobileKeyWords){
		if (navigator.userAgent.match(mobileKeyWords[word]) != null){
			device_name = mobileKeyWords[word];
			break;
		}
	}
	
	if(window.orientation == 0){ // portrait
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
	}
}


///////////////////////////////////////////////////////////////////////////////////

$(function(){

	$(".f01").keydown(function(e){
		if((e.keyCode === 9 && !e.shiftKey)){
			if ($(".f01").is(":focus"))
			{
				e.preventDefault();
				if ($(".f01 .airtest_wrap").css("display") == "block")
				{
					if ($(".f01 .airtest_r").css("display") == "block")
					{
						$(".f01 .airtest_r .airtest_r_btn").focus();
					}else{
						$(".f01 .airtest_select .select_o").focus();
					}
				}else{
					$(".f01 .txt .start_btn").focus();
				}
			}
		}
	});

	$(".f01 .txt .start_btn").keydown(function(e){
		if(e.keyCode === 13) { 
			e.preventDefault();
			$(this).click();
			setTimeout(function(){
				$(".f01 .airtest_select .select_o").focus();
			},motionDelay*2);
		}
	});

	$(".f01 .airtest_select .select_o").keydown(function(e){
		if(e.keyCode === 13) { 
			e.preventDefault();
			$(this).click();
			setTimeout(function(){
				if ($(".f01 .airtest_r").css("display") == "block")
				{
					$(".f01 .airtest_r .airtest_r_btn").focus();
				}else{
					$(".f01 .airtest_select .select_o").focus();
				}
			},motionDelay*3);
		}

		if((e.keyCode === 9 && e.shiftKey)){ 
			e.preventDefault();
			$(".f01").focus();
		}
	});

	$(".f01 .airtest_select .select_x").keydown(function(e){
		if(e.keyCode === 13) { 
			e.preventDefault();
			$(this).click();
			setTimeout(function(){
				if ($(".f01 .airtest_r").css("display") == "block")
				{
					$(".f01 .airtest_r .airtest_r_btn").focus();
				}else{
					$(".f01 .airtest_select .select_o").focus();
				}
			},motionDelay*3);
		}

		if((e.keyCode === 9 && !e.shiftKey)){ 
			e.preventDefault();
			$(".f01 .replay_btn").focus();
		}
	});

	$(".f01 .replay_btn").keydown(function(e){
		if(e.keyCode === 13) { 
			e.preventDefault();
			$(this).click();
			setTimeout(function(){
				$(".f01 .txt .start_btn").focus();
			},motionDelay);
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
			e.preventDefault();
			$(".f02").focus();
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			e.preventDefault();
			if ($(".f01 .airtest_r").css("display") == "block")
			{
				$(".f01 .airtest_r .airtest_r_btn02").focus();
			}else{
				$(".f01 .airtest_select .select_x").focus();
			}
		}
	});


	$(".f01 .airtest_r .airtest_r_btn").keydown(function(e){
		
		if((e.keyCode === 9 && e.shiftKey)){ 
			e.preventDefault();
			$(".f01").focus();
		}
	});

	$("a.caption_txt").keydown(function(e){
		
		if(e.keyCode === 13) { 
			e.preventDefault();
			$(this).click();
			$(this).parent().find(".caption_popup a.popup_close").focus();
		}
	});

	$(".caption_popup a.popup_close").keydown(function(e){
		e.preventDefault();
		if(e.keyCode === 13) { 
			$(this).click();
			$(this).parent().parent().parent().find("a.caption_txt").focus();
		}
	});


	$(".f02").keydown(function(e){
		
		if(e.keyCode === 13) { 
			
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
			if ($(".f02").is(":focus"))
			{
				if (step02 == 0)
				{
					
				}else if (step02 == 1)
				{
					e.preventDefault();
					$(".f02 .slider_wrap .slider .slider_el02 .tool_tip_w .caption_txt").focus();
					$(".f02 .slider_wrap .slider .slider_el02 .tool_tip_w .caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
				}else if (step02 == 2)
				{
					e.preventDefault();
					$(".f02 .slider_wrap .slider .slider_el03 .tool_tip_w .caption_txt").focus();
					$(".f02 .slider_wrap .slider .slider_el03 .tool_tip_w .caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
				}else
				{
					e.preventDefault();
					$(".f02 .slider_wrap .slider_control .arrow_btn a.left").focus();
				}
				
			}
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			
		}
	});

	$(".f02 .slider_wrap .slider .slider_el .guide_ico").keydown(function(e){
		
		if(e.keyCode === 13) { 
			e.preventDefault();
			$(this).click();
			$(".f02 .slider_wrap .slider_control .arrow_btn a.right").focus();
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
			
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			
		}
	});

	$(".f02 .caption_txt").keydown(function(e){
		
		if(e.keyCode === 13) { 
			
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
			$(this).parent().find(".caption_popup").stop().animate({"opacity":0},motionDelay,function(){
				$(this).css({"display":"none"});
			});
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			e.preventDefault();
			$(".f02").focus();
			$(this).parent().find(".caption_popup").stop().animate({"opacity":0},motionDelay,function(){
				$(this).css({"display":"none"});
			});
		}
	});



	$(".f02 .slider_wrap .slider_control .arrow_btn a.right").keydown(function(e){
		
		if(e.keyCode === 13) { 
			e.preventDefault();
			$(this).click();
			if (step02 == 5)
			{
				$(".f02 .slider_wrap .slider .slider_el06 .guide_ico_btn").focus();
			}
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
		
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			if ($(".f02 .slider_wrap .slider_control .arrow_btn a.left").css("display") == "none")
			{
				$(".f02 .slider_wrap .slider .slider_el01 .ico_wrap .ico .ico_title .caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
			}
		
		}
	});

	$(".f02 .slider_wrap .slider_control .arrow_btn a.left").keydown(function(e){
		
		if(e.keyCode === 13) { 
			e.preventDefault();
			$(this).click();
			
			if (step02 == 0)
			{
				$(".f02 .slider_wrap .slider_control .arrow_btn a.right").focus();
			}
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
			if (step02 == 5)
			{
				e.preventDefault();
				$(".f02 .slider_wrap .slider .slider_el06 .guide_ico_btn").focus();
			}
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			if (step02 == 1)
			{
				$(".f02 .slider_wrap .slider .slider_el02 .tool_tip_w .caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
			}else if (step02 == 2)
			{
				$(".f02 .slider_wrap .slider .slider_el03 .tool_tip_w .caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
			}else if (step02 == 5)
			{
				e.preventDefault();
				$(".f02").focus();
			}		
		}
	});

	$(".f02 .slider_wrap .slider .slider_el06 .guide_ico_btn").keydown(function(e){
		
		if(e.keyCode === 13) { 
			
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
			e.preventDefault();
			$(".f02 .slider_wrap .slider_control .cs_wrap a").eq(0).focus();
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			e.preventDefault();
			$(".f02 .slider_wrap .slider_control .arrow_btn a.left").focus();
		}
	});

	$(".f02 .slider_wrap .slider_control .cs_wrap a").keydown(function(e){
		
		if(e.keyCode === 13) { 
			
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			if (step02 == 5 && $(this).index() == 0)
			{
				e.preventDefault();
				$(".f02 .slider_wrap .slider .slider_el06 .guide_ico_btn").focus();
			}
		}
	});
	
	var f02icoIdx = 0;
	$(".f02 .slider_wrap .slider .slider_el01 .ico_wrap .ico").keydown(function(e){
		
		if(e.keyCode === 13) { 
			e.preventDefault();
			$(this).click();
			f02icoIdx = $(this).index();
			setTimeout(function(){
				if (f02icoIdx == 4)
				{
					$(".f02 .slider_wrap .slider_control .arrow_btn a.left").focus();
				}else{
					$(".f02 .slider_wrap .slider_control .arrow_btn a.right").focus();
				}
			},motionDelay);
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
		}
	});

	$(".f03 .aircheck_box .aircheck_list .aircheck_btn > a").keydown(function(e){
		
		if(e.keyCode === 13) { 
			e.preventDefault();
			$(this).click();
			
			setTimeout(function(){
				if (!quizReturn)
				{
					if ($(".f03 .aircheck_box").eq(quiz03Step-1).find(".aircheck_btn_wrap .aircheck_btn").eq(0).css("display") != "none")
					{
						$(".f03 .aircheck_box").eq(quiz03Step-1).find(".aircheck_btn_wrap .aircheck_btn").eq(0).find("a").focus();
					}else{
						$(".f03 .aircheck_box").eq(quiz03Step-1).find(".aircheck_btn_wrap .aircheck_btn").eq(1).find("a").focus();
					}
				}else{
					$(".f03").focus();
					/*if (viewportWidth() > 768)
					{
						$(".f03 .aircheck_result .result_pd_img.pd_left .result_pd_btn").focus();
					}else{
						$(".f03 .aircheck_r .result_tab_w ul li").eq(0).find("a").focus();
					}*/
					
				}
			},motionDelay*2);
			
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
			console.log("quiz03Step : " + quiz03Step);
			if (quiz03Step == 4)
			{
				if ($(this).parent().hasClass("aircheck_btn01"))
				{
					$(".f03 .aircheck04 .aircheck_list .aircheck_list_caption.caption_99_999 .caption_popup").css({"display":"block","opacity":0}).animate({"opacity":1},motionDelay);
				}else if ($(this).parent().hasClass("aircheck_btn02"))
				{
					$(".f03 .aircheck04 .aircheck_list .aircheck_list_caption.caption_99_9 .caption_popup").css({"display":"block","opacity":0}).animate({"opacity":1},motionDelay);
				}
			}
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			if ($(".f03 .aircheck_box").eq(quiz03Step-1).find(".aircheck_btn_wrap .aircheck_btn").eq(0).css("display") == "none")
			{
				if ($(this).parent().index() == 1)
				{
					e.preventDefault();
					$(".f03").focus();
				}
			}else{
				if ($(this).parent().index() == 0)
				{
					e.preventDefault();
					$(".f03").focus();
				}
			}

			if (quiz03Step == 4)
			{
				if ($(this).parent().hasClass("aircheck_btn02"))
				{
					$(".f03 .aircheck04 .aircheck_list .aircheck_list_caption.caption_99_999 .caption_popup").css({"display":"block","opacity":0}).animate({"opacity":1},motionDelay);
				}
			}
		}
	});

	$(".f03 .aircheck_box .aircheck_list .aircheck_list_caption .aircheck_lisk_caption_in > a").keydown(function(e){
		
		if(e.keyCode === 13) { 
						
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
			$(this).parent().find(".caption_popup").animate({"opacity":0},motionDelay,function(){
				$(this).css("display","none");
			});
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			$(this).parent().find(".caption_popup").animate({"opacity":0},motionDelay,function(){
				$(this).css("display","none");
			});
		}
	});


	$(".f03").keydown(function(e){
		
		if(e.keyCode === 13) { 
			
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
			
			if ($(".f03").is(":focus"))
			{
				e.preventDefault();				
				if ($(".f03 .aircheck_r").css("display") == "block")
				{
					if (viewportWidth() > 768)
					{
						if ($(".f03 .aircheck_result.two_result").css("display") == "none")
						{
							if ($(".f03 .aircheck_result.one_result .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(7).html().length > 10)
							{
								$(".f03 .aircheck_result.one_result .result_pd_spec_w .result_pd_spec.single_spec .tool_tip_w.divide_combine .caption_txt").focus();
								$(".f03 .aircheck_result.one_result .result_pd_spec_w .result_pd_spec.single_spec .tool_tip_w.divide_combine .caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
							}else{
								$(".f03 .aircheck_result .result_pd_img .result_pd_btn").focus();
							}
						}else{
							if ($(".f03 .aircheck_result .result_pd_spec_w .spec_left ul li").eq(7).html().length > 10)
							{
								$(".f03 .aircheck_result .result_pd_spec.spec_left .tool_tip_w.divide_combine .caption_txt").focus();
								$(".f03 .aircheck_result .result_pd_spec.spec_left .tool_tip_w.divide_combine .caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
							}else if ($(".f03 .aircheck_result .result_pd_spec_w .spec_right ul li").eq(7).html().length > 10)
							{
								$(".f03 .aircheck_result .result_pd_spec.spec_right .tool_tip_w.divide_combine .caption_txt").focus();
								$(".f03 .aircheck_result .result_pd_spec.spec_right .tool_tip_w.divide_combine .caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
							}else{
								$(".f03 .aircheck_result.two_result .result_pd_img").eq(0).find(".result_pd_btn").focus();
							}
						}
					}else{
						if ($(".f03 .aircheck_r.type2 .result_tab_w").css("display") != "none")
						{
							$(".f03 .aircheck_r .result_tab_w ul li").eq(0).find("a").focus();
						}else{
							$(".f03 .aircheck_result .result_pd_img .result_pd_btn").focus();
						}
					}
				}else{
					if ($(".f03 .aircheck_box").eq(quiz03Step-1).find(".aircheck_btn_wrap .aircheck_btn").eq(0).css("display") != "none")
					{
						$(".f03 .aircheck_box").eq(quiz03Step-1).find(".aircheck_btn_wrap .aircheck_btn").eq(0).find("a").focus();
					}else{
						$(".f03 .aircheck_box").eq(quiz03Step-1).find(".aircheck_btn_wrap .aircheck_btn").eq(1).find("a").focus();
					}
					
				}
			}
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			
		}
	});

	$(document).on("keydown",".f03 .aircheck_result .result_pd_spec.spec_left .tool_tip_w.divide_combine .caption_txt", function(e){
		if(e.keyCode === 13) { 
			if (viewportWidth() > 768)
			{
			}else{
				e.preventDefault();
				$(this).parent().find(".caption_popup .popup_close").focus();
			}
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
			if (viewportWidth() > 768)
			{
				$(".f03 .aircheck_result .result_pd_spec.spec_left .tool_tip_w.divide_combine .caption_popup").animate({"opacity":0},motionDelay,function(){
					$(this).css("display","none");
				});

				e.preventDefault();
				if ($(".f03 .aircheck_result .result_pd_spec_w .spec_right ul li").eq(7).html().length > 10)
				{
					$(".f03 .aircheck_result .result_pd_spec.spec_right .tool_tip_w.divide_combine .caption_txt").focus();
					$(".f03 .aircheck_result .result_pd_spec.spec_right .tool_tip_w.divide_combine .caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
				}else{
					$(".f03 .aircheck_result.two_result .result_pd_img").eq(0).find(".result_pd_btn").focus();
				}
			}else{
				$(".f03 .aircheck_result.two_result .result_pd_img").eq(0).find(".result_pd_btn").focus();
			}
			
		}
		if((e.keyCode === 9 && e.shiftKey)){

			if (viewportWidth() > 768)
			{
				$(".f03 .aircheck_result .result_pd_spec.spec_left .tool_tip_w.divide_combine .caption_popup").animate({"opacity":0},motionDelay,function(){
					$(this).css("display","none");
				});

				e.preventDefault();
				$(".f03").focus();
				
			}else{
				e.preventDefault();
				$(".f03 .aircheck_r .result_tab_w ul li").eq(1).find("a").focus();
			}
		
		}
	});

	$(document).on("keydown",".f03 .aircheck_result .result_pd_spec.spec_right .tool_tip_w.divide_combine .caption_txt", function(e){
		if(e.keyCode === 13) { 
			if (viewportWidth() > 768)
			{
			}else{
				e.preventDefault();
				$(this).parent().find(".caption_popup .popup_close").focus();
			}
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
			e.preventDefault();
			if (viewportWidth() > 768)
			{
				$(".f03 .aircheck_result .result_pd_spec.spec_right .tool_tip_w.divide_combine .caption_popup").animate({"opacity":0},motionDelay,function(){
					$(this).css("display","none");
				});

				$(".f03 .aircheck_result.two_result .result_pd_img").eq(0).find(".result_pd_btn").focus();
			}else{
				$(".f03 .aircheck_result.two_result .result_pd_img").eq(1).find(".result_pd_btn").focus();
			}
			
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			e.preventDefault();
			if (viewportWidth() > 768)
			{
				$(".f03 .aircheck_result .result_pd_spec.spec_right .tool_tip_w.divide_combine .caption_popup").animate({"opacity":0},motionDelay,function(){
					$(this).css("display","none");
				});

				if ($(".f03 .aircheck_result .result_pd_spec_w .spec_left ul li").eq(7).html().length > 10)
				{
					$(".f03 .aircheck_result .result_pd_spec.spec_left .tool_tip_w.divide_combine .caption_txt").focus();
					$(".f03 .aircheck_result .result_pd_spec.spec_left .tool_tip_w.divide_combine .caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
				}else{
					$(".f03").focus();
				}
			}else{
				$(".f03 .aircheck_r .result_tab_w ul li").eq(1).find("a").focus();
			}
			
		}
	});

	$(".f03 .aircheck_result .result_pd_spec .tool_tip_w.divide_combine .caption_popup .popup_close").keydown(function(e){
		e.preventDefault();
		if(e.keyCode === 13) { 
			$(this).parent().parent().parent().find("caption_txt").focus();
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
		}
		if((e.keyCode === 9 && e.shiftKey)){ 			
		}
	});


	$(".f03 .aircheck_result .result_pd_img .result_pd_btn").keydown(function(e){
		
		if(e.keyCode === 13) { 
			
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
			if ($(this).parent().index() == 1)
			{
				e.preventDefault();
				$(".f03 .replay_btn").focus();
			}
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			if ($(this).parent().index() == 0)
			{
				e.preventDefault();
				if ($(".f03 .aircheck_result.two_result").css("display") == "none")
				{
					if ($(".f03 .aircheck_result.one_result .result_pd_spec_w .result_pd_spec.single_spec ul li").eq(7).html().length > 10)
					{
						$(".f03 .aircheck_result.one_result .result_pd_spec_w .result_pd_spec.single_spec .tool_tip_w.divide_combine .caption_txt").focus();
						$(".f03 .aircheck_result.one_result .result_pd_spec_w .result_pd_spec.single_spec .tool_tip_w.divide_combine .caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
					}else{
						$(".f03").focus();
					}
				}else{
					if ($(".f03 .aircheck_result .result_pd_spec_w .spec_right ul li").eq(7).html().length > 10)
					{
						$(".f03 .aircheck_result .result_pd_spec.spec_right .tool_tip_w.divide_combine .caption_txt").focus();
						$(".f03 .aircheck_result .result_pd_spec.spec_right .tool_tip_w.divide_combine .caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
					}else if ($(".f03 .aircheck_result .result_pd_spec_w .spec_left ul li").eq(7).html().length > 10)
					{
						$(".f03 .aircheck_result .result_pd_spec.spec_left .tool_tip_w.divide_combine .caption_txt").focus();
						$(".f03 .aircheck_result .result_pd_spec.spec_left .tool_tip_w.divide_combine .caption_popup").css({"display":"block","opacity":0}).stop().animate({"opacity":1},motionDelay);
					}else{
						$(".f03").focus();
					}
				}
			}
		}
	});

	$(".f03 .w_only .aircheck_result .result_pd_img .result_pd_btn").keydown(function(e){	
		if(e.keyCode === 13) { 
			
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 

		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			
		}
	});

	$(".f03 .m_only .aircheck_result .result_pd_img .result_pd_btn").keydown(function(e){
		if(e.keyCode === 13) { 
			
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
			
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			e.preventDefault();
			$(".f03 .aircheck_r .result_tab_w ul li").eq(1).find("a").focus();
		}
	});

	$(".f03 .aircheck_r .result_tab_w ul li a").keydown(function(e){
		if(e.keyCode === 13) { 
			
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
			if ($(this).parent().index() == 1)
			{
				if ($(".f03 .aircheck_r .result_tab_w ul li").eq(0).find("a").hasClass("active"))
				{
					if ($(".f03 .aircheck_result_w.m_only .aircheck_result.one_result").eq(0).find(".result_pd_spec_w .result_pd_spec.single_spec ul li").eq(7).html().length > 10)
					{
						e.preventDefault();
						$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result").eq(0).find(".result_pd_spec_w .result_pd_spec.single_spec ul li .caption_txt").focus();
						$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result").eq(0).find(".result_pd_spec_w .result_pd_spec.single_spec ul li .caption_popup").css({"display":"block","opacity":0}).animate({"opacity":1},motionDelay);
					}
				}else{
					if ($(".f03 .aircheck_result_w.m_only .aircheck_result.one_result").eq(1).find(".result_pd_spec_w .result_pd_spec.single_spec ul li").eq(7).html().length > 10)
					{
						e.preventDefault();
						$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result").eq(1).find(".result_pd_spec_w .result_pd_spec.single_spec ul li .caption_txt").focus();
						$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result").eq(1).find(".result_pd_spec_w .result_pd_spec.single_spec ul li .caption_popup").css({"display":"block","opacity":0}).animate({"opacity":1},motionDelay);
					}
				}
			}
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			if ($(this).parent().index() == 0)
			{
				e.preventDefault();
				$(".f03 ").focus();
			}
		}
	});

	$(document).on("keydown",".f03 .aircheck_result_w.m_only .aircheck_result.one_result .result_pd_spec .tool_tip_w.divide_combine .caption_txt", function(e){
		if(e.keyCode === 13) { 
			
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
			e.preventDefault();
			$(this).parent().parent().parent().parent().parent().parent().parent().find(".result_pd_btn").focus();

			$(this).parent().find(".caption_popup").animate({"opacity":0},motionDelay,function(){
				$(this).css("display","none");
			});

		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			e.preventDefault();
			$(".f03 .aircheck_r .result_tab_w ul li").eq(1).find("a").focus();

			$(this).parent().find(".caption_popup").animate({"opacity":0},motionDelay,function(){
				$(this).css("display","none");
			});
		}
	});

	$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result  .result_pd_img .result_pd_btn").keydown(function(e){
		if(e.keyCode === 13) { 
			
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
			e.preventDefault();
			$(".f03 .replay_btn").focus();
		}
		if((e.keyCode === 9 && e.shiftKey)){
			if ($(this).parent().parent().parent().find(".result_pd_spec_w .result_pd_spec.single_spec ul li").eq(7).html().length > 10)
			{
				e.preventDefault();
				$(this).parent().parent().parent().find(".result_pd_spec_w .result_pd_spec.single_spec ul li .caption_txt").focus();
				$(this).parent().parent().parent().find(".result_pd_spec_w .result_pd_spec.single_spec ul li .caption_popup").css({"display":"block","opacity":0}).animate({"opacity":1},motionDelay);
			}
		}
	});

	$(".f03 .aircheck_result_w.w_only .cs_wrap a").keydown(function(e){	
		if(e.keyCode === 13) { 
			
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			if ($(this).index() == 0)
			{
				e.preventDefault();
				if (spacCount == 1)
				{
					$(".f03 .aircheck_result.one_result .result_pd_img .result_pd_btn").focus();
				}else if (spacCount == 2)
				{
					$(".f03 .aircheck_result.two_result .result_pd_img").eq(1).find(".result_pd_btn").focus();
				}else 
				{
					if ($(".f03 .aircheck_result.two_result").css("left") == 0 || $(".f03 .aircheck_result.two_result").css("left") == "0px")
					{
						$(".f03 .aircheck_result.two_result .result_pd_img").eq(1).find(".result_pd_btn").focus();
					}else{
						$(".f03 .aircheck_result.one_result .result_pd_img .result_pd_btn").focus();
					}
				}
			}
			
		}
	});

	$(".f03 .aircheck_result_w.m_only .cs_wrap a").keydown(function(e){	
		if(e.keyCode === 13) { 
			
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			if ($(this).index() == 0)
			{
				e.preventDefault();
				if ($(".f03 .m_only .one_result01").css("left") == 0 || $(".f03 .m_only .one_result01").css("left") == "0px")
				{
					$(".f03 .m_only .one_result01 .result_pd_img .result_pd_btn").focus();
				}else if ($(".f03 .m_only .one_result02").css("left") == 0 || $(".f03 .m_only .one_result02").css("left") == "0px")
				{
					$(".f03 .m_only .one_result02 .result_pd_img .result_pd_btn").focus();
				}else if ($(".f03 .m_only .one_result03").css("left") == 0 || $(".f03 .m_only .one_result03").css("left") == "0px")
				{
					$(".f03 .m_only .one_result03 .result_pd_img .result_pd_btn").focus();
				}
			}
			
		}
	});

	$(".f03 .aircheck01 .aircheck_list .aircheck_list_caption .aircheck_lisk_caption_in > a").keydown(function(e){	
		if(e.keyCode === 13) { 
			e.preventDefault();
			$(this).click();
			$(".f03 .aircheck01 .aircheck_list .caption_click_popup .popup_close a").focus();
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			
		}
	});

	$(".f03 .aircheck01 .aircheck_list .caption_click_popup .popup_close a").keydown(function(e){	
		if(e.keyCode === 13) { 
			e.preventDefault();
			$(this).click();
			$(".f03 .aircheck01 .aircheck_list .aircheck_list_caption .aircheck_lisk_caption_in > a").focus();
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			
		}
	});

	$(".f03 .replay_btn").keydown(function(e){	
		if(e.keyCode === 13) { 
			e.preventDefault();
			$(this).click();
			setTimeout(function(){
				$(".f03").focus();
			},motionDelay);
		}
		if((e.keyCode === 9 && !e.shiftKey)){ 
		}
		if((e.keyCode === 9 && e.shiftKey)){ 
			
			if (viewportWidth() > 768)
			{
				if ($(".f03 .aircheck_r").css("display") == "block")
				{
					e.preventDefault();
					if ($(".f03 .aircheck_result.two_result").css("display") == "none")
					{
						$(".f03 .aircheck_result.one_result .result_pd_img .result_pd_btn").focus();
					}else{
						$(".f03 .aircheck_result.two_result .result_pd_img").eq(1).find(".result_pd_btn").focus();
					}
				}
			}else{
				if ($(".f03 .aircheck_r").css("display") == "block")
				{
					e.preventDefault();
					if ($(".f03 .aircheck_result_w.m_only .aircheck_result.one_result").eq(0).css("display") == "block")
					{
						$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result").eq(0).find(".result_pd_img .result_pd_btn").focus();
					}else {
						$(".f03 .aircheck_result_w.m_only .aircheck_result.one_result").eq(1).find(".result_pd_img .result_pd_btn").focus();
					}
				}else{
					if (quiz03Step == 4)
					{
						$(".f03 .aircheck04 .aircheck_list .aircheck_list_caption.caption_99_9 .caption_popup").css({"display":"block","opacity":0}).animate({"opacity":1},motionDelay);
					}
				}
			}			
		}
	});
});