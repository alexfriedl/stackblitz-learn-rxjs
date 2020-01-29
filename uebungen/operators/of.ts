import { of } from "rxjs";

export const LearnOf = () => {
  /**
   * Of Operator converts various other objects
   * and data types into Observables
   *
   * Documentation
   * http://reactivex.io/documentation/operators/from.html
   *
   */
  //emits any number of provided values in sequence
  const source = of(1, 2, 3, 4, 5);
  //output: 1,2,3,4,5
  const subscribe = source.subscribe(val => addItem(val));

  // Just UI
  function addItem(val: any) {
    let node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
    console.log(val);
  }
};
