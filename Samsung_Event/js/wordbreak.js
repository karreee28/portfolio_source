jQuery(function(){

	/*!
	  jQuery word-break keep-all Plugin
	  ver 1.3.0
	 
	  Copyright 2012, Ahn Hyoung-woo (mytory@gmail.com)
	  Dual licensed under the MIT or GPL Version 2 licenses.
	  http://jquery.org/license
	 
	  https://github.com/mytory/jquery-word-break-keep-all
	  http://mytory.co.kr/archives/2801
	 
	  Date: 2013-09-04
	 */

	jQuery.fn.wordBreakKeepAll = function(option) {
        var is_there_end_angle_bracket = function(str) {
            return str.lastIndexOf('<') < str.lastIndexOf('>');
        };
        var is_there_start_angle_bracket = function(str) {
            return str.lastIndexOf('>') < str.lastIndexOf('<');
        };
        var is_there_no_angle_bracket = function(str) {
            return str.lastIndexOf('>') == str.lastIndexOf('<');
        };
        var defaultOption = {
            OffForIE: false,
            useCSSonIE: true
        };
        var opt = jQuery.extend(defaultOption, option);
        if (/MSIE/.test(navigator.userAgent) && opt.OffForIE == false && opt.useCSSonIE == true) {
            var addWordBreakKeepAll = function(obj) {
                jQuery(obj).css({
                    'word-break': 'keep-all',
                    'word-wrap': 'break-word'
                });
                /*if (jQuery(obj).css('display') == 'inline') {
                    jQuery(obj).css('display', 'block');
                }*/
            };
        } else if (!/MSIE/.test(navigator.userAgent) || /MSIE/.test(navigator.userAgent) && opt.OffForIE == false && opt.useCSSonIE == false) {
            var addWordBreakKeepAll = function(obj) {
                    var html = jQuery(obj).html();
                    html = html.replace(/(\r\n|\n|\r)/gm, ' ＃＆＊＠§ ');
                    var textArr = html.split(' ');
                    textArr = textArr.filter(function(e) {
                        return e;
                    });
                    jQuery(obj).text('');
                    var skip = false;
                    var full_str = '';
                    for (var i = 0, j = textArr.length; i < j; i++) {
                        var str = textArr[i];
                        if (skip == false && is_there_no_angle_bracket(str) && str.indexOf('＃＆＊＠§') == -1) {
                            full_str += '<span style="white-space: nowrap">' + str + '</span> ';
                        } else {
                            full_str += str + ' ';
                        }
	if(is_there_start_angle_bracket(str)){skip=true;}
	if(is_there_end_angle_bracket(str)){skip=false;}};jQuery(obj).html(full_str.replace(/＃＆＊＠§/g,"\n"));};}
	return this.each(function(){addWordBreakKeepAll(this);});};

	jQuery('.Event_wrap p').wordBreakKeepAll({useCSSonIE: true});
	jQuery('.feature .feature_title').wordBreakKeepAll({useCSSonIE: true});
	jQuery('.feature h5').wordBreakKeepAll({useCSSonIE: true});
	jQuery('.feature .desc').wordBreakKeepAll({useCSSonIE: true});
	jQuery('.feature .notice p').wordBreakKeepAll({useCSSonIE: true});
	jQuery('.notice ul li').wordBreakKeepAll({useCSSonIE: true});
	jQuery('.popup_box .popup.popup_01 .txt.top p').wordBreakKeepAll({useCSSonIE: true});
	jQuery('.popup_box .popup.popup_02 .bottom p').wordBreakKeepAll({useCSSonIE: true});
	jQuery('.ico p').wordBreakKeepAll({useCSSonIE: true});
	jQuery('.quiz_wrap .desc_txt p').wordBreakKeepAll({useCSSonIE: true});
	jQuery('.quiz .img_area .txt .sns_txt').wordBreakKeepAll({useCSSonIE: true});
	jQuery('.popup_box .popup.popup_02 h6').wordBreakKeepAll({useCSSonIE: true});
});
	
