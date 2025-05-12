import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import data from './data.json';
import { ReusableTableComponent } from '../reusable-table/reusable-table.component';
import {ExampleComponent} from "../example/example.component";
import filteredModels from "./data.json";
import {MessageService} from "../message.service";


@Component({
  selector: 'app-model',
  standalone: true,
  templateUrl: './model.component.html',
  styleUrl: './model.component.css',
  imports: [FormsModule, CommonModule, ReusableTableComponent, ExampleComponent]
})
export class ModelComponent {
  models= data;
  filteredModels = data;

  displayedText:string = '';


  tableReset() {
    this.filteredModels = this.models;
  }



  setText(text:string) {
    this.displayedText = text;
  }

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


  constructor(private router: Router, private messageService: MessageService) {}

  revert() {
    this.router.navigate(['/workbench']);
  }


  message: string = '';


  ngOnInit() {
    this.messageService.message$.subscribe(newMessage => {
      this.message = newMessage;
    });
  }


}
