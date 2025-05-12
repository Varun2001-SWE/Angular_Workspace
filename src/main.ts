
import { bootstrapApplication } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; 
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/auth/login/login.component';
import { WorkbenchComponent } from './app/workbench/workbench.component';
import { WorkbenchResolver } from './app/workbench/workbench.resolver';
import { ModelComponent } from './app/model/model.component';




const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'workbench', component: WorkbenchComponent, resolve: { cards: WorkbenchResolver } },
  { path: 'model', component: ModelComponent }, 
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient() 
  ]
}).catch(err => console.error(err));


// TEST 

// import { bootstrapApplication } from '@angular/platform-browser';
// import { Routes } from '@angular/router';
// import { provideRouter } from '@angular/router';
// import { provideHttpClient } from '@angular/common/http';
// import { provideAnimations } from '@angular/platform-browser/animations'; // ✅ For PrimeNG animations
// import { ApplicationConfig } from '@angular/core';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { providePrimeNG } from 'primeng/config';
// import Material from '@primeng/themes/aura';


// import { AppComponent } from './app/app.component';
// import { LoginComponent } from './app/auth/login/login.component';
// import { WorkbenchComponent } from './app/workbench/workbench.component';
// import { WorkbenchResolver } from './app/workbench/workbench.resolver';
// import { ModelComponent } from './app/model/model.component';

// const routes: Routes = [
//   { path: '', component: LoginComponent },
//   { path: 'workbench', component: WorkbenchComponent, resolve: { cards: WorkbenchResolver } },
//   { path: 'model', component: ModelComponent }
// ];

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes),
//     provideHttpClient(), 
//     provideAnimationsAsync(),
//         providePrimeNG({
//             theme: {
//                 preset: Material
//             }
//         })
//   ]
// }).catch(err => console.error(err));
