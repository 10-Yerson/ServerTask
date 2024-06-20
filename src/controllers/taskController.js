    // backend/src/controllers/taskController.js
const Task = require('../models/Task');

// Obtener todas las tareas
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    }
};

// Obtener una tarea por ID
const getTaskById = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({ msg: 'Tarea no encontrada' });
        }

        res.json(task);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    }
};

// Crear una nueva tarea
const createTask = async (req, res) => {
    const { title, description, taskType } = req.body;

    try {
        const newTask = new Task({
            title,
            description,
            taskType,
        });

        const savedTask = await newTask.save();
        res.json(savedTask);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
    }
};

// Actualizar una tarea existente
const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, taskType, completed } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, description, taskType, completed },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ msg: 'Tarea no encontrada' });
        }

        res.json(updatedTask);
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
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};
