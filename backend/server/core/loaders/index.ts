import l from '../../common/logger';
import expressLoader from './express';
// import socketLoader from './socket';
import 'reflect-metadata';
// import { createConnection } from 'typeorm';
// import * as entities from '../../../app/database/entities';

export default async () => {
  return expressLoader()
    .then((app) => {
      l.info('Express Intialized');
      return app;
    })
    .catch((err) => {
      console.error('err :>> ', err);
    });
};
