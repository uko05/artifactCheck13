import { MAIN_STATS, PARTS } from "./stats.js";

export const characterBuild = {

  "ファルカ": {
    icon: "faruka.png",

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
  
  "ネフェル": {
    icon: "neferu.png",

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
  
  "宵宮": {
    icon: "Yoimiya.png",

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
  
  "リネ": {
    icon: "Lyney.png",

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
      MAIN_STATS.EM
    ]
  },
  
  "神里綾人": {
    icon: "KamisatoAyato.png",

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
  
  "シグウィン": {
    icon: "Sigewinne.png",

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
  
  "ムアラニ": {
    icon: "Mualani.png",

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
  
  "アルハイゼン": {
    icon: "Alhaitham.png",

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
  
  "白朮": {
    icon: "Baizhu.png",

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
  
  "キィニチ": {
    icon: "Kinich.png",

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
  
  "ラウマ": {
    icon: "rauma.png",

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
  
  "セノ": {
    icon: "Cyno.png",

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
  
  "クロリンデ": {
    icon: "Clorinde.png",

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
  
  "イネファ": {
    icon: "inefa.png",

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
  
  "リオセスリ": {
    icon: "Wriothesley.png",

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
      goblet: MAIN_STATS.ANEMO_DMG,
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.CRIT_RATE,
      MAIN_STATS.CRIT_DMG,
      MAIN_STATS.ATK_PCT
    ]
  },
  
  "エスコフィエ": {
    icon: "esuko.png",

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
  
  "スカーク": {
    icon: "skaku.png",

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
  
  "魈": {
    icon: "Xiao.png",

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
  
  "放浪者": {
    icon: "Scaramouche.png",

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
  
  "閑雲": {
    icon: "Xianyun.png",

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
  
  "チャスカ": {
    icon: "Chasca.png",

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
  
  "アルベド": {
    icon: "Albedo.png",

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
      MAIN_STATS.ATK_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "荒瀧一斗": {
    icon: "AratakiItto.png",

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
  
  "ナヴィア": {
    icon: "Navia.png",

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
  
  "千織": {
    icon: "Chiori.png",

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
  
  "シロネン": {
    icon: "sironen.png",

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
  
  "イルーガ": {
    icon: "iruga.png",

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
  
  "茲白": {
    icon: "shihaku.png",

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
  
  "鍾離": {
    icon: "Zhongli.png",

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
  
  "カチーナ": {
    icon: "Kachina.png",

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
  
  "ゴロー": {
    icon: "Gorou.png",

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
  
  "雲菫": {
    icon: "YunJin.png",

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
  
  "凝光": {
    icon: "Ningguang.png",

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
  
  "ノエル": {
    icon: "Noelle.png",

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
      MAIN_STATS.DEF_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "夢見月瑞希": {
    icon: "mizuki.png",

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
  
  "楓原万葉": {
    icon: "KazuhaKaedehara.png",

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
  
  "ウェンティ": {
    icon: "Venti.png",

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
  
  "ジン": {
    icon: "Jean.png",

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
  
  "イファ": {
    icon: "ifa.png",

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
  
  "藍硯": {
    icon: "ranyan.png",

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
 
  "リネット": {
    icon: "Lynette.png",

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
  
  "ファルザン": {
    icon: "Faruzan.png",

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
  
  "鹿野院平蔵": {
    icon: "Heizou.png",

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
   
  "スクロース": {
    icon: "Sucrose.png",

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
  
  "早柚": {
    icon: "Sayu.png",

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
  
  "カーヴェ": {
    icon: "Kaveh.png",

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
  
  "綺良々": {
    icon: "Kirara.png",

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
  
  "ヨォーヨ": {
    icon: "Yaoyao.png",

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
  
  "ティナリ": {
    icon: "Tighnari.png",

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
  
  "ナヒーダ": {
    icon: "Nahida.png",

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
  
  "エミリエ": {
    icon: "Emilie.png",

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
  
  "コレイ": {
    icon: "Collei.png",

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
  
  "キャンディス": {
    icon: "Candace.png",

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
  
  "ダリア": {
    icon: "daria.png",

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
  
  "バーバラ": {
    icon: "barbara.png",

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
      circlet: MAIN_STATS.CRIT
    },

    subStats: [
      MAIN_STATS.HP_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "行秋": {
    icon: "Xingqiu.png",

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
  
  "モナ": {
    icon: "Mona.png",

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
  
  "アイノ": {
    icon: "aino.png",

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
  
  "珊瑚宮心海": {
    icon: "Kokomi.png",

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
  
  "夜蘭": {
    icon: "Yelan.png",

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
  
  "ニィロウ": {
    icon: "Nilou.png",

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
  
  "ヌヴィレット": {
    icon: "Neuvillette.png",

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
      MAIN_STATS.HP_PCT,
      MAIN_STATS.ER
    ]
  },
  
  "コロンビーナ": {
    icon: "shojo.png",

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
  
  "フリーナ": {
    icon: "Furina.png",

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
  
  "シトラリ": {
    icon: "sitorari.png",

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
  
  "申鶴": {
    icon: "Shenhe.png",

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
  
  "エウルア": {
    icon: "Eula.png",

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
  
  "甘雨": {
    icon: "Ganyu.png",

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
  
  "七七": {
    icon: "Qiqi.png",

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
  
  "神里綾華": {
    icon: "AyakaKamisato.png",

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
  
  "シャルロット": {
    icon: "Charlotte.png",

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
  
  "レイラ": {
    icon: "Layla.png",

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
  
  "ディオナ": {
    icon: "Diona.png",

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
  
  "重雲": {
    icon: "Chongyun.png",

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
  
  "アーロイ": {
    icon: "aroi.png",

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
  
  "フレミネ": {
    icon: "Freminet.png",

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
  
  "ミカ": {
    icon: "Mika.png",

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
  
  "ロサリア": {
    icon: "rosaria.png",

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
  
  "ガイア": {
    icon: "Kaeya.png",

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
  
  "ドゥリン": {
    icon: "dorin.png",

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
  
  "マーヴィカ": {
    icon: "Mavuika.png",

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
  
  "アルレッキーノ": {
    icon: "Arlecchino.png",

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
  
  "ディシア": {
    icon: "Dehya.png",

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
      MAIN_STATS.EM
    ]
  },
  
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
  
  "トーマ": {
    icon: "Thoma.png",

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
  
  "フリンズ": {
    icon: "hurinzu.png",

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