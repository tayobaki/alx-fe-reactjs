import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useRecipeStore = create(
  persist(
    (set, get) => ({
      recipes: [],
      searchTerm: "",
      filteredRecipes: [],
      favorites: [],
      recommendations: [],
      addRecipe: (newRecipe) =>
        set((state) => ({
          recipes: [...state.recipes, { ...newRecipe, id: Date.now() }],
          filteredRecipes: [...state.recipes, { ...newRecipe, id: Date.now() }],
        })),
      deleteRecipe: (id) =>
        set((state) => ({
          recipes: state.recipes.filter((recipe) => recipe.id !== id),
          filteredRecipes: state.filteredRecipes.filter(
            (recipe) => recipe.id !== id
          ),
          favorites: state.favorites.filter((favId) => favId !== id),
        })),
      updateRecipe: (id, updatedRecipe) =>
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
          ),
          filteredRecipes: state.filteredRecipes.map((recipe) =>
            recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
          ),
        })),
      setSearchTerm: (term) => {
        set({ searchTerm: term });
        get().filterRecipes();
      },
      filterRecipes: () =>
        set((state) => ({
          filteredRecipes: state.recipes.filter(
            (recipe) =>
              recipe.title
                .toLowerCase()
                .includes(state.searchTerm.toLowerCase()) ||
              recipe.description
                .toLowerCase()
                .includes(state.searchTerm.toLowerCase())
          ),
        })),
      addFavorite: (recipeId) =>
        set((state) => ({
          favorites: [...state.favorites, recipeId],
        })),
      removeFavorite: (recipeId) =>
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== recipeId),
        })),
      generateRecommendations: () =>
        set((state) => {
          // Simple recommendation logic based on favorites
          const nonFavorites = state.recipes.filter(
            (recipe) => !state.favorites.includes(recipe.id)
          );
          const recommended = nonFavorites
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
          return { recommendations: recommended };
        }),
    }),
    {
      name: "recipe-storage",
    }
  )
);
