import axios from "axios";

const userURL = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${userURL}/add`, data);
  } catch (error) {
    console.log(error);
  }
};
