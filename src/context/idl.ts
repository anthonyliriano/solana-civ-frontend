export type Solciv = {
  "version": "0.1.0",
  "name": "solciv",
  "instructions": [
    {
      "name": "initializeGame",
      "accounts": [
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "map",
          "type": {
            "array": [
              "u8",
              400
            ]
          }
        }
      ]
    },
    {
      "name": "initializePlayer",
      "accounts": [
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initializeNpc",
      "accounts": [
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "npcAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "moveUnit",
      "accounts": [
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "unitId",
          "type": "u32"
        },
        {
          "name": "x",
          "type": "u8"
        },
        {
          "name": "y",
          "type": "u8"
        }
      ]
    },
    {
      "name": "healUnit",
      "accounts": [
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "unitId",
          "type": "u32"
        }
      ]
    },
    {
      "name": "foundCity",
      "accounts": [
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "x",
          "type": "u8"
        },
        {
          "name": "y",
          "type": "u8"
        },
        {
          "name": "unitId",
          "type": "u32"
        },
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "addToProductionQueue",
      "accounts": [
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "cityId",
          "type": "u32"
        },
        {
          "name": "item",
          "type": {
            "defined": "ProductionItem"
          }
        }
      ]
    },
    {
      "name": "removeFromProductionQueue",
      "accounts": [
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "cityId",
          "type": "u32"
        },
        {
          "name": "index",
          "type": "u8"
        }
      ]
    },
    {
      "name": "purchaseWithGold",
      "accounts": [
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "cityId",
          "type": "u32"
        },
        {
          "name": "item",
          "type": {
            "defined": "ProductionItem"
          }
        }
      ]
    },
    {
      "name": "startResearch",
      "accounts": [
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "technologyType",
          "type": {
            "defined": "TechnologyType"
          }
        }
      ]
    },
    {
      "name": "upgradeTile",
      "accounts": [
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "x",
          "type": "u8"
        },
        {
          "name": "y",
          "type": "u8"
        },
        {
          "name": "unitId",
          "type": "u32"
        }
      ]
    },
    {
      "name": "attackUnit",
      "accounts": [
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "npcAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "attackerId",
          "type": "u32"
        },
        {
          "name": "defenderId",
          "type": "u32"
        }
      ]
    },
    {
      "name": "attackCity",
      "accounts": [
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "npcAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "attackerId",
          "type": "u32"
        },
        {
          "name": "cityId",
          "type": "u32"
        }
      ]
    },
    {
      "name": "mintGems",
      "accounts": [
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "it's important to check the signer, while recipient of gems can be any address"
          ]
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "endTurn",
      "accounts": [
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "npcAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "closeGame",
      "accounts": [
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "npcAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "repairWall",
      "accounts": [
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "cityId",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "Game",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "npc",
            "type": "publicKey"
          },
          {
            "name": "turn",
            "type": "u32"
          },
          {
            "name": "defeat",
            "type": "bool"
          },
          {
            "name": "victory",
            "type": "bool"
          },
          {
            "name": "map",
            "type": {
              "array": [
                {
                  "defined": "Terrain"
                },
                400
              ]
            }
          }
        ]
      }
    },
    {
      "name": "Player",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "game",
            "type": "publicKey"
          },
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "points",
            "type": "u32"
          },
          {
            "name": "cities",
            "type": {
              "vec": {
                "defined": "City"
              }
            }
          },
          {
            "name": "tiles",
            "type": {
              "vec": {
                "defined": "Tile"
              }
            }
          },
          {
            "name": "units",
            "type": {
              "vec": {
                "defined": "Unit"
              }
            }
          },
          {
            "name": "resources",
            "type": {
              "defined": "Resources"
            }
          },
          {
            "name": "researchedTechnologies",
            "type": {
              "vec": {
                "defined": "TechnologyType"
              }
            }
          },
          {
            "name": "currentResearch",
            "type": {
              "option": {
                "defined": "TechnologyType"
              }
            }
          },
          {
            "name": "researchAccumulatedPoints",
            "type": "u32"
          },
          {
            "name": "nextCityId",
            "type": "u32"
          },
          {
            "name": "nextUnitId",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Npc",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "game",
            "type": "publicKey"
          },
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "cities",
            "type": {
              "vec": {
                "defined": "City"
              }
            }
          },
          {
            "name": "units",
            "type": {
              "vec": {
                "defined": "Unit"
              }
            }
          },
          {
            "name": "nextCityId",
            "type": "u32"
          },
          {
            "name": "nextUnitId",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "City",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cityId",
            "type": "u32"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "game",
            "type": "publicKey"
          },
          {
            "name": "x",
            "type": "u8"
          },
          {
            "name": "y",
            "type": "u8"
          },
          {
            "name": "health",
            "type": "u32"
          },
          {
            "name": "wallHealth",
            "type": "u32"
          },
          {
            "name": "attack",
            "type": "u32"
          },
          {
            "name": "population",
            "type": "u32"
          },
          {
            "name": "goldYield",
            "type": "u32"
          },
          {
            "name": "foodYield",
            "type": "u32"
          },
          {
            "name": "productionYield",
            "type": "u32"
          },
          {
            "name": "scienceYield",
            "type": "u32"
          },
          {
            "name": "buildings",
            "type": {
              "vec": {
                "defined": "BuildingType"
              }
            }
          },
          {
            "name": "productionQueue",
            "type": {
              "vec": {
                "defined": "ProductionItem"
              }
            }
          },
          {
            "name": "accumulatedProduction",
            "type": "u32"
          },
          {
            "name": "accumulatedFood",
            "type": "i32"
          },
          {
            "name": "housing",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Terrain",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "terrain",
            "type": "u8"
          },
          {
            "name": "discovered",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Resources",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gold",
            "type": "i32"
          },
          {
            "name": "wood",
            "type": "u32"
          },
          {
            "name": "stone",
            "type": "u32"
          },
          {
            "name": "iron",
            "type": "u32"
          },
          {
            "name": "gems",
            "type": "u32"
          },
          {
            "name": "horses",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Tile",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tileType",
            "type": {
              "defined": "TileType"
            }
          },
          {
            "name": "x",
            "type": "u8"
          },
          {
            "name": "y",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "Unit",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "unitId",
            "type": "u32"
          },
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "game",
            "type": "publicKey"
          },
          {
            "name": "unitType",
            "type": {
              "defined": "UnitType"
            }
          },
          {
            "name": "x",
            "type": "u8"
          },
          {
            "name": "y",
            "type": "u8"
          },
          {
            "name": "attack",
            "type": "u8"
          },
          {
            "name": "health",
            "type": "u8"
          },
          {
            "name": "movementRange",
            "type": "u8"
          },
          {
            "name": "remainingActions",
            "type": "u8"
          },
          {
            "name": "baseProductionCost",
            "type": "u32"
          },
          {
            "name": "baseGoldCost",
            "type": "u32"
          },
          {
            "name": "baseResourceCost",
            "type": "u32"
          },
          {
            "name": "maintenanceCost",
            "type": "i32"
          },
          {
            "name": "isRanged",
            "type": "bool"
          },
          {
            "name": "isAlive",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "BuildingError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "TileOccupied"
          }
        ]
      }
    },
    {
      "name": "TileError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "NotUpgradeable"
          },
          {
            "name": "TileOccupied"
          }
        ]
      }
    },
    {
      "name": "CityError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "QueueFull"
          },
          {
            "name": "BuildingAlreadyExists"
          },
          {
            "name": "CityNotFound"
          },
          {
            "name": "AlreadyQueued"
          },
          {
            "name": "InsufficientResources"
          },
          {
            "name": "InvalidItem"
          },
          {
            "name": "QueueItemNotFound"
          },
          {
            "name": "InsufficientGold"
          },
          {
            "name": "TechnologyNotResearched"
          },
          {
            "name": "InsufficientWood"
          },
          {
            "name": "InsufficientStone"
          },
          {
            "name": "NotDamagedWall"
          },
          {
            "name": "NoWall"
          },
          {
            "name": "InsufficientGoldForMaintenance"
          }
        ]
      }
    },
    {
      "name": "ResearchError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "InvalidResearch"
          },
          {
            "name": "AlreadyResearching"
          },
          {
            "name": "ResearchAlreadyCompleted"
          },
          {
            "name": "CannotResearch"
          },
          {
            "name": "ResearchNotComplete"
          },
          {
            "name": "NoActiveResearch"
          }
        ]
      }
    },
    {
      "name": "GameError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "NotEnoughGems"
          }
        ]
      }
    },
    {
      "name": "ProductionItem",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unit",
            "fields": [
              {
                "defined": "UnitType"
              }
            ]
          },
          {
            "name": "Building",
            "fields": [
              {
                "defined": "BuildingType"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "BuildingType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Barracks"
          },
          {
            "name": "Wall"
          },
          {
            "name": "WallMedieval"
          },
          {
            "name": "WallRenaissance"
          },
          {
            "name": "WallIndustrial"
          },
          {
            "name": "Library"
          },
          {
            "name": "School"
          },
          {
            "name": "University"
          },
          {
            "name": "Observatory"
          },
          {
            "name": "Forge"
          },
          {
            "name": "Factory"
          },
          {
            "name": "EnergyPlant"
          },
          {
            "name": "Market"
          },
          {
            "name": "Bank"
          },
          {
            "name": "StockExchange"
          },
          {
            "name": "Granary"
          },
          {
            "name": "Mill"
          },
          {
            "name": "Bakery"
          },
          {
            "name": "Supermarket"
          },
          {
            "name": "ResidentialComplex"
          }
        ]
      }
    },
    {
      "name": "TileType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "LumberMill"
          },
          {
            "name": "StoneQuarry"
          },
          {
            "name": "Farm"
          },
          {
            "name": "IronMine"
          },
          {
            "name": "Pasture"
          }
        ]
      }
    },
    {
      "name": "TechnologyType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "AnimalHusbandry"
          },
          {
            "name": "Archery"
          },
          {
            "name": "HorsebackRiding"
          },
          {
            "name": "IronWorking"
          },
          {
            "name": "MedievalWarfare"
          },
          {
            "name": "Gunpowder"
          },
          {
            "name": "Ballistics"
          },
          {
            "name": "TanksAndArmor"
          },
          {
            "name": "Writing"
          },
          {
            "name": "Education"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Academia"
          },
          {
            "name": "Astronomy"
          },
          {
            "name": "Capitalism"
          },
          {
            "name": "Agriculture"
          },
          {
            "name": "Construction"
          },
          {
            "name": "Industrialization"
          },
          {
            "name": "ElectricalPower"
          },
          {
            "name": "ModernFarming"
          },
          {
            "name": "Urbanization"
          }
        ]
      }
    },
    {
      "name": "UnitType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Settler"
          },
          {
            "name": "Builder"
          },
          {
            "name": "Warrior"
          },
          {
            "name": "Archer"
          },
          {
            "name": "Swordsman"
          },
          {
            "name": "Crossbowman"
          },
          {
            "name": "Musketman"
          },
          {
            "name": "Rifleman"
          },
          {
            "name": "Tank"
          },
          {
            "name": "Horseman"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UnitNotFound",
      "msg": "Unit with given ID not found"
    },
    {
      "code": 6001,
      "name": "CannotMove",
      "msg": "Unit cannot move this turn"
    },
    {
      "code": 6002,
      "name": "OutOfMovementRange",
      "msg": "Out of movement range"
    },
    {
      "code": 6003,
      "name": "OutOfMapBounds",
      "msg": "Out of map bounds"
    },
    {
      "code": 6004,
      "name": "TileOccupied",
      "msg": "Tile is occupied by another unit"
    },
    {
      "code": 6005,
      "name": "InvalidUnitType",
      "msg": "The provided unit cannot perform this action"
    },
    {
      "code": 6006,
      "name": "UnitWrongPosition",
      "msg": "The provided unit is not at the required coordinates"
    },
    {
      "code": 6007,
      "name": "InvalidAttack",
      "msg": "The provided unit cannot attack"
    },
    {
      "code": 6008,
      "name": "OutOfAttackRange",
      "msg": "The provided unit is out of attack range"
    },
    {
      "code": 6009,
      "name": "NoMovementPoints",
      "msg": "No movement points left this turn"
    },
    {
      "code": 6010,
      "name": "UnitNotDamaged",
      "msg": "Unit is not damaged"
    },
    {
      "code": 6011,
      "name": "NotEnoughResources",
      "msg": "Not enough of food to heal the unit"
    }
  ],
  "metadata": {
    "address": "3qoyRXbpBJDPfQYL5GUFJ2nf2YzpA8kZmXPYr4DZBmPU"
  }
};

