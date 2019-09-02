import { mappingRamda, mappingIfs, mappingSwitch } from '../mapping'

describe('mappingTypes', () => {
  describe('table', () => {
    const type = 'table'
    const expected = 'Furniture'

    it('should return mapped type', () => {
      const dataRamda = mappingRamda(type)
      const dataIfs = mappingIfs(type)
      const dataSwitch = mappingSwitch(type)
      expect(dataRamda).toEqual(expected)
      expect(dataIfs).toEqual(expected)
      expect(dataSwitch).toEqual(expected)
    })
  })
  describe('chair', () => {
    const type = 'chair'
    const expected = 'Furniture'

    it('should return mapped type', () => {
      const dataRamda = mappingRamda(type)
      const dataIfs = mappingIfs(type)
      const dataSwitch = mappingSwitch(type)
      expect(dataRamda).toEqual(expected)
      expect(dataIfs).toEqual(expected)
      expect(dataSwitch).toEqual(expected)
    })
  })

  describe('trousers', () => {
    const type = 'trousers'
    const expected = 'Cloths'

    it('should return mapped type', () => {
      const dataRamda = mappingRamda(type)
      const dataIfs = mappingIfs(type)
      const dataSwitch = mappingSwitch(type)
      expect(dataRamda).toEqual(expected)
      expect(dataIfs).toEqual(expected)
      expect(dataSwitch).toEqual(expected)
    })
  })

  describe('house', () => {
    const type = 'house'
    const expected = 'Real Estate'

    it('should return mapped type', () => {
      const dataRamda = mappingRamda(type)
      const dataIfs = mappingIfs(type)
      const dataSwitch = mappingSwitch(type)
      expect(dataRamda).toEqual(expected)
      expect(dataIfs).toEqual(expected)
      expect(dataSwitch).toEqual(expected)
    })
  })

  describe('example', () => {
    const type = 'example'
    const expected = 'Unknown'

    it('should return mapped type', () => {
      const dataRamda = mappingRamda(type)
      const dataIfs = mappingIfs(type)
      const dataSwitch = mappingSwitch(type)
      expect(dataRamda).toEqual(expected)
      expect(dataIfs).toEqual(expected)
      expect(dataSwitch).toEqual(expected)
    })
  })

  describe('undefined', () => {
    const type = undefined
    const expected = 'Unknown'

    it('should return mapped type', () => {
      const dataRamda = mappingRamda(type)
      const dataIfs = mappingIfs(type)
      const dataSwitch = mappingSwitch(type)
      expect(dataRamda).toEqual(expected)
      expect(dataIfs).toEqual(expected)
      expect(dataSwitch).toEqual(expected)
    })
  })

  describe('null', () => {
    const type = null
    const expected = 'Unknown'

    it('should return mapped type', () => {
      const dataRamda = mappingRamda(type)
      const dataIfs = mappingIfs(type)
      const dataSwitch = mappingSwitch(type)
      expect(dataRamda).toEqual(expected)
      expect(dataIfs).toEqual(expected)
      expect(dataSwitch).toEqual(expected)
    })
  })
})
