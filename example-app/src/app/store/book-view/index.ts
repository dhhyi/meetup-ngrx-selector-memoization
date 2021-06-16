import { createSelector } from "@ngrx/store";
import { fibonacciPerf } from "../../fibonacci/fibonacci";
import { Author } from "../author";
import { getAuthorsOfBook, getBook, getTagsOfBook } from "../book";
import { Book } from "../book/book.model";
import { Tag } from "../tag";

export interface BookView {
  title: string;
  description: string;
  authors: Author[];
  tags: Tag[];
  published: Date;
  isNew?: boolean;
}

export const calculateNew = (book: Book | undefined) => {
  if (!book) return false;

  const date = new Date(book.published).getFullYear();
  const fromYear = [Math.trunc(date / 100), date % 100].reduce(
    (acc, val) => acc + val
  );
  const fib = fibonacciPerf(fromYear);

  console.log(
    "calculating for",
    book.title,
    date,
    fib.duration?.toFixed(0) + "ms"
  );

  return !!fib?.fib && fib?.fib > 100_000_000;
};

export const getBookView = createSelector(
  getBook,
  getAuthorsOfBook,
  getTagsOfBook,
  (book, authors, tags): BookView | undefined =>
    book && {
      title: book.title,
      description: book.description,
      published: new Date(book.published),
      // isNew: calculateNew(book),
      authors,
      tags,
    }
);
