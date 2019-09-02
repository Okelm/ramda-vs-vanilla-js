import { createRange } from '../ranges'

describe('createRange', () => {
  const range = createRange()
  const expected = [30, 31]

  it('should return a range', () => {
    expect(range).toEqual(expected)
  })
})
