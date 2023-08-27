export const firstLetterUpperCase = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export const productDiscount = (discountedPrice: number, discout: number): number => {
    return Math.round(discountedPrice / (100 - discout) * 100);
}
