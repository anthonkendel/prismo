import axios from 'axios';
import Product from '@/models/Product';

export default {
  async getProducts() {
    const response = await axios.get('static/products.json');
    return response.data.map(product => new Product(product));
  },
};
