import * as R from 'ramda'

export const mappingRamda = R.cond([
  [R.either(R.equals('chair'), R.equals('table')), R.always('Furniture')],
  [R.equals('trousers'), R.always('Cloths')],
  [R.equals('house'), R.always('Real Estate')],
  [R.T, R.always('Unknown')],
])

export const mappingIfs = type => {
  if (type === 'table' || type === 'chair') {
    return 'Furniture'
  }
  if (type === 'trousers') {
    return 'Cloths'
  }
  if (type === 'house') {
    return 'Real Estate'
  }
  return 'Unknown'
}

export const mappingSwitch = type => {
  switch (type) {
    case 'table':
      return 'Furniture'
    case 'chair':
      return 'Furniture'
    case 'trousers':
      return 'Cloths'
    case 'house':
      return 'Real Estate'
    default:
      return 'Unknown'
  }
}
