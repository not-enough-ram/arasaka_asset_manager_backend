import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './Controller/app.controller';
import { AppService } from './Service/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });
});
