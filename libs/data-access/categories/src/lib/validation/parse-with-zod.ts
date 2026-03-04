import { z } from 'zod';
import { ContractIssue, DataContractError } from '@techgear/util';

/**
 * Note: temporary duplicate of the auth/products helper to avoid creating a shared lib now.
 * It will be consolidated in a later phase.
 */

function mapZodIssues(issues: z.core.$ZodIssue[]): ContractIssue[] {
  return issues.map((issue) => ({
    path: issue.path.filter((p): p is string | number => typeof p !== 'symbol'),
    message: issue.message,
  }));
}

export function parseWithZod<T>(
  schema: z.ZodType<T>,
  payload: unknown,
  source: string
): T {
  const result = schema.safeParse(payload);

  if (!result.success) {
    throw new DataContractError(source, mapZodIssues(result.error.issues));
  }

  return result.data;
}
