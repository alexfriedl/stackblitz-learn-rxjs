import { Logger } from "./../utility/logger";

export class JsonPlaceholder {

  private name: string = 'JsonPlaceholder';
  private logger: Logger = new Logger(this.name);

  constructor() {
    this.fetch();
  }
  
  fetch() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => this.logger.log(json, this.name));
  }
}
