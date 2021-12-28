import * as type from "../types";
const chartReducer = (state={}, action) => {
  switch (action.type) {
    case type.GET_STUDENTS: {
      return {
        ...state,
        students: action.payload
      };
    }
    case type.GET_STUDENTS_TABLE_LOADER: {
      return {
        ...state,
        loader: action.payload.loader
      };
    }


    default:
      return state;
  }
};
export default chartReducer;