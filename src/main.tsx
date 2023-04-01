import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components'
import { darkGrayishBlue } from './lib/colors'

const GlobalStyles = createGlobalStyle({
    ':root': {
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
        'background-color': darkGrayishBlue,

        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        '-webkit-text-size-adjust': '100%',

        colorScheme: 'light dark',
    },
    body: {
        margin: 0,
        padding: 0,
        display: 'flex',
        minWidth: '320px',
        minHeight: '100vh',
    },
    '#root': {
        display: 'flex',
        flexGrow: 1,
    },
    code: {
        fontFamily: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`,
    },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <GlobalStyles />
        <App />
    </React.StrictMode>,
)
