// Variáveis texto
var escolherSelecao = document.querySelector('.escolha');
var mensagemFinal = document.querySelector('#mensagemFinal');
var mensagemInicial = document.querySelector('#mensagemInicial');

// Variáveis btn e radio
var escolhaCodif = document.querySelector('.radioCod');
var escolhaDecodif = document.querySelector('.radioDec');
var codificar = document.querySelector('.codif');
var decodificar = document.querySelector('.decodif');

// Ocultar botões
escolhaCodif.addEventListener('click', () => {

  codificar.classList.remove('invisivel')
  decodificar.classList.add('invisivel')

})
escolhaDecodif.addEventListener('click', () => {

  codificar.classList.add('invisivel')
  decodificar.classList.remove('invisivel')

})

// Codificar - Base64 e Cifra de César

codificar.addEventListener('click', (event) => {
  event.preventDefault()

  if (escolherSelecao.value == 'base64') {
    document.querySelector('#cifraIncDiv').classList.add('invisivel');

    var mensagemInicial = document.querySelector('#mensagemInicial').value;
    var mensagemCodif = btoa(mensagemInicial);

    mensagemFinal.classList.remove('invisivel');
    mensagemFinal.value = mensagemCodif;
  }
  else if (escolherSelecao.value == 'cifraDeCesar') {

    var mensagemInicial = document.querySelector('#mensagemInicial').value;
    document.querySelector('#cifraIncDiv').classList.remove('invisivel');

    var codigo = mensagemInicial.split('');
    var arrayX = [];
    var arrayXX = [];
    var charCode = [];
    var cifraInc = document.querySelector('#cifraInc').value;

    for (var i = 0; i < codigo.length; i++) {
      arrayX.push(codigo[i].charCodeAt(0))
    }

    for (var i = 0; i < arrayX.length; i++) {
      arrayXX.push(parseInt(arrayX[i]) + parseInt(cifraInc))

    }

    for (var i = 0; i < arrayXX.length; i++) {
      charCode.push(String.fromCharCode(arrayXX[i]))
    }

    var retorno = charCode.join('');
    mensagemFinal.classList.remove('invisivel');
    mensagemFinal.value = retorno;
  }else if (escolherSelecao.value === 'opcao') {
    document.querySelector('#cifraIncDiv').classList.add('invisivel');
  }

})

// Decodificar - Base64 e Cifra de César

decodificar.addEventListener('click', (event) => {
  event.preventDefault()

  if (escolherSelecao.value == 'base64') {
    var mensagemInicial = document.querySelector('#mensagemInicial').value;
    var mensagemDecodif = atob(mensagemInicial);
    mensagemFinal.classList.remove('invisivel');
    mensagemFinal.value = mensagemDecodif;

  }
  else if (escolherSelecao.value == 'cifraDeCesar') {
    
    var mensagemInicial = document.querySelector('#mensagemInicial').value;
    document.querySelector('#cifraIncDiv').classList.remove('invisivel');

    var codigo = mensagemInicial.split('');
    var arrayX = [];
    var arrayXX = [];
    var charCode = [];
    var cifraInc = document.querySelector('#cifraInc').value;

    for (var i = 0; i < codigo.length; i++) {
      arrayX.push(codigo[i].charCodeAt(0))
    }

    for (var i = 0; i < arrayX.length; i++) {
      arrayXX.push(parseInt(arrayX[i]) - parseInt(cifraInc))
    }

    for (var i = 0; i < arrayXX.length; i++) {
      charCode.push(String.fromCharCode(arrayXX[i]))
    }

    var retorno = charCode.join('');
    mensagemFinal.classList.remove('invisivel');
    mensagemFinal.value = retorno;
  }
  else if (escolherSelecao.value === 'opcao') {
    document.querySelector('.cifraInc').classList.add('invisivel');
  }

})
