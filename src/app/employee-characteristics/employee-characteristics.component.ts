import { Component, EventEmitter, Output } from '@angular/core';
import { ShowWindowService } from '../employee/Show-window.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-characteristics',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './employee-characteristics.component.html',
  styleUrl: './employee-characteristics.component.css'
})
export class EmployeeCharacteristicsComponent {

  @Output() sendCharacteristicToParentEvent = new EventEmitter<string>;

  sent: boolean = false;

  constructor(private windowService: ShowWindowService){}


  sendCharacteristicToParent(characteristic: string): void{

    this.windowService.showWindow("Characteristic " + characteristic + " sent to client")

    this.sendCharacteristicToParentEvent.emit(characteristic);
  }
}
