// const models = require('../models');
const { User } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

const userController = {
    index: async (req, res)=> {
        let users = await User.findAll();
        return res.render('users', { users })
    },
    findById: async (req, res)=> {
        let {id} = req.params;

        let user = await User.findOne({
            where: {
                id:id // busca o usuario do ID que for digitado na rota EX.: http://localhost:3000/users/2 no terminal vem os dados do usuario de id 2 - Leonardo
            }
        })
        
        return res.render('dadosUser', { user })
    },
    search: async (req, res)=> {
        let {key} = req.query

        let users = await User.findAll({
            where: {
                name: {
                    [Op.like]: `%${key}%`
                }
            }
            // order:  [
                // ['coluna que queremos ordenar', 'DESC- descrecente']
            // ]
        })

        return res.render('users', { users })
    },
    agregadores: async (req, res)=> {
        // let total = await User.count()
        // res.send("O total de itens na tabela é: " + total)
        User.max('age').then(max => {
            res.send("O usuario mais velho tem " + max + " anos")
        })
    }
}

module.exports = userController