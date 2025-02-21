/* 
 * Calculadora com Relógio em JavaScript
 */

window.alert('Bem-vindo à calculadora feita em JavaScript!');

function atualizaHora() {
    // Obtém a hora atual como string
    let hora = new Date().toTimeString();
    let partes = hora.split(" ");
    document.getElementById("relogio").innerHTML = partes[0];
    
    // Outro jeito mais direto
    // let hora = new Date().toTimeString().split(" ")[0]; // Pega apenas a parte da hora (HH:MM:SS)
    // document.getElementById("relogio").innerHTML = hora;
}

// Executa a função a cada 1 segundo (1000ms)
let aux = setInterval(atualizaHora, 1000);

// Para cancelar o intervalo, utilize:
// clearInterval(aux);