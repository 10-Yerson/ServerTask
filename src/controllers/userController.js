    // backend/src/controllers/userController.js
    const User = require('../models/User');

    // Obtener todas las tareas
    const getAllUser = async (req, res) => {
        try {
            const user = await User.find();
            res.json(user);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Error del servidor');
        }
    };
    
    // Obtener una tarea por ID
    const getUserById = async (req, res) => {
        const { id } = req.params;
    
        try {
            const user = await User.findById(id);
    
            if (!user) {
                return res.status(404).json({ msg: 'Tarea no encontrada' });
            }
    
            res.json(user);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Error del servidor');
        }
    };
    
    // Crear una nueva tarea
    const createUser = async (req, res) => {
        const { name, gmail, password } = req.body;
    
        try {
            const newUser = new User({
                name,
                gmail,
                password,
            });
    
            const savedUser = await newUser.save();
            res.json(savedUser);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Error del servidor');
        }
    };
    
    // Actualizar una tarea existente
    const updateUser = async (req, res) => {
        const { id } = req.params;
        const { name, gmail, password} = req.body;
    
        try {
            const updatedUser = await User.findByIdAndUpdate(
                id,
                { name, gmail, password },
                { new: true }
            );
    
            if (!updatedUser) {
                return res.status(404).json({ msg: 'Tarea no encontrada' });
            }
    
            res.json(updatedUser);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Error del servidor');
        }
    };
    
    // Eliminar una tarea
    const deleteTask = async (req, res) => {
        const { id } = req.params;
    
        try {
            const deletedTask = await Task.findByIdAndDelete(id);
    
            if (!deletedTask) {
                return res.status(404).json({ msg: 'Tarea no encontrada' });
            }
    
            res.json({ msg: 'Tarea eliminada correctamente' });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Error del servidor');
        }
    };
    
    module.exports = {
        getAllUser,
        getUserById,
        createUser,
        updateUser,
        deleteTask,
    };
    