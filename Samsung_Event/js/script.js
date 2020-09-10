var isTestEvent = false;

$(window).load(onLoad);

function onLoad()
{
	if (check_device() != "pc")
	{
		$("body").addClass("device");
	}
}
var openNewWindow;
var androidInterval = "";
var androidCnt = 0;

$(function(){
    // FIXME: temp!!
    // 아이템 제거
    //$(".quiz_wrap .score_list .select_list .select img").remove();
    CardGameManager.init();
    nfapp.loadFacebookApi();
    nfapp.loadLinkUrl();
    /*****************************************************************/

    /* EVENT */
    $(".quiz_wrap .card_list .card_wrap .start_btn").click(function(){
        $(this).animate({opacity:0}, 500, function(){
            $(this).css("display", "none");
            // 게임 시작
            CardGameManager.start();

			openNewWindow = null;
        });
		return false;
    });

    $(".quiz_wrap .card_list .card_wrap .card .click_txt").click(function(){
        if(nfapp.currentState == GAMESTATE.PLAY && !nfapp.isAnim){

            var idx = $(this).parent().parent().parent().parent().index();
            CardGameManager.test(idx);
        }

        return false;
    });
	
	var reviewAble = false;
    $(".quiz_wrap .score_list .event_rf").click(function(){
		if(nfapp.currentState == GAMESTATE.PLAY && !nfapp.isAnim){
            //CardGameManager.mix();
			if (!reviewAble)
			{
				reviewAble = true;
				CardGameManager.reView();

				setTimeout(function(){
					reviewAble = false;
				},2000);
			}
			
        }

        return false;
    });

    $(".quiz_wrap .card_list .card_wrap .cr_btn").click(function(){
        if(nfapp.currentState == GAMESTATE.POPUP){
            CardGameManager.doMatch();
        }
        return false;
    });

    $(".quiz_wrap .card_list .card_wrap .wr_btn").click(function(){
        if(nfapp.currentState == GAMESTATE.POPUP){
            CardGameManager.doWrong();
        }
        return false;
    });

    $(".quiz_wrap .quiz_popup .close_btn a").click(function(){
		if(CardGameManager.score == 3){
			if (openNewWindow == null)
			{
				openNewWindow = window.open('https://local.sec.samsung.com/comLocal/event/promotion/eventPopup.do?eventId=13835&popupNum=1', '[EVENT] 삼성 무선충전 패밀리를 찾아라!', "width=650,height=1250,scrollbars=1,resizable=1");
			}					
		}


		CardGameManager.hideResult();
        return false;
    });

    $(".Event_wrap .f03 .feature_title").click(function(){

    });

    $(document).on("click", ".quiz_wrap .score_list .select_list .select img", function(){
		if (!CardGameManager.motionIng)
		{
			var datavalue = $(this).attr("data-value");
			var res = CardGameManager.cardItems.filter(function(obj){
				return obj.innerData.value == datavalue;
			});

			CardGameManager.showUSP(res[0]);
		}        
        return false;
    });

    $(".Event_wrap .f03 .sns_wrap a").click(function(){

        nfapp.shareSns($(this).attr("class"));
        return false;
    });

});

var GAMESTATE = {
    READY : { id : 0, name: "none", code: "N" },
    PLAY : { id : 1, name: "play", code: "P" },
    TEST : { id : 2, name: "test", code: "T" },
    POPUP : { id : 3, name: "popup", code: "O" },
    MIX : { id : 4, name: "mix", code: "M" },

};

