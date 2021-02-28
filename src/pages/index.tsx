import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from '../style/pages/Home.module.css';

import Head from 'next/head';
import { ChallengeBox } from "../components/ChallengeBox";
import { ChallengesProvider } from "../contexts/ChallengesContexts";
import { CountdownProvider } from "../contexts/CountdownContext";
export default function Home() {
  return (
    <div className={styles.Container}>

      <Head>
        <title>Inicio | move.it</title>
      </Head>
     
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
          </div>
          <div>
            <ChallengeBox />
      
          </div>
        </section>
        </CountdownProvider>
    </div>
  )
}

