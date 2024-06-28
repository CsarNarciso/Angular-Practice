import { Injectable } from "@angular/core";
import { Employee, IEmployee } from "./employee.component";
import { ShowWindowService } from "./Show-window.service";
import { DataBaseService } from "../database.service";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {


    constructor(private windowService: ShowWindowService, private databaseService: DataBaseService){}




    create(employee: IEmployee): void {

        this._employees.push(

            employee
        );

        this.databaseService.saveEmployees(this._employees).subscribe(

            next => {
                console.log("Employee saved in BBDD!");
            }
        );

        this.windowService.showWindow("Employee " + employee._name + " saved in DB")
    }


    loadEmployees(): void {
        
        this.databaseService.getEmployees().subscribe(

            employees => {

                console.log("Fetching employees... ", employees);
                this._employees = employees;
            }
        );
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






    get employees(): IEmployee[] {

        return this._employees;
    }

    get characteristics(): string[][] {
        return this._characteristics;
    }


    private _employees: IEmployee[] = [];
    private _characteristics: string[][] = [];
}