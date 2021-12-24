function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
};

async function drawRipple(event){
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