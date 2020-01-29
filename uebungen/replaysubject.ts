import { ReplaySubject } from "rxjs";
import "rxjs/add/operator/share";

export const LearnReplaySubject = () => {
  /**
   * ReplaySubject: the only difference
   * to a BehaviorSubject is that you can specify
   * the number of values being emitted upon
   * a new observers subscription
   *
   * With the first argument (2) you can specify
   * the number of values being emitted
   * With the second argument (300) you can specify a buffer time
   * example here: https://www.youtube.com/watch?v=PhggNGsSQyg 37:45min
   */
  const subject = new ReplaySubject(2, 300);

  /**
   * First observer
   */
  subject.subscribe(
    fromSubject => addItem("1:" + fromSubject),
    error => addItem(error),
    () => addItem("Completed")
  );

  /**
   * Emit values before second observer
   * has been created
   */
  subject.next("First thing sent");

  /**
   * The second observer (loc 27) is about
   * to subscribe here, because this is
   * the specified amount of events (2)
   * before observer2 is initialized
   */
  subject.next("Another value that has been sent");
  subject.next("... Observer 2 is about to subscribe");

  /**
   * Second observer starts with the
   * specified amount (2) of events that
   * has been submitted by
   * the BehaviorSubject (see loc 24)
   */
  const observer2 = subject.subscribe(fromSubject =>
    addItem("2:" + fromSubject)
  );

  /**
   * Emit values for both observers
   */
  subject.next("Second thing sent");
  subject.next("Third thing sent");

  // Unsubscribe observer2
  observer2.unsubscribe();

  /**
   * Emit value after observer2
   * has been unsubscribed
   */
  subject.next("Final thing sent");

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
};
