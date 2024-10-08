import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch("/data.json")
			.then((response) => response.json())
			.then((data) => setRecipes(data))
			.catch((error) => console.error("Error loading data:", error));
	}, []);

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl  font-bold text-center mb-8">Recipe List</h1>
			<div className="grid sm:grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{recipes.map((recipe) => (
					<Link
						to={`/recipe/${recipe.id}`}
						key={recipe.id}
						className="bg-white hover:shadow-2xl shadow-md rounded-lg p-4"
					>
						<img
							src={recipe.image}
							alt={recipe.title}
							className="w-full h-40 object-cover rounded-md"
						/>
						<h2 className="text-xl hover:text-red-300 font-semibold mt-4">
							{recipe.title}
						</h2>
						<p className="text-gray-600 sm:mt-3 mt-2">{recipe.summary}</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default HomePage;
