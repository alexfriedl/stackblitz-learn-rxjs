import { Subject } from "rxjs";
import "rxjs/add/operator/share";

export const LearnSubject = () => {
  /**
 * A Subject is an Observable with a slight difference
  - Subjects emit values - like Observables (i.e. next method)
  - Subscriptions (observers) receive values - like Observables (subscribe method)
  - Difference: Subscriptions (observers) emit values
 * A Subject has also the methods add, remove and unsubscribe
 * A Subject has three different variations
  - BehaviourSubject: the only difference is that it will emit the last value upon a new observers subscription
 */
  const subject = new Subject();

  // First observer
  subject.subscribe(
    fromSubject => addItem("1:" + fromSubject),
    error => addItem(error),
    () => addItem("Completed")
  );

  // Emit values before second observer has been created
  subject.next("First thing sent");

  // The second observer (loc 28) would be about to subscribe, if the Subject was a BehaviorSubject
  subject.next("... Observer 2 is NOT about to subscribe");

  // Second observer
  const observer2 = subject.subscribe(fromSubject =>
    addItem("2:" + fromSubject)
  );

  // Emit values for both observers
  subject.next("Second thing sent");
  subject.next("Third thing sent");

  // Unsubscribe observer2
  observer2.unsubscribe();

  // Emit value after observer2 has been unsubscribed
  subject.next("Final thing sent");

  // Just UI
  function addItem(val: any) {
    let node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
    console.log(val);
  }
};