var nfapp = {
    currentState : GAMESTATE.READY,
    isAnim : false,

    linkUrl : "",
    //linkUrl : "http://samsung.com/sec/powercardevent",
    //linkUrl : "http://www.samsung.com/sec/shop/event/online_best_november/",

    eventShare_text : "지금 삼성 무선충전 패밀리를 특별한 가격에 만나보세요.\n카드 게임 이벤트에 참여해 다양한 선물까지!",
    eventShare_text_tw : "지금 삼성 무선충전 패밀리를 특별한 가격에 만나보세요.\n카드 게임 이벤트에 참여해 다양한 선물까지!",
    eventShare_hashTag : "#삼성무선충전패밀리를찾아라이벤트  #급속무선충전기컨버터블 #무선충전스탠드 #무선충전패드",
    eventShare_title : "삼성 무선충전 패밀리 프로모션",
    eventShare_text_kakao : "지금 삼성 무선충전 패밀리를 특별한 가격에 만나보세요.\n카드 게임 이벤트에 참여해 다양한 선물까지!",
    eventShare_url_content : "http://www.samsung.com/sec/powerpromotion/",


    shareSns : function(cls){

        if(cls == "fb"){

            FB.ui({
				method: 'feed',
				name: nfapp.eventShare_title,
				link: nfapp.linkUrl,
				caption: "www.samsung.com",
				description: nfapp.eventShare_text
			}, function(response){

			});
        }else if(cls == "tt"){

            var tweet = "https://twitter.com/intent/tweet";
			var text = encodeURIComponent(nfapp.eventShare_title + "\n" + nfapp.eventShare_text_tw + "\n\n" + nfapp.eventShare_hashTag + "\n\n" + nfapp.eventShare_url_content).replace("#","%23").replace("#","%23").replace("#","%23");
			window.open(tweet + "?text=" + text, nfapp.eventShare_title, 'width=500,height=500,top=300px,left=300px');

        }else if(cls == "ks"){
            Kakao.Story.share({
				url: nfapp.linkUrl,
				text: nfapp.eventShare_text_kakao + "\n\n" + nfapp.eventShare_url_content + "\n\n" + nfapp.eventShare_hashTag,
			});
        }

    },

    loadFacebookApi : function(){
        var apiURL = document.URL.split("/")[2];

        if(isTestEvent){

            (function(d, s, id) {
    			var js, fjs = d.getElementsByTagName(s)[0];
    			if (d.getElementById(id)) return;
    			js = d.createElement(s); js.id = id;
    			js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.9&appId=1923912684291430";
    			fjs.parentNode.insertBefore(js, fjs);
    		}(document, 'script', 'facebook-jssdk'));

        }else{
            if(apiURL == "www.samsung.com" || apiURL == "samsung.com")
			{
				(function(d, s, id) {
					var js, fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) return;
					js = d.createElement(s); js.id = id;
					js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.9&appId=1996589004004696";
					fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));
			}else{
				(function(d, s, id) {
					var js, fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) return;
					js = d.createElement(s); js.id = id;
					js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.9&appId=548671592140526";
					fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));
			}
        }
    },

    loadLinkUrl : function(){
        var apiURL = document.URL.split("/")[2];

        if(isTestEvent){

            nfapp.linkUrl = "http://ninefive.org/auth/2017/powerEvent/Ver01/index.html";

        }else{
            if(apiURL == "www.samsung.com" || apiURL == "samsung.com")
			{
				nfapp.linkUrl = "http://www.samsung.com/sec/powerpromotion/";
			}else{
				nfapp.linkUrl = "http://stgweb4.samsung.com/sec/powerpromotion/";
			}
        }
    },
};

