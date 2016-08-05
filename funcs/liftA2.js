const curry = require('../funcs/curry')

const isFunction  = require('../internal/isFunction')
const isApply     = require('../internal/isApply')

// liftA2 :: Applicative m => (a -> a -> b) -> m a -> m a -> m b
function liftA2(fn, x, y) {
  if(!isFunction(fn)) {
    throw new TypeError('liftA2: Function required for first arg')
  }
  else if(!isApply(x) || !isApply(y)) {
    throw new TypeError('liftA2: Applys required for last two args')
  }

  return x.map(fn).ap(y)
}

module.exports = curry(liftA2)
