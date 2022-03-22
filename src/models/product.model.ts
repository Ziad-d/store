import Product from '../types/product.type';
import db from '../database';

class ProductModel {
  // create
  async create(p: Product): Promise<Product> {
    try {
      // open connection
      const connection = await db.connect();
      const sql =
        'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *';
      // run query
      const result = await connection.query(sql, [p.name, p.price]);
      // release connection
      connection.release();
      // return product
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to create product (${p.name}): ${(error as Error).message}`
      );
    }
  }
  // get many
  async getMany(): Promise<Product[]> {
    try {
      const connection = await db.connect();
      const sql = 'SELECT id, name, price from products';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(
        `Error at retrieving products ${(error as Error).message}`
      );
    }
  }

  // get one
  async getOne(id: string): Promise<Product> {
    try {
      const connection = await db.connect();
      const sql = 'SELECT id, name, price FROM products WHERE id=($1)';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not find product ${id}, ${(error as Error).message}`
      );
    }
  }

  // update product
  async updateOne(p: Product): Promise<Product> {
    try {
      const connection = await db.connect();
      const sql =
        'UPDATE products SET name=$1, price=$2 WHERE id=$3 RETURNING id, name, price';
      const result = await connection.query(sql, [p.name, p.price, p.id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not update product ${p.name}, ${(error as Error).message}`
      );
    }
  }

  // delete product
  async deleteOne(id: string): Promise<Product> {
    try {
      const connection = await db.connect();
      const sql =
        'DELETE FROM products WHERE id=($1) RETURNING id, name, price';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not delete product ${id}, ${(error as Error).message}`
      );
    }
  }
}

export default ProductModel;
