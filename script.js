document.addEventListener('DOMContentLoaded', () => {
  // ===== Menu de Acessibilidade =====
  const accBtn   = document.getElementById('botao-acessibilidade');
  const accPanel = document.getElementById('opcoes-acessibilidade');

  if (accBtn && accPanel) {
    // normaliza estado inicial baseado no aria-expanded
    const expandedInit = accBtn.getAttribute('aria-expanded') === 'true';
    accPanel.hidden = !expandedInit;

    accBtn.addEventListener('click', () => {
      const expanded = accBtn.getAttribute('aria-expanded') === 'true';
      accBtn.setAttribute('aria-expanded', String(!expanded));
      accPanel.hidden = expanded;                  // mostra/oculta via atributo
      accBtn.classList.toggle('rotacao-botao', !expanded); // opcional, se tiver animação
    });

    // Controles de fonte
    const incBtn = document.getElementById('aumentar-fonte');
    const decBtn = document.getElementById('diminuir-fonte');
    const contrastBtn = document.getElementById('alterna-contraste');

    let fontScale = parseFloat(localStorage.getItem('fontScale') || '1');
    applyFontScale();

    function applyFontScale() {
      document.body.style.fontSize = `${fontScale}rem`;
    }

    if (incBtn) {
      incBtn.addEventListener('click', () => {
        fontScale = Math.min(2, +(fontScale + 0.1).toFixed(2));
        localStorage.setItem('fontScale', String(fontScale));
        applyFontScale();
      });
    }

    if (decBtn) {
      decBtn.addEventListener('click', () => {
        fontScale = Math.max(0.75, +(fontScale - 0.1).toFixed(2));
        localStorage.setItem('fontScale', String(fontScale));
        applyFontScale();
      });
    }

    // Alto contraste (persistente)
    const CONTRAST_KEY = 'altoContraste';
    if (localStorage.getItem(CONTRAST_KEY) === '1') {
      document.body.classList.add('alto-contraste');
    }
    if (contrastBtn) {
      contrastBtn.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
        localStorage.setItem(CONTRAST_KEY, document.body.classList.contains('alto-contraste') ? '1' : '0');
      });
    }
  }

  // ===== Botão de Tema Claro/Escuro =====
  const themeBtn = document.getElementById('alternar-tema');
  const THEME_KEY = 'temaEscuro';

  if (localStorage.getItem(THEME_KEY) === '1') {
    document.body.classList.add('tema-escuro');
    if (themeBtn) themeBtn.textContent = '☀️ Modo Claro';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('tema-escuro');
      localStorage.setItem(THEME_KEY, isDark ? '1' : '0');
      themeBtn.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro';
    });
  }

  // ===== ScrollReveal =====
  if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('#inicio', { delay: 500 });
    ScrollReveal().reveal('#hall-of-f1', { delay: 500 });
    ScrollReveal().reveal('#galeria', { delay: 500 });
    ScrollReveal().reveal('#contato', { delay: 500 });
  }
});
