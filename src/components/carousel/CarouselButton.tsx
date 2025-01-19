import { JSX } from "react"
import style from './CarouselButton.module.scss'

interface ButtonProps {
    method: Function,
    icon: JSX.Element
}

export default function CarouselButton({method, icon}: ButtonProps){
    return (
        <button className={style.transparentBg} onClick={()=> method()} >{icon}</button>
    )
}