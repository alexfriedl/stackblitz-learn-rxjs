export class InstanceFromJsonPlaceholder {

  constructor() {
    this.fetch();
  }
  
  fetch() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => console.log(json));
  }
}
