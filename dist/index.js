"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URLController_1 = require("./controller/URLController");
const express_1 = __importDefault(require("express"));
const MongoConnection_1 = require("./database/MongoConnection");
const port = 5000;
const api = express_1.default();
api.use(express_1.default.json());
const database = new MongoConnection_1.MongoConnection();
database.connect;
const urlController = new URLController_1.URLController();
api.post("/shorten", urlController.shorten);
api.get("/:hash", urlController.redirect);
api.listen(port, () => console.log(`Express escutando na porta ${port}`));
//# sourceMappingURL=index.js.map