class Library {
  private _books: Book[];

  constructor(books: Book[]) {
    this._books = books;
  }

  public get books(): ReadonlyArray<Book> {
    return this._books;
  }

  public addBook(book: Book): void {
    this._books.push(book);
  }

  public removeBook(book: Book): void {
    this._books.splice(this._books.indexOf(book), 1);
  }
}

class Book {}
