 
 $(function () {

    //메인 슬라이드 이전 버튼 클릭 시
    $('.prev').click(function () {

        $('.slide>.sd:last').prependTo('.slide').css({"display":"block",'flex-grow':'0','flex-basis':'0px'},1000);
        $('.slide>.sd:first').stop().animate({'flex-grow':'1','flex-basis':'0'},"linear");
        $('.sd').eq(1).stop().animate({'flex-grow':'0','flex-basis':'48px'});
        $('.sd').eq(2).stop().animate({'flex-grow':'0','flex-basis':'48px'},"slow");   
        $('.sd').eq(3).stop().animate({'flex-grow':'0','flex-basis':'0'},"slow", function(){
            $('.sd').eq(3).css({ 'display': 'none' }).animate({ 'flex-grow': '0','flex-basis':'0'});
        });   
        
        // $('.sd').eq(3).css({'flex-grow':'0','flex-basis':'0'});
        // $('.sd').eq(4).css({'flex-grow':'0','flex-basis':'0'});
        // $('.sd').eq(5).css({'flex-grow':'0','flex-basis':'0'});
        // $('.sd').eq(6).css({'flex-grow':'0','flex-basis':'0'});
        // $('.sd').eq(7).css({'flex-grow':'0','flex-basis':'0'});
        // $('.sd').eq(8).css({'flex-grow':'0','flex-basis':'0'});
        // $('.sd').eq(9).css({'flex-grow':'0','flex-basis':'0'});
        // $('.sd').eq(10).css({'flex-grow':'0','flex-basis':'0'});

        ////메인 타이틀 박스 fade in
        $('.bg_op').eq(0).css("opacity","0.9").fadeIn(400);
        $('.bg_op').eq(1).css("opacity","0").fadeOut(400);
        $('.bg_op').eq(2).css("opacity","0").fadeOut(400);
    });

     //메인 슬라이드 다음 버튼 클릭 시
     function slide() {
         console.log('sd')

         $('.slide>.sd:first').stop().animate({ 'flex-grow': '0', 'flex-basis': '0' }, 500);
         $('.sd').eq(3).css("display", "block").stop().animate({ 'flex-basis': '48px' }, 500);
         $('.slide>.sd').eq(1).stop().animate({ 'flex-grow': '1', 'flex-basis': '0' }, 500, function () {
             $('.slide>.sd:first').appendTo('.slide');

             $('.sd').eq(2).stop().animate({ 'flex-grow': '0', 'flex-basis': '48px' });
             $('.sd').eq(-1).css({ 'display': 'none' });

             //메인 타이틀 박스 fade in
             $('.bg_op').eq(0).css("opacity", "0.9").fadeIn(400);
             $('.bg_op').eq(1).css("opacity","0").fadeOut(400);
             $('.bg_op').eq(2).css("opacity","0").fadeOut(400);
             $('.bg_op').eq(3).css("opacity","0").fadeOut(400);
         });

     }
    
     //메인 슬라이드 setInterval
    $('.next').click(function(){
        slide()
    });
    // setInterval(slide,6000);


    //today_slide
    $('.next4').click(function(){
        $('#td_wrap').stop().animate({marginLeft:-1200},700);
    });

    $('.prev4').click(function(){
        $('#td_wrap').stop().animate({marginLeft:0},700);
    });


    //now_slide
    $('.next2').click(function(){
        $('#now_slide').stop().animate({marginLeft:-1200},700);
    });

    $('.prev2').click(function(){
        $('#now_slide').stop().animate({marginLeft:0},700);
    });


    //best_slide
    $('.next3').click(function(){
        $('#best_slide').stop().animate({marginLeft:-1200},700);
    });

    $('.prev3').click(function(){
        $('#best_slide').stop().animate({marginLeft:0},700);
    });


     //new_slide
     $('.next5').click(function(){
        $('#nw_slide').stop().animate({marginLeft:-600},700);
    });

    $('.prev5').click(function(){
        $('#nw_slide').stop().animate({marginLeft:0},700);
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


    //korean slide
    $('.next7').click(function(){
        $('.ko_slide2').css("display","block").siblings('.ko_slide').hide();
    });

    $('.prev7').click(function(){
        $('.ko_slide').css("display","block").siblings('.ko_slide2').hide();
    });



    //trip_slide
    $('.next8').click(function(){
        $('#tp_slide').stop().animate({marginLeft:-600},600);
    });

    $('.prev8').click(function(){
        $('#tp_slide').stop().animate({marginLeft:0},600);
    });

});


//banner button
$(function(){
    $('#banner').mouseover(function(){
        $('.prev6').css('opacity','1');
        $('.next6').css('opacity','1')
    }).mouseout(function(){
        $('.prev6').css('opacity','0');
        $('.next6').css('opacity','0');
    });
   
});

 

    
 
