import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';
import * as express from 'express';

@Middleware({ type: 'before' })
export class LoggingMiddleware implements ExpressMiddlewareInterface {
    use(request: express.Request, response: express.Response, next: express.NextFunction): void {
        console.log(request.query); // tslint:disable-line
        console.log(request.params); // tslint:disable-line
        console.log(request.path); // tslint:disable-line
        next();
    }
}
