import { APP_INITIALIZER, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { Store } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { initData } from "./app.initializer";
import { BooksComponent } from "./books/books.component";
import { FibonacciComponent } from "./fibonacci/fibonacci.component";
import { StateModule } from "./store/state.module";

@NgModule({
  declarations: [AppComponent, BooksComponent, FibonacciComponent],
  imports: [
    BrowserModule,
    StateModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initData,
      deps: [Store],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
