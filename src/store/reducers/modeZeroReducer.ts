import { modeZeroAction } from '../actions/modeZeroAction';

const initState = {
  FoodTagLists: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case modeZeroAction.SET_PLACE_TAGS:
      return {
        ...state,
        placeTagLists: action.placeTagLists,
      };

    default:
      return state;
  }
};

export default reducer;
