import { SequenceSegment } from "./SequenceSegment";

export class TrajectorySequence {
  readonly sequenceList: readonly SequenceSegment[];

  constructor(sequenceList: SequenceSegment[]) {
    if (sequenceList.length === 0)
      throw new Error("Empty sequence segment exception");

    this.sequenceList = sequenceList;
  }

  start() {
    return this.sequenceList[0].startPose;
  }

  end() {
    return this.sequenceList[this.sequenceList.length - 1].endPose;
  }

  duration() {
    return this.sequenceList.reduce((acc, curr) => acc + curr.duration, 0);
  }

  get(i: number) {
    return this.sequenceList[i];
  }

  size() {
    return this.sequenceList.length;
  }
}
