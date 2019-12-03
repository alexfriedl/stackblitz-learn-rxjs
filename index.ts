import { Observable, fromEvent } from "rxjs";
import "rxjs/add/operator/share";

let name: string = "I am good";

/**
 * @TODO Improve Comments
 */
// Create an observable (beobachtbarer Stream mit Daten)
// A stream of values you can observe
//
// 1. const observable = Observable.create() - create method
// 2. const observable = new Observable() - instantiation
// 3. const observable = fromEvent(document, mouseover) - calling "creation" operators
const observable = Observable.create(
  // The Producer is the subscribe function passed as argument of the create method
  // It produces / emits these values or events (i.e. within next method)
  (observer: any) => {
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
  })

/**
  * @Warm approach
  * https://blog.strongbrew.io/my-favorite-metaphor-for-hot-vs-cold-observables/
  * 
  * @Cold approach: Watching solo (Netflix) 
    - if no one listens, it's lazy, no stream
    - for every listener a new stream is started
  * @Hot approach: Watching public (cinema)
    - when movie starts everybody sees the same thing
    - if you are late, you missed the first part
  * Warm approach: Watching with friends 
    - when movie starts, you and your friends see the same thing
    - if a friend is late, he'll miss the first part
  */

  .share();

/**
 * @Hot approach
 * 
 * Creates an observable from the fromEvent function
 * fromEvent is a creation operator
 */
const observable2 = fromEvent(document, 'mousemove')

// Create an observer
// Reads values coming from the observable being subscribed (subscription)
//
// const observer = observable.subscribe()
// Pass value, error and completed as arguments
const observer1 = observable.subscribe(
  (fromObservable: any) => addItem("1: " + fromObservable),
  (error: any) => addItem(error)
);

// Same as above (created a second observer)
const observer2 = observable.subscribe((fromObservable: any) => addItem("2: " + fromObservable));

// Same as above (created a third observer) within setTimeout
setTimeout(() => {
  const observer3 = observable.subscribe((fromObservable: any) => addItem("3: " + fromObservable))
}, 3000);

// Connect observers
observer1.add(observer2)

// Unsubscribe observers after 6s
setTimeout(() => {
  observer1.unsubscribe();
}, 6001)

// Same as above (crated a fourth observer) within setTimeout
setTimeout(() => {
  const observer4 = observable2.subscribe(
    fromObservable => addItem('4: ' + fromObservable)
  )
})

// Just UI
function addItem(val: any) {
  let node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
  console.log(val);
}
