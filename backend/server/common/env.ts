import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import path from 'path';

// const root = path.normalize(__dirname + '../../..');
var myEnv = dotenv.config();
// {
//   path: `${root}/environments/.env.${process.env.NODE_ENV}`,
// }
dotenvExpand(myEnv);
