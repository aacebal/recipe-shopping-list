import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Test Recipe", 
    "This is simply a test", 
    "http://iamafoodblog.com/wp-content/uploads/2017/09/korean-army-stew-8739w.jpg",
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe("Another Recipe", 
    "This is simply a test", 
    "http://iamafoodblog.com/wp-content/uploads/2017/09/korean-army-stew-8739w.jpg", 
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }

}
