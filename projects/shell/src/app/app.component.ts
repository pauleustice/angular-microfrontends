import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  currentSlide = 'Micro-frontends in Angular';

  constructor() {
    window.addEventListener('updateSlideTitle', (e: CustomEvent) => {
      this.currentSlide = e.detail.title;
    });
  }
}

