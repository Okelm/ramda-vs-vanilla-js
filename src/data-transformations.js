import * as R from 'ramda'

// export const enhanceFavoritesTs = (favs: Favorites): EnhancedFavorites =>
//   favs.movies.map(({ name, views }) => ({
//     name,
//     views,
//     value: `${name} has been viewed ${views}`,
//   }))

export const enhanceFavoritesRamda = R.pipe(
  R.propOr([], 'movies'),
  R.map(({ name, views }) => ({
    name,
    views,
    value: `${name} has been viewed ${views}`,
  })),
)

export const enhanceFavoritesTernary = favs =>
  favs
    ? favs.movies
      ? favs.movies.map(({ name, views }) => ({
          name,
          views,
          value: `${name} has been viewed ${views}`,
        }))
      : []
    : []

export const enhanceFavoritesIfs = favs => {
  if (favs) {
    if (favs.movies) {
      return favs.movies.map(({ name, views }) => ({
        name,
        views,
        value: `${name} has been viewed ${views}`,
      }))
    } else {
      return []
    }
  } else {
    return []
  }
}
