import { BehaviorSubject } from "rxjs";
import "rxjs/add/operator/share";

/**
 * BehaviourSubject: the only difference to a Subject is 
 * that it will emit the last value upon 
 * a new observers subscription
 * 
 * This leads to another output
 */
const subject = new BehaviorSubject('First')

// First observer
subject.subscribe(
  fromSubject => addItem('1:' + fromSubject),
  error => addItem(error),
  () => addItem('Completed')
)

// Emit values before second observer has been created
subject.next('First thing sent')

// The second observer (loc 27) is about to subscribe here (because this is the last emitted value, before observer2 is initialized)
subject.next('... Observer 2 is about to subscribe')

// Second observer starts with the last event that has been submitted by the BehaviorSubject (see loc 24)
const observer2 = subject.subscribe(
  fromSubject => addItem('2:' + fromSubject)
)

// Emit values for both observers
subject.next('Second thing sent')
subject.next('Third thing sent')

// Unsubscribe observer2
observer2.unsubscribe()

// Emit value after observer2 has been unsubscribed
subject.next('Final thing sent')


// Just UI
function addItem(val: any) {
  let node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
  console.log(val);
}
