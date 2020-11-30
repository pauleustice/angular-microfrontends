import { Component, OnInit } from '@angular/core';

import { StepService } from '../../services/step-service';

@Component({
  selector: 'app-dependency-mismatches',
  templateUrl: './dependency-mismatches.component.html',
  styleUrls: [ './dependency-mismatches.component.scss' ],
})
export class DependencyMismatchesComponent implements OnInit {
  step = 0;
  stepCount = 2;
  stepper = this.stepService.stepGenerator(this.stepCount);

  constructor(
    private stepService: StepService
  ) { }

  ngOnInit(): void {
    this.stepper.next();
  }

  updateStep(direction: number): void {
    const { value: step = 0 } = this.stepper.next(direction);
    this.step = step;
  }
}
