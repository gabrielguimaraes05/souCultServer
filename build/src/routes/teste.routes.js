"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testeRouter = express_1.Router();
testeRouter.get('/', async (_request, response) => {
    return response.json('SUCESSO');
});
exports.default = testeRouter;
//# sourceMappingURL=teste.routes.js.map