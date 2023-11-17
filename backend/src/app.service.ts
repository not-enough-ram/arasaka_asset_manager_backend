import { Injectable } from '@nestjs/common';
import {Asset, GameSession} from "./Interfaces/Types";

@Injectable()
export class AppService {
  getGameSessions(): GameSession[] {
    const mockedData : GameSession[] = [
      {
        title: 'Dungeon Delvers',
        gameMaster: 'Alex',
        players: ['Mia', 'Liam', 'Noah', 'Emma'],
        imageUrl: 'https://source.unsplash.com/random/?cyberpunk',
        description: 'Random Stuff'
      },
      {
        title: 'Settlers of Catan',
        gameMaster: 'Jordan',
        players: ['Chris', 'Pat', 'Taylor', 'Jamie'],
        imageUrl: 'https://source.unsplash.com/random/?cyberpunk',
        description: 'Random Stuff'
      },
      {
        title: 'Virtual Chess Tournament',
        gameMaster: 'Sam',
        players: ['Alice', 'Bob', 'Charlie', 'Diana'],
        imageUrl: 'https://source.unsplash.com/random/?cyberpunk',
        description: 'Random Stuff'
      },
      {
        title: 'Community Soccer Match',
        gameMaster: 'Coach Mike',
        players: ['Jordan', 'Ashley', 'Morgan', 'Casey'],
        imageUrl: 'https://source.unsplash.com/random/?cyberpunk',
        description: 'Random Stuff'
      },
      {
        title: 'Warlords Battlecry',
        gameMaster: 'Evelyn',
        players: ['Riley', 'Alexis', 'Shawn', 'Blake'],
        imageUrl: 'https://source.unsplash.com/random/?cyberpunk',
        description: 'Random Stuff'
      }
    ];
    return mockedData;
  }

  getAssets(): Asset[] {
    const mockedData = [
      {
        id: "dataset_001",
        title: "Cosmic Exploration",
        description:
            "Delve into the mysteries of the universe with this immersive space adventure.",
        owner: "James T. Kirk",
        imageUrl: "https://source.unsplash.com/random/?cyberpunk",
      },
      {
        id: "dataset_002",
        title: "Historical Journey",
        description: "Travel back in time to witness key moments in history.",
        owner: "Ada Lovelace",
        imageUrl: "https://source.unsplash.com/random/?cyberpunk",
      },
      {
        id: "dataset_003",
        title: "Underwater World",
        description:
            "Experience the vibrant life and hidden treasures beneath the ocean's surface.",
        owner: "Jacques Cousteau",
        imageUrl: "https://source.unsplash.com/random/?cyberpunk",
      },
      {
        id: "dataset_004",
        title: "Mountain Adventure",
        description:
            "Explore the rugged beauty of the world's most awe-inspiring mountain ranges.",
        owner: "Edmund Hillary",
        imageUrl: "https://source.unsplash.com/random/?cyberpunk",
      },
      {
        id: "dataset_005",
        title: "Urban Safari",
        description:
            "Discover the hidden gems and fascinating stories of the city.",
        owner: "Jane Jacobs",
        imageUrl: "https://source.unsplash.com/random/?cyberpunk",
      },
    ];
    return mockedData;
  }
}
