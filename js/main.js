let z = 0
let x = 50
let y

function zufallszahlgenerieren() {
    y = Math.round(Math.random()*100)
    console.log(y)
}

function hoeher() {
    zufallszahlgenerieren()
    if (y > x){
        document.getElementById("ausgabe1").innerHTML = "Die Zufallszahl beträgt:" + y + "!";
        document.getElementById("ausgabe2").innerHTML = "Richtig! Die neue Zufalszahl ist höher, als die alte!";
        z = z + 1;
        document.getElementById("ausgabe3").innerHTML = "Deine bisherige Streak beträgt:" + z + "!"
    }else if (y === x){
        document.getElementById("ausgabe1").innerHTML = "Die Zufallszahl beträgt:" + y + "!";
        document.getElementById("ausgabe2").innerHTML = "Glück gehabt!";
        z = z + 1
        document.getElementById("ausgabe3").innerHTML = "Deine bisherige Streak beträgt:" + z + "!"
    }else{
        document.getElementById("ausgabe1").innerHTML = "Die Zufallszahl beträgt:" + y + "!";
        document.getElementById("ausgabe2").innerHTML = "Falsch! Die neue Zufallszahl ist niedriger, als die vorherige!";
        z = 0;
        document.getElementById("ausgabe3").innerHTML = "Deine bisherige Streak beträgt:" + z + "!"
    }
    x=y
}

function tiefer() {
    zufallszahlgenerieren()
    if (y < x) {
        document.getElementById("ausgabe1").innerHTML = "Die Zufallszahl beträgt:" + y + "!";
        document.getElementById("ausgabe2").innerHTML = "Richtig! Die neue Zufalszahl ist niedriger, als die alte!";
        z = z + 1;
        document.getElementById("ausgabe3").innerHTML = "Deine bisherige Streak beträgt:" + z + "!"
    } else if (y === x) {
        document.getElementById("ausgabe1").innerHTML = "Die Zufallszahl beträgt:" + y + "!";
        document.getElementById("ausgabe2").innerHTML = "Glück gehabt!";
        z = z++
        document.getElementById("ausgabe3").innerHTML = "Deine bisherige Streak beträgt:" + z + "!"
    } else {
        document.getElementById("ausgabe1").innerHTML = "Die Zufallszahl beträgt:" + y + "!";
        document.getElementById("ausgabe2").innerHTML = "Falsch! Die neue Zufallszahl ist höher, als die vorherige!";
        z = 0;
        document.getElementById("ausgabe3").innerHTML = "Deine bisherige Streak beträgt:" + z + "!"
    }
    x=y
}
