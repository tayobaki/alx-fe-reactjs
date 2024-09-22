import { useState } from "react";

const Search = ({ onSearch }) => {
	const [username, setUsername] = useState("");
	const [location, setLocation] = useState("");
	const [minRepos, setMinRepos] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch({ username, location, minRepos });
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="search-form space-y-4 p-4 bg-gray-100 rounded shadow-md"
		>
			<div>
				<input
					type="text"
					placeholder="GitHub username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="input w-full p-2 rounded border"
				/>
			</div>
			<div>
				<input
					type="text"
					placeholder="Location"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					className="input w-full p-2 rounded border"
				/>
			</div>
			<div>
				<input
					type="number"
					placeholder="Minimum Repositories"
					value={minRepos}
					onChange={(e) => setMinRepos(e.target.value)}
					className="input w-full p-2 rounded border"
				/>
			</div>
			<button
				type="submit"
				className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full"
			>
				Search
			</button>
		</form>
	);
};

export default Search;
