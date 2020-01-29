import { AsyncSubject } from "rxjs";
import "rxjs/add/operator/share";

/**
 * AsyncSubject: only the last value will 
 * be emitted to each of the observers
 * 
 */
const subject = new AsyncSubject()

/**
 * First observer
 */
subject.subscribe(
  fromSubject => addItem('1:' + fromSubject),
  error => addItem(error),
  () => addItem('Completed')
)

/**
 * The setInterval function pushes 
 * a value starting with 1 
 * and being increased by 1 
 * every 100 ms
 */
var i = 1;
setInterval(() => subject.next(i++),100)

/**
 * Second observer initializes after 500 ms
 */
setTimeout(() => {
  var observer2 = subject.subscribe(
    fromSubject => addItem('2: ' + fromSubject)
  )
  /**
   * AsyncSubject only receives values, 
   * if method subject has been called upon the subject
   */
  subject.complete()
}, 500)

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
