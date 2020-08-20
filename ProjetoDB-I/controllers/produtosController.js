const Sequelize = require('sequelize');
const config = require('../config/database');

const produtosController = {
    index: async (req, res)=> {
        const connection = new Sequelize(config);
        let nomeUsuario = "Henrique" // EXEMPLO PARA SAIR NO TERMINAL
        const result = await connection.query('SELECT * FROM users WHERE users.name + :nomeUsuario', 
        {
            replacements: {
                nomeUsuario
            },
            type: Sequelize.QueryTypes.SELECT
        })

        console.log(result);
    }
}

module.exports = produtosController;