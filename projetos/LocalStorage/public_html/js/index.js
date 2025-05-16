/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbsp/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.addEventListener("DOMContentLoaded", function() {
    // Obter elementos da página
    const nome_cor = document.getElementById("nome_cor");
    const cod_cor = document.getElementById("cod_cor");
    const botao = document.getElementById("botao");
    const tabela = document.getElementById("cores");

    let matrizCores = ler("tab_cores");
    if (matrizCores == null) {
        matrizCores = []; //matrizCores = [].push([]);
    }

    // definir o evento de clique do botão
    botao.addEventListener("click", atualiza);
    atualizaTabela();

    // função para atualizar a tabela
    function atualiza() {
        let dados = [];
        dados.push(nome_cor.value);
        dados.push(cod_cor.value);
        matrizCores.push(dados);
        gravar("tab_cores", matrizCores);
        atualizaTabela();
    }
    // Atualiza tabela com os dados salvos
    function atualizaTabela() {
        if (tabela) {
            tabela.innerHTML = `<tr><th>Nome da Cor</th><th>Código da Cor</th></tr>`;
            for (let i = 0; i < matrizCores.length; i++) {
                let linha = document.createElement("tr");
                let coluna = document.createElement("td");
                coluna.innerHTML = matrizCores[i][0];
                linha.appendChild(coluna);
                coluna = document.createElement("td");
                coluna.innerHTML = matrizCores[i][1];
                linha.appendChild(coluna);
                coluna = document.createElement("td");
                coluna.style.backgroundColor = matrizCores[i][1];
                coluna.style.width = "20px";
                coluna.style.height = "20px";
                linha.appendChild(coluna);
                tabela.appendChild(linha);
            }
        }
    }

    // Carregar dados salvos na tabela ao iniciar
    if (matrizCores) {
        atualizaTabela();
    }
});