const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:3000/',
    uniqueName: 'slides'
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'slides',
      library: { type: 'var', name: 'slides' },
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './projects/slides/src/app/slides/slides.module.ts',
      },
      shared: [ '@angular/core', '@angular/common', '@angular/router' ]
    }),
  ],
};
