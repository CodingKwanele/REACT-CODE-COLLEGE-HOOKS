import React, { useState } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

function Rating(props) {
  // If onRatingChange prop exists, use controlled component pattern
  // Otherwise, use local state
  const [internalRating, setInternalRating] = useState(props.rating || 0);
  
  const rating = props.onRatingChange ? props.rating : internalRating;
  
  const handleClick = (starValue) => {
    if (props.onRatingChange) {
      props.onRatingChange(starValue);
    } else {
      setInternalRating(starValue);
    }
  };

  return (
    <div style={styles.starStyle}>
      {rating >= 1 ? <IoIosStar onClick={() => handleClick(1)}/> : <IoIosStarOutline onClick={() => handleClick(1)}/>}
      {rating >= 2 ? <IoIosStar onClick={() => handleClick(2)}/> : <IoIosStarOutline onClick={() => handleClick(2)}/>}
      {rating >= 3 ? <IoIosStar onClick={() => handleClick(3)}/> : <IoIosStarOutline onClick={() => handleClick(3)}/>}
      {rating >= 4 ? <IoIosStar onClick={() => handleClick(4)}/> : <IoIosStarOutline onClick={() => handleClick(4)}/>}
      {rating >= 5 ? <IoIosStar onClick={() => handleClick(5)}/> : <IoIosStarOutline onClick={() => handleClick(5)}/>}
    </div>
  );
}

const styles = {
  starStyle: {
    color: 'orange',
    fontSize: '24px'
  }
};

export default Rating;