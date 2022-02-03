var title = document.getElementById('title');
var pushed = false;
var completed = false;

function scroll() {
    var max = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (max/height) * 100;
    document.getElementById('line').style.height = scrolled + '%';
    document.getElementById('baby').style.bottom = (scrolled/5)-25 + 'vh';
    if (!pushed & scrolled >= 30) {
        pushed = true;
        title.style.fontSize = 'x-large';
        title.innerHTML = '<b>help</b> im being pushed !<br>put me back';
    } else if (completed & scrolled >= 75) {
        title.textContent = `orrin's dox`;
    } else if (!completed & pushed & scrolled == 0) {
        completed = true;
        title.style.fontSize = 'x-large';
        title.textContent = 'thank you';
    };
};

function fadeIn(choice,animation) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                console.log(entry.target)
                choice.classList.add(animation);
            };
        });
    });
    observer.observe(choice);
};

const gerald = document.querySelector(".first");
const bilbo = document.querySelector(".bilbo");

fadeIn(gerald,'fadeRight');
fadeIn(bilbo,'fadeLeft');

window.addEventListener('scroll',scroll);