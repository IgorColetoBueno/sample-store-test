// NOTE: I added hardcoded API URL to don't need a .env configuration for testing, this is not a correct pratice, it's only for run without other configurations
const fetcher = (url: string, options?: RequestInit) => {
  return fetch(
    (process.env.BASE_URL ??
      "https://sample-store-api.usaflexdigital.workers.dev") + url,
    { cache: "force-cache", ...options }
  );
};

export default fetcher;
