import axios from "axios";
import { Config } from "../config";
import { Article } from "../utils/types";

export const createFavorite = (favoriteItem: Article, uid: string) => {
  return axios.post(`${Config.BASE_URL}/favorites`, {
    favoriteItem,
    uid,
  });
};
export const deleteFavorite = (id: string) => {
  return axios.delete(`${Config.BASE_URL}/favorites/${id}`);
};
export const getAllFavorites = (userId: string) => {
  return axios.get(`${Config.BASE_URL}/favorites/${userId}`);
};
// export const findFavorite = (id: string) => {
//   return axios.get(`${Config.BASE_URL}/favorites/${id}`);
// };
