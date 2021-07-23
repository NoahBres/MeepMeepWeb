/**
 * A progression of values of type `Double`.
 */
export class DoubleProgression {
  constructor(
    public readonly start: number,
    public readonly step: number,
    public readonly size: number
  ) {}

  static fromClosedInterval(
    start: number,
    endInclusive: number,
    count: number
  ) {
    const step = count === 0 ? 0 : (endInclusive - start) / (count - 1);
    return new DoubleProgression(start, step, count);
  }

  plus(offset: number) {
    return new DoubleProgression(this.start + offset, this.step, this.size);
  }

  minus(offset: number) {
    return new DoubleProgression(this.start - offset, this.step, this.size);
  }

  unaryMinus() {
    return new DoubleProgression(-this.start, -this.step, this.size);
  }

  isEmpty() {
    return this.size === 0;
  }

  private rawIndex(query: number) {
    return (query - this.start) / this.step;
  }

  floorIndex(query: number) {
    return Math.floor(this.rawIndex(query));
  }

  ceilIndex(query: number) {
    return Math.ceil(this.rawIndex(query));
  }

  get(index: number) {
    return this.start + this.step * index;
  }

  contains(query: number) {
    const rawIndex = this.rawIndex(query);
    return rawIndex < 0 ? false : Math.ceil(rawIndex) < this.size;
  }

  split(sep: number): [DoubleProgression, DoubleProgression] {
    const sepIndex = this.ceilIndex(sep);

    if (sepIndex < 0) {
      return [new DoubleProgression(sep, this.step, 0), this];
    } else if (sepIndex >= this.size) {
      return [this, new DoubleProgression(sep, this.step, 0)];
    } else {
      return [
        new DoubleProgression(this.start, this.step, sepIndex),
        new DoubleProgression(
          this.get(sepIndex),
          this.step,
          this.size - sepIndex
        ),
      ];
    }
  }

  map<T>(callbackfn: (value: number, index: number) => T): T[] {
    const result: T[] = [];

    for (let i = 0; i < this.size; i++) {
      result.push(callbackfn(this.get(i), i));
    }

    return result;
  }

  forEach(callbackfn: (value: number, index: number) => void) {
    for (let i = 0; i < this.size; i++) {
      callbackfn(this.get(i), i);
    }
  }

  toArray() {
    const result: number[] = [];

    for (let i = 0; i < this.size; i++) {
      result.push(this.get(i));
    }

    return result;
  }
}
