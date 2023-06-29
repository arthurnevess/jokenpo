var contUser = 0
var contPc = 0
const imgUser = document.getElementById("user")
const imgPc = document.getElementById("pc")
const jogar = document.getElementById("jogar")
const contador = document.getElementById("contador")
var jog1 = ""
var jogpc = ""

jogar.addEventListener("click", () => {
    select()
    playpc()
})

function select(){
    jog1 = document.querySelector('input[name="play"]:checked').value
    imgUser.innerHTML = "<img src='img/"+ jog1 +".png'>"
    imgPc.innerHTML = ""
}
function playpc(){
    let opt = ['pedra', 'papel', 'tesoura']
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0
    jogpc = opt[num]
    imgPc.innerHTML = "<img src='img/pc"+ jogpc +".png'>"
    analize()
}
function analize(){
    
    let win = "0"
    
    if (jog1 == jogpc){
        
    } else if (jog1 == "pedra"){
        win =  jogpc == "tesoura" ? 1 : -1
    } else if (jog1 == "papel"){
        win = jogpc == "pedra" ? 1 : -1
    } else if (jog1 == "tesoura") {
        win = jogpc == "papel" ? 1 : -1
    }

    if (win == 0){

    } else if (win > 0){
        contUser = contUser + 1
    } else {
        contPc = contPc + 1
    }

    contador.innerHTML = contUser + " x " + contPc
    
    if (contUser >= 3){
        window.alert("Você venceu!!! 🏆🏆🏆")
        reset()
    }
    if (contPc >= 3){
        window.alert("Você perdeu")
        reset()
    }
}
function reset(){
    contador.innerHTML = "0 x 0"
    contUser = 0
    contPc = 0
}