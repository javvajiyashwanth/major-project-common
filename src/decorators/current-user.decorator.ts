// Nest
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

// Custom
// DTOs
import { PayloadWithRefreshTokenDto } from "../dto/payload-with-refresh-token.dto";


export const CurrentUser = createParamDecorator(
  (data: keyof PayloadWithRefreshTokenDto | undefined, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();

    if (!data) {
      return req.user;
    }
    
    return req.user[data];
  }
)