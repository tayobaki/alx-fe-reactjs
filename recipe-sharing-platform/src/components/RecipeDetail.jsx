import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
	const [recipe, setRecipe] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchedRecipe = recipesData.recipes.find(
			(r) => r.id === parseInt(id)
		);
		setRecipe(fetchedRecipe);
	}, [id]);

	if (!recipe) {
		return <div className="text-center mt-8">Loading...</div>;
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
			<img
				src={recipe.image}
				alt={recipe.name}
				className="w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-lg"
			/>

			<div className="grid md:grid-cols-2 gap-8">
				<div>
					<h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
					<ul className="list-disc pl-5">
						{recipe.ingredients.map((ingredient, index) => (
							<li key={index} className="mb-2">
								{ingredient}
							</li>
						))}
					</ul>
				</div>

				<div>
					<h2 className="text-2xl font-semibold mb-4">Instructions</h2>
					<ol className="list-decimal pl-5">
						{recipe.instructions.map((step, index) => (
							<li key={index} className="mb-4">
								{step}
							</li>
						))}
					</ol>
				</div>
			</div>
		</div>
	);
};

export default RecipeDetail;
