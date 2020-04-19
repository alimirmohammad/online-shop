import {
    LOGIN, LOGOUT
} from '../actions/actionTypes';

const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return { token: action.payload };
        case LOGOUT:
            return { token: null };
        default:
            throw new Error('Should not be here!');
    }
}

export default authReducer;