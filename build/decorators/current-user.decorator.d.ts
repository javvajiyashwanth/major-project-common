import { JwtPayloadWithRefreshTokenDto } from "../dto/jwt-payload-with-refresh-token.dto";
export declare const CurrentUser: (...dataOrPipes: (keyof JwtPayloadWithRefreshTokenDto | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
