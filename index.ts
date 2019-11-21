import { Observable } from "rxjs";

let counter = 1;
const observable = Observable.create((observer: any) => {
  try {
    setInterval(() => {
      observer.next(counter++);
    }, 500);
  } catch (err) {
    observer.error(err)
  }
});

const observer = observable.subscribe(
  (val:any) => log(val),
  (error:any) => log(error)
);

setTimeout(() => {
  observer.unsubscribe();
}, 1500)

function log(val) {
  console.log(val);
}
