jQuery(function() {
	
    jQuery(".popup_03 .btn_box a").keydown(function(e) {
		e.preventDefault();
        if(e.keyCode === 13) { // enter
			jQuery(this).trigger("click");
        };

        if((e.keyCode === 9 && !e.shiftKey)){ // tab
        };

        if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
        };
    });
    
	jQuery(".quiz_wrap .quiz_screen .quiz1_box .quiz_btn_inner a").keydown(function(e) {
		
        if(e.keyCode === 13) { // enter
			e.preventDefault();
			jQuery(this).trigger("click");

			if(jQuery(".quiz_wrap .quiz_screen .result_box .result.true").css("opacity") == 1)
				jQuery(".quiz_wrap .quiz_screen .result_box .result.true .quiz_btn_inner a").focus();
			else
				jQuery(".quiz_wrap .quiz_screen .result_box .result.false .quiz_btn_inner a").focus();
        };

    });

	jQuery(".quiz_wrap .quiz_screen .quiz2_box .quiz_btn_inner a").keydown(function(e) {
		
        if(e.keyCode === 13) { // enter
			e.preventDefault();
			jQuery(this).trigger("click");

			if(jQuery(".quiz_wrap .quiz_screen .result_box .result.true").css("opacity") == 1)
				jQuery(".quiz_wrap .quiz_screen .result_box .result.true .quiz_btn_inner a").focus();
			else
				jQuery(".quiz_wrap .quiz_screen .result_box .result.false .quiz_btn_inner a").focus();
        };

    });


	jQuery(".quiz_wrap .quiz_screen .result_box .result .quiz_btn_inner a").keydown(function(e) {
        if(e.keyCode === 13) { // enter
			e.preventDefault();
			jQuery(this).trigger("click");
			if(nowQuizStep == 1)
				jQuery(".quiz_wrap .quiz_screen .quiz2_box .quiz ul li a").eq(0).focus();
			else if(nowQuizStep == 2)
				jQuery(".quiz_wrap .quiz_screen .quiz_box.quiz3_box .quiz ul li a").eq(0).focus();
        };

    });
	
	jQuery(".quiz_wrap .quiz_screen .quiz_box.quiz3_box .quiz ul li a").keydown(function(e) {
        if(e.keyCode === 13) { // enter
			e.preventDefault();
			jQuery(this).trigger("click");
			jQuery(".popup_box .popup.popup_01 .txt.top .check_box input[type=checkbox]").focus();
        };
    });

	jQuery(".popup_box .popup_box_inner .close a").keydown(function(e) {
         if((e.keyCode === 9 && !e.shiftKey)){ // enter
			e.preventDefault();
			jQuery(".popup_box .popup.popup_01 .txt.top .check_box input[type=checkbox]").focus();
        };
    });

	jQuery(".popup_box .popup.popup_01 .txt.top .check_box input[type=checkbox]").keydown(function(e) {
		if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
			e.preventDefault();
			jQuery(".popup_box .popup_box_inner .close a").focus();
        };
	});


    /*
    $("").keydown(function(e) {
        if(e.keyCode === 13) { // enter
        };

        if((e.keyCode === 9 && !e.shiftKey)){ // tab
        };

        if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
        };
    });
    */

});