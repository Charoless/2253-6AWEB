import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'booksapp';
  readonly APIUrl = "http://localhost:5038/api/books/";

  constructor(private http: HttpClient) {}

  books: any = [];
  editingBook: any = null;

  refreshBooks() {
    this.http.get(this.APIUrl + 'GetBooks').subscribe(data => {
      this.books = data;
    });
  }

  ngOnInit() {
    this.refreshBooks();
  }

  addBook() {
    const newBook = (document.getElementById("newBook") as HTMLInputElement).value;
    const newDesc = (document.getElementById("newDesc") as HTMLInputElement).value;
    const newPrice = (document.getElementById("newPrice") as HTMLInputElement).value;
    const newAuthor = (document.getElementById("newAuthor") as HTMLInputElement).value;
    const newYear = (document.getElementById("newYear") as HTMLInputElement).value;

    const formData = new FormData();
    formData.append("title", newBook);
    formData.append("description", newDesc);
    formData.append("price", newPrice.toString());
    formData.append("author", newAuthor);
    formData.append("year", newYear);

    this.http.post(this.APIUrl + 'AddBook', formData).subscribe(data => {
      alert(data);
      this.refreshBooks();
    });
  }

  deleteBook(id: any) {
    this.http.delete(this.APIUrl + 'DeleteBook?id=' + id).subscribe(data => {
      alert(data);
      this.refreshBooks();
    });
  }

  editBook(book: any) {
    this.editingBook = { ...book };
  }

  updateBook() {
    const formData = new FormData();
    formData.append("id", this.editingBook.id);
    formData.append("title", (document.getElementById("editTitle") as HTMLInputElement).value);
    formData.append("description", (document.getElementById("editDesc") as HTMLInputElement).value);
    formData.append("price", (document.getElementById("editPrice") as HTMLInputElement).value);
    formData.append("author", (document.getElementById("editAuthor") as HTMLInputElement).value);
    formData.append("year", (document.getElementById("editYear") as HTMLInputElement).value);

    this.http.put(this.APIUrl + 'UpdateBook', formData).subscribe(data => {
      alert(data);
      this.refreshBooks();
      this.editingBook = null;
    });
  }

  cancelEdit() {
    this.editingBook = null;
  }
}
