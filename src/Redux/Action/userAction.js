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
// console.log("Where is Route");
export const RegistrationFunction = (UserData) => async (dispatch) => {
  const { data } = await Axios.post(`${BASE_URL}/signup`, {
    data: { ...UserData },
  });
  dispatch(UserRegisterAction(data));
};
// console.log("Where is Route".signup);
export const LoginFunction = (UserData) => async (dispatch) => {
  const { data } = await Axios.post(`${BASE_URL}/login`, {
    data: UserData,
  });
  dispatch(UserLoginAction(data));
};
