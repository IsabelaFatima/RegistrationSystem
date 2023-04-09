// login
const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const login = document.querySelector('#login').value;
    const senha = document.querySelector('#senha').value;

    const usuarioLocalStorage = localStorage.getItem('usuario');

    if(usuarioLocalStorage){
        const usuario = JSON.parse(usuarioLocalStorage);

        if(usuario.login === login && usuario.senha === senha){
            window.location.href = "usuario.html";
        } else {
            alert('Login e/ou senha incorretos')
        }

    }
})