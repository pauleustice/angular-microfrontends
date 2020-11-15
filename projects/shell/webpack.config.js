const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:5000/",
    uniqueName: "shell"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        'slides': "slides@http://localhost:3000/remoteEntry.js",
      },
      shared: [ "@angular/core", "@angular/common", "@angular/router" ],
    }),
  ],
};
