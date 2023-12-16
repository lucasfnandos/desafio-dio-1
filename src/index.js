let nomeHeroi = "Jucelino"
let xpHeroi = 55900

if(xpHeroi >= 10001){
    var nivelHeroi = "Radiante"
}else if(xpHeroi >= 9001){
    var nivelHeroi = "Imortal"
}else if(xpHeroi >= 8001){
    var nivelHeroi = "Ascendente"
}else if(xpHeroi >= 7001){
    var nivelHeroi = "Platina"
}else if(xpHeroi >= 5001){
    var nivelHeroi = "Ouro"
}else if(xpHeroi >= 2001){
    var nivelHeroi = "Prata"
}else if(xpHeroi >= 1001){
    var nivelHeroi = "Bronze"
}else{
    var nivelHeroi = "Ferro"
}

console.log("O Herói de nome "+nomeHeroi+" está no nível "+nivelHeroi);
