import { interval, merge } from "rxjs";
import { mapTo } from "rxjs/operators";

import { Logger } from "./../utility/logger";
import { StreamsOfNumbers } from "./../utility/streams-of-numbers";


export class LearnMerge {

  private name: string = 'LearnMerge';
  private logger: Logger = new Logger(this.name);

  // import streams => observable<number>
  private streamsOfNumbers = new StreamsOfNumbers();

  //emit outputs from one observable
  public mergedStreams = merge(
    this.streamsOfNumbers.first.pipe(mapTo("1: every 2.5s")),
    this.streamsOfNumbers.second.pipe(mapTo("2: every 2.0s")),
    this.streamsOfNumbers.third.pipe(mapTo("3: every 1.5s")),
    this.streamsOfNumbers.fourth.pipe(mapTo("4: every 1.0s"))
  );

  //output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
  public subscribe = this.mergedStreams.subscribe(val => console.log(val));

  constructor() {
    this.logger.prologue();
    this.unsubscribe();
  }

  unsubscribe() {
    setTimeout(() => {
      this.subscribe.unsubscribe();
      this.logger.epilogue();
    }, 3500);
  }
}