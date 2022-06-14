import { API_2 } from "../../API";

export const API__2_FETCH_DATA = () => {
  return API_2.get("/users", {
    params: {
      _quantity: 40,
    },
  }).then((res) => console.log(res));
};
