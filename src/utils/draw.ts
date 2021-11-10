function loadImage(url): Promise<{
  url: string;
  image: CanvasImageSource;
  width: number;
  height: number;
}> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = function () {
      resolve({
        url,
        image,
        width: image.naturalWidth,
        height: image.naturalHeight,
      });
    };
    image.onerror = function () {
      reject(new Error('Could not load image at ' + url));
    };
    image.src = url;
  });
}

function draw({ background, head, cap, glasse, clothe }) {
  const canvasEle = document.createElement('canvas');
  canvasEle.style.cssText = 'width: 240px; height: 240px';
  canvasEle.width = 480;
  canvasEle.height = 480;
  const ctx = canvasEle.getContext('2d');

  async function drawImage(images) {
    for (let i = 0; i < images.length; i++) {
      try {
        const result = await loadImage(images[i]);
        ctx.drawImage(result.image, 0, 0, result.width, result.height, 0, 0, 480, 480);
      } catch (err) {
        console.error(err);
        console.error(images, i);
      }
    }
    return canvasEle.toDataURL('image/png');
  }

  return drawImage([background, clothe, head, cap, glasse]);
}
export default draw;
