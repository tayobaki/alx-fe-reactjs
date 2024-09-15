import React, { useState } from "react";

const AddRecipeForm = () => {
	const [formData, setFormData] = useState({
		title: "",
		ingredients: "",
		steps: "",
	});
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const validateForm = () => {
		let newErrors = {};
		if (!formData.title.trim()) newErrors.title = "Title is required";
		if (!formData.ingredients.trim())
			newErrors.ingredients = "Ingredients are required";
		if (formData.ingredients.split(",").filter((i) => i.trim()).length < 2) {
			newErrors.ingredients = "Please enter at least two ingredients";
		}
		if (!formData.steps.trim())
			newErrors.steps = "Preparation steps are required";
		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = validateForm();
		if (Object.keys(newErrors).length === 0) {
			console.log("Form submitted:", formData);
			setFormData({ title: "", ingredients: "", steps: "" });
			setErrors({});
		} else {
			setErrors(newErrors);
		}
	};

	return (
		<div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
			<h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<label
						htmlFor="title"
						className="block text-sm font-medium text-gray-700"
					>
						Recipe Title
					</label>
					<input
						type="text"
						id="title"
						name="title"
						value={formData.title}
						onChange={(e) =>
							setFormData({ ...formData, title: e.target.value })
						}
						className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
							errors.title ? "border-red-500" : ""
						}`}
					/>
					{errors.title && (
						<p className="mt-1 text-sm text-red-500">{errors.title}</p>
					)}
				</div>

				<div>
					<label
						htmlFor="ingredients"
						className="block text-sm font-medium text-gray-700"
					>
						Ingredients (comma-separated)
					</label>
					<textarea
						id="ingredients"
						name="ingredients"
						value={formData.ingredients}
						onChange={(e) =>
							setFormData({ ...formData, ingredients: e.target.value })
						}
						rows="3"
						className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
							errors.ingredients ? "border-red-500" : ""
						}`}
					></textarea>
					{errors.ingredients && (
						<p className="mt-1 text-sm text-red-500">{errors.ingredients}</p>
					)}
				</div>

				<div>
					<label
						htmlFor="steps"
						className="block text-sm font-medium text-gray-700"
					>
						Preparation Steps
					</label>
					<textarea
						id="steps"
						name="steps"
						value={formData.steps}
						onChange={(e) =>
							setFormData({ ...formData, steps: e.target.value })
						}
						rows="5"
						className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
							errors.steps ? "border-red-500" : ""
						}`}
					></textarea>
					{errors.steps && (
						<p className="mt-1 text-sm text-red-500">{errors.steps}</p>
					)}
				</div>

				<div>
					<button
						type="submit"
						className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Add Recipe
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddRecipeForm;
