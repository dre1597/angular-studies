import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Recipe } from '../../components/recipes/recipe.model';
import { RecipeService } from '../../components/recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {
  }

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.httpClient.put(`${environment.baseUrl}/recipes.json`, recipes)
      .subscribe({
        next: (res) => {
          console.log(res);
        }
      });
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(`${environment.baseUrl}/recipes.json`)
      .pipe(map((recipes) =>
          recipes.map((recipe) =>
            ({
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            }))),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        }));

  }
}
