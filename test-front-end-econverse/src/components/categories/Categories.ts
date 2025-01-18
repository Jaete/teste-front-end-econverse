import { JSX } from "react";
import TechIcon from "../icons/TechIcon";  // Importando o componente TechIcon
import MarketIcon from "../icons/MarketIcon";
import WhiskeyIcon from "../icons/WhiskeyIcon";
import ToolIcon from "../icons/ToolIcon";
import HealthIcon from "../icons/HeathIcon";
import FitnessIcon from "../icons/FitnessIcon";
import FashionIcon from "../icons/FashionIcon";

interface CategoryCardProps {
    name: string;
    propIcon: JSX.Element;  // Usando React.ReactNode para representar o componente JSX
}

export const Categories = {
    all: "todas categorias",
    supermarket: "supermercado",
    books: "livros",
    fashion: "moda",
    launches: "lançamentos",
    dailyOffers: "ofertas do dia",
    membership: "assinatura",
};

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
