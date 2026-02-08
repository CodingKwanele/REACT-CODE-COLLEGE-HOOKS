import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from './Rating';

function App() {
  // Track each rating's state in the App component
  const [ratings, setRatings] = useState({
    rating1: 1,
    rating2: 2,
    rating3: 3,
    rating4: 4,
    rating5: 5
  });

  // Function to update a specific rating
  const updateRating = (ratingName, newValue) => {
    setRatings(prev => ({
      ...prev,
      [ratingName]: newValue
    }));
  };

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h3>Click on stars to change ratings:</h3>
        
        <div style={{ marginBottom: '15px' }}>
          <h5>Rating One - Current: {ratings.rating1} stars</h5>
          <Rating 
            rating={ratings.rating1} 
            onRatingChange={(newRating) => updateRating('rating1', newRating)}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <h5>Rating Two - Current: {ratings.rating2} stars</h5>
          <Rating 
            rating={ratings.rating2} 
            onRatingChange={(newRating) => updateRating('rating2', newRating)}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <h5>Rating Three - Current: {ratings.rating3} stars</h5>
          <Rating 
            rating={ratings.rating3} 
            onRatingChange={(newRating) => updateRating('rating3', newRating)}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <h5>Rating Four - Current: {ratings.rating4} stars</h5>
          <Rating 
            rating={ratings.rating4} 
            onRatingChange={(newRating) => updateRating('rating4', newRating)}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <h5>Rating Five - Current: {ratings.rating5} stars</h5>
          <Rating 
            rating={ratings.rating5} 
            onRatingChange={(newRating) => updateRating('rating5', newRating)}
          />
        </div>
      </div>
    </>
  );
}

export default App;