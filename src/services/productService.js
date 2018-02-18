import Product from '@/models/Product';
import axios from 'axios';

export default {
  async getProducts() {
    try {
      const response = await axios.get('/static/products.json');
      return response.data.map(product => new Product(product));
    } catch (e) {
      return [];
    }
  },
};
