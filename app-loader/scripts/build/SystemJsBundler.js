const path = require('path');
const crypto = require('crypto');
const Builder = require('systemjs-builder');
const rootDir = path.resolve(__dirname, '../../');
const builder = new Builder();
let bundlerOutput;

process.on('message', ({
  inputMap,
  mode
}) => {
  console.log('SystemJS Bundler Starting');
  if (bundlerOutput) {
    console.log('SystemJS Bundle found; returning.');
    process.send(bundlerOutput);
    return;
  }
  console.log('SystemJS Bundle not found; generating. This may take a while...');

  let libs = [];
  let cleanedMap = {};
  for (lib in inputMap) {
    libs.push(lib);
    cleanedMap[lib] = path.join(rootDir, inputMap[lib]);
  };
  builder.config({
    map: cleanedMap,
  });

  const bundlerOptions = mode === 'production' ? {
    minify: true,
    mangle: false,
    sourceMaps: false
  } : {
    minify: true,
    mangle: false,
    sourceMaps: false
  };

  builder
    .bundle(libs.join(' + '), bundlerOptions)
    .then((output) => {
      output.hash = crypto.createHash('md5').update(output.source).digest('hex');
      bundlerOutput = output;
      process.send(output);
    })
    .catch((e) => {
      console.error('Could not create SystemJs Bundle', e);
      process.exit(-1);
    });

});