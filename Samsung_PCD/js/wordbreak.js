$(function(){
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
        var opt = $.extend(defaultOption, option);
        if (/MSIE/.test(navigator.userAgent) && opt.OffForIE == false && opt.useCSSonIE == true) {
            var addWordBreakKeepAll = function(obj) {
                $(obj).css({
                    'word-break': 'keep-all',
                    'word-wrap': 'break-word'
                });
            };
        } else if (!/MSIE/.test(navigator.userAgent) || /MSIE/.test(navigator.userAgent) && opt.OffForIE == false && opt.useCSSonIE == false) {
            var addWordBreakKeepAll = function(obj) {
                    var html = $(obj).html();
                    html = html.replace(/(\r\n|\n|\r)/gm, ' ＃＆＊＠§ ');
                    var textArr = html.split(' ');
                    textArr = textArr.filter(function(e) {
                        return e;
                    });
                    $(obj).text('');
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
	if(is_there_end_angle_bracket(str)){skip=false;}};$(obj).html(full_str.replace(/＃＆＊＠§/g,"\n"));};}
	return this.each(function(){addWordBreakKeepAll(this);});};

	$('.ac_wrap .txt .benefit-title').wordBreakKeepAll({useCSSonIE: true});
	$('.ac_wrap .txt .feature-title').wordBreakKeepAll({useCSSonIE: true});
	$('.ac_wrap .txt .feature-desc').wordBreakKeepAll({useCSSonIE: true});
	$('.ac_wrap .ico_wrap .ico .ico_title').wordBreakKeepAll({useCSSonIE: true});
	$('.ac_wrap .ico_wrap .ico .ico_desc').wordBreakKeepAll({useCSSonIE: true});
	$('.ac_wrap .ico_wrap .ico .popup_txt').wordBreakKeepAll({useCSSonIE: true});
});
	