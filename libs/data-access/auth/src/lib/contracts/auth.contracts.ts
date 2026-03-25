import { z } from 'zod';

export const AuthTokensDtoSchema = z.object({
  accessToken: z.string().min(1, 'Access token is required'),
  refreshToken: z.string().min(1, 'Refresh token is required'),
});

export type AuthTokensDto = z.infer<typeof AuthTokensDtoSchema>;

export const AuthUserDtoSchema = z
  .object({
    id: z.number().int().positive('User ID is invalid'),
    username: z.string().min(1, 'Username is required'),
    email: z.string().email('Email is invalid').optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    image: z.string().url().optional(),
    role: z.string().optional(),
  })
  .passthrough();

export type AuthUserDto = z.infer<typeof AuthUserDtoSchema>;

export const AuthLoginHintDtoSchema = z
  .object({
    username: z.string().min(1, 'Username is required'),
    password: z.string().min(1, 'Password is required'),
    email: z.string().email('Email is invalid'),
    role: z.string().optional(),
  })
  .passthrough();

export type AuthLoginHintDto = z.infer<typeof AuthLoginHintDtoSchema>;