var CardGameManager = {
    motionVectorArr : [
        { id: 0, x: 1, y: 1 },
        { id: 1, x: 0, y: 1 },
        { id: 2, x: -1, y: 1 },
        { id: 3, x: 1, y: 0 },
        { id: 5, x: -1, y: 0 },
        { id: 6, x: 1, y: -1 },
        { id: 7, x: 0, y: -1 },
        { id: 8, x: -1, y: -1 },
    ],

    originArr : [
        { src: "images/f03_item1.jpg", value: 0, alt: "무선충전패드 블랙 제품과 화이트 제품 모습입니다." },
        { src: "images/f03_item2.jpg", value: 3, alt: "삼성 기어 스포츠 블랙 제품과 블루 제품 모습입니다." },
        { src: "images/f03_item3.jpg", value: 1, alt: "무선충전스탠드 블랙 제품과 화이트 제품 모습입니다." },
        { src: "images/f03_item4.jpg", value: 4, alt: "갤럭시 노트8 제품 정면 모습입니다." },

        { src: "images/f03_item5.jpg", value: 2, alt: "급속 무선충전기 컨버터블 블랙과 브라운 제품 모습입니다." },
        { src: "images/f03_item5.jpg", value: 2, alt: "급속 무선충전기 컨버터블 블랙과 브라운 제품 모습입니다." },
        { src: "images/f03_item3.jpg", value: 1, alt: "무선충전스탠드 블랙 제품과 화이트 제품 모습입니다." },
        { src: "images/f03_item1.jpg", value: 0, alt: "무선충전패드 블랙 제품과 화이트 제품 모습입니다." },
    ],

    score : 0,
    cardItems : [],
    selectedItems : [],
    isMatchPopup : false,
	motionIng : false,

    init : function(){
        this.cardItems.forEach(function(obj){
            obj.unflip();
        });

        this.score = 0;
        $(".quiz_wrap .score_list .score_txt > span").text(this.score);

        $(".quiz_wrap .score_list .select_list .select img").remove();

        $(".quiz_wrap .card_list .card_wrap .start_btn").removeAttr("style");

        nfapp.currentState = GAMESTATE.READY;
		var THIS = this;
		
		THIS.hideClick();
        THIS.selectedItems.forEach(function(obj){
            obj.offSelect();
        });
        THIS.selectedItems = [];
		

		// 2017.11.14 신규 추가 시작
		// 새로운 카드 배열 생성
		this.cardItems = [];
        for (var i = 0; i < this.originArr.length; i++) {
            var card = new CardItem();
            if(i < 4){
                card.id = i;
            }else{
                card.id = i + 1;
            }

            card.innerData = this.originArr[i];
            this.cardItems.push(card);
        }

		setTimeout(function(){
            // 카드 배열 랜덤 섞기
			var d = THIS.cardItems.filter(function(obj){
                return !obj.isCleared;
            });
            THIS.shuffle(d);

            THIS.cardItems.forEach(function(obj){
                obj.gather();
            });
        }, 100);

        setTimeout(function(){
            THIS.cardItems.forEach(function(obj){
				obj.scatter();
            });

        }, 200);
		// 2017.11.14 신규 추가 종료
    },

    start : function(){
        var THIS = this;

        nfapp.currentState = GAMESTATE.READY;

        
        

        this.cardItems.forEach(function(obj){
            obj.init();
        });


        // FIXME: DEV *****************************
        //nfapp.currentState = GAMESTATE.PLAY;
        // ****************************************

        // FIXME: LIVE ****************************
        setTimeout(function(){
            THIS.mix();
        }, 0);
        // ****************************************
    },

    mix : function(){
        nfapp.currentState = GAMESTATE.MIX;
        var THIS = this;

        // 이미지 보여주기
        setTimeout(function(){
            THIS.cardItems.forEach(function(obj){
                if(!obj.isCleared){
                    obj.flip();
                }
            });
        }, 0);

        // 이미지 안보이게
        setTimeout(function(){

            THIS.cardItems.forEach(function(obj){
                if(!obj.isCleared){
                    obj.unflip();
                }
            });
        }, 1300);

        /*setTimeout(function(){

            // 카드 배열 랜덤 섞기
            var d = THIS.cardItems.filter(function(obj){
                return !obj.isCleared;
            });
            THIS.shuffle(d);

            THIS.cardItems.forEach(function(obj){
                if(!obj.isCleared){
                    obj.gather();
                }
            });

        }, 2000);

        setTimeout(function(){

            THIS.cardItems.forEach(function(obj){
                if(!obj.isCleared){
                    obj.scatter();
                }
            });

        }, 3000);*/

        setTimeout(function(){
            THIS.showClick();
            nfapp.currentState = GAMESTATE.PLAY;
        }, 2000);
    },
	//카드 다시보기
	reView : function(){
		var THIS = this;
		THIS.selectedItems = [];
		setTimeout(function(){
            THIS.cardItems.forEach(function(obj){
                if(!obj.isCleared){
					obj.offSelect();
                    obj.flip();
                }
            });
        }, 0);

        // 이미지 안보이게
        setTimeout(function(){

            THIS.cardItems.forEach(function(obj){
                if(!obj.isCleared){
                    obj.unflip();
                }
            });
        }, 1300);
	},
    // 랜덤 배열
    shuffle : function(d){
        var x, temp;
        for (var i = d.length; i; i -= 1) {

            x = Math.floor(Math.random() * i);

            temp = d[i - 1].innerData;
            d[i - 1].innerData = d[x].innerData;
            d[x].innerData = temp;

        }
    },

    hideClick : function(){
        var button = $(".quiz_wrap .card_list .card_wrap .card .click_txt");
        button.animate({"opacity":0}, 200, function(){
            button.css("display", "none");
        });

    },

    showClick : function(){
        var button = $(".quiz_wrap .card_list .card_wrap .card .click_txt");
        button.css("display", "block");
        button.animate({"opacity":1}, 200, function(){
            button.removeAttr("style");
        });

    },

    test : function(idx){

        if(this.selectedItems.length > 1) return;

        nfapp.isAnim = true;

        var THIS = this;

        var obj = this.cardItems.filter(function(obj){
            return obj.id == idx;
        });

        obj[0].flip();
        this.selectedItems.push(obj[0]);
        if(THIS.selectedItems.length == 1){
            setTimeout(function(){
                THIS.selectedItems[0].onCorrect();
                nfapp.isAnim = false;
            }, 500);

        }else if(THIS.selectedItems.length == 2){
			motionIng = true;
            if(THIS.selectedItems[0].innerData.value == THIS.selectedItems[1].innerData.value){
                // 맞음
                console.log("ok");
                setTimeout(function(){
                    THIS.selectedItems[1].onCorrect();
                }, 500);

                setTimeout(function(){
                    THIS.selectedItems.forEach(function(obj){
                        obj.offSelect();
                        obj.scaleup();
                        obj.isCleared = true;
                    });
                }, 1000);

                setTimeout(function(){
                    // TODO: 스케일 조정, 보더 표시

                    THIS.selectedItems.forEach(function(obj){
                        obj.unscaleup();
                    });

                    THIS.addScore();

                    THIS.appendCardItem(THIS.selectedItems[0]);

                    // TODO: UI 처리
                    THIS.showResultButton(THIS.selectedItems[0]);
					motionIng = false;
                }, 2000);

            }else{
                //setTimeout(function(){
                    // 틀림

                    setTimeout(function(){
                        THIS.selectedItems[0].onIncorrect();
                        THIS.selectedItems[1].changeIncorrect();
                    }, 500);

                    setTimeout(function(){
                        THIS.selectedItems.forEach(function(obj){

                            obj.jiggle();
                            // TODO: 보더 표시
                        });
                    }, 1000);

                    setTimeout(function(){
                        THIS.selectedItems.forEach(function(obj){
                            obj.unjiggle();
                        });
                        THIS.showResultButton();
                    }, 2000);
                //}, 1000);
            }

        }

    },

    addScore : function(){
        this.score += 1;
        $(".quiz_wrap .score_list .score_txt > span").text(this.score);
    },

    showResultButton : function(cardItem){
        var THIS = this;
        nfapp.currentState = GAMESTATE.POPUP;
        this.isMatchPopup = false;

        if(cardItem == undefined){
            // 틀림
            $(".quiz_wrap .card_list .card_wrap .wr_btn").css({"display":"block", "opacity":0});
            $(".quiz_wrap .card_list .card_wrap .wr_btn").animate({"opacity":1}, 200);

            setTimeout(function(){
                THIS.doWrong();
            }, 1000);
        }else{
            // 맞음
            $(".quiz_wrap .card_list .card_wrap .cr_btn").css({"display":"block", "opacity":0});
            $(".quiz_wrap .card_list .card_wrap .cr_btn").animate({"opacity":1}, 200);

            setTimeout(function(){
                THIS.doMatch();
            }, 1000);
        }
    },

    showUSP : function(cardItem){
        console.log(cardItem.innerData.value);

        $(".quiz_wrap .quiz_popup").css({"display":"block", "opacity":0});
        $(".quiz_wrap .quiz_popup").animate({"opacity":1},300);
		$(".quiz_wrap .quiz_popup .popup_wrap").css({"display":"none","opacity":0});
        $(".quiz_wrap .quiz_popup .popup_wrap").eq(cardItem.innerData.value).css({"display":"block", "opacity":0});
        $(".quiz_wrap .quiz_popup .popup_wrap").eq(cardItem.innerData.value).animate({"opacity":1},300);

    },

    hideResult : function(){
        $(".quiz_wrap .quiz_popup").animate({"opacity":0},300,function(){
            $(this).removeAttr("style");
            $(".quiz_wrap .quiz_popup .popup_wrap").removeAttr("style");
        });

        if(this.score == 3){
			this.init();
        }
    },

    doMatch : function(){
        if(!this.isMatchPopup){
            this.isMatchPopup = true;

            var THIS = this;
            $(".quiz_wrap .card_list .card_wrap .cr_btn").animate({"opacity":0}, 200, function(){
                $(this).css({"display":"none"});
                THIS.showUSP(THIS.selectedItems[0]);

                THIS.selectedItems = [];
                nfapp.currentState = GAMESTATE.PLAY;
                nfapp.isAnim = false;
				
                if(THIS.score == 3){
					openNewWindow = window.open('https://local.sec.samsung.com/comLocal/event/promotion/eventPopup.do?eventId=13835&popupNum=1', '[EVENT] 삼성 무선충전 패밀리를 찾아라!', "width=650,height=1250,scrollbars=1,resizable=1");
                }
            });
        }
    },

    doWrong : function(){
        if(!this.isMatchPopup){
            this.isMatchPopup = true;

            var THIS = this;
            $(".quiz_wrap .card_list .card_wrap .wr_btn").animate({"opacity":0}, 200, function(){
                $(this).css({"display":"none"});

                THIS.selectedItems.forEach(function(obj, i){
                    obj.offSelect();
                    setTimeout(function(){
                        if(i === 1){
                            obj.unflip(function(){
                                THIS.selectedItems = [];
                                nfapp.currentState = GAMESTATE.PLAY;
                                nfapp.isAnim = false;
                            });
                        }
                        obj.unflip();
                    }, 200);
                });

                // FIXME: 시간으로 사용자 입력을 막는데 다른 방법을 찾아보자. 컴플리트 이벤트 같은
                // setTimeout(function(){
                //     THIS.selectedItems = [];
                //     nfapp.currentState = GAMESTATE.PLAY;
                //     nfapp.isAnim = false;
                // }, 900);
            });
        }
    },

    appendCardItem : function(cardItem){
        var src = cardItem.innerData.src;

        var img = new Image();
        img.src = src;
        img.alt = cardItem.innerData.alt;
        var div = $(".quiz_wrap .score_list .select_list .select").eq(this.score - 1)[0];

        img.style = "opacity:0;"
        img.setAttribute("data-value", cardItem.innerData.value);
		img.setAttribute("data-id", "powerPromotion_MachingCard_" + this.score);
		img.setAttribute("onclick", "pageTracking(this)");

        div.appendChild(img);

        $(".quiz_wrap .score_list .select_list .select").eq(this.score - 1).find("img").animate({"opacity":1},200, function(){

        });

    },

};

