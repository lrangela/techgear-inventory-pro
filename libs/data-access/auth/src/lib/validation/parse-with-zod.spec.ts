import { describe, expect, it } from 'vitest';
import { DataContractError } from '@techgear/util';
import { AuthTokensDtoSchema } from '../contracts/auth.contracts';
import { parseWithZod } from './parse-with-zod';

describe('parseWithZod', () => {
  it('should throw DataContractError when contract validation fails', () => {
    const invalidPayload = { accessToken: '' };

    expect(() =>
      parseWithZod(AuthTokensDtoSchema, invalidPayload, 'auth.login')
    ).toThrow(DataContractError);
  });
});
