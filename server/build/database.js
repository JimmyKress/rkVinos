"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("./keys"));
const promise_1 = __importDefault(require("mysql2/promise"));
//creo la conexion
const pool = promise_1.default.createPool({
    host: keys_1.default.database.host,
    user: keys_1.default.database.user,
    password: keys_1.default.database.password,
    database: keys_1.default.database.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
exports.default = pool;
