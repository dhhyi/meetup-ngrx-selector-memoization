import { APP_INITIALIZER, NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { Store } from "@ngrx/store";
import { AppComponent } from "./app.component";
import { initData } from "./app.initializer";
import { StateModule } from "./store/state.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StateModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
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
