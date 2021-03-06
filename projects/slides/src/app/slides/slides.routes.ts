import { Routes } from '@angular/router';

import { ModuleFederationComponent } from './components/module-federation/module-federation.component';
import { MicrofrontendsComponent } from './components/microfrontends/microfrontends.component';
import { LargeApplicationComponent } from './components/large-application/large-application.component';
import { AppComponent } from '../app.component';
import { ConfiguringYarnComponent } from './components/configuring-yarn/configuring-yarn.component';
import { ConfiguringRemotesComponent } from './components/configuring-remotes/configuring-remotes.component';
import { ConfiguringHostComponent } from './components/configuring-host/configuring-host.component';
import { RoutingToRemoteComponent } from './components/routing-to-remote/routing-to-remote.component';
import { AsyncBootstrapComponent } from './components/async-bootstrap/async-bootstrap.component';
import { InterModuleCommunicationComponent } from './components/communication/inter-module-communication.component';
import { CodingItComponent } from './components/coding-it/coding-it.component';
import { CustomEventsNgrxComponent } from './components/custom-events-ngrx/custom-events-ngrx.component';
import { DependencyVersionsComponent } from './components/dependency-versions/dependency-versions.component';
import { DependencyMismatchesComponent } from './components/dependency-mismatches/dependency-mismatches.component';
import { DependenciesComponent } from './components/dependencies/dependencies.component';
import { UsefulResourcesComponent } from './components/useful-resources/useful-resources.component';

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
        path: 'coding-it',
        component: CodingItComponent,
        data: { title: 'Coding it' },
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
        path: 'configuring-host',
        component: ConfiguringHostComponent,
        data: { title: 'Configuring the host' },
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
      {
        path: 'dependencies',
        component: DependenciesComponent,
        data: { title: 'Dependencies' },
      },
      {
        path: 'dependency-versions',
        component: DependencyVersionsComponent,
        data: { title: 'Dependency versions' },
      },
      {
        path: 'dependency-mismatches',
        component: DependencyMismatchesComponent,
        data: { title: 'Dependency mismatches' },
      },
      {
        path: 'communication',
        component: InterModuleCommunicationComponent,
        data: { title: 'Inter-module communication' },
      },
      {
        path: 'custom-events-ngrx',
        component: CustomEventsNgrxComponent,
        data: { title: 'Pub/sub and NgRx' },
      },
      {
        path: 'useful-resources',
        component: UsefulResourcesComponent,
        data: { title: 'Useful resources' },
      },
    ]
  },
];
