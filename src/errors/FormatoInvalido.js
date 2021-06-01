class FormatoInvalido extends Error{
    constructor(contentType){
        const mensagem = `O tipo ${contentType} é inválido`;
        super(mensagem);
          
    }
}