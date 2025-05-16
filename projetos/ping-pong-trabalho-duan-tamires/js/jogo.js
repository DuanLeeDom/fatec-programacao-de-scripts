// ===== CONFIGURAÇÕES DO JOGO =====
const VELOCIDADE_INICIAL = 3;
const VELOCIDADE_MAX = 10;
const VELOCIDADE_RAQUETE = 10;
const TEMPO_REINICIO = 300;
const ANGULO_MAXIMO = 1.3;
const BORDA = 2;
const VARIACAO_REBOTE = 0.4;

// Teclas que controlam as raquetes
const TECLAS = {
    w: false,
    s: false,
    ArrowUp: false,
    ArrowDown: false
};

// ===== ELEMENTOS DO HTML =====
const campo = document.getElementById("campo");
const bola = document.getElementById("bola");
const raqueteEsquerda = document.getElementById("raqueteEsquerda");
const raqueteDireita = document.getElementById("raqueteDireita");
const mensagem = document.getElementById("mensagemInicio");
const placar1 = document.getElementById("placarJogador1");
const placar2 = document.getElementById("placarJogador2");

// ===== VARIÁVEIS DE JOGO =====
let jogoComecou = false;
let jogoTerminou = false;
let bolaAndando = false;
let intervalo = null;
let pontos1 = 0;
let pontos2 = 0;
let velocidadeAtual = VELOCIDADE_INICIAL;
let velocidadeX = 0;
let velocidadeY = 0;
let dimensoesCampo, dimBola, dimRaqueteE, dimRaqueteD;
let quemPerdeuUltimoPonto = null;

// ===== FUNÇÕES =====

// Coloca as raquetes e a bola no centro
function iniciarPosicoes() {
    dimensoesCampo = campo.getBoundingClientRect();
    const meio = (dimensoesCampo.height - raqueteEsquerda.offsetHeight) / 2;
    raqueteEsquerda.style.top = meio + "px";
    raqueteDireita.style.top = meio + "px";
    centralizarBola();
}

// Coloca a bola no meio do campo
function centralizarBola() {
    dimensoesCampo = campo.getBoundingClientRect();
    bola.style.left = (dimensoesCampo.width / 2 - bola.offsetWidth / 2) + "px";
    bola.style.top = (dimensoesCampo.height / 2 - bola.offsetHeight / 2) + "px";
}

// Move as raquetes com base nas teclas pressionadas
function moverRaquetes() {
    dimensoesCampo = campo.getBoundingClientRect();
    const altura = raqueteEsquerda.offsetHeight;
    const limite = dimensoesCampo.height - altura - BORDA; // Limite inferior da raquete

    let yE = parseFloat(raqueteEsquerda.style.top);
    if (isNaN(yE)) yE = 0;
    if (TECLAS.w) yE -= VELOCIDADE_RAQUETE;
    if (TECLAS.s) yE += VELOCIDADE_RAQUETE; 
    if (yE < 0) yE = 0;
    if (yE > limite) yE = limite;
    raqueteEsquerda.style.top = yE + "px";

    let yD = parseFloat(raqueteDireita.style.top);
    if (isNaN(yD)) yD = 0;
    if (TECLAS.ArrowUp) yD -= VELOCIDADE_RAQUETE;
    if (TECLAS.ArrowDown) yD += VELOCIDADE_RAQUETE;
    if (yD < 0) yD = 0;
    if (yD > limite) yD = limite;
    raqueteDireita.style.top = yD + "px";
}

// Move a bola e trata colisões e pontos
function moverBola() {
    if (!bolaAndando) return;

    let x = parseFloat(bola.style.left) + velocidadeX;
    let y = parseFloat(bola.style.top) + velocidadeY;

    // Rebote nas bordas superior e inferior
    if (y <= 0 || y + bola.offsetHeight >= campo.clientHeight) {
        velocidadeY *= -1;
        velocidadeY += (Math.random() - 0.5) * VARIACAO_REBOTE;
    }

    bola.style.left = x + "px";
    bola.style.top = y + "px";

    atualizarDimensoes();

    // Se a bola sair pela esquerda, ponto do jogador 2
    if (dimBola.left <= dimensoesCampo.left) {
        pontos2++;
        placar2.textContent = pontos2;
        if (pontos2 >= 10) return terminarJogo("Jogador 2");
        quemPerdeuUltimoPonto = "jogador1";
        return reiniciarBola(quemPerdeuUltimoPonto);
    }

    // Se sair pela direita, ponto do jogador 1
    if (dimBola.right >= dimensoesCampo.right) {
        pontos1++;
        placar1.textContent = pontos1;
        if (pontos1 >= 10) return terminarJogo("Jogador 1");
        quemPerdeuUltimoPonto = "jogador2";
        return reiniciarBola(quemPerdeuUltimoPonto);
    }

    verificarColisao();
}

