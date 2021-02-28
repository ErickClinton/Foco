import '../style/global.css'
import {useState} from 'react'

import { ChallengesContext, ChallengesProvider} from '../contexts/ChallengesContexts'
function MyApp({ Component, pageProps }) {
  

  return(
      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
      )
  
}

export default MyApp
