import axios from "axios";

const userURL = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${userURL}/add`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${userURL}/users-list`);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (_id) => {
  try {
    return await axios.get(`${userURL}/edit/${_id}`);
  } catch (error) {
    console.log(`Error while edit api${error}`);
  }
};
