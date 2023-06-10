"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./router/index"));
const db_1 = __importDefault(require("./dataBase/db"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
db_1.default.on("error", console.log.bind(console, "Erro ao conectar ao Mongo"));
db_1.default.once("open", () => {
    console.log("Connected successfully!");
});
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/", index_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
