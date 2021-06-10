export interface Book {
  id: string;
  title: string;
  authorIds: string[];
  description: string;
  tagIds: string[];
  published: number;
}

export const bookDemoData: Book[] = [
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
