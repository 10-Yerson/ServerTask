// backend/src/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');


// Ruta para obtener todas las tareas
router.get('/', taskController.getAllTasks);

// Ruta para obtener una tarea por ID
router.get('/:id', taskController.getTaskById); 

// Ruta para crear una nueva tarea
router.post('/', taskController.createTask);

// Ruta para actualizar una tarea existente
router.put('/:id', taskController.updateTask);

// Ruta para eliminar una tarea
router.delete('/:id', taskController.deleteTask);

module.exports = router;
