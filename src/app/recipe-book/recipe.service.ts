import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is simply a test", "http://iamafoodblog.com/wp-content/uploads/2017/09/korean-army-stew-8739w.jpg"),
    new Recipe("Another Recipe", "This is simply a test", "http://iamafoodblog.com/wp-content/uploads/2017/09/korean-army-stew-8739w.jpg")
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }

}
