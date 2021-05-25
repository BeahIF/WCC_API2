const express=require('express');
// const { Model}=require('sequelize/types');
const routeAgendamento = require('../api/index')
module.exports = () =>{
    const app = express();
    app.use(express.json());
    app.use('/api', routeAgendamento);
    return app
}