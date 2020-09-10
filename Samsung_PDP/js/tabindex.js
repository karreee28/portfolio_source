$(function() {
	$(".f03 .slide_obj .arrow a.left").keydown(function(e) {
		if(e.keyCode == 13) { // enter
			e.preventDefault();
			console.log("moveSliderIndex : " + moveSliderIndex);
			if(moveSliderIndex - 1 == 0)
				$(".f03 .slide_obj .arrow a.right").focus();
			else
				$(".f03 .slide_obj .arrow a.left").focus();
			

			$(".f03 .slide_obj .arrow a.left").trigger("click");
		}
	});
	

	$(".f03 .slide_obj .arrow a.right").keydown(function(e) {
		if(e.keyCode == 13) { // enter
			e.preventDefault();
			console.log("moveSliderIndex : " + moveSliderIndex);
			if(moveSliderIndex + 1 == 2)
			{
				console.log("go Left");
				$(".f03 .slide_obj .arrow a.left").focus();
			}
			else
			{
				console.log("go Right");
				$(".f03 .slide_obj .arrow a.right").focus();
			}
			

			$(".f03 .slide_obj .arrow a.right").trigger("click");
		}
	});


	$(".popup_gallery .gallery_thumb ul li a").keydown(function(e) {
		if(e.keyCode == 13) { // enter
			e.preventDefault();
            var imgIndex = $(this).parent().index();
			$(".popup_gallery .gallery_thumb ul li").eq(imgIndex).find("a").trigger("click");

			if(imgIndex == 3)
				$(".popup_gallery .gallery_slider .prev_btn").focus();
			else
				$(".popup_gallery .gallery_slider .next_btn").focus();
        }
	});

	$(".popup_gallery .gallery_slider .prev_btn").keydown(function(e) {
		if(e.keyCode === 13) { // enter
			e.preventDefault();
            if(galleryIndex-1 == 0) {
                $(".popup_gallery .gallery_slider .next_btn").focus();
            };
			$(".popup_gallery .gallery_slider .prev_btn").trigger("click");
        };

        if((e.keyCode === 9 && !e.shiftKey)){ // tab
            e.preventDefault();
            
            if($(".popup_gallery .gallery_slider .next_btn").attr("style") == "display: none;") {
                $(".popup_gallery .gallery_slider .close_btn").focus();
            } else {
                $(".popup_gallery .gallery_slider .next_btn").focus();
            };
        };

        if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
            e.preventDefault();

            if($(".popup_gallery .gallery_slider .prev_btn").attr("style") == "display: none;") {
                $(".popup_gallery .gallery_slider .next_btn").focus();
            } else {
                $(".popup_gallery .gallery_slider .close_btn").focus();
            };
        };
    });

    $(".popup_gallery .gallery_slider .next_btn").keydown(function(e) {
		if(e.keyCode === 13) { // enter
			e.preventDefault();
            if(galleryIndex+1 == 3) {
                $(".popup_gallery .gallery_slider .prev_btn").focus();
            };
			$(".popup_gallery .gallery_slider .next_btn").trigger("click");
        };

        if((e.keyCode === 9 && !e.shiftKey)){ // tab
            e.preventDefault();
            if($(".popup_gallery .gallery_slider .next_btn").attr("style") == "display: none;") {
                $(".popup_gallery .gallery_slider .prev_btn").focus();
            } else {
                $(".popup_gallery .gallery_slider .close_btn").focus();
            };
        };

        if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
            e.preventDefault();
            if($(".popup_gallery .gallery_slider .prev_btn").attr("style") == "display: none;") {
                $(".popup_gallery .gallery_slider .close_btn").focus();
            } else {
                $(".popup_gallery .gallery_slider .prev_btn").focus();
            };
        };
    });

    $(".popup_gallery .gallery_slider .close_btn").keydown(function(e) {
        e.preventDefault();

		if(e.keyCode === 13) { // enter

            $(this).trigger("click");
			$(".popup_gallery .gallery_thumb ul li").eq(galleryIndex).find("a").focus();
        };

        if((e.keyCode === 9 && !e.shiftKey)){ // tab
            if($(".popup_gallery .gallery_slider .prev_btn").attr("style") == "display: none;") {
                $(".popup_gallery .gallery_slider .next_btn").focus();
            } else {
                $(".popup_gallery .gallery_slider .prev_btn").focus();
            };
        };

        if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
            if($(".popup_gallery .gallery_slider .next_btn").attr("style") == "display: none;") {
                $(".popup_gallery .gallery_slider .prev_btn").focus();
            } else {
                $(".popup_gallery .gallery_slider .next_btn").focus();
            };
        };
    });
	$(".f08 .btn_wrap .btn a").keydown(function(e) {
		if(e.keyCode === 13) { // enter
			e.preventDefault();
			var pIndex = $(this).parent().index();
            $(".f08 .btn_wrap .btn").eq(pIndex).find("a").trigger("click");
			if(pIndex == 3)
				$(".f08 .gallery_slider .prev_btn").focus();
			else
				$(".f08 .gallery_slider .next_btn").focus();
        };
	});

	$(".f08 .gallery_slider .prev_btn").keydown(function(e) {
		if(e.keyCode === 13) { // enter
			e.preventDefault();
            if(sliderIndex-1 == 0) {
                $(".f08 .gallery_slider .next_btn").focus();
            };
			$(".f08 .gallery_slider .prev_btn").trigger("click");
        };

        if((e.keyCode === 9 && !e.shiftKey)){ // tab
            e.preventDefault();
            
            if($(".f08 .gallery_slider .next_btn").attr("style") == "display: none;") {
                $(".f08 .gallery_slider .close_btn").focus();
            } else {
                $(".f08 .gallery_slider .next_btn").focus();
            };
        };

        if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
            e.preventDefault();

            if($(".f08 .gallery_slider .close_btn").attr("style") == "display: none;") {
                $(".f08 .gallery_slider .next_btn").focus();
            } else {
                $(".f08 .gallery_slider .close_btn").focus();
            };
        };
    });

    $(".f08 .gallery_slider .next_btn").keydown(function(e) {
		if(e.keyCode === 13) { // enter
			e.preventDefault();
            if(sliderIndex+1 == 3) {
                $(".f08 .gallery_slider .prev_btn").focus();
            };
			$(".f08 .gallery_slider .next_btn").trigger("click");
			
        };

        if((e.keyCode === 9 && !e.shiftKey)){ // tab
            e.preventDefault();

            if($(".f08 .gallery_slider .close_btn").attr("style") == "display: none;") {
                $(".f08 .gallery_slider .prev_btn").focus();
            } else {
                $(".f08 .gallery_slider .close_btn").focus();
            };
        };

        if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
            e.preventDefault();
            if($(".f08 .gallery_slider .prev_btn").attr("style") == "display: none;") {
                $(".f08 .gallery_slider .close_btn").focus();
            } else {
                $(".f08 .gallery_slider .prev_btn").focus();
            };
        };
    });

    $(".f08 .gallery_slider .close_btn").keydown(function(e) {
        e.preventDefault();

		if(e.keyCode === 13) { // enter
            $(this).trigger("click");
			$(".f08 .btn_wrap .btn").eq(sliderIndex).find("a").focus();
        };

        if((e.keyCode === 9 && !e.shiftKey)){ // tab
            if($(".f08 .gallery_slider .prev_btn").attr("style") == "display: none;") {
                $(".f08 .gallery_slider .next_btn").focus();
            } else {
                $(".f08 .gallery_slider .prev_btn").focus();
            };
        };

        if((e.keyCode === 9 && e.shiftKey)){ // shift+tab
            if($(".f08 .gallery_slider .next_btn").attr("style") == "display: none;") {
                $(".f08 .gallery_slider .prev_btn").focus();
            } else {
                $(".f08 .gallery_slider .next_btn").focus();
            };
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