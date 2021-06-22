import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import {
  createAction,
  createFeatureSelector,
  createReducer,
  on,
  props,
} from "@ngrx/store";
import { Author } from "./author.model";

export * from "./author.model";

export const upsertAuthor = createAction(
  "[Author] Update",
  props<{ author: Author }>()
);
export interface AuthorState extends EntityState<Author> {}

const authorAdapter: EntityAdapter<Author> = createEntityAdapter<Author>();

const initialAuthorState: AuthorState = authorAdapter.getInitialState();

export const authorReducer = createReducer(
  initialAuthorState,
  on(upsertAuthor, (state, action) =>
    authorAdapter.upsertOne(action.author, state)
  )
);

export const getAuthorState = createFeatureSelector<AuthorState>("author");

export const { selectEntities: getAuthorEntities } =
  authorAdapter.getSelectors(getAuthorState);
