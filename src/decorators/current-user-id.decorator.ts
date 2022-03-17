// Nest
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

// Custom
// DTOs
import { PayloadDto } from "../dto/payload.dto";


export const CurrentUserId = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    const user = req.user as PayloadDto;
    return user.userId;
  }
)