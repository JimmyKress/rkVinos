"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bebidasControllers_1 = __importDefault(require("../controllers/bebidasControllers"));
const express_1 = require("express");
class BebidasRoutes {
    // const multer = require('multer');
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
        this.router;
    }
    config() {
        this.router.get('/', bebidasControllers_1.default.list);
        this.router.get('/:id', bebidasControllers_1.default.listOne);
        this.router.post('/', bebidasControllers_1.default.create);
        this.router.delete('/:id', bebidasControllers_1.default.delete);
        this.router.put('/:id', bebidasControllers_1.default.update);
    }
}
const bebidasRoutes = new BebidasRoutes();
exports.default = bebidasRoutes.router;
