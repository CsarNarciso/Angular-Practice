import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee/employee.service';
import { Employee } from '../employee/employee.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(private employeeService: EmployeeService, private router: Router){}


  createEmployee(name: string, salary: number): void{

    this.employeeService.create(new Employee(name, salary));
    this.router.navigate(['']);
  }


  backToHome(): void {

    this.router.navigate(['']);
  }
}
