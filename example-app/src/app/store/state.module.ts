import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { environment } from "../../environments/environment";
import { appReducer } from "./app.reducer";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateImmutability: true,
        strictStateSerializability: true,
      },
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: [],
})
export class StateModule {}
