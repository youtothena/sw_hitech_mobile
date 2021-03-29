// 1. header

//Submenu slideDown
$('header .contents .down').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        //+로 바꾸기
        $(this).children('dt').text('+');
        /*내용 보여주기*/
        $(this).siblings('.contents_box').stop().slideUp(500);
    }else{
        $(this).addClass('active');
        //-로 바꾸기
        $(this).children('dt').text('-');
        /*내용 보여주기*/
        $(this).siblings('.contents_box').stop().slideDown(500);
    };
});

//Change Language
$('header .change_lan').click(function(e){
    e.preventDefault();
    $('.change_lan').removeClass('contents_select');
    $(this).addClass('contents_select');
});

// Search section
$('header .search_icon').click(function(e){
    e.preventDefault();
    $('form').slideDown('500');
});
$('header .close').click(function(e){
    e.preventDefault();
    $('header form').slideUp('500');
});
