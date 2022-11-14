import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoadedData } from '../redux/api'

let isFetching = true;

function Greetings() {
  const dispatch = useDispatch();

  if (isFetching === true) {
    isFetching = false;
    dispatch(fetchLoadedData());
  }

  const result = useSelector((state) => state.data);
  console.log(result)
  return (
    <div className="App">
      <h4>Greetings from Backend</h4>
      <ul>
        {result.map((item) => (
          <li key={item.id}>
            {item.greeting}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Greetings
