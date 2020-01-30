export class Logger {

  name: string;

  constructor(name) {
    this.name = name;
  }
  prologue() {
    console.log(
      `%c Start ${this.name}`,
      "background: #222; font-weight: bold; color: #bada55"
    );
  }

  epilogue() {
    console.log(
      `%c End ${this.name}`,
      "background: #222; font-weight: bold; color: #bada55"
    );
  }
}
