/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { Request } from "express";
import { JwtPayloadDto } from "../dto/jwt-payload.dto";
declare const JwtRefreshTokenStrategy_base: new (...args: any[]) => any;
export declare class JwtRefreshTokenStrategy extends JwtRefreshTokenStrategy_base {
    constructor();
    validate(req: Request, jwtPayload: JwtPayloadDto): Promise<{
        refreshToken: any;
        id: import("mongoose").Schema.Types.ObjectId;
        firstname: string;
        lastname: string;
        email: string;
        roles: import("..").Role[];
    }>;
}
export {};
