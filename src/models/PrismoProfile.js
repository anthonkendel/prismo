import Eye from '@/models/Eye';

export default class PrismoProfile {
  constructor({ left = new Eye(), right = new Eye() } = {}) {
    this.left = left;
    this.right = right;
  }
}
