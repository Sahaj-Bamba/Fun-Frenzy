$(document).ready(function(){



    $(".pic").hover(function(){
        $(this).parent().children(".txt").slideDown(1000);
    },
    function(){
        $(this).parent().children(".txt").slideUp(1000);
    });


    var TP=0;
    $(".tag").hover(function(){
    $(this).children(".image").css("display","none");
    $(this).children(".image2").css("display","inline-block");
    } , 

function(){
    $(this).children(".image2").css("display","none");
    $(this).children(".image").css("display","inline-block");
    }
);

    $(".menu_item").hover(function(){
        $(this).css("background-color","#fff");
    },
    function(){
        $(this).css("background-color","#f3f3f3");
        //console.log("hell");
    });


$(".menu_button").click( function () {
    TP++;
    $(".menu").slideToggle();
    $(this).css("background-image","url('menu"+(TP%2+1)+".jpg')");
    //console.log("uhui");
});

});
