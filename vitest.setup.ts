import '@testing-library/jest-dom/vitest'
import 'jest-styled-components'
import 'jsdom-global'
import './src/testHelpers/mocks'

// @ts-ignore
window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = { isDisabled: true }
