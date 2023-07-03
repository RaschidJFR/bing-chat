/// <reference lib="dom" />
import nodeFetch from 'node-fetch'
import semver from 'semver'

let fetch = globalThis.fetch

if (typeof fetch !== 'function') {
  if (semver.lt(process.version, '18.0.0')) {
    fetch = nodeFetch as any
  } else {
    throw new Error('Invalid environment: global fetch not defined')
  }
}

export { fetch }
