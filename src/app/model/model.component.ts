import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import data from './data.json';
import { ReusableTableComponent } from '../reusable-table/reusable-table.component';


@Component({
  selector: 'app-model',
  standalone: true,
  templateUrl: './model.component.html',
  styleUrl: './model.component.css',
  imports: [FormsModule,CommonModule,ReusableTableComponent]
})
export class ModelComponent {
  models= data;
  filteredModels = data;
  
  inputName: string = '';
  
  columns = [
    { header: 'Name', field: 'name' },
    { header: 'Created By', field: 'createdBy' },
    { header: 'Description', field: 'description' },
    { header: 'Status', field: 'status' }
  ];

  filterByStatus(status: string) {
    this.filteredModels =
      status === 'all' ? this.models : this.models.filter(model => model.status === status);
  }


  constructor(private router: Router) {}

  revert() {
    this.router.navigate(['/workbench']);
  }

  onInputChange(name: string) {
    this.inputName = name;
  }
  
}
