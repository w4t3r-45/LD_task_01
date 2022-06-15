import { API_1 } from "../../API";

export const API__1_FETCH_DATA = () => {
  return API_1.get("/users/random_user", {
    params: {
      size: 30,
    },
  }).then((res) => res);
};
