class DadosNaoInformado extends Error{
    constructor(){
        const mensagem = 'Dados não informados';
        super(mensagem);
        this.name= 'DadoNaoInformado';
        this.idError = 4;
    }
}
module.exports = DadosNaoInformado;