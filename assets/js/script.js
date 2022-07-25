/* Outras formas de acessar o DOM:
por TAG: getElementByTagName();
por ID: getElementById();
por NOME: getElementByName();
por CLASSE: getElementByClassName();
por SELETOR: querySelector();

O JS possui Case Sensitive = reconhece letras maiusculas e minusculas
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector("#mapa")

nome.style.width = '24%'
email.style.width = '24%'

function validaNome() {
  let txtNome = document.querySelector('#txtNome')
  if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome Inválido'
    txtNome.style.color = 'red'
  } else {
    txtNome.innerHTML = 'Nome Válido'
    txtNome.style.color = 'green'
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail')

  if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
  } else {
    txtEmail.innerHTML = 'E-mail Válido'
    txtEmail.style.color = 'green'
    emailOk = true;
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector('#txtAssunto')

  if (assunto.value.length >= 150) {
    txtAssunto.innerHTML = 'texto muito grande, digite no máximo 150 caracteres'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'block'
  } else {
    txtAssunto.style.display = 'none'
    assuntoOk = true;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('Formulário enviado com sucesso!')
  } else {
    alert('Preencha o formulário corretamente antes de enviar...')
  }
}

function mapaZoom() {
  mapa.style.width = "800px";
  mapa.style.height = "600px";
}

function mapaNormal() {
  mapa.style.width = "400px";
  mapa.style.height = "250px";
}
