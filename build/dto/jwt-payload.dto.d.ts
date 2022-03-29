import { ObjectId } from 'mongoose';
import { Role } from "../enums/roles.enum";
export declare class JwtPayloadDto {
    id: ObjectId;
    firstname: string;
    lastname: string;
    email: string;
    roles: Role[];
}
