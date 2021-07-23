import { DoubleProgression, expectContinuous } from "roadrunnerjs/util";
import { MotionProfile } from "./MotionProfile";
import {
  generateMotionProfile,
  generateSimpleMotionProfile,
} from "./MotionProfileGenerator";
import { MotionState } from "./MotionState";

const RESOLUTION = 1000;

function testProfile(
  start: MotionState,
  goal: MotionState,
  profile: MotionProfile,
  verifyAccel: boolean = false
) {
  // verify start state satisfaction
  expect(start.x).toBeCloseTo(profile.start().x);
  expect(start.v).toBeCloseTo(profile.start().v);

  if (verifyAccel) {
    expect(start.a).toBeCloseTo(profile.start().a);
  }

  // verify goal state satisfaction
  expect(goal.x).toBeCloseTo(profile.end().x);
  expect(goal.v).toBeCloseTo(profile.end().v);
  if (verifyAccel) {
    expect(goal.a).toBeCloseTo(profile.end().a);
  }

  // verify continuity
  const t = DoubleProgression.fromClosedInterval(
    0.0,
    profile.duration(),
    RESOLUTION
  );
  expectContinuous(
    t.map((e) => profile.get(e).x),
    1.0
  );
  expectContinuous(
    t.map((e) => profile.get(e).v),
    1.0
  );
  if (verifyAccel) {
    expectContinuous(
      t.map((e) => profile.get(e).a),
      1.0
    );
  }
}

// simple (i.e., constant max vel/accel) accel-limited tests

test("Test Simple Triangle", () => {
  testProfile(
    new MotionState(0.0, 0.0, 0.0),
    new MotionState(10.0, 0.0, 0.0),
    generateSimpleMotionProfile(
      new MotionState(0.0, 0.0, 0.0),
      new MotionState(10.0, 0.0, 0.0),
      1000.0,
      5.0
    )
  );
});

test("Test Simple Trap", () => {
  testProfile(
    new MotionState(0.0, 0.0, 0.0),
    new MotionState(10.0, 0.0, 0.0),
    generateSimpleMotionProfile(
      new MotionState(0.0, 0.0, 0.0),
      new MotionState(10.0, 0.0, 0.0),
      5.0,
      5.0
    )
  );
});

test("Test Simple Triangle Starting Offset", () => {
  testProfile(
    new MotionState(5.0, 0.0, 0.0),
    new MotionState(15.0, 0.0, 0.0),
    generateSimpleMotionProfile(
      new MotionState(5.0, 0.0, 0.0),
      new MotionState(15.0, 0.0, 0.0),
      1000.0,
      5.0
    )
  );
});

test("Test Simple Triangle Reversed", () => {
  testProfile(
    new MotionState(10.0, 0.0, 0.0),
    new MotionState(0.0, 0.0, 0.0),
    generateSimpleMotionProfile(
      new MotionState(10.0, 0.0, 0.0),
      new MotionState(0.0, 0.0, 0.0),
      1000.0,
      5.0
    )
  );
});

test("Test Simple Triangle Starting Offset Reversed", () => {
  testProfile(
    new MotionState(15.0, 0.0, 0.0),
    new MotionState(5.0, 0.0, 0.0),
    generateSimpleMotionProfile(
      new MotionState(15.0, 0.0, 0.0),
      new MotionState(5.0, 0.0, 0.0),
      1000.0,
      5.0
    )
  );
});

test("Test Simple Constraint Violation", () => {
  testProfile(
    new MotionState(0.0, 60.0, 0.0),
    new MotionState(10.0, 0.0, 0.0),
    generateSimpleMotionProfile(
      new MotionState(0.0, 60.0, 0.0),
      new MotionState(10.0, 0.0, 0.0),
      1000.0,
      5.0
    )
  );
});

// complex (i.e., time-varying constraints) accel-limited tests

test("Test Complex", () => {
  testProfile(
    new MotionState(0.0, 0.0, 0.0),
    new MotionState(10.0, 0.0, 0.0),
    generateMotionProfile(
      new MotionState(0.0, 0.0, 0.0),
      new MotionState(10.0, 0.0, 0.0),
      { get: (s) => Math.pow(s - 5.0, 4.0) + 1.0 },
      { get: (s) => 5.0 }
    )
  );
});

test("Test Complex 2", () => {
  testProfile(
    new MotionState(0.0, 0.0, 0.0),
    new MotionState(10.0, 0.0, 0.0),
    generateMotionProfile(
      new MotionState(0.0, 0.0, 0.0),
      new MotionState(10.0, 0.0, 0.0),
      { get: (s) => Math.pow(s - 5.0, 4.0) + 1.0 },
      { get: (s) => Math.min(Math.pow(-5.0, 4.0) + 1.0, 10.0) }
    )
  );
});

test("Test Complex 2 Reversed", () => {
  testProfile(
    new MotionState(10.0, 0.0, 0.0),
    new MotionState(0.0, 0.0, 0.0),
    generateMotionProfile(
      new MotionState(10.0, 0.0, 0.0),
      new MotionState(0.0, 0.0, 0.0),
      { get: (s) => Math.pow(s - 5.0, 4.0) + 1.0 },
      { get: (s) => Math.min(Math.pow(s - 5.0, 4.0) + 1.0, 10.0) }
    )
  );
});

// simple jerk-limited tests

test("Test For Docs", () => {
  testProfile(
    new MotionState(0.0, 0.0, 0.0),
    new MotionState(60.0, 0.0, 0.0),
    generateSimpleMotionProfile(
      new MotionState(0.0, 0.0, 0.0),
      new MotionState(60.0, 0.0, 0.0),
      25.0,
      40.0,
      100.0
    ),
    true
  );
});

test("Jerk Limited", () => {
  testProfile(
    new MotionState(0.0, 50.0, -25.0),
    new MotionState(100.0, -5.0, 20.0),
    generateSimpleMotionProfile(
      new MotionState(0.0, 50.0, -25.0),
      new MotionState(100.0, -5.0, 20.0),
      15.0,
      30.0,
      30.0
    ),
    true
  );
});

test("Jerk Limited Short", () => {
  testProfile(
    new MotionState(0.0, 0.0, 0.0),
    new MotionState(10.0, 0.0, 0.0),
    generateSimpleMotionProfile(
      new MotionState(0.0, 0.0, 0.0),
      new MotionState(10.0, 0.0, 0.0),
      15.0,
      30.0,
      30.0
    ),
    true
  );
});

test("Jerk Limited Long", () => {
  testProfile(
    new MotionState(0.0, 0.0, 0.0),
    new MotionState(100.0, 0.0, 0.0),
    generateSimpleMotionProfile(
      new MotionState(0.0, 0.0, 0.0),
      new MotionState(100.0, 0.0, 0.0),
      15.0,
      30.0,
      30.0
    ),
    true
  );
});

test("Jerk Limited Constraint Violation", () => {
  testProfile(
    new MotionState(0.0, 10.0),
    new MotionState(1.0, 0.0),
    generateSimpleMotionProfile(
      new MotionState(0.0, 10.0),
      new MotionState(1.0, 0.0),
      15.0,
      30.0,
      40.0
    )
  );
});
