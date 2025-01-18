import { JSX } from "react";
import TechIcon from "../icons/TechIcon";  // Importando o componente TechIcon
import MarketIcon from "../icons/MarketIcon";
import WhiskeyIcon from "../icons/WhiskeyIcon";
import ToolIcon from "../icons/ToolIcon";
import HealthIcon from "../icons/HeathIcon";
import FitnessIcon from "../icons/FitnessIcon";
import FashionIcon from "../icons/FashionIcon";
import CrownIcon from "../icons/CrownIcon";

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

export const categoryCards: CategoryCardProps[] = [
    { 
        name: 'Tecnologia',
        propIcon: TechIcon(),
    },
    { 
        name: 'Supermercado',
        propIcon: MarketIcon(),
    },
    { 
        name: 'Bebidas',
        propIcon: WhiskeyIcon(),
    },
    { 
        name: 'Ferramentas',
        propIcon: ToolIcon(),
    },
    { 
        name: 'Saúde',
        propIcon: HealthIcon(),
    },
    { 
        name: 'Esporte e Fitness',
        propIcon: FitnessIcon(),
    },
    { 
        name: 'Moda',
        propIcon: FashionIcon(),
    },
];
