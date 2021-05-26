const Agendamento = require('./Agendamento')
const SequelizeAgendamentos = require('../models/SequelizeAgendamento')
module.exports = {
    carregarTodosAgendamentos:async(req,res)=>{
        try{
            const results = await SequelizeAgendamentos.listar();
            res.status(201).send(JSON.stringify(results));
        }catch(error){
            res.status(401).send(JSON.stringify(error))
        }
    },
    carregarAgendamento: async(req,res)=>{
        try{
            const id = req.params.id;
            const agendamento = new Agendamento({id:id});
            await agendamento.buscar();
            res.status(201).send(JSON.stringify(agendamento))
        }catch(error){
            res.status(401).send(JSON.stringify(error))
        }
    },
    criarAgendamento: async(req,res)=>{
        try{
            const reqAgendamento = req.body;
            const agendamento = new Agendamento(reqAgendamento);
            await agendamento.criar()
            res.status(201).send(JSON.stringify(agendamento))
        }catch(error){
            res.send(JSON.stringify(error))
        }
    }
}