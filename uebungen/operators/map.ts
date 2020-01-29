import { Observable } from "rxjs";
import "rxjs/add/operator/map";

/**
 * Map Operator passes each source value
 * through a transformation function to get
 * corresponding output values
 *
 * Documentation
 * http://reactivex.io/documentation/operators/map.html
 *
 */
const observable = Observable.create((observer: any) => {
  observer.next(8);
  setTimeout(() => {
    observer.next(6);
  }, 1);
});

/**
 * Multiplies values being emitted by 10
 */
const observer = observable
  .map((fromObservable: number) => 10 * fromObservable)
  .subscribe((fromObservable: number) => addItem(fromObservable));

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
