const quotes = [
    [`how are you <b>so</b> sexy??`,'orrin'],
    [`orrin you're so <b>sexy</b> and irresistible 😻😻`,'females'],
    [`shut up orrin <i>ok ;(</i>`,'liz'],
    [`Orrin is a muscular, talented, <b>big brain</b>, sex beast`,'my peers'],
    [`Cheeky, <b>smork</b>, half-listens <i>(i only listen to the alpha chad i am)</i>`,'pussy man'],
    [`Orrin Rhodes is an intellectual <b>mastermind</b>, his creations and diversity is <b>out of the world</b>. He is an innovating master with his <b>craft</b> he is able to change the world. He has showed me and many others <b>the truth</b> about things like empathy and <b>morality</b>. Like when he almost <img id="fuel" src="./images/PROFESSIONALFUELTANK.jpg">[punched] his fuel tank and <b>died</b>. Thank you <i>(no problem g)</i> Orrin Rhodes for being a powerful leader and a risk taker for <b>societies</b> improvement of the future.`,'dan'],
    [`<b>srupid</b> <i>cant even spell smh</i>`,'aliya 🤢🤮']
];

const keyFrames = document.createElement('style');
function fade(selector,start,finish,t) {
  var fadeAnimation =
  `
  @keyframes fade {
    0%{
      opacity: ${start};
    }
    100%{
      opacity: ${finish};
    }
  }

  ${selector} {
    animation: fade ${t}s linear;
    animation-fill-mode: forwards;
  }
  `;
  keyFrames.innerHTML = fadeAnimation;
  return keyFrames;
};

console.log(`"${quotes[0][0]}"\n-${quotes[0][1]}`);
const quote = document.getElementById('typewriter');
const author = document.getElementById('author');

var speed = 100; // depends on str length
var wait = 2000;

function typeWriter(i=0, index=1, direction=1) {
  var fadein = fade('#author',0,1,2);
  var written = quotes[i][0].slice(0, index);
  wait = (quotes[i][0].length * 65 + 1300)/1.5; // time to read
  quote.innerHTML = `"${written}<span>\u25ae</span>"`;
  if (written.length >= quotes[i][0].length) {
    setTimeout(() => typeWriter(i, index-1, -1), wait);
  } else if (written.length == 0) {
    author.removeChild(fadein);
    author.style.opacity = '1';
    wait = 1500;
    console.log(author.children,author.childNodes)
    setTimeout(() => typeWriter((i+1) % quotes.length), wait);
  } else {
    author.innerHTML = `-<b><i>${quotes[i][1]}</i></b>`;
    author.appendChild(fadein);
    setTimeout(() => typeWriter(i, index+direction, direction), speed);
  };
};

typeWriter();