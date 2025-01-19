import styles from './TextWithHighlight.module.scss'
import { JSX } from 'react';

interface TextWithHighlightProps {
    normalText: string,
    highlightText: string,
    highlightColor?: string,
    fontSize?: string,
    propIcon?: JSX.Element
    reverse: boolean,
}

export default function TextWithHighlight({
    normalText, 
    highlightText, 
    highlightColor,
    fontSize,
    propIcon, 
    reverse
}: TextWithHighlightProps ){

    const highlightFontSize = {
        '--highlight-text-font-size': `${fontSize}`,
    } as React.CSSProperties;

    const highlightColorStyle = {
        '--highlight-color': `var(${highlightColor})`,
    } as React.CSSProperties;

    return (
        <section className={styles.container} style={highlightFontSize}>
            {propIcon && <span className={styles.icon}>{propIcon}</span>}
            {reverse ? (
                <p>
                    <strong className={styles.highlightText} style={highlightColorStyle}>
                        {highlightText + " "}
                    </strong>
                        {normalText}
                </p>
            ) : (
                <p>
                    {normalText + " "} 
                    <strong className={styles.highlightText} style={highlightColorStyle}>
                        {highlightText}
                    </strong>
                </p>
            )}
        </section>
    );
}