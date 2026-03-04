export interface InventoryItem {
    productId: number;
    productName: string;
    stock: number;
    lastUpdated: Date;
}

export interface StockMovement {
    id: string;
    productId: number;
    productName: string;
    delta: number;
    timestamp: Date;
    reason?: string;
}
