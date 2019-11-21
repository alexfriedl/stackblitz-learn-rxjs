import { Observable } from "rxjs";
import 'rxjs/add/operator/share';

let counter: number = 1;
let name: string = "I am good";

const observable = Observable.create((observer: any) => {
  try {
    observer.next("Hii");
    observer.next("How are you");
    setInterval(() => {
      observer.next(name);
    }, 2000);
  } catch (err) {
    observer.error(err);
  }
}).share();

setTimeout(() => {
  const observer = observable.subscribe(
    (val: any) => addItem(val),
    (error: any) => addItem(error)
  );
}, 1500);

setTimeout(() => {
  const observer2 = observable.subscribe((val: any) =>
    addItem("2: " + val)
  );
}, 1000)

function addItem(val: any) {
  let node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
  console.log(val);
}
