const swup = new Swup();

const root = document.querySelector(':root');
const botones = document.querySelectorAll('main.menu button');

const themes = [
    { name:"Solar Red",background: '#FD653E', text: '#050209', accent: '#050209'},
    { name:"Deus Ex",background: '#121212', text: '#c09b24', accent: '#fe9e1d' },
    { name:"Powershell",background: '#13143C', text: '#CFCFCF', accent: '#F9F1A5' },
    { name:"Terminator",background: '#121212', text: '#DE6344', accent: 'white' },
    { name:"Portal White",background: '#F0F0F0', text: '#212121', accent: '#FD9C00' },
    { name:"Kira",background: '#0A0A0A', text: '#2e72fa', accent: '#48affa' },
    { name:"Flexoki Pink",background: '#CE5D97', text: '#050209', accent: 'rgb(160, 47, 111)' },
    { name:"Terminal",background: '#050209', text: '#0DD79B', accent: 'red'},
];

function setTheme(background, text, accent) {
    root.style.setProperty('--backgroundColor', background);
    root.style.setProperty('--textColor', text);
    root.style.setProperty('--accentColor', accent);

    // Almacena el tema seleccionado en el Local Storage
    localStorage.setItem('selectedTheme', JSON.stringify({ background, text, accent }));
}

function applyTheme() {
    // Verifica si hay un tema almacenado en el Local Storage y aplícalo al cargar la página
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
        const { background, text, accent } = JSON.parse(storedTheme);
        setTheme(background, text, accent);
    } else {
        setTheme("#FD653E", "#050209", "white");
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