import Logo from "../logo/Logo";
import SearchBar, { SearchBarInnerTexts } from "../searchBar/SearchBar";
import UserMenu from "../userMenu/UserMenu";
import styles from './TopMenu.module.scss'

export default function TopMenu(){
    return (
        <nav className={styles.topMenuContainer}>
            <Logo />
            <SearchBar placeholder={SearchBarInnerTexts.whatToSearch}/>
            <UserMenu />
        </nav>
    );
}