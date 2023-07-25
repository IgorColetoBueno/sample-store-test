const fetcher = (url: string, options?: RequestInit) =>
  fetch(process.env.BASE_URL + url, { cache: "force-cache", ...options });

export default fetcher;
