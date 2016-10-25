function showCross(id) {
    "use strict";
    var elmt = document.getElementById(id);
    elmt.style.transform = "scale(2)";
}

function showAnswer(clicked_id) {
    "use strict";
    //alert(clicked_id);
    var elmt;
    var answers = [
        "Flappy Bird - 35%",
        "Clash of clans - 20%",
        "Clash Royale - 15 %",
        "Minecraft - 8%",
        "Terraria - 5%",
        "Heads Up! - 3%",
        "Mario Bro - 1%",
        "KingKang - 1%",
        "Snake - 1%",
        "Minesweeper - 1%"
    ];
    var order = clicked_id.slice(-2);
    if (order.slice(0, 1) === "0") {
        order = clicked_id.slice(-1);
    }

    elmt = document.getElementById(clicked_id);
    
    //alert(answers[parseInt(order, 10) - 1]);
    var answer = answers[parseInt(order, 10) - 1];
    if (typeof answer === "undefined") {
        answer = "";
    }
    elmt.innerHTML = answer;
    
}