import { isEmpty } from '@/utils/ValueCheck'
import Subcategory from '../categories/Subcategory'
import Divider from '../divider/Divider'
import ProductCarousel from '../product/ProductCarousel'
import styles from './RelatedProducs.module.scss'
import { Categories } from '@/data/Categories'


export default function RelatedProducts({ category }: { category?: string }) {
    return (
        <section className={styles.container}>
            <Divider text={category ? `Produtos de ${category}` : 'Produtos Relacionados'} />
            {!isEmpty(category) ? (
                <span className={styles.subCategories}>
                    {Categories.Tech.subcategories.map((item, index) => (
                        <Subcategory key={index} text={item} />
                    ))}
                    <Subcategory text={'Ver todos'} />
                </span>
            ) : (
                <span className={styles.subCategories}>
                    <Subcategory text={'Ver todos'} />
                </span>
            )}
            <ProductCarousel />
        </section>
    )
}