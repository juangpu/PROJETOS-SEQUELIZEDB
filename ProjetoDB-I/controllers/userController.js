const { User } = require('../models');

const userController = {
    index: async (req, res)=> {
        let users = await User.findAll();

        return res.render('users', { users })
    }
}

module.exports = userController