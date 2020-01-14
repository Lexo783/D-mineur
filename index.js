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