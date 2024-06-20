import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee, EmployeeComponent } from '../employee/employee.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShowWindowService } from '../employee/Show-window.service';


@Component({
  selector: 'app-employee-child',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './employee-child.component.html',
  styleUrl: './employee-child.component.css'
})
export class EmployeeChildComponent {

  @Input() employee: Employee = new Employee();
  @Input() i:number = 0;
  @Input() receivedData: string = "";
  @Output() sendToParentEvent = new EventEmitter<string>;

  sent: boolean = false;



  constructor(private windowService: ShowWindowService){}


  sendDataToParent(message: string): void{

    this.windowService.showWindow("Message sent to client")

    this.sendToParentEvent.emit(message);
  }
}
