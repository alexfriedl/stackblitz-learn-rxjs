import { Observable } from "rxjs";
import { merge } from "rxjs/observable/merge";

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
