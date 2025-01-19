export const formatPrice = (price: number, cents: number | undefined, format: string) => {
    const formattedPrice = new Intl.NumberFormat(format, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price + (cents ?? 0) / 100);
    return formattedPrice;
};