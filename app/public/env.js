// Default env.js file for development environment. Requires the API backend to run.
window._env_ = {
   API_URL: "https://example.com?hrs=1711"
   // Can't use env variable from process, as this script will be executed
   // in the browser. The following will not work:
   // API_URL: `${process.env.REACT_APP_HELLO}`
};

console.log("loc 220508-1602: using API_URL=", window?._env_?.API_URL);
