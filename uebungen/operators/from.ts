import { from } from "rxjs";
import { map, filter, concatMap, tap, concatAll } from "rxjs/operators";

import { Logger } from "./../utility/logger";
import { JsonPlaceholder } from "./../utility/jsonplaceholder";
import { User } from "./../utility/user.model";

export class LearnFrom {
  // Just for logging
  private name: string = "LearnFrom";
  private logger: Logger = new Logger(this.name);

  private jsonPlaceholder: JsonPlaceholder = new JsonPlaceholder();

  example1() {
    this.logger.log("example 1:", this.name);

    from([1, 2, 3, 4, 5]).subscribe(callback => {
      this.logger.log(callback);
      return callback;
    }),
      this.logger.end();
  }

  example2() {
    this.logger.log("example 2:", this.name);

    from([[1, 2, 3], [4, 9, 5]]).subscribe(callback => {
      callback.map(callback => {
        this.logger.log(callback);
        return callback;
      });
    }),
      this.logger.end();
  }

  example3() {
    this.logger.log("example 3:", this.name);

    from([[1, 2, 3], [4, 9, 5]])
      .pipe(
        concatMap(callback => callback),
        filter(callback => callback === 4)
      )
      .subscribe(callback => {
        this.logger.log(callback);
        return callback;
      }),
      this.logger.end();
  }

  example4() {
    this.logger.log("example 4:", this.name);

    from([
      {
        id: 5,
        name: "Rodriguez",
        age: 23,
        skills: { spanish: "fluent", german: "beginner" }
      },
      {
        id: 4,
        name: "Robertson",
        age: 23,
        skills: { english: "fluent" }
      },
      {
        id: 3,
        name: "Sverev",
        age: 23,
        skills: { german: "fluent", russian: "fluent", english: "fluent" }
      }
    ])
      .pipe(filter(callback => callback.skills.english === "fluent"))
      .subscribe(callback => {
        this.logger.log(callback);
        return callback;
      }),
      this.logger.end();
  }

  example5() {
    this.logger.log("example 5:", this.name);

    from([
      [
        {
          id: 5,
          name: "Rodriguez",
          age: 19,
          skills: { spanish: "fluent", german: "beginner" }
        },
        {
          id: 4,
          name: "Robertson",
          age: 34,
          skills: { english: "fluent" }
        },
        {
          id: 3,
          name: "Sverev",
          age: 56,
          skills: { german: "fluent", russian: "fluent", english: "fluent" }
        }
      ],
      [
        {
          id: 1,
          name: "Buffon",
          age: 23,
          skills: { italian: "fluent" }
        },
        {
          id: 2,
          name: "Henry",
          age: 68,
          skills: { french: "fluent" }
        },
        {
          id: 6,
          name: "Müller",
          age: 58,
          skills: { german: "fluent" }
        }
      ]
    ])
      .pipe(
        concatMap(callback => callback),
        map(callback => {
          return {
            uid: callback.id,
            name: callback.name,
            nameShort: callback.name.charAt(0).toUpperCase(),
            age: callback.age,
            skills: callback.skills
          };
        }),
        filter(callback => callback.age >= 50)
      )
      .subscribe(callback => {
        this.logger.log(callback);
        return callback;
      }),
      this.logger.end();
  }

  example6() {
    this.logger.log("example 6:", this.name);
    const users: User = this.jsonPlaceholder.fetch();

    from(users)
      .pipe(
        concatMap(users => users),
        filter(users => users.id % 2 === 0)
        // map(callback => callback),
        // filter(callback => callback.age >= 50)
      )
      .subscribe(callback => {
        this.logger.log(callback, this.name, ' example6');
        return callback;
      }),
      this.logger.end();
  }

  constructor() {
    this.logger.start();
  }
}
