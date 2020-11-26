import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectTitle } from './store/ui.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  currentSlide$: Observable<string> = this.store.select(selectTitle);

  constructor(
    private store: Store,
  ) {}
}

