export interface AuthTokensDto {
  accessToken: string;
  refreshToken: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export type AuthMode = 'remote' | 'mock';

export interface AuthUserDto {
  id: number;
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  image?: string;
  role?: string;
}

export interface AuthUser {
  id: number;
  username: string;
  email: string;
  name: string;
  role: string | null;
  avatar: string | null;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginAccountHint {
  email: string;
  username: string;
  password: string;
  role?: string | null;
  source: 'mock' | 'remote';
}

export interface MockAuthAccount {
  id: number;
  email: string;
  username: string;
  password: string;
  name: string;
  role: string;
  avatar?: string;
}

export const mapAuthTokens = (dto: AuthTokensDto): AuthTokens => ({
  accessToken: dto.accessToken,
  refreshToken: dto.refreshToken,
});

export const mapAuthUser = (dto: AuthUserDto): AuthUser => {
  const fullName = [dto.firstName, dto.lastName].filter(Boolean).join(' ').trim();

  return {
    id: dto.id,
    username: dto.username,
    email: dto.email ?? '',
    name: fullName || dto.username,
    role: dto.role ?? null,
    avatar: dto.image ?? null,
  };
};
