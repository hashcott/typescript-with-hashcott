abstract class Department {
  static fiscalYear = 2021;
  // private name: string;
  // private id: string;
  protected employees: string[] = [];
  constructor(protected readonly id: string, protected name: string) {
    // this.name = n;
    // this.id = id;
    // console.log(this.fiscalYear); not working because this does refer to instance created based on the class
    console.log(Department.fiscalYear);
  }
  static createEmployee(name: string) {
    return { name };
  }
  abstract describe(this: Department): void;

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

  describe() {
    console.log("IT Department - ID: ", this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;
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

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: ", this.id);
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

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting === accounting2);

// accounting.mostRecentReport = "";
console.log(accounting.mostRecentReport);

accounting.addReport("Something went wrong...");

accounting.printReports();

accounting.addEmployee("Manu");
accounting.addEmployee("Max");

accounting.printEmployeeInformation();
// const accountCopy = { name: "Test", describe: accounting.describe };

// accountCopy.describe();
