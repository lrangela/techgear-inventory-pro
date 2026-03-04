/**
 * Minimal type to represent validation issues.
 * Compatible with ZodIssue without importing Zod.
 */
export type ContractIssue = {
    path: (string | number)[];
    message: string;
};

/**
 * Error thrown when an HTTP response does not match the expected contract.
 */
export class DataContractError extends Error {
    constructor(
        public readonly source: string,
        public readonly issues: ContractIssue[],
        message = 'Invalid server response'
    ) {
        super(message);
        this.name = 'DataContractError';
    }

    /**
     * Human-readable summary for validation issues.
     */
    getIssuesSummary(): string {
        return this.issues
            .map(issue => `${issue.path.join('.')}: ${issue.message}`)
            .join('; ');
    }
}
