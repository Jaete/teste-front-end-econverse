'use client';

import IconButton from "../buttons/IconButton";
import CartIcon from "../icons/CartIcon";
import DeliverBoxIcon from "../icons/DeliverBoxIcon";
import HeartIcon from "../icons/HeartIcon";
import UserIcon from "../icons/UserIcon";

import styles from './UserMenu.module.scss'

const UserMenuAction = {
    Delivery: "delivery",
    Favourite: "favourite",
    Profile: "profile",
    Cart: "cart",
}

function DeliveryClicked(): void {
    alert('Clicou nos pedidos!');
}

function FavouriteClicked(): void {
    alert('Clicou nos favoritos!');
}

function ProfileClicked(): void {
    alert('Clicou no perfil!');
}

function CartClicked(): void {
    alert('Clicou no carrinho!');
}

function handleClick(action: string): void {
    switch (action) {
        case UserMenuAction.Delivery:
            DeliveryClicked();
            break;
        case UserMenuAction.Favourite:
            FavouriteClicked();
            break;
        case UserMenuAction.Profile:
            ProfileClicked();
            break;
        case UserMenuAction.Cart:
            CartClicked();
            break;
        default:
            break;
    }
}

export default function UserMenu() {
    return (
        <nav className={styles.container}>
            <IconButton  
                method={() => handleClick(UserMenuAction.Delivery)} 
                icon={<DeliverBoxIcon />}
            />
            <IconButton 
                method={() => handleClick(UserMenuAction.Favourite)} 
                icon={<HeartIcon />}
            />
            <IconButton 
                method={() => handleClick(UserMenuAction.Profile)} 
                icon={<UserIcon />}
            />
            <IconButton 
                method={() => handleClick(UserMenuAction.Cart)} 
                icon={<CartIcon />}
            />
        </nav>
    );
}