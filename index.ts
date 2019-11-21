import { Observable } from 'rxjs';

let counter: number = 1;

const observable = Observable.create((observer: any) => {
  try {
    observer.next('start');
    setInterval(() => {
      observer.next(counter++);
    }, 500);
  } catch (err) {
    observer.error(err);
  }
});

const observer = observable.subscribe(
  (val: any) => addItem(val, 'First '),
  (error: any) => log(error),
);

const observer2 = observable.subscribe(
  (val: any) => addItem(val, 'Second '),
  (error: any) => log(error),
);

observer.add(observer2);

setTimeout(() => {
  observer.unsubscribe();
}, 2500);

function log(val) {
  console.log(val);
}

function addItem(val:any, name) {
  let node = document.createElement('li');
  var textnode = document.createTextNode(name + val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
  console.log(val);
}
