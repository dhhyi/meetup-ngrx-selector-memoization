import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, interval, Subject } from "rxjs";
import { map, takeUntil, takeWhile } from "rxjs/operators";
import { fibonacciPerf, FibonacciReturnType } from "../utils";

@Component({
  selector: "app-fibonacci",
  templateUrl: "./fibonacci.component.html",
  styles: [
    `
      .fibonacci {
        padding: 10px;
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
