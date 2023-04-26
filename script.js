const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;           // Levanta o elemento
  span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
  if (target.value === '') {                           // Irá apenas abaixar se não houver texto
    const span = target.previousElementSibling;        // Faz o elemento baixar
    span.classList.remove('span-active');
  }
}

const handleChange = () => {                      //manipula eventos de mudança de entrada no "formulário"
  const [username, password] = inputs;   //verifica se o valor do nome de usuário e a senha atendem a certos critérios

  if (username.value && password.value.length >= 8) {         //Username e password possuem mais do que 8 caracteres OK!
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');                      //Botão "bloqueado" por não cumpri o que foi solicitado
  }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));        //adiciona um evento de foco - quando é clicado dentro do elemento
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));  //adiciona um evento de perda de foco - quando o usuário clica fora do elemento
inputs.forEach((input) => input.addEventListener('input', handleChange));       //evento de entrada é acionado quando o valor do elemento é alterado pelo usuário




