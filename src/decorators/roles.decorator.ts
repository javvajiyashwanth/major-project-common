// NestJS
import { SetMetadata } from '@nestjs/common';

// Custom
// Enums
import { Role } from '../enums/roles.enum';


export const ROLES_KEY = 'roles';
export const hasRoles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);