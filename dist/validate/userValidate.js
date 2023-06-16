"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validateUser = (req, res, next) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().min(3).max(30).required(),
        email: joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }),
        password: joi_1.default.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).json({ error: error.details[0].message });
    }
    else {
        next();
    }
};
exports.default = validateUser;
