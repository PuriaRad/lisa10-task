import express, { Application } from 'express';
import http from 'http';
import os from 'os';
import loaders from './loaders';
import l from '../common/logger';
const _ = require('lodash');
import api from '../../app/api';

import * as expressOasGenerator from 'express-oas-generator';
const exit = process.exit;

import installValidator from '../common/openapi';

// expressOasGenerator.handleResponses(app, process.env.OPENAPI_SPEC);
let app;
let port;
export default class ExpressServer {
  private routes: (app: Application) => void;
  constructor() {
    this.init();
  }

  async init() {
    app = await loaders();
    // expressOasGenerator.handleResponses(app, {});
    port = this.normalizePort(parseInt(process.env.PORT));
    this.setRoutes(api);
    app = await installValidator(app, this.routes);
    this.listen(port);
  }

  setRoutes(routes: (app: Application) => any) {
    this.routes = routes;
  }

  listen(port: number): Application {
    const welcome = (p: number) => (): void =>
      l.info(
        `up and running in ${
          process.env.NODE_ENV || 'development'
        } @: ${os.hostname()} on port: ${p}}`
      );
    l.info('http://localhost:' + port);
    // .catch((e) => {
    //   l.error(e);
    //   exit(1);
    // });
    // let get = app._router.stack
    //   .filter((r) => r.route && r.route.methods.get)
    //   .map((r) => r.route.path);
    // let post = app._router.stack
    //   .filter((r) => r.route && r.route.methods.post)
    //   .map((r) => r.route.path);
    // let put = app._router.stack
    //   .filter((r) => r.route && r.route.methods.put)
    //   .map((r) => r.route.path);

    // console.log('app.routes :>> ', { get, post, put });

    http
      .createServer(app)
      .listen(port, welcome(port))
      .on('error', this.onError);
    return app;
  }

  /* -------------------------------- onError; -------------------------------- */

  onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  /* ----------------------------- normalizePort; ----------------------------- */

  normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  }
}
