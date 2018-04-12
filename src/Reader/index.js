/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

const VERSION = 1

import _implements from '../core/implements.js'
import _inspect from '../core/inspect.js'
import types from '../core/types.js'
const type = types.type('Reader')
const _type = types.typeFn(type(), VERSION)
import fl from '../core/flNames.js'

import compose from '../core/compose.js'
import isFunction from '../core/isFunction.js'
import isSameType from '../core/isSameType.js'

const _of =
  x => Reader(() => x)

function ask(fn) {
  if(!arguments.length) {
    return Reader(x => x)
  }

  if(isFunction(fn)) {
    return Reader(fn)
  }

  throw new TypeError('Reader.ask: No argument or function required')
}

function Reader(runWith) {
  if(!arguments.length || !isFunction(runWith)) {
    throw new TypeError('Reader: Must wrap a function')
  }

  const of =
    _of

  const inspect =
    () => `Reader${_inspect(runWith)}`

  function map(fn) {
    if(!isFunction(fn)) {
      throw new TypeError('Reader.map: Function required')
    }

    return Reader(compose(fn, runWith))
  }

  function ap(m) {
    if(!isSameType(Reader, m)) {
      throw new TypeError('Reader.ap: Reader required')
    }

    return Reader(function(e) {
      const fn = runWith(e)

      if(!isFunction(fn)) {
        throw new TypeError('Reader.ap: Wrapped function must return a function')
      }

      return m.map(fn).runWith(e)
    })
  }

  function chain(fn) {
    if(!isFunction(fn)) {
      throw new TypeError('Reader.chain: Function required')
    }

    return Reader(function(e) {
      const m = fn(runWith(e))

      if(!isSameType(Reader, m)) {
        throw new TypeError('Reader.chain: Function must return a Reader')
      }

      return m.runWith(e)
    })
  }

  return {
    inspect, toString: inspect, runWith,
    type, map, ap, chain, of,
    [fl.of]: of,
    [fl.map]: map,
    [fl.chain]: chain,
    ['@@type']: _type,
    constructor: Reader
  }
}

Reader.of = _of
Reader.ask = ask
Reader.type = type

Reader[fl.of] = _of
Reader['@@type'] = _type

Reader['@@implements'] = _implements(
  [ 'ap', 'chain', 'map', 'of' ]
)

export default Reader
