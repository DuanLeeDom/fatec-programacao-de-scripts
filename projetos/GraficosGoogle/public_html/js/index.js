/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const botaog1 = document
               .getElementById("atualiza");

botaog1
    .addEventListener("click",
                     function()
                     {
                        atualiza();
                     }
                    );
function atualiza(){
    let dadosParaGrafico = document
            .getElementById("info").value;
    let linhas = dadosParaGrafico.split("\n");
    let matriz = [];
    for (var posicao in linhas) {
        let colunas = linhas[posicao].split(",");
        if (posicao > 0){
            colunas[1] = parseInt(colunas[1]);
        }
        matriz.push(colunas);
    }

    configGrafico(document.getElementById("piechart"),
    matriz);
}
