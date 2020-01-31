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

  log(message, loggedByClass?:string, append?:string) {
    if (!loggedByClass) {
      loggedByClass = ''
    } else {
      loggedByClass = 'LOG by ' + loggedByClass
    }
    if (!append) {
      append = ''
    }
    //console.log(JSON.stringify(message))
    console.log(message, `${loggedByClass}${append}`)
  }
}