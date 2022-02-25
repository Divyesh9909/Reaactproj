import Axios from "axios";
import config from "../config";

const { BASE_URL } = config;

export const UserRegisterAction = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const UserLoginAction = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

// export const logOut = () => {
//   localStorage.removeItem("accessToken");
//   return {
//     type: "LOG_OUT",
//   };
// };
export const RegistrationFunction = (UserData) => async (dispatch) => {
  const { data } = await Axios.post(`${BASE_URL}/sign_up`, {
    data: UserData,
  });
  dispatch(UserRegisterAction(data));
};

export const LoginFunction = (UserData) => async (dispatch) => {
  const { data } = await Axios.post(`${BASE_URL}/log_in`, {
    data: UserData,
  });
  dispatch(UserLoginAction(data));
};
