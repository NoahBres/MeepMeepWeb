import { Pose2d, Vector2d } from "roadrunnerjs/geometry";
import { PathBuilder } from "./PathBuilder";

test("Test Tangent Reversal", () => {
  const t = () => {
    new PathBuilder({
      startPose: new Pose2d({ x: 0, y: 0, heading: 0 }),
      startTangent: 0,
    })
      .lineTo(new Vector2d(10.0, 0.0))
      .lineTo(new Vector2d(-10.0, 0.0))
      .build();
  };

  expect(t).toThrow();
});

test("Test Improper Heading Interp Seq", () => {
  const t = () => {
    new PathBuilder({
      startPose: new Pose2d({ x: 0, y: 0, heading: 0 }),
      startTangent: 0,
    })
      .lineToLinearHeading(
        new Pose2d({ x: 10.0, y: 0.0, heading: Math.PI / 2 })
      )
      .lineToLinearHeading(new Pose2d({ x: -10.0, y: 0.0, heading: 0.0 }))
      .build();
  };

  expect(t).toThrow();
});
