import MinusIcon from '../icons/MinusIcon'
import PlusIcon from '../icons/PlusIcon'
import styles from './IncrementalButton.module.scss'

interface IncrementalButtonProps {
    count: number,
    plus: Function,
    minus: Function,
}

export default function IncrementalButton({ count, plus, minus }: IncrementalButtonProps) {
    return (
        <span className={styles.container}>
            <button onClick={() => minus()}>
                <MinusIcon />
            </button>
            <p>{count}</p>
            <button onClick={() => plus()}>
                <PlusIcon />
            </button>
        </span>
    )
}