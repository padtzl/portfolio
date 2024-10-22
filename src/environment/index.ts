const env = import.meta.env;

const environment = env.MODE.toLowerCase();
const { API_URL } = env;

console.log(env);

export { environment, API_URL };
