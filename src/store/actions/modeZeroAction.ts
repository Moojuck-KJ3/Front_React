export const modeZeroAction = {
  SET_PLACE_TAGS: 'MODEONE.SET_PLACE_TAGS',
};

export const getActions = (dispatch) => {
  return {
    setFoodTagLists: (data) => dispatch(setFoodTagLists(data)),
  };
};

export const setFoodTagLists = (FoodTagLists) => {
  return {
    type: modeZeroAction.SET_PLACE_TAGS,
    FoodTagLists,
  };
};
