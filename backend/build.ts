import * as s from 'shelljs';
const config = require('./tsconfig.json');
const outDir = config.compilerOptions.outDir;

s.rm('-rf', outDir);
s.mkdir(outDir);
s.cp('.env', `${outDir}/.env`);
// s.cp('ormconfig.prod.json', `${outDir}/server/ormconfig.json`);
s.mkdir('-p', `${outDir}/common/swagger`);
s.mkdir('-p', `${outDir}/public`);
s.cp('-R', './public/templates', `${outDir}/public`);
// s.cp('server/common/api.yml', `${outDir}/common/api.yml`);
