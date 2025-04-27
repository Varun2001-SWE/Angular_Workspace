import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormControl,FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reusable-table',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reusable-table.component.html',
  styleUrl: './reusable-table.component.css'
})
export class ReusableTableComponent {
  @Input() data: any[] = [];
  @Input() columns: { header: string, field: string }[] = [];

  exampleForm = new FormGroup({
  text: new FormControl('')
});

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
