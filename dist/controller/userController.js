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
const userModels_1 = __importDefault(require("../model/userModels"));
class userController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                const user = new userModels_1.default({
                    name,
                    email,
                    password
                });
                yield user.save();
                res.status(201).json(user);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userModels_1.default.find();
                res.json(user);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    search(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.id;
                const user = yield userModels_1.default.findById(userId);
                if (!user) {
                    return res.status(404).send('User not found!');
                }
                res.json(user);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.id;
                const { name, email, password } = req.body;
                const updatedUser = yield userModels_1.default.findByIdAndUpdate(userId, { name, email, password }, { new: true });
                if (!updatedUser) {
                    return res.status(404).send('User not found!');
                }
                res.json(updatedUser);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.id;
                const deletedUser = yield userModels_1.default.findByIdAndDelete(userId);
                if (!deletedUser) {
                    return res.status(404).send('User not found!');
                }
                res.sendStatus(204);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
}
exports.default = new userController();
