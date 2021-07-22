import { Request, Response, NextFunction } from 'express';
import ErrorHandler from './error';

// eslint-disable-next-line no-unused-vars, no-shadow
export default function errorHandler(
  err: ErrorHandler,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void {
  // const errors = err.errors || [{ message: err.message }];
  console.error(err);
  console.trace(err);
  res.status(err.httpStatusCode || 500).json({ error: err.message });
  // switch (err.httpStatusCode) {
  //   case 399: //Input Validator
  //     res.status(406).send({ error: err.message });
  //     break;
  //   case 400: //Bad Request
  //     res.status(400).send({ error: err.message });
  //     break;
  //   case 401: //Unauthorized
  //     res.status(401).send({ error: err.message });
  //     break;
  //   case 403: //Forbidden
  //     res.status(403).send({ error: err.message });
  //     break;
  //   case 404: //Not Found
  //     res.status(404).send({ error: err.message });
  //     break;
  //   case 405: //Method Not Allowed
  //     res.status(405).send({ error: err.message });
  //     break;
  //   case 406: //Not Acceptable
  //     res.status(406).send({ error: err.message });
  //     break;
  //   case 408: //Request Timeout
  //     res.status(408).send({ error: err.message });
  //     break;
  //   case 409: //Conflict
  //     res.status(409).send({ error: err.message });
  //     break;
  //   case 421: //Misdirected Request
  //     res.status(421).send({ error: err.message });
  //     break;
  //   case 422: //Unprocessable Entity
  //     res.status(422).send({ error: err.message });
  //     break;
  //   case 429: //Too Many Requests
  //     res.status(429).send({ error: err.message });
  //     break;
  //   case 444: //Connection Closed Without Response
  //     res.status(444).send({ error: err.message });
  //     break;
  //   case 499: //Client Closed Request
  //     res.status(499).send({ error: err.message });
  //     break;
  //   case 502: //Bad Gateway
  //     res.status(502).send({ error: err.message });
  //     break;
  //   case 503: //Service Unavailable
  //     res.status(503).send({ error: err.message });
  //     break;
  //   case 504: //Gateway Timeout
  //     res.status(504).send({ error: err.message });
  //     break;
  //   case 507: //Insufficient Storage
  //     res.status(507).send({ error: err.message });
  //     break;
  //   case 511: //Network Authentication Required
  //     res.status(511).send({ error: err.message });
  //     break;
  //   case 599: //Network Connect Timeout Error
  //     res.status(599).send({ error: err.message });
  //     break;
  //   default:
  //     //Internal Server Error
  //     res.status(500).send({ error: err.message });
  //     break;
  // }
}
