export interface Point {
  x: number;
  y: number;
  data?: any;
}

export class Point implements Point {
  x: number;
  y: number;

  constructor(x: number, y: number, data?: any) {
    this.x = x;
    this.y = y;
    this.data = data;
  }
}
