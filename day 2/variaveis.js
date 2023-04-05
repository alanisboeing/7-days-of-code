
var botao = document.querySelector('.botao');

botao.onclick = function(){
    var nome = document.querySelector('.nome').value;
    var idade = document.querySelector('.idade').value;
    var linguagem = document.querySelector('.linguagem').value;
    
    if (nome && idade && linguagem != null)  {
        var recepcao = ("Olá, " + nome + "! Prazer em te conhecer! Então quer dizer que você tem " + idade + " anos e está estudando " + linguagem + "! Digite 1 se você está gostando de estudar essa linguagem ou 2 se não está:");
        var resposta = prompt(recepcao, "Digite 1 ou 2");
        if (resposta == 1) {
        alert("Muito bom! Continue estudando e você terá muito sucesso.")
        } 
        else if (resposta == 2) {
            alert("Ahh que pena... Já tentou aprender outras linguagens?")
        }
    }
}