const env = import.meta.env;

const environment = env.MODE.toLowerCase();
const { VITE_API_URL: API_URL } = env;

export { environment, API_URL };
