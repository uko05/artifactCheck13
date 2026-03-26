/**

* 聖遺物ステータス定義
* * 内部はコード（英語）
* * 表示は日本語
    */

export const PARTS = {
SANDS: "sands",
GOBLET: "goblet",
CIRCLET: "circlet"
};

export const PART_LABEL = {
sands: "時計",
goblet: "杯",
circlet: "冠"
};

/**

* メインステ（内部コード）
  */
  export const MAIN_STATS = {
  // 基本
  HP_PCT: "hp%",
  ATK_PCT: "atk%",
  DEF_PCT: "def%",
  EM: "em",
  ER: "er",

// クリティカル・回復
CRIT_RATE: "cr",
CRIT_DMG: "cd",
CRIT: "crd",
HEAL_BONUS: "heal",

// ダメージ系
PHYSICAL_DMG: "physical_dmg",
PYRO_DMG: "pyro_dmg",
HYDRO_DMG: "hydro_dmg",
ELECTRO_DMG: "electro_dmg",
CRYO_DMG: "cryo_dmg",
DENDRO_DMG: "dendro_dmg",
ANEMO_DMG: "anemo_dmg",
GEO_DMG: "geo_dmg"
};

/**

* 表示用ラベル
  */
  export const STAT_LABEL = {
  "hp%": "HP%",
  "atk%": "攻撃力%",
  "def%": "防御力%",
  "em": "元素熟知",
  "er": "元素チャージ効率",

"cr": "会心率",
"cd": "会心ダメージ",
"crd": "会心２種",
"heal": "与える治療効果",

"physical_dmg": "物理ダメージ",
"pyro_dmg": "炎元素ダメージ",
"hydro_dmg": "水元素ダメージ",
"electro_dmg": "雷元素ダメージ",
"cryo_dmg": "氷元素ダメージ",
"dendro_dmg": "草元素ダメージ",
"anemo_dmg": "風元素ダメージ",
"geo_dmg": "岩元素ダメージ"
};

/**

* 部位ごとの許可メインステ（バリデーション用）
  */
  export const ALLOWED_MAIN_STATS = {
  [PARTS.SANDS]: [
  MAIN_STATS.ATK_PCT,
  MAIN_STATS.ER,
  MAIN_STATS.EM,
  MAIN_STATS.HP_PCT,
  MAIN_STATS.DEF_PCT
  ],

[PARTS.GOBLET]: [

MAIN_STATS.ATK_PCT,
MAIN_STATS.PHYSICAL_DMG,
MAIN_STATS.PYRO_DMG,
MAIN_STATS.HYDRO_DMG,
MAIN_STATS.ELECTRO_DMG,
MAIN_STATS.CRYO_DMG,
MAIN_STATS.DENDRO_DMG,
MAIN_STATS.ANEMO_DMG,
MAIN_STATS.GEO_DMG,
MAIN_STATS.EM,
MAIN_STATS.HP_PCT,
MAIN_STATS.DEF_PCT
],

[PARTS.CIRCLET]: [

MAIN_STATS.CRIT,
MAIN_STATS.CRIT_RATE,
MAIN_STATS.CRIT_DMG,
MAIN_STATS.EM,
MAIN_STATS.ATK_PCT,
MAIN_STATS.HP_PCT,
MAIN_STATS.DEF_PCT,
MAIN_STATS.HEAL_BONUS
]
};
