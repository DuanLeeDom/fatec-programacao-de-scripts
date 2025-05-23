/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let ListaEmails = ler("meusContatos");
// se não existir meuscontatos no localstorage
if (ListaEmails == null) {
    ListaEmails = [];
}

function adicionaContato(conteudo) {
    // adiciona no vetor um novo conteudo
    ListaEmails.push(conteudo);
    // atualiza o listaEmails no localStorage
    gravar("meusContatos", ListaEmails);
}

function retornaListaContatos() {
    return ListaEmails;
}