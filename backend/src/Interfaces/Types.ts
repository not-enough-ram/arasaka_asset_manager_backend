export class GameSession {
  id: string;
  title: string;
  gameMaster: string;
  players: string[];
  description: string;
  imageUrl: string;
}

export class Asset {
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
  image: File;
}

export class Profile {
  name: string;
  assets: Asset[];
  games: GameSession[];
}
