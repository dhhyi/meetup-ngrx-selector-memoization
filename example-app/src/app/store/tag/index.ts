import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import {
  createAction,
  createFeatureSelector,
  createReducer,
  on,
  props,
} from "@ngrx/store";
import { Tag } from "./tag.model";

export * from "./tag.model";

export const upsertTag = createAction("[Tag] Update", props<{ tag: Tag }>());
export interface TagState extends EntityState<Tag> {}

const tagAdapter: EntityAdapter<Tag> = createEntityAdapter<Tag>();

const initialTagState: TagState = tagAdapter.getInitialState();

export const tagReducer = createReducer(
  initialTagState,
  on(upsertTag, (state, action) => tagAdapter.upsertOne(action.tag, state))
);

export const getTagState = createFeatureSelector<TagState>("tag");

export const { selectEntities: getTagEntities } =
  tagAdapter.getSelectors(getTagState);
