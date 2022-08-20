const initialState = {
  currntObj: [],
  currentData: [],
  currentCountry: ""
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_DATA":

      return {
        ...state,
        currentData: action.payload,
      };
      case "SET_CURRENT":

        return {
          ...state,
          currntObj: action.payload,
        };
      case "SET_CURRENT_COUNTRY":

        return {
          ...state,
          currentCountry: action.payload,
        };

    default:
      return state;
  }
}
