class Game {
    constructor(difficulty) {
        this.size = 0;
        this.numberBombes = 0;
        
    switch (difficulty) {
        case "Facile":
            this.size = 9;
            this.numberBombes = 10;
            break;
        case "Moyen":
            this.size = 18;
            this.numberBombes = 40;
            break;
        case "Difficile":
            this.size = 40;
            this.numberBombes = 100;
            break;
        case "Hardcore":
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

var setTime = undefined;
var timeStart = undefined;
var started = undefined;

function affichage(time) {
    var time = new Date(Date.now() - timeStart);
    //var h = time.getHours() - 1;
    var m = time.getMinutes();
    var s = time.getSeconds();
    //document.getElementById('chronometre').textContent = (h + "").padStart(2, "0") + ":" + (m+ "").padStart(2, "0") + ":" + (s + "").padStart(2, "0");
    document.getElementById('timer').textContent = (m+ "").padStart(2, "0") + ":" + (s + "").padStart(2, "0");
}

function Chrono() {
    affichage(new Date(Date.now() - timeStart));
}

function generateTable(game) {
    for (var row = 0; row < game.size; row++) {
        var tr = document.createElement('tr');
        for (var column = 0; column < game.size; column++) { 
            var td = document.createElement('td');
            var btn = document.createElement('button');
            btn.setAttribute('class', 'case');
            td.append(btn);
            tr.append(td);
        }
        document.getElementById('grille').append(tr);
    }
}

function start() {
    if (!started) {
        started = true;
        var difficulty = document.getElementById('selectorLevel').value;
        document.getElementById("selectLevel").style.display = "none";
        document.getElementById('timer').style.display = 'block';
        document.getElementById('level').style.display = 'block';
        document.getElementById('bombe').style.display = 'block';
        document.getElementById('btnStart').textContent = "Stop";
        document.getElementById('title').textContent = difficulty;
        
        var game = new Game(difficulty);
        game.create();
        generateTable(game);
        document.getElementById('bombe').textContent = "Bombes : " + game.numberBombes;
    
        timeStart = Date.now();
        setTime=setInterval(Chrono, 50);
    }
    else {
        document.getElementById("selectLevel").style.display = "block";
        document.getElementById('timer').style.display = 'none';
        document.getElementById('level').style.display = 'none';
        document.getElementById('bombe').style.display = 'none';
        document.getElementById('btnStart').textContent = "Start";
        clearInterval(setTime);
        setTime = undefined;
    }
    
}

function main(){
    document.getElementById('btnStart').addEventListener('click', start);
    document.getElementById('timer').style.display = 'none';
    document.getElementById('level').style.display = 'none';
    document.getElementById('bombe').style.display = 'none';
    started = false;
    timeStart = 0;
}

main();