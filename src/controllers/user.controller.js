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
exports.insertUsers = exports.getAllUsers = exports.getUsersById = void 0;
const user_aservices_1 = __importDefault(require("../services/user.aservices"));
const userService = new user_aservices_1.default();
function getUsersById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const result = yield userService.selectUserById(id);
            console.log(result);
            res.status(200).send(result);
        }
        catch (err) {
            console.log(err);
            res.status(500).send('Erro ao obter usuario');
        }
    });
}
exports.getUsersById = getUsersById;
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = userService.selectAllUsers;
            res.status(200).json(result);
        }
        catch (err) {
            console.log(err);
            res.status(500).send('Erro ao obter usuario');
        }
    });
}
exports.getAllUsers = getAllUsers;
function insertUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield userService.insertUsers(req.body.username, req.body.password, req.body.email);
            console.log(result);
            res.status(200).send(result);
        }
        catch (err) {
            console.log(err);
            res.status(500).send('Erro ao obter usuario');
        }
    });
}
exports.insertUsers = insertUsers;
