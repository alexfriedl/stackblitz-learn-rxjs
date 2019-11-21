import { Observable } from "rxjs";

let counter = 1;
const observable = Observable.create((observer: any) => {
  try {
    observer.next('start')
    setInterval(() => {
      observer.next(counter++);
    }, 5);
  } catch (err) {
    observer.error(err);
  }
});

const observer = observable.subscribe(
  (val: any) => addItem(val),
  (error: any) => log(error)
);

setTimeout(() => {
  observer.unsubscribe();
}, 50);

function log(val) {
  console.log(val);
}

function addItem(val: any) {
  let node = document.createElement('li');
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
