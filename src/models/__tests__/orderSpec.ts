import OrderModel from '../order.model';
import db from '../../database';
import Order from '../../types/order.type';

const orderModel = new OrderModel();

describe('Order Model', () => {
  describe('Test methods existance', () => {
    it('should have a Get Orders By User Id method', () => {
      expect(orderModel.getCurrentOrderByUserId).toBeDefined();
    });
  });

  //   describe('Test Order Model Logic', () => {
  //     const order = {
  //       quantity: 20,
  //       status: 'complete',
  //     } as Order;

  //     beforeAll(async () => {
  //       const createdOrder = await orderModel.createOrder(order);
  //       order.id = createdOrder.id;
  //     });

  //     afterAll(async () => {
  //       const connection = await db.connect();
  //       const sql = 'DELETE FROM orders';
  //       await connection.query(sql);
  //       connection.release();
  //     });
  //   });
});
