import Eye from '@/shared/models/Eye';

export default class PrismoProfile {
  constructor({ left = new Eye(), right = new Eye() } = {}) {
    this.left = left;
    this.right = right;
  }
}
