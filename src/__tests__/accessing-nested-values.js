import { includesJS, includesRamda } from '../accessing-nested-values'

describe('Accessing nested values by', () => {
  describe('includesJS', () => {
    describe('when something is present', () => {
      const obj = {
        data: {
          listOfItems: ['something', 'anything', 'everything'],
        },
      }
      it('should return true', () => {
        expect(includesJS(obj)).toEqual(true)
        expect(includesRamda(obj)).toEqual(true)
      })
    })
    describe('when something is missing', () => {
      const obj = {
        data: {
          listOfItems: ['anything', 'everything'],
        },
      }
      it('should return false', () => {
        expect(includesJS(obj)).toEqual(false)
        expect(includesRamda(obj)).toEqual(false)
      })
    })
    describe('when data is undefined', () => {
      const obj = {
        data: undefined
      }
      it('should return false', () => {
        expect(includesJS(obj)).toEqual(false)
        expect(includesRamda(obj)).toEqual(false)
      })
    })
    describe('when listOfItems is undefined', () => {
      const obj = {
        data: {
          listOfItems: undefined,
        },
      }
      it('should return false', () => {
        expect(includesJS(obj)).toEqual(false)
        expect(includesRamda(obj)).toEqual(false)
      })
    })
    describe('when listOfItems is empty list', () => {
      const obj = {
        data: {
          listOfItems: [],
        },
      }
      it('should return false', () => {
        expect(includesJS(obj)).toEqual(false)
        expect(includesRamda(obj)).toEqual(false)
      })
    })
    describe('when listOfItems is null', () => {
      const obj = {
        data: {
          listOfItems: null,
        },
      }
      it('should return false', () => {
        expect(includesJS(obj)).toEqual(false)
        expect(includesRamda(obj)).toEqual(false)
      })
    })
  })
})
