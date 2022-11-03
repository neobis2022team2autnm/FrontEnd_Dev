import { auth} from "../api/auth";
import { store } from "../redux/store";
import jwt_decode from "jwt-decode";
import { setLoginByGoogle } from "../redux/reducers/generalSlice";

export const Login = (data) => {
  store.dispatch(auth(data));
};

export const LoginByGoogle = (token) => {
  const data = jwt_decode(token);
  data["firstname"] = data.given_name;
  data["lastname"] = data.family_name;
  delete data.given_name;
  delete data.family_name;
  store.dispatch(setLoginByGoogle({ user: data, token }));
  Login(token)
};

