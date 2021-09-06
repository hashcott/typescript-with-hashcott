// import Handlebars from "handlebars";

interface TypeComponent {
  selector: string;
  template: string;
}

function Component<T extends TypeComponent>(arg: T) {
  return function (constructor?: any) {
    let hookEl = document.querySelector(arg.selector);
    const component = new constructor();

    if (hookEl) {
      // const template = Handlebars.compile(arg.template);
      hookEl.innerHTML = arg.template + component.name;
    }
  };
}

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
