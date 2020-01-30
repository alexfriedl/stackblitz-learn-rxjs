export class Logger {

  name: string;
  styles: string = `background: #222; 
                    font-weight: bold; 
                    color: #bada55`

  constructor(name) {
    this.name = name;
  }

  prologue() {
    console.log(
      `%c Start ${this.name}`,
      `${this.styles}`
    );
  }

  epilogue() {
    console.log(
      `%c End ${this.name}`,
      `${this.styles}`
    );
  }
}
