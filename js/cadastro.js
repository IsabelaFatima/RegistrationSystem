
// Cadastro de Usuário //

const form = document.querySelector('#formCadastro');

    form.addEventListener('submit', function(event){
    event.preventDefault();


    const login = document.querySelector('#login').value;
    const name = document.querySelector('#name').value;
    const date = document.querySelector('#date').value;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    const usuario = {
        login: login,
        name: name,
        date: date,
        email: email,
        senha: senha
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));

    form.reset();

})

