import { Component } from '@angular/core';

@Component({
  selector: 'app-large-app',
  templateUrl: './large-application.component.html',
  styleUrls: [ './large-application.component.scss', '../../../../diagrams.scss' ],
})
export class LargeApplicationComponent {
  example = 0;

  constructor() { }
}
