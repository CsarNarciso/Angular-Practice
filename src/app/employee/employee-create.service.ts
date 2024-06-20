import { Injectable } from "@angular/core";
import { Employee } from "./employee.component";
import { provideCloudinaryLoader } from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private _employees: Employee[] = [];

    create(employee: Employee): void {

        this._employees.push(

            employee
        );
    }

    get employees(): Employee[]{

        return this._employees;
    }
}