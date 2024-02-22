import { Injectable } from '@nestjs/common';
import {Asset, GameSession} from "../Interfaces/Types";

@Injectable()
export class AppService {
  getGameSessions(): GameSession[] {
    const mockedData : GameSession[] = [
      {
        id: '1',
        title: 'Cyberpunk Red',
        gameMaster: 'Jonny Silverhand',
        players: ['Mia', 'Liam', 'Noah', 'Emma'],
        imageUrl: 'https://source.unsplash.com/random/?cyberpunk',
        description: 'Welcome to Night City Choom!'
      },
      {
        id: '2',
        title: 'D&D',
        gameMaster: 'Jordan',
        players: ['Chris', 'Pat', 'Taylor', 'Jamie'],
        imageUrl: 'https://source.unsplash.com/random/?fantasy',
        description: 'Ready your swords adventurers'
      },
      {
        id: '3',
        title: 'Vampire',
        gameMaster: 'Sam',
        players: ['Alice', 'Bob', 'Charlie', 'Diana'],
        imageUrl: 'https://source.unsplash.com/random/?vampire',
        description: 'Deception, masquerade and blood'
      },
      {
        id: '4',
        title: 'Shadowrun',
        gameMaster: 'Jonny Silverhand',
        players: ['Jordan', 'Ashley', 'Morgan', 'Casey'],
        imageUrl: 'https://source.unsplash.com/random/?cyberpunk',
        description: 'The neon lit streets of the awakened world hold many mysteries but danger lurks'
      },
      {
        id: '5',
        title: 'Warhammer 40k',
        gameMaster: 'Evelyn',
        players: ['Riley', 'Alexis', 'Shawn', 'Blake'],
        imageUrl: 'https://source.unsplash.com/random/?warhammer40k',
        description: 'In the distant future, there is only war'
      }
    ];
    return mockedData;
  }

  getAssets(): Asset[] {
    const mockedData = [
      {
        id: "dataset_001",
        title: "Character picture Rania",
        description:
            "An image of Rania, the Cyberpunk Netrunner",
        owner: "Jonny Silverhand",
        imageUrl: "https://source.unsplash.com/random/?cyberpunk",
      },
      {
        id: "dataset_002",
        title: "Battlemap",
        description: "A battlemap of a battlefield from the distant future",
        owner: "Jonny Silverhand",
        imageUrl: "https://source.unsplash.com/random/?warhammer",
      },
      {
        id: "dataset_003",
        title: "Underwater World",
        description:
            "Experience the vibrant life and hidden treasures beneath the ocean's surface.",
        owner: "Jacques Cousteau",
        imageUrl: "https://source.unsplash.com/random/?subnautica",
      },
      {
        id: "dataset_004",
        title: "Mountain Adventure",
        description:
            "Explore the rugged beauty of the world's most awe-inspiring mountain ranges.",
        owner: "Edmund Hillary",
        imageUrl: "https://source.unsplash.com/random/?mistymountain",
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

  getProfile(){
    const profile = 
      {
        name: "Jonny Silverhand",
        assets: [
          {
            id: "dataset_001",
            title: "Character picture Rania",
            description:
                "An image of Rania, the Cyberpunk Netrunner",
            owner: "Jonny Silverhand",
            imageUrl: "https://source.unsplash.com/random/?cyberpunk",
          },
          {
            id: "dataset_002",
            title: "Battlemap",
            description: "A battlemap of a battlefield from the distant future",
            owner: "Jonny Silverhand",
            imageUrl: "https://source.unsplash.com/random/?warhammer",
          }
        ],
        games: [
          {
            id: '1',
            title: 'Cyberpunk Red',
            gameMaster: 'Jonny Silverhand',
            players: ['Mia', 'Liam', 'Noah', 'Emma'],
            imageUrl: 'https://source.unsplash.com/random/?cyberpunk',
            description: 'Welcome to Night City Choom!'
          },
          {
            id: '4',
            title: 'Shadowrun',
            gameMaster: 'Jonny Silverhand',
            players: ['Jordan', 'Ashley', 'Morgan', 'Casey'],
            imageUrl: 'https://source.unsplash.com/random/?cyberpunk',
            description: 'The neon lit streets of the awakened world hold many mysteries but danger lurks'
          }
        ]
      }
  }
}
