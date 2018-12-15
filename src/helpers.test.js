import helpers from './helpers';

describe('Test for formatDate function', () => {
    it('Should return undefined if the date is invalid', () => {
        expect(helpers.formatDate('something')).toBe(undefined);
    });

    it('ISO date would be DD-MM-YYYY', () => {
        expect(helpers.formatDate('2018-12-10T01:06:51Z')).toBe("10-12-2018")
    });

    it('Date and month should be double digit to keep the format right', () => {
        expect(helpers.formatDate('2018-12-03T01:04:57Z')).toBe("03-12-2018")
        expect(helpers.formatDate('2018-05-03T01:04:57Z')).toBe("03-05-2018")
    });
});