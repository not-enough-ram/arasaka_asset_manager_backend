export interface GameSession {
    title: string;
    gameMaster: string;
    players: string[];
    description: string;
    imageUrl: string;
}

export interface Asset {
    id: string;
    title: string;
    description: string;
    owner: string;
    imageUrl: string;
}