export interface Recipe {
  id: number;
  name: string;
  cuisine: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  caloriesPerServing: number;
  ingredients: string[];
  instructions: string[];
}
