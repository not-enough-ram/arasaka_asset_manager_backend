import { Injectable } from "@nestjs/common";
import { CreateGameDto } from "../Interfaces/Types";
import { GameSession } from "../Interfaces/Types";

@Injectable()
export class GameSessionService {
  createGameSession(
    createGameDto: CreateGameDto,
    imageUrl: string,
  ): GameSession {
    const gameSession = new GameSession();
    gameSession.id = gameSession.title = createGameDto.title;
    gameSession.gameMaster = createGameDto.gameMaster;
    gameSession.players = createGameDto.players;
    gameSession.description = createGameDto.description;
    gameSession.imageUrl = imageUrl;
    return gameSession;
  }
}
