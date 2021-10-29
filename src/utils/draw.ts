import { fabric } from 'fabric';

function draw({
  background,
  cap,
  glasse,
  clothe,
}: {
  background: string;
  cap: string;
  glasse: string;
  clothe: string;
}) {
  const canvasEle = document.createElement('canvas');
  canvasEle.style.cssText = 'width: 240px; height: 240px';
  canvasEle.width = 240;
  canvasEle.height = 240;
  const canvas = new fabric.Canvas(canvasEle);

  [background, cap, glasse, clothe].forEach(url => {
    var img = new Image();
    img.style.cssText = 'width: 240px; height: 240px';
    img.onload = function () {
      const imgInstance = new fabric.Image(img, {
        left: 0,
        top: 0,
      });
      canvas.add(imgInstance);
    };
    img.src = url;
  });

  return canvas.toDataURL();
}
export default draw;
