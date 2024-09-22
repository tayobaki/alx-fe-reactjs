import { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Assuming this is where your API call is made

const Search = () => {
	const [username, setUsername] = useState("");
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			const data = await fetchUserData({ username });
			if (data.items && data.items.length > 0) {
				setUserData(data.items[0]); // Assuming you want the first result for simplicity
			} else {
				setError("Looks like we can't find the user");
			}
		} catch (err) {
			setError("Looks like we can't find the user");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="search-container p-4">
			<form onSubmit={handleSubmit} className="space-y-4">
				<input
					type="text"
					placeholder="Enter GitHub username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="input w-full p-2 rounded border"
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
				>
					Search
				</button>
			</form>

			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}

			{userData && (
				<div className="user-info mt-4 p-4 bg-gray-100 rounded shadow">
					<img
						src={userData.avatar_url}
						alt={userData.login}
						className="w-16 h-16 rounded-full"
					/>
					<h2 className="font-bold">{userData.login}</h2>
					<a
						href={userData.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500"
					>
						View Profile
					</a>
				</div>
			)}
		</div>
	);
};

export default Search;
