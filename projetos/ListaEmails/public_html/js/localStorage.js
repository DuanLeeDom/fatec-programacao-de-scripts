/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function gravar(nomechave, conteudo) {
    if (window.localStorage) {
        // converter conteudo em JSON
        let dados = JSON.stringify(conteudo);
        // gravar o JSON no localStorage
        localStorage.setItem(nomechave, dados);
    } else {
        alert('localStorage indisponivel!');
    }
}

function ler(nomechave) {
    if (window.localStorage) {
        // ler do localStorage o JSON
        let dados = localStorage.getItem(nomechave);
        // converte o JSON para o conteudo original
        return JSON.parse(dados);
    } else {
        alert("LocalStorage indisponivel");
    }
}

