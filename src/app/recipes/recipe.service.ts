import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {Recipe} from './recipe.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'a test recipe',
      'this is test',
      'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('fries', 10)
      ]),
    new Recipe(
      'a another recipe',
      'this is test',
      'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg',
      [
        new Ingredient('Meat', 5),
        new Ingredient('fries', 8)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
