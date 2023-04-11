/* istanbul ignore file */
import { lazy } from 'react'

// atoms
export { default as Button } from './atoms/Button'
export * from './atoms/ErrorBoundary'

// molecules

// organisms

// templates
export { default as DefaultTemplate } from './templates/DefaultTemplate'
export const ExampleTemplate = lazy(() => import('./templates/ExampleTemplate'))
export const ErrorTemplate = lazy(() => import('./templates/ErrorTemplate'))
