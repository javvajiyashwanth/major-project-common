// Other Dependencies
import { IsString } from "class-validator";

// Custom
// DTOs
import { PayloadDto } from "./payload.dto";


export class PayloadWithRefreshTokenDto extends PayloadDto {
  @IsString()
  refreshToken: string;
}