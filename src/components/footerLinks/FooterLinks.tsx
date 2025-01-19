import styles from './FooterLinks.module.scss'

interface FooterLinksProps {
    title: string,
    first?: {
        name?: string,
        link?: string,
    }
    second?: {
        name?: string,
        link?: string,
    }
    third?: {
        name?: string,
        link?: string,
    }
}

export default function FooterLinks({title, first, second, third}: FooterLinksProps) {
    return (
        <span className={styles.container}>
            <p className={styles.title}>{title}</p>
            <span className={styles.links}>
                <a href={first?.link}>{first?.name}</a>
                <a href={second?.link}>{second?.name}</a>
                <a href={third?.link}>{third?.name}</a>
            </span>
        </span>
    )
}