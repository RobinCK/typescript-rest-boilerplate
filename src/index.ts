import 'reflect-metadata';
import * as config from 'config';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { UserController } from './controllers/UserController';
import { LoggingMiddleware } from './middlewares';

useContainer(Container);

createExpressServer({
    validation: true,
    classTransformer: true,
    routePrefix: config.get('app.routePrefix'),
    controllers: [UserController],
    middlewares: [LoggingMiddleware],
    interceptors: [],
}).listen(config.get('app.port'));
