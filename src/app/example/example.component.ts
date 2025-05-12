import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MessageService} from "../message.service";
import {CommonModule} from "@angular/common";
import {DoublePipe} from "../double.pipe";
import { Subscription } from 'rxjs';
import {HighlightTextPipe} from "../highlight-text.pipe";
import {RealTimePipe} from "../real-time.pipe";
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-example',
  imports: [
    ReactiveFormsModule, CommonModule, DoublePipe,RealTimePipe
  ],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {

  testForm = new FormGroup ({
    field: new FormControl(''),
  });


  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.testForm.get('field')?.valueChanges.subscribe(value => {
      if (value) {
        this.messageService.sendText(value);
      }
    // test
      this.highlightForm.get('highlight')?.valueChanges.subscribe(value => {
        console.log('Highlight input:', value);
      });


    });
  }

  numberForm = new FormGroup({
    number: new FormControl(null, [Validators.pattern('^[0-9]*$')]),
  })

// test
  highlightForm = new FormGroup({
    highlight: new FormControl('')
  });
  sentence = 'Hello, world!';

}
