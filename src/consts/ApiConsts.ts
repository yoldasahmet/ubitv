export const showApiUrl = "https://api.tvmaze.com";
export const scheduleApiUrl = (date: string, countryCode = "US") =>
  `https://api.tvmaze.com/schedule/web?date=${date}&country=${countryCode}`;
