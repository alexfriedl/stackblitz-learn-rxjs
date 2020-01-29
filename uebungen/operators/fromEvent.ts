import { fromEvent } from "rxjs";
import "rxjs/add/operator/share";

/**
 * Hot approach
 * 
 * Creates an observable from the fromEvent function
 * fromEvent is a creation operator
 */
const observable2 = fromEvent(document, 'mousemove')

// Just UI
function addItem(val: any) {
  let node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
  console.log(val);
}
