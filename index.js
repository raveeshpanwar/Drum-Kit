
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
/*let drums=['','images/kick-bass.png','images/snare.png','images/tom-1.png','images/tom-2.png','images/tom-3.png','images/tom-4.png'];

for(let z=0;z<7;z++){
   document.getElementsByTagName('button')[z].style.backgroundImage=url(drums[z]);
   }*/