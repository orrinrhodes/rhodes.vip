played = false;

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var zoomscroll = $('.zoom');
    //console.log(scroll,zoomscroll)
    if (!played) {
        var sigma = new Audio('./audio/sigma.mp3');
        sigma.play();
        sigma.autoplay = true;
        played = true;
    }
});