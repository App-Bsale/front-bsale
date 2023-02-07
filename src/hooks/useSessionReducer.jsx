import { useReducer } from "react";


export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

function sessionReducer(state, action){
  switch (action.type){
    case SIGN_IN:
      const {token} = action;
      return { ...state, token};
    case SIGN_OUT:
      return { ...state, token: null};
    default:
      return state;
  }
}

export default function useSessionReducer(){
  const [state, dispatch] = useReducer(sessionReducer, {
    token: null,
  })

  return [state, dispatch]
}