function CardItem(){
    this.id = null;
    this.isCleared = false;

    this.innerData = null;
};

CardItem.prototype.init = function(){

    this.unscaleup();
    this.unjiggle();
    this.isCleared = false;
};

CardItem.prototype.flip = function(){
    var item = $(".quiz_wrap .card_list .card_wrap .card").eq(this.id);

    // TODO: open img
    var img = item.find(".event_inner .card_img img");
    img.attr("src", this.innerData.src);
    img.attr("alt", this.innerData.alt);

    //item.find(".event_inner").addClass("applyFlip");
    // TODO: anchor
    var isHalf = false;
    var c = item.find(".event_inner .card_img");
    var b = item.find(".event_inner .card_back");
    c.css({"visibility":"hidden"});
    b.css({"visibility":"visible"});
    new Anim().animate(item.find(".event_inner")[0], {"rotateY":180}, 500, {
        update : function(n){
            if(n > 90 && !isHalf){
                isHalf = true;
                // ie 때문에 플립될 때 visibility를 조정해 주어야 한다.
                c.css({"visibility":"visible"});
                b.css({"visibility":"hidden"});
            }
        },
    });

};

CardItem.prototype.unflip = function(callback_oncompleted){
    var item = $(".quiz_wrap .card_list .card_wrap .card").eq(this.id);

    //item.find(".event_inner").removeClass("applyFlip");
    // TODO: anchor
    var isHalf = false;
    var c = item.find(".event_inner .card_img");
    var b = item.find(".event_inner .card_back");
    c.css({"visibility":"visible"});
    b.css({"visibility":"hidden"});
    new Anim().animate(item.find(".event_inner")[0], {"rotateY":0}, 500, {
        update : function(n){
            if(n < 90 && !isHalf){
                isHalf = true;
                // ie때문에 플립될 때 visibility를 조정해 주어야 한다.
                c.css({"visibility":"hidden"});
                b.css({"visibility":"visible"});
            }
        },
        completed : function(){
            var img = item.find(".event_inner .card_img img");
            img.attr("src", "");
            img.attr("alt", "");

            if(callback_oncompleted){
                callback_oncompleted();
            }
        },
    });

    // setTimeout(function(){
    //     // TODO: close img
    //     var img = item.find(".event_inner .card_img img");
    //     img.attr("src", "");
    // }, 800);
};

