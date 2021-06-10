import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { merge, Observable, of, timer } from "rxjs";
import { mapTo, switchMap } from "rxjs/operators";
import { authorDemoData, upsertAuthor } from "./store/author";
import { bookDemoData, upsertBook } from "./store/book";
import { BookView, getBookView } from "./store/book-view";
import { tagDemoData, upsertTag } from "./store/tag";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  title = "ngrx-data-views";

  books: { book$: Observable<BookView>; loading$: Observable<boolean> }[];

  constructor(private readonly store: Store<{}>) {}

  ngOnInit(): void {
    this.books = bookDemoData.map((book) => {
      // stream for book selected from store
      const book$ = this.store.pipe(select(getBookView(), book.id));

      return {
        book$,
        // display loading when book was updated
        loading$: book$.pipe(
          switchMap(() => merge(of(true), timer(2000).pipe(mapTo(false))))
        ),
      };
    });
  }

  updateAuthor(authorId: string): void {
    this.store.dispatch(
      upsertAuthor({ author: authorDemoData.find((a) => a.id === authorId) })
    );
  }

  updateBook(bookId: string): void {
    this.store.dispatch(
      upsertBook({ book: bookDemoData.find((a) => a.id === bookId) })
    );
  }

  updateTag(tagId: string): void {
    this.store.dispatch(
      upsertTag({ tag: tagDemoData.find((a) => a.id === tagId) })
    );
  }
}
