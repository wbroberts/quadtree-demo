export interface Vector {
  x: number;
  y: number;
}

export interface Point {
  x: number;
  y: number;
  (distance): number;
  (render): void;
}

export interface Square {
  radius: number;
}

export class Point implements Point, Square {
  private center = { x: this.x, y: this.y };

  constructor(public x: number, public y: number, public radius, public data?: any) {}

  get left() {
    return this.x - this.radius;
  }

  get right() {
    return this.x + this.radius;
  }

  get top() {
    return this.y - this.radius;
  }

  get bottom() {
    return this.y + this.radius;
  }

  isColliding(point: Point): boolean {
    return (
      this.x + this.radius > point.x - point.radius &&
      this.x - this.radius < point.x + point.radius &&
      this.y + this.radius > point.y - point.radius &&
      this.y - this.radius < point.y + point.radius
    );
  }

  distance(point: Point): number {
    const xDist = Math.abs(this.x - point.x);
    const yDist = Math.abs(this.y - point.y);

    return Math.floor(Math.sqrt(xDist * xDist + yDist * yDist));
  }

  maxDistance(): number {
    return Math.ceil(Math.sqrt(this.radius * this.radius + this.radius * this.radius));
  }

  move(): void {
    this.x += Math.random() > 0.5 ? -1 : 1;
    this.y += Math.random() > 0.5 ? -1 : 1;
    this.updateCenter(this.x, this.y);
  }

  render(
    ctx: CanvasRenderingContext2D,
    colliding: boolean,
    color: string = 'white',
    radius: number = this.radius
  ) {
    if (colliding) {
      ctx.fillStyle = color;
    } else {
      ctx.fillStyle = !this.data.collided ? color : 'lightseagreen';
    }
    ctx.fillRect(this.left, this.top, radius * 2, radius * 2);

    this.updateCenter(this.x, this.y);
  }

  updateCenter(x, y) {
    this.center.x = x;
    this.center.y = y;
  }
}
