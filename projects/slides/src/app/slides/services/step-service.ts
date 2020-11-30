import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor() { }

  *stepGenerator(stepCount): Generator<number> {
    let i = 0;

    while (i < stepCount + 1) {
      const input = yield i;

      switch (input) {
        case -1: {
          if (i > 0) {
            i--;
          }
          break;
        }
        case 1: {
          if (i < stepCount) {
            i++;
          }
          break;
        }
      }
    }
  }
}
