// NestJS
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

// Custom
// DTOs
import { JwtPayloadWithRefreshTokenDto } from "../dto/jwt-payload-with-refresh-token.dto";


export const CurrentUser = createParamDecorator(
  (data: keyof JwtPayloadWithRefreshTokenDto | undefined, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    if (!data) {
      return req.user;
    }
    return req.user[data];
  }
);