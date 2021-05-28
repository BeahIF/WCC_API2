class Serializer{
    json(dados){
        return JSON.stringify(dados);
    }
    transformar(dados){
        if(this.contentType !== 'application/json'){
            throw new FormatoInvalido(this.contentType)
        }
        return this.json(dados)
    }

}
class SerializarAgendamento extends Serializer{
    constructor (contentType){
        super();
        this.contentType = contentType;
    }
}


