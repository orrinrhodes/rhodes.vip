function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
};

played = false;

async function drawRipple(event){
    if (!played) {
        var sigma = new Audio('./audio/sigma.mp3');
        sigma.play();
        sigma.autoplay = true;
        played = true;
    }
    var x = '';
    var y = '';
    if (event.type == 'mousemove') {
        x = event.clientX;
        y = event.clientY;
    }
    else  {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
    };
    var node = document.querySelector('.ripple');
    var clone = node.cloneNode(true);
    clone.classList.add('animate');
    clone.style.left = x - 5 + 'px';
    clone.style.top = y - 5 + 'px';
    node.after(clone);
    await sleep(250)
    clone.remove();
}

window.addEventListener('mousemove', drawRipple);
window.addEventListener('touchmove', drawRipple);
window.addEventListener('touchstart', drawRipple);