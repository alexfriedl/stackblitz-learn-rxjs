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

  // output: 4, 3, 2, 4, 1, 3, 4
  public subscribe = this.mergedStreams.subscribe(val => console.log(val));

  constructor() {
    this.logger.start();
    this.unsubscribe();
  }

  unsubscribe() {
    setTimeout(() => {
      this.subscribe.unsubscribe();
      this.logger.end();
    }, 3500);
  }
}
