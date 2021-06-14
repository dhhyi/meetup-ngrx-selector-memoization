import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { scan } from "rxjs/operators";
import { bookDemoData } from "../app.initializer";
import { Book, addTagToBookImmutable } from "../store/book";
import { Tag, upsertTag } from "../store/tag";

@Component({
  template: `
    <pre>UPDATES: {{ updates$ | async }}</pre>
    <button mat-raised-button (click)="addRandomTagToBook()">
      Add Random Tag to Book
    </button>

    <pre>{{ obs$ | async | json }}</pre>
  `,
  styles: [],
})
export class IntroductionComponent implements OnInit {
  obs$!: Observable<unknown>;
  updates$!: Observable<number>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.obs$ = this.store;

    this.updates$ = this.obs$.pipe(scan((acc) => (acc += 1), 0));
  }

  addRandomTagToBook() {
    const random = (Math.random() * 1000).toFixed(0);
    const tag: Tag = { id: random, name: random };
    this.store.dispatch(upsertTag({ tag }));
    let index = Math.floor(Math.random() * bookDemoData.length);
    const book = bookDemoData.find((_, i) => i == index) as Book;
    this.store.dispatch(
      addTagToBookImmutable({ bookId: book.id, tagId: tag.id })
    );
  }
}
