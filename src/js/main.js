const swup = new Swup();

var root = document.querySelector(':root');
const botones = document.querySelectorAll('main.menu button');

const temas = [
    { background: '#FD653E', text: '#050209', accent: '#050209'},
    { background: '#121212', text: '#D3A01D', accent: '#fe9e1d' },
    { background: '#13143C', text: '#CFCFCF' },
    { background: '#121212', text: '#DE6344' },
    { background: '#FFFFFF', text: '#000000' },
    { background: '#100F0F', text: '#CECDC3' },
    { background: '#CE5D97', text: '#050209' },
    { background: '#050209', text: '#0DD79B', accent: 'red'},
];

function setTheme(background, text, accent) {
    root.style.setProperty('--backgroundColor', background);
    root.style.setProperty('--textColor', text);
    root.style.setProperty('--accent', accent);

    // Almacena el tema seleccionado en el Local Storage
    localStorage.setItem('selectedTheme', JSON.stringify({ background, text }));
}

function aplicarTemaAlCargar() {
    // Verifica si hay un tema almacenado en el Local Storage y aplícalo al cargar la página
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
        const { background, text } = JSON.parse(storedTheme);
        setTheme(background, text);
    } else {
        setTheme("#FD653E", "#050209");
    }
}

function cambiarTema(background, text) {
    setTheme(background, text);
}

// Asigna un tema único a cada botón usando atributos de datos
botones.forEach((boton, index) => {

    boton.addEventListener('click', function() {
        const tema = temas[index];
        cambiarTema(tema.background, tema.text);
    });
});

// Aplica el tema almacenado al cargar la página
document.addEventListener('DOMContentLoaded', aplicarTemaAlCargar);