const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Rota para criar um novo carro
router.post('/', carController.createCar);

// Rota para ler todos os carros
router.get('/', carController.getAllCars);

// Rota para ler um carro pelo ID
router.get('/:id', carController.getCarById);

// Rota para atualizar um carro pelo ID
router.put('/:id', carController.updateCar);

// Rota para deletar um carro pelo ID
router.delete('/:id', carController.deleteCar);

module.exports = router;
