import axios from 'axios';

export const LOAD_DATA = 'LOAD_DATA';

const data = [];
export default function loadDataReducer(state = data, action) {
  switch (action.type) {
    case LOAD_DATA: {
      return action.payload;
    }

    default:
      return state;
  }
}

export const fetchAction = (payload) => ({
  type: LOAD_DATA,
  payload,
});

const url = 'http://localhost:3000/api/v1/messages';

export const fetchLoadedData = () => async (dispatch) => {
  const response = await axios.get(url);
  const { data } = response;
  const result = data.map((obj) => {
    const { id, greeting } = obj;
    return { id, greeting };
  });
  dispatch(fetchAction(result));
};