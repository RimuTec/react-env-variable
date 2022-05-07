
// window._env_ = {
//    REACT_APP_RUNTIME_PROD_KEY: "https://example.com?hrs=0949"
// };

window._env_ = {
   API_URL: "https://example.com?hrs=0949"
   // API_URL: "${process.env.REACT_APP_HELLO}"
};

console.log("Hello, world! at 0923 hrs", window?._env_?.API_URL);
