import { Store } from "@ngrx/store";
import { authorDemoData, upsertAuthor } from "./store/author";
import { bookDemoData, upsertBook } from "./store/book";
import { tagDemoData, upsertTag } from "./store/tag";

export const initData = (store: Store<{}>) => () => {
  authorDemoData.forEach((author) => {
    store.dispatch(upsertAuthor({ author }));
  });
  tagDemoData.forEach((tag) => {
    store.dispatch(upsertTag({ tag }));
  });
  bookDemoData.forEach((book) => {
    store.dispatch(upsertBook({ book }));
  });
};
