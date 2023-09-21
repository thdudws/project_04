
$(function(){
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



        $('.artwrap').on("click", function(){
            $('.tg').toggleClass('hid');
            if($('.btn1 span').text()=='펼쳐보기'){
                $('.btn1 span').text('접기');
            }else {
                $('.btn1 span').text('펼쳐보기');
            }

            $('.btn1 button').toggleClass('rotate')
            
        });


        $('.rw_wrap').on("click", function(){
            $('.toggle2').toggleClass('hid2');
            if($('.btn2 span').text()=='펼쳐보기'){
                $('.btn2 span').text('접기');
            }else {
                $('.btn2 span').text('펼쳐보기');
            }

            $('.btn2 button').toggleClass('rotate')
            
        });


        $('.wr').on("click", function(){
            $('.click').toggleClass('none');
        });

    
        $('.starz').mouseover(function(){
            $('.starz>img').css('transform','translateY(-45px)')
        });

        $('.starz').mouseout(function(){
            $('.starz>img').css('transform','translateY(0px)')
        });

   
});

