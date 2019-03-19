export type Verifier<T> = (value: T | undefined) => boolean;

export const isUndefined: Verifier<unknown> = (value) => value === undefined;
export const isNotUndefined: Verifier<unknown> = (value) => !isUndefined(value);

export const startsWith: (test: string) => Verifier<string> = (test: string) => (value) => {
    return typeof value === 'string' && value.startsWith(test);
};

export const endsWith: (test: string) => Verifier<string> = (test: string) => (value) => {
    return typeof value === 'string' && value.endsWith(test);
};

export const isLessThan: (min: number) => Verifier<number> = (min: number) => (value) => {
    return typeof value === 'number' && value > min;
};

export const isBetween: (min: number, max: number) => Verifier<number> = (
    min: number,
    max: number,
) => (value) => {
    return typeof value === 'number' && value >= min && value <= max;
};
