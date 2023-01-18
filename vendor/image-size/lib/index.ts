import { typeHandlers } from './types'
import { detector } from './detector'
import { ISizeCalculationResult } from './typeHandlers/interface'

/**
 * Return size information based on a buffer
 *
 * @param {Buffer} buffer
 * @returns {Object}
 */
export function lookup(buffer: Buffer): ISizeCalculationResult {
  // detect the file type.. don't rely on the extension
  const type = detector(buffer)

  if (typeof type !== 'undefined') {
    // find an appropriate handler for this file type
    if (type in typeHandlers) {
      const size = typeHandlers[type].calculate(buffer)
      if (size !== undefined) {
        size.type = type
        return size
      }
    }
  }


  // throw up, if we don't understand the file
  throw new TypeError('unsupported file type: ' + type)
}

