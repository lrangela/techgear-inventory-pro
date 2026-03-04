export * from './lib/api/auth.api';
export * from './lib/models/auth.models';
export * from './lib/storage/token.storage';
export * from './lib/state/auth.store';
export * from './lib/interceptors/auth.interceptor';
export * from './lib/guards/auth.guard';
export * from './lib/guards/role.guard';
export * from './lib/login-page.config';

// Contracts (opcional, si otras libs necesitan schemas)
export { AuthTokensDtoSchema, AuthUserDtoSchema } from './lib/contracts/auth.contracts';
export type { AuthTokensDto, AuthUserDto } from './lib/contracts/auth.contracts';
