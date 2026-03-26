import { MAIN_STATS, PARTS } from "./stats.js";

export const characterBuild = {

  "胡桃": {
    icon: "Hutao.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "crimson_witch", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "shimenawa", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.HP_PCT,
      goblet: MAIN_STATS.PYRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.HP_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "クレー": {
    icon: "Klee.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "crimson_witch", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "crimson_witch", count: 2 },
          { id: "atk18", count: 2 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.PYRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "嘉明": {
    icon: "Gaming.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "marechaussee", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "crimson_witch", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.PYRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "シュヴルーズ": {
    icon: "Chevreuse.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "song_of_days_past", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "noblesse", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.HP_PCT,
      goblet: MAIN_STATS.HP_PCT,
      circlet: MAIN_STATS.HP_PCT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.HP_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "煙緋": {
    icon: "YanFei.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "crimson_witch", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "wanderers_troupe", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.PYRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "ベネット": {
    icon: "Bennett.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "noblesse", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "emblem", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ER,
      goblet: MAIN_STATS.HP_PCT,
      circlet: MAIN_STATS.HEAL_BONUS
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.HP_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "香菱": {
    icon: "Xiangling.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "emblem", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "crimson_witch", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ER,
      goblet: MAIN_STATS.PYRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "ディルック": {
    icon: "Diluc.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "crimson_witch", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "gladiator", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.PYRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "辛炎": {
    icon: "Xinyan.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "phys25", count: 2 },
          { id: "phys25", count: 2 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "gladiator", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.PHYSICAL_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "フリンズ": {
    icon: "hurinzu.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "Night_of_the_Sky_Unveiling", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "atk18", count: 2 },
          { id: "em80", count: 2 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ATK_PCT,
      circlet: MAIN_STATS.CRIT_DMG
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "ヴァレサ": {
    icon: "baresa.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "Long_Night_Oath", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "obsidian_codex", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ELECTRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "八重神子": {
    icon: "YaeMiko.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "emblem", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "paradise_lost", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.EM,
      goblet: MAIN_STATS.EM,
      circlet: MAIN_STATS.EM
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.HP_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "雷電将軍": {
    icon: "Raiden.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "emblem", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "paradise_lost", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.EM,
      goblet: MAIN_STATS.EM,
      circlet: MAIN_STATS.EM
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.HP_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "刻晴": {
    icon: "Keqing.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "emblem", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "paradise_lost", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.EM,
      goblet: MAIN_STATS.EM,
      circlet: MAIN_STATS.EM
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.HP_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "イアンサ": {
    icon: "Iansan.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "cinder_city", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "noblesse", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ATK_PCT,
      circlet: MAIN_STATS.ATK_PCT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "久岐忍": {
    icon: "KukiShinobu.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "emblem", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "paradise_lost", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.EM,
      goblet: MAIN_STATS.EM,
      circlet: MAIN_STATS.EM
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.HP_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "北斗": {
    icon: "Beidou.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "emblem", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "thundering_fury", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ELECTRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "オロルン": {
    icon: "oruron.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "cinder_city", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "obsidian_codex", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ELECTRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "フィッシュル": {
    icon: "Fischl.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "golden_troupe", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "thundering_fury", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ELECTRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "九条裟羅": {
    icon: "KujouSara.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "emblem", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "noblesse", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ER,
      goblet: MAIN_STATS.ELECTRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "ドリー": {
    icon: "Dori.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "noblesse", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "hp20", count: 2 },
          { id: "er20", count: 2 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ER,
      goblet: MAIN_STATS.HP_PCT,
      circlet: MAIN_STATS.HEAL_BONUS
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.HP_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "セトス": {
    icon: "Sethos.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "wanderers_troupe", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "gilded_dreams", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.EM,
      goblet: MAIN_STATS.ELECTRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.EM,
      MAIN_STATS.ER
    ]
  },
  
  "レザー": {
    icon: "Razor.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "gladiator", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "pale_flame", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.PHYSICAL_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "リサ": {
    icon: "Lisa.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "thundering_fury", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "emblem", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ELECTRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.EM,
      MAIN_STATS.ER
    ]
  },
  
  "ガイア": {
    icon: "kaeya.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "blizzard_strayer", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "emblem", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.CRYO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "アンバー": {
    icon: "amber.png",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "wanderers_troupe", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "crimson_witch", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.PYRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  }
};