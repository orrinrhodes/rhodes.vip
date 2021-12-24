played = false;
 
window.onscroll = function() {myFunction()};

function myFunction() {
    if (!played) {
        var sigma = new Audio('./audio/sigma.mp3');
        sigma.play();
        sigma.autoplay = true;
        played = true;
    }
    var max = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (max/height) * 100;
    document.getElementById("line").style.height = scrolled + "%";
    console.log(scrolled);
};