function video01Title(t)
{
	if (t > 0 && t <= 3)
	{
		if (!interview01Question)
		{
			interview01Question = true;
			$(".f3_10 .caption_w .c_circle").css({"transition":"opacity 0.3s", "-webkit-transition":"all 0.3s", "opacity":1});
			$(".f3_10 .caption_w .c_circle .caption").css("display","none");
			$(".f3_10 .caption_w .c_circle .question1").css("display","block");
		}
	}else if (t >= 60 && t <= 64)
	{
		if (!interview01Question)
		{
			interview01Question = true;
			$(".f3_10 .caption_w .c_circle").css({"transition":"opacity 0.3s", "-webkit-transition":"all 0.3s", "opacity":1});
			$(".f3_10 .caption_w .c_circle .caption").css("display","none");
			$(".f3_10 .caption_w .c_circle .question2").css("display","block");
		}
	}else if (t >= 118 && t <= 121)
	{
		if (!interview01Question)
		{
			interview01Question = true;
			$(".f3_10 .caption_w .c_circle").css({"transition":"opacity 0.3s", "-webkit-transition":"all 0.3s", "opacity":1});
			$(".f3_10 .caption_w .c_circle .caption").css("display","none");
			$(".f3_10 .caption_w .c_circle .question3").css("display","block");
		}
	}else{
		if (interview01Question)
		{
			interview01Question = false;
			$(".f3_10 .caption_w .c_circle").css({"transition":"opacity 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
		}
	}
}

function video02Title(t)
{
	if (t > 0 && t <= 3)
	{
		if (!interview02Question)
		{
			interview02Question = true;
			$(".f4_1 .caption_w .c_circle").css({"transition":"opacity 0.3s", "-webkit-transition":"all 0.3s", "opacity":1});
			$(".f4_1 .caption_w .c_circle .caption").css("display","none");
			$(".f4_1 .caption_w .c_circle .question1").css("display","block");
		}
	}else if (t >= 61 && t <= 66)
	{
		if (!interview02Question)
		{
			interview02Question = true;
			$(".f4_1 .caption_w .c_circle").css({"transition":"opacity 0.3s", "-webkit-transition":"all 0.3s", "opacity":1});
			$(".f4_1 .caption_w .c_circle .caption").css("display","none");
			$(".f4_1 .caption_w .c_circle .question2").css("display","block");
		}
	}else if (t >= 98 && t <= 103)
	{
		if (!interview02Question)
		{
			interview02Question = true;
			$(".f4_1 .caption_w .c_circle").css({"transition":"opacity 0.3s", "-webkit-transition":"all 0.3s", "opacity":1});
			$(".f4_1 .caption_w .c_circle .caption").css("display","none");
			$(".f4_1 .caption_w .c_circle .question3").css("display","block");
		}
	}else if (t >= 175 && t <= 179)
	{
		if (!interview02Question)
		{
			interview02Question = true;
			$(".f4_1 .caption_w .c_circle").css({"transition":"opacity 0.3s", "-webkit-transition":"all 0.3s", "opacity":1});
			$(".f4_1 .caption_w .c_circle .caption").css("display","none");
			$(".f4_1 .caption_w .c_circle .question4").css("display","block");
		}
	}else{
		if (interview02Question)
		{
			interview02Question = false;
			$(".f4_1 .caption_w .c_circle").css({"transition":"opacity 0.3s", "-webkit-transition":"all 0.3s", "opacity":0});
		}
	}
}
var viewCaption01 = false;
function video01Caption(t)
{	
	$(".f3_10 .caption_w2.script_w").css("opacity",1);
	if (t >= 5 && t <= 17)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_1").css("display","block");
	}else if (t >= 18 && t <= 27)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_2").css("display","block");
	}else if (t >= 28 && t <= 32)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_3").css("display","block");
	}else if (t >= 33 && t <= 45)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_4").css("display","block");
	}else if (t >= 46 && t <= 51)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_5").css("display","block");
	}else if (t >= 52 && t <= 60)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_6").css("display","block");
	}else if (t >= 65 && t <= 75)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_7").css("display","block");
	}else if (t >= 75 && t <= 80)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_8").css("display","block");
	}else if (t >= 80 && t <= 87)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_9").css("display","block");
	}else if (t >= 88 && t <= 93)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_10").css("display","block");
	}else if (t >= 94 && t <= 100)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_11").css("display","block");
	}else if (t >= 101 && t <= 107)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_12").css("display","block");
	}else if (t >= 108 && t <= 117)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_13").css("display","block");
	}else if (t >= 122 && t <= 128)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_14").css("display","block");
	}else if (t >= 128 && t <= 137)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_15").css("display","block");
	}else if (t >= 138 && t <= 144)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_16").css("display","block");
	}else if (t >= 145 && t <= 155)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_17").css("display","block");
	}else if (t >= 156 && t <= 161)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_18").css("display","block");
	}else if (t >= 162 && t <= 170)
	{
		viewCaption01 = true;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
		$(".f3_10 .caption_w2.script_w .script_19").css("display","block");
	}else {
		viewCaption01 = false;
		$(".f3_10 .caption_w2.script_w .script").css("display","none");
	}

	if (viewCaption01)
	{
		$(".f3_10 .txt").css("display","none");
		$(".f3_10 .caption_w2.script_w").css("display","block");
	}else{
		if (t < 5)
		{
			$(".f3_10 .txt").css("display","block");
			$(".f3_10 .caption_w2.script_w").css("display","none");
		}
	}
}

