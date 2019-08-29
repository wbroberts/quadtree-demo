import { AreaBoundary, QuadTree } from 'wbroberts-quadtree-outline';

import { RenderingPoint } from './rendering-point';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

const canvasBoundary = new AreaBoundary({ x: 0, y: 0, width: canvas.width, height: canvas.height });
let qTree: QuadTree;
let points: RenderingPoint[] = [];

for (let i = 0; i < 500; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const radius = 5;
  const point = new RenderingPoint(x, y, radius, { i, collided: false });

  points.push(point);
}

const mouse = new RenderingPoint(50, 50, 10, { i: 'mouse', collided: false });

const loop = () => {
  ctx.fillStyle = '#2D3748';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  qTree = new QuadTree(canvasBoundary, ctx);
  mouse.render(ctx, false);
  qTree.insert(mouse);

  for (const p of points) {
    p.render(ctx, false, '#319795');
    p.move();
    qTree.insert(p);

    const boundary = {
      x: p.left,
      y: p.top,
      width: p.maxDistance() * 2,
      height: p.maxDistance() * 2
    };

    const area = new AreaBoundary(boundary);
    const toCheck = qTree.query(area);

    for (const c of toCheck) {
      if (p !== c && p.distance(c) / 2 <= p.maxDistance() && p.isColliding(c)) {
        p.render(ctx, true, '#E53E3E');
        c.render(ctx, true, '#E53E3E');

        p.data.collided = true;
        c.data.collided = true;
      }
    }
  }

  const mouseBoundary = {
    x: mouse.left,
    y: mouse.top,
    width: mouse.maxDistance() * 2,
    height: mouse.maxDistance() * 2
  };

  const mouseArea = new AreaBoundary(mouseBoundary);
  const mtoCheck = qTree.query(mouseArea);

  for (const c of mtoCheck) {
    if (
      mouse !== c &&
      mouse.distance(c) / 2 <= mouse.maxDistance() &&
      mouse.isColliding(c)
    ) {
      mouse.render(ctx, true, '#742A2A');
      c.render(ctx, true, '#FAF089');

      mouse.data.collided = true;
    }
  }

  requestAnimationFrame(loop);
};

window.onload = () => {
  document.body.querySelector('#container').appendChild(canvas);
  document.addEventListener('mousemove', e => {
    const x = e.clientX - canvas.getBoundingClientRect().left;
    const y = e.clientY - canvas.getBoundingClientRect().top;

    mouse.x = x;
    mouse.y = y;
  });
  loop();
};
