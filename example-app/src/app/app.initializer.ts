import { Store } from "@ngrx/store";
import { Author, upsertAuthor } from "./store/author";
import { Book, upsertBook } from "./store/book";
import { Tag, upsertTag } from "./store/tag";

export const initData = (store: Store<{}>) => () => {
  Object.keys(authorDemoData).forEach((id) => {
    store.dispatch(upsertAuthor({ author: getAuthor(id) }));
  });
  Object.keys(tagDemoData).forEach((id) => {
    store.dispatch(upsertTag({ tag: getTag(id) }));
  });
  bookDemoData.forEach((book) => {
    store.dispatch(upsertBook({ book }));
  });
};

export const authorDemoData = {
  GW: { firstName: "Gregor", lastName: "Woiwode" },
  FM: { firstName: "Ferdinand", lastName: "Malcher" },
  DK: { firstName: "Danny", lastName: "Koppenhagen" },
  JH: { firstName: "Johannes", lastName: "Hoppe" },
  LT: { firstName: "Linus", lastName: "Torvalds" },
  DD: { firstName: "David", lastName: "Diamond" },
};

export function getAuthor(id: string): Author {
  const demoData = authorDemoData[id as keyof typeof authorDemoData];
  return { ...demoData, id };
}

const tagDemoData = {
  se: { name: "Software Engineering" },
  ng4: { name: "Angular 4" },
  ng8: { name: "Angular 8" },
  ph: { name: "Philosophy" },
};

export function getTag(id: string): Tag {
  const demoData = tagDemoData[id as keyof typeof tagDemoData];
  return { ...demoData, id };
}

export const bookDemoData: (Book & {
  tagIds: (keyof typeof tagDemoData)[];
  authorIds: (keyof typeof authorDemoData)[];
})[] = [
  {
    id: "1",
    title: "Angular",
    description:
      "Grundlagen, fortgeschrittene Techniken und Best Practices mit TypeScript",
    authorIds: ["GW", "FM", "DK", "JH"],
    tagIds: ["ng4", "se"],
    published: new Date(2017, 5, 22).getTime(),
  },
  {
    id: "2",
    title: "Angular",
    description: "Grundlagen, fortgeschrittene Themen und Best Practices",
    authorIds: ["FM", "JH", "DK"],
    tagIds: ["ng8", "se"],
    published: new Date(2019, 6, 14).getTime(),
  },
  {
    id: "3",
    title: "Just for Fun",
    description: "The Story of an Accidental Revolutionary",
    authorIds: ["LT", "DD"],
    tagIds: ["ph"],
    published: new Date(2002, 6, 4).getTime(),
  },
];
