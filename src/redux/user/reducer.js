import UserActionTypes from "./action-types";

const initialState = {
    currentUser: 50,
}

//acton para executar essa funcao
//dispact dessa action
const userReducer = (state = initialState, action) => {

    switch (action.type){
        case UserActionTypes.LOGIN:
            return {...state, currentUser:action.payload}
        case UserActionTypes.LOGOUT:
            return {...state, currentUser: null}
        default:
            return state
    }
};

export default userReducer;