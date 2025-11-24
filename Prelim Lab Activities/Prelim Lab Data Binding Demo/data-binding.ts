import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // Text Interpolation
  message = "Data Binding Demo";
  title = "My First App!"
  description:string = "This is my new Angular Application"

  // Property Binding
  imageURL = "https://media.istockphoto.com/id/1325997570/photo/bengal-cat-lying-on-sofa-and-smiling.jpg?s=612x612&w=is&k=20&c=4oDMJZUFTfeRu_iDwLbUPw3iR5gj4XSsjCV8fE74lnM="
  w = 130;
  h = 150;
  altText = 'Angular Logo';
  textColor = 'blue';

  isHighlighted = true;
  yourName = '';

  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
