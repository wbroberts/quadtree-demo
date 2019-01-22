import { AreaBoundary, Boundary } from './../area-boundary/area.boundary';
import { Point } from '../point/point';

export class QuadTree {
  private capacity: number = 3;
  private points: Point[] = [];
  private boundary: AreaBoundary;
  private isDivided: boolean = false;

  topLeft?: QuadTree;
  topRight?: QuadTree;
  bottomLeft?: QuadTree;
  bottomRight?: QuadTree;

  constructor(area: Boundary, public ctx: CanvasRenderingContext2D) {
    this.boundary = new AreaBoundary(area);
    // this.draw(ctx);
  }

  divide(): void {
    const halfWidth = this.boundary.width / 2;
    const halfHeight = this.boundary.height / 2;

    this.topLeft = new QuadTree(
      {
        x: this.boundary.x,
        y: this.boundary.y,
        width: halfWidth,
        height: halfHeight
      },
      this.ctx
    );

    this.topRight = new QuadTree(
      {
        x: this.boundary.x + halfWidth,
        y: this.boundary.y,
        width: halfWidth,
        height: halfHeight
      },
      this.ctx
    );

    this.bottomLeft = new QuadTree(
      {
        x: this.boundary.x,
        y: this.boundary.y + halfHeight,
        width: halfWidth,
        height: halfHeight
      },
      this.ctx
    );

    this.bottomRight = new QuadTree(
      {
        x: this.boundary.x + halfWidth,
        y: this.boundary.y + halfHeight,
        width: halfWidth,
        height: halfHeight
      },
      this.ctx
    );

    this.isDivided = true;
    // this.draw(this.ctx);
  }

  insert(point: Point): boolean {
    if (!this.boundary.contains(point)) {
      return false;
    }

    if (this.boundary.contains(point) && !this.isFull()) {
      this.points.push(point);
      return true;
    }

    if (!this.isDivided) {
      this.divide();
    }

    return (
      this.topLeft.insert(point) ||
      this.topRight.insert(point) ||
      this.bottomLeft.insert(point) ||
      this.bottomRight.insert(point)
    );
  }

  isFull(): boolean {
    return this.points.length === this.capacity;
  }

  query(range: AreaBoundary, array: Point[] = []): Point[] {
    if (!this.boundary.intersects(range)) {
      return array;
    }

    for (let p of this.points) {
      if (range.contains(p)) {
        array.push(p);
      }
    }

    if (this.isDivided) {
      this.topLeft.query(range, array);
      this.topRight.query(range, array);
      this.bottomLeft.query(range, array);
      this.bottomRight.query(range, array);
    }

    return array;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.lineWidth = 1;

    !this.isDivided ? (ctx.strokeStyle = 'yellow') : (ctx.strokeStyle = 'red');

    ctx.strokeRect(
      this.boundary.x,
      this.boundary.y,
      this.boundary.width,
      this.boundary.height
    );

    ctx.stroke();
  }
}
