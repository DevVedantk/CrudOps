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
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield client.users.findMany({});
    res.json({
        message: "hello wolrd",
        data
    });
}));
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req);
        const { email, password } = req.body;
        yield client.users.create({
            data: {
                email,
                password
            }
        });
        res.json({
            message: "signed upp!!"
        });
    }
    catch (e) {
        console.log(e);
    }
}));
app.get("/host", (req, res) => {
    res.send(os_1.default.hostname());
});
app.listen(3000, () => {
    console.log("server started");
});
