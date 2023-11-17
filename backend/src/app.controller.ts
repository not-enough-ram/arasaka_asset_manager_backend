import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Asset, GameSession} from "./Interfaces/Types";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/my-games")
  getGameSessions(): GameSession[] {
    console.log("/my-games queried")
    return this.appService.getGameSessions();
  }

  @Get("/my-assets")
  getAssets(): Asset[] {
    console.log("my-assets queried")
    return this.appService.getAssets();
  }
}
