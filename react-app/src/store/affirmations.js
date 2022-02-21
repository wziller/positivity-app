const LOAD = "affirmation/LOAD";
const GET_RANDOM = "affirmation/GET_RANDOM";

const load = (payload) => ({
  type: LOAD,
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

const initialState = {
  all: [],
  random: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return { ...state, ...action.payload };
    case GET_RANDOM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
