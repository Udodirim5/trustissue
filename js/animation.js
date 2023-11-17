// scroll to top
// hide and show
$(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $("#mybtn").fadeIn("slow")
    }
    else{
        $("#mybtn").fadeOut("slow")
    }
})

// scroll up
$("#mybtn").click(function(){
    $('html, body').animate({scrollTop: 0}, 'slow')
    return false
})







let i = 0;
let txt = " PROVIDING WELLINESS SOLUTIONS";
let speed = 200;

function typewriter(){
    if (i < txt.length){
        document.getElementById("demo").innerHTML += txt[i];
        i++;
        setTimeout(typewriter, speed);
    }
}

// slide animations
$(window).scroll(function(){
    $('.slideanim').each(function(){
        var pos = $(this).offset().top

        var wintop = $(window).scrollTop()

        if(pos < wintop + 1200){
            $(this).addClass('slide')
        }
        // else(
        //     $(this).removeClass('slide')
        // )
    })
})

// zoom animations
$(window).scroll(function(){
    $('.zoomanim').each(function(){
        var pos = $(this).offset().top

        var wintop = $(window).scrollTop()

        if(pos < wintop + 1200){
            $(this).addClass('zoom')
        }
        // else(
        //     $(this).removeClass('zoom')
        // )
    })
})

// left animation
$(window).scroll(function(){
    $('.leftanim').each(function(){
        var pos = $(this).offset().top

        var wintop = $(window).scrollTop()

        if(pos < wintop + 1200){
            $(this).addClass('left')
        }
        // else(
        //     $(this).removeClass('left')
        // )
    })
})

// right animation
$(window).scroll(function(){
    $('.rightanim').each(function(){
        var pos = $(this).offset().top

        var wintop = $(window).scrollTop()

        if(pos < wintop + 1200){
            $(this).addClass('right')
        }
        // else(
        //     $(this).removeClass('right')
        // )
    })
})

// up animation
$(window).scroll(function(){
    $('.upanim').each(function(){
        var pos = $(this).offset().top

        var wintop = $(window).scrollTop()

        if(pos < wintop + 1200){
            $(this).addClass('up')
        }
        // else(
        //     $(this).removeClass('up')
        // )
    })
})

// down animation
$(window).scroll(function(){
    $('.downanim').each(function(){
        var pos = $(this).offset().top

        var wintop = $(window).scrollTop()

        if(pos < wintop + 1200){
            $(this).addClass('down')
        }
        // else(
        //     $(this).removeClass('down')
        // )
    })
})