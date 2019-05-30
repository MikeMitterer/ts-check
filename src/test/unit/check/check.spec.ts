import 'jest-extended';
import { check, endsWith, isBetween, isLessThan, isNotUndefined, startsWith } from '../../../main';
import TestException from './TestException';
// import { loggerFactory } from '../../main/config/ConfigLog4j';

describe('valid.spec.ts', () => {
    // const logger = loggerFactory.getLogger('test.valid.spec.ts');

    // beforeEach(() => {
    // });
    //
    // afterEach(() => {
    // });

    test('for undefined', () => {
        expect(
            check(5)
                .ifit(isBetween(5, 10))
                .else(5),
        ).toBe(5);

        let v1: number | undefined = 5;
        v1 = undefined;
        expect(
            check(v1)
                .ifit(isNotUndefined)
                .else(5),
        ).toBe(5);

        expect(
            check('Mike')
                .ifit(isNotUndefined)
                .else('default'),
        ).toBe('Mike');

        expect(
            check(undefined)
                .ifit(isNotUndefined)
                .else('default'),
        ).toBe('default');
    });

    test('isBetween', () => {
        const result = check(1)
            .ifit(isBetween(3, 4))
            .else(3);

        expect(result).toBe(3);

        expect(
            check(4)
                .ifit(isBetween(5, 10))
                .else(5),
        ).toBe(5);

        expect(
            check(undefined)
                // @ts-ignore
                .ifit(isBetween(5, 10))
                .else(-1),
        ).toBe(-1);
    });

    test('isLessThan', () => {
        expect(
            check(5)
                .ifit(isLessThan(10))
                .else(10),
        ).toBe(10);

        expect(
            check(11)
                .ifit(isLessThan(10))
                .else(10),
        ).toBe(11);

        expect(
            check(undefined)
                // @ts-ignore
                .ifit(isLessThan(10))
                .else(11),
        ).toBe(11);
    });

    test('startsWith', () => {
        expect(
            check('Mike')
                .ifit(startsWith('M'))
                .else('<undefined>'),
        ).toBe('Mike');

        expect(
            check('Test')
                .ifit(startsWith('M'))
                .else('<undefined>'),
        ).toBe('<undefined>');

        expect(
            check(undefined)
                // @ts-ignore
                .ifit(startsWith('M'))
                .else('<undefined>'),
        ).toBe('<undefined>');
    });

    test('endsWith', () => {
        expect(
            check('Mike')
                .ifit(endsWith('e'))
                .else('<undefined>'),
        ).toBe('Mike');

        expect(
            check('Test')
                .ifit(endsWith('e'))
                .else('<undefined>'),
        ).toBe('<undefined>');

        expect(
            check(undefined)
                // @ts-ignore
                .ifit(endsWith('e'))
                .else('<undefined>'),
        ).toBe('<undefined>');
    });

    test('No Exception if value is valid', () => {
        let foundError = false;

        try {
            const result = check('Mike')
                .ifit(startsWith('M'))
                .else(() => {
                    throw new TestException("Found 'undefined' value!");
                });
            expect(result).toBe('Mike');
        } catch (e) {
            if (e instanceof TestException) {
                foundError = true;
            }
        }

        expect(foundError).toBeFalse();
    });

    test('Exception', () => {
        let foundError = false;

        try {
            check(undefined)
                // @ts-ignore
                .ifit(startsWith('M'))
                .else(() => {
                    throw new TestException("Found 'undefined' value!");
                });
        } catch (e) {
            if (e instanceof TestException) {
                foundError = true;
            }
        }

        expect(foundError).toBeTrue();
    });
});
