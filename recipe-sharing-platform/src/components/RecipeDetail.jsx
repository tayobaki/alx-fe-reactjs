import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
	const { id } = useParams(); // Get the recipe ID from the URL
	const [recipe, setRecipe] = useState(null);

	// Fetch the recipe data when the component mounts
	useEffect(() => {
		fetch("/data.json")
			.then((response) => response.json())
			.then((data) => {
				const selectedRecipe = data.find(
					(recipe) => recipe.id === parseInt(id)
				);
				setRecipe(selectedRecipe);
			})
			.catch((error) => console.error("Error fetching recipe:", error));
	}, [id]);

	// If recipe data is still loading
	if (!recipe) {
		return <div>Loading...</div>;
	}

	return (
		<div className="container mx-auto p-4">
			<div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
				<img
					src={recipe.image}
					alt={recipe.title}
					className="w-full h-64 object-cover rounded-md"
				/>
				<h1 className="text-3xl font-bold mt-4 mb-2">{recipe.title}</h1>
				<p className="text-gray-600 mb-4">{recipe.summary}</p>

				{/* Ingredients and Cooking Instructions sections */}
				<div className="mt-6">
					<h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
					<ul className="list-disc list-inside text-gray-700">
						{/* Example ingredients - modify as needed */}
						<li>Ingredient 1</li>
						<li>Ingredient 2</li>
						<li>Ingredient 3</li>
					</ul>
				</div>

				<div className="mt-6">
					<h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
					<ol className="list-decimal list-inside text-gray-700">
						{/* Example steps - modify as needed */}
						<li>Step 1: Do this...</li>
						<li>Step 2: Do that...</li>
						<li>Step 3: Finish up by doing this...</li>
					</ol>
				</div>
			</div>
		</div>
	);
};

export default RecipeDetail;
