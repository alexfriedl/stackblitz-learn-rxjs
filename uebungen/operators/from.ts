import { from } from "rxjs";
import { map, filter } from "rxjs/operators";

export class LearnFrom { 

  /**
   * INPUT: [1, 2, 3, 4, 5]
   * OUTPUT: 1, 2, 3, 4, 5
   */
  example1() {
    console.log('example 1:')
    from([1, 2, 3, 4, 5]).subscribe(callback => { 
      console.log(callback)
      return callback;
    })
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
    })
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
    })
  }
}