import EyeSetting from '@/models/EyeSetting';

export default class LNSProfile {
  constructor({ left = new EyeSetting(), right = new EyeSetting() } = {}) {
    this.left = left;
    this.right = right;
  }
}
