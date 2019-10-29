import { UnauthorizedException } from '@nestjs/common';

export function authenticathor(req, res, next: Function) {
    const userToken = req.headers['user-token'];
    console.log(`Verifying User... ${userToken}`);
    if (userToken === "78") {
        req.user = {
            id: 43,
            roles: [],
        }
        return next();
    }
    if (userToken === "79") {
        req.user = {
            id: 65,
            roles: ['admin'],
        }
        return next();
    }
    throw new UnauthorizedException('Invalid credentials');
};
