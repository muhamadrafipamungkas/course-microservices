const { User } = require('./../../../models')

module.exports = async (req, res) => {
    
    const userIds = req.query.user_ids || []
    console.log(userIds)
    const sqlOptions = {
        attributes: ['id', 'email', 'name', 'role', 'profession', 'avatar']
    }

    if (userIds.length) {
        sqlOptions.where = {
            id: userIds
        }
    }

    const users = await User.findAll(sqlOptions)

    return res.json({
        status: 'success',
        data: users
    })
}