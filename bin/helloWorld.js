#!/usr/bin/env node
const { helloWorld } = require('../lib/helloWorld')

const [_, __, name] = process.argv

if (!name) {
  console.error('I need your name to greet you. Please, pass your name.')
} else {
  console.log(helloWorld(name))
  console.log('That\'s all folks')
}