CardItem.prototype.jiggle = function(){
    var item = $(".quiz_wrap .card_list .card_wrap .card").eq(this.id);

    item.addClass("applyJiggle");
};

CardItem.prototype.unjiggle = function(){
    var item = $(".quiz_wrap .card_list .card_wrap .card").eq(this.id);

    item.removeClass("applyJiggle");
};

CardItem.prototype.scaleup = function(){
    var item = $(".quiz_wrap .card_list .card_wrap .card").eq(this.id);

    item.find(".event_inner .card_img").addClass("applyScaleup");
};

CardItem.prototype.unscaleup = function(){
    var item = $(".quiz_wrap .card_list .card_wrap .card").eq(this.id);

    item.find(".event_inner .card_img").removeClass("applyScaleup");
};

CardItem.prototype.gather = function(){
    var THIS = this;
    var res = CardGameManager.motionVectorArr.filter(function(obj){
        return obj.id == THIS.id;
    });
    var vec = res[0];

    var unit = $(".quiz_wrap .card_list .card_wrap .card").width();
    var obj = $(".quiz_wrap .card_list .card_wrap .card").eq(this.id);
    var duration = Math.random() * (0.25 - 0.1) + 0.1;
    var delay = Math.random() * (0.55 - 0.2) + 0.2;
    var x = unit * vec.x;
    var y = unit * vec.y;
    obj.css({"transition":"", "transform" : "translate(" + x + "px, " + y +"px)"});
};