export const IDL: Solciv = {
  "version": "0.1.0",
  "name": "solciv",
  "instructions": [
    {
      "name": "initializeGame",
      "accounts": [
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "map",
          "type": {
            "array": [
              "u8",
              400
            ]
          }
        }
      ]
    },
    {
      "name": "initializePlayer",
      "accounts": [
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initializeNpc",
      "accounts": [
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "npcAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "moveUnit",
      "accounts": [
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "unitId",
          "type": "u32"
        },
        {
          "name": "x",
          "type": "u8"
        },
        {
          "name": "y",
          "type": "u8"
        }
      ]
    },
    {
      "name": "healUnit",
      "accounts": [
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "unitId",
          "type": "u32"
        }
      ]
    },
    {
      "name": "foundCity",
      "accounts": [
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "x",
          "type": "u8"
        },
        {
          "name": "y",
          "type": "u8"
        },
        {
          "name": "unitId",
          "type": "u32"
        },
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "addToProductionQueue",
      "accounts": [
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "cityId",
          "type": "u32"
        },
        {
          "name": "item",
          "type": {
            "defined": "ProductionItem"
          }
        }
      ]
    },
    {
      "name": "removeFromProductionQueue",
      "accounts": [
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "cityId",
          "type": "u32"
        },
        {
          "name": "index",
          "type": "u8"
        }
      ]
    },
    {
      "name": "purchaseWithGold",
      "accounts": [
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "cityId",
          "type": "u32"
        },
        {
          "name": "item",
          "type": {
            "defined": "ProductionItem"
          }
        }
      ]
    },
    {
      "name": "startResearch",
      "accounts": [
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "technologyType",
          "type": {
            "defined": "TechnologyType"
          }
        }
      ]
    },
    {
      "name": "upgradeTile",
      "accounts": [
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "x",
          "type": "u8"
        },
        {
          "name": "y",
          "type": "u8"
        },
        {
          "name": "unitId",
          "type": "u32"
        }
      ]
    },
    {
      "name": "attackUnit",
      "accounts": [
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "npcAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "attackerId",
          "type": "u32"
        },
        {
          "name": "defenderId",
          "type": "u32"
        }
      ]
    },
    {
      "name": "attackCity",
      "accounts": [
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "npcAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "attackerId",
          "type": "u32"
        },
        {
          "name": "cityId",
          "type": "u32"
        }
      ]
    },
    {
      "name": "mintGems",
      "accounts": [
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "it's important to check the signer, while recipient of gems can be any address"
          ]
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "endTurn",
      "accounts": [
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "npcAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "closeGame",
      "accounts": [
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "npcAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "repairWall",
      "accounts": [
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "cityId",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "Game",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "npc",
            "type": "publicKey"
          },
          {
            "name": "turn",
            "type": "u32"
          },
          {
            "name": "defeat",
            "type": "bool"
          },
          {
            "name": "victory",
            "type": "bool"
          },
          {
            "name": "map",
            "type": {
              "array": [
                {
                  "defined": "Terrain"
                },
                400
              ]
            }
          }
        ]
      }
    },
    {
      "name": "Player",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "game",
            "type": "publicKey"
          },
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "points",
            "type": "u32"
          },
          {
            "name": "cities",
            "type": {
              "vec": {
                "defined": "City"
              }
            }
          },
          {
            "name": "tiles",
            "type": {
              "vec": {
                "defined": "Tile"
              }
            }
          },
          {
            "name": "units",
            "type": {
              "vec": {
                "defined": "Unit"
              }
            }
          },
          {
            "name": "resources",
            "type": {
              "defined": "Resources"
            }
          },
          {
            "name": "researchedTechnologies",
            "type": {
              "vec": {
                "defined": "TechnologyType"
              }
            }
          },
          {
            "name": "currentResearch",
            "type": {
              "option": {
                "defined": "TechnologyType"
              }
            }
          },
          {
            "name": "researchAccumulatedPoints",
            "type": "u32"
          },
          {
            "name": "nextCityId",
            "type": "u32"
          },
          {
            "name": "nextUnitId",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Npc",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "game",
            "type": "publicKey"
          },
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "cities",
            "type": {
              "vec": {
                "defined": "City"
              }
            }
          },
          {
            "name": "units",
            "type": {
              "vec": {
                "defined": "Unit"
              }
            }
          },
          {
            "name": "nextCityId",
            "type": "u32"
          },
          {
            "name": "nextUnitId",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "City",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cityId",
            "type": "u32"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "game",
            "type": "publicKey"
          },
          {
            "name": "x",
            "type": "u8"
          },
          {
            "name": "y",
            "type": "u8"
          },
          {
            "name": "health",
            "type": "u32"
          },
          {
            "name": "wallHealth",
            "type": "u32"
          },
          {
            "name": "attack",
            "type": "u32"
          },
          {
            "name": "population",
            "type": "u32"
          },
          {
            "name": "goldYield",
            "type": "u32"
          },
          {
            "name": "foodYield",
            "type": "u32"
          },
          {
            "name": "productionYield",
            "type": "u32"
          },
          {
            "name": "scienceYield",
            "type": "u32"
          },
          {
            "name": "buildings",
            "type": {
              "vec": {
                "defined": "BuildingType"
              }
            }
          },
          {
            "name": "productionQueue",
            "type": {
              "vec": {
                "defined": "ProductionItem"
              }
            }
          },
          {
            "name": "accumulatedProduction",
            "type": "u32"
          },
          {
            "name": "accumulatedFood",
            "type": "i32"
          },
          {
            "name": "housing",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Terrain",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "terrain",
            "type": "u8"
          },
          {
            "name": "discovered",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Resources",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gold",
            "type": "i32"
          },
          {
            "name": "wood",
            "type": "u32"
          },
          {
            "name": "stone",
            "type": "u32"
          },
          {
            "name": "iron",
            "type": "u32"
          },
          {
            "name": "gems",
            "type": "u32"
          },
          {
            "name": "horses",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Tile",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tileType",
            "type": {
              "defined": "TileType"
            }
          },
          {
            "name": "x",
            "type": "u8"
          },
          {
            "name": "y",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "Unit",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "unitId",
            "type": "u32"
          },
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "game",
            "type": "publicKey"
          },
          {
            "name": "unitType",
            "type": {
              "defined": "UnitType"
            }
          },
          {
            "name": "x",
            "type": "u8"
          },
          {
            "name": "y",
            "type": "u8"
          },
          {
            "name": "attack",
            "type": "u8"
          },
          {
            "name": "health",
            "type": "u8"
          },
          {
            "name": "movementRange",
            "type": "u8"
          },
          {
            "name": "remainingActions",
            "type": "u8"
          },
          {
            "name": "baseProductionCost",
            "type": "u32"
          },
          {
            "name": "baseGoldCost",
            "type": "u32"
          },
          {
            "name": "baseResourceCost",
            "type": "u32"
          },
          {
            "name": "maintenanceCost",
            "type": "i32"
          },
          {
            "name": "isRanged",
            "type": "bool"
          },
          {
            "name": "isAlive",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "BuildingError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "TileOccupied"
          }
        ]
      }
    },
    {
      "name": "TileError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "NotUpgradeable"
          },
          {
            "name": "TileOccupied"
          }
        ]
      }
    },
    {
      "name": "CityError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "QueueFull"
          },
          {
            "name": "BuildingAlreadyExists"
          },
          {
            "name": "CityNotFound"
          },
          {
            "name": "AlreadyQueued"
          },
          {
            "name": "InsufficientResources"
          },
          {
            "name": "InvalidItem"
          },
          {
            "name": "QueueItemNotFound"
          },
          {
            "name": "InsufficientGold"
          },
          {
            "name": "TechnologyNotResearched"
          },
          {
            "name": "InsufficientWood"
          },
          {
            "name": "InsufficientStone"
          },
          {
            "name": "NotDamagedWall"
          },
          {
            "name": "NoWall"
          },
          {
            "name": "InsufficientGoldForMaintenance"
          }
        ]
      }
    },
    {
      "name": "ResearchError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "InvalidResearch"
          },
          {
            "name": "AlreadyResearching"
          },
          {
            "name": "ResearchAlreadyCompleted"
          },
          {
            "name": "CannotResearch"
          },
          {
            "name": "ResearchNotComplete"
          },
          {
            "name": "NoActiveResearch"
          }
        ]
      }
    },
    {
      "name": "GameError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "NotEnoughGems"
          }
        ]
      }
    },
    {
      "name": "ProductionItem",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unit",
            "fields": [
              {
                "defined": "UnitType"
              }
            ]
          },
          {
            "name": "Building",
            "fields": [
              {
                "defined": "BuildingType"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "BuildingType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Barracks"
          },
          {
            "name": "Wall"
          },
          {
            "name": "WallMedieval"
          },
          {
            "name": "WallRenaissance"
          },
          {
            "name": "WallIndustrial"
          },
          {
            "name": "Library"
          },
          {
            "name": "School"
          },
          {
            "name": "University"
          },
          {
            "name": "Observatory"
          },
          {
            "name": "Forge"
          },
          {
            "name": "Factory"
          },
          {
            "name": "EnergyPlant"
          },
          {
            "name": "Market"
          },
          {
            "name": "Bank"
          },
          {
            "name": "StockExchange"
          },
          {
            "name": "Granary"
          },
          {
            "name": "Mill"
          },
          {
            "name": "Bakery"
          },
          {
            "name": "Supermarket"
          },
          {
            "name": "ResidentialComplex"
          }
        ]
      }
    },
    {
      "name": "TileType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "LumberMill"
          },
          {
            "name": "StoneQuarry"
          },
          {
            "name": "Farm"
          },
          {
            "name": "IronMine"
          },
          {
            "name": "Pasture"
          }
        ]
      }
    },
    {
      "name": "TechnologyType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "AnimalHusbandry"
          },
          {
            "name": "Archery"
          },
          {
            "name": "HorsebackRiding"
          },
          {
            "name": "IronWorking"
          },
          {
            "name": "MedievalWarfare"
          },
          {
            "name": "Gunpowder"
          },
          {
            "name": "Ballistics"
          },
          {
            "name": "TanksAndArmor"
          },
          {
            "name": "Writing"
          },
          {
            "name": "Education"
          },
          {
            "name": "Economics"
          },
          {
            "name": "Academia"
          },
          {
            "name": "Astronomy"
          },
          {
            "name": "Capitalism"
          },
          {
            "name": "Agriculture"
          },
          {
            "name": "Construction"
          },
          {
            "name": "Industrialization"
          },
          {
            "name": "ElectricalPower"
          },
          {
            "name": "ModernFarming"
          },
          {
            "name": "Urbanization"
          }
        ]
      }
    },
    {
      "name": "UnitType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Settler"
          },
          {
            "name": "Builder"
          },
          {
            "name": "Warrior"
          },
          {
            "name": "Archer"
          },
          {
            "name": "Swordsman"
          },
          {
            "name": "Crossbowman"
          },
          {
            "name": "Musketman"
          },
          {
            "name": "Rifleman"
          },
          {
            "name": "Tank"
          },
          {
            "name": "Horseman"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UnitNotFound",
      "msg": "Unit with given ID not found"
    },
    {
      "code": 6001,
      "name": "CannotMove",
      "msg": "Unit cannot move this turn"
    },
    {
      "code": 6002,
      "name": "OutOfMovementRange",
      "msg": "Out of movement range"
    },
    {
      "code": 6003,
      "name": "OutOfMapBounds",
      "msg": "Out of map bounds"
    },
    {
      "code": 6004,
      "name": "TileOccupied",
      "msg": "Tile is occupied by another unit"
    },
    {
      "code": 6005,
      "name": "InvalidUnitType",
      "msg": "The provided unit cannot perform this action"
    },
    {
      "code": 6006,
      "name": "UnitWrongPosition",
      "msg": "The provided unit is not at the required coordinates"
    },
    {
      "code": 6007,
      "name": "InvalidAttack",
      "msg": "The provided unit cannot attack"
    },
    {
      "code": 6008,
      "name": "OutOfAttackRange",
      "msg": "The provided unit is out of attack range"
    },
    {
      "code": 6009,
      "name": "NoMovementPoints",
      "msg": "No movement points left this turn"
    },
    {
      "code": 6010,
      "name": "UnitNotDamaged",
      "msg": "Unit is not damaged"
    },
    {
      "code": 6011,
      "name": "NotEnoughResources",
      "msg": "Not enough of food to heal the unit"
    }
  ],
  "metadata": {
    "address": "3qoyRXbpBJDPfQYL5GUFJ2nf2YzpA8kZmXPYr4DZBmPU"
  }
};