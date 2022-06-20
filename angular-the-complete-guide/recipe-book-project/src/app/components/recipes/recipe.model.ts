import { Ingredient } from 'src/app/common/models/ingredient.model';

export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public ingredients: Ingredient[],
    public imagePath?: string
  ) {}
}
