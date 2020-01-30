import { interval, merge } from "rxjs";
import { mapTo } from "rxjs/operators";

import { Logger } from "./../utility/logger";
import { MergedStreams } from "./../utility/streams-of-numbers";


export class LearnMerge {

  // Just for logging
  private name: string = 'LearnMerge';
  private logger: Logger = new Logger(this.name);

  // import streams => observable<number>
  public mergedStreams = MergedStreams();

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