import { API_1_RESP, API_2_RESP } from "./ReducerActionType";

export type SliderType = {
  data: API_1_RESP[] | null | undefined;
};

export type SliderItemType = {
  imgLink: string;
  firstName: string;
  lastName: string;
};
