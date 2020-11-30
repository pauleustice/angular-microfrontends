import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router, Routes } from '@angular/router';

import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { SLIDES_ROUTES } from './slides/slides.routes';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.scss' ],
})
export class AppComponent implements OnInit, OnDestroy {
  slide = 0;
  allSlides: Routes = SLIDES_ROUTES[0].children.slice(1);
  sub: Subscription;

  constructor(
    private router: Router,
    private store: Store,
  ) {}

  get prevSlide(): Route {
    return this.slide > 0 ? this.allSlides[this.slide - 1] : null;
  }

  get nextSlide(): Route {
    return this.slide < this.allSlides.length ? this.allSlides[this.slide + 1] : null;
  }

  ngOnInit(): void {
    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url.replace('/slides/', '');
        const route = this.allSlides.find(r => r.path === url);

        this.store.dispatch({ type: '[UI] Update Title', title: route.data.title });

        if (route) {
          this.slide = this.allSlides.indexOf(route);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
