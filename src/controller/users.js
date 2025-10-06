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

    if(!body.name || !body.email || !body.address) {
        return res.status(400).json({
            message: 'Upss, Salah Mengirim data? Pastikan semua data terisi dengan benar!',
            data: null
        });
    }

    try {

        await UserModel.createNewUser(req.body);

        res.status(201).json({
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

const UpdateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {

        await UserModel.updateUser(body, id);

        res.json({
            message: 'Update user success',
            id : id,
            ...body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error
        });
    }
}

const DeleteUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await UserModel.deleteUser(id);

        res.json ({
            message: 'Delete user success',
            id : id,
            ...body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error
        });
    }

}

module.exports = {
    getAllUsers,
    createUser,
    UpdateUser,
    DeleteUser
}