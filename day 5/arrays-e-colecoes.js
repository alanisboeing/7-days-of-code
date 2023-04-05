
var botao = document.querySelector('.botao');
var botao2 = document.querySelector('.botao2');

botao.onclick = function () {
    var dadoItem = document.querySelector('.item').value;
    var dadoCategoria = document.querySelector('.categoria').value;

    document.querySelector('.item').value = '';
    document.querySelector('.categoria').value = '';

    //tabela
    var table = document.getElementById("lista");
    var row1 = table.insertRow(1);
    var item = row1.insertCell(0);
    var categoria = row1.insertCell(1);

    item.innerHTML = dadoItem;
    categoria.innerHTML = dadoCategoria;
    
}

botao2.onclick = function () {
    var table = document.getElementById("lista");
    var totalItens = table.rows.length;
    var itensPadaria = [];
    var itensHortifruti = [];
    var itensFrios = [];
    var itensHigiene = [];
    var itensLimpeza = []
    var itensOutros = [];

    for (contador = 1; contador < totalItens; contador++) {
        var row = table.rows.item(contador);
        var categoria = row.cells.item(1).innerHTML;
        var item = row.cells.item(0).innerHTML;
        
        if (categoria == 'padaria'){
            itensPadaria.push(item);
        }        
        if (categoria == 'hortifruti'){
            itensHortifruti.push(item);
        }
        if (categoria == 'frios'){
            itensFrios.push(item);
        }
        if (categoria == 'higiene'){
            itensHigiene.push(item);
        }
        if (categoria == 'limpeza'){
            itensLimpeza.push(item);
        }
        if (categoria == 'outros'){
            itensOutros.push(item);
        }
    }

    var texto = "Padaria: " + itensPadaria + ". Hortifruti: " + itensHortifruti + ". Frios: " + itensFrios + ". Higiene: " + itensHigiene + ". Limpeza: " + itensLimpeza + ". Outros: " + itensOutros + "." ;
    document.getElementById("texto").value=texto;

    

}