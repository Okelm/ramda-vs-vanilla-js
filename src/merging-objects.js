import * as R from 'ramda'

export const mergingJS = (state, update) => ({
  cart: {
    items: {
      variousItems: state.cart.items.variousItems,
      differentItems: [
        ...state.cart.items.differentItems,
        ...update.cart.items.differentItems,
      ],
    },
  },
})

export const mergingRamda = (state, update) =>
  R.mergeDeepWith(R.concat, state, update)
