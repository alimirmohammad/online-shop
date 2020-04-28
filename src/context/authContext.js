import { createContext } from "react";

export const initialAuth = {
  token: null,
};

const AuthContext = createContext(initialAuth);

export default AuthContext;
