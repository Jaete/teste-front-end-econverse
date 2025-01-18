import styles from './TextWithHighlight.module.scss'
import { JSX } from 'react';

interface TextWithHighlightProps {
    normalText: string,
    highlightText: string,
    highlightColor: string,
    fontSize?: string,
    propIcon?: JSX.Element
    reverse: boolean,
}

export default function TextWithHighlight({
    normalText, 
    highlightText, 
    highlightColor, 
    fontSize = 'var(--regular-font-size)',
    propIcon, 
    reverse
}: TextWithHighlightProps ){

    const fontSizeStyle = {
        'font-size': fontSize,
    } as React.CSSProperties;

    const highlightColorStyle = {
        '--highlight-color': `var(${highlightColor})`,
    } as React.CSSProperties;

    return (
        <section className={styles.container}>
            {propIcon && <span className={styles.icon}>{propIcon}</span>}
            <p>
                {reverse ? (
                    <p style={fontSizeStyle}>
                        <strong className={styles.highlightText} style={highlightColorStyle}>
                            {highlightText + " "}
                        </strong>
                         {normalText}
                    </p>
                ) : (
                    <p style={fontSizeStyle}>
                        {normalText + " "} 
                        <strong className={styles.highlightText} style={highlightColorStyle}>
                            {highlightText}
                        </strong>
                    </p>
                )}
            </p>
        </section>
    );
}