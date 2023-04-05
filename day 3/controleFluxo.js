

var nome = prompt("Olá! Qual o seu nome?","Digite seu nome!");

var p1 = (nome + ", Você deseja seguir para a área de Front-End ou Back-End?");
var r1 = prompt(p1, "Front-End / Back-End");

if (r1.toLowerCase() == "front-end"){
    var p2 = ("Legal! Front-End então, ein. Agora me conta, você quer aprender React ou Vue?");
    var r2 = prompt(p2, "React / Vue");
} else if (r1.toLowerCase() == "back-end"){
    var p2 = ("Legal! Back-End então, ein. Agora me conta, você quer aprender C# ou Java?");
    var r2 = prompt(p2, "C# / Java");
}
var p3 = ("Ótimas escolhas, " + nome + "! Com base nos seus estudos, você pretende seguir se especializando para " + r1 + " (digite 1) ou deseja seguir se desenvolvendo para se tornar Fullstack? (digite 2)")
var r3 = prompt(p3,"1 ou 2 ?")
if (r3 == 1){
    var p4 = ("Muito bom! Continue se dedicando para se tornar um ótimo especialista " + r1)
    var r4 = prompt(p4,"Vou sim!")
    }
else if (r3 == 2){
    var p4 = ("Ótimo! A vantagem de ser full stack é entender como as coisas funcionam no back-end e no front-end.Com essa ampla capacidade de alcançar os dois lados, você consegue desenvolver uma visão mais estratégica de todo o negócio. Ponto positivo!")
    var r4 = prompt(p4, "Legal!")
}
var p5 = (nome + ", você gostaria de aprender mais alguma tecnologia? (Digite 1 + tecnologia para sim OU 2 para não)")
var r5 = prompt(p5, "1 (Digite a tecnologia desejada) / 2")
while(r5 != 2){
    var r5 = prompt(p5, "1 (Digite a tecnologia desejada) / 2")
}
var p6 = ("Muito bom, " + nome + "! Não se esqueça que desenvolver é persistir e não ter medo do novo. Nossa área está sempre em mudança, e precisamos nos atualizar constantemente. Mantenha-se antenado às novas tecnologias e procure se aperfeiçoar até mesmo naquilo que já tenha grande conhecimento. Sucesso!")
var r6 = prompt(p6, "Até mais!");
