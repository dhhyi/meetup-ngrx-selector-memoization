import {
  createEntityAdapter,
  Dictionary,
  EntityAdapter,
  EntityState,
} from "@ngrx/entity";
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from "@ngrx/store";
import { Author, getAuthorEntities } from "../author";
import { getTagEntities, Tag } from "../tag";
import { Book } from "./book.model";

export * from "./book.model";

export const upsertBook = createAction(
  "[Book] Update",
  props<{ book: Book }>()
);

export const addTagToBook = createAction(
  "[Book] Add Tag",
  props<{ bookId: string; tagId: string }>()
);

export interface BookState extends EntityState<Book> {}

const bookAdapter: EntityAdapter<Book> = createEntityAdapter<Book>();

const initialBookState: BookState = bookAdapter.getInitialState();

export const bookReducer = createReducer(
  initialBookState,
  on(upsertBook, (state, action) => bookAdapter.upsertOne(action.book, state)),
  on(addTagToBook, (state, action) => {
    state.entities[action.bookId]?.tagIds.push(action.tagId);
    return state;
  })
);

export const getBookState = createFeatureSelector<BookState>("book");

export const { selectEntities: getBookEntities } =
  bookAdapter.getSelectors(getBookState);

export const getBook = createSelector(
  getBookEntities,
  (books: Dictionary<Book>, bookId: string) => books[bookId]
);

export const checkEqual = (a: unknown[], b: unknown[]) =>
  a && b && a.length === b.length && a.every((val, idx) => val === b[idx]);

export const getAuthorsOfBook = createSelector(
  getBook,
  getAuthorEntities,
  (book, authors) =>
    book
      ? (book.authorIds
          .map((authorId) => authors[authorId])
          .filter((x) => !!x) as Author[])
      : []
);

export const getTagsOfBook = createSelector(
  getBook,
  getTagEntities,
  (book, tags) =>
    book
      ? (book.tagIds.map((tagId) => tags[tagId]).filter((x) => !!x) as Tag[])
      : []
);
