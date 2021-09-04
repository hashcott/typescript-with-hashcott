class Department {
  // private name: string;
  // private id: string;
  private employees: string[] = [];
  constructor(private readonly id: string, private name: string) {
    // this.name = n;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(`Department: ${this.id} ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("ACT", "Accounting");
accounting.describe();

accounting.addEmployee("Max");
accounting.addEmployee("Harry");

accounting.printEmployeeInformation();
// const accountCopy = { name: "Test", describe: accounting.describe };

// accountCopy.describe();
