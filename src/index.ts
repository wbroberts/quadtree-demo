import { QuadTree } from './quadtree/quadtree';
import { Point } from './point/point';
import { Boundary, AreaBoundary } from './area-boundary/area.boundary';

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

  for (let i = 0; i < 300; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;

    const point = new Point(x, y, i);
    qTree.insert(point);

    ctx.fillStyle = '#fff';
    ctx.fillRect(x, y, 2, 2);
  }

  const x = (Math.random() * canvas.width) / 2;
  const y = (Math.random() * canvas.height) / 2;
  const width = 200;
  const height = 200;

  ctx.strokeStyle = 'yellow';
  ctx.strokeRect(x, y, width, height);

  const boundary = new AreaBoundary({ x, y, width, height });
  const points = qTree.query(boundary);

  for (let p of points) {
    ctx.fillStyle = 'lightseagreen';
    ctx.fillRect(p.x, p.y, 4, 4);
  }
  console.log(points.length);
};
