import { Injectable } from "@angular/core";
import { Employee } from "./employee.component";
import { provideCloudinaryLoader } from "@angular/common";
import { ShowWindowService } from "./Show-window.service";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private _employees: Employee[] = [];


    constructor(private windowService: ShowWindowService){}


    create(employee: Employee): void {

        this._employees.push(

            employee
        );

        this.windowService.showWindow("Employee " + employee.name + " created")
    }

    get employees(): Employee[]{

        return this._employees;
    }
}