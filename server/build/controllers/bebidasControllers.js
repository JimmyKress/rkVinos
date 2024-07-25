"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
//Creo las peticiones
class BebidasControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [rows] = yield database_1.default.query('SELECT * FROM bebidas');
                console.log("Mostrar tabla", rows);
                res.json(rows);
            }
            catch (error) {
                console.log("Error al mostrar la tabla");
                res.status(500).json({ error: 'Error al mostrar la tabla' });
            }
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const [rows] = yield database_1.default.query('SELECT * FROM bebidas WHERE id = ?', [id]);
                console.log("Estos son los datos de la fila: ", rows);
                res.json(rows);
            }
            catch (error) {
                console.log("Error al mostrar la fila");
                res.status(500).json({ error: 'Error al mostrar la fila' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO bebidas SET ?', [req.body]);
                console.log("Se agrego una nueva fila a la tabla");
                res.json({ message: 'Bebida creada' });
            }
            catch (error) {
                console.log("Error al agregar una nueva fila");
                res.status(500).json({ error: 'Error al agregar una nueva fila' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query('DELETE FROM bebidas WHERE id = ?', [id]);
                console.log("La fila fue eliminada, id:", id);
                res.json({ message: 'Bebida eliminada' });
            }
            catch (error) {
                console.log("Error al eliminar la fila");
                res.status(500).json({ error: 'Error al eliminar la fila' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query('UPDATE bebidas SET ? WHERE id = ?', [req.body, id]);
                console.log("Fila actualizada");
                res.json({ message: 'Bebida actualizada' });
            }
            catch (error) {
                console.log("Error al actualizar los datos");
                res.status(500).json({ error: 'Error al actualizar los datos' });
            }
        });
    }
}
const bebidasControllers = new BebidasControllers();
exports.default = bebidasControllers;
