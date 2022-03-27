import OrderModel from '../order.model';

const orderModel = new OrderModel();

describe('Order Model', () => {
  describe('Test methods existance', () => {
    it('should have a Get Orders By User Id method', () => {
      expect(orderModel.getCurrentOrderByUserId).toBeDefined();
    });
    it('Order createOrder has defined', () => {
      expect(orderModel.createOrder).toBeDefined();
    });
  });
});
