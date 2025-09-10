var numeroAleatorio = -1
var sorteado

sorteado = parseInt(Math.random() * (100 - 1)+ 1)

while(numeroAleatorio != sorteado){
    numeroAleatorio=parseInt(prompt("Digite um valor de 1 a 100"))

    if(numeroAleatorio<sorteado){
        alert("Muito baixo")
    }

    if(numeroAleatorio>sorteado){
        alert("Muito alto")
    }
        
}
    alert("Você acertou!")




