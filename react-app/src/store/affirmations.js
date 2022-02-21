const LOAD = "session/LOAD"

const load = (payload) => ({
    type:LOAD,
    payload:payload
})

export const get_all_affirmations = (id) => async(dispatch) => {
    const response = await fetch(`/api/affirmations/${id}`, {
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
}

const initialState = { user: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return action.payload ;
    default:
      return state;
  }
}
