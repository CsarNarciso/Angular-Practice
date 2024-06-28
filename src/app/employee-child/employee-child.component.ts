import { Component, Input } from '@angular/core';
import { Employee, IEmployee } from '../employee/employee.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeCharacteristicsComponent } from '../employee-characteristics/employee-characteristics.component';
import { Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../employee/employee.service';
import { ShowWindowService } from '../employee/Show-window.service';

@Component({
  selector: 'app-employee-child',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule, EmployeeCharacteristicsComponent,],
  templateUrl: './employee-child.component.html',
  styleUrl: './employee-child.component.css'
})
export class EmployeeChildComponent {

  @Input() employee:IEmployee = new Employee();
  @Input() id:number = 0;


  constructor(private router: Router, private employeeService: EmployeeService, private windowService: ShowWindowService){}


  routeToUpdateComponent(): void {

    this.router.navigate(['/update', this.id]);
  }

  //Sharing data beetwen components lesson
  receiveCharacteristicFromChild(characteristic: string): void {

    this.employeeService.addCharacteristic(this.id, characteristic);
    
    this.windowService.showWindow("Characteristic " + this.characteristics[this.id] + " added");
  }
  
  get characteristics(): string[] {

    return this.employeeService.characteristics[this.id];
  }
}
