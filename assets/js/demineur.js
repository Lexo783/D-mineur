class Game {
    constructor(difficulty) {
        this.size = 0;
        this.numberBombes = 0;
        
    switch (difficulty) {
        case "easy":
            this.size = 9;
            this.numberBombes = 10;
            break;
        case "medium":
            this.size = 18;
            this.numberBombes = 40;
            break;
        case "hard":
            this.size = 40;
            this.numberBombes = 100;
            break;
        case "hardcore":
            this.size = 75;
            this.numberBombes = 1000;                
            break;
        default:
            break;
    }
        this.lines = [];
        for (var i = 0; i < this.size; i++) {
            this.lines.push(new Array(this.size));
        }
    }

    create(){
        var coordonates = [];
        for (var row = 0; row < this.size; row++) {
            for (var column = 0; column < this.size; column++) {
                coordonates.push(row + ":" + column);
                this.lines[row][column] = new Case(row, column, 0);
            }
        }
        for (var i = 0; i < this.numberBombes; i++) {
            var index = this.randomInt(coordonates.length);
            var coordonate = coordonates[index];
            coordonates.splice(index, 1);
            // coordonate => String : "x:y"
            this.lines[coordonate.split(':')[0]][coordonate.split(':')[1]].value = 9;
        }
    }

    randomInt(max) {
        return Math.floor(Math.random() * max);
    }
}

class Case {
    constructor(row, column, value) {
        this.row = row;
        this.column = column;
        this.value = value;
        this.hidden = true;
        this.flagged = false;
    }
}

var setTime = 0;
var timeStart=0;

function affichage(time){
    var time = new Date(Date.now() - timeStart);
    //var h = time.getHours() - 1;
    var m = time.getMinutes();
    var s = time.getSeconds();
    //document.getElementById('chronometre').textContent = (h + "").padStart(2, "0") + ":" + (m+ "").padStart(2, "0") + ":" + (s + "").padStart(2, "0");
    document.getElementById('timer').textContent = (m+ "").padStart(2, "0") + ":" + (s + "").padStart(2, "0");
}
function Chrono(){
    affichage(new Date(Date.now() - timeStart));
}

function start() {
    timeStart = Date.now();
    setTime=setInterval(Chrono, 50);

    var game = new Game("easy");
    game.create();
    console.log('====================================');
    console.log(game.lines);
    console.log('====================================');

    document.getElementById('timer').style.display = 'inline-block';
    document.getElementById('bombe').style.display = 'inline-block';
}
