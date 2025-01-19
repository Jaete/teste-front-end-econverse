import { Brands } from '@/data/Brands'
import Divider from '../divider/Divider'
import BrandBotton from './BrandBotton'
import styles from './Brands.module.scss'

export default function BrandsSection(){
    return (
        <section className={styles.container}>
            <Divider text='Navegue por marcas' lines={false}/>
            <span className={styles.brandList}>
                {Brands.map((item, index) => (
                    <BrandBotton key={index} logo={item.icon}/>
                ))}
            </span>
        </section>
    )
}