import { Injectable } from "@angular/core";
import { Employee } from "./employee.component";
import { ShowWindowService } from "./Show-window.service";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private _employees: Employee[] = [new Employee("a", 111), new Employee("b", 9999)];
    private _characteristics: string[][] = [];


    constructor(private windowService: ShowWindowService){}


    create(employee: Employee): void {

        this._employees.push(

            employee
        );

        this.windowService.showWindow("Employee " + employee.name + " created")
    }

    addCharacteristic(id: number, characteristic: string): void {

        if ( this._characteristics[id] == null ) {

            this._characteristics.splice(id, 0, []);
        }
        
        this._characteristics[id].push(characteristic);
    }

    deleteCharacteristic(id: number) {

        this._characteristics.splice(id, 1);
    }

    get employees(): Employee[]{

        return this._employees;
    }

    get characteristics(): string[][] {

        return this._characteristics;
    }
}