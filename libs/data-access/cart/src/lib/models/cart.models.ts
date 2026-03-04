export interface CartItem {
    productId: number;
    title: string;
    price: number;
    quantity: number;
    imageUrl?: string;
}

export interface Cart {
    items: CartItem[];
}
