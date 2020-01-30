import { interval, merge } from "rxjs";
import { mapTo } from 'rxjs/operators';

import { StreamsOfNumbers } from '../utility/streams-of-numbers'

export class LearnMerge {

  private streamsOfNumbers = new StreamsOfNumbers();

  //emit outputs from one observable
  public mergedStream = merge(
    this.streamsOfNumbers.first.pipe(mapTo('FIRST!')),
    this.streamsOfNumbers.second.pipe(mapTo('SECOND!')),
    this.streamsOfNumbers.third.pipe(mapTo('THIRD')),
    this.streamsOfNumbers.fourth.pipe(mapTo('FOURTH'))
  );

  //output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
  public subscribe = this.mergedStream.subscribe(val => console.log(val));

  constructor() {
    this.domReady();
  }

  domReady() {
    document.addEventListener('DOMContentLoaded', (event) => {
      this.subscribe;
      this.unsubscribe();
    })
  }

  unsubscribe() {
    setTimeout(() => {
      this.subscribe.unsubscribe();
    }, 2500)
  }
  
};
