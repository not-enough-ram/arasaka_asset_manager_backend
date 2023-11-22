export class GameSession {
    id: String;
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

export class CreateGameDto {
    title: string;
    gameMaster: string;
    players: string[];
    description: string;
    image:File;
}