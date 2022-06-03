# Node.js Text from Image

[![npm version](https://img.shields.io/npm/v/node-text-from-image.svg?style=flat-square)](https://www.npmjs.org/package/node-text-from-image)

A rewrite of [text-from-image](https://github.com/goyalabhi1305/tess-based-text-from-image) by [goyalabhi1305](https://github.com/goyalabhi1305) in TypeScript.

## Installation
```shell
npm install --save node-text-from-image
```

## Usage
This gives a promise  which can be used further for various uses

```typescript
import getTextFromImage from "node-text-from-image";

getTextFromImage("./image.png").then(text => {
    console.log(text);
}).catch(err => {
    console.log(err);
})
```

## Please take care
- Image can be any supported [Image Format](https://github.com/naptha/tesseract.js/blob/master/docs/image-format.md).
- The clear the image the better.
- You can use Sharp or other image processing library to modify image before sending it to the function

## Issues
If you run into any problems, please [create an issue](https://github.com/ngregrichardson/node-text-from-image/issues).

# Contributing
If you're interested in contributing, please follow the [GitHub repository](https://github.com/ngregrichardson/node-text-from-image).
