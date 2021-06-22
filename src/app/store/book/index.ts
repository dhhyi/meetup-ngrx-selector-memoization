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
  createSelectorFactory,
  on,
  props,
  resultMemoize,
} from "@ngrx/store";
import { AppState } from "../app.reducer";
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

export const addTagToBookImmutable = createAction(
  "[Book] Add Tag Immutable",
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
  }),
  on(addTagToBookImmutable, (state, action) => {
    const currentBook = state.entities[action.bookId] as Book;
    const newState = bookAdapter.updateOne(
      {
        id: action.bookId,
        changes: { tagIds: [...currentBook.tagIds, action.tagId] },
      },
      state
    );
    return newState;
  })
);

export const getBookState = createFeatureSelector<BookState>("book");

export const { selectEntities: getBookEntities } =
  bookAdapter.getSelectors(getBookState);

export const getBook = (bookId: string) =>
  createSelector(getBookEntities, (books: Dictionary<Book>) => books[bookId]);

export const checkEqual = (a: unknown[], b: unknown[]) =>
  a && b && a.length === b.length && a.every((val, idx) => val === b[idx]);

export const getAuthorsOfBook = (bookId: string) =>
  createSelectorFactory<AppState, Author[]>((p) =>
    resultMemoize(p, checkEqual)
  )(
    getBook(bookId),
    getAuthorEntities,
    (book: Book | undefined, authors: Dictionary<Author>) =>
      book
        ? (book.authorIds
            .map((authorId) => authors[authorId])
            .filter((x) => !!x) as Author[])
        : []
  );

export const getTagsOfBook = (bookId: string) =>
  createSelectorFactory<AppState, Tag[]>((p) => resultMemoize(p, checkEqual))(
    getBook(bookId),
    getTagEntities,
    (book: Book | undefined, tags: Dictionary<Tag>) =>
      book
        ? (book.tagIds.map((tagId) => tags[tagId]).filter((x) => !!x) as Tag[])
        : []
  );
