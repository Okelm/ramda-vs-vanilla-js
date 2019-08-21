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
      })
    })
    describe('when something is missing', () => {
      const obj = {
        data: {
          listOfItems: ['anything', 'everything'],
        },
      }
      it('should return true', () => {
        expect(includesJS(obj)).toEqual(false)
      })
    })
    describe('when data is undefined', () => {
      const obj = {
        data: undefined
      }
      it('should return true', () => {
        expect(includesJS(obj)).toEqual(false)
      })
    })
  })
  describe('includesRamda', () => {
    describe('when something is present', () => {
      const obj = {
        data: {
          listOfItems: ['something', 'anything', 'everything'],
        },
      }
      it('should return true', () => {
        expect(includesRamda(obj)).toEqual(true)
      })
    })
    describe('when something is missing', () => {
      const obj = {
        data: {
          listOfItems: ['anything', 'everything'],
        },
      }
      it('should return true', () => {
        expect(includesRamda(obj)).toEqual(false)
      })
    })
    describe('when data is undefined', () => {
      const obj = {
        data: undefined
      }
      it('should return true', () => {
        expect(includesRamda(obj)).toEqual(false)
      })
    })
  })
})
