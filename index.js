var tabPlay = [];
class js
{
    randomWhatYouWhant(nbr)
    {
            return Math.floor(Math.random()* nbr);
    }
    initDemineur()
    {
        for (let i = 0; i < 81; i++)
        {
            tabPlay.push(0);
        }
        console.log(tabPlay);
        for (let i = 0; i < 10; i++) 
        {
            tabPlay[this.randomWhatYouWhant(tabPlay.length)] = 9;
        }
        console.log(tabPlay)
    }
}
const me = new js();
console.log(me.initDemineur());

var setTime = 0;
var timeStart=0;
var timeNow=0;
var timeInterv=0;

function affichage(time){
    var sec = time.getSeconds(); 

    document.getElementById("timer").innerHTML= sec;
}
function Chrono(){
    timeNow=new Date();
    Interv=timeNow-timeStart;
    timeInterv=new Date(Interv);
    affichage(timeInterv);
 }
 function start(){
   if (timeInterv==0) {
      timeStart=new Date();
   }
   else { 
    timeNow=new Date();
    Pause=timeNow-timeInterv;
    timeStart=new Date(Pause);
  }
  setTime=setInterval(Chrono,10);
}