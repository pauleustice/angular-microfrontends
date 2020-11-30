import { Component, OnInit } from '@angular/core';

import { StepService } from '../../services/step-service';

@Component({
  selector: 'app-dependency-versions',
  templateUrl: './dependency-versions.component.html',
  styleUrls: [ './dependency-versions.component.scss' ],
})
export class DependencyVersionsComponent implements OnInit {
  step = 0;
  stepCount = 1;
  stepper = this.stepService.stepGenerator(this.stepCount);

  constructor(
    private stepService: StepService
  ) { }

  ngOnInit(): void {
    this.stepper.next();
  }

  updateStep(direction: number) {
    const { value: step = 0 } = this.stepper.next(direction);
    this.step = step;
  }
}
