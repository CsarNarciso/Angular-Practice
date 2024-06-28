import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { EmployeeService } from '../employee/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee/employee.component';
import { DataBaseService } from '../database.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  constructor(private employeeService: EmployeeService, private databaseService: DataBaseService, private router: Router, private request: ActivatedRoute){

    this.request.queryParams.subscribe(params => {
      this.action = params['action']
    });
  }


  update(){

    this.employeeService.employees[this.id] = new Employee(this.name, this.salary);
    this.databaseService.saveEmployees(this.employeeService.employees);
    this.router.navigate(['']);
  }

  delete(){

    this.employeeService.employees.splice(this.id, 1);
    this.employeeService.deleteCharacteristic(this.id);
    this.databaseService.saveEmployees(this.employeeService.employees);
    this.router.navigate(['']);
  }


  action: string = "";
  id: number = this.request.snapshot.params['id'];
  name: string = this.employeeService.employees[this.id]._name;
  salary: number = this.employeeService.employees[this.id]._salary;
}
