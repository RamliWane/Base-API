const UserModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        
        const [data] = await UserModel.getAllUsers();
    
        res.json({
            message: 'Get all users success',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error
        });
    }
} 

const createUser = async (req, res) => {
    const {body} = req;
    try {

        await UserModel.createNewUser(req.body);

        res.json({
            message: 'Create All user success',
            data : body
        });

    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error
        });
    }
}

const UpdateUser = (req, res) => {
    const {id} = req.params;
    console.log('Id: ',id);
    res.json({
        message: 'Update user success',
        data : req.body
    });
}

const DeleteUser = (req, res) => {
    const {id} = req.params;
    res.json ({
        menubar: `Delete user success`,
        data: [
            {
                id,
                name: 'User 1',
                email: 'user1@example.com'
            }
        ]
    })
}

module.exports = {
    getAllUsers,
    createUser,
    UpdateUser,
    DeleteUser
}