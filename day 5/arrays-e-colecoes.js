
var botaoAdicionaNaLista = document.querySelector("[data-botao]");
var botaoOtimizaLista = document.querySelector("[data-botao-otimiza]");

// botaoAdicionaNaLista.onclick = function () {
//     var dadoItem = document.querySelector('.item').value;
//     var dadoCategoria = document.querySelector('.categoria').value;

//     document.querySelector('.item').value = '';
//     document.querySelector('.categoria').value = '';

//     //tabela
//     var table = document.getElementById("lista");
//     var row1 = table.insertRow(1);
//     var item = row1.insertCell(0);
//     var categoria = row1.insertCell(1);

//     item.innerHTML = dadoItem;
//     categoria.innerHTML = dadoCategoria;
    
// }

botaoAdicionaNaLista.addEventListener( "click" , () => {
    var dadoItem = document.querySelector(".item").value;
    var dadoCategoria = document.querySelector(".categoria").value;

   // document.querySelector("[data-item]").value = '';
   // document.querySelector("[data-categoria]").value = '';
   document.querySelector('.item').value = '';
   document.querySelector('.categoria').value = '';

    // tabela
    var table = document.getElementById("lista");
    var row1 = table.insertRow(1);
    var item = row1.insertCell(0);
    var categoria = row1.insertCell(1);

    item.innerHTML = dadoItem;
    categoria.innerHTML = dadoCategoria;
})

botaoOtimizaLista.onclick = function () {
    var table = document.getElementById("lista");
    //var rows = table.rows;
    var rows = document.querySelectorAll("#lista tr");;
    var itensPadaria = [];
    var itensHortifruti = [];
    var itensFrios = [];
    var itensHigiene = [];
    var itensLimpeza = []
    var itensOutros = [];

    console.log(rows);

    rows.forEach( ( row )=> {
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

    );

    // for (contador = 1; contador < totalItens; contador++) {
    //     var row = table.rows.item(contador);
    //     var categoria = row.cells.item(1).innerHTML;
    //     var item = row.cells.item(0).innerHTML;
        
    //     if (categoria == 'padaria'){
    //         itensPadaria.push(item);
    //     }        
    //     if (categoria == 'hortifruti'){
    //         itensHortifruti.push(item);
    //     }
    //     if (categoria == 'frios'){
    //         itensFrios.push(item);
    //     }
    //     if (categoria == 'higiene'){
    //         itensHigiene.push(item);
    //     }
    //     if (categoria == 'limpeza'){
    //         itensLimpeza.push(item);
    //     }
    //     if (categoria == 'outros'){
    //         itensOutros.push(item);
    //     }
    // } 

    var texto = "Padaria: " + itensPadaria + ". Hortifruti: " + itensHortifruti + ". Frios: " + itensFrios + ". Higiene: " + itensHigiene + ". Limpeza: " + itensLimpeza + ". Outros: " + itensOutros + "." ;
    var listaOtimizada = alert(texto);

    

}