window.addEventListener('load', whenWindowLoaded, false);

function whenWindowLoaded() {
  if (!canvasSupport()) {
    return;
  }

  drawCanvas();

}

function canvasSupport() {
  return !!document.createElement('canvas').getContext;
}

function drawCanvas() {
  const canvas = document.getElementById('canvas');

  const context = canvas.getContext('2d');

  context.fillStyle = '#ffffaa';
  context.fillRect(0, 0, 500, 300);

  context.fillStyle = '#000';
  context.font = '20px Sans-Serif';
  context.textBaseline = 'top';
  context.fillText('Hello World!', 195, 80);

  const helloWorldImage = new Image();
  helloWorldImage.onload = () => {
    context.drawImage(helloWorldImage, 0, 130);
  }

  helloWorldImage.src = './../assets/totoro.jpeg';

  context.fillStyle = '#000';
  context.strokeRect(5, 5, 490, 290);
}