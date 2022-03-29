// Other Dependencies
import { IsNotEmpty, IsString } from "class-validator";

// Custom
// DTOs
import { JwtPayloadDto } from "./jwt-payload.dto";


export class JwtPayloadWithRefreshTokenDto extends JwtPayloadDto {
  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}