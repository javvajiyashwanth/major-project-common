import { Request } from "express";
import { JwtPayloadDto } from "../dto/jwt-payload.dto";
declare const JwtRefreshTokenStrategy_base: new (...args: any[]) => any;
export declare class JwtRefreshTokenStrategy extends JwtRefreshTokenStrategy_base {
    constructor();
    validate(req: Request, jwtPayload: JwtPayloadDto): Promise<{
        refreshToken: any;
        id: import("typeorm").ObjectID;
        firstname: string;
        lastname: string;
        email: string;
        roles: import("..").Role[];
    }>;
}
export {};
