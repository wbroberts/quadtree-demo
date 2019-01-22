import { QuadTree, Point, AreaBoundary } from './classes';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let qTree: QuadTree;
let points: Point[] = [];
let point: Point;

for (let i = 0; i < 50; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const radius = 10;

  point = new Point(x, y, radius, { i, collided: false });
  points.push(point);
}

const mouse = new Point(50, 50, 10, { i: 'mouse', collided: false });

const loop = () => {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  qTree = new QuadTree({ x: 0, y: 0, width: canvas.width, height: canvas.height }, ctx);
  mouse.render(ctx, false);
  qTree.insert(mouse);

  for (const p of points) {
    p.render(ctx, false);
    p.move();
    qTree.insert(p);

    const boundary = {
      x: p.left - p.radius / 2,
      y: p.top - p.radius / 2,
      width: p.maxDistance() * 2,
      height: p.maxDistance() * 2
    };

    const area = new AreaBoundary(boundary);
    const toCheck = qTree.query(area);

    for (let c of toCheck) {
      if (p !== c && p.distance(c) / 2 <= p.maxDistance() && p.isColliding(c)) {
        p.render(ctx, true, 'red');
        c.render(ctx, true, 'red');

        p.data.collided = true;
        c.data.collided = true;
      }
    }
  }

  const mboundary = {
    x: mouse.left - mouse.radius / 2,
    y: mouse.top - mouse.radius / 2,
    width: mouse.maxDistance() * 2,
    height: mouse.maxDistance() * 2
  };

  const marea = new AreaBoundary(mboundary);
  const mtoCheck = qTree.query(marea);

  for (let c of mtoCheck) {
    if (
      mouse !== c &&
      mouse.distance(c) / 2 <= mouse.maxDistance() &&
      mouse.isColliding(c)
    ) {
      mouse.render(ctx, true, 'red');
      c.render(ctx, true, 'yellow');

      mouse.data.collided = true;
    }
  }

  requestAnimationFrame(loop);
};

window.onload = () => {
  document.body.appendChild(canvas);
  document.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    mouse.x = x;
    mouse.y = y;
  });
  loop();
};
