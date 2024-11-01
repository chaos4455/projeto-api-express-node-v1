const CarService = require('../services/carService');
const Car = require('../models/car');
const carService = new CarService(Car);

/**
 * Controller para gerenciar carros.
 */
class CarController {
  /**
   * Cria um novo carro.
   * @param {Object} req O objeto de requisição.
   * @param {Object} res O objeto de resposta.
   */
  async create(req, res) {
    try {
      const car = await carService.create(req.body);
      res.status(201).json(car);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar carro.' });
    }
  }

  /**
   * Busca todos os carros.
   * @param {Object} req O objeto de requisição.
   * @param {Object} res O objeto de resposta.
   */
  async findAll(req, res) {
    try {
      const cars = await carService.findAll();
      res.json(cars);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar carros.' });
    }
  }

  /**
   * Busca um carro pelo ID.
   * @param {Object} req O objeto de requisição.
   * @param {Object} res O objeto de resposta.
   */
  async findById(req, res) {
    try {
      const car = await carService.findById(req.params.id);
      if (!car) {
        return res.status(404).json({ error: 'Carro não encontrado.' });
      }
      res.json(car);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar carro.' });
    }
  }

  /**
   * Atualiza um carro.
   * @param {Object} req O objeto de requisição.
   * @param {Object} res O objeto de resposta.
   */
  async update(req, res) {
    try {
      const car = await carService.update(req.params.id, req.body);
      if (!car) {
        return res.status(404).json({ error: 'Carro não encontrado.' });
      }
      res.json(car);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar carro.' });
    }
  }

  /**
   * Deleta um carro.
   * @param {Object} req O objeto de requisição.
   * @param {Object} res O objeto de resposta.
   */
  async delete(req, res) {
    try {
      const result = await carService.delete(req.params.id);
      if (result === 0) {
        return res.status(404).json({ error: 'Carro não encontrado.' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar carro.' });
    }
  }

    /**
   * Busca carros por marca.
   * @param {Object} req O objeto de requisição.
   * @param {Object} res O objeto de resposta.
   */
  async findByBrand(req, res) {
    try {
      const cars = await carService.findByBrand(req.params.brand);
      res.json(cars);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar carros por marca.' });
    }
  }
}

module.exports = new CarController();