var viewCaption02 = false;
function video02Caption(t)
{
	$(".f4_1 .caption_w2.script_w").css("opacity",1);
	if (t >= 5 && t <= 9)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_1").css("display","block");
	}else if (t >= 10 && t <= 14)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_2").css("display","block");
	}else if (t >= 14 && t <= 25)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_3").css("display","block");
	}else if (t >= 26 && t <= 34)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_4").css("display","block");
	}else if (t >= 35 && t <= 47)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_5").css("display","block");
	}else if (t >= 48 && t <= 61)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_6").css("display","block");
	}else if (t >= 67 && t <= 72)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_7").css("display","block");
	}else if (t >= 73 && t <= 79)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_8").css("display","block");
	}else if (t >= 80 && t <= 98)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_9").css("display","block");
	}else if (t >= 105 && t <= 114)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_10").css("display","block");
	}else if (t >= 115 && t <= 122)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_11").css("display","block");
	}else if (t >= 123 && t <= 130)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_12").css("display","block");
	}else if (t >= 131 && t <= 140)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_13").css("display","block");
	}else if (t >= 141 && t <= 153)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_14").css("display","block");
	}else if (t >= 154 && t <= 157)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_15").css("display","block");
	}else if (t >= 158 && t <= 165)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_16").css("display","block");
	}else if (t >= 166 && t <= 175)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_17").css("display","block");
	}else if (t >= 182 && t <= 190)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_18").css("display","block");
	}else if (t >= 191 && t <= 199)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_19").css("display","block");
	}else if (t >= 200 && t <= 208)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_20").css("display","block");
	}else if (t >= 209 && t <= 217)
	{
		viewCaption02 = true;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
		$(".f4_1 .caption_w2.script_w .script_21").css("display","block");
	}else {
		viewCaption02 = false;
		$(".f4_1 .caption_w2.script_w .script").css("display","none");
	}

	if (viewCaption02)
	{
		$(".f4_1 .txt").css("display","none");
		$(".f4_1 .caption_w2.script_w").css("display","block");
	}else{		
		if (t < 5)
		{
			$(".f4_1 .txt").css("display","block");		
			$(".f4_1 .caption_w2.script_w").css("display","none");
		}
	}
}

