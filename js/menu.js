var playing = false;
var sigma = new Audio('./audio/sigma.mp3');
sigma.volume = .5;
// cannot autoplay

function play() {
    if (!playing) {
        playing = true;
        sigma.play();
        sigma.autoplay = true;
    } else {
        playing = false;
        sigma.pause();
    };
};