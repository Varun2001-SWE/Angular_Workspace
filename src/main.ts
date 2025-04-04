// import { bootstrapApplication } from '@angular/platform-browser';
// import { Routes } from '@angular/router';
// import { AppComponent } from './app/app.component';
// import { provideRouter } from '@angular/router';
// import { LoginComponent } from './app/auth/login/login.component';
// import { WorkbenchComponent } from './app/workbench/workbench.component';

// const routes: Routes = [
//     { path: '', component: LoginComponent },
//     { path: 'workbench', component: WorkbenchComponent }
//   ];

// bootstrapApplication(AppComponent, {
//     providers: [provideRouter(routes)]
//   }).catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // ✅ Import HttpClient provider
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/auth/login/login.component';
import { WorkbenchComponent } from './app/workbench/workbench.component';
import { WorkbenchResolver } from './app/workbench/workbench.resolver';
import { ModelComponent } from './app/model/model.component';

// Check for PrimeNg in Angular 18


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'workbench', component: WorkbenchComponent, resolve: { cards: WorkbenchResolver } },
  { path: 'model', component: ModelComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient() 
  ]
}).catch(err => console.error(err));
