import * as R from 'ramda'

// const includes = obj?.data?.listOfItems?.includes('something')

const includesJS = obj => !!obj && 
    !!obj.data &&
    !!obj.data.listOfItems &&
    obj.data.listOfItems.includes('something')

const includesRamda = obj => R.pathOr([], ['data', 'listOfItems'], obj).includes('something')

export { includesJS, includesRamda }