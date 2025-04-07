import { Component } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { WorkbenchComponent } from './workbench/workbench.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [RouterModule]
})
export class AppComponent {
  
}
