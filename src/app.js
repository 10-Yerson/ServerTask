// backend/src/app.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

// Conectar a la base de datos MongoDB
connectDB();

// Crear la aplicación Express
const app = express();

// Middleware para permitir CORS
app.use(cors());

// Middleware para procesar datos JSON
app.use(express.json());

// Definir rutas principales de la API
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/user', require('./routes/userRoutes'));


// Puerto para el servidor
const PORT = process.env.PORT || 5000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
