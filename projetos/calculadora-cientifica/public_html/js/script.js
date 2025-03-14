/*
 *  Calculadora com Relógio em JavaScript
 */

let hora = 123;
let isBrazilianFormat = false; // Padrão inicial: americano (false = US, true = BR)

/* Relógio */
function atualizaHora() {
    let hora = new Date().toTimeString();
    let partes = hora.split(" ");
    document.getElementById("relogio").innerHTML = partes[0];
}

let aux = setInterval(atualizaHora, 1000);

var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

// Alternar entre padrões US e BR
function toggleFormat() {
    isBrazilianFormat = !isBrazilianFormat;
    let toggleButton = document.getElementById('toggleFormat');
    toggleButton.innerText = isBrazilianFormat ? 'BR' : 'US';
    
    // Converte o valor atual no display para o novo formato
    let currentValue = screen.value;
    if (currentValue) {
        if (isBrazilianFormat) {
            screen.value = currentValue.replace('.', ',');
        } else {
            screen.value = currentValue.replace(',', '.');
        }
    }
}

// Adiciona funcionalidade aos botões
for (item of btn) {
    item.addEventListener('click', (e) => {
        let btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }
        if (btntext == '÷') {
            btntext = '/';
        }
        if (btntext == '.') {
            btntext = isBrazilianFormat ? ',' : '.'; // Usa vírgula ou ponto conforme o padrão
        }
        screen.value += btntext;
    });
}

function sin() {
    let value = parseFloat(screen.value.replace(',', '.')); // Converte para float sempre com ponto
    screen.value = Math.sin(value).toString().replace('.', isBrazilianFormat ? ',' : '.');
}

function cos() {
    let value = parseFloat(screen.value.replace(',', '.')); 
    screen.value = Math.cos(value).toString().replace('.', isBrazilianFormat ? ',' : '.');
}

function tan() {
    let value = parseFloat(screen.value.replace(',', '.')); 
    screen.value = Math.tan(value).toString().replace('.', isBrazilianFormat ? ',' : '.');
}

function pow() {
    let value = parseFloat(screen.value.replace(',', '.')); 
    screen.value = Math.pow(value, 2).toString().replace('.', isBrazilianFormat ? ',' : '.');
}

function sqrt() {
    let value = parseFloat(screen.value.replace(',', '.')); 
    screen.value = Math.sqrt(value).toString().replace('.', isBrazilianFormat ? ',' : '.');
}

function log() {
    let value = parseFloat(screen.value.replace(',', '.')); 
    screen.value = Math.log(value).toString().replace('.', isBrazilianFormat ? ',' : '.');
}

function pi() {
    screen.value = (3.14159265359).toString().replace('.', isBrazilianFormat ? ',' : '.');
}

function e() {
    screen.value = (2.71828182846).toString().replace('.', isBrazilianFormat ? ',' : '.');
}

function fact() {
    var i, num, f;
    f = 1;
    num = parseFloat(screen.value.replace(',', '.')); 
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    screen.value = f.toString().replace('.', isBrazilianFormat ? ',' : '.');
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function percent() {
    let expression = screen.value;
    let operators = ['+', '-', '*', '/'];
    let lastOperator = -1;
    let operator = '';

    // Normaliza a expressão para usar ponto internamente
    expression = expression.replace(',', '.');

    for (let i = expression.length - 1; i >= 0; i--) {
        if (operators.includes(expression[i])) {
            lastOperator = i;
            operator = expression[i];
            break;
        }
    }

    if (lastOperator === -1) {
        let num = parseFloat(expression);
        if (!isNaN(num)) {
            screen.value = (num / 100).toString().replace('.', isBrazilianFormat ? ',' : '.');
        }
    } else {
        let baseNum = parseFloat(expression.substring(0, lastOperator));
        let percentValue = parseFloat(expression.substring(lastOperator + 1));

        if (isNaN(baseNum) || isNaN(percentValue)) return;

        let result;
        switch (operator) {
            case '+':
                result = baseNum + (baseNum * percentValue / 100);
                break;
            case '-':
                result = baseNum - (baseNum * percentValue / 100);
                break;
            case '*':
                result = baseNum * (percentValue / 100);
                break;
            case '/':
                result = baseNum / (percentValue / 100);
                break;
            default:
                return;
        }
        screen.value = result.toString().replace('.', isBrazilianFormat ? ',' : '.');
    }
}

// Ajuste para o botão de igualdade
document.getElementById('eval').addEventListener('click', () => {
    let expression = screen.value.replace(',', '.'); // Normaliza para ponto antes de avaliar
    screen.value = eval(expression).toString().replace('.', isBrazilianFormat ? ',' : '.');
});