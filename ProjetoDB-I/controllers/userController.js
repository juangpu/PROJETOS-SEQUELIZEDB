// const models = require('../models');
const { User } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

const userController = {
    index: async (req, res)=> {
        let users = await User.findAll();
        return res.render('users', { users })
    },
    create: (req, res)=> {
        return res.render('cadastroUser')
    },
    store: async (req, res)=> {
        const { name, email, birthdate, password, age } = req.body;

        const resultado = await User.create({
            name,
            email,
            birthdate,
            password,
            age
        });

        console.log(resultado);

        return res.redirect('/users')
    },
    edit: async (req, res)=> {
        const {id} = req.params;

        const user = await User.findByPk(id);

        return res.render('editarUser', {user})
    },
    update: async (req, res)=> {
        const {id} = req.params;
        const { name, email, birthdate, password, age } = req.body;

        const resultado = await User.update({
            name,
            email,
            birthdate,
            password,
            age
        }, {
            where: {
                id:id
            }
        });

        console.log(resultado);

        return res.redirect('/users')
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
    },
    bulkCreate: async (req, res)=> {
        const listaDeUsuarios = [
            {name: "Igor", email: "igor@email.com", birthdate: "09-11-1999", password: "009988", age: "21"},
            {name: "Gilberto", email: "gilberto@email.com", birthdate: "03-03-1998", password: "006622", age: "22"},
            {name: "Fernanda", email: "fernanda@email.com", birthdate: "06-04-1998", password: "221177", age: "22"},
            {name: "Isabella", email: "isabella@email.com", birthdate: "09-11-2002", password: "223300", age: "18"}
        ]

        const resultado = await User.bulkCreate(listaDeUsuarios);
        console.log(resultado);

        res.send("Criados")
    }
}

module.exports = userController