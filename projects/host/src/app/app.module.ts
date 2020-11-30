import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';

import { HomeComponent } from './home/home.component';
import { uiReducer } from './store/ui.reducer';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    StoreModule.forRoot({
      ui: uiReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
