import TextWithHighlight from '../textWithHighlight/TextWithHighlight'
import { HeroText } from '@/data/Hero'
import styles from './Hero.module.scss'
import BlockButton from '../buttons/BlockButton'

export default function Hero(): React.ReactElement {
    return (
        <span className={styles.container}>
           <section className={styles.callingText}>
                <strong className={styles.highlightText}>
                    <TextWithHighlight 
                        normalText={HeroText.Normal.calling}
                        highlightText=''
                        fontSize='3rem'
                        reverse={false}
                    />
                </strong>
                <TextWithHighlight 
                    normalText={HeroText.Normal.subtext}
                    highlightText={HeroText.Highlight.subtext}
                    fontSize='2rem'
                    highlightColor='--YELLOW'
                    reverse={true}
                />
                <BlockButton text={HeroText.Button}/>
           </section>
        </span>
    )
}