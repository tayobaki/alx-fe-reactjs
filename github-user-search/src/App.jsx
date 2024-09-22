import { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

const App = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [page, setPage] = useState(1); // for pagination
	const [queryParams, setQueryParams] = useState(null);

	const handleSearch = async (params) => {
		setLoading(true);
		setError(null);
		setQueryParams(params); // Save query for pagination
		setPage(1); // Reset to page 1
		try {
			const data = await fetchUserData(params);
			setUsers(data.items);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const loadMore = async () => {
		setLoading(true);
		try {
			const data = await fetchUserData({ ...queryParams, page: page + 1 });
			setUsers((prev) => [...prev, ...data.items]);
			setPage((prev) => prev + 1);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="app p-4">
			<Search onSearch={handleSearch} />

			{loading && <p>Loading...</p>}
			{error && <p>Looks like we can't find any users</p>}

			<div className="user-results grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{users.map((user) => (
					<div key={user.id} className="user-card p-4 bg-white rounded shadow">
						<img
							src={user.avatar_url}
							alt={user.login}
							className="w-16 h-16 rounded-full"
						/>
						<h2 className="font-bold">{user.login}</h2>
						<p>Location: {user.location || "N/A"}</p>
						<p>Repos: {user.public_repos}</p>
						<a
							href={user.html_url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500"
						>
							View Profile
						</a>
					</div>
				))}
			</div>

			{users.length > 0 && (
				<button
					onClick={loadMore}
					className="mt-4 bg-green-500 text-white p-2 rounded w-full hover:bg-green-600"
				>
					Load More
				</button>
			)}
		</div>
	);
};

export default App;
