document.addEventListener("DOMContentLoaded", function () {
    const jogadorXInput = document.getElementById("jogadorX");
    const jogadorOInput = document.getElementById("jogadorO");
    const nomeXLabel = document.getElementById("nomeX");
    const nomeOLabel = document.getElementById("nomeO");
    const botaoJogar = document.getElementById("jogar");
    const botoesTabuleiro = document.querySelectorAll(".escolha");
    let jogadorAtual = "X";

    function iniciar() {
        nomeXLabel.textContent = `Jogador X: ${jogadorXInput.value}`;
        nomeOLabel.textContent = `Jogador O: ${jogadorOInput.value}`;
        jogadorXInput.disabled = true;
        jogadorXInput.type = "hidden";
        jogadorOInput.disabled = true;
        jogadorOInput.type = "hidden";
        botaoJogar.disabled = true;
        tabuleiro(true);
    }

    function reiniciar() {
        jogadorXInput.disabled = false;
        jogadorXInput.type = "text";
        jogadorXInput.value = "";
        jogadorOInput.disabled = false;
        jogadorOInput.type = "text";
        jogadorOInput.value = "";
        nomeXLabel.textContent = "";
        nomeOLabel.textContent = "";
        botaoJogar.disabled = false;

        botoesTabuleiro.forEach(botao => {
            botao.value = "";
            botao.disabled = true;
        });

        jogadorAtual = "X";
    }

    botaoJogar.addEventListener("click", () => {
        const nomeX = jogadorXInput.value.trim();
        const nomeO = jogadorOInput.value.trim();

        if (nomeX === '' || nomeO === '') {
            alert("Por favor, preencha os nomes dos jogadores.");
            return;
        }

        iniciar();
    });

    botoesTabuleiro.forEach(botao => {
        botao.addEventListener("click", () => {
            if (botao.value === '') {
                botao.value = jogadorAtual;
                botao.disabled = true;

                const vencedor = verificarVencedor();
                if (vencedor) {
                    alert(`Jogador ${vencedor} venceu!`);
                    tabuleiro(false);
                    setTimeout(() => reiniciar(), 2000);
                    return;
                }

                const empate = Array.from(botoesTabuleiro).every(btn => btn.value !== '');
                if (empate) {
                    alert("Empate! Ninguém venceu.");
                    tabuleiro(false);
                    setTimeout(() => reiniciar(), 2000);
                    return;
                }

                jogadorAtual = jogadorAtual === "X" ? "O" : "X";
            }
        });
    });

    function verificarVencedor() {
        const combinacoes = [
            ["A1", "A2", "A3"],
            ["B1", "B2", "B3"],
            ["C1", "C2", "C3"],
            ["A1", "B1", "C1"],
            ["A2", "B2", "C2"],
            ["A3", "B3", "C3"],
            ["A1", "B2", "C3"],
            ["A3", "B2", "C1"]
        ];

        for (let combinacao of combinacoes) {
            const [a, b, c] = combinacao;
            const valA = document.getElementById(a).value;
            const valB = document.getElementById(b).value;
            const valC = document.getElementById(c).value;

            if (valA && valA === valB && valA === valC) {
                return valA; // "X" ou "O"
            }
        }
        return null;
    }

    function tabuleiro(ativar) {
        botoesTabuleiro.forEach(botao => {
            botao.disabled = !ativar;
        });
    }
});
