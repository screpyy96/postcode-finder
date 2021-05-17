import { API_URL } from "../config";

export const getLink = (postcode) => `/find/${postcode}`;

export const getApiPostcode = (postcode) => `${API_URL}${postcode}`;

export const getApiNearestPostcode = (postcode) =>
  `${API_URL}${postcode}/nearest`;
