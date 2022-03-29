// Other Dependencies
import { ArrayNotEmpty, ArrayUnique, IsArray, IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { ObjectId } from 'mongoose';

// Custom
// Enums
import { Role } from "../enums/roles.enum";


export class JwtPayloadDto {
  @IsNotEmpty()
  @IsString()
  id: ObjectId;

  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsEnum(Role, { each: true })
  roles: Role[];
}