import axios from "axios";

export const registerUser = async (userData) => {
  return await axios.post( `${process.env.REACT_APP_API}/auth/register`, userData);
};
export const loginUser = async (userData) => {
  console.log('Meeeeeeee');
  return await axios.post( `${process.env.REACT_APP_API}/auth/login`, userData);
};

export const userProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  return await axios.get( `${process.env.REACT_APP_API}/user`, config);
};
export const forgotPassword = async (userData) => {
  return await axios.post( `${process.env.REACT_APP_API}/auth/forgot-password`, userData);
};
export const resetPassword = async (userData) => {
  return await axios.post( `${process.env.REACT_APP_API}/auth/reset-password`, userData);
};
export const verifyPhone = async (userData) => {
  return await axios.post( `${process.env.REACT_APP_API}/auth/verify-phone`, userData);
};
export const verifyEmail = async (userData) => {
  return await axios.post( `${process.env.REACT_APP_API}/auth/verify-email`, userData);
};
export const logout = async (userData) => {
  return await axios.post( `${process.env.REACT_APP_API}/auth/logout`, userData);
};
export const registerBusiness = async (userData) => {
  return await axios.post( `${process.env.REACT_APP_API}/auth/business`, userData);
};
