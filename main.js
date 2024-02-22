document.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add('animated');
      }
    });
  });
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Função para validar o formulário
  function validarFormulario() {
    // Obtém os valores dos campos
    var nome = document.forms["formulario"]["nome"].value;
    var email = document.forms["formulario"]["email"].value;
    var mensagem = document.forms["formulario"]["mensagem"].value;

    // Expressão regular para verificar o formato do email
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se os campos estão vazios
    if (nome == "" || email == "" || mensagem == "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Impede o envio do formulário
    }

    // Verifica se o formato do email é válido
    if (!regexEmail.test(email)) {
        alert("Por favor, insira um email válido.");
        return false; // Impede o envio do formulário
    }

    return true; // Permite o envio do formulário se todos os campos estiverem preenchidos e o email for válido
}