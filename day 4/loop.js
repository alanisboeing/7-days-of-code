var intro = ("Olá! Que tal um pequeno jogo? Te desafio a acertar o número que estou pensando! (Digite 1 para continuar para o jogo ou 2 para sair.)");
var continuar = prompt(intro, "1 para continuar para o jogo, 2 para sair");
var numero = Math.floor(Math.random() * (20 - 1 + 1) + 1)
if ( continuar == 1 ){
    var regras = ("Muito bom! Você deve escolher um número de 1 à 20. Você tem 3 chances para acertar a partir de agora. Boa sorte!")
    var tentativa = prompt(regras, "Digite um número de 1 à 20.")
    var tentativa2
    if(tentativa != numero){
        for(contador = 0 ; contador < 2 ; contador++ ){
            var chance = ("Você errou! Tente novamente:")
            var tentativa2 = prompt(chance, "Digite um número de 1 à 20.")
            if(tentativa2 == numero){
                alert("Parabéns, você acertou!")
            }
        }
    }
    if( tentativa == numero){
        alert("Parabéns, você acertou de primeira!")
    } 
    else if (tentativa2 != numero){
        alert("Que pena! Você não conseguiu. O número que eu pensei foi " + numero + ".")

    }
}
else if (continuar != 2){
    alert("Você não digitou uma resposta válida! Atualize a página para tentar novamente.")
}
