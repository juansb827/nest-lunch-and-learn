import { UnauthorizedException } from '@nestjs/common';

export function authenticathor(req, res, next) {
    const userToken = req.headers['user-token'];
    console.log(`Verifying User... ${userToken}`);
    if (userToken !== "78") {
        throw new UnauthorizedException('Invalid credentials');
    }
    next();
};

