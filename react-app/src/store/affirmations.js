const LOAD = "affirmation/LOAD";
const ADD_ONE = "affirmation/ADD_ONE";
const GET_RANDOM = "affirmation/GET_RANDOM";

const load = (payload) => ({
  type: LOAD,
  payload: payload,
});

const addOne = (payload) => ({
  type: ADD_ONE,
  payload: payload,
});

const getRandom = (payload) => ({
  type: GET_RANDOM,
  payload: payload,
});

export const getAllAffirmations = () => async (dispatch) => {
  const response = await fetch(`/api/affirmations`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(load(data));
  }
};

export const getRandomAffirmation = () => async (dispatch) => {
  const response = await fetch("/api/affirmations/random", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(getRandom(data));
  }
};

export const createNewAff = (payload,userId) => async (dispatch) => {
  
  const response = await fetch(`api/affirmations/${userId}`, {
    method:"POST",
    headers: {
      "Content-Type": "application/json",

    },
    body: JSON.stringify( payload ),
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(addOne(data));
  }
};

const initialState = {
  all: [],
  random: {},
};

export default function reducer(state = initialState, action) {
  let newState = {...state}
  switch (action.type) {
    case LOAD:
      return { ...state, ...action.payload };
    case GET_RANDOM:
      return { ...state, ...action.payload };
    case ADD_ONE:
      newState.all.push(action.payload)
      return {...newState}
    default:
      return state;
  }
}
