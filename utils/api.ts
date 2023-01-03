import axios from "axios";
import { HttpMethod } from "./types";
export const BASE_URI = "https://spotify23.p.rapidapi.com";

export const useApi = async (
  method: HttpMethod,
  path: string,
  payload: any
) => {
  try {
    const options = {
      method: method ?? "GET",
      url: `${BASE_URI}/${path || ""}`,
      data: payload,
      headers: {
        "X-RapidAPI-Key": "8206dc202cmsh501760de2e549b0p1c842ejsn72aadc5e6525",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };
    const response = await axios(options);
    if (response.status > 300) {
      return response;
    }
  } catch (error) {
    return error;
  }
};
