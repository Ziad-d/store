import { Router } from 'express';
import * as controllers from '../../controllers/products.controllers';

const routes = Router();
// api/products
routes.route('/').get(controllers.getMany).post(controllers.create);
routes
  .route('/:id')
  .get(controllers.getOne)
  .patch(controllers.updateOne)
  .delete(controllers.deleteOne);

export default routes;
