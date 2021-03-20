"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teste_routes_1 = require("./teste.routes");
const routes = express_1.Router();
routes.use('/teste', teste_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map