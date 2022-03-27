import { Router } from 'express';
import * as controllers from '../../controllers/orders.controllers';
import authenticationMiddleware from '../../middleware/authentication.middleware';

const routes = Router();
// api/products
routes
  .route('/current/:user_id')
  .get(authenticationMiddleware, controllers.getCurrentOrderByUserId);
routes.route('/').post(controllers.createOrder);

export default routes;
