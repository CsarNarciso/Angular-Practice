import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EmployeeChildComponent } from "../employee-child/employee-child.component";
import { EmployeeService } from "./employee.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
    selector: "app-employee",
    standalone: true,
    imports: [FormsModule, CommonModule,EmployeeChildComponent, HttpClientModule, ],
    templateUrl: "./employee.component.html",
    styleUrl: "./employee.component.css"
})


export class EmployeeComponent {


    constructor(private employeeService: EmployeeService){

        this.employeeService.loadEmployees();
    }


    createEmployee(name: string, salary: number): void{

        this.employeeService.create(new Employee(name, salary));
    }


    get employees(): IEmployee[] {

        return this.employeeService.employees;
    }
}



export interface IEmployee {

    _name: string;
    _salary: number;
}





export class Employee {

    constructor(name?: string, salary?: number) {
        this._name = (name != null) ? name : ""; 
        this._salary = (salary != null) ? salary : 0;
    }




    get name(): string {

        return this._name;
    }

    set name(name: string) {

        this._name = name;
    }

    get salary(): number {

        return this._salary;
    }

    set salary(salary: number) {

        this._salary = salary;
    }



    _name: string;
    _salary: number;
}
