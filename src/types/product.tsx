type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string;
    thumbnail: string;
    images: string[];
    inShoppingCart?: number; //za potrebe dodavanja u shopping cart zbog kolicine (+- dugmeta)
    removeItem?: (item: Product, removePrice: number) => void;
    refresh?: () => void; //za potrebe rerenderovanja parent komponente
}

export default Product;

//radi struktura sa api proizvodima