/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const botao = document.getElementById("botao");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const corpo = document.getElementById("corpoTabela");

// definição de ações
botao.addEventListener("click", adiciona);

// atualizar tabela para mostrar os cadastros
atualizaTabela();

function atualizaTabela() {
    corpo.innerHTML = "";
    let lista = retornaListaContatos();
    for (var posicao in lista) {
        let objeto = lista[posicao];
        // adicionar o objeto dentro do corpo da tabela
        let colunanome = document.createElement("td");
        let colunaemail = document.createElement("td");
        let linha = document.createElement("tr");
        // colocar os valores nas colunas
        colunanome.innerHTML = objeto.contato;
        colunaemail.innerHTML = objeto.email;
        linha.appendChild(colunanome);
        linha.appendChild(colunaemail);
        corpo.appendChild(linha);
    }
}

function adiciona() {
    let objeto = {}; // objeto javascript vazio
    objeto.contato = nome.value;
    objeto.email = email.value;
    //opcional
    // let objeto = {contato: nome.value,
    //               email: email.value};
    // coloca o objeto dentro da lista de emails
    adicionaContato(objeto);
    // atualiza a exibição da tabela
    atualizaTabela();
    // limpa o formulário
    nome.value = "";
    email.value = "";
}