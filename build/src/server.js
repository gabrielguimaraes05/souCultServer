"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
// import routes from './routes';
const app = express();
app.use(cors());
app.use(express.json());
// app.use(routes);
app.listen(3333);
//# sourceMappingURL=server.js.map