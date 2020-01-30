import { interval, merge } from "rxjs";
import { mapTo } from "rxjs/operators";

export class StreamsOfNumbers {
  //emit every 2.5 seconds
  first = interval(2500);
  //emit every 2 seconds
  second = interval(2000);
  //emit every 1.5 seconds
  third = interval(1500);
  //emit every 1 second
  fourth = interval(1000);
}

export const MergedStreams = () => {
  const streamsOfNumbers = new StreamsOfNumbers();

  //emit outputs from one observable
  return merge(

    streamsOfNumbers.first
      .pipe(mapTo("1: every 2.5s")),

    streamsOfNumbers.second
      .pipe(mapTo("2: every 2.0s")),

    streamsOfNumbers.third
      .pipe(mapTo("3: every 1.5s")),

    streamsOfNumbers.fourth
      .pipe(mapTo("4: every 1.0s"))
  );
}
