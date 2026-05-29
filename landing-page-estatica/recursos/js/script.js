$(document).ready(function(){

    $(".nav-bar").on("click", function(){

        //if($(".menu-lateral").hasClass("active")){
        //    $(".menu-lateral").removeClass("active");
        //}
        //else{
        //    $(".menu-lateral").addClass("active");
        //}

        $(".menu-lateral").toggleClass("active");
        $(".nav-bar i").toggleClass("fa-times fa-bars-staggered");

    });

});
