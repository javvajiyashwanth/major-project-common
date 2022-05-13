// NestJS
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

// Custom
// DTOs
import { JwtPayloadDto } from "../dto/jwt-payload.dto";


export const CurrentUserId = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    const user = req.user as JwtPayloadDto;
    return user.id;
  }
);