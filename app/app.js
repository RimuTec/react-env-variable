// https://expressjs.com/en/starter/hello-world.html
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// app.get('/', express.static('build'));
app.use(express.static(path.join(__dirname, 'build')))

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/env.js', function(req, res) {
   const FILENAME = 'env.js';
   const MIMETYPE = 'application/javascript';
   res.setHeader('Content-Disposition', `attachment;filename=${FILENAME}`);
   res.setHeader('Content-Type', MIMETYPE);
   res.send(
      `window._env_ = { API_URL: "${process.env.REACT_APP_HELLO} (at runtime!)" };` +
      `console.log("Hello, world! at 0953 hrs", window?._env_?.API_URL);`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
