/**
 * Serviço para gerenciar carros.
 */
class CarService {
  constructor(carModel) {
    this.carModel = carModel;
  }

  /**
   * Busca todos os carros.
   * @returns {Promise<Array>} Uma promessa contendo um array de carros.
   */
  async findAll() {
    return this.carModel.findAll();
  }

  /**
   * Busca um carro pelo ID.
   * @param {number} id O ID do carro.
   * @returns {Promise<Object|null>} Uma promessa contendo o carro ou null se não encontrado.
   */
  async findById(id) {
    return this.carModel.findById(id);
  }

  /**
   * Busca carros por marca.
   * @param {string} brand A marca do carro.
   * @returns {Promise<Array>} Uma promessa contendo um array de carros.
   */
  async findByBrand(brand) {
    return this.carModel.findByBrand(brand);
  }


  /**
   * Cria um novo carro.
   * @param {Object} carData Os dados do carro.
   * @returns {Promise<Object>} Uma promessa contendo o carro criado.
   */
  async create(carData) {
    return this.carModel.create(carData);
  }

  /**
   * Atualiza um carro.
   * @param {number} id O ID do carro.
   * @param {Object} carData Os dados do carro.
   * @returns {Promise<Object|null>} Uma promessa contendo o carro atualizado ou null se não encontrado.
   */
  async update(id, carData) {
    return this.carModel.update(id, carData);
  }

  /**
   * Deleta um carro.
   * @param {number} id O ID do carro.
   * @returns {Promise<number>} Uma promessa contendo o número de linhas afetadas.
   */
  async delete(id) {
    return this.carModel.delete(id);
  }
}

module.exports = CarService;
