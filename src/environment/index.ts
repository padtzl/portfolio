const env = import.meta.env;

const environment = env.MODE.toLowerCase();
const { VITE_API_URL } = env;
const API_URL = VITE_API_URL;

console.log(env);

export { environment, API_URL };
