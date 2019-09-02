import { mergingJS, mergingRamda } from '../merging-objects'

describe('mergingObject', () => {
  describe('when objects are defined', () => {
    const state = {
      cart: {
        items: {
          variousItems: [
            {
              id: 1,
            },
          ],
          differentItems: [
            {
              id: 1,
            },
          ],
        },
      },
    }
    const update = {
      cart: {
        items: {
          differentItems: [
            {
              id: 2,
              total: 100,
            },
            {
              id: 3,
              total: 1000,
            },
          ],
        },
      },
    }
    const expected = {
      cart: {
        items: {
          variousItems: [
            {
              id: 1,
            },
          ],
          differentItems: [
            {
              id: 1,
            },
            {
              id: 2,
              total: 100,
            },
            {
              id: 3,
              total: 1000,
            },
          ],
        },
      },
    }

    it('should return merged objects', () => {
      const outputRamda = mergingRamda(state, update)
      const outputJS = mergingJS(state, update)
      expect(outputRamda).toEqual(expected)
      expect(outputJS).toEqual(expected)
    })
  })
})
