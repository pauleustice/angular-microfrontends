import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, Routes } from '@angular/router';

import { Subscription } from 'rxjs';

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
  ) {}

  get prevSlide() {
    return this.slide > 0 ? this.allSlides[this.slide - 1] : null;
  }

  get nextSlide() {
    return this.slide < this.allSlides.length ? this.allSlides[this.slide + 1] : null;
  }

  ngOnInit() {
    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url.replace('/slides/', '');
        const route = this.allSlides.find(r => r.path === url);

        window.dispatchEvent(
          new CustomEvent("updateSlideTitle", {
            detail: {
              title: route.data.title,
            },
          }),
        );

        if (route) {
          this.slide = this.allSlides.indexOf(route);
        }
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
