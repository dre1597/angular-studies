import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../common/models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  subscriptions: Subscription[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    const ingredientsChangedSubscription =
      this.shoppingListService.ingredientsChanged.subscribe((ingredients) => {
        this.ingredients = ingredients;
      });

    this.subscriptions.push(ingredientsChangedSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onEditItem(index: number): void {
    this.shoppingListService.startedEditing.next(index);
  }
}
