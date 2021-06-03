class LoginInvalido extends Error {
    constructor(){
        const mensagem = 'e-mail ou senha inválidos';
        super(mensagem);
        this.nome = 'LoginInvalido';
        this.idError = 7;
    }
}
module.exports = LoginInvalido;