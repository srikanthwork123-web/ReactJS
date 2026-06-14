import React from "react";

export function basicReducer(state, action) {

    switch(action.type) {

        case "INCREMENT":
            return {
                count: state.count + 1
            };


        case "DECREMENT":
            return {
                count: state.count - 1
            };


        default:
            return state;
    }
}

export function loginReducer(state, action){

switch(action.type){


case "SET_USERNAME":

return {
    ...state,
    username: action.payload
};


case "SET_PASSWORD":

return {
    ...state,
    password: action.payload
};


case "LOGIN":

return {
    ...state,
    isLoggedIn:true
};


default:
return state;

}

}

export function cartReducer(state, action){


switch(action.type){


case "ADD_PRODUCT":

return {

...state,

cart:[
 ...state.cart,
 action.payload
]

};


case "REMOVE_PRODUCT":

return {

...state,

cart:
state.cart.filter(
item=>item.id !== action.payload
)

};


default:

return state;

}

}
