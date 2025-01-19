import SearchIcon from '../icons/SearchIcon';
import Input from '../input/Input';
import styles from './SearchBar.module.scss'

export const SearchBarInnerTexts = {
    whatToSearch: 'O que você está buscando?'
}

export default function SearchBar({placeholder} : {placeholder: string}){
    return (
        <section className={styles.searchBarContainer}>
            <Input className={styles.searchBar} type={'text'} placeholder={SearchBarInnerTexts.whatToSearch}/>
            <SearchIcon className={styles.searchIcon}/>
        </section>
    );
}