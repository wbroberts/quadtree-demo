import { Point, Vector } from '../point/point';

export interface Boundary {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface AreaBoundary {
  center: Vector;
  width: number;
  height: number;
  (contains: Point): boolean;
  (intersects: AreaBoundary): boolean;
}

export class AreaBoundary implements AreaBoundary {
  center: Vector;
  width: number;
  height: number;
  x: number;
  y: number;

  constructor(area: Boundary) {
    this.width = area.width;
    this.height = area.height;
    this.x = area.x;
    this.y = area.y;

    this.center = {
      x: (this.x + this.width) / 2,
      y: (this.y + this.height) / 2
    };
  }

  contains(point: Point): boolean {
    const left = this.x;
    const right = this.x + this.width;
    const top = this.y;
    const bottom = this.y + this.height;

    return point.x >= left && point.x <= right && point.y >= top && point.y <= bottom;
  }

  intersects(range: AreaBoundary) {
    return !(
      range.x > this.x + this.width ||
      range.y > this.y + this.height ||
      range.x + range.width < this.x ||
      range.y + range.height < this.y
    );
  }
}
