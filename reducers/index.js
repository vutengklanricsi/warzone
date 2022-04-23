import { getMarvelData } from "../pages/api/marvelApi";

export const Reducer = (state = getMarvelData, action) => {
  switch (action.type) {
    case "COMICS":
      return getMarvelData;
    default:
      return;
  }
};
 