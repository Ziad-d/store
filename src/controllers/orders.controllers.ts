import { NextFunction, Request, Response } from 'express';
import OrderModel from '../models/order.model';

const orderModel = new OrderModel();

export const getCurrentOrderByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await orderModel.getCurrentOrderByUserId(
      req.params.user_id as unknown as string
    );
    res.json({
      status: ' success',
      data: order,
      message: 'order retrived Successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await orderModel.createOrder(req.body);
    res.json({
      status: 'success',
      data: { ...order },
      message: 'Order created Successfully',
    });
  } catch (error) {
    next(error);
  }
};
