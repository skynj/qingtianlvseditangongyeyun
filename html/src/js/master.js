$(function(){
	backtop();
	move();
	drift();
	paginationCh();
	tab();
	banner();
	show();
});
function show(){
	$('.confirm').click(function(){
		$('.pop').show();
	})
}
function paginationCh(){
	var length=$('.cp_pagination li').length;
	var last=$('.cp_pagination li').eq($('.cp_pagination li').length-2).text();
	var last2=$('.cp_pagination li').eq($('.cp_pagination li').length-4).text();
	var snd=$('.cp_pagination li').eq(1).text();
	var center=length-6;
	var index=$('.cp_pagination li.active').index();
	var now=0;
	if(last-last2>1){
		$('.cp_pgMore').css('display','inline-block');
	}
	$('.cp_pagination li').click(function(){
		var className=$(this).attr('class');
		var nowText=parseInt($(this).text());
		switch (className){
			case 'cp_num':
				if(nowText<center&&last-last2>1){
					$('.cp_pgMore').css('display','inline-block');
					$('.cp_pgLess').css('display','none');
					now=2;
					$('.cp_pagination li').each(function(index){
						if(index>2&index<length-3){
							$(this).text(now++);
						}
						if(parseInt($(this).text())==nowText){
							$(this).addClass('active').siblings().removeClass('active');	
						}
					})
				}else if(nowText>last-center&&last-last2>1){
					$('.cp_pgMore').css('display','none');
					$('.cp_pgLess').css('display','inline-block');
					now=last-center;
					$('.cp_pagination li').each(function(index){
						if(index>2&index<length-3){
							$(this).text(now++);
						}
					if(parseInt($(this).text())==nowText){
						$(this).addClass('active').siblings().removeClass('active');	
					}	
					})
				}else if(nowText<=last-center&&nowText>=center){
					$('.cp_pgMore').css('display','inline-block');
					$('.cp_pgLess').css('display','inline-block');
					now=nowText-Math.floor(center*0.5);
					console.log(nowText,now);
					$('.cp_pagination li').each(function(index){
						if(index>2&index<length-3){
							$(this).text(now++);
						}
						if(parseInt($(this).text())==nowText){
							$(this).addClass('active').siblings().removeClass('active');	
						}
					})	
				}
				break;
			case 'cp_pgLeft':
				break;
			case 'cp_pgRight':
				break;
			default:
				break;
		}
	});
}
function tab(){
	$(".tab li").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	$(".tabL li").click(function(){
		$(".tabCon").hide();
		$(".tabCon").eq($(this).index()).show();
	});
	$('.eye').click(function(){
		$(this).toggleClass('eyeN');
	})
}
function backtop(){
	$(window).scroll(function () {
        var scrollValue = $(window).scrollTop();
        scrollValue > 200 ? $('div[class=rightLink]').fadeIn() : $('div[class=rightLink]').fadeOut();
    });
    $('.backtop').click(function () {
        $("html,body").animate({ scrollTop: 0 }, 500);
    });
}
function move(){
	$(".solutionDefault a").mouseover(function(){
		$(this).parent(".solutionDefault").next(".solutionHover").animate({
		    top:'0px'
		},600);
	});
	$(".solutionHover").mouseout(function(){
		$(".solutionHover").animate({
		    top:'386px'
		},600);
	});
}
function banner(){
	$(".cooperLefbg").click(function(){
		$(".cooperListM li.active").removeClass('active').prev().addClass('active');
	})
	$(".cooperRigbg").click(function(){
		$(".cooperListM li.active").removeClass('active').next().addClass('active');
	});
}
function drift(){
	var mySwiper = new Swiper ('.swiper', {
	  	loop: true,
//	  	autoplay:true,
	  	speed:1000,
	  	slidesPerView : 6,
		slidesPerGroup : 1,
		spaceBetween : 10,
	    // 如果需要前进后退按钮
	    nextButton: '.cooperRigbg',
	    prevButton: '.cooperLefbg',
	}) 
}