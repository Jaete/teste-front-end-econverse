import { JSX } from "react";
import TechIcon from "../components/icons/TechIcon";  // Importando o componente TechIcon
import MarketIcon from "../components/icons/MarketIcon";
import WhiskeyIcon from "../components/icons/WhiskeyIcon";
import ToolIcon from "../components/icons/ToolIcon";
import HealthIcon from "../components/icons/HeathIcon";
import FitnessIcon from "../components/icons/FitnessIcon";
import FashionIcon from "../components/icons/FashionIcon";
import CrownIcon from "../components/icons/CrownIcon";

interface CategoryCardProps {
    name: string;
    propIcon: JSX.Element,
}

interface CategoryTextProps {
    name: string,
    propIcon?: JSX.Element,
}

export const CategoryTextList: CategoryTextProps[] = [
    {
        name: "todas categorias"
    },
    {
        name: "supermercado"
    },
    {
        name: "livros"
    },
    {
        name: "moda"
    },
    {
        name: "lançamentos"
    },
    {
        name: "ofertas do dia"
    },
    {
        name: "assinatura",
        propIcon: CrownIcon(),
    },
]

export const Categories = {
    Tech: {
        name: 'Tecnologia',
        propIcon: TechIcon(),
        subcategories: [
            'Celular',
            'Acessorios',
            'Tablets',
            'Notebooks',
            'TVs'
        ]
    },
    Market: {
        name: 'Supermercado',
        propIcon: MarketIcon(),
        subcategories: []
    },
    Drinks: {
        name: 'Bebidas',
        propIcon: WhiskeyIcon(),
        subcategories: []
    },
    Tools: {
        name: 'Ferramentas',
        propIcon: ToolIcon(),
        subcategories: []
    },
    Health: {
        name: 'Saúde',
        propIcon: HealthIcon(),
        subcategories: []
    },
    Fitness: {
        name: 'Esporte e Fitness',
        propIcon: FitnessIcon(),
        subcategories: []
    },
    Fashion: {
        name: 'Moda',
        propIcon: FashionIcon(),
        subcategories: []
    },
};


export const categoryCards: CategoryCardProps[] = [
    { 
        name: Categories.Tech.name,
        propIcon: Categories.Tech.propIcon,
    },
    { 
        name: Categories.Market.name,
        propIcon: Categories.Market.propIcon,
    },
    { 
        name: Categories.Drinks.name,
        propIcon: Categories.Drinks.propIcon,
    },
    { 
        name: Categories.Tools.name,
        propIcon: Categories.Tools.propIcon,
    },
    { 
        name: Categories.Health.name,
        propIcon: Categories.Health.propIcon,
    },
    { 
        name: Categories.Fitness.name,
        propIcon: Categories.Fitness.propIcon,
    },
    { 
        name: Categories.Fashion.name,
        propIcon: Categories.Fashion.propIcon,
    },
];


