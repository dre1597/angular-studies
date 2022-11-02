import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../../common/models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent {


  constructor(private shoppingListService: ShoppingListService) {
  }

  onAddItem(form: NgForm): void {
    const value = form.value;

    const newIngredient = new Ingredient(value.name, value.amount);

    this.shoppingListService.addIngredient(newIngredient);
  }
}
