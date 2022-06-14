import axios from "axios";

/**
 *  now i passed only one param as string if we were
 * in reality we need to pass an object of all params.
 *  */

export const CreateAPI_Instance = (baseUrl: string) => {
  return axios.create({
    baseURL: baseUrl,
  });
};
