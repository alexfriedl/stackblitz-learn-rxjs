import { Observable, interval, merge } from "rxjs";
import { mapTo } from 'rxjs/operators';


export const LearnMerge = () => {

  //emit every 2.5 seconds
  const first = interval(2500);
  //emit every 2 seconds
  const second = interval(2000);
  //emit every 1.5 seconds
  const third = interval(1500);
  //emit every 1 second
  const fourth = interval(1000);

  //emit outputs from one observable
  const example = merge(
    first.pipe(mapTo('FIRST!')),
    second.pipe(mapTo('SECOND!')),
    third.pipe(mapTo('THIRD')),
    fourth.pipe(mapTo('FOURTH'))
  );

  //output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
  const subscribe = example.subscribe(val => console.log(val));

  setTimeout(() => {
    subscribe.unsubscribe();
  }, 2500)





  
  const old = () => {
    /**
     * Merge Operator combines two streams of data
     *
     * Documentation
     * http://reactivex.io/documentation/operators/merge.html
     *
     */
    const observable = Observable.create((observer: any) => {
    observer.next("First");
    setTimeout(() => {
      observer.next("First #2");
    }, 1);
    });

    const observable2 = Observable.create((observer: any) => {
      observer.next("Second");
      observer.next("Second #2");
    });

    const mergedObservable = merge(observable, observable2);

    mergedObservable.subscribe(fromObservables => addItem(fromObservables));

    /**
     * Just UI
     */
    function addItem(val: any) {
      let node = document.createElement("li");
      var textnode = document.createTextNode(val);
      node.appendChild(textnode);
      document.getElementById("output").appendChild(node);
      console.log(val);
    }
  }
};
