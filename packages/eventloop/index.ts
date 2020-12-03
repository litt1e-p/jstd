/**
 * sleep in eventloop for milliseconds
 * @param ms argv(millisecond) to sleep, default is 16
 */
export const sleep = function (ms = 16): Promise<number> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
