export interface Book {
  id: string;
  title: string;
  description: string;
  authorIds: string[];
  tagIds: string[];
  published: number;
}
