/* */ 
"format cjs";
import arrayEvery from './_arrayEvery';
import createOver from './_createOver';

/**
 * Creates a function that checks if **all** of the `predicates` return
 * truthy when invoked with the arguments provided to the created function.
 *
 * @static
 * @memberOf _
 * @category Util
 * @param {...(Function|Function[])} predicates The predicates to check.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var func = _.overEvery(Boolean, isFinite);
 *
 * func('1');
 * // => true
 *
 * func(null);
 * // => false
 *
 * func(NaN);
 * // => false
 */
var overEvery = createOver(arrayEvery);

export default overEvery;
