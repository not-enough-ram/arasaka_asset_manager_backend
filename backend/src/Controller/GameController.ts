import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreateGameDto } from "../Interfaces/Types";
import { GameSessionService } from "../Service/GameSessionService";
import { uploadImage } from "../Service/FileService";

@Controller("my-games")
export class GamesController {
  constructor(private gameSessionService: GameSessionService) {}

  @Post()
  @UseInterceptors(FileInterceptor("image")) // 'image' is the name of the file field in your form
  async createGame(
    @UploadedFile() file: Express.Multer.File,
    @Body() createGameDto: CreateGameDto,
  ) {
    const imageUrl: string = uploadImage(createGameDto.image);
    const gameSession = this.gameSessionService.createGameSession(
      createGameDto,
      imageUrl,
    );
    return gameSession;
  }
}
