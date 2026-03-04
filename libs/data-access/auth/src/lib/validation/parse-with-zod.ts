import { z } from 'zod';
import { DataContractError, ContractIssue } from '@techgear/util';

/**
 * Maps ZodIssue to ContractIssue without leaking Zod outside data-access.
 */
function mapZodIssues(issues: z.core.$ZodIssue[]): ContractIssue[] {
    return issues.map(issue => ({
        path: issue.path.filter((p): p is string | number => typeof p !== 'symbol'),
        message: issue.message,
    }));
}

/**
 * Parses payload with a Zod schema.
 * @param schema - Zod schema used to validate payload.
 * @param payload - Data to validate.
 * @param source - Source identifier (for example: 'auth.login').
 * @returns Validated and transformed data.
 * @throws DataContractError when validation fails.
 */
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
