
const router= require('express').Router();

router.get('/agendamentos', (req,res)=>{
    res.send('ok')
});
module.exports = router