import React from 'react'
import App from '../App'
import GithubProvider from '../components/providers/github-provider'
import { ResetCSS } from '../global/resetCss'

const Providers = () => {
  return (
    <main>
        <GithubProvider>
            <ResetCSS/>
            <App/>
        </GithubProvider>
    </main>
  )
}

export default Providers