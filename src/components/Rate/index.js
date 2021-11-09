import React, { useState, useContext } from 'react';

import { useParams } from 'react-router-dom';

import API from '../../API';

// Context
import { Context } from '../../context';

const Rate = () => {
  const [value, setValue] = useState(5);
  const [isRated, setIsRated] = useState(false);
  const { movieId } = useParams();
  const [user] = useContext(Context);

  const handleClick = async () => {
    const rating = await API.rateMovie(user.sessionId, movieId, value);
    if (rating.success) {
      setIsRated(true);
    }
  };

  return (
    <>
      {isRated ? (
        <div>
          <p>Thank you for rating!</p>
        </div>
      ) : (
        <div>
          <input
            onChange={(e) => setValue(e.target.value)}
            type="range"
            min="1"
            max="10"
            value={value}
          />
          {value}
          <p>
            <button onClick={handleClick} type="text">
              Rate
            </button>
          </p>
        </div>
      )}
    </>
  );
};

export default Rate;
