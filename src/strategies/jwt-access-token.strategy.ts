// NestJS
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";

// Other Dependencies
import { ExtractJwt, Strategy } from "passport-jwt";

// Custom
// DTOs
import { JwtPayloadDto } from "../dto/jwt-payload.dto";


@Injectable()
export class JwtAccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_ACCESS_TOKEN_SECRET
    });
  }

  async validate(jwtPayload: JwtPayloadDto) {
    return jwtPayload;
  }
}