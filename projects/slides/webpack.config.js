const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:3000/',
    uniqueName: 'slides',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'slides',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './projects/slides/src/app/slides/slides.module.ts',
      },
      shared: [ '@angular/core', '@angular/common', '@angular/router' ],
    }),
  ],
};
