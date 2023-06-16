import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'express-validation'
import { UnauthorizedError } from 'express-jwt';

const handleError = (error: any, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof ValidationError) {
        return res.status(error.statusCode || 400).json(error);
    }

    if (error instanceof UnauthorizedError) {
        return res.status(error.status || 401).json(error);
    }

    return res.status(500).json({ error: error.message || 'Internal Server Error' });
};

export default handleError;