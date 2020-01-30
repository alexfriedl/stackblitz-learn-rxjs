export class Logger {

  name: string;
  styles: string = `background: #222; 
                    font-weight: bold; 
                    color: #bada55`

  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(
      `%c Start ${this.name}`,
      `${this.styles}`
    );
  }

  end() {
    console.log(
      `%c End ${this.name}`,
      `${this.styles}`
    );
  }

  log(message, calledByClass?) {
    if (!calledByClass) {
      calledByClass = ''
    }
    console.log(`${calledByClass}`,  message)
  }
}
