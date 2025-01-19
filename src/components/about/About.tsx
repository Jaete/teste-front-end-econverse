import FooterLinks from '../footerLinks/FooterLinks'
import EconverseLogo from '../logo/Logo'
import SocialLinks from '../socialLinks/SocialLinks'
import styles from './About.module.scss'

export default function About(){
    return (
        <section className={styles.container}>
            <span className={styles.social}>
                <EconverseLogo />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <SocialLinks />
            </span>
            <hr className={styles.divider}/>
            <span className={styles.about}>
                <FooterLinks 
                    title='Institucional' 
                    first={{name: 'Sobre nós'}}
                    second={{name: 'Movimento'}} 
                    third={{name: 'Trabalhe conosco'}}
                />
                <FooterLinks 
                    title='Ajuda' 
                    first={{name: 'Suporte'}}
                    second={{name: 'Fale conosco'}} 
                    third={{name: 'Perguntas frequentes'}}
                />
                <FooterLinks 
                    title='Termos' 
                    first={{name: 'Termos e Condições'}}
                    second={{name: 'Política de privacidade'}} 
                    third={{name: 'Troca e Devolução'}}
                />
            </span>
        </section>
    )
}