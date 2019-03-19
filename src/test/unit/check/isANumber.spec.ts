// import 'jest-extended';
// import { loggerFactory } from '../../main/config/ConfigLog4j';

import { URL, Url } from 'url';
import { check, isANumber } from '../../../main';

describe('isANumber.spec.ts', () => {
    // const logger = loggerFactory.getLogger('test.isANumber.spec.ts');

    // beforeEach(() => {
    // });
    //
    // afterEach(() => {
    // });

    test('isANumber', () => {
        const url: Url = new URL('http://www.mikemitterer.at');

        expect(url.port).toBe('');

        expect(
            parseInt(
                check(url.port)
                    .ifit(isANumber)
                    .else(''),
                10,
            ),
        ).toBe(NaN);

        expect(
            parseInt(
                check(url.port)
                    .ifit(isANumber)
                    .else('80'),
                10,
            ),
        ).toBe(80);

        expect(
            parseInt(
                check(undefined)
                    .ifit(isANumber)
                    .else('80'), // else(80) is not possible here because parseInt wants a string!
                10,
            ),
        ).toBe(80);

        expect(
            check(undefined)
                .ifit(isANumber)
                .else('80'),
        ).toBe('80');

        expect(
            check(undefined)
                .ifit(isANumber)
                .else(80),
        ).toBe(80);

        expect(
            check(10)
                .ifit(isANumber)
                .else(80),
        ).toBe(10);

        expect(
            check(NaN)
                .ifit(isANumber)
                .else(80),
        ).toBe(80);
    });
});
