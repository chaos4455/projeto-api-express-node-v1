const Car = require('../models/car');

let cars = [];
let nextId = 1;

/**
 * Cria um novo carro.
 * @param {Object} req - Objeto de requisição.
 * @param {Object} res - Objeto de resposta.
 */
const createCar = (req, res) => {
  const { marca, modelo, ano, preco } = req.body;
  const newCar = new Car(nextId++, marca, modelo, ano, preco);
  cars.push(newCar);
  res.status(201).json(newCar);
};

/**
 * Lê todos os carros.
 * @param {Object} req - Objeto de requisição.
 * @param {Object} res - Objeto de resposta.
 */
const getAllCars = (req, res) => {
  res.json(cars);
};

/**
 * Lê um carro pelo ID.
 * @param {Object} req - Objeto de requisição.
 * @param {Object} res - Objeto de resposta.
 */
const getCarById = (req, res) => {
  const car = cars.find(car => car.id === parseInt(req.params.id));
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: 'Carro não encontrado' });
  }
};

/**
 * Atualiza um carro pelo ID.
 * @param {Object} req - Objeto de requisição.
 * @param {Object} res - Objeto de resposta.
 */
const updateCar = (req, res) => {
  const { marca, modelo, ano, preco } = req.body;
  const index = cars.findIndex(car => car.id === parseInt(req.params.id));
  if (index !== -1) {
    cars[index] = new Car(cars[index].id, marca, modelo, ano, preco);
    res.json(cars[index]);
  } else {
    res.status(404).json({ message: 'Carro não encontrado' });
  }
};


/**
 * Deleta um carro pelo ID.
 * @param {Object} req - Objeto de requisição.
 * @param {Object} res - Objeto de resposta.
 */
const deleteCar = (req, res) => {
  const index = cars.findIndex(car => car.id === parseInt(req.params.id));
  if (index !== -1) {
    cars.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Carro não encontrado' });
  }
};

module.exports = { createCar, getAllCars, getCarById, updateCar, deleteCar };
