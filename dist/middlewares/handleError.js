"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
const express_jwt_1 = require("express-jwt");
const handleError = (error, req, res, next) => {
    if (error instanceof express_validation_1.ValidationError) {
        return res.status(error.statusCode || 400).json(error);
    }
    if (error instanceof express_jwt_1.UnauthorizedError) {
        return res.status(error.status || 401).json(error);
    }
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
};
exports.default = handleError;
