import Order from '../types/order.type';
import db from '../database';

class OrderModel {
  async getCurrentOrderByUserId(user_id: string): Promise<Order> {
    try {
      const connection = await db.connect();
      const sql = 'SELECT * FROM orders WHERE user_id = $1';
      const result = await connection.query(sql, [user_id]);
      connection.release();

      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Error at retrieving orders of user ${(error as Error).message}`
      );
    }
  }

  async createOrder(o: Order): Promise<Order> {
    try {
      const connection = await db.connect();
      const sql =
        'INSERT INTO orders (product_id, quantity, user_id, status) VALUES($1, $2, $3, $4) RETURNING *';
      const result = await connection.query(sql, [
        o.product_id,
        o.quantity,
        o.user_id,
        o.status,
      ]);
      connection.release();

      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not create order. Error: ${error as Error}`);
    }
  }
}

export default OrderModel;
