import { isArray } from 'class-validator';
import validator from 'validator';
import ErrorHandler from '../error/error';

export class RegisterValidation {
  public static registerRequest(req, res, next) {
    try {
      // if (!isArray(req.body.cart))
      //   throw new ErrorHandler(400, 'سبد شما صحیح نیست.');
      // if (req.body.cart.length <= 0)
      //   throw new ErrorHandler(400, 'سبد شما خالی است');
      // if (!req.body.deliveryDate)
      //   throw new ErrorHandler(400, 'تاریخ تحویل سفارش الزامی است');
      // if (!req.body.deliveryTime)
      //   throw new ErrorHandler(400, 'زمان تحویل سفارش الزامی است');
      // if (req.body.orderInPerson == undefined)
      //   throw new ErrorHandler(400, 'تحویل حضوری یا غیر حضوری مشخص نیست');

      next();
    } catch (err) {
      next(err);
    }
  }
}
