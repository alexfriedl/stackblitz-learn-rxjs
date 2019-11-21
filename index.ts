import { Observable } from 'rxjs';

let counter = 0;
const observable = Observable.create( (observer:any) => {
  observer.next('first')
  setInterval(() => {
    observer.next(counter++)
  }, 1000)
})

observable.subscribe((val) => {
  if(val === 1) {
    log(val);
  }
})


function log(val) {
  console.log(val)
}