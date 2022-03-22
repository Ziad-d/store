import ProductModel from '../product.model';
import db from '../../database';
import Product from '../../types/product.type';

const productModel = new ProductModel();

describe('Product Model', () => {
  describe('Test methods existance', () => {
    it('should have a Get Many Products method', () => {
      expect(productModel.getMany).toBeDefined();
    });
    it('should have a Get One Product method', () => {
      expect(productModel.getOne).toBeDefined();
    });
    it('should have a Create Product method', () => {
      expect(productModel.create).toBeDefined();
    });
    it('should have an Update Product method', () => {
      expect(productModel.updateOne).toBeDefined();
    });
    it('should have a Delete Product method', () => {
      expect(productModel.deleteOne).toBeDefined();
    });
  });

  describe('Test Product Model Logic', () => {
    const product = {
      name: 'Banana',
      price: 20,
    } as Product;

    beforeAll(async () => {
      const createdProduct = await productModel.create(product);
      product.id = createdProduct.id;
    });

    afterAll(async () => {
      const connection = await db.connect();
      const sql = 'DELETE FROM products';
      await connection.query(sql);
      connection.release();
    });

    it('Create method should return a New Product', async () => {
      const createdProduct = await productModel.create({
        name: 'Melon',
        price: 50,
      } as Product);
      expect(createdProduct).toEqual({
        id: createdProduct.id,
        name: 'Melon',
        price: 50,
      } as Product);
    });

    it('Get Many method should return All available products in DB', async () => {
      const products = await productModel.getMany();
      expect(products.length).toBe(2);
    });

    it('Get One method should return Banana when called with ID', async () => {
      const returnedProduct = await productModel.getOne(product.id as string);
      expect(returnedProduct.id).toBe(product.id);
      expect(returnedProduct.name).toBe(product.name);
      expect(returnedProduct.price as number).toBe(product.price as number);
    });

    it('Update One method should return a product with edited attributes', async () => {
      const updatedProduct = await productModel.updateOne({
        ...product,
        price: 15,
      });
      expect(updatedProduct.id).toBe(product.id);
      expect(updatedProduct.name).toBe(product.name);
      expect(updatedProduct.price as number).toBe(15);
    });

    it('Delete One method should delete product from DB', async () => {
      const deletedProduct = await productModel.deleteOne(product.id as string);
      expect(deletedProduct.id).toBe(product.id);
    });
  });
});
