import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reusable-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reusable-table.component.html',
  styleUrl: './reusable-table.component.css'
})
export class ReusableTableComponent {
  @Input() data: any[] = [];
  @Input() columns: { header: string, field: string }[] = [];

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
