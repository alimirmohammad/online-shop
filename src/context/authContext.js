import {createContext} from 'react';

export const initialAuth = {
    token: null
};

const AuthContext = createContext({});


export default AuthContext;