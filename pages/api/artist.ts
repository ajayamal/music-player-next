import { useApi } from "../../utils/api";
import { HttpMethod } from "../../utils/types";

export const getAllArtists = async () => {
  const artists = await useApi(HttpMethod.GET, "/artists/", {
    ids: "2w9zwq3AktTeYYMuhMjju8",
  });
  return artists;
};
