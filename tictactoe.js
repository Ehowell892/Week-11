var title = document.getElementById("Turn");
var gb = document.querySelectorAll("#container1 div");
var turn = 0;
var turnNum = 0;
function checkwinner() {
    var gb1 = document.getElementById("grid1");
    var gb2 = document.getElementById("grid2");
    var gb3 = document.getElementById("grid3");
    var gb4 = document.getElementById("grid4");
    var gb5 = document.getElementById("grid5");
    var gb6 = document.getElementById("grid6");
    var gb7 = document.getElementById("grid7");
    var gb8 = document.getElementById("grid8");
    var gb9 = document.getElementById("grid9");
    if (gb1.innerHTML === gb2.innerHTML && gb1.innerHTML === gb3.innerHTML && gb1.innerHTML !== "") {
        title.innerHTML = gb1.innerHTML + " is the winner!";
        turnNum = 0;
    }
    if (gb4.innerHTML === gb5.innerHTML && gb4.innerHTML === gb6.innerHTML && gb4.innerHTML !== "") {
        title.innerHTML = gb4.innerHTML + " is the winner!";
        turnNum = 0;
    }
    if (gb7.innerHTML === gb8.innerHTML && gb7.innerHTML === gb9.innerHTML && gb7.innerHTML !== "") {
        title.innerHTML = gb7.innerHTML + " is the winner!";
        turnNum = 0;
    }
    if (gb1.innerHTML === gb4.innerHTML && gb1.innerHTML === gb7.innerHTML && gb1.innerHTML !== "") {
        title.innerHTML = gb1.innerHTML + " is the winner!";
        turnNum = 0;
    }
    if (gb2.innerHTML === gb5.innerHTML && gb2.innerHTML === gb8.innerHTML && gb2.innerHTML !== "") {
        title.innerHTML = gb2.innerHTML + " is the winner!";
        turnNum = 0;
    }
    if (gb3.innerHTML === gb6.innerHTML && gb3.innerHTML === gb9.innerHTML && gb3.innerHTML !== "") {
        title.innerHTML = gb3.innerHTML + " is the winner!";
        turnNum = 0;
    }
    if (gb1.innerHTML === gb5.innerHTML && gb1.innerHTML === gb9.innerHTML && gb1.innerHTML !== "") {
        title.innerHTML = gb1.innerHTML + " is the winner!";
        turnNum = 0;
    }
    if (gb3.innerHTML === gb5.innerHTML && gb3.innerHTML === gb7.innerHTML && gb3.innerHTML !== "") {
        title.innerHTML = gb3.innerHTML + " is the winner!";
        turnNum = 0;
    }
    if (
        turnNum == 9
    ) {
        title.innerHTML = "Draw!"
    }
    console.log(turnNum);
}
for (
    var box = 0;
    box < gb.length;
    box++
) {
    console.log(box);
    gb[box].onclick = function () {
        console.log(this.id);
        if (
            this.innerHTML.length == 0
        ) {
            if (turn == 0) {
                this.innerHTML = "X";
                title.innerHTML = "O's turn";
                turn = 1;
                turnNum++;
                checkwinner();
            } else {
                this.innerHTML = "O";
                title.innerHTML = "X's turn";
                turn = 0;
                turnNum++;
                checkwinner();
            }
        }
    }
}
document.getElementById("Restart").onclick = function () {
    title.innerHTML = "Tic Tac Toe";
    turn = 0;
    turnNum = 0;
    for (
        var box = 0;
        box < gb.length;
        box++
    ) {
        gb[box].innerHTML = "";
    }
}
