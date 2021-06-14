import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { FibonacciComponent } from "./fibonacci/fibonacci.component";
import { IntroductionComponent } from "./introduction/introduction.component";

const routes: Routes = [
  { path: "fibonacci", component: FibonacciComponent },
  { path: "introduction", component: IntroductionComponent },
  { path: "books", component: BooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
