const resolveRelativeAppRoot = require('./resolvePath').resolveRelativeAppRoot;

module.exports = {
  root: resolveRelativeAppRoot('.'),
  appTs: resolveRelativeAppRoot('./src/index.ts'),
  dist: resolveRelativeAppRoot('./dist'),
};
