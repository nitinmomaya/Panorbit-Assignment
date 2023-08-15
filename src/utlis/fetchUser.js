import axios from "axios";
import React from "react";

const fetchUser = async () => {
  try {
    const { data } = await axios.get("https://panorbit.in/api/users.json");

    const user = data.users;

    return user;
  } catch (error) {
    console.error(error);
  }
};

export default fetchUser;
