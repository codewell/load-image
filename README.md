# @codewell/load-image
Load image in javascript with promise.

Aims to simplify this:
```JavaScript
const image = new Image();
image.onload = () => {
  resolve(image);
}
image.onerror = () => {
  const loadError = new Error(`Failed to load image: \n${imageUrl} \nDo you have a typo in you image url?`);
  reject(loadError);
}
image.src = imageUrl;
```
into something that can be used like this:
```JavaScript
const image = await loadImage('http://some.url');
```



## Installation
```
npm install @codewell/load-image
```

## Basic usage
```JavaScript
import loadImage from '@codewell/load-image';

const imageUrl = 'http://some.url';

// Promise
loadImage(imageUrl)
  .then(image => { /* Use the image */ })

// async/await
const foo = async () => {
  try {
    const image = await loadImage(imageUrl);
  } catch {
    // Handle error
  }
};
```


