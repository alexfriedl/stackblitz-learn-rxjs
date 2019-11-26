import { Observable } from "rxjs";
import 'rxjs/add/operator/share';

let counter: number = 1;
let name: string = "I am good";

// Create an observable
// A stream of values you can observe
// 
// 1. const observable = Observable.create() - create method
// 2. const observable = new Observable() - instantiation
// 3. const observable = fromEvent(document, mouseover) - calling  operators 
const observable = Observable.create((observer: any) => {
  try {
    // next(value) adds value to the stream
    observer.next("Hii");
    observer.next("How are you");
    setInterval(() => {
      observer.next(name);
    }, 2000);
  } catch (err) {
    observer.error(err);
  }
}).share();

// Create an observer
// A subscription of an observable that displays its data
// const observer = observable.subscribe()
// Pass value, error and completed as arguments
setTimeout(() => {
  const observer = observable.subscribe(
    (val: any) => addItem(val),
    (error: any) => addItem(error)
  );
}, 1500);

// Same as above (created a second observer)
setTimeout(() => {
  const observer2 = observable.subscribe((val: any) =>
    addItem("2: " + val)
  );
}, 1000)

// Just UI
function addItem(val: any) {
  let node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
  console.log(val);
}
