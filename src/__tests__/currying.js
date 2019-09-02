import { sumUpRamda, sumUpJS } from '../currying'
import * as R from 'ramda'

describe('currying', () => {
  describe('sumUp', () => {
    const elementList = [
      { type: 'requested', amount: 10 },
      { type: 'requested', amount: 20 },
      { type: 'unknows', amount: 20 },
    ]
    const expected = 30
    it('should return mapped type', () => {
      const sum1 = sumUpRamda(elementList, 'requested')
      const sumUpElements = sumUpRamda(elementList)
      const sum2 = sumUpElements('requested')
      const sumUpTypeRequested = sumUpRamda(R.__, 'requested')
      const sum3 = sumUpTypeRequested(elementList)

      const sumJS = sumUpJS(elementList)('requested')

      expect(sum1).toEqual(expected)
      expect(sum2).toEqual(expected)
      expect(sum3).toEqual(expected)

      expect(sumJS).toEqual(expected)
    })
  })
})
