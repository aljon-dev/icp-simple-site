$(document).ready(function () {
 $(window).scroll(function (){
        if(this.scrollY < 20){
                $(".navbar").addClass("sticky")
        }else{
            $(".navbar").removeClass("sticky")
        }

    
if(this.scrollY > 500){
    $(".scroll-up-btn").addClass("show");
}else {
    $(".scroll-up-btn").remove("show");
}
});

$(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior","auto");

});

$(".navbar .menu li a ").click(function (){
$(html).css("schollBehavior", "smooth");

});

$(".menu-btn").click(function (){
$(".navbar .menu").toggleClass("active");
$(".menu-btn i").toggleClass("active");

});
var type = new Typed(".typing",{
    strings:[
        "Web Developer",
        "Computer Technician",
        "Java Developer"
    ],
    typeSpeed:100,
    backspeed:60,
    loop:true


});

var typed = new Typed(".typing2",{
    strings: [
        
        "Web Developer",
        "Computer Technician",
        "Java Developer"
    ],
    typeSpeed:100,
    backspeed:60,
    loop:true
});

$(".carousel").owlCarousel ({
    margin:20,
    loop:true,
    autoplay:true,
    autoplayTimeOut:2000,
    autoplayHoverPause:true,
    responsive:{
        0: {
            items:1,
            nav:false
        },
        600: {
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }

});

});


