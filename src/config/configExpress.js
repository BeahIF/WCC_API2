const express=require('express');
// const { Model}=require('sequelize/types');
const routeAgendamento = require('../api/agendamentos/index');
const  FormatosValidos = require('../shared/Serializer').FormatosValidos;
const SerializarErro = require('../shared/Serializer').SerializarErro;
const passport = require('./autenticacao')
module.exports = () =>{
    const app = express();
    app.use((req,res,next)=>{
        let formatoSolicitado =req.header('Accept');
        if(formatoSolicitado === '*/*'){
            formatoSolicitado = 'application/json';

        }
        if(FormatosValidos.indexOf(formatoSolicitado)=== -1){
            res.status(406);
            res.end();
            return
        }
        res.setHeader('Content-Type',formatoSolicitado);
        next()
    })

    app.use(express.json());
    app.use('/api', routeAgendamento);
 
 
    app.use((error, req,res,next)=>{
        let status = 500;
        serializarErro =new SerializarErro(
            res.getHeader('Content-Type')
        )
        if(error instanceof NaoEncontrado){
            status = 404;
        };
        if(error instanceof CampoInvalido || error instanceof CampoQtdMaxima || error instanceof CampoQtdMinima){
            status = 400;
        }
        res.status(status).send(
            serializarErro.transformar({
                id:error.idError,
                mensagem:error.message
            })
        )
    })
    return app
}