// Detecta colisão com as raquetes
function verificarColisao() {
    if (
        velocidadeX < 0 &&
        dimBola.left <= dimRaqueteE.right &&
        dimBola.bottom >= dimRaqueteE.top &&
        dimBola.top <= dimRaqueteE.bottom
    ) {
        velocidadeX = Math.abs(velocidadeX) * 1.05;
        ajustarAngulo(dimRaqueteE);
    }

    if (
        velocidadeX > 0 &&
        dimBola.right >= dimRaqueteD.left &&
        dimBola.bottom >= dimRaqueteD.top &&
        dimBola.top <= dimRaqueteD.bottom
    ) {
        velocidadeX = -Math.abs(velocidadeX) * 1.05;
        ajustarAngulo(dimRaqueteD);
    }
}

// Muda a direção da bola ao bater na raquete
function ajustarAngulo(raquete) {
    const centroRaquete = raquete.top + raquete.height / 2;
    const centroBola = dimBola.top + dimBola.height / 2;
    const distanciaDoCentro = centroBola - centroRaquete;
    velocidadeY = distanciaDoCentro * 0.2; // Ajusta o ângulo conforme a batida
}

function atualizarDimensoes() {
    dimensoesCampo = campo.getBoundingClientRect();
    dimBola = bola.getBoundingClientRect();
    dimRaqueteE = raqueteEsquerda.getBoundingClientRect();
    dimRaqueteD = raqueteDireita.getBoundingClientRect();
}

function iniciarJogo() {
    pararJogo();
    intervalo = setInterval(() => {
        atualizarDimensoes();
        moverRaquetes();
        moverBola();
    }, 1000 / 60);
}

function pararJogo() {
    clearInterval(intervalo);
    intervalo = null;
}

// Quando um jogador perde, reinicia a bola
function reiniciarBola(paraQuemVai) {
    centralizarBola();
    velocidadeAtual = VELOCIDADE_INICIAL;
    let direcao = Math.random();
    if (direcao < 0.5) {
        velocidadeX = -VELOCIDADE_INICIAL;
    } else {
        velocidadeX = VELOCIDADE_INICIAL;
    }

    velocidadeY = (Math.random() - 0.5) * VELOCIDADE_INICIAL * ANGULO_MAXIMO;
    bolaAndando = false;
    setTimeout(() => bolaAndando = true, TEMPO_REINICIO);
}

function terminarJogo(vencedor) {
    pararJogo();
    jogoTerminou = true;
    bolaAndando = false;
    mensagem.textContent = vencedor + " venceu! Pressione 'p' para reiniciar.";
    mensagem.style.display = "block";
}

// ===== EVENTOS DO TECLADO =====
document.addEventListener("keydown", (e) => {
    const tecla = e.key;

    if (tecla in TECLAS && !jogoTerminou) {
        TECLAS[tecla] = true;
    }

    if (["w", "s", "ArrowUp", "ArrowDown"].includes(tecla) && !jogoComecou && !jogoTerminou) {
        jogoComecou = true;
        mensagem.style.display = "none";
        iniciarJogo();
        let direcao;
        if (Math.random() < 0.5) {
            direcao = -1;
        } else {
            direcao = 1;
        }
        velocidadeX = direcao * VELOCIDADE_INICIAL;
        velocidadeY = (Math.random() - 0.5) * VELOCIDADE_INICIAL * ANGULO_MAXIMO;
        bolaAndando = true;
    }

    if (tecla === "Escape" || tecla === "p") {
        jogoComecou = false;
        jogoTerminou = false;
        bolaAndando = false;
        pontos1 = 0;
        pontos2 = 0;
        quemPerdeuUltimoPonto = null;
        placar1.textContent = pontos1;
        placar2.textContent = pontos2;
        mensagem.textContent = "Pressione W, S, ↑ ou ↓ para começar";
        mensagem.style.display = "block";
        pararJogo();
        iniciarPosicoes();
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key in TECLAS) {
        TECLAS[e.key] = false;
    }
});

window.addEventListener("resize", () => {
    iniciarPosicoes();
});

// ===== INÍCIO DO JOGO =====
iniciarPosicoes();
placar1.textContent = pontos1;
placar2.textContent = pontos2;
