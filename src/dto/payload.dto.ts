// Other Dependencies
import { IsString } from "class-validator";
import { ObjectID } from "typeorm";


export class PayloadDto {
  @IsString()
  userId: ObjectID;
}