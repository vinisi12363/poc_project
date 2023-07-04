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
Object.defineProperty(exports, "__esModule", { value: true });
class UserRepository {
    constructor(pool) {
        this.pool = pool;
    }
    selectUsersById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM users WHERE id = $1';
            const values = [id];
            const { rows } = yield this.pool.query(query, values);
            return rows[0];
        });
    }
    selectAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM users';
            const { rows } = yield this.pool.query(query);
            return rows[0];
        });
    }
    insertUsers(username, password, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'INSERT INTO users (username , password, email) VALUES ($1,$2,$3) RETURNING id';
            const values = [username, password, email];
            const { rows } = yield this.pool.query(query, values);
            return rows[0];
        });
    }
}
exports.default = UserRepository;
