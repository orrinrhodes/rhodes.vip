var played = false;
var title = document.getElementById('title');
var pushed = false;

function scroll() {
    var max = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (max/height) * 100;
    document.getElementById('line').style.height = scrolled + '%';
    document.getElementById('baby').style.bottom = (scrolled/5)-25 + 'vh';
    if (scrolled >= 25) {
        pushed = true;
        console.log('help');
        title.innerHTML = 'help im being pushed !<br>put me back';
    } else if (pushed & scrolled == 0) {
        title.textContent = 'thank you';
    } else if (scrolled == 75) {
        title.textContent = '';
    };
};

function play() {
    if (!played) {
        var sigma = new Audio('./audio/sigma.mp3');
        sigma.play();
        sigma.autoplay = true;
        played = true;
    }
}

window.addEventListener('click', play);
window.addEventListener('scroll',scroll);