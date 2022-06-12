import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../common/ingredients/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('any_name', 5),
    new Ingredient('other_name', 10),
  ];

  constructor() {}

  ngOnInit(): void {}
}
