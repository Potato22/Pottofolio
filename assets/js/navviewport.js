$(function () {

    var $win = $(window);
    var winH = $win.height(); // window height

    $win.on("scroll", function () {
        if ($(this).scrollTop() > winH) {
            //console.log('navOff')
            $('.dynamicnav').removeClass('navOff');
        } else {
            //console.log('navOn')
            $('.dynamicnav').addClass('navOff');
        }
    }).on("resize", function () { // read window size change
        winH = $(this).height(); // update height value
    });

});
$(function () {
    $('.creation').click(function () {
        $('.dimmer').fadeIn(300);
        $('.creationdialog').addClass('cdactive');
    })
    $('.xcont, .cbutton').click(function () {
        $('.creationdialog').removeClass('cdactive');
        $('.dimmer').fadeOut(300);
    })
})

function chapter() {
    //calc offset
    var about = $('#about').offset().top - $(window).scrollTop();
    //var creations = $('#creations').offset().top - $(window).scrollTop();
    var threed = $('#threed').offset().top - $(window).scrollTop();
    var design = $('#design').offset().top - $(window).scrollTop();
    var illus = $('#illus').offset().top - $(window).scrollTop();
    //var trivia = $('#trivia').offset().top - $(window).scrollTop();
    
    

    //BOOL
    var aboutbool;
    var threedbool;
    var designbool;
    var illusbool;
    //var contactbool;
    //var triviabool;

    if (about <= 0) {
        aboutbool = true;
        //console.log("about active")
    } else {
        aboutbool = false;
    }

    if (threed <= 0) {
        threedbool = true;
        aboutbool = false;
    } else {
        threedbool = false;
    }
    if (design <= 0) {
        threedbool = false;
        designbool = true;
    } else {
        designbool = false;
    }
    if (illus <= 0) {
        illusbool = true;
        designbool = false;
    } else {
        illusbool = false;
    }
    //if (trivia <= 0) {
    //    triviabool = true;
    //    illusbool = false;
    //    //console.log("threed active")
    //} else {
    //    triviabool = false;
    //}

    //console.log('creatbool', threedbool, '\n designbool', designbool, '\n illusbool', illusbool, '\n triviabool', triviabool )
    console.log('aboutbool %s, threedbool %s, designbool %s, triviabool %s', aboutbool, threedbool, designbool, illusbool)

    if (aboutbool == true) {
        $('.s1').addClass('activestrike')
    } else {
        $('.s1').removeClass('activestrike')
    }

    if (threedbool || designbool || illusbool == true) {
        $('.s2').addClass('activestrike')
    } else {
        $('.s2').removeClass('activestrike')
    }
    
    if (threedbool == true) {
        $('.s2-1').addClass('blockactive')
    } else {
        $('.s2-1').removeClass('blockactive')
    }
    if (designbool == true) {
        $('.s2-2').addClass('blockactive')
    } else {
        $('.s2-2').removeClass('blockactive')
    }
    if (illusbool == true) {
        $('.s2-3').addClass('blockactive')
    } else {
        $('.s2-3').removeClass('blockactive')
    }
}
chapter();
$(window).scroll(chapter);