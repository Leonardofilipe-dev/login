"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controller/userController"));
const express_1 = require("express");
const userValidate_1 = __importDefault(require("../validate/userValidate"));
const router = (0, express_1.Router)();
router.post('/user', userValidate_1.default, userController_1.default.create);
router.get('/user', userController_1.default.listAll);
router.get('/user/:id', userController_1.default.search);
router.put('/user/:id', userController_1.default.update);
router.delete('/user/:id', userController_1.default.delete);
exports.default = router;
