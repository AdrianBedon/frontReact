import axios from "axios";

const BASE_URL = "https://core-viajes.onrender.com/users";

const config = () => {
  return {
    headers: {
      "Authorization": sessionStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  };
};
export const findAll = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const save = async ({ username, email, password }) => {
  try {
    return await axios.post(BASE_URL, {
      username,
      email,
      password,
    }, config());
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

export const update = async ({ id,  username, email }) => {
  try {
    return await axios.put(
      `${BASE_URL}/${id}`,
      {
        username,
        email,
      },
      config()
    );
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

export const remove = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`, config());
  } catch (error) {
    throw error;
  }
};
