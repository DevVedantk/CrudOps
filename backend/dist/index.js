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
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true
}));
exports.app.get("/data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield client.users.findMany({});
    res.json({
        message: "hello wolrd",
        data
    });
}));
exports.app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        console.log(password);
        console.log(email);
        const putIntoDB = yield client.users.create({
            data: {
                email,
                password
            }
        });
        console.log(putIntoDB);
        res.json({
            putIntoDB,
            message: "signed upp!!"
        });
    }
    catch (e) {
        console.log(e);
    }
}));
exports.app.get("/host", (req, res) => {
    res.send(os_1.default.hostname());
});
exports.app.listen(3000, () => {
    console.log("server started");
});
