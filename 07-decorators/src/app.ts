function Logger(logging: string) {
  console.log("LOGGER FACTORY");

  return function (constructor: Function) {
    console.log(logging);
    console.log(constructor);
  };
}

interface TypeComponent {
  selector: string;
  template: string;
}

function Component<T extends TypeComponent>(arg: T) {
  console.log("COMPONENT FACTORY");
  return function (constructor?: any) {
    let hookEl = document.querySelector(arg.selector);
    const component = new constructor();
    if (hookEl) {
      // const template = Handlebars.compile(arg.template);
      hookEl.innerHTML = arg.template + component.name;
    }
    console.log("Component Rendered");
  };
}
@Logger("Person class logger")
@Component({
  selector: "#app",
  template: `"Name: {{ name }}"`,
})
class AppComponent {
  name = "Harry";
  test() {
    console.log("OK");
  }
}

const app = new AppComponent();

console.log(app.name);

function Log(target: any, propertyName: string | Symbol) {
  console.log("Logging...");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
