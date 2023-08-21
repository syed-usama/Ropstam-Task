const initialState = {
  user: [],
  stats: [],
  colorsList: [],
  cars: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'ADD_STATS':
      return {
        ...state,
        stats: action.payload,
      };
      case 'ADD_COLORS':
      return {
        ...state,
        colorsList: action.payload,
      };
      case 'ADD_CARS':
      return {
        ...state,
        cars: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
