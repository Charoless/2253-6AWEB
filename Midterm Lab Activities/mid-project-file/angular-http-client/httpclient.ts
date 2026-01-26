import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class Httpclient {
  constructor(private http: HttpClient) {}

  getUsersRemotely(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getRecipes(): Observable<{ recipes: Recipe[] }> {
    return this.http.get<{ recipes: Recipe[] }>('https://dummyjson.com/recipes');
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`https://dummyjson.com/recipes/${id}`);
  }
}
