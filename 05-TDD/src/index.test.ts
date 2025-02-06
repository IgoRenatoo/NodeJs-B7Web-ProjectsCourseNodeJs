import { Math } from './index'

it('Should sum two numbers correctly', () => {
  const response = Math.som(5,10)
  expect(response).toBe(15)
})
