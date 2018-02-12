export default class Product {
  constructor({ name = '', supplier = '' } = {}) {
    this.name = name;
    this.supplier = supplier;
  }
}
