import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization)
      return res.status(403).send({ error: 'No Auth token provided' });

    if (authorization === '123') {
      return next();
    } else {
      return res.status(403).send({ error: 'Invalid Auth Token' });
    }
  }
}
