import { DoubleProgression, expectDerivEquals } from "roadrunnerjs/util";
import { Knot, QuinticSpline } from "./QuinticSpline";

test("Spline Derivatives", () => {
  const splineSegment = new QuinticSpline(
    new Knot({ x: 0.0, y: 0.0, dx: 20.0, dy: 40.0 }),
    new Knot({ x: 45.0, y: 35.0, dx: 60.0, dy: 10.0 })
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
  const d3x = s.map((e) => splineSegment.thirdDeriv(e).x);

  const y = s.map((e) => splineSegment.get(e).y);
  const dy = s.map((e) => splineSegment.deriv(e).y);
  const d2y = s.map((e) => splineSegment.secondDeriv(e).y);
  const d3y = s.map((e) => splineSegment.thirdDeriv(e).y);

  const tangentAngle = s.map((e) => splineSegment.tangentAngle(e));
  const tangentAngleDeriv = s.map((e) => splineSegment.tangentAngleDeriv(e));
  const tangentAngleSecondDeriv = s.map((e) =>
    splineSegment.tangentAngleSecondDeriv(e)
  );

  const t = s.map((e) => splineSegment.reparam(e));
  const dt = s.map((e) => splineSegment.paramDeriv(e));
  const d2t = s.map((e) => splineSegment.paramSecondDeriv(e));
  const d3t = s.map((e) => splineSegment.paramThirdDeriv(e));

  expectDerivEquals(x, dx, ds, 0.01);
  expectDerivEquals(dx, d2x, ds, 0.01);
  expectDerivEquals(d2x, d3x, ds, 0.01);
  expectDerivEquals(y, dy, ds, 0.01);
  expectDerivEquals(dy, d2y, ds, 0.01);
  expectDerivEquals(d2y, d3y, ds, 0.01);
  expectDerivEquals(tangentAngle, tangentAngleDeriv, ds, 0.0001);
  expectDerivEquals(tangentAngleDeriv, tangentAngleSecondDeriv, ds, 0.0001);
  expectDerivEquals(t, dt, ds, 0.03);
  expectDerivEquals(dt, d2t, ds, 0.02);
  expectDerivEquals(d2t, d3t, ds, 0.01);
});

test("Interpolation", () => {
  const splineSegment = new QuinticSpline(
    new Knot({ x: 0.0, y: 0.0, dx: 20.0, dy: 40.0 }),
    new Knot({ x: 45.0, y: 35.0, dx: 60.0, dy: 10.0 })
  );

  expect(splineSegment.get(0).x).toBeCloseTo(0);
  expect(splineSegment.get(0).y).toBeCloseTo(0);
  expect(splineSegment.get(splineSegment.length()).x).toBeCloseTo(45);
  expect(splineSegment.get(splineSegment.length()).y).toBeCloseTo(35);
});

test.only("Derivative Magnitude Invariance", () => {
  const splineSegment = new QuinticSpline(
    new Knot({ x: 0.0, y: 0.0, dx: 20.0, dy: 40.0 }),
    new Knot({ x: 45.0, y: 35.0, dx: 60.0, dy: 10.0 })
  );

  const splineSegment2 = new QuinticSpline(
    new Knot({ x: 0.0, y: 0.0, dx: 40.0, dy: 80.0 }),
    new Knot({ x: 45.0, y: 35.0, dx: 120.0, dy: 20.0 })
  );

  expect(splineSegment.deriv(0.0).x).toBeCloseTo(splineSegment2.deriv(0.0).x);
  expect(splineSegment.deriv(0.0).y).toBeCloseTo(splineSegment2.deriv(0.0).y);

  expect(splineSegment.deriv(splineSegment.length()).x).toBeCloseTo(
    splineSegment2.deriv(splineSegment.length()).x
  );
  expect(splineSegment.deriv(splineSegment.length()).y).toBeCloseTo(
    splineSegment2.deriv(splineSegment.length()).y
  );

  expect(splineSegment.secondDeriv(0.0).x).toBeCloseTo(
    splineSegment2.secondDeriv(0.0).x
  );
  expect(splineSegment.secondDeriv(0.0).y).toBeCloseTo(
    splineSegment2.secondDeriv(0.0).y
  );
  expect(splineSegment.secondDeriv(splineSegment.length()).x).toBeCloseTo(
    splineSegment2.secondDeriv(splineSegment.length()).x,
    1
  );
  expect(splineSegment.secondDeriv(splineSegment.length()).y).toBeCloseTo(
    splineSegment2.secondDeriv(splineSegment.length()).y,
    1
  );
});
