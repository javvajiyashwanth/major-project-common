import { JwtPayloadDto } from "../dto/jwt-payload.dto";
declare const JwtAccessTokenStrategy_base: new (...args: any[]) => any;
export declare class JwtAccessTokenStrategy extends JwtAccessTokenStrategy_base {
    constructor();
    validate(jwtPayload: JwtPayloadDto): Promise<JwtPayloadDto>;
}
export {};
