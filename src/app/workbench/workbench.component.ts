import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


export interface Card {
  Name: string;
  Subtext: number;
}

@Component({
    selector: 'app-workbench',
    imports: [CommonModule, CardComponent, FormsModule, ReactiveFormsModule,ButtonModule],
    templateUrl: './workbench.component.html',
    styleUrl: './workbench.component.css'
})
export class WorkbenchComponent {
  
  cards: Card[] = [];
  filteredCards: Card[] = [];
  isModalOpen: boolean = false;
  cardForm: FormGroup;
  searchQuery: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.cardForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(3)]],
      Subtext: ['', Validators.required]
    });
  }

  savedCards() {
    localStorage.setItem('cards', JSON.stringify(this.cards));
  }

  loadCards() {
    const saved = localStorage.getItem('cards');
    if(saved) {
      this.cards = JSON.parse(saved);
      this.filteredCards = [...this.cards];
    }
  }

  ngOnInit() {
    this.cards = this.route.snapshot.data['cards'] || [];
    this.filteredCards = [...this.cards];
    this.loadCards();
  }

  toggleModal(state: boolean) {
    this.isModalOpen = state;
    if (!state) {
      this.cardForm.reset();
    }
  }

  

  createCard() {
    if (this.cardForm.valid) {
      this.cards.push(this.cardForm.value);
      this.savedCards();
      this.filterCards(); 
      this.toggleModal(false);
    }
  }

  removeCard(index: number) {
    this.cards.splice(index, 1);
    this.filterCards(); 
  }

  filterCards() {
    const query = this.searchQuery.toLowerCase();
    this.filteredCards = this.cards.filter(card =>
      card.Name.toLowerCase().includes(query) 
      // card.Subtext.toLowerCase().includes(query)
    );
  }

  sortCards(order: 'asc' | 'desc') {
    this.sortOrder = order;
    this.filteredCards.sort((a, b) => {
      return order === 'asc' 
        ? a.Name.localeCompare(b.Name) 
        : b.Name.localeCompare(a.Name);
    });
  }

  toModelPage() {
    this.router.navigate(['/model']);
  }

  toLogout() {
    this.router.navigate(['/']);
  }
}



