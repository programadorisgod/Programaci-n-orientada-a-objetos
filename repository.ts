export default abstract class RepositoryBase<T> {
  abstract addBook(book: T): void;

  abstract getBookByTitle(title: string): T | null;

  abstract getBooks(): T[];
}
