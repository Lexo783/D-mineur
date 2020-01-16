var tabPlay = [];
class Game
{
    constructor(difficulty)
    {
        this.size = 0;
        this.nbrBombe = 0;
        switch (difficulty) {
            case "easy":
                this.size = 9;
                this.nbrBombe = 10;
                break;
            case "nomral":
                this.size = 18
                this.nbrBombe = 40
                break;
            case "hard":
                this.size = 50
                this.nbrBombe = 30
                break;
            default:
                break;
        }
        this.lines = [];
        for (let i = 0; i < this.size; i++) 
        {
            this.lines.push(new Array(size));
        }
        console.log(this.lines)
    }
    createCase() 
    {
        var values = 0;
        var coordonates = []
        for(let r = 0; r < this.lines.length; r++)
        {
            for (let c = 0; c < this.lines.length; c++) 
            {
                coordonates.push(row + ":" + column);
                this.lines[row][column] = new Tuiles(row,column,values);
            }
        }
        for(let i = 0; i < this.nbrBombe; i++)
        {
            var index = this.randomThis(coordonates.length);
            var coordOne = coordonates[index];
            coordonates.splice(index,1);
            this.lines[coordOne.split(':')[0]][coordOne.split(':')[1]].values = 9;
        }
    }
    randomThis(myMax)
    {
        return Math.floor(Math.random() * myMax);
    }
}

class Tuiles
{
    constructor(row, column, values)
    {
        this.row = row;
        this.column = column;
        this.values = values;
    }
}




function main() 
{
    var game = new Game(9);
}
main();