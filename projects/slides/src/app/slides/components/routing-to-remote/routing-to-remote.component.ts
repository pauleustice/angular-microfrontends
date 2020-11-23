import { Component, OnInit } from '@angular/core';

import { StepService } from '../../services/step-service';

@Component({
  selector: 'app-routing-to-remote',
  templateUrl: './routing-to-remote.component.html',
  styleUrls: [ './routing-to-remote.component.scss' ],
})
export class RoutingToRemoteComponent implements OnInit {
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
