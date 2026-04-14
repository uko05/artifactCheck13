import { MAIN_STATS, PARTS } from "./stats.js";

export const characterBuild = {

  "リンネア": {
    icon: "linnea.png",
    Element: "岩",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "aubade_of_morningstar_and_moon", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "husk", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.DEF_PCT,
      goblet: MAIN_STATS.DEF_PCT,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.DEF_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "ファルカ": {
    icon: "faruka.png",
    Element: "風",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "A_Day_Carved_From_Rising_Winds", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ATK_PCT,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT
    ]
  },
  
  "茲白": {
    icon: "shihaku.png",
    Element: "岩",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "Night_of_the_Sky_Unveiling", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.DEF_PCT,
      goblet: MAIN_STATS.DEF_PCT,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.DEF_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "イルーガ": {
    icon: "iruga.png",
    Element: "岩",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "Silken_Moon_Serenade", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.EM,
      goblet: MAIN_STATS.EM,
      circlet: MAIN_STATS.EM
    },

    subStats: [
      MAIN_STATS.EM,
      MAIN_STATS.DEF_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "コロンビーナ": {
    icon: "shojo.png",
    Element: "水",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "aubade_of_morningstar_and_moon", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "Silken_Moon_Serenade", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.HP_PCT,
      goblet: MAIN_STATS.HP_PCT,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.HP_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "ドゥリン": {
    icon: "dorin.png",
    Element: "炎",

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
  
  "ヤフォダ": {
    icon: "yafoda.png",
    Element: "風",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "viridescent", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "Silken_Moon_Serenade", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ER,
      goblet: MAIN_STATS.ATK_PCT,
      circlet: MAIN_STATS.HEAL_BONUS
    },

    subStats: [
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.EM,
      MAIN_STATS.ER
    ]
  },
  
  "ネフェル": {
    icon: "neferu.png",
    Element: "草",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "Night_of_the_Sky_Unveiling", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.EM,
      goblet: MAIN_STATS.EM,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ER,
      MAIN_STATS.EM
    ]
  },
  
  "フリンズ": {
    icon: "hurinzu.png",
    Element: "雷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "Night_of_the_Sky_Unveiling", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ATK_PCT,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "ラウマ": {
    icon: "rauma.png",
    Element: "草",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "Silken_Moon_Serenade", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "deepwood", count: 4 }
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
      MAIN_STATS.EM,
      MAIN_STATS.ER
    ]
  },
  
  "アイノ": {
    icon: "aino.png",
    Element: "水",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "Silken_Moon_Serenade", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.EM,
      goblet: MAIN_STATS.HYDRO_DMG,
      circlet: MAIN_STATS.CRIT_RATE
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.EM,
      MAIN_STATS.ER
    ]
  },
  
  "イネファ": {
    icon: "inefa.png",
    Element: "雷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "Silken_Moon_Serenade", count: 4 }
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
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ATK_PCT,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "スカーク": {
    icon: "skaku.png",
    Element: "氷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "Finale_of_the_Deep_Galleries", count: 4 }
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
      MAIN_STATS.ATK_PCT
    ]
  },
 
  "ダリア": {
    icon: "daria.png",
    Element: "水",

    recommendedSets: [
      {
        rank: 1,
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
      MAIN_STATS.HP_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "エスコフィエ": {
    icon: "esuko.png",
    Element: "氷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "golden_troupe", count: 4 }
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
  
  "イファ": {
    icon: "ifa.png",
    Element: "風",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "viridescent", count: 4 }
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
      sands: MAIN_STATS.EM,
      goblet: MAIN_STATS.EM,
      circlet: MAIN_STATS.EM
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.EM,
      MAIN_STATS.ER
    ]
  },
  
  "ヴァレサ": {
    icon: "baresa.png",
    Element: "雷",

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
  
  "イアンサ": {
    icon: "Iansan.png",
    Element: "雷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "cinder_city", count: 4 }
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
  
  "夢見月瑞希": {
    icon: "mizuki.png",
    Element: "風",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "viridescent", count: 4 }
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
      MAIN_STATS.EM,
      MAIN_STATS.ER
    ]
  },
  
  "藍硯": {
    icon: "ranyan.png",
    Element: "風",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "viridescent", count: 4 }
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
 
  "マーヴィカ": {
    icon: "Mavuika.png",
    Element: "炎",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "obsidian_codex", count: 4 }
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
  
  "シトラリ": {
    icon: "sitorari.png",
    Element: "氷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "cinder_city", count: 4 }
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
      MAIN_STATS.EM,
      MAIN_STATS.ER
    ]
  },
  
  "チャスカ": {
    icon: "Chasca.png",
    Element: "風",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "obsidian_codex", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ATK_PCT,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT
    ]
  },
  
  "オロルン": {
    icon: "oruron.png",
    Element: "雷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "cinder_city", count: 4 }
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
  
  "シロネン": {
    icon: "sironen.png",
    Element: "岩",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "cinder_city", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.DEF_PCT,
      goblet: MAIN_STATS.DEF_PCT,
      circlet: MAIN_STATS.DEF_PCT
    },

    subStats: [
      MAIN_STATS.DEF_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "キィニチ": {
    icon: "Kinich.png",
    Element: "草",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "obsidian_codex", count: 4 }
        ]
      },
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.DENDRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "ムアラニ": {
    icon: "Mualani.png",
    Element: "水",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "obsidian_codex", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.HP_PCT,
      goblet: MAIN_STATS.HYDRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.HP_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "カチーナ": {
    icon: "Kachina.png",
    Element: "岩",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "cinder_city", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.DEF_PCT,
      goblet: MAIN_STATS.GEO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.DEF_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "エミリエ": {
    icon: "Emilie.png",
    Element: "草",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "unfinished_reverie", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "deepwood", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.DENDRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "シグウィン": {
    icon: "Sigewinne.png",
    Element: "水",

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
          { id: "hp20", count: 2 },
          { id: "hp20", count: 2 }
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
      MAIN_STATS.HP_PCT
    ]
  },
  
  "クロリンデ": {
    icon: "Clorinde.png",
    Element: "雷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "harmonic_whimsy", count: 4 }
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
  
  "セトス": {
    icon: "Sethos.png",
    Element: "雷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "wanderers_troupe", count: 4 }
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
  
  "アルレッキーノ": {
    icon: "Arlecchino.png",
    Element: "炎",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "harmonic_whimsy", count: 4 }
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
      MAIN_STATS.ATK_PCT
    ]
  },
  
  "千織": {
    icon: "Chiori.png",
    Element: "岩",

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
          { id: "husk", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.DEF_PCT,
      goblet: MAIN_STATS.GEO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.DEF_PCT
    ]
  },
   
  "閑雲": {
    icon: "Xianyun.png",
    Element: "風",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "viridescent", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "song_of_days_past", count: 4 }
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
  
  "嘉明": {
    icon: "Gaming.png",
    Element: "炎",

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
    Element: "炎",

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
  
  "ナヴィア": {
    icon: "Navia.png",
    Element: "岩",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "nighttime_whispers", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.GEO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "フリーナ": {
    icon: "Furina.png",
    Element: "水",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "golden_troupe", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.HP_PCT,
      goblet: MAIN_STATS.HP_PCT,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.HP_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "シャルロット": {
    icon: "Charlotte.png",
    Element: "氷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "atk18", count: 2 },
          { id: "er20", count: 2 }
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
      goblet: MAIN_STATS.ATK_PCT,
      circlet: MAIN_STATS.HEAL_BONUS
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "リオセスリ": {
    icon: "Wriothesley.png",
    Element: "氷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "marechaussee", count: 4 }
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
      MAIN_STATS.ATK_PCT
    ]
  },
  
  "ヌヴィレット": {
    icon: "Neuvillette.png",
    Element: "水",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "marechaussee", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.HP_PCT,
      goblet: MAIN_STATS.HYDRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.HP_PCT
    ]
  },
  
  "フレミネ": {
    icon: "Freminet.png",
    Element: "氷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "pale_flame", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "blizzard_strayer", count: 4 }
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
  
  "リネ": {
    icon: "Lyney.png",
    Element: "炎",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "marechaussee", count: 4 }
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
  
  "リネット": {
    icon: "Lynette.png",
    Element: "風",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "viridescent", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "marechaussee", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ANEMO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "綺良々": {
    icon: "Kirara.png",
    Element: "草",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "hp20", count: 2 },
          { id: "hp20", count: 2 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "deepwood", count: 4 }
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
      MAIN_STATS.HP_PCT
    ]
  },
  
  "白朮": {
    icon: "Baizhu.png",
    Element: "草",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "deepwood", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "hp20", count: 2 },
          { id: "hp20", count: 2 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.HP_PCT,
      goblet: MAIN_STATS.HP_PCT,
      circlet: MAIN_STATS.HP_PCT
    },

    subStats: [
      MAIN_STATS.HP_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "カーヴェ": {
    icon: "Kaveh.png",
    Element: "草",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "paradise_lost", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "deepwood", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.EM,
      goblet: MAIN_STATS.DENDRO_DMG,
      circlet: MAIN_STATS.EM
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.EM,
      MAIN_STATS.ER
    ]
  },
  
  "ミカ": {
    icon: "Mika.png",
    Element: "氷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "noblesse", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.HP_PCT,
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
  
  "ディシア": {
    icon: "Dehya.png",
    Element: "炎",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "vourukasha", count: 4 }
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
      sands: MAIN_STATS.HP_PCT,
      goblet: MAIN_STATS.PYRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.HP_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "アルハイゼン": {
    icon: "Alhaitham.png",
    Element: "草",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "gilded_dreams", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.EM,
      goblet: MAIN_STATS.DENDRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "ヨォーヨ": {
    icon: "Yaoyao.png",
    Element: "草",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "deepwood", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.HP_PCT,
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
  
  "放浪者": {
    icon: "Scaramouche.png",
    Element: "風",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "desert_pavilion", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ANEMO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "ファルザン": {
    icon: "Faruzan.png",
    Element: "風",

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
          { id: "millelith", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ER,
      goblet: MAIN_STATS.ANEMO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "レイラ": {
    icon: "Layla.png",
    Element: "氷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "millelith", count: 4 }
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
  
  "ナヒーダ": {
    icon: "Nahida.png",
    Element: "草",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "deepwood", count: 4 }
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
      MAIN_STATS.EM,
      MAIN_STATS.ER
    ]
  },
  
  "ニィロウ": {
    icon: "Nilou.png",
    Element: "水",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "hp20", count: 2 },
          { id: "hp20", count: 2 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.HP_PCT,
      goblet: MAIN_STATS.HP_PCT,
      circlet: MAIN_STATS.HP_PCT
    },

    subStats: [
      MAIN_STATS.HP_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "セノ": {
    icon: "Cyno.png",
    Element: "雷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "gilded_dreams", count: 4 }
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
  
  "キャンディス": {
    icon: "Candace.png",
    Element: "水",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "hp20", count: 2 },
          { id: "er20", count: 2 }
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
  
  "ドリー": {
    icon: "Dori.png",
    Element: "雷",

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
  
  "ティナリ": {
    icon: "Tighnari.png",
    Element: "草",

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
      goblet: MAIN_STATS.DENDRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.EM,
      MAIN_STATS.ATK_PCT
    ]
  },
  
  "コレイ": {
    icon: "Collei.png",
    Element: "草",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "deepwood", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.DENDRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.EM,
      MAIN_STATS.ER
    ]
  },
  
  "鹿野院平蔵": {
    icon: "Heizou.png",
    Element: "風",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "viridescent", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "anemo15", count: 2 },
          { id: "atk18", count: 2 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ANEMO_DMG,
      circlet: MAIN_STATS.CRIT
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
    Element: "雷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "gilded_dreams", count: 4 }
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
  
  "夜蘭": {
    icon: "Yelan.png",
    Element: "水",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "emblem", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.HP_PCT,
      goblet: MAIN_STATS.HYDRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.HP_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "神里綾人": {
    icon: "KamisatoAyato.png",
    Element: "水",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "echoes", count: 4 }
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
      goblet: MAIN_STATS.HYDRO_DMG,
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
    Element: "雷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "gilded_dreams", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "golden_troupe", count: 4 }
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
      MAIN_STATS.HP_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "申鶴": {
    icon: "Shenhe.png",
    Element: "氷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "atk18", count: 2 },
          { id: "atk18", count: 2 }
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
  
  "雲菫": {
    icon: "YunJin.png",
    Element: "岩",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "husk", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "def30", count: 2 },
          { id: "er20", count: 2 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.DEF_PCT,
      goblet: MAIN_STATS.DEF_PCT,
      circlet: MAIN_STATS.DEF_PCT
    },

    subStats: [
      MAIN_STATS.DEF_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "荒瀧一斗": {
    icon: "AratakiItto.png",
    Element: "岩",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "husk", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.DEF_PCT,
      goblet: MAIN_STATS.GEO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.DEF_PCT
    ]
  },
  
  "ゴロー": {
    icon: "Gorou.png",
    Element: "岩",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "husk", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "def30", count: 2 },
          { id: "er20", count: 2 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.DEF_PCT,
      goblet: MAIN_STATS.DEF_PCT,
      circlet: MAIN_STATS.DEF_PCT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.DEF_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "トーマ": {
    icon: "Thoma.png",
    Element: "炎",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "hp20", count: 2 },
          { id: "er20", count: 2 }
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
  
  "珊瑚宮心海": {
    icon: "Kokomi.png",
    Element: "水",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "ocean_clam", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "millelith", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.HP_PCT,
      goblet: MAIN_STATS.HP_PCT,
      circlet: MAIN_STATS.HEAL_BONUS
    },

    subStats: [
      MAIN_STATS.EM,
      MAIN_STATS.HP_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "雷電将軍": {
    icon: "Raiden.png",
    Element: "雷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "emblem", count: 4 }
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
  
  "九条裟羅": {
    icon: "KujouSara.png",
    Element: "雷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "emblem", count: 4 }
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
  
  "アーロイ": {
    icon: "aroi.png",
    Element: "氷",

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
          { id: "cryo15", count: 2 },
          { id: "atk18", count: 2 }
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
  
  "宵宮": {
    icon: "Yoimiya.png",
    Element: "炎",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "shimenawa", count: 4 }
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
  
  "早柚": {
    icon: "Sayu.png",
    Element: "風",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "viridescent", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ATK_PCT,
      circlet: MAIN_STATS.HEAL_BONUS
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "神里綾華": {
    icon: "AyakaKamisato.png",
    Element: "氷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "blizzard_strayer", count: 4 }
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
  
  "楓原万葉": {
    icon: "KazuhaKaedehara.png",
    Element: "風",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "viridescent", count: 4 }
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
      MAIN_STATS.EM,
      MAIN_STATS.ER
    ]
  },
  
  "エウルア": {
    icon: "Eula.png",
    Element: "氷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "pale_flame", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "phys25", count: 2 },
          { id: "phys25", count: 2 }
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
  
  "煙緋": {
    icon: "YanFei.png",
    Element: "炎",

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
  
  "ロサリア": {
    icon: "rosaria.png",
    Element: "氷",

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
  
  "胡桃": {
    icon: "Hutao.png",
    Element: "炎",

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
 
  "魈": {
    icon: "Xiao.png",
    Element: "風",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "vermillion", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "atk18", count: 2 },
          { id: "anemo15", count: 2 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ANEMO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "甘雨": {
    icon: "Ganyu.png",
    Element: "氷",

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
          { id: "blizzard_strayer", count: 4 }
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
      MAIN_STATS.ATK_PCT
    ]
  },
  
  "アルベド": {
    icon: "Albedo.png",
    Element: "岩",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "husk", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "golden_troupe", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.DEF_PCT,
      goblet: MAIN_STATS.GEO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.DEF_PCT
    ]
  },
  
  "鍾離": {
    icon: "Zhongli.png",
    Element: "岩",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "millelith", count: 4 }
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
  
  "辛炎": {
    icon: "Xinyan.png",
    Element: "炎",

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
  
  "タルタリヤ": {
    icon: "Tartaglia.png",
    Element: "水",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "heart_of_depth", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "nymphs_dream", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.HYDRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.EM
    ]
  },
  
  "ディオナ": {
    icon: "Diona.png",
    Element: "氷",

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
          { id: "maiden_beloved", count: 4 }
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
  
  "クレー": {
    icon: "Klee.png",
    Element: "炎",

    recommendedSets: [
      {
        rank: 1,
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
      MAIN_STATS.EM
    ]
  },
  
  "ウェンティ": {
    icon: "Venti.png",
    Element: "風",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "viridescent", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "A_Day_Carved_From_Rising_Winds", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ANEMO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "刻晴": {
    icon: "Keqing.png",
    Element: "雷",

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
          { id: "electro15", count: 2 },
          { id: "atk18", count: 2 }
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
  
  "モナ": {
    icon: "Mona.png",
    Element: "水",

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
      goblet: MAIN_STATS.HYDRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "七七": {
    icon: "Qiqi.png",
    Element: "氷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "ocean_clam", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "maiden_beloved", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ATK_PCT,
      circlet: MAIN_STATS.HEAL_BONUS
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
    Element: "炎",

    recommendedSets: [
      {
        rank: 1,
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
      MAIN_STATS.EM
    ]
  },
  
  "ジン": {
    icon: "Jean.png",
    Element: "風",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "viridescent", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.ATK_PCT,
      circlet: MAIN_STATS.CRIT_RATE
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "スクロース": {
    icon: "Sucrose.png",
    Element: "風",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "viridescent", count: 4 }
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
      MAIN_STATS.EM,
      MAIN_STATS.ER
    ]
  },
  
  "重雲": {
    icon: "Chongyun.png",
    Element: "氷",

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
          { id: "noblesse", count: 4 }
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
  
  "ノエル": {
    icon: "Noelle.png",
    Element: "岩",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "husk", count: 4 }
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
      sands: MAIN_STATS.DEF_PCT,
      goblet: MAIN_STATS.GEO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.DEF_PCT
    ]
  },
  
  "ベネット": {
    icon: "Bennett.png",
    Element: "炎",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "noblesse", count: 4 }
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
  
  "フィッシュル": {
    icon: "Fischl.png",
    Element: "雷",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "golden_troupe", count: 4 }
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
  
  "凝光": {
    icon: "Ningguang.png",
    Element: "岩",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "atk18", count: 2 },
          { id: "geo15", count: 2 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "atk18", count: 2 },
          { id: "atk18", count: 2 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.GEO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "行秋": {
    icon: "Xingqiu.png",
    Element: "水",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "emblem", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.ATK_PCT,
      goblet: MAIN_STATS.HYDRO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "北斗": {
    icon: "Beidou.png",
    Element: "雷",

    recommendedSets: [
      {
        rank: 1,
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
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "香菱": {
    icon: "Xiangling.png",
    Element: "炎",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "emblem", count: 4 }
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
  
  "レザー": {
    icon: "Razor.png",
    Element: "雷",

    recommendedSets: [
      {
        rank: 1,
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
  
  "バーバラ": {
    icon: "barbara.png",
    Element: "水",

    recommendedSets: [
      {
        rank: 1,
        sets: [
          { id: "maiden_beloved", count: 4 }
        ]
      },
      {
        rank: 2,
        sets: [
          { id: "ocean_clam", count: 4 }
        ]
      }
    ],

    mainStats: {
      sands: MAIN_STATS.HP_PCT,
      goblet: MAIN_STATS.HP_PCT,
      circlet: MAIN_STATS.HEAL_BONUS
    },

    subStats: [
      MAIN_STATS.HP_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "リサ": {
    icon: "Lisa.png",
    Element: "雷",

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
    icon: "Kaeya.png",
    Element: "氷",

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
    Element: "炎",

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
