
const router= require('express').Router();
const servicoAgendamento = require('../services') 

router.get('/agendamentos', servicoAgendamento.carregarTodosAgendamentos
// (req,res)=>{
    // res.send('ok')

// }
);
router.get('/agendamentos/:id',
servicoAgendamento.carregarAgendamento);
router.post('/agendamentos', servicoAgendamento.criarAgendamento
);
router.delete('/agendamentos/:id',servicoAgendamento.deletarAgendamento)
router.put('/agendamentos/:id',servicoAgendamento.alterarAgendamento)
module.exports = router