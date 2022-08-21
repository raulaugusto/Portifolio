$(document).ready(function(){
    $(window).scroll(function(){

        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    var width = screen.width;
    $(window).resize(function(){
        var width = $(window).width();
        //Assuming X=550   
        if(width <= 1075){
            $('.ll .left').insertBefore('.ll .right');
            $('.lefttext').removeClass('lefttext').addClass('righttext');
            $('.leftl').removeClass('leftl').addClass('right');
            $('.rightl').removeClass('rightl').addClass('left');
        }else{
            $('.ll .right').insertBefore('.ll .left');
            $('.ll .left').removeClass('left').addClass('rightl');
            $('.ll .right').removeClass('right').addClass('leftl');
        }
     })
});
