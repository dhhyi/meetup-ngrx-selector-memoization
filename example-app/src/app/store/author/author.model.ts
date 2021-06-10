export interface Author {
  id: string;
  firstName: string;
  lastName: string;
}

export const authorDemoData: Author[] = [
  { id: "GW", firstName: "Gregor", lastName: "Woiwode" },
  { id: "FM", firstName: "Ferdinand", lastName: "Malcher" },
  { id: "DK", firstName: "Danny", lastName: "Koppenhagen" },
  { id: "JH", firstName: "Johannes", lastName: "Hoppe" },
  { id: "LT", firstName: "Linus", lastName: "Torvalds" },
  { id: "DD", firstName: "David", lastName: "Diamond" },
];
