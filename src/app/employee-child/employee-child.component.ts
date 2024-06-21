import { Component, Input } from '@angular/core';
import { Employee } from '../employee/employee.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeCharacteristicsComponent } from '../employee-characteristics/employee-characteristics.component';


@Component({
  selector: 'app-employee-child',
  standalone: true,
  imports: [FormsModule,CommonModule,EmployeeCharacteristicsComponent,],
  templateUrl: './employee-child.component.html',
  styleUrl: './employee-child.component.css'
})
export class EmployeeChildComponent {

  @Input() employee: Employee = new Employee();
  @Input() i:number = 0;


  //Sharing data beetwen components lesson
  characteristics: string[] = [];

  receiveCharacteristicFromChild(characteristic: string): void {

    this.characteristics.push(characteristic);
  }
}
