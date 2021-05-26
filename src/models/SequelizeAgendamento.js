const { removeAllListeners } = require('nodemon');
const TabelaAgendamento= require('./TabelaAgendamento');
module.exports = {
  async listar(){
      try{
        return await TabelaAgendamento.findAll({
            raw:true
        });
      }catch(error){
          throw error
      }
    }  ,
    async buscarPorPK(id){
      try{
        result = await TabelaAgendamento.findByPk(id);
        return result
      }catch(error){
        throw error
      }
    },
    async adicionar(agendamento){
      try{
        result = await TabelaAgendamento.create(agendamento);
        return result
      }catch(error){
        throw error
      }
    },
    async atualizar(id,dados){
      try{
        result=await TabelaAgendamento.update(dados,{
          where:{
            id:id
          }
        }

        );
      }catch(error){
        throw error
      }
    },
    async remover(id){
      try{
        result = await TabelaAgendamento.destroy({
          where:{
            id:id
          }
        });
      }catch(error){
        throw error
      }
    }
};