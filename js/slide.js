 
 $(function () {

    //배너 슬라이드 이전 버튼 클릭 시
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

        ////배너 타이틀 박스 fade in
        $('.bg_op').eq(0).css("opacity","0.9").fadeIn(500);
        $('.bg_op').eq(1).css("opacity","0").fadeOut(500);
        $('.bg_op').eq(2).css("opacity","0").fadeOut(500);
    });

     //배너 슬라이드 다음 버튼 클릭 시
     function slide() {
         console.log('sd')

         $('.slide>.sd:first').stop().animate({ 'flex-grow': '0', 'flex-basis': '0' }, 500);
         $('.sd').eq(3).css("display", "block").stop().animate({ 'flex-basis': '48px' }, 500);
         $('.slide>.sd').eq(1).stop().animate({ 'flex-grow': '1', 'flex-basis': '0' }, 500, function () {
             $('.slide>.sd:first').appendTo('.slide');

             $('.sd').eq(2).stop().animate({ 'flex-grow': '0', 'flex-basis': '48px' });
             $('.sd').eq(-1).css({ 'display': 'none' });

             //배너 타이틀 박스 fade in
             $('.bg_op').eq(0).css("opacity", "0.9").fadeIn(500);
             $('.bg_op').eq(1).css("opacity","0").fadeOut(500);
             $('.bg_op').eq(2).css("opacity","0").fadeOut(500);
             $('.bg_op').eq(3).css("opacity","0").fadeOut(500);
         });

     }
    
     //배너 슬라이드 setInterval
    $('.next').click(function(){
        slide()
    });
    setInterval(slide,6000);


    //now_slide
    $('.next2').click(function(){
        $('#now_slide').stop().animate({marginLeft:-1200},700);
    });

    $('.prev2').click(function(){
        $('#now_slide').stop().animate({marginLeft:0},700);
    });


});


 

    
 
