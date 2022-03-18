// Other Dependencies
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ObjectID } from "typeorm";

// Custom
// Enums
import { Role } from "../enums/roles.enum";


export class JwtPayloadDto {
  @IsString()
  id: ObjectID;

  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsEmail()
  email: string;

  roles: Role[];
}