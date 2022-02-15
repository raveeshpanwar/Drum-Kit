
for(let x=0;x<7;x++)
{
document.getElementsByTagName('button')[x].addEventListener('click',clicko);
function clicko()
{
   let a=new Audio(sounds[x]);
   a.play();

}
}
let sounds=['sounds/crash.mp3','sounds/kick-bass.mp3','sounds/snare.mp3','sounds/tom-1.mp3','sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3'];
