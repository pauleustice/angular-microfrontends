import { Component, OnInit } from '@angular/core';

import { StepService } from '../../services/step-service';

@Component({
  selector: 'app-configuring-host',
  templateUrl: './configuring-host.component.html',
  styleUrls: [ './configuring-host.component.scss' ],
})
export class ConfiguringHostComponent implements OnInit {
  step = 0;
  stepCount = 3;
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
