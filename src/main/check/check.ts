/**
 * Provides syntax for checking a specific value....
 *
 * @param value Value to be verified
 */
import { Verifier } from './verifier';

export function check<I>(value: I) {
    return {
        ifit: (verifier: Verifier<I>) => {
            return {
                else: <O>(defaultValue: O): NonNullable<I> | O => {
                    if (verifier(value) && typeof value !== 'undefined') {
                        return value as NonNullable<I>;
                    } else {
                        if (typeof defaultValue === 'function') {
                            return defaultValue();
                        }
                        return defaultValue;
                    }
                },
            };
        },
    };
}
