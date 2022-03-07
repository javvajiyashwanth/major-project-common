import { IsString } from "class-validator";

import { PayloadDto } from "./payload.dto";

export class PayloadWithRefreshTokenDto extends PayloadDto {
  @IsString()
  refreshToken: string;
}