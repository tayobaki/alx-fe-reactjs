import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import Counter from './components/Counter';

function App() {


  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/favorites">My Favorites</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <>
              <Counter />
              <SearchBar />
              <AddRecipeForm />
              <RecipeList />
              <RecommendationsList />
            </>
          } />
          <Route path="/recipe/:id" Component={RecipeDetails} />
          <Route path="/favorites" Component={FavoritesList} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;