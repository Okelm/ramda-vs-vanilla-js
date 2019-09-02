import {
  enhanceFavoritesRamda,
  enhanceFavoritesTernary,
  enhanceFavoritesIfs,
} from '../data-transformations'

describe('selectingCountry', () => {
  describe('when things are defined', () => {
    const favorites = {
      movies: [
        {
          name: 'The Shawshank Redemption',
          views: 264726342,
        },
        {
          name: 'The Godfather',
          views: 264726343,
        },
      ],
      otherProps: {},
    }
    const expectedValue = [
      {
        name: 'The Shawshank Redemption',
        views: 264726342,
        value: 'The Shawshank Redemption has been viewed 264726342',
      },
      {
        name: 'The Godfather',
        views: 264726343,
        value: 'The Godfather has been viewed 264726343',
      },
    ]

    const actualValue = enhanceFavoritesRamda(favorites)
    const actualValue2 = enhanceFavoritesTernary(favorites)
    const actualValue3 = enhanceFavoritesIfs(favorites)
    it('should return expected values', () => {
      expect(actualValue).toEqual(expectedValue)
      expect(actualValue2).toEqual(expectedValue)
      expect(actualValue3).toEqual(expectedValue)
    })
  })

  describe('when otherProp is an empty object', () => {
    const favorites = {
      otherProp: {},
    }
    const expectedValue = []

    const actualValue = enhanceFavoritesRamda(favorites)
    const actualValue2 = enhanceFavoritesTernary(favorites)
    const actualValue3 = enhanceFavoritesIfs(favorites)
    it('should return expected values', () => {
      expect(actualValue).toEqual(expectedValue)
      expect(actualValue2).toEqual(expectedValue)
      expect(actualValue3).toEqual(expectedValue)
    })
  })

  describe('when input is an empty array', () => {
    const favorites = undefined
    const expectedValue = []

    const actualValue = enhanceFavoritesRamda(favorites)
    const actualValue2 = enhanceFavoritesTernary(favorites)
    const actualValue3 = enhanceFavoritesIfs(favorites)
    it('should return expected values', () => {
      expect(actualValue).toEqual(expectedValue)
      expect(actualValue2).toEqual(expectedValue)
      expect(actualValue3).toEqual(expectedValue)
    })
  })
})
