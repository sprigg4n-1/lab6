class Library {
  private _books: Book[];

  constructor(books: Book[]) {
    this.books = books;
  }

  public get books(): Book[] {
    return this._books;
  }
  public set books(value: Book[]) {
    this._books = value;
  }
}

class Book {}
