

function zooming() {
    $(".zoomindimmer").fadeIn(200), $(".zoomin").show(), $(".dynamicnav").addClass("navHide")
}

function zoomout() {
    $(".zoomincontent").attr("src", "").removeClass('zoomDisable').prop("volume", 1), $(".zoomindimmer").fadeOut(200), $(".zoomin").hide(), $(".dynamicnav").removeClass("navHide")
    $(".zoomalttext").html("")
}
document.getElementById("daImg").addEventListener("galleryLoaded", (function () {
    console.log('ready')
    $(".daImgs, img.imgz, video.imgz").click((function () {
        var zoomRequestType = $(this);

        if (zoomRequestType.is('img.imgz')) {
            $("video.zoomincontent").addClass('zoomDisable')
            $("img.zoomincontent").attr("src", $(this).attr("src"))
            $(".zoomalttext").html($(this).attr("alt"))
            zooming();
        } else if (zoomRequestType.is('video.imgz')) {
            $("img.zoomincontent").addClass('zoomDisable')
            $("video.zoomincontent").attr("src", $(this).attr("src"))
            $(".zoomalttext").html($(this).attr("alt"))
            zooming();
        }
        if (zoomRequestType.is('video.imgz.reducevol')) {
            $("video.zoomincontent").prop("volume", .5);
        }
        //console.log(zoomRequestType.is('video.imgz.reducevol'))
    }));
    $(".zoomincontent,.zoomin").click((function () {
        zoomout();
    }));
}));