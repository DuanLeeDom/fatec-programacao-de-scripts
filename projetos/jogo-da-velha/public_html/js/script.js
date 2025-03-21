// selecionando elementos do DOM
const tabuleiro = document.getElementById('tabuleiro');
const celulas = document.querySelectorAll('[data-celula]');
const status = document.getElementById('status');
const botaoReiniciair = document.getElementById('reiniciar');

// variáveis de controle do jogo
let jogadorAtual = 'x';
let jogoAtivo = true;

// combinações vencedoras pósiveis
const combinacoesVencedoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
    [0, 4, 8], [2, 4, 6] // diagonais
]

// função para verificar o vencedor
