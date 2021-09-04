class Department {
  // private name: string;
  // private id: string;
  protected employees: string[] = [];
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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(text: string) {
    if (!text) {
      throw new Error("Invalid value");
    }
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(employee: string) {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }
  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("ACT", []);
it.describe();

it.addEmployee("Max");
it.addEmployee("Harry");

it.printEmployeeInformation();

const accounting = new AccountingDepartment("d2", []);

// accounting.mostRecentReport = "";
console.log(accounting.mostRecentReport);

accounting.addReport("Something went wrong...");

accounting.printReports();

accounting.addEmployee("Manu");
accounting.addEmployee("Max");

accounting.printEmployeeInformation();
// const accountCopy = { name: "Test", describe: accounting.describe };

// accountCopy.describe();
