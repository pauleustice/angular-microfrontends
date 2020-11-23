import { Component, OnInit } from '@angular/core';

import { StepService } from '../../services/step-service';

@Component({
  selector: 'app-configuring-shell',
  templateUrl: './configuring-shell.component.html',
  styleUrls: [ './configuring-shell.component.scss' ],
})
export class ConfiguringShellComponent implements OnInit {
  step = 0;
  stepCount = 3;
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
