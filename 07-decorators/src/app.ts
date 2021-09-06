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
