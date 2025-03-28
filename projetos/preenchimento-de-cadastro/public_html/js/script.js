window.onload = function () {
    // Acessar o formulário
    const form = document.getElementById("meuFormulario");

    // Acessar os elementos do HTML
    const campos = {
        Nome: document.getElementById("txtNome"),
        EstadoCivil: document.getElementById("txtEstadoCivil"),
        DatadeNascimento: document.getElementById("txtDatadeNascimento"),
        Altura: document.getElementById("txtAltura"),
        Peso: document.getElementById("txtPeso"),
        Logradouro: document.getElementById("txtLogradouro"),
        Numero: document.getElementById("txtNumero"),
        Bairro: document.getElementById("txtBairro"),
        Cidade: document.getElementById("txtCidade"),
        Estado: document.getElementById("txtEstado"),
        Cep: document.getElementById("txtCep")
    };

    // Elementos para exibir mensagens de erro
    const erros = {
        Nome: document.getElementById("errNome"),
        EstadoCivil: document.getElementById("errEstadoCivil"),
        DatadeNascimento: document.getElementById("errDatadeNascimento"),
        Altura: document.getElementById("errAltura"),
        Peso: document.getElementById("errPeso"),
        Logradouro: document.getElementById("errLogradouro"),
        Numero: document.getElementById("errNumero"),
        Bairro: document.getElementById("errBairro"),
        Cidade: document.getElementById("errCidade"),
        Estado: document.getElementById("errEstado"),
        Cep: document.getElementById("errCep")
    };

    // Função para validar campo de texto
    function validarCampoTexto(campo, erro, minLength, nomeCampo) {
        const valor = campo.value.trim();
        if (valor.length === 0) {
            erro.innerHTML = `${nomeCampo} é obrigatório`;
            return false;
        } else if (valor.length < minLength) {
            erro.innerHTML = `${nomeCampo} deve ter pelo menos ${minLength} caracteres`;
            return false;
        }
        erro.innerHTML = "";
        return true;
    }

    // Função para validar campo numérico
    function validarCampoNumerico(campo, erro, nomeCampo) {
        const valor = campo.value.trim();
        if (valor === "") {
            erro.innerHTML = `${nomeCampo} é obrigatório`;
            return false;
        } else if (isNaN(valor) || Number(valor) <= 0) {
            erro.innerHTML = `${nomeCampo} deve ser um número positivo`;
            return false;
        }
        erro.innerHTML = "";
        return true;
    }

    // Função para validar data
    function validarData(campo, erro, nomeCampo) {
        const valor = campo.value;
        if (!valor) {
            erro.innerHTML = `${nomeCampo} é obrigatória`;
            return false;
        }
        erro.innerHTML = "";
        return true;
    }

    // Evento de submissão do formulário
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão

        // Validar todos os campos
        let valido = true;

        valido &= validarCampoTexto(campos.Nome, erros.Nome, 2, "Nome");
        valido &= validarCampoTexto(campos.EstadoCivil, erros.EstadoCivil, 2, "Estado Civil");
        valido &= validarData(campos.DatadeNascimento, erros.DatadeNascimento, "Data de Nascimento");
        valido &= validarCampoNumerico(campos.Altura, erros.Altura, "Altura");
        valido &= validarCampoNumerico(campos.Peso, erros.Peso, "Peso");
        valido &= validarCampoTexto(campos.Logradouro, erros.Logradouro, 2, "Logradouro");
        valido &= validarCampoNumerico(campos.Numero, erros.Numero, "Número");
        valido &= validarCampoTexto(campos.Bairro, erros.Bairro, 2, "Bairro");
        valido &= validarCampoTexto(campos.Cidade, erros.Cidade, 2, "Cidade");
        valido &= validarCampoTexto(campos.Estado, erros.Estado, 2, "Estado");
        valido &= validarCampoTexto(campos.Cep, erros.Cep, 8, "CEP");

        // Se todos os campos forem válidos, redireciona
        if (valido) {
            window.location.href = "pagina2.html";
        }
    });
};