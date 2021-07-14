const { helloWorld } = require('../lib/helloWorld')

describe('hello world shoud', () => {
  it(' say hello with my name', () => {
    const hello = helloWorld('Francisco Mesa')

    expect(hello).toBe('Hello Francisco Mesa!')
  })
})
