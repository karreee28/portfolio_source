$(document).ready(function(){
  headerScroll();
  gnbMobile();
  toTop();
  scrollAnimation();
  teamRandom();
});

$(window).scroll(function() {
  headerScroll();
  scrollAnimation();
});





// 스크롤 시 header에 클래스 추가 및 To Top 버튼 추가
function headerScroll() {
	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
		$('.header').addClass('scrolled');
    $('.toTop').fadeIn();
	} else {
		$('.header').removeClass('scrolled');
		$('.toTop').fadeOut();
	}
}



// header mobile
function gnbMobile(){
  $('.header .m_btn').click(function() {
    event.preventDefault();
    if($('.header .navW').css('display') === 'block'){
      $('.header .navW').slideUp();
      $('.header').removeClass('open');
    } else {
      $('.header .navW').slideDown();
      $('.header').addClass('open');
    }
  });
};

//To Top 버튼
function toTop(){
  $(".toTop").click(function() {
    $('html, body').animate({
        scrollTop : 0
    }, 400);
    return false;
  });
};


//Scroll Animation
function scrollAnimation() {
  $('.animated').each( function(i){

    var objectTop = $(this).offset().top;
    var objectStart = objectTop + 300;
    var mObjectStart = objectTop + 50;
    var objectBottom = objectTop + $(this).outerHeight();
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();
    var windowWidth = $(window).width();

    if( windowWidth > 768 && windowBottom > objectStart ){
      $(this).addClass('active');
    };
    if( windowWidth <= 768 && windowBottom > mObjectStart ){
      $(this).addClass('active');
    };
    if( windowTop > objectBottom || windowBottom < objectTop ){
      $(this).removeClass('active');
    };

  });
}


//Team image 랜덤 배열
function teamRandom(){
  $('.about .subS03 .boxW').each(function() {
    var len = $('.about .subS03 .boxW .box').length;
    var boxW = $(this);
    var cdArr = boxW.children('.box');

    cdArr.sort(function() {
      var temp = parseInt(Math.random()*len);
      var temp1 = parseInt(Math.random()*len);
      return temp1-temp;
    }).appendTo(boxW);
  });
}
