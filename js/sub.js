
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


    $('.toggle').click(function(){
        $('.tg').toggle();
        $('.btn1').css('display','none');
    });

   
});

