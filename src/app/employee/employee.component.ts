import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EmployeeChildComponent } from "../employee-child/employee-child.component";
import { EmployeeService } from "./employee-create.service";
import { ShowWindowService } from "./Show-window.service";

@Component({
    selector: "app-employee",
    standalone: true,
    imports: [FormsModule, CommonModule,EmployeeChildComponent,],
    templateUrl: "./employee.component.html",
    styleUrl: "./employee.component.css"
})


export class EmployeeComponent {


    constructor(private employeeService: EmployeeService, private windowService: ShowWindowService){}


    createEmployee(name: string, salary: number): void{

        this.windowService.showWindow("Employee " + name + " created")

        this.employeeService.create(new Employee(name, salary));
    }


    get employees(): Employee[] {

        return this.employeeService.employees;
    }


    //Sharing data beetwen components lesson
    receivedData: string = "";

    receiveDataFromChild(message: string): void{

        this.receivedData = message;
    }
}








export class Employee {

    private _name: string;
    private _salary: number;

    constructor(name?: string, salary?: number){

        this._name = name != null ? name : "";
        this._salary = salary != null ? salary : 0;
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