CardItem.prototype.scatter = function(){
    var obj = $(".quiz_wrap .card_list .card_wrap .card").eq(this.id);
    var duration = Math.random() * (0.25 - 0.1) + 0.1;
    var delay = Math.random() * (0.55 - 0.2) + 0.2;
    obj.css({"transition":"", "transform" : "translate(0, 0)"});
};

CardItem.prototype.onCorrect = function(){
    var cr = $(".quiz_wrap .card_list .card_wrap .card").eq(this.id).find(".cr_img");
    cr.css({"display":"block", "opacity":0});
    cr.animate({"opacity":1},200);
};

CardItem.prototype.onIncorrect = function(){
    var wr = $(".quiz_wrap .card_list .card_wrap .card").eq(this.id).find(".wr_img");
    wr.css({"display":"block", "opacity":0});
    wr.animate({"opacity":1},200);
};

CardItem.prototype.changeIncorrect = function(){
    var cr = $(".quiz_wrap .card_list .card_wrap .card").eq(this.id).find(".cr_img");
    var wr = $(".quiz_wrap .card_list .card_wrap .card").eq(this.id).find(".wr_img");

    cr.animate({"opacity":0},200,function(){
        $(this).removeAttr("style");
    });

    wr.css({"display":"block"});
    wr.animate({"opacity":1},200);
};

