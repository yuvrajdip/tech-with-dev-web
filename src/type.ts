export interface CardType {
    id: string,
    name: string,
    category: string,
    description: string,
    icon: string,
    rating: number,
    difficulty: string
    badge: string
};

export interface RestoredCart {
    id: string,
    learnt: boolean
};