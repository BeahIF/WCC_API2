const FormatoInvalido = require('../errors/FormatoInvalido');

class Serializer{
    json(dados){
        return JSON.stringify(dados);
    }
    transformar(dados){
        dados = this.filtrar(dados);
        if(this.contentType !== 'application/json'){
            throw new FormatoInvalido(this.contentType)
        }
        if(this.contentType === 'application/xml'){
            return this.xml(dados);
        }
        // return this.json(dados)
        return new FormatoInvalido(this.contentType);
    }
    xml(dados){
        if(Array.isArray(dados)){
            dados = dados.map((item)=>{
                return{
                    [this.tag]:item
                }
            })
            this.tag = this.tagList;
        }
        return jsontoxml({
            [this.tag]:dados
        })
    }
    filtrarCampos(dados){
        const camposFiltrados = {};
        this.camposPermitidos.forEach((campo) => {
            if(dados.hasOwnProperty(campo)){
                camposFiltrados[campo]=dados[campo]
            }
            
        });
        return camposFiltrados;
    }
    filtrar(dados){
        let dadosFiltrados = this.filtrarCampos(dados);
        if(Array.isArray(dados)){
            dadosFiltrados = dados.map((dado)=>{
                return this.filtrarCampos(dado);
            })
        }
        return dadosFiltrados;
    }

}
class SerializarAgendamento extends Serializer{
    constructor (contentType,camposPersonalizados){
        super();
        this.camposPermitidos =['id','nome_cliente','data_agendamento',
        'nome_servico'].concat(camposPersonalizados || []);
        this.contentType = contentType;
        this.tag = 'Agendamento';
        this.tagList ='Agendamentos'
    }
}

class SerializarErro extends Serializer{
    constructor(contentType){
        super()
        this.contentType = contentType;
        this.camposPermitidos = [
            'id','mensagem'

        ]
        this.tag ='Error';
        this.tagList = 'Errors'
    }
}
module.exports = {
    Serializer:Serializer,
    SerializarAgendamento:SerializarAgendamento,
    SerializarErro:SerializarErro,
    FormatosValidos :['application/json']
}

