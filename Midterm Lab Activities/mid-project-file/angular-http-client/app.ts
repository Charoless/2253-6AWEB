import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from './user.model';
import { Recipe } from './recipe.model';
import { Httpclient } from './httpclient';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('ng-httpclient-demo');
  httpusers: User[] = [];
  recipes: Recipe[] = [];

  constructor(private httpClient: Httpclient) {}

  ngOnInit() {
    this.httpClient.getUsersRemotely().subscribe((data) => {
      this.httpusers = data;
    });

    this.httpClient.getRecipes().subscribe((data) => {
      this.recipes = data.recipes;
    });
  }
}