var viewInfo01 = false;
function video01Info(t)
{	
	if (t >= 6 && t <= 12)
	{
		viewInfo01 = true;
		$(".f3_10 .caption_w2.movie_cap_w .movie_cap").css("display","none");
		$(".f3_10 .caption_w2.movie_cap_w .movie_cap1").css("display","block");
	}else if (t >= 33 && t <= 41)
	{
		viewInfo01 = true;
		$(".f3_10 .caption_w2.movie_cap_w .movie_cap").css("display","none");
		$(".f3_10 .caption_w2.movie_cap_w .movie_cap1").css("display","block");
	}else if (t >= 75 && t <= 89)
	{
		viewInfo01 = true;
		$(".f3_10 .caption_w2.movie_cap_w .movie_cap").css("display","none");
		$(".f3_10 .caption_w2.movie_cap_w .movie_cap1").css("display","block");
	}else if (t >= 101 && t <= 106)
	{
		viewInfo01 = true;
		$(".f3_10 .caption_w2.movie_cap_w .movie_cap").css("display","none");
		$(".f3_10 .caption_w2.movie_cap_w .movie_cap1").css("display","block");
	}else if (t >= 137 && t <= 143)
	{
		viewInfo01 = true;
		$(".f3_10 .caption_w2.movie_cap_w .movie_cap").css("display","none");
		$(".f3_10 .caption_w2.movie_cap_w .movie_cap1").css("display","block");
	}else if (t >= 162 && t <= 167)
	{
		viewInfo01 = true;
		$(".f3_10 .caption_w2.movie_cap_w .movie_cap").css("display","none");
		$(".f3_10 .caption_w2.movie_cap_w .movie_cap1").css("display","block");
	}else {
		viewInfo01 = false;
		$(".f3_10 .caption_w2.movie_cap_w .movie_cap").css("display","none");
	}

	if (viewInfo01)
	{
		$(".f3_10 .caption_w2.movie_cap_w").css("display","block");
	}else{
		$(".f3_10 .caption_w2.movie_cap_w").css("display","none");
	}
}

var viewInfo02 = false;
function video02Info(t)
{
	if (t >= 5 && t <= 9)
	{
		viewInfo02 = true;
		$(".f4_1 .caption_w2.movie_cap_w .movie_cap").css("display","none");
		$(".f4_1 .caption_w2.movie_cap_w .movie_cap1").css("display","block");
	}else if (t >= 15 && t <= 25)
	{
		viewInfo02 = true;
		$(".f4_1 .caption_w2.movie_cap_w .movie_cap").css("display","none");
		$(".f4_1 .caption_w2.movie_cap_w .movie_cap2").css("display","block");
	}else if (t >= 26 && t <= 33)
	{
		viewInfo02 = true;
		$(".f4_1 .caption_w2.movie_cap_w .movie_cap").css("display","none");
		$(".f4_1 .caption_w2.movie_cap_w .movie_cap3").css("display","block");
	}else if (t >= 68 && t <= 76)
	{
		viewInfo02 = true;
		$(".f4_1 .caption_w2.movie_cap_w .movie_cap").css("display","none");
		$(".f4_1 .caption_w2.movie_cap_w .movie_cap4").css("display","block");
	}else if (t >= 80 && t <= 95)
	{
		viewInfo02 = true;
		$(".f4_1 .caption_w2.movie_cap_w .movie_cap").css("display","none");
		$(".f4_1 .caption_w2.movie_cap_w .movie_cap5").css("display","block");
	}else if (t >= 163 && t <= 169)
	{
		viewInfo02 = true;
		$(".f4_1 .caption_w2.movie_cap_w .movie_cap").css("display","none");
		$(".f4_1 .caption_w2.movie_cap_w .movie_cap6").css("display","block");
	}else if (t >= 187 && t <= 196)
	{
		viewInfo02 = true;
		$(".f4_1 .caption_w2.movie_cap_w .movie_cap").css("display","none");
		$(".f4_1 .caption_w2.movie_cap_w .movie_cap7").css("display","block");
	}else {
		viewInfo02 = false;
		$(".f4_1 .caption_w2.movie_cap_w .movie_cap").css("display","none");
	}

	if (viewInfo02)
	{
		$(".f4_1 .caption_w2.movie_cap_w").css("display","block");
	}else{
		$(".f4_1 .caption_w2.movie_cap_w").css("display","none");
	}
}