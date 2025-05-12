import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelComponent } from '../model/model.component';
import {ExampleComponent} from "../example/example.component";


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
  @Output() reset = new EventEmitter<void>();
  selectedRow:any = null;


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

  selectRow(row:any) {
    this.selectedRow = row;
  }

  resetSelection(){
    this.selectedRow = null;
    this.reset.emit();
  }

}
