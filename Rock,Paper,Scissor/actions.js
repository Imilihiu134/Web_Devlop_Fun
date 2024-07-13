let userScore = 0
let compScore = 0

const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')

const countUser = document.querySelector('#user')
const countComp = document.querySelector('#Comp')

const genCompChoice = () =>{
    const options = ["Rock","Paper","Scissor"]
    const randomindx = Math.floor(Math.random()*3)
    return options[randomindx];
}

const drawGame = ()=>{
    msg.innerText = "Game Draw"
    msg.style.backgroundColor="#bbff00"
    console.log("Game Draw")
}

const showWinner = (userWin) =>{
    if(userWin)
    {
        userScore++;
        countUser.innerText = userScore;
        msg.innerText = "Yeah! Congrats You Won"
        msg.style.backgroundColor="Green"
        console.log("User Won")
    }
    else
    {
        compScore++;
        countComp.innerText = compScore;
       msg.innerText = "Ohh No! Sorry You Lose"
       msg.style.backgroundColor="Red"
        console.log("Computer Won")
    }
}

const playGame=(userChoice)=>{
    console.log("User has selected",userChoice)
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("Computer has selected",compChoice)
    
    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === 'Rock')
        {
            userWin = compChoice === "Scissor"?true:false;
        }
        else if (userChoice === 'Scissor')
        {
            userWin = compChoice === "Paper"?true:false;
        }
        else
        {
            userWin = compChoice === "Rock"?true:false;
        }
        showWinner(userWin)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const userChoice = choice.getAttribute('id')
        playGame(userChoice)
    })
})