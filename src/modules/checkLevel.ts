export async function checkPlayerLevel(level: number, item: string) {
  if (
    item == "steel_breastplate" ||
    "steel_helm" ||
    "steel_gauntlets" ||
    "steel_greaves" ||
    "steel_longsword" ||
    "steel_greataxe" ||
    "heavy_crossbow" ||
    "musket_rifle" ||
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
    case "steel_breastplate": {
      return true;
    }
    case "steel_helm": {
      return true;
    }
    case "steel_greaves": {
      return true;
    }
    case "steel_gauntlets": {
      return true;
    }
    case "leather_cuirass": {
      return false;
    }
    case "leather_helmet": {
      return false;
    }
    case "leather_boots": {
      return false;
    }
    case "leather_gloves": {
      return false;
    }
    case "steel_dagger": {
      return false;
    }
    case "hand_crossbow": {
      return false;
    }
    case "steel_mace": {
      return false;
    }
    case "musket_pistol": {
      return false;
    }
    case "steel_longsword": {
      return true;
    }
    case "heavy_crossbow": {
      return true;
    }
    case "steel_greataxe": {
      return true;
    }
    case "musket_rifle": {
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
    case "steel_breastplate": {
      return "Steel Breastplate" as string;
    }
    case "steel_helm": {
      return "Steel Helm" as string;
    }
    case "steel_greaves": {
      return "Steel Boots" as string;
    }
    case "steel_gauntlets": {
      return "Steel Gauntlets" as string;
    }
    case "leather_cuirass": {
      return "Leather Cuirass" as string;
    }
    case "leather_helmet": {
      return "Leather Helmet" as string;
    }
    case "leather_boots": {
      return "Leather Boots" as string;
    }
    case "leather_gloves": {
      return "Leather Gloves" as string;
    }
    case "steel_dagger": {
      return "Steel Dagger" as string;
    }
    case "hand_crossbow": {
      return "Hand Crossbow" as string;
    }
    case "steel_mace": {
      return "Steel Mace" as string;
    }
    case "musket_pistol": {
      return "Musket Pistol" as string;
    }
    case "steel_longsword": {
      return "Steel Longsword" as string;
    }
    case "heavy_crossbow": {
      return "Heavy Crossbow" as string;
    }
    case "steel_greataxe": {
      return "Steel Greataxe" as string;
    }
    case "musket_rifle": {
      return "Musket Rifle" as string;
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
