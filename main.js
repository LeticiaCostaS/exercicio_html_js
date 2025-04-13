const form = document.getElementById('form-valores');
const campoA = document.getElementById('campoA');

function validaValor (campoA){
    const nomeComArray = campoA.split (' ');
    return nomeComArray.length >=2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();
    formEValido = validaValor(campoA.value);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        campoA.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display ='block';
    }
});

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiario.classList.add('error');
        //nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display ='block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display ='none';
    }
});

console.log(form);