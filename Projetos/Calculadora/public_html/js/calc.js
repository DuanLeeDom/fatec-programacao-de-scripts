/* 
 * Calculadora com Relógio em JavaScript
 */

window.alert('Bem-vindo à calculadora feita em JavaScript!');

// local para as variável (opcional)
let hora = 123;
let b0 = document.getElementById("b0");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");

let auxiliar = document.getElementById("auxiliar");
let operador = document.getElementById("operador");
let mostrador = document.getElementById("mostrador");

// fim da área de criação de variavel (opcional)
// inicio da área para criar funcionalidades (funções/processo)
function atualizaHora() {
    // Obtém a hora atual como string
    let hora = new Date().toTimeString();
    let partes = hora.split(" ");
    document.getElementById("relogio").innerHTML = partes[0];
}

function numero(elemento) {
    mostrador.value = mostrador.value + elemento.value;
}

// fim da área de definição de funções/procedimentos
// área de ligação de elementos da página com as funcionalidade
b0.addEventListener("click", function() { numero(this); });
b1.addEventListener("click", function() { numero(this); });
b2.addEventListener("click", function() { numero(this); });
b3.addEventListener("click", function() { numero(this); });
b4.addEventListener("click", function() { numero(this); });
b5.addEventListener("click", function() { numero(this); });
b6.addEventListener("click", function() { numero(this); });
b7.addEventListener("click", function() { numero(this); });
b8.addEventListener("click", function() { numero(this); });
b9.addEventListener("click", function() { numero(this); });

// Executa a função a cada 1 segundo (1000ms)
let aux = setInterval(atualizaHora, 1000);

// Para cancelar o intervalo, utilize:
// clearInterval(aux);