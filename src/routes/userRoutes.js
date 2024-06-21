// backend/src/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// Ruta para obtener todas las tareas
router.get('/', userController.getAllUser);

// Ruta para obtener una tarea por ID
router.get('/:id', userController.getUserById); 

// Ruta para crear una nueva tarea
router.post('/', userController.createUser);

// Ruta para actualizar una tarea existente
router.put('/:id', userController.updateUser);

// Ruta para eliminar una tarea
//router.delete('/:id', taskController.deleteTask);

module.exports = router;
