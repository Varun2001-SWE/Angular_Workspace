import { Component } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { WorkbenchComponent } from './workbench/workbench.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginComponent,WorkbenchComponent,RouterModule,CardComponent], 
})
export class AppComponent {
  
}
