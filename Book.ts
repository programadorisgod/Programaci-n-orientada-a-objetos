export default class Book {
  private _title: string;
  private _autor: string;
  private _yearOfPublication: number;
  private _stock: number;
  private _uuid: string;

  constructor(
    title: string,
    autor: string,
    yearOfPublication: number,
    stock: number
  ) {
    this._title = title;
    this._autor = autor;
    this._stock = stock;
    this._yearOfPublication = yearOfPublication;
    this._uuid = crypto.randomUUID();
  }

  public get title() {
    return this._title;
  }

  public set titleBook(title: string) {
    this._title = title;
  }

  public get autor() {
    return this._autor;
  }

  public set autorBook(autor: string) {
    this._autor = autor;
  }

  public get yearOfPublication() {
    return this._yearOfPublication;
  }

  public set yearOfPublicationBook(yearOfPublication: number) {
    this._yearOfPublication = yearOfPublication;
  }

  public get stock() {
    return this._stock;
  }

  public set stockBook(stock: number) {
    this._stock = stock;
  }

  public get uuid() {
    return this._uuid;
  }

  public lendBook(quantity: number) {
    if (quantity < 1) {
      throw new Error("Por favor, la cantidad debe ser mayor o igual a 1");
    }

    if (quantity > this._stock) {
      throw new Error("Lo sentimos, no hay suficientes cantidades en stock");
    }

    this._stock -= quantity;
  }

  public returnBook(quantity: number) {
    if (quantity < 1) {
      throw new Error("Por favor, la cantidad debe ser mayor o igual a 1");
    }

    this._stock += quantity;

    return this._stock;
  }

  public toString() {
    return `Title: ${this._title}, Autor: ${this._autor}, Year of publication: ${this._yearOfPublication}, Stock: ${this._stock}, UUID: ${this._uuid}`;
  }
}
