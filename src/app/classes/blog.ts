export class Blog {
  id: number;
  title: string;
  bckImage: string;
  description: string;
  date: string;

  constructor(id: number, title: string, description: string, date: string, bckImage: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.bckImage = bckImage;
  }
}
