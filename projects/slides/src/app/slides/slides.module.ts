import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SLIDES_ROUTES } from './slides.routes';
import { ConsoleComponent } from './components/console/console.component';
import { ModuleFederationComponent } from './components/module-federation/module-federation.component';
import { MicrofrontendsComponent } from './components/microfrontends/microfrontends.component';
import { LargeApplicationComponent } from './components/large-application/large-application.component';
import { ConfiguringYarnComponent } from './components/configuring-yarn/configuring-yarn.component';
import { AppComponent } from '../app.component';
import { ConfiguringRemotesComponent } from './components/configuring-remotes/configuring-remotes.component';
import { ConfiguringShellComponent } from './components/configuring-shell/configuring-shell.component';
import { RoutingToRemoteComponent } from './components/routing-to-remote/routing-to-remote.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SLIDES_ROUTES),
  ],
  declarations: [
    AppComponent,
    ConsoleComponent,
    MicrofrontendsComponent,
    LargeApplicationComponent,
    ModuleFederationComponent,
    ConfiguringYarnComponent,
    ConfiguringRemotesComponent,
    ConfiguringShellComponent,
    RoutingToRemoteComponent,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class SlidesModule { }
