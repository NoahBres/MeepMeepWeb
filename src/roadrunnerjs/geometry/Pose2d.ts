import { epsilonEquals, normDelta, toDegrees } from "roadrunnerjs/util";
import { Vector2d } from "./Vector2d";

type Constructor1 = {
  x: number;
  y: number;
  heading: number;
};

type Constructor2 = {
  pos: Vector2d;
  heading: number;
};

/**
 * Class for representing 2D robot poses (x, y, and heading) and their derivatives.
 */
export class Pose2d {
  readonly x: number;
  readonly y: number;
  readonly heading: number;

  constructor(parameter?: Constructor1 | Constructor2) {
    if (parameter === undefined) {
      this.x = 0;
      this.y = 0;
      this.heading = 0;
    } else if ("pos" in parameter) {
      this.x = parameter.pos.x;
      this.y = parameter.pos.y;
      this.heading = parameter.heading;
    } else {
      this.x = parameter.x;
      this.y = parameter.y;
      this.heading = parameter.heading;
    }
  }

  vec() {
    return new Vector2d(this.x, this.y);
  }

  plus(other: Pose2d) {
    return new Pose2d({
      x: this.x + other.x,
      y: this.y + other.y,
      heading: this.heading + other.heading,
    });
  }

  minus(other: Pose2d) {
    return new Pose2d({
      x: this.x - other.x,
      y: this.y - other.y,
      heading: this.heading - other.heading,
    });
  }

  times(scalar: number) {
    return new Pose2d({
      x: scalar * this.x,
      y: scalar * this.y,
      heading: scalar * this.heading,
    });
  }

  div(scalar: number) {
    return new Pose2d({
      x: this.x / scalar,
      y: this.y / scalar,
      heading: this.heading / scalar,
    });
  }

  unaryMinus() {
    return new Pose2d({ x: -this.x, y: -this.y, heading: -this.heading });
  }

  epsilonEquals(other: Pose2d) {
    return (
      epsilonEquals(this.x, other.x) &&
      epsilonEquals(this.y, other.y) &&
      epsilonEquals(this.heading, other.heading)
    );
  }

  epsilonEqualsHeading(other: Pose2d) {
    return (
      epsilonEquals(this.x, other.x) &&
      epsilonEquals(this.y, other.y) &&
      epsilonEquals(normDelta(this.heading - other.heading), 0.0)
    );
  }

  toString() {
    return `(${this.x.toFixed(3)}, ${this.y.toFixed(3)}, ${toDegrees(
      this.heading
    )})`;
  }
}
