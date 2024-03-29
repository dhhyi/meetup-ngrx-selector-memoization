import { Component, OnDestroy } from "@angular/core";
import { interval, Subject } from "rxjs";
import { map, takeUntil, takeWhile } from "rxjs/operators";
import { fibonacciPerf, FibonacciReturnType } from "./fibonacci";

@Component({
  selector: "app-fibonacci",
  templateUrl: "./fibonacci.component.html",
  styles: [
    `
      .fibonacci {
        padding: 10px;
      }
      .mat-raised-button {
        margin-right: 5px;
      }
      .mat-form-field {
        max-width: 50px;
      }
    `,
  ],
})
export class FibonacciComponent implements OnDestroy {
  log: FibonacciReturnType[] = [];
  max: number = 45;

  destroy$ = new Subject();

  increasing() {
    interval(200)
      .pipe(
        takeWhile((val) => val <= this.max),
        takeUntil(this.destroy$)
      )
      .subscribe((val) => {
        this.log.unshift(fibonacciPerf(val));
      });
  }

  decreasing() {
    interval(200)
      .pipe(
        map((val) => this.max - val),
        takeWhile((val) => val > +0),
        takeUntil(this.destroy$)
      )
      .subscribe((val) => {
        this.log.unshift(fibonacciPerf(val));
      });
  }

  clear() {
    this.destroy$.next();
    this.log.splice(0, this.log.length);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
