import { ActionReducerMap } from "@ngrx/store";

import { authorReducer, AuthorState } from "./author";
import { bookReducer, BookState } from "./book";
import { tagReducer, TagState } from "./tag";

interface AppState {
  book: BookState;
  tag: TagState;
  author: AuthorState;
}

export const appReducer: ActionReducerMap<AppState> = {
  book: bookReducer,
  tag: tagReducer,
  author: authorReducer,
};
