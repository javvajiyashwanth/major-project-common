import { ObjectID } from "typeorm";
import { Role } from "../enums/roles.enum";
export declare class JwtPayloadDto {
    id: ObjectID;
    firstname: string;
    lastname: string;
    email: string;
    roles: Role[];
}
