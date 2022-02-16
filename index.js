let sounds=['sounds/crash.mp3','sounds/kick-bass.mp3','sounds/snare.mp3','sounds/tom-1.mp3','sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3'];
let keykey=['w','a','s','d','j','k','l'];

//Audio on clicking buttons
for(let x=0;x<7;x++)
{
document.getElementsByTagName('button')[x].addEventListener('click',clicko);
function clicko()
{
   let a=new Audio(sounds[x]);
   a.play();
   document.getElementsByTagName('button')[x].classList.add('pressed');
   setTimeout(()=>{document.getElementsByTagName('button')[x].classList.remove('pressed');
},150)
}
}

//Audio on Pressing keys
document.addEventListener('keydown',(event)=>{makeSound(event.key)});
function makeSound(n){for(let i=0;i<7;i++)
   {
if(n==keykey[i])
{
   let a=new Audio(sounds[i]);
   a.play(); 
   document.getElementsByTagName('button')[i].classList.add('pressed');
   setTimeout(()=>{document.getElementsByTagName('button')[i].classList.remove('pressed');
},100)
}
   
}
}

//Animation on Pressing Keys

