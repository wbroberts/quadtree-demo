import { QuadTree } from './quadtree/quadtree';
import { Point } from './point/point';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const qTree = new QuadTree(
  { x: 0, y: 0, width: canvas.width, height: canvas.height },
  ctx
);

window.onload = () => {
  document.body.appendChild(canvas);

  canvas.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    const point = new Point(x, y);
    qTree.insert(point);

    ctx.fillStyle = '#fff';
    ctx.fillRect(x, y, 2, 2);
  });
};
