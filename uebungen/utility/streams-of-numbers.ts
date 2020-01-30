import { interval } from "rxjs";

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