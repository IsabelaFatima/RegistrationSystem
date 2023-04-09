// Dados do usuário //

const usuarioArmazenado = localStorage.getItem('usuario');
const usuario = JSON.parse(usuarioArmazenado);

document.querySelector('#login').textContent = usuario.login;
document.querySelector('#name').textContent = usuario.name;
document.querySelector('#date').textContent = usuario.date;
document.querySelector('#email').textContent = usuario.email;
document.querySelector('#senha').textContent = usuario.senha;