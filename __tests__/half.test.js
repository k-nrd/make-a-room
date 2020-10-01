const { test, expect } = require('@jest/globals')
const half = require('../index.js')

test('half', () => {
  expect(half(6)).toBe(3)
})
