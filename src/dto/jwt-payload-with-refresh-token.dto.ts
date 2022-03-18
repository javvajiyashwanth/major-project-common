// Other Dependencies
import { IsString } from "class-validator";

// Custom
// DTOs
import { JwtPayloadDto } from "./jwt-payload.dto";


export class JwtPayloadWithRefreshTokenDto extends JwtPayloadDto {
  @IsString()
  refreshToken: string;
}