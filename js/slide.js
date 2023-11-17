 
 $(function () {

    //메인 슬라이드 이전 버튼 클릭 시
    $('.prev').click(function () {
        $('.slide>.sd:last').prependTo('.slide').css({"display":"block",'flex-grow':'0','flex-basis':'0px'},500);
        $('.slide>.sd:first').stop().animate({'flex-grow':'1','flex-basis':'0'},"linear");
        $('.sd').eq(1).animate({'flex-grow':'0','flex-basis':'48px'},"slow");
        $('.sd').eq(2).animate({'flex-grow':'0','flex-basis':'48px'},"slow");  
        $('.sd').eq(3).animate({'flex-grow':'0','flex-basis':'0'},"slow", function(){       
            $('.sd').eq(3).css({ 'display': 'none' },"slow");  
            $('.sd').eq(4).animate({'flex-grow':'0','flex-basis':'0'},"slow"); 
        });      

        ////메인 타이틀 박스 fade in
        $('.bg_op>.title').eq(0).css("opacity","0.9").fadeIn(100);
        $('.bg_op>.title').eq(1).css("opacity","0").fadeOut(400);
        $('.bg_op>.title').eq(2).css("opacity","0").fadeOut(400);
    });

     //메인 슬라이드 다음 버튼 클릭 시
     function slide() {
         $('.slide>.sd:first').stop().animate({ 'flex-grow': '0', 'flex-basis': '0' }, 500);
         $('.sd').eq(3).css("display", "block").stop().animate({ 'flex-basis': '48px' }, 500);
         $('.slide>.sd').eq(1).stop().animate({ 'flex-grow': '1', 'flex-basis': '0' }, 500, function () {
             $('.slide>.sd:first').appendTo('.slide');
             $('.sd').eq(2).stop().animate({ 'flex-grow': '0', 'flex-basis': '48px' });
             $('.sd').eq(-1).css({ 'display': 'none' });

             //메인 타이틀 박스 fade in
             $('.bg_op>.title').eq(0).css("opacity", "0.9").fadeIn(100);
             $('.bg_op>.title').eq(1).css("opacity","0").fadeOut(400);
             $('.bg_op>.title').eq(2).css("opacity","0").fadeOut(400);
             $('.bg_op>.title').eq(3).css("opacity","0").fadeOut(400);
         });
     }  

     //메인 슬라이드 setInterval
    $('.next').click(function(){
        slide()
    });
    // setInterval(slide,6000);


    //today_slide
    $('.next4').click(function(){
        $('#td_wrap').stop().animate({marginLeft:-1200},600, function(){
            $('.next4').css('opacity','0');
            $('.prev4').css('opacity','1');
        });
    });

    $('.prev4').click(function(){
        $('#td_wrap').stop().animate({marginLeft:0},600, function(){
            $('.prev4').css('opacity','0');
            $('.next4').css('opacity','1');
        });
    });


    //now_slide
    $('.next2').click(function(){
        $('#now_slide').stop().animate({marginLeft:-1200},700, function(){
            $('.next2').css('opacity','0');
            $('.prev2').css('opacity','1');  
        });
    });

    $('.prev2').click(function(){
        $('#now_slide').stop().animate({marginLeft:0},700, function(){
            $('.prev2').css('opacity','0');
            $('.next2').css('opacity','1');
        });
    });


    //best_slide
    $('.next3').click(function(){
        $('#best_slide').stop().animate({marginLeft:-1200},700, function(){
            $('.next3').css('opacity','0');
            $('.prev3').css('opacity','1');  
        });
    });

    $('.prev3').click(function(){
        $('#best_slide').stop().animate({marginLeft:0},700, function(){
            $('.prev3').css('opacity','0');
            $('.next3').css('opacity','1');
        });
    });


     //new_slide
     $('.next5').click(function(){
        $('#nw_slide').stop().animate({marginLeft:-600},500, function(){
            $('.next5').css('opacity','0');
            $('.prev5').css('opacity','1'); 
        });
    });

    $('.prev5').click(function(){
        $('#nw_slide').stop().animate({marginLeft:0},500, function(){
            $('.prev5').css('opacity','0');
            $('.next5').css('opacity','1');
        });
    });


    //banner_slide 
    let click=0;
    $('.next6').click(function(){
        click++;
        if(click>2){
            click=0;
        }
        $('.fade').eq(click).fadeIn().siblings('.fade').hide();
    });

    $('.prev6').click(function(){
        click--;
        if(click<0){
            click=2;
        }
        $('.fade').eq(click).fadeIn().siblings('.fade').hide();
    });

    //banner button
    $('#banner').mouseover(function(){
        $('.prev6').css('opacity','1');
        $('.next6').css('opacity','1')
    }).mouseout(function(){
        $('.prev6').css('opacity','0');
        $('.next6').css('opacity','0');
    });


    //korean slide
    $('.next7').click(function(){
        $('.ko_slide2').css("display","block").siblings('.ko_slide').hide();
        $('.next7').css('opacity','0');
        $('.prev7').css('opacity','1'); 
    });

    $('.prev7').click(function(){
        $('.ko_slide').css("display","block").siblings('.ko_slide2').hide();
        $('.prev7').css('opacity','0');
        $('.next7').css('opacity','1');
    });



    //trip_slide
    $('.next8').click(function(){
        $('#tp_slide').stop().animate({marginLeft:-600},600, function(){
            $('.next8').css('opacity','0');
            $('.prev8').css('opacity','1'); 
        });
    });

    $('.prev8').click(function(){
        $('#tp_slide').stop().animate({marginLeft:0},600, function(){
            $('.prev8').css('opacity','0');
            $('.next8').css('opacity','1');
        });
    });

});



$(function () {
    $('.up').on('click',function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 500);
    });
});
    
 
