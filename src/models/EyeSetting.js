export default class EyeSetting {
  constructor({ product = '', strength = 0, inventory = 0, notes = '' } = {}) {
    this.product = product;
    this.strength = strength;
    this.inventory = inventory;
    this.notes = notes;
  }
}
