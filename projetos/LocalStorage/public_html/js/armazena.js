/* 
 * Click nbfs://nbformat/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbsp/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function gravar(nome_chave, conteudo) {
    if (window.localStorage) {
        let dados = JSON.stringify(conteudo);
        localStorage.setItem(nome_chave, dados);
    } else {
        alert("LocalStorage não está disponível.");
    }
}

function ler(nome_chave) {
    if (window.localStorage) {
        let dados = localStorage.getItem(nome_chave);
        if (dados) {
            let conteudo = JSON.parse(dados);
            return conteudo;
        }
        return null;
    } else {
        alert("LocalStorage não está disponível.");
        return null;
    }
}