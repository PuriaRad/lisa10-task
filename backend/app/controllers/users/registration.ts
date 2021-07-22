import { NextFunction, Request, Response } from 'express';
import { RegistrationService } from '../../services/user/registration.service';

export class RegistrationController {
  /* --------------------------------- getAll; -------------------------------- */

  public static getAllRegistrationField(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    RegistrationService.getAllRegistrationField()
      .then((r) => {
        res.json(r);
      })
      .catch((err) => next(err));
  }

  /* --------------------------------- create --------------------------------- */

  public static registerRequest = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    return RegistrationService.registerRequest(req.body)
      .then((r) => {
        res.json(r);
      })
      .catch((err) => next(err));
  };
}
