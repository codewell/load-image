/**
   * Loads a url into an js image object.
   * Resolves the image when the image is loaded.
   * @param {string} imageUrl - image url
   * @returns {object} - Returns a promise with the loaded image object
   */
const loadImage = imageUrl => new Promise(
  (resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      resolve(image);
    }
    image.onerror = () => {
      const loadError = new Error(`Failed to load image: \n${imageUrl} \nDo you have a typo in you image url?`);
      reject(loadError);
    }
    image.src = imageUrl;
  }
);

module.exports = loadImage;
