import SearchIcon from '../icons/SearchIcon';
import styles from './SearchBar.module.scss'

export const SearchBarInnerTexts = {
    whatToSearch: 'O que você está buscando?'
}

export default function SearchBar({placeholder} : {placeholder: string}){
    return (
        <section className={styles.searchBarContainer}>
            <input className={styles.searchBar} type="text" placeholder={placeholder}></input>
            <SearchIcon className={styles.searchIcon}/>
        </section>
    );
}