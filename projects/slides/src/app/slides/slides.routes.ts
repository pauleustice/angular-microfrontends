import { Routes } from '@angular/router';

import { ModuleFederationComponent } from './components/module-federation/module-federation.component';
import { MicrofrontendsComponent } from './components/microfrontends/microfrontends.component';
import { LargeApplicationComponent } from './components/large-application/large-application.component';
import { AppComponent } from '../app.component';

export const SLIDES_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'microfrontends',
      },
      {
        path: 'microfrontends',
        component: MicrofrontendsComponent,
        data: { title: 'Intro to Micro-frontends' },
      },
      {
        path: 'large-app',
        component: LargeApplicationComponent,
        data: { title: 'Large applications' },
      },
      {
        path: 'module-federation',
        component: ModuleFederationComponent,
        data: { title: 'What is Module Federation?' },
      },
    ]
  },
];
