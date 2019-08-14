/**
 * USAGE
 *  - yarn install
 *  - yarn watch
 *  - node build.js
 */

/**
 * Modules are text slots that have a functionality
 *  -  A good module is little, organized and has only one function
 */

import { union as uniao, uniq } from 'ramda'
import soma, { sub, mult, div } from './utils'

import react from 'react'
import reactDOM from 'react-dom'
// alias (as)
// import * as R from "ramda"

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6]
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1]

// ramda functions
const arr3 = uniao(arr1, arr2)
const arr4 = uniq(arr1)

console.log(arr3)
console.log(arr4)

console.log(`sum => ${soma(3, 4)}`)
console.log(`sub => ${sub(3, 4)}`)
console.log(`mult => ${mult(3, 4)}`)
console.log(`div => ${div(3, 4)}`)