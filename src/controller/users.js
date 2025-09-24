const getAllUsers = (req, res) => {
    res.json({
        message: 'Get all users success'
    });
}

const createUser = (req, res) => {
    res.json({
        message: 'Create All user success'
    });
}

module.exports = {
    getAllUsers,
    createUser
}