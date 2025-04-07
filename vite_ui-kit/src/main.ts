import { lazy } from 'react'

import Header from './components/Header'
import Page from './components/Page'

const Button = lazy(() => import('./components/Button'))

function UiKitModule() {
    return 'Hello from UI-Kit'
}

export {
    UiKitModule,
    Button,
    Header,
    Page
}