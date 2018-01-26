import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is simply a test", "http://iamafoodblog.com/wp-content/uploads/2017/09/korean-army-stew-8739w.jpg"),
    new Recipe("Another Recipe", "This is simply a test", "http://iamafoodblog.com/wp-content/uploads/2017/09/korean-army-stew-8739w.jpg")
  ];

  constructor() { }

}
