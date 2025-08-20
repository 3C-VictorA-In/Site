document.addEventListener('DOMContentLoaded', function() {
  const botaoTema = document.getElementById('alternar-tema');

  botaoTema.addEventListener('click', function() {
    document.body.classList.toggle('tema-escuro');

    if (document.body.classList.contains('tema-escuro')) {
      botaoTema.textContent = "☀️ Modo Claro";
    } else {
      botaoTema.textContent = "🌙 Modo Escuro";
    }
  });

  // ScrollReveal animações
  ScrollReveal().reveal('#inicio', { delay: 500 });
  ScrollReveal().reveal('#hall-of-f1', { delay: 500 });
  ScrollReveal().reveal('#galeria', { delay: 500 });
  ScrollReveal().reveal('#contato', { delay: 500 });
});
