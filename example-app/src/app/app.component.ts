import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { merge, Observable, of, timer } from "rxjs";
import { mapTo, switchMap } from "rxjs/operators";
import { authorDemoData, upsertAuthor } from "./store/author";
import { bookDemoData, upsertBook } from "./store/book";
import { BookView, getBookView } from "./store/book-view";
import { tagDemoData, upsertTag } from "./store/tag";

interface BookViewWithLoading {
  book$: Observable<BookView | undefined>;
  loading$: Observable<boolean>;
}

function wrapLoading(
  book$: Observable<BookView | undefined>
): BookViewWithLoading {
  return {
    book$,
    // display loading when book was updated
    loading$: book$.pipe(
      switchMap(() => merge(of(true), timer(2000).pipe(mapTo(false))))
    ),
  };
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  title = "ngrx-selector-memoization";

  books!: BookViewWithLoading[];

  constructor(private readonly store: Store<{}>) {}

  ngOnInit(): void {
    this.books = bookDemoData
      .map((book) => book.id)
      .map((id) => this.store.pipe(select(getBookView, id)))
      .map(wrapLoading);
  }

  updateAuthor(authorId: string): void {
    const author = authorDemoData.find((a) => a.id === authorId);
    if (author) this.store.dispatch(upsertAuthor({ author }));
  }

  updateBook(bookId: string): void {
    const book = bookDemoData.find((a) => a.id === bookId);
    if (book) this.store.dispatch(upsertBook({ book }));
  }

  updateTag(tagId: string): void {
    const tag = tagDemoData.find((a) => a.id === tagId);
    if (tag) this.store.dispatch(upsertTag({ tag }));
  }
}
