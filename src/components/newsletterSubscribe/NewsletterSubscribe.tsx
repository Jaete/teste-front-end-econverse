import BlockButton from '../buttons/BlockButton'
import Input from '../input/Input'
import styles from './NewsletterSubscribe.module.scss'

const InputPlaceholders = {
    name: 'Digite seu nome',
    email: 'Digite seu e-mail',
    terms: 'Aceito os termos e condições',
}

export default function NewsletterSubscribe() {
    return (
        <section className={styles.container}>
            <span className={styles.calling}>
                <h3>Inscreva-se na nossa newsletter</h3>
                <h4>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</h4>
            </span>
            <span className={styles.userInfo}>
                <Input className={styles.userInput} type='text' placeholder={InputPlaceholders.name}/>
                <Input className={styles.userInput} type='text' placeholder={InputPlaceholders.email}/>
                <BlockButton text='INSCREVER'/>
                <Input className={styles.checkbox} type='checkbox' placeholder='' innerText={InputPlaceholders.terms}/>
                <p className={styles.checkbox}>{InputPlaceholders.terms}</p>
            </span>
        </section>
    )
}