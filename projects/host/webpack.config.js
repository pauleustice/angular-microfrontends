const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:5000/',
    uniqueName: 'host',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        slides: 'slides@http://localhost:3000/remoteEntry.js',
      },
      shared: [ '@angular/core', '@angular/common', '@angular/router', '@ngrx/store' ],
    }),
  ],
};
