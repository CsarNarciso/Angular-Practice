import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee, IEmployee } from "./employee/employee.component";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataBaseService {

    constructor(private client: HttpClient){}



    saveEmployees(employees: IEmployee[]): Observable<any> {

        return this.client.put(this.firebaseUrl, employees);
    }


    getEmployees(): Observable<IEmployee[]> {

        return this.client.get<IEmployee[]>(this.firebaseUrl);
    }



    private firebaseUrl: string = "https://angulardatabase-2a3dd-default-rtdb.europe-west1.firebasedatabase.app/employees.json";
}