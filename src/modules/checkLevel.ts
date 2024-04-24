export async function checkPlayerLevel(level: number, item: string) {
  if (
    item == "epic_armor" ||
    "epic_helmet" ||
    "epic_gloves" ||
    "epic_boots" ||
    "gale_longsword" ||
    "molten_greataxe" ||
    "tidal_trident" ||
    "gaia_battlehammer" ||
    "feeblemind" ||
    "divine_intervention" ||
    "disarm" ||
    "demoralize" ||
    "life_totem" ||
    "holy_water" ||
    "regen_ring" ||
    "poison_vial"
  ) {
    if (level >= 4) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
export async function checkItemLevel(item: string) {
  switch (item) {
    case "epic_armor": {
      return true;
    }
    case "epic_helmet": {
      return true;
    }
    case "epic_boots": {
      return true;
    }
    case "epic_gloves": {
      return true;
    }
    case "rare_armor": {
      return false;
    }
    case "rare_helmet": {
      return false;
    }
    case "rare_boots": {
      return false;
    }
    case "rare_gloves": {
      return false;
    }
    case "gale_shortsword": {
      return false;
    }
    case "tidal_spear": {
      return false;
    }
    case "molten_axe": {
      return false;
    }
    case "gaia_mace": {
      return false;
    }
    case "gale_longsword": {
      return true;
    }
    case "tidal_trident": {
      return true;
    }
    case "molten_greataxe": {
      return true;
    }
    case "gaia_battlehammer": {
      return true;
    }
    case "fireball": {
      return false;
    }
    case "heal": {
      return false;
    }
    case "feeblemind": {
      return true;
    }
    case "divine_intervention": {
      return true;
    }
    case "combat_tactics": {
      return false;
    }
    case "stun_attack": {
      return false;
    }
    case "disarm": {
      return true;
    }
    case "demoralize": {
      return true;
    }
    case "life_totem": {
      return true;
    }
    case "holy_water": {
      return true;
    }
    case "regen_ring": {
      return true;
    }
    case "poison_vial": {
      return true;
    }
    default: {
      return false;
    }
  }
}
export async function checkName(item: string) {
  switch (item) {
    case "epic_armor": {
      return "Epic Armor" as string;
    }
    case "epic_helmet": {
      return "Epic Helmet" as string;
    }
    case "epic_boots": {
      return "Epic Boots" as string;
    }
    case "epic_gloves": {
      return "Epic Gloves" as string;
    }
    case "rare_armor": {
      return "Rare Armor" as string;
    }
    case "rare_helmet": {
      return "Rare Helmet" as string;
    }
    case "rare_boots": {
      return "Rare Boots" as string;
    }
    case "rare_gloves": {
      return "Rare Gloves" as string;
    }
    case "gale_shortsword": {
      return "Gale Shortsword" as string;
    }
    case "tidal_spear": {
      return "Tidal Spear" as string;
    }
    case "molten_axe": {
      return "Molten Axe" as string;
    }
    case "gaia_mace": {
      return "Gaia Mace" as string;
    }
    case "gale_longsword": {
      return "Gale Longsword" as string;
    }
    case "tidal_trident": {
      return "Tidal Trident" as string;
    }
    case "molten_greataxe": {
      return "Molten Greataxe" as string;
    }
    case "gaia_battlehammer": {
      return "Gaia Battlehammer" as string;
    }
    case "fireball": {
      return "Fireball" as string;
    }
    case "heal": {
      return "Heal" as string;
    }
    case "feeblemind": {
      return "Feeblemind" as string;
    }
    case "divine_intervention": {
      return "Divine Intervention" as string;
    }
    case "combat_tactics": {
      return "Combat Tactics" as string;
    }
    case "stun_attack": {
      return "Stune Mine" as string;
    }
    case "disarm": {
      return "Disarm" as string;
    }
    case "demoralize": {
      return "Demoralize" as string;
    }
    case "life_totem": {
      return "Life Totem" as string;
    }
    case "holy_water": {
      return "Holy Water" as string;
    }
    case "regen_ring": {
      return "Regen Ring" as string;
    }
    case "poison_vial": {
      return "Poison Vial" as string;
    }
    default: {
      return false;
    }
  }
}
/*
export async function checkExp(exp: number) {
  const level2 = 100;
  const level3 = 250;
  const level4 = 600;
  const level5 = 1350;
  const level6 = 3000;
  const level7 = 7000;
  const level8 = 16000;
  const level9 = 350000;

  if (exp >= level9) {
    return 9;
  }
}
*/
