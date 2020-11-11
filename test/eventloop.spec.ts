import { sleep } from '../'

test('object - objReverse', async () => {
  let timeS = +new Date()
  await sleep()
  timeS = +new Date() - timeS
  expect(timeS).toBeGreaterThanOrEqual(16)
});

test('object - objReverse', async () => {
  let timeS = +new Date()
  await sleep(2000)
  timeS = +new Date() - timeS
  expect(timeS).toBeGreaterThanOrEqual(2000)
});