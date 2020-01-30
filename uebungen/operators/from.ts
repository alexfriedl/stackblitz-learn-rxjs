import { from } from "rxjs";
import { map, filter } from "rxjs/operators";

import { Logger } from "./../utility/logger";

export class LearnFrom { 

  // Just for logging
  private name: string = 'LearnFrom';
  private logger: Logger = new Logger(this.name);

  /**
   * INPUT: [1, 2, 3, 4, 5]
   * OUTPUT: 1, 2, 3, 4, 5
   */
  example1() {
    console.log('example 1:')
    from([1, 2, 3, 4, 5]).subscribe(callback => { 
      console.log(callback)
      return callback;
    }),
    this.logger.epilogue();
  }

  /**
   * INPUT: [[1,2,3], [4,9,5]]
   * OUTPUT (map): 1, 2, 3, 4, 9, 5
   */
  example2() {
    console.log('example 2:')
    from([[1,2,3], [4,9,5]]).subscribe(callback => {
      callback.map(callback => {
        console.log(callback)
        return callback;
      })
    }),
    this.logger.epilogue();
  }

  /**
   * not working properly
   */
  example3() {
    console.log('example 3:')
    from([[1,2,3], [4,9,5]]).subscribe(callback => {
      callback
        .map(callback => callback)
        .filter(callback => callback === 4)
    }),
    this.logger.epilogue();
  }

  constructor() {
    this.logger.prologue();
  }
}