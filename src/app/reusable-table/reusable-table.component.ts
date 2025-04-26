import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelComponent } from '../model/model.component';


@Component({
  selector: 'app-reusable-table',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reusable-table.component.html',
  styleUrl: './reusable-table.component.css'
})
export class ReusableTableComponent {
  @Input() data: any[] = [];
  @Input() columns: { header: string, field: string }[] = [];
  @Output() inputChange = new EventEmitter<string>();
  
  newForm = new FormGroup ({
    name: new FormControl("")
  });
  
  onInputChange() {
    const nameValue = this.newForm.get('name')?.value || '';
    this.inputChange.emit(nameValue);
  }

  getStatusClass(status: string): string {
    switch ((status || '').toLowerCase()) {
      case 'error':
        return 'status-badge error';
      case 'in-progress':
        return 'status-badge in-progress';
      case 'complete':
        return 'status-badge complete';
      default:
        return '';
    }
  }

  
}
