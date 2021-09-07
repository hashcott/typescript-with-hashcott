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

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
