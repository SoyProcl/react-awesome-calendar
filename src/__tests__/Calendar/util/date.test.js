import { getDate, checkDate } from '../../../app/Calendar/util/date';

describe('date', () => {
  describe('getDate', () => {
    it('should return a date without the time', () => {
      const date = new Date(2019, 0, 1, 5, 10, 42, 5);
      expect(getDate(date)).toMatchSnapshot();
    });
    it('should return undefined if date is not valid', () => {
      const date = 'hello world';
      expect(getDate(date)).toBeUndefined();
    });
  });
  describe('checkDate', () => {
    it('should return true if the date is valid', () => {
      const date = new Date(2019, 0, 1, 5, 10, 42, 5);
      expect(checkDate(date)).toBeTruthy();
    });
    it('should return false if the date passed in is not valid', () => {
      const date = 'hello world';
      expect(checkDate(date)).toBeFalsy();
    });
  });
});
