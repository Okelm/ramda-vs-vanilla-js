import * as R from 'ramda'

const sumUpRamda = R.curry((element, type) =>
  (element || [])
    .filter(element => element.type === type)
    .map(element => element.amount)
    .reduce((prev, next) => +prev + +next, 0),
)

const sumUpJS = element => type =>
  (element || [])
    .filter(element => element.type === type)
    .map(element => element.amount)
    .reduce((prev, next) => +prev + +next, 0)

export { sumUpRamda, sumUpJS }
