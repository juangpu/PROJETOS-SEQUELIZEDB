module.exports = (sequelize, DataType)=> {
    const User = sequelize.define('Users', {
        // id: {
        //     type: DataType.INTERGER,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        name: {
            type: DataType.STRING
        },
        email: {
            type: DataType.STRING
        },
        password: {
            type: DataType.STRING
        }
    },{
        timestamps: false
    })

    return User
}