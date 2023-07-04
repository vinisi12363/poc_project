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
const pg_1 = require("pg");
const user_repository_1 = __importDefault(require("../repositories/user.repository"));
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'usersPOCDB',
    password: 'root',
    port: 5432,
});
const userRepository = new user_repository_1.default(pool);
class UserService {
    selectUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return userRepository.selectUsersById(id);
        });
    }
    selectAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return userRepository.selectAllUsers();
        });
    }
    insertUsers(username, password, email) {
        return __awaiter(this, void 0, void 0, function* () {
            return userRepository.insertUsers(username, password, email);
        });
    }
}
exports.default = UserService;
