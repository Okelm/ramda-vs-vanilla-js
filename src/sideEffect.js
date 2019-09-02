import * as R from 'ramda'

export const sideEffectRamda = (date, navigate) =>
  R.pipe(
    R.map(R.prop('amount')),
    R.sum(),
    R.tap(console.log),
    R.when(R.lt(35), () => navigate('success-page')),
  )(date)

export const sideEffectJs = (date, navigate) => {
  const sum = date
    .map(element => element.amount)
    .reduce((prev, next) => +prev + +next, 0)

  console.log(sum)
  if (sum > 35) {
    navigate('success-page')
  }
}
