"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3001; // murat uses port 3001 here as CRA uses 3001
const staticPath = path_1.default.resolve(__dirname, "../../build/static");
const buildPath = path_1.default.resolve(__dirname, "../../build");
const indexPath = path_1.default.resolve(__dirname, "../../build/index.html");
app.use("/", express_1.default.static(buildPath));
// app.use(express.static(path.join(__dirname, 'build')));
app.use("/static", express_1.default.static(staticPath));
app.all("/", (req, res) => {
    res.sendFile(indexPath);
});
// app.get('/', (req, res) => {
//    res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
app.get('/env.js', (req, res) => {
    const FILENAME = 'env.js';
    const MIMETYPE = 'application/javascript';
    res.setHeader('Content-Disposition', `attachment;filename=${FILENAME}`);
    res.setHeader('Content-Type', MIMETYPE);
    res.send(`window._env_ = { API_URL: "${process.env.REACT_APP_HELLO} (at runtime!)" };` +
        `console.log("Hello, world! at 1122 hrs", window?._env_?.API_URL);`);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map