import { Controller, Get, Post, Query } from "@nestjs/common";
import { AppService } from "../Service/app.service";
import { Asset, GameSession, Profile } from "../Interfaces/Types";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/my-games")
  getGameSessions(): GameSession[] {
    console.log("/my-games queried");
    return this.appService.getGameSessions();
  }

  @Get("/my-games")
  getGameSessionById(@Query("id") id: string): GameSession | undefined {
    console.log("/my-games queried with id:", id);
    return this.appService.getGameSessionById(id);
  }

  @Post("/my-games")
  addGameSession(gameSession: GameSession) {
    this.appService.addGameSession(gameSession);
  }

  @Get("/my-assets")
  getAssets(): Asset[] {
    console.log("my-assets queried");
    return this.appService.getAssets();
  }

  @Get("/my-profile")
  getProfile(): Profile {
    console.log("my-profile queried");
    return this.appService.getProfile();
  }
}
