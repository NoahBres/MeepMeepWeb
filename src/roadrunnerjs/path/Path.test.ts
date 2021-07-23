import { Knot, QuinticSpline } from "./QuinticSpline";
import { Path } from "./Path";
import { PathSegment } from "./PathSegment";
import { DoubleProgression, expectDerivEquals } from "roadrunnerjs/util";

test("Path Derivatives", () => {
  const splineSegment = new Path(
    new PathSegment(
      new QuinticSpline(
        new Knot({ x: 0.0, y: 0.0, dx: 20.0, dy: 40.0 }),
        new Knot({ x: 45.0, y: 35.0, dx: 60.0, dy: 10.0 })
      )
    )
  );

  const resolution = 1000;
  const s = DoubleProgression.fromClosedInterval(
    0.0,
    splineSegment.length(),
    resolution
  );
  const ds = s.step;

  const x = s.map((e) => splineSegment.get(e).x);
  const dx = s.map((e) => splineSegment.deriv(e).x);
  const d2x = s.map((e) => splineSegment.secondDeriv(e).x);

  const y = s.map((e) => splineSegment.get(e).y);
  const dy = s.map((e) => splineSegment.deriv(e).y);
  const d2y = s.map((e) => splineSegment.secondDeriv(e).y);

  const heading = s.map((e) => splineSegment.get(e).heading);
  const headingDeriv = s.map((e) => splineSegment.deriv(e).heading);
  const headingSecondDeriv = s.map((e) => splineSegment.secondDeriv(e).heading);

  expectDerivEquals(x, dx, ds, 0.01);
  expectDerivEquals(dx, d2x, ds, 0.01);

  expectDerivEquals(y, dy, ds, 0.01);
  expectDerivEquals(dy, d2y, ds, 0.01);

  expectDerivEquals(heading, headingDeriv, ds, 0.01);
  expectDerivEquals(headingDeriv, headingSecondDeriv, ds, 0.01);
});
