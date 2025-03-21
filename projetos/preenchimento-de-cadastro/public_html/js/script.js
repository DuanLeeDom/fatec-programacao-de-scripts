window.onload = function () {
    // Acessar os elementos do HTML
    let Nome = document.getElementById("txtNome");
    let EstadoCivil = document.getElementById("txtEstadoCivil");
    let DatadeNascimento = document.getElementById("txtDatadeNascimento");
    let Altura = document.getElementById("txtAltura");
    let Peso = document.getElementById("txtPeso");
    let Logradouro = document.getElementById("txtLogradouro");
    let Numero = document.getElementById("txtNumero");
    let Bairro = document.getElementById("txtBairro");
    let Cidade = document.getElementById("txtCidade");
    let Estado = document.getElementById("txtEstado");
    let Cep = document.getElementById("txtCep");

    // Elementos para exibir mensagens de erro
    let er_Nome = document.getElementById("errNome");
    let er_EstadoCivil = document.getElementById("errEstadoCivil");
    let er_DatadeNascimento = document.getElementById("errDatadeNascimento");
    let er_Altura = document.getElementById("errAltura");
    let er_Peso = document.getElementById("errPeso");
    let er_Logradouro = document.getElementById("errLogradouro");
    let er_Numero = document.getElementById("errNumero");
    let er_Bairro = document.getElementById("errBairro");
    let er_Cidade = document.getElementById("errCidade");
    let er_Estado = document.getElementById("errEstado");
    let er_Cep = document.getElementById("errCep");

    // Acessar o botão de validar
    let btnValidar = document.getElementById("btnValidar");

    // Atribuir a rotina ao botão
    btnValidar.addEventListener("click", avaliar);

    // Função a rotina ao botão
    function validarCampo(campo, erCampo, minLength) {
        if (campo.value.length >= minLength) {
            erCampo.innerHTML = "";
        } else {
            erCampo.innerHTML = `O campo precisa ser preenchido pelo menos ${minLength} caracteres`;
        }
    }

    // Função para avaliar os campos
    function avaliar() {
        validarCampo(Nome, er_Nome, 2);
        validarCampo(EstadoCivil, er_EstadoCivil, 2);
        validarCampo(DatadeNascimento, er_DatadeNascimento, 2);
        validarCampo(Altura, er_Altura, 2);
        validarCampo(Peso, er_Peso, 2);
        validarCampo(Logradouro, er_Logradouro, 2);
        validarCampo(Numero, er_Numero, 2);
        validarCampo(Bairro, er_Bairro, 2);
        validarCampo(Cidade, er_Cidade, 2);
        validarCampo(Estado, er_Estado, 2);
        validarCampo(Cep, er_Cep, 2);
    }
};
