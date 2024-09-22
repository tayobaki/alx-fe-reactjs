import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
	const [username, setUsername] = useState("");
	const [location, setLocation] = useState("");
	const [minRepos, setMinRepos] = useState("");
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			const data = await fetchUserData(username, location, minRepos);
			setUsers(data);
		} catch (err) {
			setError("Looks like we can't find any users");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="max-w-md mx-auto p-4">
			<form onSubmit={handleSubmit} className="space-y-4">
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="GitHub Username"
					className="border p-2 w-full"
				/>
				<input
					type="text"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					placeholder="Location"
					className="border p-2 w-full"
				/>
				<input
					type="number"
					value={minRepos}
					onChange={(e) => setMinRepos(e.target.value)}
					placeholder="Minimum Repositories"
					className="border p-2 w-full"
				/>
				<button type="submit" className="bg-blue-500 text-white p-2 w-full">
					Search
				</button>
			</form>
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			<div>
				{users.map((user) => (
					<div key={user.id} className="flex items-center space-x-4 my-2">
						<img src={user.avatar_url} alt={user.login} width={50} />
						<div>
							<h2>{user.name || user.login}</h2>
							<p>Location: {user.location || "N/A"}</p>
							<p>Repositories: {user.public_repos || 0}</p>
							<a
								href={user.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500"
							>
								View Profile
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Search;
