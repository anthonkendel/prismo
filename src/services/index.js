import authService from '@/services/authService';
import backgroundService from '@/services/backgroundService';
import driveService from '@/services/driveService';
import prismoProfileService from '@/services/prismoProfileService';
import productService from '@/services/productService';

const services = {
  authService,
  backgroundService,
  driveService,
  productService,
  prismoProfileService,
};

export {
  authService,
  backgroundService,
  driveService,
  productService,
  prismoProfileService,
};
export default services;
