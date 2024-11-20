const swup = new Swup();

const root = document.querySelector(':root');
const botones = document.querySelectorAll('main.menu button');

const themes = [
    { name:"Solar Red",background: '#FD653E', text: '#050209', accent: '#050209'},
    { name:"Deus Ex",background: '#121212', text: '#c09b24', accent: '#fe9e1d' },
    { name:"Powershell",background: '#13143C', text: '#CFCFCF' },
    { name:"Terminator",background: '#121212', text: '#DE6344' },
    { name:"Portal White",background: '#F0F0F0', text: '#212121' },
    { name:"Flexoki",background: '#100F0F', text: '#CECDC3' },
    { name:"Flexoki Pink",background: '#CE5D97', text: '#050209' },
    { name:"Terminal",background: '#050209', text: '#0DD79B', accent: 'red'},
];

function setTheme(background, text, accent) {
    root.style.setProperty('--backgroundColor', background);
    root.style.setProperty('--textColor', text);
    root.style.setProperty('--accent', accent);

    // Almacena el tema seleccionado en el Local Storage
    localStorage.setItem('selectedTheme', JSON.stringify({ background, text }));
}

function applyTheme() {
    // Verifica si hay un tema almacenado en el Local Storage y aplícalo al cargar la página
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
        const { background, text } = JSON.parse(storedTheme);
        setTheme(background, text);
    } else {
        setTheme("#FD653E", "#050209");
    }
}

function createThemeButtons(){
    const themeMenu = document.getElementById("themeMenu")

    themes.forEach(theme => {
        // Crear el botón para el tema
        const button = document.createElement("button");
        button.textContent = theme.name;

        // Asignar el evento de clic para cambiar el tema
        button.addEventListener("click", () => {
            setTheme(theme.background, theme.text, theme.accent);
        });

        // Añadir el botón al menú
        themeMenu.appendChild(button);
    });
}

// Aplica el tema almacenado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    createThemeButtons();
});