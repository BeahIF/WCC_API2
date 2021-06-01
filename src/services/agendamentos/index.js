const Agendamento = require('./Agendamento')
const SequelizeAgendamentos = require('../../models/agendamentos/SequelizeAgendamento');
const SerializarAgendamento = require('../../shared/Serializer').SerializarAgendamento;
module.exports = {
    carregarTodosAgendamentos:async(req,res)=>{
        try{
            const results = await SequelizeAgendamentos.listar();
            // res.status(201).send(JSON.stringify(results));
            const serializador = new SerializarAgendamento(
                res.getHeader('Content-Type'),
                ['status']
            );
            res.status(200)
        }catch(error){
            // res.status(401).send(JSON.stringify(error))
            next(error)
        }
    },
    carregarAgendamento: async(req,res,next)=>{
        try{
            const id = req.params.id;
            const agendamento = new Agendamento({id:id});
            await agendamento.buscar();
            const serializador = new SerializarAgendamento(
                res.getHeader('Content-Type')
            )
            // res.status(201).send(JSON.stringify(agendamento))
            res.status(201).send(serializador.transformar(agendamento))
        }catch(error){
            // res.status(401).send(JSON.stringify(error))
            next(error)
        }
    },
    criarAgendamento: async(req,res,next)=>{
        try{
            const reqAgendamento = req.body;
            const agendamento = new Agendamento(reqAgendamento);
            await agendamento.criar()
            // res.status(201).send(JSON.stringify(agendamento))
            res.status(201).send(serializador.transformar(agendamento))
        }catch(error){
            // res.send(JSON.stringify(error))
            // res.status(404).send({error:error.message})
            next(error)
        }
    },
    deletarAgendamento:async(req,res)=>{
        try{
            const id = req.params.id;
            const agendamento = new Agendamento({id:id});
            await agendamento.remover()
            // res.status(201).send(JSON.stringify({message:`Agendamento: ${id} removido com sucesso!`}))
            const serializador = new SerializarAgendamento(
                res.getHeader('Content-Type')
            );
            res.status(200).send(serializador.transformar({message:`Agendamento ${id} removido com sucesso` }))
        }catch(error){
                // res.status(404).send(JSON.stringify({error:error.message}))
            next(error)
        }
    },
    alterarAgendamento:async(req,res)=>{
        try{
            const id = req.params.id;
            const dadosBody=req.body;
            const dados = Object.assign({},dadosBody,{id:id})
            const agendamento = new Agendamento(dados)
            await agendamento.atualizar()
            const serializador = new SerializarAgendamento(
                res.getHeader('Content-Type')
            );
            res.status(201).send(serializador.transformar(agendamento));
        }catch(error){
            // res.status(400).send()
            next(error)
        }
    }

}