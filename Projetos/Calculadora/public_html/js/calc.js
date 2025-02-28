/* 
 * Calculadora com Relógio em JavaScript
 */

window.alert('Bem-vindo à calculadora feita em JavaScript!');

// Local para as variáveis
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
let bmais = document.getElementById("bmais");
let bmenos = document.getElementById("bmenos");
let bx = document.getElementById("bx");
let bdiv = document.getElementById("bdiv");
let bigual = document.getElementById("bigual");

let auxiliar = document.getElementById("auxiliar");
let operador = document.getElementById("operador");
let mostrador = document.getElementById("mostrador");

// Variáveis para armazenar os números e o operador
let primeiroNumero = null;
let operadorAtual = null; // Adicionado como variável global

// Função para atualizar o relógio
function atualizaHora() {
    let hora = new Date().toTimeString();
    let partes = hora.split(" ");
    document.getElementById("relogio").innerHTML = partes[0];
}

// Função para adicionar números ao auxiliar
function numero(elemento) {
    auxiliar.value = auxiliar.value + elemento.value; // Alterado de mostrador para auxiliar
}

// Função para lidar com operadores
function definirOperador(elemento) {
    if (auxiliar.value !== "") { // Só prossegue se houver algo no auxiliar
        primeiroNumero = parseFloat(auxiliar.value); // Salva o valor de auxiliar como número
        operadorAtual = elemento.value; // Salva o operador (+, -, x, /)
        operador.value = operadorAtual; // Mostra o operador no campo operador
        auxiliar.value = ""; // Limpa o auxiliar para o próximo número
    }
}

// Função para calcular e mostrar o resultado
function calcular() {
    if (primeiroNumero !== null && operadorAtual !== null && auxiliar.value !== "") {
        let segundoNumero = parseFloat(auxiliar.value); // Pega o segundo número
        let resultado = 0;

        // Realiza a operação com base no operadorAtual
        switch (operadorAtual) {
            case "+":
                resultado = primeiroNumero + segundoNumero;
                break;
            case "-":
                resultado = primeiroNumero - segundoNumero;
                break;
            case "x":
                resultado = primeiroNumero * segundoNumero;
                break;
            case "/":
                resultado = segundoNumero !== 0 ? primeiroNumero / segundoNumero : "Erro"; // Evita divisão por zero
                break;
        }

        // Mostra o resultado no mostrador
        mostrador.value = resultado;

        // Reseta para a próxima operação
        auxiliar.value = "";
        operador.value = "";
        primeiroNumero = null;
        operadorAtual = null;
    }
}

// Eventos para os botões numéricos
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

// Eventos para os operadores
bmais.addEventListener("click", function() { definirOperador(this); });
bmenos.addEventListener("click", function() { definirOperador(this); });
bx.addEventListener("click", function() { definirOperador(this); });
bdiv.addEventListener("click", function() { definirOperador(this); });

// Evento para o botão de igual
bigual.addEventListener("click", calcular);

// Inicia o relógio
let aux = setInterval(atualizaHora, 1000);