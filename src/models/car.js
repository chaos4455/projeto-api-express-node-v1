/**
 * Modelo para carros.
 */
class Car {
  constructor(id, marca, modelo, ano, preco) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.preco = preco;
  }
}

module.exports = Car;
