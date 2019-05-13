import { max_numbers } from './index'

describe('max_number', () => {
  describe('given an empty array', () => {
    it('returns 0', () => {
      expect(max_numbers([])).toEqual(0)
    })
  });
  describe('given an array of numbers', () => {
    it('returns the max number', () => {
      expect(max_numbers([1,2,3])).toEqual(3)
    })
  })
});