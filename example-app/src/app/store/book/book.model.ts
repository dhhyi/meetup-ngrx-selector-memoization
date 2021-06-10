export interface Book {
  id: string;
  title: string;
  authorIds: string[];
  description: string;
  tagIds: string[];
  published: number;
}
