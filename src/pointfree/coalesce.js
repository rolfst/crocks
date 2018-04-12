/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

import curry from '../core/curry.js'
import isFunction from '../core/isFunction.js'

function coalesce(f, g, m) {
  if(!(isFunction(f) && isFunction(g))) {
    throw new TypeError(
      'coalesce: Functions required for first two arguments'
    )
  }

  if(m && isFunction(m.coalesce)) {
    return m.coalesce(f, g)
  }

  throw new TypeError(
    'coalesce: Async, Either, Maybe or Result required for third argument'
  )
}

export default curry(coalesce)
