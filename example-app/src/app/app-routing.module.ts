import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { FibonacciComponent } from "./fibonacci/fibonacci.component";

const routes: Routes = [
  { path: "fibonacci", component: FibonacciComponent },
  { path: "books", component: BooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
