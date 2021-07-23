import { epsilonEquals, norm } from "roadrunnerjs/util";

/**
 * Class for representing 2D vectors (x and y).
 */
export class Vector2d {
  constructor(public readonly x: number, public readonly y: number) {}

  static polar(r: number, theta: number) {
    return new Vector2d(r * Math.cos(theta), r * Math.sin(theta));
  }

  norm() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  angle() {
    return norm(Math.atan2(this.y, this.x));
  }

  angleBetween(other: Vector2d) {
    return Math.acos(this.dot(other) / (this.norm() * other.norm()));
  }

  plus(other: Vector2d) {
    return new Vector2d(this.x + other.x, this.y + other.y);
  }

  minus(other: Vector2d) {
    return new Vector2d(this.x - other.x, this.y - other.y);
  }

  times(scalar: number) {
    return new Vector2d(scalar * this.x, scalar * this.y);
  }

  div(scalar: number) {
    return new Vector2d(this.x / scalar, this.y / scalar);
  }

  unaryMinus() {
    return new Vector2d(-this.x, -this.y);
  }

  dot(other: Vector2d) {
    return this.x * other.x + this.y * other.y;
  }

  distTo(other: Vector2d) {
    return this.minus(other).norm();
  }

  projectOnto(other: Vector2d) {
    return other.times(this.dot(other)).div(other.dot(other));
  }

  rotated(angle: number) {
    const newX = this.x * Math.cos(angle) - this.y * Math.sin(angle);
    const newY = this.x * Math.sin(angle) + this.y * Math.cos(angle);
    return new Vector2d(newX, newY);
  }

  epsilonEquals(other: Vector2d) {
    return epsilonEquals(this.x, other.x) && epsilonEquals(this.y, other.y);
  }

  toString() {
    return `(${this.x.toFixed(3)}, ${this.y.toFixed(3)})`;
  }
}
