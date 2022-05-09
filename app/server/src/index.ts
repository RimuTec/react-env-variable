import express from 'express'
import path from 'path'
const app = express();

// To run both express and CRA at the same time (rare scenario), in the package.json of the CRA
// you'll need to add the following line:
// "proxy": "http://localhost:3001"
// Do not leave the proxy entry when committing as it will break production.
// The proxy can also be set manually:
//    See: https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
// The port number that must be different to the port number for the CRA (currently 3000). The following
// port number must match the docker-internal port number, e.g.
// 3000:3000
// 3001:3001
// In production we will expose 4000 and map it to 3001 where express will be listing
const port = 3001;

const staticPath = path.resolve(__dirname, "../../build/static");
const buildPath = path.resolve(__dirname, "../../build");
const indexPath = path.resolve(__dirname, "../../build/index.html");

////////////////////////////////////////////////////////////////////////////////
// Set up middle ware. Order matters.

// middleware to intercept request for '/env.js' must be before the static handlers for the CRA
app.use('/env.js', (req, res) => {
   const FILENAME = 'env.js';
   const MIMETYPE = 'application/javascript';
   res.setHeader('Content-Disposition', `attachment;filename=${FILENAME}`);
   res.setHeader('Content-Type', MIMETYPE);
   res.send(
      // Here we can access the environment variable that was sent to the container:
      `window._env_ = { API_URL: "${process.env.REACT_APP_HELLO} (at runtime!)" };` +
      `console.log("Hello, world! at 1123 hrs", window?._env_?.API_URL);`);
});

app.use("/", express.static(buildPath));
app.use("/static", express.static(staticPath));

////////////////////////////////////////////////////////////////////////////////
// Set up handlers/routes

app.all("/", (req, res) => {
   res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
