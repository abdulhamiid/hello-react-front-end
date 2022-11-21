import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoadedData } from '../redux/api';

let isFetching = true;

function Greetings() {
  const dispatch = useDispatch();

  if (isFetching === true) {
    isFetching = false;
    dispatch(fetchLoadedData());
  }

  const result = useSelector((state) => state.data);
  return (
    <div className="App container">
      <h2>Greetings from Api</h2>
      {result.map((item) => (
        <p key={item.id}>
          {item.greeting}
        </p>
      ))}
      <button type="button" onClick={() => { dispatch(fetchLoadedData()); }}>Greet</button>
    </div>
  );
}

export default Greetings;
