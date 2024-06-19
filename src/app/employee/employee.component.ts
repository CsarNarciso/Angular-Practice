import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-employee",
    standalone: true,
    imports: [FormsModule, CommonModule,],
    templateUrl: "./employee.component.html",
    styleUrl: "./employee.component.css"
})


export class EmployeeComponent {

    private _employees: Employee[];

    constructor(){

        this._employees = [];
    }

    createEmployee(name: string, salary: number): void{

        this._employees.push(

            new Employee(name, salary)
        );

        alert(this._employees);
    }

    get employees(): Employee[]{

        return this._employees;
    }
}

class Employee {

    private _name: string;
    private _salary: number;

    constructor(name: string, salary: number){

        this._name = name;
        this._salary = salary;
    }

    get name(): string{

        return this._name;
    }

    set name(name: string){

        this._name = name;
    }

    get salary(): number{

        return this._salary;
    }

    set salary(salary: number){

        this._salary = salary;
    }
}