CardItem.prototype.offSelect = function(){
    var cr = $(".quiz_wrap .card_list .card_wrap .card").eq(this.id).find(".cr_img");
    var wr = $(".quiz_wrap .card_list .card_wrap .card").eq(this.id).find(".wr_img");

    if(cr.css("display") == "block"){
        cr.animate({"opacity":0},200,function(){
            $(this).removeAttr("style");
        });
    }

    if(wr.css("display") == "block"){
        wr.animate({"opacity":0},200,function(){
            $(this).removeAttr("style");
        });
    }
};

function Anim() {
    this.obj = null;
    this.duration = null;
    this.startTime = null;
    this.prop = null;

    this.update = null;
    this.completed = null;

    this.myReq = null;

};

Anim.prototype.animate = function(obj, prop, time, callback){
    this.obj = obj;
    this.duration = time;
    this.prop = prop;

    this.update = callback.update || null;
    this.completed = callback.completed || null;

    this.rendering();
};

Anim.prototype.rendering = function(){
    var timeStamp = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigatioinStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();

    if(this.startTime == null){
        this.startTime = timeStamp;
    }

    var progress = (timeStamp - this.startTime) / this.duration;

    this.render(this.ease(progress));

    if(progress >= 1){
        this.render(1);
        this.startTime = null;
        window.cancelAnimationFrame(this.myReq);

        if(this.completed){
            this.completed();
        }
        return;
    }

    this.myReq = window.requestAnimationFrame(this.rendering.bind(this));

};

Anim.prototype.render = function(n){
    // FIXME: 현재는 플립에 특화되어 있음.
    var degree;
    if(this.prop.rotateY == 0){
        degree = (180 * (1 - n));
        this.obj.style.transform = 'rotateY(' + degree + 'deg)';
    }else{
        degree = (this.prop.rotateY * n);
        this.obj.style.transform = 'rotateY(' + degree + 'deg)';
    }

    if(this.update){
        this.update(degree);
    }
};

Anim.prototype.ease = function(n){
    return this.easeInQuad(n);
};

Anim.prototype.easeInQuad = function (t) { return t*t };



function pageTracking(THIS)
{
	if ($(THIS).attr("data-id") != undefined)
	{
		//_satellite.track(jQuery(this).attr("data-id"));
		var code = $(THIS).attr("data-id");
		
		var s = s_gi('ssmicrositetest');
		if (!isTestEvent)
		{
			s = s_gi('sssamsung4sec,sssamsung4mstglobal');
		}
		//var s=s_gi('ssmicrositetest');

		s.linkTrackVars='eVar33,events';
		s.linkTrackEvents='event45';
		s.eVar33='sec:campaign:online_comm:power_promotion:' + code;
		s.events='event45';
		s.tl(THIS,'e', code);
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
	
	if (device_name == "")
	{
		return "pc";
	}else if (device_name == "Android"){
		return "Android";
	}else{
		return "device";
	}
}