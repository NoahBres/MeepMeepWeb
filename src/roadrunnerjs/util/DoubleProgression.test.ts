import { DoubleProgression } from "./DoubleProgression";

test("Normal Split", () => {
  const prog = new DoubleProgression(0, 0.1, 10);

  const [firstHalf, secondHalf] = prog.split(0.25);

  expect(firstHalf.size).toBe(3);
  expect(secondHalf.size).toBe(7);
});

test("Low Split", () => {
  const prog = new DoubleProgression(0, 0.1, 10);

  const [firstHalf, secondHalf] = prog.split(-0.45);

  expect(firstHalf.size).toBe(0);
  expect(secondHalf.size).toBe(10);
});

test("High Split", () => {
  const prog = new DoubleProgression(0, 0.1, 10);

  const [firstHalf, secondHalf] = prog.split(1.5);

  expect(firstHalf.size).toBe(10);
  expect(secondHalf.size).toBe(0);
});

test("Indexing", () => {
  const prog = new DoubleProgression(0, 0.1, 10);

  expect(prog.floorIndex(0.25)).toBe(2);
  expect(prog.ceilIndex(0.25)).toBe(3);
  expect(prog.contains(0.25)).toBe(true);
  expect(prog.contains(-0.55)).toBe(false);
});

test("Iterator", () => {
  const prog = new DoubleProgression(0, 0.1, 10);

  expect(prog.get(prog.size - 1)).toBeCloseTo(0.9);
});

test("Closed Interval Construction", () => {
  const prog = DoubleProgression.fromClosedInterval(0.0, 1.0, 11);

  expect(prog.get(0)).toBeCloseTo(0.0);
  expect(prog.get(prog.size - 1)).toBeCloseTo(1.0);
});
