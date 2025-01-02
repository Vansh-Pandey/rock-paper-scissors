let myscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".main");
const msg = document.querySelector("#msg");
const msgcontainer = document.querySelector("#msgcontainer");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
};

const drawgame = (userchoice) => {
    msg.innerText = `Draw! Play again, both chose ${userchoice}.`;
    msgcontainer.style.backgroundColor = "blue";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        msg.innerText = `You win! ${userchoice} beats ${compchoice}.`;
        msgcontainer.style.backgroundColor = "green";
        myscore++;
    } else {
        msg.innerText = `You lose! ${compchoice} beats ${userchoice}.`;
        msgcontainer.style.backgroundColor = "red";
        compscore++;
    }

    document.querySelector("#my-score").innerText = `Your Score: ${myscore}`;
    document.querySelector("#comp-score").innerText = `Computer Score: ${compscore}`;
};

const playgame = (userchoice, compchoice) => {
    if (userchoice === compchoice) {
        drawgame(userchoice);
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((main) => {
    main.addEventListener("click", () => {
        const userchoice = main.getAttribute("id");
        const compchoice = gencompchoice();
        playgame(userchoice, compchoice);
    });
});
