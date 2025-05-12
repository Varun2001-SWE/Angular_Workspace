import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DivideByHundredPipe } from '../divide-by-hundred.pipe';
import { Router } from '@angular/router';
import {DisplayPipe} from "../display.pipe";

@Component({
    selector: 'app-card',
    imports: [CommonModule, FormsModule, DisplayPipe],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css'
})
export class CardComponent {

  // Added Inputs and Outputs for card to communicate with workbench Component

  @Input() isInputCard: boolean = false;
  @Input() card: { Name: string; Subtext: number } | undefined;
  @Output() openModalEvent = new EventEmitter<void>();
  @Output() removeCardEvent = new EventEmitter<number>();

  openModal() {
    this.openModalEvent.emit();
  }

  removeCard() {
    this.removeCardEvent.emit();
  }

  constructor(private router: Router) {}

  toModelPage() {
    this.router.navigate(['/model']);
  }

}
