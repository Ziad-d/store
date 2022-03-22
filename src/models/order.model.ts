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
}

export default OrderModel;
