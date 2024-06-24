import { Component, EventEmitter, Output } from '@angular/core';
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

  constructor(){}


  sendCharacteristicToParent(characteristic: string): void{

    this.sendCharacteristicToParentEvent.emit(characteristic);
  }
}
