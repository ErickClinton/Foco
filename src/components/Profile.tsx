import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../style/components/Profile.module.css'

export function Profile(){
    const{level} = useContext(ChallengesContext)
    return(
        <div className={styles.profileContainer}>
            <img src='https://github.com/ErickClinton.png' alt="Erick Clinton" />
            <div>
                <strong>Erick Leite</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                    </p>
            </div>
        </div>
    );
}