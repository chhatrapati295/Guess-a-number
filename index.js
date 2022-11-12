let computerGuess;
let userGuess = []
let gameOver = new Audio('gameover.mp3')
let gameOver1 = new Audio('gameover1.wav')
let success = new Audio('success.mp3')
let userOutputGuess = document.getElementById('outputGuess')
let userNumberUpdate = document.getElementById('inputBox')
const init = ()=>{
    computerGuess = Math.floor(Math.random()*100)
    console.log(computerGuess)
}
const startGame = ()=>{
    document.getElementById('welcomeScreen').style.display = 'none'
    document.getElementById('gameArea').style.display = 'block'
}
const easyMode = ()=>{
    maxGuess = 10;
    startGame()
}
const hardMode = ()=>{
    maxGuess = 5;
    startGame()
}
const newGameBegin = ()=>{
    window.location.reload()
}
const startNewGame = ()=>{
    userNumberUpdate.setAttribute('disabled',true)
    document.getElementById('newGameButton').style.display = 'inline'
}
const compareGuess = ()=>{
    let numberGuess = Number(document.getElementById('inputBox').value)
    userGuess = [...userGuess , numberGuess]
    document.getElementById('guesses').innerHTML = userGuess
    document.getElementById('attempts').innerHTML = userGuess.length
    if(userGuess.length < maxGuess){
        if(numberGuess > computerGuess){
            userOutputGuess.innerHTML = 'Your guess is high😯'
            userNumberUpdate.value = ''
        }else if(numberGuess < computerGuess){
            userOutputGuess.innerHTML = 'Your guess is low😒'
            userNumberUpdate.value = ''
        }else{
            userOutputGuess.innerHTML = 'You are Correct 💕'
            userNumberUpdate.value = ''
            success.play()
            startNewGame()
        }
    }else{
        if(numberGuess > computerGuess){
            userOutputGuess.innerHTML = `You loose 😿 Correct number is ${computerGuess}`
            userNumberUpdate.value = ''
            gameOver1.play()
            startNewGame()
        }else if(numberGuess < computerGuess){
            userOutputGuess.innerHTML = `You loose 😿 Correct number is ${computerGuess}`
            userNumberUpdate.value = ''
            gameOver1.play()
            startNewGame()
        }else{
            userOutputGuess.innerHTML = 'You are Correct 💕'
            userNumberUpdate.value = ''
            success.play()
            startNewGame()
        }
    }
}
document.getElementById('newGameButton').addEventListener('click',(e)=>{
    newGameBegin()
})