import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useRecipeStore = create(
  persist(
    (set) => ({
      recipes: [],
      addRecipe: (newRecipe) =>
        set((state) => ({
          recipes: [...state.recipes, { ...newRecipe, id: Date.now() }],
        })),
      deleteRecipe: (id) =>
        set((state) => ({
          recipes: state.recipes.filter((recipe) => recipe.id !== id),
        })),
      updateRecipe: (id, updatedRecipe) =>
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
          ),
        })),
    }),
    {
      name: "recipe-storage",
    }
  )
);
