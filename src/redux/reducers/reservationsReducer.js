import axios from 'axios';

const FETCH_RESERVATIONS = 'FETCH_RESERVATIONS';
const CREATE_RESERVATION = 'CREATE_RESERVATION'
const REMOVE_RESERVATION = 'REMOVE_RESERVATION'

// App initial state
const initialState = {
  reservations: [],
};

// Actions
// movies
export const fetchReservations = (payload) => ({
  type: FETCH_RESERVATIONS,
  payload,
});
export const createReservations = (payload) => ({
  type: CREATE_RESERVATION,
  payload,
});
export const removeReservations = (payload) => ({
  type: REMOVE_RESERVATION,
  payload,
});

export const fetchReservationsAPI = () => async (dispatch) => {
  const res = await axios.get('http://localhost:3000/api/v1/reservations');
  const newReservation = res.data.data.movies;
  dispatch(movies(newReservation));
};

// Reducer
const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return action.payload
    case CREATE_RESERVATIONS:
      return [...state,action.payload]
    case REMOVE_RESERVATIONS:
      return [...state, action.payload]
    default:
      return state;
  }
};

export default reservationsReducer;
