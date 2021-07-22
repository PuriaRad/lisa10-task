import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import * as expressOasGenerator from 'express-oas-generator';
// import rateLimit from 'express-rate-limit';
import compression from 'compression';

export default async () => {
  return new Promise((resolve) => {
    const app = express();
    expressOasGenerator.handleResponses(app, {});

    const root = path.normalize(__dirname + '/../../..');
    app.set('appPath', root + 'client');

    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || '100kb',
      })
    );
    app.use(bodyParser.text({ limit: process.env.REQUEST_LIMIT || '100kb' }));

    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(express.static(`${root}/public`));
    app.use(
      '/bootstrap',
      express.static(`${root}/node_modules/bootstrap/dist`)
    );

    app.use(helmet());

    app.use(cors());
    app.use(compression());
    app.use(morgan('dev'));

    resolve(app);
  });
};
