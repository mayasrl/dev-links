# dev-links
Projeto realizado em aula no curso de Discover da Rocketseat
![Captura de tela 2025-05-05 154003](https://github.com/user-attachments/assets/ad5afd7e-e32d-426d-bbfc-4bc3da3d921b)
![Captura de tela 2025-05-05 154014](https://github.com/user-attachments/assets/d4a1695b-cfa7-4906-a2bd-f4c042c4282d)
# DevLinks

Um **agregador de links pessoal** interativo e responsivo, criado durante o curso **Fullstack** da Rocketseat.  
Exibe foto de perfil, botões para portfólio e trilha Explorer, além de ícones das principais redes sociais — tudo com alternância de tema claro/escuro e animações suaves.

---

## Visão Geral

- **HTML5**: marcação semântica com `<header>`, `<main>`, `<footer>`, `<ul>`, `<li>`, `<button>` e `<label>`.  
- **CSS3**: variáveis (Custom Properties), Flexbox & CSS Grid, _backdrop‑filter_, transições e animações de keyframes.  
- **JavaScript**: detecção da preferência de cor do sistema, alternância de tema, manipulação dinâmica de classes e acessibilidade via teclado.  
- **Responsividade**: design adaptável a diferentes tamanhos de tela usando media queries.

---

## Estrutura do Projeto

- **`index.html`**: página principal com a marcação de todo o conteúdo.  
- **`styles/styles.css`**: arquivo de estilos global com variáveis, reset, layout e animações.  
- **`js/script.js`**: lógica para o switch de tema e carregamento dinâmico de imagens.  
- **`assets/images/`**: backgrounds, fotos de perfil, ícones de tema e o ícone de coração do rodapé.

```text
devlinks/
│
├── assets/
│   └── images/
│       ├── bg-desktop-light.jpg
│       ├── bg-desktop.jpg
│       ├── bg-mobile-light.jpg
│       ├── bg-mobile.jpg
│       ├── foto-light.jpg
│       ├── foto.jpg
│       ├── moon-stars.svg
│       ├── sun.svg
│       └── heart.svg
│
├── js/
│   └── script.js
│
├── styles/
│   └── styles.css
│
└── index.html
