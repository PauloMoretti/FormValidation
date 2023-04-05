const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextArea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Verifica se o nome está vazio
  if (nameInput.value === "") {
    alert("Por Favor, preencha seu nome.");
    return;
  }

  //Verifica se o email está preenchido e se é valido
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por Favor, digite um email válido.");
    return;
  }

  //Verifica se a senha está preenchida
  if (!validatePassword(passwordInput.value, 8)) {
    alert("A senha precisa ser no mínimo 8 digitos.");
    return;
  }

  //Verificar se a situação foi selecionada
  if (jobSelect.value === "") {
    alert("Por Favor, selecione a sua situação de trabalho. ");
    return;
  }

  //Verifique se a mensagem está preenchida
  if (messageTextArea.value === "") {
    alert("Por Favor, preencha ou escreva uma mensagem.");
    return;
  }

  //Se todos os campos estiverem corretamente preenchidos, envie o form
  form.submit();
});

//Função que valida o email
function isEmailValid(email) {
  //cria uma regex para validar email
  const emailRegex = new RegExp(
    //usuario12@host.com.br
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
  );

  if (emailRegex.test(email)) {
    return true;
  }

  return false;
}

//Função que valida a senha
function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    //senha válida
    return true;
  }
  //senha inválida
  return false;
}
