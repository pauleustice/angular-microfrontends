import { Component, OnInit } from '@angular/core';

import { StepService } from '../../services/step-service';

@Component({
  selector: 'app-configuring-remotes',
  templateUrl: './configuring-remotes.component.html',
  styleUrls: [ './configuring-remotes.component.scss' ],
})
export class ConfiguringRemotesComponent implements OnInit {
  step = 0;
  stepCount = 4;
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
