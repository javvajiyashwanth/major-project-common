// NestJS
import { ForbiddenException, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";

// Other Dependencies
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";

// Custom
// DTOs
import { JwtPayloadDto } from "../dto/jwt-payload.dto";


@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_REFRESH_TOKEN_SECRET,
      passReqToCallback: true
    });
  }

  async validate(req: Request, jwtPayload: JwtPayloadDto) {
    const refreshToken = req?.get('authorization')?.replace('Bearer', '').trim();
    if (!refreshToken) {
      throw new ForbiddenException('Refresh token malformed');
    }
    return {
      ...jwtPayload,
      refreshToken
    };
  }
}