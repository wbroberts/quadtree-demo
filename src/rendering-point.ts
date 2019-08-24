export class RenderingPoint {
  private center = { x: this.x, y: this.y };

  constructor (public x: number, public y: number, public radius: number, public data: any) { }

  get left() { return this.x - this.radius }
  get right() { return this.x + this.radius }
  get top() { return this.y - this.radius }
  get bottom() { return this.y + this.radius }

  isColliding(point: RenderingPoint): boolean {
    return (
      this.right >= point.left &&
      this.left <= point.right &&
      this.bottom >= point.top &&
      this.top <= point.bottom
    );
  }

  distance(point: RenderingPoint): number {
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
    color = 'white',
    radius = this.radius
  ) {
    if (colliding) {
      ctx.fillStyle = color;
    } else {
      ctx.fillStyle = color;
    }
    ctx.fillRect(this.left, this.top, radius * 2, radius * 2);

    this.updateCenter(this.x, this.y);
  }

  updateCenter(x: number, y: number) {
    this.center.x = x;
    this.center.y = y;
  }
}