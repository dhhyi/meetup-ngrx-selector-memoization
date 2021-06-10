import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, merge, of, timer } from "rxjs";
import { switchMap, mapTo } from "rxjs/operators";
import { authorDemoData, upsertAuthor } from "../store/author";
import { addTagToBook, Book, bookDemoData, upsertBook } from "../store/book";
import { BookView, getBookView } from "../store/book-view";
import { Tag, tagDemoData, upsertTag } from "../store/tag";

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
  selector: "app-books",
  templateUrl: "./books.component.html",
})
export class BooksComponent implements OnInit {
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

  addRandomTagToBook() {
    const random = (Math.random() * 1000).toFixed(0);
    const tag: Tag = { id: random, name: random };
    this.store.dispatch(upsertTag({ tag }));
    let index = Math.floor(Math.random() * bookDemoData.length);
    const book = bookDemoData.find((_, i) => i == index) as Book;
    this.store.dispatch(addTagToBook({ bookId: book.id, tagId: tag.id }));
  }
}
