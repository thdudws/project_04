
$(function(){

    //텍스트 가져오기
    $.get("./sub_txt/text.txt", function(data){
        $('.p_box>p').html(data);
    });

    $.get("./sub_txt/text2.txt", function(data){
        $('.rw_box>p').html(data);
    });

    $.get("./sub_txt/text3.txt", function(data){
        $('.wt_box>p').html(data);
    });

    $.get("./sub_txt/text4.txt", function(data){
        $('.ls_box>p').html(data);
    });

    $.get("./sub_txt/text5.txt", function(data){
        $('.click>p').html(data);
    });


        //펼쳐보기
        $('.artwrap').on("click", function(){
            $('.tg').toggleClass('hid');
            if($('.btn1 span').text()=='펼쳐보기'){
                $('.btn1 span').text('접기');
            }else {
                $('.btn1 span').text('펼쳐보기');
            }

            $('.btn1 button').toggleClass('rotate')
            
        });

        //펼쳐보기2
        $('.rw_wrap').on("click", function(){
            $('.toggle2').toggleClass('hid2');
            if($('.btn2 span').text()=='펼쳐보기'){
                $('.btn2 span').text('접기');
            }else {
                $('.btn2 span').text('펼쳐보기');
            }

            $('.btn2 button').toggleClass('rotate')
            
        });


        //리뷰 관련 효과
        $('.wr').on("click", function(){
            $('.click').toggleClass('none');
        });

        $('.starz').mouseover(function(){
            $('.starz>img').css('transform','translateY(-45px)')
        });

        $('.starz').mouseout(function(){
            $('.starz>img').css('transform','translateY(0px)')
        });



        $('.next1').click(function(){
            $('.sd_wrap').stop().animate({marginLeft:-950},500, function(){
                $('.next1').css('opacity','0');
                $('.prev1').css('opacity','1'); 
            });
        });
    
        $('.prev1').click(function(){
            $('.sd_wrap').stop().animate({marginLeft:0},500, function(){
                $('.prev1').css('opacity','0');
                $('.next1').css('opacity','1');
            });
        });


        $('.next2').click(function(){
            $('.sd_wraps').stop().animate({marginLeft:-950},500, function(){
                $('.next2').css('opacity','0');
                $('.prev2').css('opacity','1'); 
            });
        });
    
        $('.prev2').click(function(){
            $('.sd_wraps').stop().animate({marginLeft:0},500, function(){
                $('.prev2').css('opacity','0');
                $('.next2').css('opacity','1');
            });
        });


        $(".book_img img").click(function(){
            $(".up").hide();
            $(".extend").show();
            $(".close").click(function(){
                $(".extend").hide();
            });
            $('.extend').on('scroll touchmove mousewheel', function (event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
   
        });



    
    

   
});

