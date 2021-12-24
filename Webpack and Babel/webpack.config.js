const path = require("path");

module.exports = {
    entry : "./code/index.js",
    output: {
        path: path.join(__dirname,"build"),   //folder name
        filename: "bundle.js",
    },
    mode:"development",
    module: {
        rules: [
          { 
              test: /\.css$/, 
              use: ['style-loader','css-loader'],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ],
      },
}


// where it starts bundling and where it stores in output

// overriding main.js with bundle.js
/*
"build:watch": "webpack --watch",    like a nodemon running automatically
"serve": "webpack serve"  like live server 
*/