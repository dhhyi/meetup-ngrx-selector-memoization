import { createSelector } from "@ngrx/store";
import { once } from "lodash-es";
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
  isNew(): boolean;
}

export const calculateNew = (book: Book) => {
  // tslint:disable-next-line:no-console
  console.log(
    "calculating for",
    book.title,
    new Date(book.published).getFullYear()
  );

  return new Date().getFullYear() - new Date(book.published).getFullYear() <= 1;
};

export const getBookView = () =>
  createSelector(
    getBook,
    getAuthorsOfBook(),
    getTagsOfBook(),
    (book, authors, tags): BookView | undefined =>
      book && {
        title: book.title,
        description: book.description,
        published: new Date(book.published),
        isNew: once(() => calculateNew(book)),
        authors,
        tags,
      }
  );
