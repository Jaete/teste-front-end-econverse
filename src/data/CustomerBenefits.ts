import CardIcon from "@/components/icons/CardIcon";
import ShieldIcon from "@/components/icons/ShieldIcon";
import TruckIcon from "@/components/icons/TruckIcon";
import { JSX } from "react";

interface CustomerBenefitsProps {
    normalText: string,
    highlightText: string,
    highlightColor: string,
    propIcon: JSX.Element,
    reverse: boolean,
}

export const CustomerBenefits: CustomerBenefitsProps[] = [
    {
        normalText: 'Compra',
        highlightText: '100% segura',
        highlightColor: '--DARK-BLUE-01',
        propIcon: ShieldIcon(),
        reverse: false,
    },
    {
        normalText: 'acima de R$200',
        highlightText: 'Frete grátis',
        highlightColor: '--DARK-BLUE-01',
        propIcon: TruckIcon(),
        reverse: true,
    },
    {
        normalText: 'suas compras',
        highlightText: 'Parcele',
        highlightColor: '--DARK-BLUE-01',
        propIcon: CardIcon(),
        reverse: true,
    }
]