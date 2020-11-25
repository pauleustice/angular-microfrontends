import { Routes } from '@angular/router';

import { ModuleFederationComponent } from './components/module-federation/module-federation.component';
import { MicrofrontendsComponent } from './components/microfrontends/microfrontends.component';
import { LargeApplicationComponent } from './components/large-application/large-application.component';
import { AppComponent } from '../app.component';
import { ConfiguringYarnComponent } from './components/configuring-yarn/configuring-yarn.component';
import { ConfiguringRemotesComponent } from './components/configuring-remotes/configuring-remotes.component';
import { ConfiguringShellComponent } from './components/configuring-shell/configuring-shell.component';
import { RoutingToRemoteComponent } from './components/routing-to-remote/routing-to-remote.component';
import { AsyncBootstrapComponent } from './components/async-bootstrap/async-bootstrap.component';

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
      {
        path: 'configuring-yarn',
        component: ConfiguringYarnComponent,
        data: { title: 'Configuring yarn' },
      },
      {
        path: 'configuring-remotes',
        component: ConfiguringRemotesComponent,
        data: { title: 'Configuring remotes' },
      },
      {
        path: 'configuring-shell',
        component: ConfiguringShellComponent,
        data: { title: 'Configuring the shell' },
      },
      {
        path: 'routing-to-remote',
        component: RoutingToRemoteComponent,
        data: { title: 'Routing to a remote' },
      },
      {
        path: 'async-bootstrap',
        component: AsyncBootstrapComponent,
        data: { title: 'Bootstrap asynchronously' },
      },
    ]
  },
];
