import { Logger } from "./../utility/logger";

export class JsonPlaceholder {
  private name: string = "JsonPlaceholder";
  private logger: Logger = new Logger(this.name);

  constructor() {
    this.fetch();
  }

  fetch() {
    return new Promise((resolve, reject) => {
      return fetch("https://jsonplaceholder.typicode.com/users").then(
        response => {
          if (response.ok) {
            resolve(response.json());
            this.logger.log(response, this.name, '.fetch()');
          } else {
            const error = new Error("error");
            this.logger.log(error, this.name);
            reject(error);
          }
        },
        error => {
          reject(new Error(error.message));
        }
      );
    });
  }
}