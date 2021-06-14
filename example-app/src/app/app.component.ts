import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="sections">
      <a [routerLink]="['/fibonacci']">Fibonacci</a>
      <a [routerLink]="['/introduction']">Introduction</a>
      <a [routerLink]="['/books']">Books</a>
      <a [routerLink]="['/']">Back</a>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
