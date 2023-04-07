import { CREATE_USER } from "../ActionsTypes/actions_types";

const initialState = {
    user: [],
  };
  
  const user_reducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_USER:
        return { 
          ...state, 
          user: action.payload };
      default:
        return state;
    }
  };
  
  export default user_reducer;